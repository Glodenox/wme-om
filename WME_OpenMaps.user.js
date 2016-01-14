// ==UserScript==
// @name        WME OpenMaps
// @namespace   http://www.tomputtemans.com/
// @description Add an additional layer containing maps that are released as open data to Waze Map Editor
// @include     https://www.waze.com/*/editor/*
// @include     https://www.waze.com/editor/*
// @include     https://editor-beta.waze.com/*
// @exclude     https://www.waze.com/user/*editor/*
// @version     2.3.0-SNAPSHOT
// @grant       GM_xmlhttpRequest
// ==/UserScript==
(function() {
  function init() {
    // Variables needed in their 'unsafe' context
    var OL = unsafeWindow.OL,
    Waze = unsafeWindow.Waze,
    I18n = unsafeWindow.I18n;
    // Check initialisation
    if (typeof Waze === 'undefined' || typeof Waze.map === 'undefined') {
      setTimeout(init, 660);
      log('Waze object unavailable, map still loading');
      return;
    }
    if (typeof Waze.model === 'undefined' || typeof Waze.model.countries === 'undefined' || typeof Waze.model.countries.top === 'undefined') {
      setTimeout(init, 660);
      log('Top country unavailable, still loading');
      return;
    }
    log('OM initated');
    // set up language string
    var om_strings = {
      en: {
        opacity_label: 'Opacity',
        tab_title: 'Open Maps',
        no_map_selected: 'No map',
        maptype: {
          cadastre: 'Cadastre',
          satellite: 'Satellite'
        }
      },
      nl: {
        opacity_label: 'Doorzichtigheid',
        tab_title: 'Open Maps',
        no_map_selected: 'Geen kaart',
        maptype: {
          cadastre: 'Kadaster',
          satellite: 'Satelliet'
        }
      },
      fr: {
        opacity_label: 'Opacité',
        tab_title: 'Open Maps',
        no_map_selected: 'Aucune carte',
        maptype: {
          cadastre: 'Cadastre',
          satellite: 'Satellite'
        }
      }
    };
    om_strings.en_GB = om_strings.en;
    for (var i = 0; i < I18n.availableLocales.length; i++) {
      var locale = I18n.availableLocales[i];
      if (I18n.translations[locale]) {
        I18n.translations[locale].openmaps = cloneInto(om_strings[locale], unsafeWindow);
      }
    }
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
      emptyLayer = new OL.Layer('Open Maps'),
      activeLayer = emptyLayer,
      opacitySlider = document.createElement('input'),
      opacityLabel = document.createElement('label'),
      opacityDiv = document.createElement('div');
      openMapsTab.innerHTML = '<a href="#sidepanel-openMaps" data-toggle="tab" title="' + I18n.t('openmaps.tab_title') + '"><span class="fa icon-"></span></a>';
      openMapsContent.id = 'sidepanel-openMaps';
      openMapsContent.className = 'tab-pane';
      openMapsTitle.appendChild(document.createTextNode(I18n.t('openmaps.tab_title')));
      openMapsTitle.style.marginBottom = '5px';
      openMapsContent.appendChild(openMapsTitle);
      openMapsSelector.className = 'form-control';
      noMapOption.appendChild(document.createTextNode(I18n.t('openmaps.no_map_selected')));
      noMapOption.layer = emptyLayer;
      openMapsSelector.appendChild(noMapOption);
      openMapsSelector.addEventListener('change', function (event) {
        localStorage.OM_previousMap = openMapsSelector.options[openMapsSelector.selectedIndex].value;
        replaceLayer(openMapsSelector.options[openMapsSelector.selectedIndex].layer);
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
      opacitySlider.id = 'openmapsOpacity';
      opacitySlider.value = localStorage.OM_opacity;
      opacitySlider.style.verticalAlign = 'middle';
      opacitySlider.addEventListener('input', function() {
        maps.forEach(function (map) {
          map.layer.setOpacity(opacitySlider.value / 100);
        });
        localStorage.OM_opacity = opacitySlider.value;
      });
      opacityLabel.appendChild(document.createTextNode(I18n.t('openmaps.opacity_label') + ':'));
      opacityLabel.className = 'control-label';
      opacityLabel.style.marginRight = '10px';
      opacityLabel.for = 'openmapsOpacity';
      opacityDiv.appendChild(opacityLabel);
      opacityDiv.appendChild(opacitySlider);
      openMapsContent.appendChild(opacityDiv);
      try {
        footer.appendChild(document.createTextNode(GM_info.script.name + ': v' + GM_info.script.version));
      } catch (e) {
        // Probably no support for GM_info, ignore
      }
      footer.style.fontSize = '11px';
      openMapsContent.appendChild(footer);
      Waze.map.addLayer(emptyLayer);
      // Necessary as the layer doesn't update when a zoom has occurred
      Waze.map.events.register('zoomend', null, exportFunction(function() {
        if (activeLayer) {
          activeLayer.redraw();
        }
      }, unsafeWindow));
      // Start listening to any event that changes the maps extent and add/remove the layers as such
      Waze.map.events.register('moveend', null, exportFunction(function() {
        maps.forEach(function (map) {
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
        });
      }, unsafeWindow));
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
      // Obtain the capabilities of a map server
     /* function getCapabilities(url, callback) {
        var capabilitiesUrl = url;
        // Check how to add the request=GetCapabilities parameter (or remove it for the final URL if it is specified)
        if (url.indexOf('?') !== false) {
          if (url.indexOf('request=GetCapabilities') === false) {
            capabilitiesUrl = url + '&request=GetCapabilities';
          }
        } else {
          capabilitiesUrl = url + '?request=GetCapabilities';
        }

        // Check whether available as HTTPS as this is generally better
        if (url.startsWith('http:')) {
          console.log('Attempting HTTPS version of URL first', url);
          getCapabilities(capabilitiesUrl.replace(/^http:/, 'https:'), function(result) {
            if (result !== null) {
              callback(result);
            } else {
              retrievePage()
            }
          });
        } else {
          retrievePage(capabilitiesUrl, callback) {
            
          }
        }

        function retrievePage(url, callback) {
          GM_xmlhttpRequest({
            method: 'GET',
            url: url,
            timeout: 10000,
            onload: function (response) {
              console.log(response.responseXML.evaluate('//wms:Service/wms:Title/text()', response.responseXML, nsResolver, XPathResult.STRING_TYPE, null));

            },
            ontimeout: function() {
              console.log('Capabilities timeout');
            }
          });
        }
        
        function nsResolver(prefix) {
          switch (prefix) {
            case 'wms':
              return 'http://www.opengis.net/wms';
              break;
            default:
              return null;
          }
        }

        function extractData(node, obj) {
          if (obj === null) {
            obj = {};
          }
          for (var i = 0; i < node.childNodes.length; i++) {
            if (node.childNodes[i].nodeName === 'Title') {
              return node.childNodes[i].textContent;
            }
            var title = extractData(node.childNodes[i]);
            if (title) {
              return title;
            }
          }
        }
      }
      // https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB-basiskaart/wms?request=GetCapabilities&service=WMS
      getCapabilities('http://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB-basiskaart/wms?request=GetCapabilities&service=WMS');*/
      
      return {
        addMap: function (id, name, category, format, url, inArea, parameters, optionList) {
          var params = cloneInto({
            layers: parameters.layers,
            transparent: parameters.transparent || true,
            format: parameters.format || 'image/png'
          }, unsafeWindow),
          options = cloneInto({
            transitionEffect: 'resize',
            attribution: optionList.attribution
          }, unsafeWindow);
          options.tileSize = (optionList.tileSize ? new OL.Size(optionList.tileSize, optionList.tileSize)  : new OL.Size(512, 512));
          if (optionList.projection) {
            options.projection = new OL.Projection(optionList.projection);
          }
          var layer = new OL.Layer.WMS(I18n.t('openmaps.tab_title'), url, params, options),
          option = document.createElement('option'),
          areaCheck = inArea;
          if (typeof areaCheck === 'string') {
            areaCheck = function() {
              return Waze.model.countries.top.abbr === inArea;
            };
          }
          var listed = areaCheck();
          option.appendChild(document.createTextNode(name));
          option.layer = layer;
          option.value = id;
          layer.setOpacity(localStorage.OM_opacity / 100);
          // Append to select box if the map is in the current area
          if (listed) {
            if (!categories[category]) {
              var optgroup = document.createElement('optgroup');
              optgroup.label = I18n.t('openmaps.maptype.' + category);
              categories[category] = optgroup;
              openMapsSelector.appendChild(optgroup);
            }
            categories[category].appendChild(option);
            // Select the map again if it was selected at the end of the previous session
            if (localStorage.OM_previousMap == id) {
              openMapsSelector.selectedIndex = option.index;
              openMapsSelector.dispatchEvent(new Event('change'));
            }
          }
          maps.push({
            name: name,
            category: category,
            inArea: areaCheck,
            layer: layer,
            option: option,
            listed: listed
          });
        }
      };
    })();

    // AGIV: Vlaanderen (Belgium)
    // <Fees>Gratis</Fees>
    // <AccessConstraints>Door het gebruik van deze service, is de gebruiker verplicht zich te houden aan de toegangs- en gebruiksbepalingen van de in deze service aangeboden gegevens.</AccessConstraints>
    OpenMaps.addMap(3201, 'AGIV', 'cadastre', 'WMS', 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB-basiskaart/wms', function() {
      var bounds = new OL.Bounds(280525, 6557859, 661237, 6712007);
      return bounds.intersectsBounds(Waze.map.getExtent());
    }, {
      layers: 'GRB_BSK'
    }, {
      attribution: 'Agentschap voor Geografische Informatie Vlaanderen'
    });
    // AGIV: Vlaanderen (Belgium)
    // <Fees>Gratis</Fees>
    // <AccessConstraints>Door het gebruik van deze service, is de gebruiker verplicht zich te houden aan de toegangs- en gebruiksbepalingen van de in deze service aangeboden gegevens.</AccessConstraints>
    OpenMaps.addMap(3202, 'AGIV', 'satellite', 'WMS', 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/omwrgbmrvl/wms', function() {
      var bounds = new OL.Bounds(280525, 6557859, 661237, 6712007);
      return bounds.intersectsBounds(Waze.map.getExtent());
    }, {
      layers: 'Ortho'
    }, {
      projection: 'EPSG:3857',
      attribution: 'Agentschap voor Geografische Informatie Vlaanderen'
    });
    // Projet Informatique de Cartographie Continue: Wallonie (Belgium)
    // <Fees></Fees>
    // <AccessConstraints></AccessConstraints>
    OpenMaps.addMap(3203, 'PICC', 'cadastre', 'WMS', 'https://geoservices.wallonie.be/arcgis/services/TOPOGRAPHIE/PICC/MapServer/WMSServer', 'BE', {
      layers: '1,2,3,5,6,8,24,25,33,48,49,50,52,53,54,55,56,58,59,60'
    }, {
      projection: 'EPSG:3857',
      attribution: 'Région wallonne'
    });
    // Brussels NL (Belgium)
    // <Fees>NONE</Fees>
    // <AccessConstraints>NONE</AccessConstraints>
    OpenMaps.addMap(3204, 'Irisnet NL', 'cadastre', 'WMS', 'http://geoserver.gis.irisnet.be/geoserver/wms', function() {
      var bounds = new OL.Bounds(471578, 6579050, 499555, 6606337);
      return bounds.intersectsBounds(Waze.map.getExtent());
    }, {
      layers: 'urbisNL'
    }, {
      projection: 'EPSG:31370',
      attribution: 'Irisnet GIS'
    });
    // Brussels FR (Belgium)
    // <Fees>NONE</Fees>
    // <AccessConstraints>NONE</AccessConstraints>
    OpenMaps.addMap(3205, 'Irisnet FR', 'cadastre', 'WMS', 'http://geoserver.gis.irisnet.be/geoserver/wms', function() {
      var bounds = new OL.Bounds(471578, 6579050, 499555, 6606337);
      return bounds.intersectsBounds(Waze.map.getExtent());
    }, {
      layers: 'urbisFR'
    }, {
      projection: 'EPSG:31370',
      attribution: 'Irisnet GIS'
    });
    // BAG WMS (The Netherlands)
    // <Fees>NONE</Fees>
    // <AccessConstraints>HotherRestrictions; Geen beperkingen; http://creativecommons.org/publicdomain/zero/1.0/deed.nl</AccessConstraints>
    OpenMaps.addMap(3101, 'BAG', 'cadastre', 'WMS', 'https://geodata.nationaalgeoregister.nl/bag/wms', 'NL', {
      layers: 'ligplaats,pand,verblijfsobject,woonplaats,standplaats'
    }, {
      attribution: 'PDOK'
    });
    // Luchtfoto's Bij12 (The Netherlands)
    OpenMaps.addMap(3102, 'Luchtfoto 2014', 'satellite', 'WMS', 'http://webservices.gbo-provincies.nl/lufo/services/wms?', 'NL', {
      layers: 'actueel_zomer'
    }, {
      projection: 'EPSG:28992',
      attribution: 'GBO provincies'
    });
    // Weggegevens WMS (The Netherlands)
    // <Fees>NONE</Fees>
    // <AccessConstraints>Geen beperkingen; http://creativecommons.org/publicdomain/zero/1.0/deed.nl</AccessConstraints>
    OpenMaps.addMap(3103, 'Weggegevens', 'cadastre', 'WMS', 'https://geodata.nationaalgeoregister.nl/weggeg/wms', 'NL', {
      layers: 'weggegaantalrijbanen,weggegmaximumsnelheden'
    }, {
      attribution: 'PDOK'
    });
    // BGT (The Netherlands)
    // <Fees>NONE</Fees>
    // <AccessConstraints>Geen beperkingen; http://creativecommons.org/publicdomain/zero/1.0/deed.nl</AccessConstraints>
    OpenMaps.addMap(3104, 'BGT', 'cadastre', 'WMS', 'https://geodata.nationaalgeoregister.nl/bgt/wms?', 'NL', {
      layers: 'bgtomtrekgericht,bgtvulling'
    }, {
      projection: 'EPSG:28992'
    }, {
      attribution: 'PDOK'
    });
    // To investigate in the future:
    // * ruimtelijkeplannen.nl
    //     http://www.ruimtelijkeplannen.nl/web-roo/docs/afnemers/Uitleg_WMS_WFS_en_tiled_services.pdf
    //     http://afnemers.ruimtelijkeplannen.nl/afnemers/services?request=GetCapabilities&version=1.1.1&service=WMS
  }

  function log(message) {
    console.log('%cWME Open Maps: %c' + message, 'color:black', 'color:#d97e00');
  }

  // attempt to bootstrap after about a second, arbitrary number
  // TODO: 
  log('initiated');
  setTimeout(init, 1020);
})();
