// ==UserScript==
// @name        WME OpenMaps
// @namespace   http://www.tomputtemans.com/
// @description Add additional layer containing maps that are released as open data to Waze Map Editor
// @include     https://www.waze.com/*/editor/*
// @include     https://www.waze.com/editor/*
// @include     https://editor-beta.waze.com/*
// @version     1.1
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
			// Geopunt: Flanders (Belgium)
			new OL.Layer.WMS('Geopunt GRB',
				'https://grb.agiv.be/geodiensten/raadpleegdiensten/GRB/wms',
				{ layers: "GRB_Basiskaart" }
			)
		];
		Waze.map.addLayers(layers);
		if (typeof localStorage.OM_opacity == 'undefined') {
			localStorage.OM_opacity = 100;
		}

		var opacityDiv = document.createElement('div');
		opacityDiv.className = 'WazeControlLocationInfo';
		opacityDiv.style.position = 'absolute';
		opacityDiv.style.right = '20px';
		opacityDiv.style.left = 'auto';
		opacityDiv.style.top = '40px';
		opacityDiv.style.zIndex = 1020;
		opacityDiv.style.display = 'none';
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
		opacityDiv.appendChild(document.createTextNode('Opacity: '));
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