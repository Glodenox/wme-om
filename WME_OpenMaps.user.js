// ==UserScript==
// @name        WME OpenMaps
// @namespace   http://www.tomputtemans.com/
// @description Add additional maps that are released as open data to the Waze Map Editor
// @include     https://www.waze.com/*/editor/*
// @include     https://www.waze.com/editor/*
// @include     https://editor-beta.waze.com/*
// @exclude     https://www.waze.com/user/*editor/*
// @icon        data:image/png;base64,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
// @version     2.3.0-SNAPSHOT
// @grant       GM_xmlhttpRequest
// ==/UserScript==
(function() {
  function init(e) {
    if (e && e.user == null) {
      return;
    }
    // Variables needed in their 'unsafe' context
    var OL = unsafeWindow.OL,
        Waze = unsafeWindow.Waze,
        I18n = unsafeWindow.I18n,
        $ = unsafeWindow.$;
    if (typeof Waze === 'undefined' || typeof Waze.map === 'undefined') {
      setTimeout(init, 660);
      log('Waze object unavailable, map still loading');
      return;
    }
    if (typeof Waze.loginManager === 'undefined') {
      setTimeout(init, 100);
      return;
    }
    if (!Waze.loginManager.hasUser()) {
      Waze.loginManager.events.register("login", null, init);
      Waze.loginManager.events.register("loginStatus", null, init);
      return;
    }
    // set up language string
    var om_strings = {
      en: {
        opacity_label: 'Opacity',
        tab_title: 'Open Maps',
        no_local_maps: 'No maps found for this area',
        expand: 'Click to expand',
        collapse: 'Click to collapse',
        errors: {
          network: 'Network error',
          network_description: 'Received the following status code when retrieving tile: ',
          network_console: 'See web console for more details',
          timeout: 'Timeout',
          timeout_description: 'Retrieving error took more than 10s, network issue'
        }
      },
      nl: {
        opacity_label: 'Doorzichtigheid',
        tab_title: 'Open Maps',
        no_local_maps: 'Geen lokale kaarten gevonden'
      },
      fr: {
        opacity_label: 'Opacité',
        tab_title: 'Open Maps',
        no_local_maps: 'Aucune carte disponible ici'
      }
    };
    om_strings.en_GB = om_strings.en;
    for (var i = 0; i < I18n.availableLocales.length; i++) {
      var locale = I18n.availableLocales[i];
      if (I18n.translations[locale]) {
        I18n.translations[locale].openmaps = cloneInto(om_strings[locale], unsafeWindow);
      }
    }
    
    if (typeof localStorage.OpenMaps == 'undefined') {
      localStorage.OpenMaps = {};
      localStorage.OpenMaps.state = {};
    }
    
    // TODO: version management?

    // List of available maps
    var maps = {
      '3201': { id: 3201, url: 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB-basiskaart/wms', crs: 'EPSG:3857', bbox: new OL.Bounds(280525.11676, 6557859.253174342, 661237.77522, 6712007.501374752), format: 'image/png', title: 'GRB-basiskaart', abstract: 'Via de WMS GRB-basiskaart kan je het Grootschalig Referentiebestand (GRB) opvragen en visualiseren als een kaart. De WMS GRB-basiskaart omvat alle GRB basiskaart gegevens gebaseerd op het GRBgis product. Voor een gedetailleerde databeschrijving van het GRB raadpleegt u best het GRB-objectenhandboek via www.agiv.be/producten/grb/objectcatalogus/entiteiten.', attribution: 'Agentschap voor Geografische Informatie Vlaanderen', capabilities: ['GetCapabilities', 'GetMap', 'GetFeatureInfo'], default_layers: [ 'GRB_BSK' ], layers: { 'GRB_BSK': { queryable: false, title: 'GRB-basiskaart', abstract: 'Deze laag omvat alle (GRB-) entiteiten die zichtbaar zijn in de GRB-basiskaart' } } },
      '3202': { id: 3202, url: 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/omwrgbmrvl/wms', crs: 'EPSG:3857', bbox: new OL.Bounds(280525.11676, 6557859.253174342, 661237.77522, 6712007.501374752), format: 'image/jpeg', title: 'Orthomozaïek Vlaanderen', abstract: 'WMS die de compilatie weergeeft van de meest recente middenschalige orthofotomozaïeken uit de wintervluchten die voor ieder deel van Vlaanderen beschikbaar zijn die wordt bijgewerkt telkens er een nieuw deel beschikbaar is.', attribution: 'Agentschap voor Geografische Informatie Vlaanderen', capabilities: ['GetCapabilities', 'GetMap', 'GetFeatureInfo'], default_layers: [ 'Ortho' ], layers: { 'Ortho': { queryable: false, title: 'Orthofotomozaïek, middenschalig, winteropnamen, kleur, meest recent, Vlaanderen', abstract: 'Deze rasterlaag is een compilatie van de meest recente orthofotomozaëken (winteropnamen) die voor ieder deel  van Vlaanderen beschikbaar zijn en wordt  bijgewerkt telkens er een nieuw deel ingewonnen is. De compilatie heeft een grondresolutie van 25 cm.' }, 'Vliegdagcontour': { queryable: true, title: 'Vliegdagcontour Orthofotomozaïek', abstract: 'Deze vectorlaag geeft voor ieder deel van de rastercompilatie de opnamedatum weer.' } } },
      '3203': { id: 3203, url: 'https://geoservices.wallonie.be/arcgis/services/TOPOGRAPHIE/PICC/MapServer/WMSServer', crs: 'EPSG:3857', bbox: new OL.Bounds(295477.314255, 740430.033845, 6347477.319654, 6640885.073618), format: 'image/png', title: 'Topographie PICC', abstract: 'Service de visualisation du Projet Informatique de Cartographie Continue (PICC)', attribution: 'Région wallonne', capabilities: ['GetCapabilities', 'GetMap', 'GetFeatureInfo'], default_layers: [ '1','2','3','5','6','8','24','25','33','48','49','50','52','53','54','55','56','58','59','60' ], layers: { '1': { queryable: true, title: 'Construit: Bâtiments' }, '2': { queryable: true, title: 'Construit: Objet linéaire' }, '3': { queryable: true, title: 'Construit: Objet ponctuel' }, '5': { queryable: true, title: 'Voirie: Axe' }, '6': { queryable: true, title: 'Voirie: Bord' }, '7': { queryable: true, title: 'Voirie: Equipement' }, '8': { queryable: true, title: 'Voirie: Marquage au sol' }, '10': { queryable: true, title: 'Repère Topo: Point de niveau de voirie' }, '11': { queryable: true, title: 'Repère Topo: Borne kilométrique' }, '12': { queryable: true, title: 'Repère Topo: Point de canevas' }, '15': { queryable: true, title: 'Equipement: Cabine: Objets linéaires' }, '16': { queryable: true, title: 'Equipement: Cabine: Objets ponctuels' }, '18': { queryable: true, title: 'Equipement: Accès sous-terrain: Objet linéaire' }, '19': { queryable: true, title: 'Equipement: Accès sous-terrain: Objet ponctuel' }, '20': { queryable: true, title: 'Equipement: Signalisation' }, '21': { queryable: true, title: 'Equipement: Ecran anti-bruit' }, '22': { queryable: true, title: 'Equipement: Poteau' }, '24': { queryable: true, title: 'Hydrographie: Objet linéaire' }, '25': { queryable: true, title: 'Hydrographie: Objet ponctuel' }, '27': { queryable: true, title: 'Réseau aérien: Pylone' }, '28': { queryable: true, title: 'Réseau aérien: Contour Pylone' }, '29': { queryable: true, title: 'Réseau aérien: Ligne HT' }, '31': { queryable: true, title: 'Réseau ferroviaire: Portique' }, '32': { queryable: true, title: 'Réseau ferroviaire: Pylone' }, '33': { queryable: true, title: 'Réseau ferroviaire: Rail' }, '34': { queryable: true, title: 'Réseau ferroviaire: Quai gare' }, '36': { queryable: true, title: 'Relief: Rupture de pente' }, '37': { queryable: true, title: 'Relief: Carrière, sablière, excavation diverse' }, '38': { queryable: true, title: 'Relief: Dépôt - Terril' }, '39': { queryable: true, title: 'Relief: Niveau terrain' }, '41': { queryable: true, title: 'Paysage limite: Limite' }, '42': { queryable: true, title: 'Paysage limite: Haie' }, '43': { queryable: true, title: 'Paysage limite: Boisement' }, '45': { queryable: true, title: 'Paysage limite: Arbre: Rangée' }, '46': { queryable: true, title: 'Paysage limite: Arbre: Arbres' }, '48': { queryable: true, title: 'Toponymie: Numéro de bâtiment' }, '49': { queryable: true, title: 'Toponymie: Numéro des rue' }, '50': { queryable: true, title: 'Toponymie: Nom des rues' }, '52': { queryable: true, title: 'Toponymie: Hydrographie: Eléments hydrographiques ponctuels' }, '53': { queryable: true, title: 'Toponymie: Hydrographie: Lacs, étangs, piscines' }, '54': { queryable: true, title: 'Toponymie: Hydrographie: Cours d\'eau divers' }, '55': { queryable: true, title: 'Toponymie: Hydrographie: Canaux, cours d\'eau navigeables' }, '56': { queryable: true, title: 'Toponymie: Elément ponctuel divers' }, '57': { queryable: true, title: 'Toponymie: Lieu-dits' }, '58': { queryable: true, title: 'Toponymie: Hameau' }, '59': { queryable: true, title: 'Toponymie: Ancienne commune' }, '60': { queryable: true, title: 'Toponymie: Commune' } } },
      '3204': { id: 3204, url: 'http://geoserver.gis.irisnet.be/geoserver/wms', crs: 'EPSG:31370', bbox: new OL.Bounds(471578, 6579050, 499555, 6606337), format: 'image/png', title: 'CIRB', abstract: 'Web Map Service for the CIRB layers', attribution: 'Irisnet GIS', capabilities: ['GetCapabilities', 'GetMap', 'GetFeatureInfo'], default_layers: [ 'urbisNL' ], layers: { 'urbisNL': { queryable: false, title: 'Urbis Base Map NL', abstract: 'This layer represents the base map in dutch.' }, 'urbisFR': { queryable: false, title: 'Urbis Base Map FR', abstract: 'This layer represents the base map in french.' }, 'urbis:ortho2014': { queryable: false, title: 'Ortho 2014', abstract: 'This layer is ortho 2014 in the Brussels region' }, 'urbis:ortho2012': { queryable: false, title: 'Ortho 2012', abstract: 'This layer is ortho 2012 in the Brussels region' }, 'urbis:ortho2009': { queryable: false, title: 'Ortho 2009', abstract: 'This layer is ortho 2009 in the Brussels region' }, 'urbis:ortho2004': { queryable: false, title: 'Ortho 2004', abstract: 'This layer is ortho 2004 in the Brussels region' }, 'urbisFRGray': { queryable: false, title: 'Urbis Base Map Gray FR', abstract: 'This layer represents the gray base map in french.' }, 'urbisNLGray': { queryable: false, title: 'Urbis Base Map Gray NL', abstract: 'This layer represents the gray base map in dutch.' }, 'urbis:LabeledStreetAxe': { queryable: true, title: 'Labeled Street Axe', abstract: 'Labeled StreetAxe for OSIRIS, bug fix for the juxtaposition of street name on building' }, 'urbis:URB_A_ADPT': { queryable: false, title: 'Address points', abstract: 'This layer is the localization of address points of the Brussels Region' }, 'urbis:URB_A_BU': { queryable: true, title: 'Buildings', abstract: 'This layer represents the buildings of the Brussels Region' }, 'urbis:URB_A_MD': { queryable: true, title: 'Monitoring districts', abstract: 'This layer reprensent the monitoring districts of the Brussels Region' }, 'urbis:URB_A_MU': { queryable: true, title: 'Municipalities', abstract: 'This layer represents the municipalities of the Brussels Region' }, 'urbis:URB_A_MY_SA': { queryable: true, title: 'Street axes', abstract: 'This layer represents the axes of the street of the Brussels Region' }, 'urbis:URB_A_MY_SS': { queryable: true, title: 'Street sections', abstract: 'This layer represents the street sections of the Brussels Region' }, 'urbis:URB_A_MZ': { queryable: true, title: 'Municipal zips', abstract: 'This layer is the zip of the municipality of the Brussels Region' }, 'urbis:URB_A_POL': { queryable: true, title: 'Police districts', abstract: 'This layer is the police districts of the Brussels Region' }, 'urbis:URB_A_RE': { queryable: true, title: 'Region', abstract: 'This layer is the Brussels Region' }, 'urbis:URB_A_SD': { queryable: true, title: 'Statistical districts', abstract: 'This layer represents the limit of the statistical districts of the Brussels Region' }, 'urbis:URB_A_SN': { queryable: true, title: 'Street nodes', abstract: 'This layer represents the street nodes. Each node is an intersection or an extremity of a street axe' }, 'urbis:URB_M_RTLINE': { queryable: true, title: 'Rail tracks', abstract: 'This layer represents the rails tracks.' }, 'urbis:URB_M_SHAPE': { queryable: true, title: 'UrbisMap shapes', abstract: 'This layer represents the shapes of UrbisMap.' }, 'urbis:URB_M_TONAME_LIN': { queryable: true, title: 'Toponymy', abstract: 'This layer represents the toponymy of public places.' }, 'urbis:URB_M_ZIPOINT': { queryable: true, title: 'Points of interest', abstract: 'This layer represents the point of zone of interest.' }, 'urbis:URB_T_LINE': { queryable: true, title: 'Urbis Topo Lines', abstract: 'This layer represents the topo lines.' }, 'urbis:URB_T_POINT': { queryable: true, title: 'Urbis Topo Points', abstract: 'This layer represents the topo points.' }, 'urbis:URB_A_SI_POINT_VW': { queryable: true, title: 'Street sides' }, 'urbis:MuNeighbour': { queryable: true, title: 'Neighbour Municipalities' }, 'urbis:Highways': { queryable: true, title: 'Highways' } } },
      '3205': { id: 3205, url: 'https://geo.agiv.be/ogc/wms/gipodpubliek', crs: 'EPSG:3857', bbox: new OL.Bounds(280525, 6557859, 661237, 6712007), format: 'image/png', title: 'GIPOD Publieke Informatie', abstract: 'Deze WMS geeft een overzicht van alle concreet geplande en in uitvoering zijnde werken, manifestaties en andere innames op het openbaar domein met hun bijhorende omleidingen en verwachte hinder, voor de komende maand.', attribution: 'Agentschap voor Geografische Informatie Vlaanderen', capabilities: ['GetCapabilities', 'GetMap', 'GetFeatureInfo'], default_layers: [ 'ManOml', 'ManCon', 'ManIcoon', 'WoOml', 'WoCon', 'WoIcoon' ], layers: { 'ManOml': { queryable: true, title: 'Omleidingen van de manifestaties', abstract: 'Deze laag geeft een overzicht van alle omleidingen, horend bij manifestaties en andere innames op het openbaar domein, voor de komende maand.' }, 'ManCon': { queryable: true, title: 'Manifestaties contour', abstract: 'Deze laag geeft een overzicht met contouren van alle manifestaties en andere innames op het openbaar domein en de verwachte hinder voor de komende maand.' }, 'ManIcoon': { queryable: true, title: 'Manifestaties icoon', abstract: 'Deze laag geeft een overzicht met iconen van alle manifestaties en andere innames op het openbaar domein en de verwachte hinder voor de komende maand.' }, 'WoOml': { queryable: true, title: 'Omleidingen van de werkopdrachten', abstract: 'Deze laag geeft een overzicht van alle omleidingen, horend bij werkopdrachten op het openbaar domein, voor de komende maand.' }, 'WoCon': { queryable: true, title: 'Werkopdrachten contour', abstract: 'Deze laag geeft een overzicht met contouren van alle werkopdrachten op het openbaar domein en de verwachte hinder voor de komende maand.' }, 'WoIcoon': { queryable: true, title: 'Werkopdrachten icoon', abstract: 'Deze laag geeft een overzicht met iconen van alle werkopdrachten op het openbaar domein en de verwachte hinder voor de komende maand.' } } },
      '3206': { id: 3206, url: 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/omw/wms', crs: 'EPSG:3857', bbox: new OL.Bounds(280525.11676, 6557859.253174342, 661237.77522, 6712007.501374752), format: 'image/jpeg', title: 'Orthomozaïek Vl. Tijdsreeksen', abstract: 'WMS met de tijdsreeks van middenschalige orthofotomozaïeken met een resolutie van 25cm, gebiedsdekkend voor Vlaanderen', attribution: 'Agentschap voor Geografische Informatie Vlaanderen', capabilities: ['GetCapabilities', 'GetMap', 'GetFeatureInfo'], default_layers: [ 'OMWRGB15VL' ], layers: { 'OMWRGB15VL': { queryable: false, title: 'Winteropnamen, 2015', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2015 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB15VL_vdc': { queryable: true, title: 'Winteropnamen, 2015, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB14VL': { queryable: false, title: 'Winteropnamen, 2014', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2014 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB14VL_vdc': { queryable: true, title: 'Winteropnamen, 2014, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB13VL': { queryable: false, title: 'Winteropnamen, 2013', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2013 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB13VL_vdc': { queryable: true, title: 'Winteropnamen, 2013, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB12VL': { queryable: false, title: 'Winteropnamen, 2012', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2012 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB12VL_vdc': { queryable: true, title: 'Winteropnamen, 2012, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB08_11VL': { queryable: false, title: 'Winteropnamen, 2008-2011', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in de periode 2008-2011 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB08_11VL_vdc': { queryable: true, title: 'Winteropnamen, 2008-2011, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB05_07VL': { queryable: false, title: 'Winteropnamen, 2005-2007', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in de periode 2005-2007 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB05_07VL_vdc': { queryable: true, title: 'Winteropnamen, 2005-2007, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB00_03VL': { queryable: false, title: 'Winteropnamen, 2000-2003', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in de periode 2000-2003 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB00_03VL_vdc': { queryable: true, title: 'Winteropnamen, 2000-2003, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' } } },
      '3101': { id: 3101, url: 'https://geodata.nationaalgeoregister.nl/bag/wms', crs: 'EPSG:3857', bbox: new OL.Bounds(368979.10475029063, 6102688.590195671, 785145.4377025769, 7057109.006193211), format: 'image/png', title: 'BAG', abstract: 'De gegevens bestaan uit BAG-panden en een deelselectie van BAG-gegevens van deze panden en de zich daarin bevindende verblijfsobjecten. Ook de ligplaatsen en standplaatsen zijn hierin opgenomen met een deelselectie van BAG-gegevens. De gegevens van de nummeraanduiding zijn in deze services onderdeel van de adresseerbare objecten, hierbij wordt slechts 1 adres opgenomen, dus objecten met meerdere adressen (hoofd- en nevenadressen) zijn niet compleet. In deze services zitten dus niet alle BAG adressen. Wij adviseren u, aangezien er sprake is van beperkte gegevens, om in de webservice BAG Bevragen de actuele gegevens te controleren. Dit kan ook in een van de andere BAG producten: BAG Web, BAG Extract of BAG Compact. BAG Bevragen: http://www.kadaster.nl/web/artikel/productartikel/BAG-Bevragen.htm Andere BAG producten: http://www.kadaster.nl/web/Themas/Registraties/BAG/BAGartikelen/BAG-producten.htm De service wordt dagelijks geactualiseerd.', attribution: 'BAG', capabilities: ['GetCapabilities', 'GetMap', 'GetFeatureInfo'], default_layers: [ 'bag','ligplaats','pand','verblijfsobject','woonplaats','standplaats' ], layers: { 'bag': { queryable: true, title: 'bag' }, 'ligplaats': { queryable: true, title: 'ligplaats' }, 'pand': { queryable: true, title: 'pand' }, 'standplaats': { queryable: true, title: 'standplaats' }, 'verblijfsobject': { queryable: true, title: 'verblijfsobject' }, 'woonplaats': { queryable: true, title: 'woonplaats' } } },
      '3102': { id: 3102, url: 'http://webservices.gbo-provincies.nl/lufo/services/wms', crs: 'EPSG:28992', bbox: new OL.Bounds(332126.70701065, 6510864.11160891, 837006.18392751, 7070731.52499591), format: 'image/jpeg', title: 'Luchtfoto (GBO provincies)', abstract: 'Luchtfoto wms door GBO provincies', attribution: 'GBO provincies', capabilities: ['GetCapabilities', 'GetMap', 'GetFeatureInfo'], default_layers: [ 'actueel_winter' ], layers: { 'actueel_winter': { queryable: true, title: 'Luchtfoto 2014 (winter)' }, 'actueel_zomer': { queryable: true, title: 'Luchtfoto 2014 (zomer)' }, 'luchtfoto_2013_winter': { queryable: true, title: 'Luchtfoto 2013 (winter)' }, 'luchtfoto_2013_zomer': { queryable: true, title: 'Luchtfoto 2013 (zomer)' }, 'luchtfoto_2012_winter': { queryable: true, title: 'Luchtfoto 2012 (winter)' }, 'luchtfoto_2012_zomer': { queryable: true, title: 'Luchtfoto 2012 (zomer)' }, 'luchtfoto_2011': { queryable: true, title: 'Luchtfoto 2011' }, 'luchtfoto_2010': { queryable: true, title: 'Luchtfoto 2010' }, 'luchtfoto_2009': { queryable: true, title: 'Luchtfoto 2009' }, 'luchtfoto_2008': { queryable: true, title: 'Luchtfoto 2008' } } },
      '3103': { id: 3103, url: 'https://geodata.nationaalgeoregister.nl/weggeg/wms', crs: 'EPSG:3857', bbox: new OL.Bounds(385276.75763551984, 6575606.8651319705, 805841.7938525073, 7065365.041596532), format: 'image/png', title: 'Weggegevens WMS', abstract: 'De service van Weggegevens bevat op dit moment de lagen maximum snelheden en rijstroken van de rijkswegen.', attribution: 'PDOK', capabilities: ['GetCapabilities', 'GetMap', 'GetFeatureInfo'], default_layers: [ 'weggegaantalrijbanen','weggegmaximumsnelheden' ], layers: { 'weggegaantalrijbanen': { queryable: true, title: 'Weggegevens aantal rijbanen', }, 'weggegmaximumsnelheden': { queryable: true, title: 'Weggegevens maximumsnelheden', } } },
      '3104': { id: 3104, url: 'https://geodata.nationaalgeoregister.nl/bgt/wms', crs: 'EPSG:28992', bbox: new OL.Bounds(333958.4723798207, 6446275.841017158, 779236.435552915, 6982997.920389788), format: 'image/png', title: 'INSPIRE View Service PDOK', abstract: 'De INSPIRE View Service PDOK is een overkoepelende View Service die voor de volgende datasets INSPIRE datasets ontsluit: Hydrografie, Vervoersnetwerken, Beschermde gebieden, Geografische namen', attribution: 'PDOK', capabilities: ['GetCapabilities', 'GetMap', 'GetFeatureInfo'], default_layers: [ 'bgtstandaard' ], layers: { 'bgtachtergrond': { queryable: true, title: 'BGT achtergrond' }, 'bgtstandaard': { queryable: true, title: 'BGT standaard' }, 'bgt_v_nummeraanduiding': { queryable: true, title: 'Nummeraanduidingen' }, 'bgtvulling': { queryable: true, title: 'BGT vulling' } } }
    };

    // To investigate in the future:
    // * ruimtelijkeplannen.nl
    //     http://www.ruimtelijkeplannen.nl/web-roo/docs/afnemers/Uitleg_WMS_WFS_en_tiled_services.pdf
    //     http://afnemers.ruimtelijkeplannen.nl/afnemers/services?request=GetCapabilities&version=1.1.1&service=WMS
    // * Luxembourg
    //     http://catalog.geoportail.lu/Portail/voirListeServicesAction.do?dispatch=loadCategorie&categorie=WMS&fonction=voirProduits

    // List of map handles
    var handles = [];
    var tab = addOpenMapsTab();
    var title = document.createElement('h4');
    title.appendChild(document.createTextNode(I18n.t('openmaps.tab_title')));
    title.style.marginBottom = '5px';
    tab.appendChild(title);

    var handleList = document.createElement('ul');
    $(handleList).sortable(cloneInto({
      forcePlaceholderSize: true,
      placeholderClass: 'result',
      handle: '.title'
    }, unsafeWindow)).bind('sortupdate', exportFunction(function(e, ui) {
      var movedHandle = handles.splice(ui.oldindex, 1)[0];
      handles.splice(ui.index, 0, movedHandle);
      Waze.map.setLayerIndex(movedHandle.layer, ui.index + 1); // Ugly hack to obtain the layer
    }, unsafeWindow));
    handleList.className = 'result-list';
    tab.appendChild(handleList);

    var addMap = document.createElement('select');
    addMap.className = 'form-control';
    addMap.style.margin = '8px 0';
    updateMapSelector();
    Waze.map.events.register("moveend", null, exportFunction(updateMapSelector, unsafeWindow));
    addMap.addEventListener('change', function() {
      if (addMap.selectedIndex != 0) {
        var mapId = addMap.options[addMap.selectedIndex].value;
        handles.push(new MapHandle(maps[mapId]));
        addMap.selectedIndex = 0;
      }
    });
    tab.appendChild(addMap);

    var footer = document.createElement('p');
    try {
      footer.appendChild(document.createTextNode(GM_info.script.name + ': v' + GM_info.script.version));
    } catch (e) {
      // Probably no support for GM_info, ignore
    }
    footer.style.fontSize = '11px';
    tab.appendChild(footer);
    
    // Try to convert any previous localStorage data
    if (typeof localStorage.OM_previousMap != 'undefined') {
      var previousMapId = localStorage.OM_previousMap;
      if (previousMapId == 'No map') {
        localStorage.removeItem('OM_previousMap');
        localStorage.removeItem('OM_opacity');
      } else if (typeof maps[localStorage.OM_previousMap] != 'undefined') {
        handles.push(new MapHandle(maps[localStorage.OM_previousMap]));
        // TODO: opacity?
      }
    }

    function updateMapSelector() {
      var localMaps = [];
      Object.keys(maps).forEach(function(id) {
        if (maps[id].bbox.intersectsBounds(Waze.map.getExtent())) {
          localMaps.push(maps[id]);
        }
      });
      while (addMap.firstChild) {
        addMap.removeChild(addMap.firstChild);
      }
      if (localMaps.length == 0) {
        var noMaps = document.createElement('option');
        noMaps.text = I18n.t('no_local_maps');
        addMap.appendChild(noMaps);
      } else {
        localMaps.sort(function(a, b) {
          return a.title.localeCompare(b.title);
        })
        var selectMap = document.createElement('option');
        selectMap.text = 'Select a map to add';
        addMap.appendChild(selectMap);
        localMaps.forEach(function(map) {
          var option = document.createElement('option');
          option.text = map.title;
          option.value = map.id;
          option.title = map.abstract;
          addMap.appendChild(option);
        });
      }
    }

    function addOpenMapsTab() {
      var userInfo = document.getElementById('user-info'),
          tabHandles = userInfo.querySelector('.nav-tabs'),
          tabs = userInfo.querySelector('.tab-content'),
          tabHandle = document.createElement('li'),
          tab = document.createElement('div');
      tabHandle.innerHTML = '<a href="#sidepanel-openMaps" data-toggle="tab" title="' + I18n.t('openmaps.tab_title') + '"><span class="fa icon-"></span></a>';
      tab.id = 'sidepanel-openMaps';
      tab.className = 'tab-pane';
      tabHandles.appendChild(tabHandle);
      tabs.appendChild(tab);
      return tab;
    }

    function loadTileError(url, callback) {
      // Request the tile again to check the error (OpenLayers doesn't provide this information)
      GM_xmlhttpRequest({
        method: 'GET',
        url: url,
        timeout: 10000,
        onload: function (response) {
          if (response.status == 200) {
            // TODO: properly deal with edge cases here
            var serviceException = response.responseXML.querySelector('ServiceException');
            callback({
              title: serviceException.getAttribute('code').replace(/([a-z])([A-Z])/g, '$1 $2'), // de-camelCase
              description: serviceException.textContent.trim()
            });
          } else {
            callback({
              title: I18n.t('openmaps.errors.network'),
              description: I18n.t('openmaps.errors.network_description') + response.statusText
            });
          }
        },
        ontimeout: function(e) {
          callback({
            title: I18n.t('openmaps.errors.timeout'),
            description: I18n.t('openmaps.errors.timeout_description')
          });
        },
        onerror: function(e) {
          log('Network error: ' + JSON.stringify(e));
          callback({
            title: I18n.t('openmaps.errors.network'),
            description: I18n.t('openmaps.errors.network_console')
          });
        }
      });
    }

    function MapHandle(map, activeLayers) {
      var self = this;
      this.layer = null;
      this.mapId = map.id;
      this.mapLayers = [];
      this.opacity = 1;
      var hidden = false;
      var container = document.createElement('li');
      var layerContainer = document.createElement('ul');
      var title = document.createElement('p');
      var description = document.createElement('p');
      var editContainer = document.createElement('div');
      var remove = document.createElement('span');
      var visibility = document.createElement('span');
      var edit = document.createElement('span');
      var error = document.createElement('span');
      var loadedTiles = 0;
      var totalTiles = 0;
      
      function updateTileLoader() {
        if (loadedTiles == totalTiles) {
          loadedTiles = 0;
          totalTiles = 0;
          title.style.borderImage = 'none';
        } else {
          var percentage = parseInt(loadedTiles * 100 / totalTiles, 10);
          title.style.borderImage = 'linear-gradient(to right, #bfb, #bfb ' + percentage + '%, #fff ' + percentage + '%, #fff) 100 4 stretch';
        }
      }
      
      function saveState() {
        var state = {};
        state.active = [];
        handles.forEach(function(handle) {
          var handleState = {
            mapId: handle.mapId,
            opacity: handle.opacity,
            layers: handle.mapLayers.slice()
          };
          state.active.push(handleState);
        });
        localStorage.OpenMaps.state = state;
      }

      this.clearError = function() {
        error.title = '';
        error.style.display = 'none';
      };
      
      this.updateLayers = function() {
        var layerCheckboxes = layerContainer.querySelectorAll('input:checked');
        var newLayers = [];
        for (var j = 0; j < layerCheckboxes.length; j++) {
          newLayers.push(layerCheckboxes[j].value);
        }
        var joinedLayers = newLayers.join();
        if (newLayers && newLayers.length == 0 && this.layer) { // Hide map as it has no more layers
          this.layer.setVisibility(false);
        } else if (newLayers.length > 0 && !this.layer) { // Add map that received layers
          var params = cloneInto({
            layers: joinedLayers,
            transparent: true,
            format: map.format
          }, unsafeWindow);
          var options = cloneInto({
            transitionEffect: 'resize',
            attribution: map.attribution
          }, unsafeWindow);
          options.projection = new OL.Projection(map.crs);
          options.tileSize = (map.tile_size ? new OL.Size(map.tile_size, map.tile_size) : new OL.Size(512, 512));
          this.layer = new OL.Layer.WMS(map.title, map.url, params, options);
          this.layer.events.register('tileerror', null, exportFunction(function(obj) {
            if (error.title != '') {
              return;
            }
            error.style.display = 'inline';
            error.title = 'Retrieving error...';
            $(error).tooltip();
            loadTileError(obj.tile.url, function(msg) {
              $(error).tooltip('destroy');
              error.title = msg.title + ': ' + msg.description;
              $(error).tooltip();
            });
          }, unsafeWindow));
          this.layer.events.register('tileloadstart', null, exportFunction(function(evt) {
            totalTiles++;
            updateTileLoader();
          }, unsafeWindow));
          this.layer.events.register('tileloaded', null, exportFunction(function(evt) {
            loadedTiles++;
            updateTileLoader();
          }, unsafeWindow));
          Waze.map.addLayer(this.layer);
          Waze.map.setLayerIndex(this.layer, handles.indexOf(self) + 1);
          this.layer.events.register('visibilitychanged', null, exportFunction(function() {
            title.style.textDecoration = (self.layer.getVisibility() ? 'none' : 'line-through');
          }, unsafeWindow));
        } else if (self.mapLayers.join() != joinedLayers) { // Update layers if there's a change
          this.layer.mergeNewParams(cloneInto({
            layers: joinedLayers
          }, unsafeWindow));
          this.layer.setVisibility(true);
        }
        self.mapLayers = cloneInto(newLayers, unsafeWindow);
        console.log(handles);
      };
      
      remove.style.fontFamily = 'FontAwesome';
      remove.style.paddingLeft = '3px';
      remove.style.float = 'right';
      remove.style.cursor = 'pointer';
      remove.appendChild(document.createTextNode(''));
      remove.addEventListener('click', function(e) {
        Waze.map.removeLayer(self.layer);
        handles.splice(handles.indexOf(self, 1));
        container.parentNode.removeChild(container);
      });
      container.appendChild(remove);
      edit.style.fontFamily = 'FontAwesome';
      edit.style.padding = '0 3px';
      edit.style.float = 'right';
      edit.style.cursor = 'pointer';
      edit.appendChild(document.createTextNode(''));
      edit.addEventListener('click', function(e) {
        editContainer.style.display = (editContainer.style.display == 'none' ? 'block' : 'none');
      });
      container.appendChild(edit);
      visibility.style.fontFamily = 'FontAwesome';
      visibility.style.padding = '0 3px';
      visibility.style.float = 'right';
      visibility.style.cursor = 'pointer';
      visibility.appendChild(document.createTextNode('')); // icon-eye-open: , icon-eye-close: 
      visibility.addEventListener('click', function(e) {
        hidden = !hidden;
        self.layer.setVisibility(!hidden);
      });
      container.appendChild(visibility);
      error.style.fontFamily = 'FontAwesome';
      error.style.paddingRight = '3px';
      error.style.color = 'red';
      error.style.display = 'none';
      error.style.cursor = 'pointer';
      error.style.float = 'right';
      error.appendChild(document.createTextNode(''));
      error.dataset.toggle = 'tooltip';
      error.addEventListener('click', function() {
        this.title = '';
        this.style.display = 'none';
      });
      container.appendChild(error);
      title.className = 'title';
      var handle = document.createElement('span');
      handle.style.fontFamily = 'FontAwesome';
      handle.style.letterSpacing = '1px';
      handle.style.color = '#c2c2c2';
      handle.style.cursor = 'move';
      handle.style.fontSize = '11px';
      handle.appendChild(document.createTextNode(' '));
      title.appendChild(handle);
      title.style.cursor = 'default';
      title.style.borderTop = '2px solid transparent';
      title.appendChild(document.createTextNode(map.title));
      container.appendChild(title);
      description.className = 'additional-info';
      description.style.fontStyle = 'italic';
      description.style.whiteSpace = 'nowrap';
      description.style.textOverflow = 'ellipsis';
      description.style.overflow = 'hidden';
      description.style.cursor = 'pointer';
      description.title = I18n.t('openmaps.expand');
      description.addEventListener('click', function() {
        this.title = (this.style.whiteSpace == 'nowrap' ? I18n.t('openmaps.collapse') : I18n.t('openmaps.expand'));
        this.style.whiteSpace = (this.style.whiteSpace == 'nowrap' ? 'normal' : 'nowrap');
      });
      description.appendChild(document.createTextNode(map.abstract));
      container.appendChild(description);
      var opacityLabel = document.createElement('span');
      opacityLabel.appendChild(document.createTextNode(I18n.t('openmaps.opacity_label') + ':'));
      opacityLabel.style.marginRight = '5px';
      editContainer.appendChild(opacityLabel);
      var opacitySlider = document.createElement('input');
      opacitySlider.type = 'range';
			opacitySlider.max = 100;
			opacitySlider.min = 5;
			opacitySlider.step = 5;
      opacitySlider.value = 100;
      opacitySlider.style.verticalAlign = 'middle';
      opacitySlider.addEventListener('input', function() {
        var opacity = opacitySlider.value / 100;
				self.layer.setOpacity(opacity);
        self.opacity = opacity;
        console.log(handles);
			});
      editContainer.appendChild(opacitySlider);
      layerContainer.style.overflowY = 'scroll';
      layerContainer.style.maxHeight = '15em';
      layerContainer.className = 'result-list';
      var layerKeys = Object.keys(map.layers);
      for (var i = 0; i < layerKeys.length; i++) {
        var mapLayer = map.layers[layerKeys[i]];
        var item = document.createElement('li');
        item.className = 'result';
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        if (map.default_layers && map.default_layers.indexOf(layerKeys[i]) != -1) {
          checkbox.checked = true;
        }
        checkbox.style.marginRight = '5px';
        checkbox.value = layerKeys[i];
        checkbox.addEventListener("click", exportFunction(function() {
          self.updateLayers.call(self);
        }, unsafeWindow));
        item.appendChild(checkbox);
        var layerHandle = document.createElement('span');
        var layerTitle = document.createElement('span');
        layerHandle.style.fontFamily = 'FontAwesome';
        layerHandle.style.letterSpacing = '1px';
        layerHandle.style.color = '#c2c2c2';
        layerHandle.style.cursor = 'move';
        layerHandle.style.fontSize = '11px';
        layerHandle.appendChild(document.createTextNode(' '));
        layerTitle.appendChild(layerHandle);
        layerTitle.className = 'title';
        layerTitle.style.cursor = 'default';
        layerTitle.appendChild(document.createTextNode(mapLayer.title));
        layerTitle.addEventListener('click', exportFunction(function(e) {
          this.parentNode.querySelector('input').dispatchEvent(new MouseEvent('click'));
        }, unsafeWindow));
        item.appendChild(layerTitle);
        if (mapLayer.abstract) {
          var description = document.createElement('p');
          description.className = 'additional-info';
          description.style.whiteSpace = 'nowrap';
          description.style.textOverflow = 'ellipsis';
          description.style.overflow = 'hidden';
          description.style.cursor = 'pointer';
          description.title = I18n.t('openmaps.expand');
          description.addEventListener('click', function() {
            this.title = (this.style.whiteSpace == 'nowrap' ? I18n.t('openmaps.collapse') : I18n.t('openmaps.expand'));
            this.style.whiteSpace = (this.style.whiteSpace == 'nowrap' ? 'normal' : 'nowrap');
          });
          description.appendChild(document.createTextNode(mapLayer.abstract));
          item.appendChild(description);
        }
        layerContainer.appendChild(item);
      }
      editContainer.appendChild(layerContainer);
      editContainer.style.display = 'none';
      container.appendChild(editContainer);
      container.className = 'result';
      handleList.appendChild(container);
      $(handleList).sortable(); // refresh HTML5Sortable
      $(layerContainer).sortable(cloneInto({
        forcePlaceholderSize: true,
        placeholderClass: 'result',
        handle: '.title'
      }, unsafeWindow)).bind('sortupdate', exportFunction(function() {
        self.updateLayers.call(self);
      }, unsafeWindow));
      
      this.updateLayers();
    }
  }

  function log(message) {
    console.log('%cWME Open Maps: %c' + message, 'color:black', 'color:#d97e00');
  }

  init();
})();