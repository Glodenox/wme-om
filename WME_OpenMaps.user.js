// ==UserScript==
// @name        WME OpenMaps
// @namespace   http://www.tomputtemans.com/
// @description Add an additional layer containing maps that are released as open data to Waze Map Editor
// @include     https://www.waze.com/*/editor/*
// @include     https://www.waze.com/editor/*
// @include     https://editor-beta.waze.com/*
// @version     1.3
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

		var layers = [
			// AGIV: Vlaanderen (Belgium)
			// <Fees>Het gebruiksrecht is te vinden op http://www.agiv.be/gis/diensten/?artid=1442</Fees>
			// <AccessConstraints>geen</AccessConstraints>
			new OL.Layer.WMS('AGIV GRB',
				'https://grb.agiv.be/geodiensten/raadpleegdiensten/GRB/wms',
				{ layers: "GRB_Basiskaart", format: "image/png" },
				{ transitionEffect: "resize", tileSize: new OL.Size(512,512) }
			),
			// Projet Informatique de Cartographie Continue: Wallonie (Belgium)
			// <Fees></Fees>
			// <AccessConstraints></AccessConstraints>
			new OL.Layer.WMS('PICC topographie',
				'http://geoservices.wallonie.be/arcgis/services/TOPOGRAPHIE/PICC/MapServer/WMSServer',
				{ layers: "1,2,3,5,6,8,24,25,33,48,49,50,52,53,54,55,56,58,59,60", format: "image/png" },
				{ transitionEffect: "resize", tileSize: new OL.Size(512,512), projection: new OL.Projection("EPSG:3857") }
			)
		];
		Waze.map.addLayers(layers);
		if (typeof localStorage.OM_opacity == 'undefined') {
			localStorage.OM_opacity = 100;
		}
		// set up language string
		var om_strings = {
			en: {
				opacity_label: "Opacity"
			},
			nl: {
				opacity_label: "Doorzichtigheid"
			},
			fr: {
				opacity_label: "Opacité"
			}
		};
		om_strings['en_GB'] = om_strings.en;
		I18n.availableLocales.map(function(locale) {
			if (I18n.translations[locale]) {
				I18n.translations[locale].openmaps = om_strings[locale];
			}
		});

		var opacityDiv = document.createElement('div');
		opacityDiv.style.position = 'absolute';
		opacityDiv.style.display = 'none';
		opacityDiv.style.zIndex = 1020;
		if (document.getElementById('topbar-container')) { // new layout
			opacityDiv.style.top = "0";
			opacityDiv.style.right = "0";
			opacityDiv.style.backgroundColor = "#3d3d3d";
			opacityDiv.style.padding = "5px";
			opacityDiv.style.color = "#fff";
			opacityDiv.style.fontWeight = "bold";
			opacityDiv.style.borderBottomLeftRadius = "8px";
		} else {
			opacityDiv.className = 'WazeControlLocationInfo';
			opacityDiv.style.right = '20px';
			opacityDiv.style.left = 'auto';
			opacityDiv.style.top = '40px';
		}
		var opacitySlider = document.createElement('input');
		opacitySlider.type = 'range';
		opacitySlider.max = 100;
		opacitySlider.min = 5;
		opacitySlider.step = 5;
		opacitySlider.value = localStorage.OM_opacity;
		opacitySlider.style.verticalAlign = 'middle';
		opacitySlider.addEventListener('input', function() {
			layers.map(function(layer) {
				layer.setOpacity(opacitySlider.value / 100);
			});
			localStorage.OM_opacity = opacitySlider.value;
		});
		opacityDiv.appendChild(document.createTextNode(I18n.t('openmaps.opacity_label') + ': '));
		opacityDiv.appendChild(opacitySlider);
		document.getElementById('WazeMap').appendChild(opacityDiv);
		layers.map(function(layer) {
			layer.events.register('visibilitychanged', null, function(e) {
				opacityDiv.style.display = (layer.visibility ? 'block' : 'none');
			});
			layer.setOpacity(localStorage.OM_opacity / 100);
		});

		// Necessary as the layer doesn't update when a zoom has occurred
		Waze.map.events.register('zoomend', null, function() {
			layers.map(function(layer) {
				layer.redraw();
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