// ==UserScript==
// @name        WME OpenMaps
// @namespace   http://www.tomputtemans.com/
// @description Add additional layer containing maps that are released as open data to Waze Map Editor
// @include     https://www.waze.com/*/editor/*
// @include     https://www.waze.com/editor/*
// @include     https://editor-beta.waze.com/*
// @version     1.0
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

		var geopunt = new OL.Layer.WMS('Geopunt GRB',
			'https://grb.agiv.be/geodiensten/raadpleegdiensten/GRB/wms',
			{ layers: "GRB_Basiskaart" }
		);
		Waze.map.addLayer(geopunt);
		Waze.map.events.register('zoomend', null, function() {
			geopunt.redraw();
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