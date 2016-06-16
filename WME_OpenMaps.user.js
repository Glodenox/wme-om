// ==UserScript==
// @name        WME OpenMaps
// @author      Tom 'Glodenox' Puttemans
// @namespace   http://www.tomputtemans.com/
// @description Add additional maps that are released as open data to the Waze Map Editor
// @include     https://www.waze.com/*/editor/*
// @include     https://www.waze.com/editor/*
// @include     https://editor-beta.waze.com/*
// @exclude     https://www.waze.com/user/*
// @exclude     https://www.waze.com/*/user/*
// @connect     wallonie.be
// @connect     informatievlaanderen.be
// @connect     agiv.be
// @connect     irisnet.be
// @connect     nationaalgeoregister.nl
// @connect     gbo-provincies.nl
// @connect     *
// @icon        data:image/png;base64,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
// @supportURL  https://github.com/Glodenox/wme-om/issues
// @version     2.3.7
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
      setTimeout(init, 800);
      log('Waze object unavailable, map still loading');
      return;
    }
    if (document.getElementById('user-info') == null) {
      setTimeout(init, 500);
      log('user-info element not yet available, map still loading');
      return;
    }
    if (typeof Waze.loginManager === 'undefined') {
      setTimeout(init, 300);
      return;
    }
    if (!Waze.loginManager.hasUser()) {
      Waze.loginManager.events.register("login", null, exportFunction(init, unsafeWindow));
      Waze.loginManager.events.register("loginStatus", null, exportFunction(init, unsafeWindow));
      return;
    }

    var versions = ['2.3.0', '2.3.1', '2.3.2', '2.3.3', '2.3.4', '2.3.5', '2.3.6', '2.3.7'];
    // set up language string
    var om_strings = {
      en: {
        tab_title: 'Open Maps',
        maps_title: 'Active Maps',
        no_local_maps: 'No maps found for this area',
        expand: 'Click to expand',
        collapse: 'Click to collapse',
        hideshow_layer: 'Hide/Show map',
        query_window_title: 'Map Location Query',
        query_window_loading: 'Retrieving information from map service...',
        query_empty_response: 'No response received from map service at this location. Perhaps try somewhere else or try querying another layer?',
        retrieving_error: 'Retrieving error...',
        query_layer: 'Query a certain location of this map for more information by clicking somewhere on the map',
        edit_layer: 'Edit map',
        remove_layer: 'Remove map',
        satellite_imagery: 'Display satellite imagery',
        select_map: 'Select a map to add',
        opacity_label: 'Opacity',
        opacity_label_tooltip: 'Adjust how transparant the layer is',
        transparent_label: 'Transparent',
        transparent_label_tooltip: 'Make the map background transparent',
        errors: {
          network: 'Network error',
          network_description: 'Received the following status code when retrieving information: ',
          see_console: 'See web console for more details',
          timeout: 'Timeout',
          timeout_description: 'Retrieving response took more than 10s, probably network issue',
          parse_fail: 'Could not parse error message'
        },
        areas: {
          BE: 'Belgium',
          NL: 'The Netherlands',
          LU: 'Luxembourg'
        },
        update: {
          message: 'WME Open Maps has been updated! Changelog:',
          v2_3_0: 'Complete rework of the userscript\n- Display multiple maps at the same time\n- Make it possible to query map layers',
          v2_3_1: '- Fixes loading and saving of map state\n- Fixed some bugs concerning map ordering\n- Gray background added to map loading indicator\n- Adjusted BAG map queryability',
          v2_3_2: '- Fixes bug where removing a map also internally removed the maps below\n- Layer querying will only now only take place on visible queryable layers\n- Small changes to boundary and querying options in some maps',
          v2_3_3: '- Fixes to map layer reordering',
          v2_3_4: '- Small UI improvements and internal code refactoring',
          v2_3_5: '- Slightly improved map query response handling\n- Fixed TamperMonkey notices about accessing external resources',
          v2_3_6: '- Fix behaviour on WME beta\n- Group maps by country\n- Add Hectopunten map for The Netherlands',
          v2_3_7: '- Fixed map layer sorting\n- Defunct layer cleanup\n- Add Wegenregister map for Belgium'
        }
      },
      nl: {
        tab_title: 'Open Maps',
        maps_title: 'Actieve kaarten',
        no_local_maps: 'Geen lokale kaarten gevonden',
        expand: 'Klik om uit te breiden',
        collapse: 'Klik om te verbergen',
        hideshow_layer: 'Verberg/Toon kaart',
        query_window_title: 'Kaartlocatie doorzoeken',
        query_window_loading: 'Informatie aan het opvragen bij kaartdienst...',
        query_empty_response: 'Geen antwoord ontvangen van de kaartdienst op deze locatie. Misschien kan je een andere locatie proberen of een andere laag bevragen?',
        retrieving_error: 'Fout aan het ophalen...',
        query_layer: 'Doorzoek een bepaalde locatie op deze kaart voor meer informatie door ergens op de kaart te klikken',
        edit_layer: 'Pas de kaart aan',
        remove_layer: 'Verwijder kaart',
        satellite_imagery: 'Geef satellietbeelden weer',
        select_map: 'Selecteer een kaart om toe te voegen',
        opacity_label: 'Doorzichtigheid',
        opacity_label_tooltip: 'Wijzig de doorzichtigheid van de kaart',
        transparent_label: 'Transparent',
        transparent_label_tooltip: 'Maak de achtergrond van de kaart transparent',
        errors: {
          network: 'Networkfout',
          network_description: 'Bij het opvragen van informatie werd de volgende statuscode ontvangen: ',
          see_console: 'Bekijk de browserconsole voor meer informatie',
          timeout: 'Time-out',
          timeout_description: 'Antwoord verkrijgen duurde langer dan 10 seconden, waarschijnlijk netwerkprobleem',
          parse_fail: 'Kan foutmelding niet verwerken'
        },
        areas: {
          BE: 'België',
          NL: 'Nederland',
          LU: 'Luxemburg'
        },
        update: {
          message: 'Nieuwe versie van WME Open Maps geïnstalleerd! Veranderingen:',
          v2_3_0: 'Complete herwerking van het userscript\n- Geef meerdere kaarten tegelijk weer\n- Maak het mogelijk om kaarten te doorzoeken',
          v2_3_1: '- Het inladen en opslagen van de kaarten is opgelost\n- Enkele bugs geplet rond het ordenen van kaarten\n- Een grijze achtergrond toegevoegd aan de laadindicator voor kaarten\n- De doorzoakbaarheid van de BAG-kaart is aangepast',
          v2_3_2: '- Probleem opgelost waarbij het verwijderen van een kaart alle onderliggende kaarten ook verwijderde\n- Het bevragen van een kaart gebeurt nu enkel op zichtbare bevraagbare lagen\n- Kleine veranderingen aan de grenzen en bevragingsinstellingen van sommige kaarten',
          v2_3_3: '- Het verplaatsen van lagen van een kaart is hersteld',
          v2_3_4: '- Kleine veranderingen aan de UI en interne herwerking van code',
          v2_3_5: '- Licht verbeterde verwerking van kaartopzoekingen\n- Probleem opgelost met TamperMonkey-meldingen over het gebruik van externe bronnen',
          v2_3_6: '- Werking op WME beta verbeterd\n- Groupeer kaarten per land\n- Toevoeging van Hectopuntenkaart in Nederland',
          v2_3_7: '- Sorteren van kaartlagen hersteld\n- Opschonen van onbestaande kaartlagen\n- Wegenregister toegevoegd voor België'
        }
      },
      fr: {
        tab_title: 'Open Maps',
        maps_title: 'Cartes Actives',
        no_local_maps: 'Aucune carte disponible ici',
        opacity_label: 'Opacité',
        areas: {
          BE: 'Belgique',
          NL: 'Pays-Bas',
          LU: 'Luxembourg'
        },
      }
    };
    om_strings.en_GB = om_strings.en;
    for (var i = 0; i < I18n.availableLocales.length; i++) {
      var locale = I18n.availableLocales[i];
      if (I18n.translations[locale]) {
        I18n.translations[locale].openmaps = cloneInto(om_strings[locale], unsafeWindow);
      }
    }

    // List of available maps
    var maps = {
      '3201': { id: 3201, url: 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB/wms', crs: 'EPSG:3857', bbox: new OL.Bounds(280525.11676, 6557859.253174342, 661237.77522, 6712007.501374752), format: 'image/png', title: 'GRB Vlaanderen', area: 'BE', abstract: 'Via de WMS GRB kan je het Grootschalig Referentiebestand (GRB) opvragen en visualiseren als een kaart. De WMS GRB omvat alle GRB-gegevens gebaseerd op het GRBgis product. De gebruiker kan selecteren welke GRB-gegevens gevisualiseerd moeten worden en in welke volgorde. Voor een gedetailleerde databeschrijving van het GRB raadpleegt u best het GRB-objectenhandboek via www.agiv.be/producten/grb/objectcatalogus/entiteiten.', attribution: 'Agentschap voor Geografische Informatie Vlaanderen', queryable: false, default_layers: [ 'GRB_BSK' ], layers: { 'GRB_BSK': { queryable: false, title: 'GRB-basiskaart', abstract: 'Deze laag omvat alle (GRB-) entiteiten die zichtbaar zijn in de GRB-basiskaart' } } },
      '3202': { id: 3202, url: 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/omwrgbmrvl/wms', crs: 'EPSG:3857', bbox: new OL.Bounds(280525.11676, 6557859.253174342, 661237.77522, 6712007.501374752), format: 'image/jpeg', title: 'Orthomozaïek Vlaanderen', area: 'BE', abstract: 'WMS die de compilatie weergeeft van de meest recente middenschalige orthofotomozaïeken uit de wintervluchten die voor ieder deel van Vlaanderen beschikbaar zijn die wordt bijgewerkt telkens er een nieuw deel beschikbaar is.', attribution: 'Agentschap voor Geografische Informatie Vlaanderen', queryable: true, default_layers: [ 'Ortho', 'Vliegdagcontour' ], layers: { 'Ortho': { queryable: false, title: 'Orthofotomozaïek, middenschalig, winteropnamen, kleur, meest recent, Vlaanderen', abstract: 'Deze rasterlaag is een compilatie van de meest recente orthofotomozaëken (winteropnamen) die voor ieder deel  van Vlaanderen beschikbaar zijn en wordt  bijgewerkt telkens er een nieuw deel ingewonnen is. De compilatie heeft een grondresolutie van 25 cm.' }, 'Vliegdagcontour': { queryable: true, title: 'Vliegdagcontour Orthofotomozaïek', abstract: 'Deze vectorlaag geeft voor ieder deel van de rastercompilatie de opnamedatum weer.' } } },
      '3203': { id: 3203, url: 'https://geoservices.wallonie.be/arcgis/services/TOPOGRAPHIE/PICC_VDIFF/MapServer/WMSServer', crs: 'EPSG:3857', bbox: new OL.Bounds(295477.314255, 740430.033845, 6347477.319654, 6640885.073618), format: 'image/png', title: 'PICC, Service de visualisation', area: 'BE', abstract: 'Service de visualisation du Projet Informatique de Cartographie Continue (PICC)', attribution: 'Service public de Wallonie', queryable: true, default_layers: [ '3', '4', '6', '8', '9', '17', '18', '19', '25', '26', '27' ], layers: { '1': { queryable: true, title: 'Relief: ligne' }, '3': { queryable: true, title: 'Hydrographie: bord' }, '4': { queryable: true, title: 'Hydrographie: axe' }, '6': { queryable: true, title: 'Reseau ferroviaire: ligne' }, '8': { queryable: true, title: 'Voirie: axe >= 5k' }, '9': { queryable: true, title: 'Voirie: axe' }, '10': { queryable: true, title: 'Voirie: ligne' }, '12': { queryable: true, title: 'Occupation du sol: surface' }, '13': { queryable: true, title: 'Occupation du sol: bord' }, '14': { queryable: true, title: 'Occupation du sol: ligne' }, '15': { queryable: true, title: 'Occupation du sol: point' }, '17': { queryable: true, title: 'Construction: emprise du batiment' }, '18': { queryable: true, title: 'Construction: ouvrage d\'art: bord' }, '19': { queryable: true, title: 'Construction: bord du batiment' }, '21': { queryable: true, title: 'Equipement: surface' }, '22': { queryable: true, title: 'Equipement: axe' }, '23': { queryable: true, title: 'Equipement: ligne' }, '24': { queryable: true, title: 'Equipement: point' }, '25': { queryable: true, title: 'Symbologie' }, '26': { queryable: true, title: 'Adresses' }, '27': { queryable: true, title: 'Toponymie' } } },
      '3204': { id: 3204, url: 'http://geoserver.gis.irisnet.be/geoserver/wms', crs: 'EPSG:31370', bbox: new OL.Bounds(471578, 6579050, 499555, 6606337), format: 'image/png', title: 'CIRB', area: 'BE', abstract: 'Web Map Service for the CIRB layers', attribution: 'Irisnet GIS', queryable: true, default_layers: [ 'urbisNL' ], layers: { 'urbisNL': { queryable: false, title: 'Urbis Base Map NL', abstract: 'This layer represents the base map in dutch.' }, 'urbisFR': { queryable: false, title: 'Urbis Base Map FR', abstract: 'This layer represents the base map in french.' }, 'urbis:ortho2014': { queryable: false, title: 'Ortho 2014', abstract: 'This layer is ortho 2014 in the Brussels region' }, 'urbis:ortho2012': { queryable: false, title: 'Ortho 2012', abstract: 'This layer is ortho 2012 in the Brussels region' }, 'urbis:ortho2009': { queryable: false, title: 'Ortho 2009', abstract: 'This layer is ortho 2009 in the Brussels region' }, 'urbis:ortho2004': { queryable: false, title: 'Ortho 2004', abstract: 'This layer is ortho 2004 in the Brussels region' }, 'urbisFRGray': { queryable: false, title: 'Urbis Base Map Gray FR', abstract: 'This layer represents the gray base map in french.' }, 'urbisNLGray': { queryable: false, title: 'Urbis Base Map Gray NL', abstract: 'This layer represents the gray base map in dutch.' }, 'urbis:LabeledStreetAxe': { queryable: false, title: 'Labeled Street Axe', abstract: 'Labeled StreetAxe for OSIRIS, bug fix for the juxtaposition of street name on building' }, 'urbis:URB_A_ADPT': { queryable: false, title: 'Address points', abstract: 'This layer is the localization of address points of the Brussels Region' }, 'urbis:URB_A_BU': { queryable: true, title: 'Buildings', abstract: 'This layer represents the buildings of the Brussels Region' }, 'urbis:URB_A_MD': { queryable: true, title: 'Monitoring districts', abstract: 'This layer reprensent the monitoring districts of the Brussels Region' }, 'urbis:URB_A_MU': { queryable: true, title: 'Municipalities', abstract: 'This layer represents the municipalities of the Brussels Region' }, 'urbis:URB_A_MY_SA': { queryable: false, title: 'Street axes', abstract: 'This layer represents the axes of the street of the Brussels Region' }, 'urbis:URB_A_MY_SS': { queryable: false, title: 'Street sections', abstract: 'This layer represents the street sections of the Brussels Region' }, 'urbis:URB_A_MZ': { queryable: true, title: 'Municipal zips', abstract: 'This layer is the zip of the municipality of the Brussels Region' }, 'urbis:URB_A_POL': { queryable: true, title: 'Police districts', abstract: 'This layer is the police districts of the Brussels Region' }, 'urbis:URB_A_RE': { queryable: false, title: 'Region', abstract: 'This layer is the Brussels Region' }, 'urbis:URB_A_SD': { queryable: true, title: 'Statistical districts', abstract: 'This layer represents the limit of the statistical districts of the Brussels Region' }, 'urbis:URB_A_SN': { queryable: false, title: 'Street nodes', abstract: 'This layer represents the street nodes. Each node is an intersection or an extremity of a street axe' }, 'urbis:URB_M_RTLINE': { queryable: false, title: 'Rail tracks', abstract: 'This layer represents the rails tracks.' }, 'urbis:URB_M_SHAPE': { queryable: true, title: 'UrbisMap shapes', abstract: 'This layer represents the shapes of UrbisMap.' }, 'urbis:URB_M_TONAME_LIN': { queryable: true, title: 'Toponymy', abstract: 'This layer represents the toponymy of public places.' }, 'urbis:URB_M_ZIPOINT': { queryable: true, title: 'Points of interest', abstract: 'This layer represents the point of zone of interest.' }, 'urbis:URB_T_LINE': { queryable: false, title: 'Urbis Topo Lines', abstract: 'This layer represents the topo lines.' }, 'urbis:URB_T_POINT': { queryable: true, title: 'Urbis Topo Points', abstract: 'This layer represents the topo points.' }, 'urbis:URB_A_SI_POINT_VW': { queryable: false, title: 'Street sides' }, 'urbis:MuNeighbour': { queryable: true, title: 'Neighbour Municipalities' }, 'urbis:Highways': { queryable: false, title: 'Highways' } } },
      '3205': { id: 3205, url: 'https://geo.agiv.be/ogc/wms/gipodpubliek', crs: 'EPSG:3857', bbox: new OL.Bounds(280525, 6557859, 661237, 6712007), format: 'image/png', title: 'GIPOD Publieke Informatie', area: 'BE', abstract: 'Deze WMS geeft een overzicht van alle concreet geplande en in uitvoering zijnde werken, manifestaties en andere innames op het openbaar domein met hun bijhorende omleidingen en verwachte hinder, voor de komende maand.', attribution: 'Agentschap voor Geografische Informatie Vlaanderen', queryable: true, default_layers: [ 'ManOml', 'ManCon', 'ManIcoon', 'WoOml', 'WoCon', 'WoIcoon' ], layers: { 'ManOml': { queryable: false, title: 'Omleidingen van de manifestaties', abstract: 'Deze laag geeft een overzicht van alle omleidingen, horend bij manifestaties en andere innames op het openbaar domein, voor de komende maand.' }, 'ManCon': { queryable: true, title: 'Manifestaties contour', abstract: 'Deze laag geeft een overzicht met contouren van alle manifestaties en andere innames op het openbaar domein en de verwachte hinder voor de komende maand.' }, 'ManIcoon': { queryable: false, title: 'Manifestaties icoon', abstract: 'Deze laag geeft een overzicht met iconen van alle manifestaties en andere innames op het openbaar domein en de verwachte hinder voor de komende maand.' }, 'WoOml': { queryable: false, title: 'Omleidingen van de werkopdrachten', abstract: 'Deze laag geeft een overzicht van alle omleidingen, horend bij werkopdrachten op het openbaar domein, voor de komende maand.' }, 'WoCon': { queryable: true, title: 'Werkopdrachten contour', abstract: 'Deze laag geeft een overzicht met contouren van alle werkopdrachten op het openbaar domein en de verwachte hinder voor de komende maand.' }, 'WoIcoon': { queryable: false, title: 'Werkopdrachten icoon', abstract: 'Deze laag geeft een overzicht met iconen van alle werkopdrachten op het openbaar domein en de verwachte hinder voor de komende maand.' } } },
      '3206': { id: 3206, url: 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/omw/wms', crs: 'EPSG:3857', bbox: new OL.Bounds(280525.11676, 6557859.253174342, 661237.77522, 6712007.501374752), format: 'image/jpeg', title: 'Orthomozaïek Vl. Tijdsreeksen', area: 'BE', abstract: 'WMS met de tijdsreeks van middenschalige orthofotomozaïeken met een resolutie van 25cm, gebiedsdekkend voor Vlaanderen', attribution: 'Agentschap voor Geografische Informatie Vlaanderen', queryable: true, default_layers: [ 'OMWRGB15VL', 'OMWRGB15VL_vdc' ], layers: { 'OMWRGB15VL': { queryable: false, title: 'Winteropnamen, 2015', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2015 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB15VL_vdc': { queryable: true, title: 'Winteropnamen, 2015, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB14VL': { queryable: false, title: 'Winteropnamen, 2014', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2014 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB14VL_vdc': { queryable: true, title: 'Winteropnamen, 2014, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB13VL': { queryable: false, title: 'Winteropnamen, 2013', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2013 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB13VL_vdc': { queryable: true, title: 'Winteropnamen, 2013, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB12VL': { queryable: false, title: 'Winteropnamen, 2012', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2012 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB12VL_vdc': { queryable: true, title: 'Winteropnamen, 2012, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB08_11VL': { queryable: false, title: 'Winteropnamen, 2008-2011', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in de periode 2008-2011 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB08_11VL_vdc': { queryable: true, title: 'Winteropnamen, 2008-2011, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB05_07VL': { queryable: false, title: 'Winteropnamen, 2005-2007', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in de periode 2005-2007 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB05_07VL_vdc': { queryable: true, title: 'Winteropnamen, 2005-2007, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB00_03VL': { queryable: false, title: 'Winteropnamen, 2000-2003', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in de periode 2000-2003 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB00_03VL_vdc': { queryable: true, title: 'Winteropnamen, 2000-2003, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' } } },
      '3207': { id: 3207, url: 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/Wegenregister/wms', crs: 'EPSG:3857', bbox: new OL.Bounds(280525, 6557859, 661237, 6712007), format: 'image/png', title: 'Wegenregister', area: 'BE', abstract: 'De Wegenregister-WMS stelt de wegen in het Wegenregister ter beschikking aan de gebruiker. Het Wegenregister is een middenschalig referentiebestand van de wegen in Vlaanderen. Het bevat alle wegen van Vlaanderen, met bijhorende attribuutgegevens.', attribution: 'Agentschap voor Geografische Informatie Vlaanderen', queryable: true, default_layers: [ 'AUTOSWEG', 'WEGGESCH', 'WEGEEN', 'ROT', 'SPECSIT', 'VERKPLEIN', 'OPAFOGKR', 'OPAFGGKR', 'PLLWEG', 'VENTWEG', 'INUITP', 'INUITD', 'WANDFIETS', 'TRAMWEG', 'DIENSTWEG', 'AARDEWEG', 'VEER', 'LABELS' ], layers: { 'AUTOSWEG': { queryable: true, title: 'Autosnelweg', abstract: 'Een "autosnelweg" heeft typisch twee gescheiden parallelle rijbanen met tegengestelde toegelaten rijrichtingen. Op een autosnelweg komen geen gelijkgrondse kruisingen voor. Kruisingen met andere wegen gebeuren steeds ofwel over bruggen of in tunnels.' }, 'WEGGESCH': { queryable: true, title: 'Weg met gescheiden rijbanen', abstract: '"Een weg met gescheiden rijbanen die geen autosnelweg is" wordt gekenmerkt door de aanwezigheid van minstens twee rijbanen (onafhankelijk van het aantal rijstroken) die fysiek gescheiden zijn en tegengestelde toegelaten rijrichtingen hebben.' }, 'WEGEEN': { queryable: true, title: 'Weg met één rijbaan', abstract: 'Wegsegmenten die behoren tot een hoofdcirculatiezone die gekenmerkt wordt door de aanwezigheid van slechts één circulatievak in de dwarsrichting.' }, 'ROT': { queryable: true, title: 'Rotonde', abstract: 'Wegsegmenten die tot de rotonde behoren vormen een gesloten ringvormige structuur. Op deze wegsegmenten is enkel éénrichtingsverkeer toegelaten.' }, 'SPECSIT': { queryable: true, title: 'Speciale verkeerssituatie', abstract: 'Wegsegmenten die behoren tot een min of meer cirkelvormige constructie die geen rotonde is.' }, 'VERKPLEIN': { queryable: true, title: 'Verkeersplein', abstract: 'Wegsegmenten die worden opgenomen in gebieden waar het verkeer ongestructureerd verloopt. Het gaat typisch om marktpleinen, parkeerterreinen of terreinen met een andere functie dan een zuivere verkeersfunctie' }, 'OPAFOGKR': { queryable: true, title: 'Oprit of afrit behorende tot een nietgelijkgrondse kruising', abstract: 'Een "op- of afrit, behorende tot een niet-gelijkgrondse kruising" verzorgt de verbinding tussen twee wegen die zich niet-gelijkgronds kruisen. Alle op- en afritten van autosnelwegen en verkeerswisselaars worden eveneens tot deze klasse gerekend.' }, 'OPAFGGKR': { queryable: true, title: 'Oprit of afrit  behorende tot een gelijkgrondse kruising', abstract: 'Een "op- of afrit, behorende tot een gelijkgrondse kruising" verzorgt de verbinding tussen twee wegen die geen autosnelweg zijn. Zonder de op- of afrit bestaat er nog steeds een topologische verbinding tussen de wegsegmenten waarbij de op- of afrit hoort.' }, 'PLLWEG': { queryable: true, title: 'Parallelweg', abstract: 'Een "parallelweg" is een op- of afrit waarvan de begin- en eindpositie verbonden is met dezelfde autosnelweg. Een "parallelweg" heeft een rechtstreekse verbinding of een verbinding via op- of afritten van een ander type met de bijhorende autosnelweg.' }, 'VENTWEG': { queryable: true, title: 'Ventweg', abstract: 'Een "ventweg" loopt parallel aan een weg met een belangrijke verkeersfunctie die geen autosnelweg is. De weg biedt toegang tot minder belangrijke aanpalende wegen, bestemmingen of adressen en wordt van de hoofdweg gescheiden door kleine constructies.' }, 'INUITP': { queryable: true, title: 'Inrit of uitrit van een parking', abstract: 'Een "in- of uitrit van een parking" is een weg die speciaal ontworpen is om een parkeerterrein of parkeergarage te bereiken of te verlaten.' }, 'INUITD': { queryable: true, title: 'Inrit of uitrit van een dienst', abstract: 'Een "in- of uitrit van een dienst" is een weg die speciaal ontworpen is om een dienst (voorbeeld: luchthaven, station, ziekenhuis, brandweerkazerne, politie, openbare dienst, hotel, restaurant) te bereiken of te verlaten.' }, 'WANDFIETS': { queryable: true, title: 'Wandel- of fietsweg', abstract: 'Op een "wandel- en/of fietsweg" is de verkeerstoegang beperkt tot voetgangers en/of fietsers. De fysieke kenmerken van een "wandel- en/of fietsweg" laten de toegang van andere voertuigen niet toe (smaller dan 2.5m).' }, 'TRAMWEG': { queryable: true, title: 'Tramweg', abstract: 'Een "tramweg" is een weg die speciaal ontworpen is voor het tramverkeer. De fysieke kenmerken van een "tramweg" laten de toegang van andere voertuigen niet toe.' }, 'DIENSTWEG': { queryable: true, title: 'Dienstweg', abstract: 'Een "tramweg" is een weg die speciaal ontworpen is voor het tramverkeer. De fysieke kenmerken van een "tramweg" laten de toegang van andere voertuigen niet toe.' }, 'AARDEWEG': { queryable: true, title: 'Aardeweg', abstract: 'Een "aardeweg" is een weg zonder wegverharding die op zijn minst berijdbaar is voor bepaalde vierwielige motorvoertuigen (bv. terreinwagens, landbouwvoertuigen,...)' }, 'VEER': { queryable: true, title: 'Veer', abstract: 'Een "veer" is bedoeld voor het transport van passagiers, voertuigen of vracht over het water en verbindt vaak twee of meerdere landwegen' }, 'LABELS': { queryable: true, title: 'Straatnamen', abstract: 'Straatnamen volgens CRAB' } } },
      '3101': { id: 3101, url: 'https://geodata.nationaalgeoregister.nl/bag/wms', crs: 'EPSG:3857', bbox: new OL.Bounds(368979.10475029063, 6575606.8651319705, 785145.4377025769, 7057109.006193211), format: 'image/png', title: 'BAG', area: 'NL', abstract: 'De gegevens bestaan uit BAG-panden en een deelselectie van BAG-gegevens van deze panden en de zich daarin bevindende verblijfsobjecten. Ook de ligplaatsen en standplaatsen zijn hierin opgenomen met een deelselectie van BAG-gegevens. De gegevens van de nummeraanduiding zijn in deze services onderdeel van de adresseerbare objecten, hierbij wordt slechts 1 adres opgenomen, dus objecten met meerdere adressen (hoofd- en nevenadressen) zijn niet compleet. In deze services zitten dus niet alle BAG adressen. Wij adviseren u, aangezien er sprake is van beperkte gegevens, om in de webservice BAG Bevragen de actuele gegevens te controleren. Dit kan ook in een van de andere BAG producten: BAG Web, BAG Extract of BAG Compact. BAG Bevragen: http://www.kadaster.nl/web/artikel/productartikel/BAG-Bevragen.htm Andere BAG producten: http://www.kadaster.nl/web/Themas/Registraties/BAG/BAGartikelen/BAG-producten.htm De service wordt dagelijks geactualiseerd.', attribution: 'BAG', queryable: true, default_layers: [ 'bag','ligplaats','pand','verblijfsobject','woonplaats','standplaats' ], layers: { 'bag': { queryable: false, title: 'bag' }, 'ligplaats': { queryable: false, title: 'ligplaats' }, 'pand': { queryable: false, title: 'pand' }, 'standplaats': { queryable: false, title: 'standplaats' }, 'verblijfsobject': { queryable: true, title: 'verblijfsobject' }, 'woonplaats': { queryable: false, title: 'woonplaats' } } },
      '3102': { id: 3102, url: 'http://webservices.gbo-provincies.nl/lufo/services/wms', crs: 'EPSG:28992', bbox: new OL.Bounds(332126.70701065, 6575606.8651319705, 837006.18392751, 7070731.52499591), format: 'image/jpeg', title: 'Luchtfoto (GBO provincies)', area: 'NL', abstract: 'Luchtfoto wms door GBO provincies', attribution: 'GBO provincies', queryable: false, default_layers: [ 'actueel_winter' ], layers: { 'actueel_winter': { queryable: false, title: 'Luchtfoto 2014 (winter)' }, 'actueel_zomer': { queryable: false, title: 'Luchtfoto 2014 (zomer)' }, 'luchtfoto_2013_winter': { queryable: false, title: 'Luchtfoto 2013 (winter)' }, 'luchtfoto_2013_zomer': { queryable: false, title: 'Luchtfoto 2013 (zomer)' }, 'luchtfoto_2012_winter': { queryable: false, title: 'Luchtfoto 2012 (winter)' }, 'luchtfoto_2012_zomer': { queryable: false, title: 'Luchtfoto 2012 (zomer)' }, 'luchtfoto_2011': { queryable: false, title: 'Luchtfoto 2011' }, 'luchtfoto_2010': { queryable: false, title: 'Luchtfoto 2010' }, 'luchtfoto_2009': { queryable: false, title: 'Luchtfoto 2009' }, 'luchtfoto_2008': { queryable: false, title: 'Luchtfoto 2008' } } },
      '3103': { id: 3103, url: 'https://geodata.nationaalgeoregister.nl/weggeg/wms', crs: 'EPSG:3857', bbox: new OL.Bounds(385276.75763551984, 6575606.8651319705, 805841.7938525073, 7065365.041596532), format: 'image/png', title: 'Weggegevens WMS', area: 'NL', abstract: 'De service van Weggegevens bevat op dit moment de lagen maximum snelheden en rijstroken van de rijkswegen.', attribution: 'PDOK', queryable: true, default_layers: [ 'weggegaantalrijbanen','weggegmaximumsnelheden' ], layers: { 'weggegaantalrijbanen': { queryable: true, title: 'Weggegevens aantal rijbanen', }, 'weggegmaximumsnelheden': { queryable: true, title: 'Weggegevens maximumsnelheden', } } },
      '3104': { id: 3104, url: 'https://geodata.nationaalgeoregister.nl/bgt/wms', crs: 'EPSG:28992', bbox: new OL.Bounds(333958.4723798207, 6575606.8651319705, 779236.435552915, 6982997.920389788), format: 'image/png', title: 'INSPIRE View Service PDOK', area: 'NL', abstract: 'De INSPIRE View Service PDOK is een overkoepelende View Service die voor de volgende datasets INSPIRE datasets ontsluit: Hydrografie, Vervoersnetwerken, Beschermde gebieden, Geografische namen', attribution: 'PDOK', queryable: true, default_layers: [ 'bgtstandaard' ], layers: { 'bgtstandaard': { queryable: true, title: 'BGT standaard' } } },
      '3105': { id: 3105, url: 'https://geodata.nationaalgeoregister.nl/nwbwegen/wms', crs: 'EPSG:28992', bbox: new OL.Bounds(333958.4723798207, 6575606.8651319705, 779236.435552915, 6982997.920389788), format: 'image/png', title: 'Hectopunten Rijkswaterstaat', area: 'NL', abstract: 'Het NWB-Wegen is een digitaal geografisch bestand van nagenoeg alle wegen in Nederland. Opgenomen zijn alle wegen die worden beheerd door wegbeheerders als het Rijk, provincies, gemeenten en waterschappen, echter alleen voor zover deze zijn voorzien van een straatnaam of nummer. Dus ook losliggende voet- en fietspaden en onverharde wegen zijn, indien voorzien van een straatnaam, in het NWB-Wegen opgenomen. Indien een weg gescheiden rijbanen heeft, wat vooral het geval is bij Rijkswegen, worden deze als aparte wegvakken in het bestand verwerkt. In totaal beslaat het NWB-Wegen ongeveer 145.000 kilometer gedigitaliseerde wegvakken (in aantal +/-825000). Het NWB-Wegen wordt 4 keer per jaar geactualiseerd.', attribution: 'PDOK', queryable: true, default_layers: [ 'hectopunten', 'wegvakken' ], layers: { 'hectopunten': { queryable: true, title: 'NWB Wegen hectopunten' }, 'wegvakken': { queryable: true, title: 'NWB Wegen wegvakken' } } }
    };
    checkVersion();

    // List of map handles
    var handles = [];
    var tab = addOpenMapsTab();
    
    if (Waze.app.modeController) {
      Waze.app.modeController.model.bind('change:mode', exportFunction(function(model, modeId) {
        if (modeId == 0) {
          addOpenMapsTab(tab);
        }
      }, unsafeWindow));
    }

    // Satellite imagery toggle
    var satImageryDiv = document.createElement('div');
    satImageryDiv.className = 'controls-container';
    var satImagery = document.createElement('input');
    satImagery.type = 'checkbox';
    satImagery.id = 'satImagery-on';
    satImagery.checked = Waze.map.layers[0].getVisibility();
    satImagery.addEventListener('click', function() {
      Waze.map.layers[0].setVisibility(this.checked);
    });
    Waze.map.layers[0].events.register('visibilitychanged', null, exportFunction(function() {
      satImagery.checked = Waze.map.layers[0].getVisibility();
    }, unsafeWindow));
    satImageryDiv.appendChild(satImagery);
    var satImageryLabel = document.createElement('label');
    satImageryLabel.htmlFor = 'satImagery-on';
    satImageryLabel.appendChild(document.createTextNode(I18n.t('openmaps.satellite_imagery')));
    satImageryDiv.appendChild(satImageryLabel);
    tab.appendChild(satImageryDiv);
    
    // List of maps visible in Open Maps
    var title = document.createElement('h4');
    title.appendChild(document.createTextNode(I18n.t('openmaps.maps_title')));
    title.style.marginBottom = '5px';
    tab.appendChild(title);
    var handleList = document.createElement('ul');
    $(handleList).sortable(cloneInto({
      forcePlaceholderSize: true,
      placeholderClass: 'result',
      handle: '.title'
    }, unsafeWindow)).bind('sortupdate', exportFunction(function(e, change) {
      var movedHandle = handles.splice(change.oldElementIndex, 1)[0];
      handles.splice(change.elementIndex, 0, movedHandle);
      if (change.elementIndex >= 0 && change.elementIndex < handles.length) { // sanity check
        var aerialImageryIndex = Waze.map.getLayerIndex(Waze.map.getLayersBy('uniqueName', 'satellite_imagery')[0]);
        Waze.map.setLayerIndex(movedHandle.layer, (aerialImageryIndex >= 0 ? aerialImageryIndex : 0) + change.elementIndex + 1);
      }
      saveMapState();
    }, unsafeWindow));
    handleList.className = 'result-list';
    tab.appendChild(handleList);

    // Select box to add new Open Maps maps
    var addMap = document.createElement('select');
    addMap.className = 'form-control';
    addMap.style.margin = '8px 0';
    updateMapSelector();
    Waze.map.events.register('moveend', null, exportFunction(updateMapSelector, unsafeWindow));
    addMap.addEventListener('change', function() {
      if (addMap.selectedIndex != 0) {
        var mapId = addMap.options[addMap.selectedIndex].value;
        handles.push(new MapHandle(maps[mapId]));
        saveMapState();
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
    
    var idGenerator = (function() {
      var counter = 0;
      return {
        getNext: function() {
          return counter++;
        }
      };
    })();
    
    // Try to convert any previous localStorage data
    if (typeof localStorage.OM_previousMap != 'undefined' || typeof localStorage.OM_opacity != 'undefined') {
      if (typeof maps[localStorage.OM_previousMap] != 'undefined') {
        handles.push(new MapHandle(maps[localStorage.OM_previousMap], { opacity: localStorage.OM_opacity }));
        saveMapState();
      }
      localStorage.removeItem('OM_previousMap');
      localStorage.removeItem('OM_opacity');
    }
    // Reload previous map(s)
    if (typeof localStorage.OpenMaps != 'undefined') {
      var storage = JSON.parse(localStorage.OpenMaps);
      storage.state.active.forEach(function(mapHandle, i) {
        if (maps[mapHandle.mapId] == undefined) { // no strict equal as null should fail as well
          storage.state.active.splice(i, 1);
          localStorage.OpenMaps = JSON.stringify(storage);
          return;
        }
        handles.push(new MapHandle(maps[mapHandle.mapId], {
          opacity: mapHandle.opacity,
          layers: mapHandle.layers,
          hidden: mapHandle.hidden,
          transparent: mapHandle.transparent
        }));
        saveMapState();
      });
    }
    // Add the control to catch a click on the map area for retrieving map information
    var queryParams = null;
    var queryWindow = document.createElement('div');
    queryWindow.style.display = 'none';
    queryWindow.style.top = '10px';
    queryWindow.style.left = '100px';
    queryWindow.style.right = '60px';
    queryWindow.style.backgroundColor = '#fff';
    queryWindow.style.border = '2px solid #ddd';
    queryWindow.style.padding = '5px';
    queryWindow.style.color = '#000';
    queryWindow.style.zIndex = '2000';
    queryWindow.style.position = 'absolute';
    var queryWindowClose = document.createElement('span');
    queryWindowClose.appendChild(document.createTextNode(''));
    queryWindowClose.style.fontFamily = 'FontAwesome';
    queryWindowClose.style.float = 'right';
    queryWindowClose.style.cursor = 'pointer';
    queryWindowClose.style.fontSize = '20px';
    queryWindowClose.style.color = '#fff';
    queryWindowClose.style.padding = '4px';
    queryWindowClose.style.backgroundColor = '#000';
    queryWindowClose.addEventListener('click', exportFunction(function() {
      queryWindow.style.display = 'none';
    }, unsafeWindow));
    queryWindow.appendChild(queryWindowClose);
    var queryWindowTitle = document.createElement('h2');
    queryWindowTitle.style.textAlign = 'center';
    queryWindowTitle.style.fontWeight = 'bold';
    queryWindowTitle.appendChild(document.createTextNode(I18n.t('openmaps.query_window_title')));
    queryWindow.appendChild(queryWindowTitle);
    var queryWindowLoading = document.createElement('p');
    queryWindowLoading.style.textAlign = 'center';
    queryWindowLoading.style.fontSize = '21px';
    var queryWindowLoadingSpinner = document.createElement('span');
    queryWindowLoadingSpinner.className = 'fa fa-spinner fa-pulse';
    queryWindowLoading.appendChild(queryWindowLoadingSpinner);
    queryWindowLoading.appendChild(document.createTextNode(' ' + I18n.t('openmaps.query_window_loading')));
    queryWindow.appendChild(queryWindowLoading);
    var queryWindowContent = document.createElement('div');
    queryWindowContent.style.overflow = 'auto';
    queryWindowContent.style.fontSize = '14px';
    queryWindow.appendChild(queryWindowContent);
    document.getElementById('WazeMap').appendChild(queryWindow);
    var querySymbol = document.createElement('span');
    querySymbol.appendChild(document.createTextNode(''));
    querySymbol.style.fontFamily = 'FontAwesome';
    querySymbol.style.fontSize = '42px';
    querySymbol.style.float = 'left';
    querySymbol.style.margin = '0 15px 30px';
    var getFeatureInfoControl = new OL.Control(cloneInto({
      id: 'GetFeatureInfoControl'
    }, unsafeWindow));
    Waze.map.addControl(getFeatureInfoControl);
    var clickHandler = new OL.Handler.Click(getFeatureInfoControl, cloneInto({
      'click': function(e) {
        getFeatureInfoControl.deactivate();
        queryParams.callback();
        var queryUrl = queryParams.url + '?SERVICE=WMS&REQUEST=GetFeatureInfo&BBOX=' + Waze.map.getExtent().toBBOX() +
            '&LAYERS=' + queryParams.layers + '&QUERY_LAYERS=' + queryParams.layers +
            '&HEIGHT=' + Waze.map.getSize().h + '&WIDTH=' + Waze.map.getSize().w +
            '&VERSION=1.3.0&CRS=EPSG:3857&I=' + e.xy.x + '&J=' + e.xy.y + '&INFO_FORMAT=text/html';
        queryParams = null;
        queryWindowLoading.style.display = 'block';
        while (queryWindowContent.firstChild) {
          queryWindowContent.removeChild(queryWindowContent.firstChild);
        }
        queryWindow.style.display = 'block';
        GM_xmlhttpRequest({
          method: 'GET',
          headers: {
            Accept: 'text/xml'
          },
          url: queryUrl,
          timeout: 10000,
          onload: function(response) {
            queryWindowLoading.style.display = 'none';
            if (response.status == 200) {
              if (!response.responseXML) {
                response.responseXML = new DOMParser().parseFromString(response.responseText, "text/xml");
              }
              // While probably not 100% waterproof, at least this should counter most XSS vectors
              var unwantedNodes = response.responseXML.querySelectorAll('javascript,iframe,frameset,applet,embed,object,style');
              for (var i = 0; i < unwantedNodes.length; i++) {
                unwantedNodes[i].parentNode.removeChild(unwantedNodes[i]);
              }
              var body = response.responseXML.querySelector('body');
              var content = body ? body.textContent.trim() : '';
              if (body && content.length != 0) {
                removeUnsafeAttributes(body);
                queryWindowContent.innerHTML = body.innerHTML;
                queryWindow.style.display = 'block';
              } else {
                querySymbol.style.color = '#999';
                queryWindowContent.appendChild(querySymbol);
                var emptyResponse = document.createElement('p');
                emptyResponse.appendChild(document.createTextNode(I18n.t('openmaps.query_empty_response')));
                queryWindowContent.appendChild(emptyResponse);
              }
            } else {
              querySymbol.style.color = 'red';
              queryWindowContent.appendChild(querySymbol);
              var errorResponseTitle = document.createElement('p');
              errorResponseTitle.appendChild(document.createTextNode(I18n.t('openmaps.errors.network')));
              queryWindowContent.appendChild(errorResponseTitle);
              var errorResponse = document.createElement('p');
              errorResponse.appendChild(document.createTextNode(I18n.t('openmaps.errors.network_description') + response.statusText));
              queryWindowContent.appendChild(errorResponse);
            }
          },
          ontimeout: function(e) {
            log(e);
            queryWindowLoading.style.display = 'none';
            querySymbol.style.color = 'orange';
            queryWindowContent.appendChild(querySymbol);
            var timeoutResponse = document.createElement('p');
            timeoutResponse.appendChild(document.createTextNode(I18n.t('openmaps.errors.timeout_description')));
            queryWindowContent.appendChild(timeoutResponse);
          },
          onerror: function(e) {
            log(e);
            queryWindowLoading.style.display = 'none';
            querySymbol.style.color = 'red';
            queryWindowContent.appendChild(querySymbol);
            var errorResponseTitle = document.createElement('p');
            errorResponseTitle.appendChild(document.createTextNode(I18n.t('openmaps.errors.network')));
            queryWindowContent.appendChild(errorResponseTitle);
            var errorResponse = document.createElement('p');
            errorResponse.appendChild(document.createTextNode(I18n.t('openmaps.errors.see_console')));
            queryWindowContent.appendChild(errorResponse);
          }
        });
      }
    }, unsafeWindow, { cloneFunctions: true }));
    getFeatureInfoControl.handler = clickHandler;
    
    function removeUnsafeAttributes(node) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        for (var i = 0; i < node.attributes.length; i++) {
          var attrName = node.attributes[i].name.toLowerCase();
          if (attrName.startsWith('on') || attrName == 'style' || attrName == 'class' || (attrName == 'href' && node.attributes[i].value.trim().toLowerCase().startsWith('javascript:'))) {
            node.removeAttribute(attrName);
          }
        }
        if (node.localName == 'table') {
          node.setAttribute('border', '1');
        }
      }
      for (var i = 0; i < node.childNodes.length; i++) {
        removeUnsafeAttributes(node.childNodes[i]);
      }
    }
    
    function checkVersion() {
      var version = localStorage.OpenMaps_version,
          scriptVersion = GM_info.script.version;
      if (!version) {
        localStorage.OpenMaps_version = scriptVersion;
      } else if (version !== scriptVersion) {
        if (versions.indexOf(version) === -1) {
          // There's tampering happening if we arrive here, just set to current version and ignore issue
          localStorage.OpenMaps_version = scriptVersion;
          return;
        }
        var message = I18n.t('openmaps.update.message');
        for (var i = versions.indexOf(version)+1; i < versions.length; i++) {
          message += '\nv' + versions[i] + ':\n' + I18n.t('openmaps.update.v' + versions[i].replace(/\./g, '_'));
        }
        localStorage.OpenMaps_version = scriptVersion;
        alert(message);
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
        noMaps.text = I18n.t('openmaps.no_local_maps');
        addMap.appendChild(noMaps);
      } else {
        localMaps.sort(function(a, b) {
          return a.title.localeCompare(b.title);
        });
        localMaps.sort(function(a, b) {
          return a.area.localeCompare(b.area);
        });
        var selectMap = document.createElement('option');
        selectMap.text = I18n.t('openmaps.select_map');
        addMap.appendChild(selectMap);
        var optgroups = {};
        localMaps.forEach(function(map) {
          if (!optgroups[map.area]) {
            optgroups[map.area] = document.createElement('optgroup');
            optgroups[map.area].label = I18n.t('openmaps.areas.' + map.area);
          }
          var option = document.createElement('option');
          option.text = map.title;
          option.value = map.id;
          option.title = map.abstract;
          optgroups[map.area].appendChild(option);
        });
        Object.keys(optgroups).forEach(function(optgroup) {
          addMap.appendChild(optgroups[optgroup]);
        });
      }
      // Have some active maps moved out of view?
      handles.forEach(function(handle) {
        var handleIsLocal = localMaps.find(function(map) { return map.id == handle.mapId }) != undefined;
        if (handleIsLocal && handle.outOfArea) {
          handle.outOfArea = false;
          handle.layer.setVisibility(!handle.hidden);
          handle.updateVisibility();
        }
        if (!handleIsLocal && !handle.outOfArea) {
          handle.outOfArea = true;
          handle.layer.setVisibility(false);
          handle.updateVisibility();
        }
      });
    }

    // Create a tab for Open Maps and possibly receive a previous tab to restore (usually in case of a mode change)
    function addOpenMapsTab(recoveredTab) {
      var userInfo = document.getElementById('user-info'),
          tabHandles = userInfo.querySelector('.nav-tabs'),
          tabs = userInfo.querySelector('.tab-content'),
          tabHandle = document.createElement('li'),
          tab = document.createElement('div');
      tabHandle.innerHTML = '<a href="#sidepanel-openMaps" data-toggle="tab" title="' + I18n.t('openmaps.tab_title') + '"><span class="fa"></span></a>';
      if (recoveredTab) {
        tab = recoveredTab;
      } else {
        tab.id = 'sidepanel-openMaps';
        tab.className = 'tab-pane';
      }
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
            if (!response.responseXML) {
              response.responseXML = new DOMParser().parseFromString(response.responseText, 'text/xml');
            }
            var serviceException = response.responseXML.querySelector('ServiceException');
            if (serviceException) {
              callback({
                title: serviceException.getAttribute('code').replace(/([a-z])([A-Z])/g, '$1 $2'), // de-camelCase
                description: serviceException.textContent.trim()
              });
            } else {
              log('Failed to parse response');
              log(response);
              callback({
                title: I18n.t('openmaps.errors.parse_fail'),
                description: I18n.t('openmaps.errors.see_console')
              })
            }
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
          log('Network error');
          log(e);
          callback({
            title: I18n.t('openmaps.errors.network'),
            description: I18n.t('openmaps.errors.see_console')
          });
        }
      });
    }
      
    function saveMapState() {
      var storage;
      if (localStorage.OpenMaps) {
        storage = JSON.parse(localStorage.OpenMaps);
      }
      if (!storage) {
        storage = {};
      }
      if (!storage.state) {
        storage.state = {};
      }
      storage.state.active = [];
      handles.forEach(function(handle) {
        var handleState = {
          mapId: handle.mapId,
          opacity: handle.opacity,
          layers: handle.mapLayers,
          hidden: handle.hidden,
          transparent: handle.transparent
        };
        storage.state.active.push(handleState);
      });
      localStorage.OpenMaps = JSON.stringify(storage);
    }

    function MapHandle(map, options) {
      var self = this;
      this.layer = null;
      this.mapId = map.id;
      this.mapLayers = [];
      this.opacity = (options && options.opacity ? options.opacity : "100");
      this.outOfArea = !map.bbox.intersectsBounds(Waze.map.getExtent());
      this.hidden = (options && options.hidden ? true : false);
      this.transparent = (options && !options.transparent || map.format == 'image/jpeg' ? false : true);
      var container = document.createElement('li');
      var layerContainer = document.createElement('ul');
      var title = document.createElement('p');
      var description = document.createElement('p');
      var editContainer = document.createElement('div');
      var remove = document.createElement('span');
      var visibility = document.createElement('span');
      var query = document.createElement('span');
      var edit = document.createElement('span');
      var error = document.createElement('span');
      var loadedTiles = 0;
      var totalTiles = 0;
      var layerRedrawNeeded = false; // flag to set when a layer was made visibile/invisible
      // Deal with layers within map
      var layerKeys = Object.keys(map.layers);
      if (options && options.layers) {
        options.layers.forEach(function(oldLayer) { // Necessary if the map no longer contains certain layers that were still stored
          if (layerKeys.indexOf(oldLayer.name) != -1) {
            self.mapLayers.push(oldLayer);
            // Remove layer from map layers
            layerKeys.splice(layerKeys.indexOf(oldLayer.name), 1);
          }
        });
        layerKeys.forEach(function(layerKey) { // Add any new layers at the end of the checkboxes
          self.mapLayers.push({
            name: layerKey,
            visible: false
          });
        });
      } else { // Nothing found, apply its default layer(s)
        layerKeys.forEach(function(layerKey) {
          self.mapLayers.push({
            name: layerKey,
            visible: (map.default_layers.indexOf(layerKey) != -1)
          });
        });
      }
      
      function updateTileLoader() {
        if (loadedTiles == totalTiles) {
          loadedTiles = 0;
          totalTiles = 0;
          title.style.borderImage = 'none';
        } else {
          var percentage = parseInt(loadedTiles * 100 / totalTiles, 10);
          title.style.borderImage = 'linear-gradient(to right, #4f4, #4f4 ' + percentage + '%, #ddd ' + percentage + '%, #ddd) 100 4 stretch';
        }
      }
      
      function createIconButton(icon, title) {
        var button = document.createElement('button');
        button.style.fontFamily = 'FontAwesome';
        button.style.border = 'none';
        button.style.background = 'none';
        button.style.padding = '0 3px';
        button.style.float = 'right';
        button.style.cursor = 'pointer';
        button.style.height = 'auto';
        button.style.outline = 'none';
        button.appendChild(document.createTextNode(icon));
        if (title) {
          button.title = title;
          $(button).tooltip();
        }
        return button;
      }

      this.clearError = function() {
        error.title = '';
        error.style.display = 'none';
      };
      
      this.updateVisibility = function() {
        title.style.color = (self.layer && self.layer.getVisibility() ? '' : '#999');
        visibility.style.color = (self.outOfArea ? '#999' : '');
        visibility.style.cursor = (self.outOfArea ? 'default' : 'pointer');
      };
      
      this.updateLayers = function() {
        var visibleLayers = [];
        for (var i = 0; i < self.mapLayers.length; i++) {
          if (self.mapLayers[i].visible) {
            visibleLayers.push(self.mapLayers[i].name);
          }
        }
        if (visibleLayers && visibleLayers.length == 0 && this.layer) { // Hide map as it has no more layers
          this.layer.setVisibility(false);
        } else if (visibleLayers.length > 0 && !this.layer) { // Add map that received layers
          var params = cloneInto({
            layers: visibleLayers.join(),
            transparent: self.transparent,
            format: map.format
          }, unsafeWindow);
          var options = cloneInto({
            transitionEffect: 'resize',
            attribution: map.attribution,
            isBaseLayer: false
          }, unsafeWindow);
          options.projection = new OL.Projection(map.crs);
          options.tileSize = (map.tile_size ? new OL.Size(map.tile_size, map.tile_size) : new OL.Size(512, 512));
          this.layer = new OL.Layer.WMS(map.title, map.url, params, options);
          this.layer.setOpacity(this.opacity / 100);
          this.layer.setVisibility(!this.hidden && !this.outOfArea);
          this.layer.events.register('tileerror', null, exportFunction(function(obj) {
            if (error.title != '') {
              return;
            }
            error.style.display = 'inline';
            error.title = I18n.t('openmaps.retrieving_error');
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
          var aerialImageryIndex = Waze.map.getLayerIndex(Waze.map.getLayersBy('uniqueName', 'satellite_imagery')[0]);
          Waze.map.setLayerIndex(this.layer, (aerialImageryIndex >= 0 ? aerialImageryIndex : 0) + handles.length + 1);
          this.layer.events.register('visibilitychanged', null, exportFunction(function() {
            self.updateVisibility();
          }, unsafeWindow));
        } else if (layerRedrawNeeded) { // Update layers if there's a change
          this.layer.mergeNewParams(cloneInto({
            layers: visibleLayers.join()
          }, unsafeWindow));
          layerRedrawNeeded = false;
        }
        saveMapState();
      };
      
      remove = createIconButton('', I18n.t('openmaps.remove_layer'));
      remove.addEventListener('click', function(e) {
        Waze.map.removeLayer(self.layer);
        handles.splice(handles.indexOf(self), 1);
        container.parentNode.removeChild(container);
        saveMapState();
      });
      container.appendChild(remove);
      edit = createIconButton('', I18n.t('openmaps.edit_layer'));
      edit.addEventListener('click', function() {
        editContainer.style.display = (editContainer.style.display == 'none' ? 'block' : 'none');
      });
      container.appendChild(edit);
      visibility = createIconButton((self.hidden ? '' : ''), I18n.t('openmaps.hideshow_layer')); // icon-eye-open: , icon-eye-close: 
      visibility.addEventListener('click', function() {
        self.hidden = self.layer.getVisibility();
        self.layer.setVisibility(!self.hidden);
        saveMapState();
      });
      visibility.addEventListener('mouseenter', function() {
        visibility.textContent = (self.hidden ? '' : '');
      });
      visibility.addEventListener('mouseleave', function() {
        visibility.textContent = (self.hidden ? '' : '');
      });
      container.appendChild(visibility);
      if (map.queryable) {
        query = createIconButton('', I18n.t('openmaps.query_layer'));
        query.addEventListener('click', function() {
          this.style.color = 'blue';
          var queryLayers = [];
          self.mapLayers.forEach(function(mapLayer) {
            if (mapLayer.visible && map.layers[mapLayer.name].queryable) {
              queryLayers.push(mapLayer.name);
            }
          });
          queryParams = {
            url: map.url,
            layers: queryLayers.join(),
            callback: function() {
              query.style.color = '';
              document.getElementById('WazeMap').style.cursor = '';
            }
          };
          getFeatureInfoControl.activate();
          document.getElementById('WazeMap').style.cursor = 'help';
        });
        container.appendChild(query);
      }
      error = createIconButton('');
      error.style.color = 'red';
      error.style.display = 'none';
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
      title.style.borderWidth = '2px 0 0 0';
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
      opacityLabel.title = I18n.t('openmaps.opacity_label_tooltip');
      $(opacityLabel).tooltip();
      editContainer.appendChild(opacityLabel);
      var opacitySlider = document.createElement('input');
      opacitySlider.type = 'range';
      opacitySlider.max = 100;
      opacitySlider.min = 5;
      opacitySlider.step = 5;
      opacitySlider.value = this.opacity;
      opacitySlider.style.verticalAlign = 'middle';
      opacitySlider.addEventListener('input', function() {
        self.layer.setOpacity(this.value / 100);
        self.opacity = this.value;
        saveMapState();
      });
      editContainer.appendChild(opacitySlider);
      if (map.format != 'image/jpeg') {
        var transparentContainer = document.createElement('div');
        transparentContainer.className = 'controls-container';
        var checkId = idGenerator.getNext();
        var transparentCheck = document.createElement('input');
        transparentCheck.type = 'checkbox';
        transparentCheck.checked = this.transparent;
        transparentCheck.id = 'transparent' + checkId;
        transparentCheck.addEventListener('click', exportFunction(function() {
          self.layer.mergeNewParams(cloneInto({
            transparent: this.checked
          }, unsafeWindow));
          self.transparent = this.checked;
          saveMapState();
        }, unsafeWindow));
        transparentContainer.appendChild(transparentCheck);
        var transparentLabel = document.createElement('label');
        transparentLabel.title = I18n.t('openmaps.transparent_label_tooltip');
        $(transparentLabel).tooltip();
        transparentLabel.htmlFor = 'transparent' + checkId;
        transparentLabel.appendChild(document.createTextNode(I18n.t('openmaps.transparent_label')));
        transparentContainer.appendChild(transparentLabel);
        editContainer.appendChild(transparentContainer);
      }
      layerContainer.style.overflowY = 'auto';
      layerContainer.style.maxHeight = '15em';
      layerContainer.className = 'result-list';
      self.mapLayers.forEach(function(layerItem) {
        var mapLayer = map.layers[layerItem.name];
        var item = document.createElement('li');
        item.className = 'result';
        var layerHandle = document.createElement('span');
        var layerTitle = document.createElement('span');
        var visibility = document.createElement('span');
        visibility = createIconButton('');
        visibility.addEventListener("click", exportFunction(function() {
          var subjectLayer = self.mapLayers.find(function(mapLayer) { return mapLayer.name == layerItem.name; });
          subjectLayer.visible = !subjectLayer.visible;
          layerTitle.style.color = (subjectLayer.visible ? '' : '#999');
          layerRedrawNeeded = true;
          self.updateLayers.call(self);
        }, unsafeWindow));
        item.appendChild(visibility);
        if (mapLayer.queryable) {
          var layerQuery = document.createElement('span');
          layerQuery = createIconButton('');
          layerQuery.addEventListener('click', function() {
            this.style.color = 'blue';
            queryParams = {
              url: map.url,
              layers: layerItem.name,
              callback: function() {
                layerQuery.style.color = '';
                document.getElementById('WazeMap').style.cursor = '';
              }
            };
            getFeatureInfoControl.activate();
            document.getElementById('WazeMap').style.cursor = 'help';
          });
          item.appendChild(layerQuery);
        }
        layerHandle.style.fontFamily = 'FontAwesome';
        layerHandle.style.letterSpacing = '1px';
        layerHandle.style.color = '#c2c2c2';
        layerHandle.style.cursor = 'move';
        layerHandle.style.fontSize = '11px';
        layerHandle.appendChild(document.createTextNode(' '));
        layerTitle.appendChild(layerHandle);
        layerTitle.className = 'title';
        layerTitle.style.cursor = 'default';
        layerTitle.style.color = (layerItem.visible ? '' : '#999');
        layerTitle.appendChild(document.createTextNode(mapLayer.title));
        layerTitle.addEventListener('click', exportFunction(function(e) {
          visibility.dispatchEvent(new MouseEvent('click'));
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
      });
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
      }, unsafeWindow)).bind('sortupdate', exportFunction(function(e, change) {
        if (change.elementIndex < 0 || change.elementIndex >= self.mapLayers.length || change.oldElementIndex < 0 || change.oldElementIndex >= self.mapLayers.length) { // Sanity check
          log('Received an invalid element index when reordering map layers. Old index: ' + change.oldElementIndex + ', new index: ' + change.elementIndex);
          return;
        }
        self.mapLayers.splice(change.elementIndex, 0, self.mapLayers.splice(change.oldElementIndex, 1)[0]);
        layerRedrawNeeded = self.mapLayers[change.elementIndex].visible; // Only redraw if it was a visible layer
        self.updateLayers.call(self);
      }, unsafeWindow));
      
      this.updateLayers();
      this.updateVisibility();
    }
  }

  function log(message) {
    if (typeof message === 'string') {
      console.log('%cWME Open Maps: %c' + message, 'color:black', 'color:#d97e00');
    } else {
      console.log('%cWME Open Maps:', 'color:black', message);
    }
  }

  init();
})();
