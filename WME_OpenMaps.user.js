// ==UserScript==
// @name        WME OpenMaps
// @namespace   http://www.tomputtemans.com/
// @description Add an additional layer containing maps that are released as open data to Waze Map Editor
// @include     https://www.waze.com/*/editor/*
// @include     https://www.waze.com/editor/*
// @include     https://editor-beta.waze.com/*
// @version     1.4
// @grant       none
// ==/UserScript==

(function() {
	function omInit() {
		// Check initialisation
		if (typeof Waze == 'undefined' || typeof Waze.map == 'undefined') {
			setTimeout(omInit, 660);
			log('Waze object unavailable, map still loading');
			return;
		}
		log('OM initated');

		// set up language string
		var om_strings = {
			en: {
				opacity_label: "Opacity",
				maptype: {
					cadastre: "Cadastre",
					satellite: "Satellite"
				}
			},
			nl: {
				opacity_label: "Doorzichtigheid",
				maptype: {
					cadastre: "Kadaster",
					satellite: "Satelliet"
				}
			},
			fr: {
				opacity_label: "Opacité",
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
		
		var maps = [
			{
				// AGIV: Vlaanderen (Belgium)
				// <Fees>Het gebruiksrecht is te vinden op http://www.agiv.be/gis/diensten/?artid=1442</Fees>
				// <AccessConstraints>geen</AccessConstraints>
				layer: new OL.Layer.WMS(I18n.t('openmaps.maptype.cadastre') + ': AGIV',
																'https://grb.agiv.be/geodiensten/raadpleegdiensten/GRB/wms',
																{ layers: "GRB_Basiskaart", format: "image/png" },
																{ transitionEffect: "resize", tileSize: new OL.Size(512,512), attribution: "Agentschap voor Geografische Informatie Vlaanderen" }
															 ),
				inArea: function() {
					var bounds = new OL.Bounds(280525, 6557859, 661237, 6712007);
					return bounds.intersectsBounds(Waze.map.getExtent());
				}
			}, {
				// Projet Informatique de Cartographie Continue: Wallonie (Belgium)
				// <Fees></Fees>
				// <AccessConstraints></AccessConstraints>
				layer: new OL.Layer.WMS(I18n.t('openmaps.maptype.cadastre') + ': PICC',
																'https://geoservices.wallonie.be/arcgis/services/TOPOGRAPHIE/PICC/MapServer/WMSServer',
																{ layers: "1,2,3,5,6,8,24,25,33,48,49,50,52,53,54,55,56,58,59,60", format: "image/png" },
																{ transitionEffect: "resize", tileSize: new OL.Size(512,512), projection: new OL.Projection("EPSG:3857"), attribution: "Région wallonne" }
															 ),
				inArea: function() {
					return Waze.model.countries.top.abbr === 'BE';
				}
			}, {
				// Nationaal Wegen Bestand WMS (The Netherlands)
				// <Fees>NONE</Fees>
				// <AccessConstraints>Geen beperkingen; http://creativecommons.org/publicdomain/zero/1.0/deed.nl</AccessConstraints>
				layer: new OL.Layer.WMS(I18n.t('openmaps.maptype.cadastre') + ': Nationaal Wegenbestand',
																'https://geodata.nationaalgeoregister.nl/nwbwegen/wms',
																{ layers: "wegvakken,hectopunten", format: "image/png" },
																{ transitionEffect: "resize", tileSize: new OL.Size(512,512) }
															 ),
				inArea: function() {
					return Waze.model.countries.top.abbr === 'NL';
				}
			}, {
				// BAG WMS (The Netherlands)
				// <Fees>NONE</Fees>
				// <AccessConstraints>HotherRestrictions; Geen beperkingen; http://creativecommons.org/publicdomain/zero/1.0/deed.nl</AccessConstraints>
				layer: new OL.Layer.WMS(I18n.t('openmaps.maptype.cadastre') + ': BAG',
																'https://geodata.nationaalgeoregister.nl/bag/wms',
																{ layers: "ligplaats,pand,verblijfsobject,woonplaats,standplaats", format: "image/png" },
																{ transitionEffect: "resize", tileSize: new OL.Size(512,512) }
															 ),
				inArea: function() {
					return Waze.model.countries.top.abbr === 'NL';
				}
			}, {
				// Weggegevens WMS (The Netherlands)
				// <Fees>NONE</Fees>
				// <AccessConstraints>Geen beperkingen; http://creativecommons.org/publicdomain/zero/1.0/deed.nl</AccessConstraints>
				layer: new OL.Layer.WMS(I18n.t('openmaps.maptype.cadastre') + ': Weggegevens',
																'https://geodata.nationaalgeoregister.nl/weggeg/wms',
																{ layers: "weggegaantalrijbanen,weggegmaximumsnelheden", format: "image/png" },
																{ transitionEffect: "resize", tileSize: new OL.Size(512,512) }
															 ),
				inArea: function() {
					return Waze.model.countries.top.abbr === 'NL';
				}
			}
		];
		// Initial setup based on current location
		Waze.map.addLayers(maps
											 .filter(function(mapObj) { return mapObj.inArea(); })
											 .map(function(mapObj) { return mapObj.layer; })
											);
  	// Start listening to any event that changes the maps extent and add/remove the layers as such
		Waze.map.events.register("moveend", null, function() {
			maps.forEach(function(map) {
				if (map.layer.map && !map.inArea()) {
					Waze.map.removeLayer(map.layer);
				} else if (!map.layer.map && map.inArea()) {
					Waze.map.addLayer(map.layer);
				}
			})
		});
		
		if (typeof localStorage.OM_opacity == 'undefined') {
			localStorage.OM_opacity = 100;
		}

		var opacityDiv = document.createElement('div');
		opacityDiv.style.position = 'absolute';
		opacityDiv.style.display = 'none';
		opacityDiv.style.zIndex = 1020;
		opacityDiv.style.top = "0";
		opacityDiv.style.right = "0";
		opacityDiv.style.backgroundColor = "#3d3d3d";
		opacityDiv.style.padding = "5px";
		opacityDiv.style.color = "#fff";
		opacityDiv.style.fontWeight = "bold";
		opacityDiv.style.borderBottomLeftRadius = "8px";
		
		var opacitySlider = document.createElement('input');
		opacitySlider.type = 'range';
		opacitySlider.max = 100;
		opacitySlider.min = 5;
		opacitySlider.step = 5;
		opacitySlider.value = localStorage.OM_opacity;
		opacitySlider.style.verticalAlign = 'middle';
		opacitySlider.addEventListener('input', function() {
			maps.map(function(map) {
				map.layer.setOpacity(opacitySlider.value / 100);
			});
			localStorage.OM_opacity = opacitySlider.value;
		});
		opacityDiv.appendChild(document.createTextNode(I18n.t('openmaps.opacity_label') + ': '));
		opacityDiv.appendChild(opacitySlider);
		document.getElementById('WazeMap').appendChild(opacityDiv);
		maps.map(function(map) {
			map.layer.events.register('visibilitychanged', null, function(e) {
				opacityDiv.style.display = (map.layer.visibility ? 'block' : 'none');
			});
			map.layer.setOpacity(localStorage.OM_opacity / 100);
		});

		// Necessary as the layer doesn't update when a zoom has occurred
		Waze.map.events.register('zoomend', null, function() {
			maps.forEach(function(map) {
				map.layer.redraw();
			});
		});
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