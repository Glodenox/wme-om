// ==UserScript==
// @name        WME OpenMaps
// @namespace   http://www.tomputtemans.com/
// @description Add an additional layer containing maps that are released as open data to Waze Map Editor
// @include     https://www.waze.com/*/editor/*
// @include     https://www.waze.com/editor/*
// @include     https://editor-beta.waze.com/*
// @version     2.0
// @grant       none
// ==/UserScript==

(function() {
	function omInit() {
		// Check initialisation
		if (typeof Waze === 'undefined' || typeof Waze.map === 'undefined' || typeof Waze.model.countries.top === 'undefined') {
			setTimeout(omInit, 660);
			log('Waze object unavailable, map still loading');
			return;
		}
		log('OM initated');

		// set up language string
		var om_strings = {
			en: {
				opacity_label: "Opacity",
				tab_title: "Open Maps",
				no_map_selected: "No map",
				maptype: {
					cadastre: "Cadastre",
					satellite: "Satellite"
				}
			},
			nl: {
				opacity_label: "Doorzichtigheid",
				tab_title: "Open Maps",
				no_map_selected: "Geen kaart",
				maptype: {
					cadastre: "Kadaster",
					satellite: "Satelliet"
				}
			},
			fr: {
				opacity_label: "Opacité",
				tab_title: "Open Maps",
				no_map_selected: "Aucun carte",
				maptype: {
					cadastre: "Cadastre",
					satellite: "Satellite"
				}
			}
		};
		om_strings['en_GB'] = om_strings.en;
		I18n.availableLocales.map(function(locale) {
			if (I18n.translations[locale]) {
				I18n.translations[locale].openmaps = om_strings[locale];
			}
		});
		if (typeof localStorage.OM_opacity == 'undefined') {
			localStorage.OM_opacity = 100;
		}

		var OpenMaps = (function() {
			var userInfo = document.getElementById('user-info'),
					navTabs = userInfo.querySelector('.nav-tabs'),
					tabContent = userInfo.querySelector('.tab-content'),
					openMapsTab = document.createElement('li'),
					openMapsContent = document.createElement('div'),
					openMapsTitle = document.createElement('h4'),
					openMapsSelector = document.createElement('select'),
					noMapOption = document.createElement('option'),
					footer = document.createElement('p'),
					categories = [],
					maps = [],
					emptyLayer = new OL.Layer("Open Maps"),
					activeLayer = emptyLayer,
					opacitySlider = document.createElement('input'),
					opacityLabel = document.createElement('label'),
					opacityDiv = document.createElement('div');

			openMapsTab.innerHTML = '<a href="#sidepanel-openMaps" data-toggle="tab" title="' + I18n.t('openmaps.tab_title') + '"><span class="icon-picture"></span></a>';
			openMapsContent.id = 'sidepanel-openMaps';
			openMapsContent.className = 'tab-pane';
			openMapsTitle.appendChild(document.createTextNode(I18n.t('openmaps.tab_title')));
			openMapsTitle.style.marginBottom = '5px';
			openMapsContent.appendChild(openMapsTitle);
			openMapsSelector.className = 'form-control';
			noMapOption.appendChild(document.createTextNode(I18n.t('openmaps.no_map_selected')));
			noMapOption.layer = emptyLayer;
			openMapsSelector.appendChild(noMapOption);
			openMapsSelector.addEventListener('change', function(event) {
				var layer = openMapsSelector.options[openMapsSelector.selectedIndex].layer;
				replaceLayer(layer);
			});
			openMapsSelector.style.marginBottom = '5px';
			openMapsContent.appendChild(openMapsSelector);
			navTabs.appendChild(openMapsTab);
			tabContent.appendChild(openMapsContent);

			opacityDiv.className = 'form-group';
			opacitySlider.type = 'range';
			opacitySlider.max = 100;
			opacitySlider.min = 5;
			opacitySlider.step = 5;
			opacitySlider.id = "openmapsOpacity";
			opacitySlider.value = localStorage.OM_opacity;
			opacitySlider.style.verticalAlign = 'middle';
			opacitySlider.addEventListener('input', function() {
				maps.forEach(function(map) {
					map.layer.setOpacity(opacitySlider.value / 100);
				});
				localStorage.OM_opacity = opacitySlider.value;
			});
			opacityLabel.appendChild(document.createTextNode(I18n.t('openmaps.opacity_label') + ':'));
			opacityLabel.className = "control-label";
			opacityLabel.style.marginRight = '10px';
			opacityLabel.for = "openmapsOpacity";
			opacityDiv.appendChild(opacityLabel);
			opacityDiv.appendChild(opacitySlider);
			openMapsContent.appendChild(opacityDiv);
			try {
				footer.appendChild(document.createTextNode(GM_info.script.name + ': v' + GM_info.script.version));
			} catch(e) {
				// Probably no support for GM_info, ignore
			}
			footer.style.fontSize = '11px';
			openMapsContent.appendChild(footer);

			Waze.map.addLayer(emptyLayer);
			// Necessary as the layer doesn't update when a zoom has occurred
			Waze.map.events.register('zoomend', null, function() {
				if (activeLayer) {
					activeLayer.redraw();
				}
			});

			// Start listening to any event that changes the maps extent and add/remove the layers as such
			Waze.map.events.register("moveend", null, function() {
				maps.forEach(function(map) {
					if (map.listed && !map.inArea()) {
						if (activeLayer === map.layer) {
							replaceLayer(emptyLayer);
						}
						categories[map.category].removeChild(map.option);
						map.listed = false;
						if (categories[map.category].childNodes.length === 0) {
							openMapsSelector.removeChild(categories[map.category]);
							categories[map.category] = undefined;
						}
					} else if (!map.listed && map.inArea()) {
						if (!categories[map.category]) {
							var optgroup = document.createElement('optgroup');
							optgroup.label = I18n.t('openmaps.maptype.' + map.category);
							categories[map.category] = optgroup;
							openMapsSelector.appendChild(optgroup);
						}
						categories[map.category].appendChild(map.option);
						map.listed = true;
					}
				})
			});
			
			function replaceLayer(targetLayer) {
				if (activeLayer === targetLayer) {
					return;
				}
				var layerIndex = Waze.map.getLayerIndex(activeLayer);
				Waze.map.removeLayer(activeLayer);
				Waze.map.addLayer(targetLayer);
				Waze.map.setLayerIndex(targetLayer, layerIndex);
				targetLayer.setVisibility(true);
				activeLayer = targetLayer;
			}
			
			return {
				addMap: function(name, category, format, url, inArea, params, options) {
					var layer = new OL.Layer.WMS(I18n.t('openmaps.tab_title'), url, params, options),
							option = document.createElement('option'),
							listed = inArea();
					option.appendChild(document.createTextNode(name));
					option.layer = layer;
					layer.events.register('visibilitychanged', null, function(e) {
						opacityDiv.style.display = (layer.visibility ? 'block' : 'none');
					});
					layer.setOpacity(localStorage.OM_opacity / 100);
					if (listed) {
						if (!categories[category]) {
							var optgroup = document.createElement('optgroup');
							optgroup.label = I18n.t('openmaps.maptype.' + category);
							categories[category] = optgroup;
							openMapsSelector.appendChild(optgroup);
						}
						categories[category].appendChild(option);
					}
					
					maps.push({
						name: name,
						category: category,
						inArea: inArea,
						layer: layer,
						option: option,
						listed: listed
					});
				}
			};
		})();

		// AGIV: Vlaanderen (Belgium)
		// <Fees>Het gebruiksrecht is te vinden op http://www.agiv.be/gis/diensten/?artid=1442</Fees>
		// <AccessConstraints>geen</AccessConstraints>
		OpenMaps.addMap('AGIV', 'cadastre', 'WMS', 'https://grb.agiv.be/geodiensten/raadpleegdiensten/GRB/wms', 
										function() {
											var bounds = new OL.Bounds(280525, 6557859, 661237, 6712007);
											return bounds.intersectsBounds(Waze.map.getExtent());
										},
										{ layers: "GRB_Basiskaart", format: "image/png" },
										{ transitionEffect: "resize", tileSize: new OL.Size(512,512), attribution: "Agentschap voor Geografische Informatie Vlaanderen" });

		// Projet Informatique de Cartographie Continue: Wallonie (Belgium)
		// <Fees></Fees>
		// <AccessConstraints></AccessConstraints>
		OpenMaps.addMap('PICC', 'cadastre', 'WMS', 'https://geoservices.wallonie.be/arcgis/services/TOPOGRAPHIE/PICC/MapServer/WMSServer',
										function() {
											return Waze.model.countries.top.abbr === 'BE';
										},
										{ layers: "1,2,3,5,6,8,24,25,33,48,49,50,52,53,54,55,56,58,59,60", format: "image/png" },
										{ transitionEffect: "resize", tileSize: new OL.Size(512,512), projection: new OL.Projection("EPSG:3857"), attribution: "Région wallonne" });

		// Nationaal Wegen Bestand WMS (The Netherlands)
		// <Fees>NONE</Fees>
		// <AccessConstraints>Geen beperkingen; http://creativecommons.org/publicdomain/zero/1.0/deed.nl</AccessConstraints>
		OpenMaps.addMap('Nationaal Wegenbestand', 'cadastre', 'WMS', 'https://geodata.nationaalgeoregister.nl/nwbwegen/wms',
										function() {
											return Waze.model.countries.top.abbr === 'NL';
										},
										{ layers: "wegvakken,hectopunten", format: "image/png" },
										{ transitionEffect: "resize", tileSize: new OL.Size(512,512) });

		// BAG WMS (The Netherlands)
		// <Fees>NONE</Fees>
		// <AccessConstraints>HotherRestrictions; Geen beperkingen; http://creativecommons.org/publicdomain/zero/1.0/deed.nl</AccessConstraints>
		OpenMaps.addMap('BAG', 'cadastre', 'WMS', 'https://geodata.nationaalgeoregister.nl/bag/wms',
										function() {
											return Waze.model.countries.top.abbr === 'NL';
										},
										{ layers: "ligplaats,pand,verblijfsobject,woonplaats,standplaats", format: "image/png" },
										{ transitionEffect: "resize", tileSize: new OL.Size(512,512) });
		
		// Weggegevens WMS (The Netherlands)
		// <Fees>NONE</Fees>
		// <AccessConstraints>Geen beperkingen; http://creativecommons.org/publicdomain/zero/1.0/deed.nl</AccessConstraints>
		OpenMaps.addMap('Weggegevens', 'cadastre', 'WMS', 'https://geodata.nationaalgeoregister.nl/weggeg/wms',
										function() {
											return Waze.model.countries.top.abbr === 'NL';
										},
										{ layers: "weggegaantalrijbanen,weggegmaximumsnelheden", format: "image/png" },
										{ transitionEffect: "resize", tileSize: new OL.Size(512,512) });
		
		// Luchtfoto's Bij12 (The Netherlands)
		OpenMaps.addMap('Luchtfoto 2014', 'satellite', 'WMS', 'http://webservices.gbo-provincies.nl/lufo/services/wms?',
										function() {
											return Waze.model.countries.top.abbr === 'NL';
										},
										{ layers: "actueel_zomer", format: "image/jpeg",isBaseLayer: true},
										{ transitionEffect: "resize", tileSize: new OL.Size(512,512), projection: new OL.Projection("EPSG:28992") });
		
		// BGT (The Netherlands)
		// <Fees>NONE</Fees>
		// <AccessConstraints>Geen beperkingen; http://creativecommons.org/publicdomain/zero/1.0/deed.nl</AccessConstraints>
		OpenMaps.addMap('BGT', 'cadastre', 'WMS', 'https://geodata.nationaalgeoregister.nl/bgt/wms?',
										function() {
											return Waze.model.countries.top.abbr === 'NL';
										},
										{ layers: "bgtomtrekgericht,bgtvulling", format: "image/png" },
										{ transitionEffect: "resize", tileSize: new OL.Size(512,512), projection: new OL.Projection("EPSG:28992") });
		
	}

	function log(message) {
		if (typeof message === 'string') {
			console.log('OM: ' + message);
		} else {
			console.log('OM', message);
		}
	}

	// attempt to bootstrap after about a second
	log('OM bootstrap set');
	setTimeout(omInit, 1020);
})();