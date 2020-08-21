// ==UserScript==
// @name        WME OpenMaps
// @author      Tom 'Glodenox' Puttemans
// @namespace   http://www.tomputtemans.com/
// @description Add additional maps that are released as open data to the Waze Map Editor
// @include     /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor.*$/
// @connect     wallonie.be
// @connect     informatievlaanderen.be
// @connect     opendata.apps.mow.vlaanderen.be
// @connect     www.mercator.vlaanderen.be
// @connect     irisnet.be
// @connect     data-mobility.brussels
// @connect     ccff02.minfin.fgov.be
// @connect     nationaalgeoregister.nl
// @connect     geoservices.rijkswaterstaat.nl
// @connect     rj.gov.br
// @connect     wvgis.wvu.edu
// @connect     nsdig2gapps.ncsi.gov.om
// @connect     *
// @icon        data:image/png;base64,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
// @supportURL  https://github.com/Glodenox/wme-om/issues
// @version     3.1.9
// @require     https://bowercdn.net/c/html.sortable-0.4.4/dist/html.sortable.js
// @grant       GM_xmlhttpRequest
// ==/UserScript==

/* global W, I18n, sortable, OpenLayers, Proj4js, $ */

var styleElement;

function init(e) {
  if (e && e.user == null) {
    return;
  }
  if (typeof W === 'undefined' || typeof W.map === 'undefined' || typeof W.prefs === 'undefined' || typeof W.app.modeController === 'undefined') {
    setTimeout(init, 800);
    log('Waze object unavailable, map still loading');
    return;
  }
  if (document.getElementById('user-info') == null) {
    setTimeout(init, 500);
    log('user-info element not yet available, map still loading');
    return;
  }
  if (typeof OpenLayers === 'undefined') {
    setTimeout(init, 300);
    return;
  }
  if (typeof W.loginManager === 'undefined') {
    setTimeout(init, 300);
    return;
  }
  if (!W.loginManager.user) {
    W.loginManager.events.register("login", null, init);
    W.loginManager.events.register("loginStatus", null, init);
    if (!W.loginManager.user) {
      return;
    }
  }
  if (document.querySelector('.list-unstyled.togglers .group') === null) {
    setTimeout(init, 200);
    log('No layer drawer found yet...');
    return;
  }

  var versions = ['2.3.0', '2.3.1', '2.3.2', '2.3.3', '2.3.4', '2.3.5', '2.3.6', '2.3.7', '2.3.8', '2.3.9', '2.3.10', '2.3.11', '2.4.0', '2.5.0', '2.5.1', '2.5.2', '2.6.0', '2.6.1', '2.6.2', '2.7.0', '2.7.1', '2.7.2', '2.7.3', '2.7.4', '2.7.5', '2.7.6', '2.7.7', '2.8.0', '2.8.1', '2.8.2', '2.8.3', '2.8.4', '2.8.5', '2.8.6', '2.8.7', '2.8.8', '3.0.0', '3.0.1', '3.0.2', '3.0.3', '3.0.4', '3.0.5', '3.0.6', '3.0.7', '3.1.0', '3.1.1', '3.1.2', '3.1.3', '3.1.4', '3.1.5', '3.1.6', '3.1.7', '3.1.8', '3.1.9'];
  // set up language string
  var translations = {
    en: {
      tab_title: 'Open Maps',
      maps_title: 'Active Maps',
      no_local_maps: 'No maps found for this area',
      hide_tooltips: 'Hide help',
      show_tooltips: 'Show help',
      expand: 'Click to expand',
      collapse: 'Click to collapse',
      hideshow_layer: 'Hide/Show map',
      query_window_title: 'Map Location Query',
      query_window_loading: 'Retrieving information from map service...',
      query_window_switch: 'Toggle between the processed and the original data',
      query_window_query: 'Perform this query again elsewhere on the map',
      query_empty_response: 'No response received from map service at this location. Perhaps try somewhere else or try querying another layer?',
      query_table_property: 'Property',
      query_table_value: 'Value',
      retrieving_error: 'Retrieving error...',
      query_layer: 'Query a certain location of this map for more information by clicking somewhere on the map',
      external_link_tooltip: 'Show this location in this map\'s viewer',
      edit_layer: 'Edit map',
      remove_layer: 'Remove map',
      layer_out_of_range: 'Map might not display at the current zoom level',
      satellite_imagery: 'Display satellite imagery',
      select_map: 'Select a map to add',
      opacity_label: 'Opacity',
      opacity_label_tooltip: 'Adjust how transparant the layer is',
      transparent_label: 'Transparent',
      transparent_label_tooltip: 'Make the map background transparent',
      map_improvement_label: 'Improve map display',
      map_improvement_label_tooltip: 'Apply several improvements to the received map tiles',
      map_layers_title: 'Map layers',
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
        BR: 'Brazil',
        LU: 'Luxembourg',
        NL: 'The Netherlands',
        OM: 'Oman',
        US: 'United States'
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
        v2_3_7: '- Fixed map layer sorting\n- Defunct layer cleanup\n- Add Wegenregister map for Belgium',
        v2_3_8: '- Added indication for unsupported zoom levels\n- Added new layer to the PDOK map in the Netherlands',
        v2_3_9: '- Support new URL for WME beta',
        v2_3_10: '- Updated layers for GBO Provincies satellite imagery',
        v2_3_11: '- Bug fix for WME beta that caused the script to halt\n(layer drawer will be adjusted later on)',
        v2_4_0: '- Support new layer drawer\n- Updated Orthomozaïek Vl. Tijdsreeksen to default to 2016\n- Added map with administrative borders for Flanders',
        v2_5_0: '- Restyling and rework of query result window\n- Several layer preference and location fixes',
        v2_5_1: '- Allow minimizing of query result window\n- You can now see the original data as well',
        v2_5_2: '- Queries can now be repeated from their results window\n- Query results ordering has been improved\n- Query results display better within house number editing mode',
        v2_6_0: '- Added basic map for Rio de Janeiro\n- Improved translations while adding support for Portuguese',
        v2_6_1: '- Fixed PICC map as some road layers were renamed',
        v2_6_2: '- Added new satellite source for Flanders, Belgium',
        v2_7_0: '- Improve UI in various locations\n- Provide links to external map viewers\n- Allow hiding of help messages',
        v2_7_1: '- Bugfix: tooltips hiding edge case solved\n- Bugfix: Wrong indication of missing map data at certain zoom levels',
        v2_7_2: '- Fix text overflow in layer menu\n- Fix script activation on missing trailing slash in URL\n- Changed map query icon to pointing hand',
        v2_7_3: '- Internal fix for beta (hasUser function was removed)',
        v2_7_4: '- Recover from changing distance unit\n- Updated Orthofotomozaïek Tijdsreeksen map (Belgium)',
        v2_7_5: '- Added new CRAB Adrespunten map\n- Fixed tooltips being partially covered in new layout\n- Attempt at fixing maps invisible at zoom 100%\n- Recover layers menu when using the events mode',
        v2_7_6: '- Fix BAG map constraints\n- Fix opacity slider that was stuck at 100%',
        v2_7_7: '- Fix an internal issue that would otherwise pop up in two months',
        v2_8_0: '- Adjust query window location\n- Replace GBO Provincies map with PDOK\n- Remove unsafeWindow code',
        v2_8_1: '- Fixed Hectopunten map (NL)\n- Added Kadastrale Kaart (NL)\n- Removed deprecated BGT map (NL)',
        v2_8_2: '- Added Ortho Vl. 2013-2015 Grootschalig (BE)\n- Added Snelheidsregimes en referentiepunten AWV (BE)',
        v2_8_3: '- Removed Waze April Fools button\n- Added N23 Westfrisiaweg map (NL)',
        v2_8_4: '- Added Administrative Borders Map (BE)',
        v2_8_5: '- Updated CIRB map (BE)',
        v2_8_6: '- Added GIPOD Actueel (BE)',
        v2_8_7: '- Updated Orthomozaïek Vlaanderen (BE)',
        v2_8_8: '- Added Orthophotos 2016 and Réseau routier régional (BE)',
        v3_0_0: '- Added support for new map types\n- Adjusted to new layer menu layout',
        v3_0_1: '- Revert BAG map (NL)',
        v3_0_2: '- Reverted release 3.0 as there were too many breaking bugs',
        v3_0_3: '- Adjusted to new layer menu layout\n- Allow proper removal of broken map layers',
        v3_0_4: '- Fixes for recent WME update\n- Fixed map loading progress bar',
        v3_0_5: '- Added West Virginia Leaves Off map (US)\n- Added Maximumsnelheden map (NL)',
        v3_0_6: '- Added Verkeersborden en Afgeleide Snelheidslimieten maps (BE)\n- Fixed Snelheidsregimes en referentiepunten AWV (BE)',
        v3_0_7: '- Several UI fixes\n- Updated West Virginia Leaves Off map (US)',
        v3_1_0: '- Added Oman map\n- Added various graphical improvements\n- Improved layout\n- Updated/fixed various other maps',
        v3_1_1: '- Hide blank map tiles\n- Various minor layout changes and bugfixes',
        v3_1_2: '- Small performance improvements',
        v3_1_3: '- Added a couple of maps for Brussels (BE)',
        v3_1_4: '- Added traffic signs map for Flanders (BE)',
        v3_1_5: '- Enabled some extra layers by default for Wegenregister map (BE)\n- Improvements for latest WME version',
        v3_1_6: '- Upgrade BAG map and fix Kadastrale kaart map (NL)',
        v3_1_7: '- Added USDA NAIP map',
        v3_1_8: '- Corrected WV Leaves Off layers and added transparency to WV Leaves Off\n- Added more recent Orthophoto maps for Wallonia (BE)',
        v3_1_9: '- WV Leaves Off layers updated.'
      }
    },
    nl: {
      tab_title: 'Open Maps',
      maps_title: 'Actieve kaarten',
      no_local_maps: 'Geen lokale kaarten gevonden',
      hide_tooltips: 'Hulp verbergen',
      show_tooltips: 'Hulp weergeven',
      expand: 'Klik om uit te breiden',
      collapse: 'Klik om te verbergen',
      hideshow_layer: 'Verberg/Toon kaart',
      query_window_title: 'Kaartlocatie doorzoeken',
      query_window_loading: 'Informatie aan het opvragen bij kaartdienst...',
      query_window_switch: 'Wissel tussen de verwerkte en onbewerkte gegevens',
      query_window_query: 'Voeg deze opvraging elders op de kaart opnieuw uit',
      query_empty_response: 'Geen antwoord ontvangen van de kaartdienst op deze locatie. Misschien kan je een andere locatie proberen of een andere laag bevragen?',
      query_table_property: 'Eigenschap',
      query_table_value: 'Waarde',
      retrieving_error: 'Fout aan het ophalen...',
      query_layer: 'Doorzoek een bepaalde locatie op deze kaart voor meer informatie door ergens op de kaart te klikken',
      edit_layer: 'Pas de kaart aan',
      remove_layer: 'Verwijder kaart',
      layer_out_of_range: 'Deze kaart wordt mogelijk niet weergegeven op dit zoomniveau',
      satellite_imagery: 'Geef satellietbeelden weer',
      select_map: 'Selecteer een kaart om toe te voegen',
      opacity_label: 'Doorzichtigheid',
      opacity_label_tooltip: 'Wijzig de doorzichtigheid van de kaart',
      transparent_label: 'Transparent',
      transparent_label_tooltip: 'Maak de achtergrond van de kaart transparent',
      map_improvement_label: 'Kaartweergave verbeteren',
      map_improvement_label_tooltip: 'Pas allerhande verbeteringen toe op de kaarttegels',
      map_layers_title: 'Kaartlagen',
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
        BR: 'Brazilië',
        LU: 'Luxemburg',
        NL: 'Nederland',
        OM: 'Oman',
        US: 'Verenigde Staten'
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
        v2_3_7: '- Sorteren van kaartlagen hersteld\n- Opschonen van onbestaande kaartlagen\n- Wegenregister toegevoegd voor België',
        v2_3_8: '- Aanduiding toegevoegd voor niet ondersteunde zoomniveaus\n- Nieuwe laag toegevoegd aan de PDOK-kaart in Nederland',
        v2_3_9: '- Ondersteun de nieuwe URL voor de WME beta',
        v2_3_10: '- Kaartlagen van GBO Provincies vernieuwd',
        v2_3_11: '- Bugfix voor de WME beta waarbij de uitvoering van het script stopte\n(de toevoeging van de lagen in het nieuwe menu volgt later)',
        v2_4_0: '- Ondersteuning voor nieuwe laagselector\n- Orthomozaïek Vl. Tijdsreeksen aangepast om standaard de kaart van 2016 te tonen\n- Kaart met administratieve grenzen van Vlaanderen toegevoegd',
        v2_5_0: '- Het venster met zoekresultaten werd vernieuwd\n- De locaties en voorkeuren voor meerdere kaarten werden bijgewerkt',
        v2_5_1: '- Laat het minimaliseren van zoekresultaten toe\n- Je kan nu ook de originele data zien in plaats van de verwerkte data',
        v2_5_2: '- Je kan nu een nieuwe zoekopdracht starten vanuit het resultatenscherm\n- De volgorde van de zoekresultaten werd verbeterd\n- Zoekresultaten worden nu beter weergegeven tijdens het aanpassen van huisnummers',
        v2_6_0: '- Basiskaart toegevoegd voor Rio de Janeiro\n- Vertalingen verbeterd tijdens het toevoegen van het Portugees',
        v2_6_1: '- PICC kaart voor Wallonië bijgewerkt omdat de kaartlaag met straatnamen hernoemd werd',
        v2_6_2: '- Nieuwe mapdienst voor satellietbeelden in Vlaanderen en Brussel toegevoegd',
        v2_7_0: '- Verschillende verbeteringen aan de interface\n- Toegang tot de externe website van een kaart\n- Mogelijkheid tot verbergen van hulpberichten',
        v2_7_1: '- Bugfix: verbergen van tooltips werkte soms niet goed\n- Bugfix: foutieve aanduiding van probleem weergave op bepaalde zoomniveaus',
        v2_7_2: '- Verbeterde weergave voor te lange tekst in laagselectiemenu\n- Probleem met scriptactivering opgelost wanneer er geen schuine streep in de URL staat\n- Symbool voor map query aangepast naar wijsvinger',
        v2_7_3: '- Interne bugfix voor beta (hasUser functie werd verwijderd)',
        v2_7_4: '- Herstel van een verandering van afstandseenheid\n- Orthofotomozaïek Tijdsreeksen bijgewerkt (België)',
        v2_7_5: '- Nieuwe CRAB Adrespunten kaart\n- Het gedeeltelijk verbergen van tooltips in de nieuwe layout werd opgelost\n- Poging om probleem van onzichtbare kaart bij 100% zichtbaarheid op te lossen\n- Genereer laagmenu opnieuw bij gebruik van evenementmodus',
        v2_7_6: '- Gebied van BAG kaart bijstellen\n- De doorzichtigheid van kaarten zat vast op 100%',
        v2_7_7: '- Een intern probleem opgelost dat over 2 maanden zichtbaar zou worden',
        v2_8_0: '- Locatie van zoekvenster aangepast\n- GBO Provincies kaart werd vervangen door PDOK\n- Code met unsafeWindow verwijderd',
        v2_8_1: '- Hectopunten kaart hersteld (NL)\n- Kadastrale Kaart toegevoegd (NL)\n- BGT kaart verwijderd (NL)',
        v2_8_2: '- Kaart Ortho Vl. 2013-2015 Grootschalig toegevoegd (BE)\n- Kaart Snelheidsregimes en referentiepunten AWV toegevoegd (BE)',
        v2_8_3: '- 1 Aprilgrap van Waze verwijderd\n- N23 Westfrisiaweg kaart toegevoegd (NL)',
        v2_8_4: '- Kaart Administrative Grenzen toegevoegd (BE)',
        v2_8_5: '- CIRB kaart geüpdatet (BE)',
        v2_8_6: '- GIPOD Actueel toegevoegd (BE)',
        v2_8_7: '- Orthomozaïek Vlaanderen bijgewerkt (BE)',
        v2_8_8: '- Orthophotos 2016 en Réseau routier régional toegevoegd (BE)',
        v3_0_0: '- Ondersteuning voor nieuwe maptypes\n- Ondersteunen nieuwe layer menu layout',
        v3_0_1: '- Aanpassingen aan BAG-kaart ongedaan gemaakt (NL)',
        v3_0_2: '- Reverted release 3.0 as there were too many breaking bugs',
        v3_0_3: '- Ondersteunen nieuwe layer menu layout\n- Verwijderen van defecte kaartlagen mogelijk gemaakt',
        v3_0_4: '- Correctie aanpassingen laatste WME update\n- Laadbalken voor inladen kaarttegels hersteld',
        v3_0_5: '- West Virginia Leaves Off kaart toegevoegd (US)\n- Maximumsnelhedenkaart toegevoegd (NL)',
        v3_0_6: '- Verkeersborden en Afgeleide Snelheidslimieten kaarten toegevoegd (BE)\n- Snelheidsregimes en referentiepunten AWV hersteld (BE)',
        v3_0_7: '- Meerdere UI verbeteringen\n- West Virginia Leaves Off kaart bijgewerkt (US)',
        v3_1_0: '- Kaart voor Oman toegevoegd\n- Meedere verbeteringen in kaartweergave\n- Verbeterde layout\n- Andere kaarten aangepast/hersteld',
        v3_1_1: '- Verberg lege kaarttegels\n- Meerdere kleine lay-out en bug fixes',
        v3_1_2: '- Kleine verbeteringen in performantie toegepast',
        v3_1_3: '- Enkele kaarten toegevoegd voor Brussel (BE)',
        v3_1_4: '- Verkeersbordenkaart toegevoegd voor Vlaanderen (BE)',
        v3_1_5: '- Toevoeging van enkele standaardlagen in Wegenregister-kaart (BE)\n- Verbeteringen voor meest recente versie van WME',
        v3_1_6: '- Upgrade naar BAG versie 1.1 en Kadastrale kaart versie 4 (NL)',
        v3_1_7: '- USDA NAIP kaart toegevoegd',
        v3_1_8: '- Gecorrigeerde WV Leaves Off-lagen en transparantie toegevoegd aan WV Leaves Off\n- Meer recente Orthophoto-kaarten toegevoegd voor Wallonië (BE)',
        v3_1_9: '- WV Leaves Off laag updates.'
      }
    },
    fr: {
      tab_title: 'Open Maps',
      maps_title: 'Cartes Actives',
      no_local_maps: 'Aucune carte disponible ici',
      opacity_label: 'Opacité',
      areas: {
        BE: 'Belgique',
        BR: 'Brésil',
        LU: 'Luxembourg',
        NL: 'Pays-Bas',
        OM: 'Oman',
        US: 'États Unis'
      },
    },
    'pt-BR': {
      tab_title: 'Open Maps',
      maps_title: 'Ativar Mapas',
      no_local_maps: 'Não foram encontrados mapas para esta área',
      expand: 'Clique para expandir',
      collapse: 'Clique para colapsar',
      hideshow_layer: 'Ocultar/Mostrar mapa',
      query_window_title: 'Consulta de Localização do Mapa',
      query_window_loading: 'Resgatando informação do serviço do mapa...',
      query_window_switch: 'Alternar entre dados processados e originais',
      query_window_query: 'Realize essa consulta novamente em outro lugar no mapa',
      query_empty_response: 'Nenhuma resposta recebida do serviço do mapa neste local. Talvez tente em outro local ou tente consultar outra camada?',
      query_table_property: 'Propriedade',
      query_table_value: 'Valor',
      retrieving_error: 'Resgatando erro...',
      query_layer: 'Consulte uma determinada localização deste mapa para obter mais informações clicando em algum lugar no mapa',
      edit_layer: 'Editar mapa',
      remove_layer: 'Remover mapa',
      layer_out_of_range: 'Mapa não pode ser exibido no nível de zoom atual',
      satellite_imagery: 'Mostrar imagem satélite',
      select_map: 'Selecione o mapa para adicionar',
      opacity_label: 'Opacidade',
      opacity_label_tooltip: 'Ajustar a transparência da camada',
      transparent_label: 'Transparência',
      transparent_label_tooltip: 'Fazer o mapa de plano de fundo transparente',
      map_improvement_label: 'Melhorar a exibição do mapa',
      map_improvement_label_tooltip: 'Aplique várias melhorias nos blocos de mapa',
      map_layers_title: 'Camadas do mapa',
      errors: {
        network: 'Erro na rede',
        network_description: 'Recebido o seguinte código de status ao recuperar informações: ',
        see_console: 'Olhe o console da web para mais detalhes',
        timeout: 'Tempo esgostado',
        timeout_description: 'Resgatando resposta demorou mais de 10s, provavelmente problema na rede',
        parse_fail: 'Não foi possível analisar a mensagem de erro'
      },
      areas: {
        BE: 'Bélgica',
        BR: 'Brasil',
        LU: 'Luxemburgo',
        NL: 'Países Baixos',
        OM: 'Omã',
        US: 'Estados Unidos'
      }
    }
  };
  translations['en-GB'] = translations['en-US'] = translations.en;
  I18n.translations[I18n.currentLocale()].openmaps = translations.en;
  Object.keys(translations).forEach(function(locale) {
    if (I18n.currentLocale() == locale) {
      addFallbacks(translations[locale], translations.en);
      I18n.translations[locale].openmaps = translations[locale];
    }
  });
  function addFallbacks(localeStrings, fallbackStrings) {
    Object.keys(fallbackStrings).forEach(function(key) {
      if (!localeStrings[key]) {
        localeStrings[key] = fallbackStrings[key];
      } else if (typeof localeStrings[key] === 'object') {
        addFallbacks(localeStrings[key], fallbackStrings[key]);
      }
    });
  }

  // List of available maps
  var mapList = [
    { id: 101, title: 'WV Leaves Off', url: 'https://services.wvgis.wvu.edu/arcgis/services/Imagery_BaseMaps_EarthCover/wv_imagery_WVGISTC_leaf_off_mosaic/MapServer/WMSServer', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(-9208722, 4457863, -8641129, 4962223), format: 'image/jpeg', area: 'US', abstract: 'Satellite imagery of West Virginia', attribution: 'West Virginia University', pixelManipulations: [ 'whiteTiles2transparent' ], queryable: false, default_layers: [ '1', '4', '5', '7', '11', '14', '15', '16', '17', '19', '22', '23', '24', '26', '29', '30', '32', '36', '40', '43', '44', '45', '46', '47', '49', '53', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85' ], layers: { '58': { queryable: false, title: ' Barbour_2018 ', }, '57': { queryable: false, title: ' Berkeley_2018 ', }, '77': { queryable: false, title: ' Braxton_2019 ', }, '56': { queryable: false, title: ' Brooke_2018 ', }, '76': { queryable: false, title: ' Cabell_2019 ', }, '75': { queryable: false, title: ' Calhoun_2019 ', }, '74': { queryable: false, title: ' Clay_2019 ', }, '85': { queryable: false, title: ' CountiesImagery_Year ', }, '73': { queryable: false, title: ' Doddridge_2019 ', }, '11': { queryable: false, title: ' Fayette_4inch_2015 ', }, '7': { queryable: false, title: ' Fayette_9inch_2015 ', }, '72': { queryable: false, title: ' Gilmer_2019 ', }, '80': { queryable: false, title: ' Grant_2019 ', }, '53': { queryable: false, title: ' Greenbrier_2018_4inch ', }, '49': { queryable: false, title: ' Greenbrier_2018_9inch ', }, '47': { queryable: false, title: ' Hampshire_2018 ', }, '79': { queryable: false, title: ' Hancock_2019 ', }, '46': { queryable: false, title: ' Hardy_2018 ', }, '71': { queryable: false, title: ' Harrison_2019 ', }, '70': { queryable: false, title: ' Jackson_2019 ', }, '84': { queryable: false, title: ' Jefferson_2020 ', }, '17': { queryable: false, title: ' Kanawha_2017 ', }, '83': { queryable: false, title: ' Lewis_2020 ', }, '45': { queryable: false, title: ' Lincoln_2018 ', }, '44': { queryable: false, title: ' Logan_2018 ', }, '82': { queryable: false, title: ' Marion_2020 ', }, '43': { queryable: false, title: ' Marshall_2019 ', }, '40': { queryable: false, title: ' Mason_2018 ', }, '36': { queryable: false, title: ' McDowell_2018 ', }, '32': { queryable: false, title: ' Mercer_2018 ', }, '78': { queryable: false, title: ' Mineral_2019 ', }, '69': { queryable: false, title: ' Monongalia_2019 ', }, '30': { queryable: false, title: ' Monroe_2018 ', }, '29': { queryable: false, title: ' Morgan_2018 ', }, '26': { queryable: false, title: ' Nicholas_2018 ', }, '68': { queryable: false, title: ' Ohio_2019 ', }, '81': { queryable: false, title: ' Pleasants_2020 ', }, '67': { queryable: false, title: ' Pocahontas_2019 ', }, '16': { queryable: false, title: ' Preston_2016 ', }, '66': { queryable: false, title: ' Putnam_2019 ', }, '23': { queryable: false, title: ' Raleigh_2018 ', }, '24': { queryable: false, title: ' Randolph_2018 ', }, '22': { queryable: false, title: ' Ritchie_2018 ', }, '65': { queryable: false, title: ' Roane_2019 ', }, '5': { queryable: false, title: ' Summers_2014_4inch ', }, '4': { queryable: false, title: ' Summers_2014_9inch ', }, '64': { queryable: false, title: ' Taylor_2019 ', }, '63': { queryable: false, title: ' Tucker_2019 ', }, '62': { queryable: false, title: ' Tyler_2019 ', }, '15': { queryable: false, title: ' Upshur_2016 ', }, '61': { queryable: false, title: ' Wayne_2019 ', }, '60': { queryable: false, title: ' Wetzel_2019 ', }, '59': { queryable: false, title: ' Wirt_2019 ', }, '14': { queryable: false, title: ' Wood_2016 ', }, '1': { queryable: false, title: ' wv_statewide_12_inches ', }, '19': { queryable: false, title: ' Wyoming_2018 ', } } },
    { id: 102, title: 'USDA NAIP Imagery', url: 'https://gis.apfo.usda.gov/arcgis/services/NAIP/USDA_CONUS_PRIME/ImageServer/WMSServer', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(-13894064.421927, -9798.681263, 7587.578073, 6349425.318737), format: 'image/jpeg', area: 'US', abstract: 'USDA NAIP Imagery of the Continuous US', attribution: 'USDA', queryable: false, default_layers: [ '0' ], layers: { '0': { queryable: false, title: 'USDA NAIP Imagery', abstract: 'USDA NAIP Imagery of the Continuous US' } } },
    { id: 3101, title: 'BAG', url: 'https://geodata.nationaalgeoregister.nl/bag/wms/v1_1', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(356916, 6574306, 806539, 7091570), format: 'image/png', area: 'NL', abstract: 'De gegevens bestaan uit BAG-panden en een deelselectie van BAG-gegevens van deze panden en de zich daarin bevindende verblijfsobjecten. Ook de ligplaatsen en standplaatsen zijn hierin opgenomen met een deelselectie van BAG-gegevens. De gegevens van de nummeraanduiding zijn in deze services onderdeel van de adresseerbare objecten, hierbij wordt slechts 1 adres opgenomen, dus objecten met meerdere adressen (hoofd- en nevenadressen) zijn niet compleet. In deze services zitten dus niet alle BAG adressen. Wij adviseren u, aangezien er sprake is van beperkte gegevens, om in de webservice BAG Bevragen de actuele gegevens te controleren. Dit kan ook in een van de andere BAG producten: BAG Web, BAG Extract of BAG Compact. BAG Bevragen: http://www.kadaster.nl/web/artikel/productartikel/BAG-Bevragen.htm Andere BAG producten: http://www.kadaster.nl/web/Themas/Registraties/BAG/BAGartikelen/BAG-producten.htm De service wordt dagelijks geactualiseerd.', attribution: 'BAG', getExternalUrl: function() { return 'https://bagviewer.kadaster.nl/lvbag/bag-viewer/index.html'; }, queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'ligplaats','pand','verblijfsobject','woonplaats','standplaats' ], layers: { 'ligplaats': { queryable: false, title: 'ligplaats' }, 'pand': { queryable: false, title: 'pand' }, 'standplaats': { queryable: false, title: 'standplaats' }, 'verblijfsobject': { queryable: true, title: 'verblijfsobject' }, 'woonplaats': { queryable: false, title: 'woonplaats' } } },
    { id: 3103, title: 'Weggegevens', url: 'https://geodata.nationaalgeoregister.nl/weggeg/wms', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(385276, 6575606, 805842, 7065366), format: 'image/png', area: 'NL', abstract: 'De service van Weggegevens bevat op dit moment de lagen maximum snelheden en rijstroken van de rijkswegen.', attribution: 'PDOK', queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'weggegaantalrijbanen','weggegmaximumsnelheden' ], layers: { 'weggegaantalrijbanen': { queryable: true, title: 'Weggegevens aantal rijbanen' }, 'weggegmaximumsnelheden': { queryable: true, title: 'Weggegevens maximumsnelheden' } } },
    { id: 3105, title: 'Hectopunten Rijkswaterstaat', url: 'https://geodata.nationaalgeoregister.nl/nwbwegen/wms', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(333958, 6575606, 779237, 6982998), zoomRange: [2, 10], format: 'image/png', area: 'NL', abstract: 'Het NWB-Wegen is een digitaal geografisch bestand van nagenoeg alle wegen in Nederland. Opgenomen zijn alle wegen die worden beheerd door wegbeheerders als het Rijk, provincies, gemeenten en waterschappen, echter alleen voor zover deze zijn voorzien van een straatnaam of nummer. Dus ook losliggende voet- en fietspaden en onverharde wegen zijn, indien voorzien van een straatnaam, in het NWB-Wegen opgenomen. Indien een weg gescheiden rijbanen heeft, wat vooral het geval is bij Rijkswegen, worden deze als aparte wegvakken in het bestand verwerkt. In totaal beslaat het NWB-Wegen ongeveer 145.000 kilometer gedigitaliseerde wegvakken (in aantal +/-825000). Het NWB-Wegen wordt 4 keer per jaar geactualiseerd.', attribution: 'PDOK', pixelManipulations: [ 'removePartialBlackTransparency', 'traceGrayscalePixels' ], queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'hectopunten', 'wegvakken' ], layers: { 'hectopunten': { queryable: true, title: 'NWB Wegen hectopunten' }, 'wegvakken': { queryable: true, title: 'NWB Wegen wegvakken' } } },
    { id: 3106, title: 'Luchtfoto (PDOK)', url: 'https://geodata.nationaalgeoregister.nl/luchtfoto/rgb/wms', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(-184489, 6113595, 1383894, 7580463), format: 'image/jpeg', area: 'NL', abstract: 'Een jaarlijks te vernieuwen dataset van luchtopnamen van Nederland met een resolutie van 25cm.', attribution: 'PDOK', pixelManipulations: [ 'whiteTiles2transparent' ], queryable: false, default_layers: [ 'Actueel_ortho25' ], layers: { 'Actueel_ortho25': { queryable: false, title: 'Luchtfoto Actueel Ortho 25cm RGB', abstract: 'Landsdekkende dataset 25cm resolutie kleuren luchtfoto\'s van de meest recente jaargang.' }, '2019_ortho25': { queryable: false, title: 'Luchtfoto 2019 Ortho 25cm RGB', abstract: 'Landsdekkende dataset 25cm resolutie kleuren luchtfoto\'s van 2019.' }, '2018_ortho25': { queryable: false, title: 'Luchtfoto 2018 Ortho 25cm RGB', abstract: 'Landsdekkende dataset 25cm resolutie kleuren luchtfoto\'s van 2018.' }, '2017_ortho25': { queryable: false, title: 'Luchtfoto 2017 Ortho 25cm RGB', abstract: 'Landsdekkende dataset 25cm resolutie kleuren luchtfoto\'s van 2017.' }, '2016_ortho25': { queryable: false, title: 'Luchtfoto 2016 Ortho 25cm RGB', abstract: 'Landsdekkende dataset 25cm resolutie kleuren luchtfoto\'s van 2016.' } } },
    { id: 3107, title: 'Kadastrale kaart', url: 'https://geodata.nationaalgeoregister.nl/kadastralekaart/wms/v4_0', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(385276, 6575606, 805842, 7065366), format: 'image/png', area: 'NL', abstract: 'Overzicht van de ligging van de kadastrale percelen in Nederland. Fungeert als schakel tussen terrein en registratie, vervult voor externe gebruiker vaak een referentiefunctie, een ondergrond ten opzichte waarvan de gebruiker eigen informatie kan vastleggen en presenteren.', attribution: 'PDOK', pixelManipulations: [ 'removePartialBlackTransparency', 'traceGrayscalePixels' ], queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'KadastraleKaart' ], layers: { 'KadastraleKaart': { queryable: true, title: 'Kadastrale Kaart' }, 'Bebouwing': { queryable: true, title: 'Bebouwing' }, 'Label': { queryable: true, title: 'Label' }, 'Bebouwingvlak': { queryable: true, title: 'Bebouwingvlak' }, 'KadastraleGrens': { queryable: true, title: 'Kadastrale Grens' }, 'Bijpijling': { queryable: true, title: 'Bijpijling' }, 'Perceel': { queryable: true, title: 'Perceel' }, 'Perceelvlak': { queryable: true, title: 'Perceelvlak' }, 'Nummeraanduidingreeks': { queryable: true, title: 'Nummeraanduidingreeks' } } },
    { id: 3108, title: 'Maximumsnelheden', url: 'https://geoservices.rijkswaterstaat.nl/apps/geoserver/maximum_snelheden_wegen/ows', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(362161, 6574365, 806630, 7085234), format: 'image/png', area: 'NL', abstract: 'Maximumsnelhedenkaart van alle wegen in Nederland, voorzien door Rijkswaterstaat', attribution: 'Rijkswaterstaat', queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'maximum_snelheden_wegen:max_snelheden_per_wegvak' ], layers: { 'maximum_snelheden_wegen:max_snelheden_per_wegvak': { title: 'Maximumsnelheden per wegvak', queryable: true } } },
    { id: 3109, title: 'Nationaal Wegen Bestand', url: 'https://geodata.nationaalgeoregister.nl/nwbwegen/wms', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(355925, 809871, 6563443, 7096826), format: 'image/png', area: 'NL', abstract: 'Nationaal Wegen Bestand met alle gegevens van de Nederlandse wegen', attribution: 'Nationaal Wegen Bestand', pixelManipulations: [ 'removePartialTransparency' ], queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'wegvakken' ], layers: { 'wegvakken': { title: 'Nationaal Wegen Bestand Wegvakken', queryable: true } } },
    { id: 3201, title: 'GRB Vlaanderen', url: 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB/wms', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(280525, 6557859, 661238, 6712008), format: 'image/png', area: 'BE', abstract: 'Opvragen en visualiseren van het Grootschalig Referentiebestand (GRB) als een kaart. Omvat alle GRB-gegevens gebaseerd op het GRBgis product. De gebruiker kan selecteren welke GRB-gegevens gevisualiseerd moeten worden en in welke volgorde. Voor een gedetailleerde databeschrijving van het GRB raadpleegt u best het GRB-objectenhandboek via www.agiv.be/producten/grb/objectcatalogus/entiteiten.', attribution: 'Agentschap Informatie Vlaanderen', getExternalUrl: function() { var extent = W.map.getExtent(); return 'http://www.geopunt.be/kaart?app=Geopunt-kaart_app&kaart=Basiskaart - GRB: volledige kaart&extent=' + extent.left + ',' + extent.right + ',' + extent.bottom + ',' + extent.top; }, queryable: false, default_layers: [ 'GRB_BSK' ], layers: { 'GRB_BSK': { queryable: false, title: 'GRB-basiskaart', abstract: 'Deze laag omvat alle (GRB-) entiteiten die zichtbaar zijn in de GRB-basiskaart' } } },
    { id: 3202, title: 'Orthomozaïek Vlaanderen', url: 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/omwrgbmrvl/wms', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(280525, 6557859, 661238, 6712008), format: 'image/jpeg', area: 'BE', abstract: 'WMS die de compilatie weergeeft van de meest recente middenschalige orthofotomozaïeken uit de wintervluchten die voor ieder deel van Vlaanderen beschikbaar zijn die wordt bijgewerkt telkens er een nieuw deel beschikbaar is.', attribution: 'Agentschap Informatie Vlaanderen', pixelManipulations: [ 'whiteTiles2transparent' ], getExternalUrl: function() { var extent = W.map.getExtent(); return 'http://www.geopunt.be/kaart?app=Geopunt-kaart_app&kaart=Opnamedatum meest recente luchtfoto in achtergrondkaart&extent=' + extent.left + ',' + extent.right + ',' + extent.bottom + ',' + extent.top; }, queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'Ortho', 'Vliegdagcontour' ], layers: { 'Ortho': { queryable: false, title: 'Orthofotomozaïek, middenschalig, winteropnamen, kleur, meest recent, Vlaanderen', abstract: 'Deze rasterlaag is een compilatie van de meest recente orthofotomozaëken (winteropnamen) die voor ieder deel  van Vlaanderen beschikbaar zijn en wordt  bijgewerkt telkens er een nieuw deel ingewonnen is. De compilatie heeft een grondresolutie van 25 cm.' }, 'Vliegdagcontour': { queryable: true, title: 'Vliegdagcontour Orthofotomozaïek', abstract: 'Deze vectorlaag geeft voor ieder deel van de rastercompilatie de opnamedatum weer.' } } },
    { id: 3203, title: 'PICC, Service de visualisation', url: 'https://geoservices.wallonie.be/arcgis/services/TOPOGRAPHIE/PICC_VDIFF/MapServer/WMSServer', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(295477, 740430, 6347478, 6640886), zoomRange: [4, 10], format: 'image/png', area: 'BE', abstract: 'Service de visualisation du Projet Informatique de Cartographie Continue (PICC)', attribution: 'Service public de Wallonie', pixelManipulations: [ 'traceGrayscalePixels' ], getExternalUrl: function() { return 'http://geoportail.wallonie.be/walonmap'; }, queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ '3', '4', '6', '8', '9', '10', '11', '12', '19', '20', '21', '27', '28', '29' ], layers: { '1': { queryable: true, title: 'Relief: ligne' }, '3': { queryable: true, title: 'Hydrographie: bord' }, '4': { queryable: true, title: 'Hydrographie: axe' }, '6': { queryable: true, title: 'Reseau ferroviaire: ligne' }, '8': { queryable: true, title: 'Voirie: axe >= 5k' }, '9': { queryable: true, title: 'Voirie: axe' }, '10': { queryable: true, title: 'Voirie: axe (5k-50k)' }, '11': { queryable: true, title: 'Voirie: axe' }, '12': { queryable: true, title: 'Voirie: ligne' }, '14': { queryable: true, title: 'Occupation du sol: surface' }, '15': { queryable: true, title: 'Occupation du sol: bord' }, '16': { queryable: true, title: 'Occupation du sol: ligne' }, '17': { queryable: true, title: 'Occupation du sol: point' }, '19': { queryable: true, title: 'Construction: emprise du batiment' }, '20': { queryable: true, title: 'Construction: ouvrage d\'art: bord' }, '21': { queryable: true, title: 'Construction: bord du batiment' }, '23': { queryable: true, title: 'Equipement: surface' }, '24': { queryable: true, title: 'Equipement: axe' }, '25': { queryable: true, title: 'Equipement: ligne' }, '26': { queryable: true, title: 'Equipement: point' }, '27': { queryable: true, title: 'Symbologie' }, '28': { queryable: true, title: 'Adresses' }, '29': { queryable: true, title: 'Toponymie' } } },
    { id: 3204, title: 'CIRB NL', url: 'https://geoservices-urbis.irisnet.be/geoserver/ows', crs: 'EPSG:31370', bbox: new OpenLayers.Bounds(471578, 6579050, 499555, 6606337), format: 'image/png', area: 'BE', abstract: 'Brusselse kaartgegevens', attribution: 'Irisnet GIS', pixelManipulations: [ 'whiteTiles2transparent' ], queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'urbisNL' ], layers: { 'urbisNL': { queryable: false, title: 'Urbis Base Map NL', abstract: 'This layer represents the base map in dutch.' }, 'urbisNLGray': { queryable: false, title: 'Urbis Base Map Gray NL', abstract: 'This layer represents the gray base map in dutch.' }, 'urbis:LabeledStreetAxe': { queryable: false, title: 'Labeled Street Axe', abstract: 'Labeled StreetAxe for OSIRIS, bug fix for the juxtaposition of street name on building' }, 'urbis:URB_A_ADPT': { queryable: false, title: 'Address points', abstract: 'This layer is the localization of address points of the Brussels Region' }, 'urbis:URB_A_BU': { queryable: true, title: 'Buildings', abstract: 'This layer represents the buildings of the Brussels Region' }, 'urbis:URB_A_MD': { queryable: true, title: 'Monitoring districts', abstract: 'This layer reprensent the monitoring districts of the Brussels Region' }, 'urbis:URB_A_MU': { queryable: true, title: 'Municipalities', abstract: 'This layer represents the municipalities of the Brussels Region' }, 'urbis:URB_A_MY_SA': { queryable: false, title: 'Street axes', abstract: 'This layer represents the axes of the street of the Brussels Region' }, 'urbis:URB_A_MY_SS': { queryable: false, title: 'Street sections', abstract: 'This layer represents the street sections of the Brussels Region' }, 'urbis:URB_A_MZ': { queryable: true, title: 'Municipal zips', abstract: 'This layer is the zip of the municipality of the Brussels Region' }, 'urbis:URB_A_POpenLayers': { queryable: true, title: 'Police districts', abstract: 'This layer is the police districts of the Brussels Region' }, 'urbis:URB_A_RE': { queryable: false, title: 'Region', abstract: 'This layer is the Brussels Region' }, 'urbis:URB_A_SD': { queryable: true, title: 'Statistical districts', abstract: 'This layer represents the limit of the statistical districts of the Brussels Region' }, 'urbis:URB_A_SN': { queryable: false, title: 'Street nodes', abstract: 'This layer represents the street nodes. Each node is an intersection or an extremity of a street axe' }, 'urbis:URB_M_RTLINE': { queryable: false, title: 'Rail tracks', abstract: 'This layer represents the rails tracks.' }, 'urbis:URB_M_SHAPE': { queryable: true, title: 'UrbisMap shapes', abstract: 'This layer represents the shapes of UrbisMap.' }, 'urbis:URB_M_TONAME_LIN': { queryable: true, title: 'Toponymy', abstract: 'This layer represents the toponymy of public places.' }, 'urbis:URB_M_ZIPOINT': { queryable: true, title: 'Points of interest', abstract: 'This layer represents the point of zone of interest.' }, 'urbis:URB_T_LINE': { queryable: false, title: 'Urbis Topo Lines', abstract: 'This layer represents the topo lines.' }, 'urbis:URB_T_POINT': { queryable: true, title: 'Urbis Topo Points', abstract: 'This layer represents the topo points.' }, 'urbis:URB_A_SI_POINT_VW': { queryable: false, title: 'Street sides' }, 'urbis:MuNeighbour': { queryable: true, title: 'Neighbour Municipalities' }, 'urbis:Highways': { queryable: false, title: 'Highways' } } },
    { id: 3205, title: 'GIPOD Nu + 1 maand', url: 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/gipodpubliek/wms', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(280525, 6557859, 661237, 6712007), format: 'image/png', area: 'BE', abstract: 'Overzicht van alle concreet geplande en in uitvoering zijnde werken, manifestaties en andere innames op het openbaar domein met hun bijhorende omleidingen en verwachte hinder, voor de komende maand.', attribution: 'Agentschap Informatie Vlaanderen', getExternalUrl: function() { var extent = W.map.getExtent(); return 'http://www.geopunt.be/kaart?app=Hinder_in_kaart_app&extent=' + extent.left + ',' + extent.right + ',' + extent.bottom + ',' + extent.top; }, queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'ManOml', 'ManCon', 'ManIcoon', 'WoOml', 'WoCon', 'WoIcoon' ], layers: { 'ManOml': { queryable: false, title: 'Omleidingen van de manifestaties', abstract: 'Deze laag geeft een overzicht van alle omleidingen, horend bij manifestaties en andere innames op het openbaar domein, voor de komende maand.' }, 'ManCon': { queryable: true, title: 'Manifestaties contour', abstract: 'Deze laag geeft een overzicht met contouren van alle manifestaties en andere innames op het openbaar domein en de verwachte hinder voor de komende maand.' }, 'ManIcoon': { queryable: false, title: 'Manifestaties icoon', abstract: 'Deze laag geeft een overzicht met iconen van alle manifestaties en andere innames op het openbaar domein en de verwachte hinder voor de komende maand.' }, 'WoOml': { queryable: false, title: 'Omleidingen van de werkopdrachten', abstract: 'Deze laag geeft een overzicht van alle omleidingen, horend bij werkopdrachten op het openbaar domein, voor de komende maand.' }, 'WoCon': { queryable: true, title: 'Werkopdrachten contour', abstract: 'Deze laag geeft een overzicht met contouren van alle werkopdrachten op het openbaar domein en de verwachte hinder voor de komende maand.' }, 'WoIcoon': { queryable: false, title: 'Werkopdrachten icoon', abstract: 'Deze laag geeft een overzicht met iconen van alle werkopdrachten op het openbaar domein en de verwachte hinder voor de komende maand.' } } },
    { id: 3206, title: 'Ortho Vlaanderen Tijdsreeksen', url: 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/omw/wms', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(280525, 6557859, 661238, 6712008), format: 'image/jpeg', area: 'BE', abstract: 'Tijdsreeks van middenschalige orthofotomozaïeken met een resolutie van 25cm, gebiedsdekkend voor Vlaanderen', attribution: 'Agentschap Informatie Vlaanderen', pixelManipulations: [ 'whiteTiles2transparent' ], getExternalUrl: function() { var extent = W.map.getExtent(); return 'http://www.geopunt.be/kaart?app=Geopunt-kaart_app&extent=' + extent.left + ',' + extent.right + ',' + extent.bottom + ',' + extent.top; }, queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'OMWRGB18VL', 'OMWRGB18VL_VDC' ], layers: { 'OMWRGB18VL': { queryable: false, title: 'Winteropnamen, 2018', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2018 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB18VL_VDC': { queryable: true, title: 'Winteropnamen, 2018, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB17VL': { queryable: false, title: 'Winteropnamen, 2017', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2017 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB17VL_VDC': { queryable: true, title: 'Winteropnamen, 2017, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB16VL': { queryable: false, title: 'Winteropnamen, 2016', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2016 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB16VL_VDC': { queryable: true, title: 'Winteropnamen, 2016, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB15VL': { queryable: false, title: 'Winteropnamen, 2015', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2015 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB15VL_VDC': { queryable: true, title: 'Winteropnamen, 2015, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB14VL': { queryable: false, title: 'Winteropnamen, 2014', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2014 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB14VL_VDC': { queryable: true, title: 'Winteropnamen, 2014, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB13VL': { queryable: false, title: 'Winteropnamen, 2013', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2013 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB13VL_VDC': { queryable: true, title: 'Winteropnamen, 2013, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB12VL': { queryable: false, title: 'Winteropnamen, 2012', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2012 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB12VL_VDC': { queryable: true, title: 'Winteropnamen, 2012, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB08_11VL': { queryable: false, title: 'Winteropnamen, 2008-2011', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in de periode 2008-2011 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB08_11VL_VDC': { queryable: true, title: 'Winteropnamen, 2008-2011, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB05_07VL': { queryable: false, title: 'Winteropnamen, 2005-2007', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in de periode 2005-2007 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB05_07VL_VDC': { queryable: true, title: 'Winteropnamen, 2005-2007, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' }, 'OMWRGB00_03VL': { queryable: false, title: 'Winteropnamen, 2000-2003', abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in de periode 2000-2003 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.' }, 'OMWRGB00_03VL_VDC': { queryable: true, title: 'Winteropnamen, 2000-2003, vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' } } },
    { id: 3207, title: 'Wegenregister', url: 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/Wegenregister/wms', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(280525, 6557859, 661237, 6712007), format: 'image/png', area: 'BE', abstract: 'De wegen in het Wegenregister. Het Wegenregister is een middenschalig referentiebestand van de wegen in Vlaanderen. Het bevat alle wegen van Vlaanderen, met bijhorende attribuutgegevens.', attribution: 'Agentschap Informatie Vlaanderen', getExternalUrl: function() { var extent = W.map.getExtent(); return 'http://www.geopunt.be/kaart?app=Geopunt-kaart_app&kaart=wegennet&extent=' + extent.left + ',' + extent.right + ',' + extent.bottom + ',' + extent.top; }, queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'AUTOSWEG', 'WEGGESCH', 'WEGEEN', 'ROT', 'SPECSIT', 'VERKPLEIN', 'OPAFOGKR', 'OPAFGGKR', 'PLLWEG', 'VENTWEG', 'INUITP', 'INUITD', 'VOETGANGERSZONE', 'WANDFIETS', 'TRAMWEG', 'DIENSTWEG', 'AARDEWEG', 'VEER', 'TYPENTG', 'LABELS' ], layers: { 'AUTOSWEG': { queryable: true, title: 'Autosnelweg', abstract: 'Een "autosnelweg" heeft typisch twee gescheiden parallelle rijbanen met tegengestelde toegelaten rijrichtingen. Op een autosnelweg komen geen gelijkgrondse kruisingen voor. Kruisingen met andere wegen gebeuren steeds ofwel over bruggen of in tunnels.' }, 'WEGGESCH': { queryable: true, title: 'Weg met gescheiden rijbanen', abstract: '"Een weg met gescheiden rijbanen die geen autosnelweg is" wordt gekenmerkt door de aanwezigheid van minstens twee rijbanen (onafhankelijk van het aantal rijstroken) die fysiek gescheiden zijn en tegengestelde toegelaten rijrichtingen hebben.' }, 'WEGEEN': { queryable: true, title: 'Weg met één rijbaan', abstract: 'Wegsegmenten die behoren tot een hoofdcirculatiezone die gekenmerkt wordt door de aanwezigheid van slechts één circulatievak in de dwarsrichting.' }, 'ROT': { queryable: true, title: 'Rotonde', abstract: 'Wegsegmenten die tot de rotonde behoren vormen een gesloten ringvormige structuur. Op deze wegsegmenten is enkel éénrichtingsverkeer toegelaten.' }, 'SPECSIT': { queryable: true, title: 'Speciale verkeerssituatie', abstract: 'Wegsegmenten die behoren tot een min of meer cirkelvormige constructie die geen rotonde is.' }, 'VERKPLEIN': { queryable: true, title: 'Verkeersplein', abstract: 'Wegsegmenten die worden opgenomen in gebieden waar het verkeer ongestructureerd verloopt. Het gaat typisch om marktpleinen, parkeerterreinen of terreinen met een andere functie dan een zuivere verkeersfunctie' }, 'OPAFOGKR': { queryable: true, title: 'Oprit of afrit behorende tot een nietgelijkgrondse kruising', abstract: 'Een "op- of afrit, behorende tot een niet-gelijkgrondse kruising" verzorgt de verbinding tussen twee wegen die zich niet-gelijkgronds kruisen. Alle op- en afritten van autosnelwegen en verkeerswisselaars worden eveneens tot deze klasse gerekend.' }, 'OPAFGGKR': { queryable: true, title: 'Oprit of afrit  behorende tot een gelijkgrondse kruising', abstract: 'Een "op- of afrit, behorende tot een gelijkgrondse kruising" verzorgt de verbinding tussen twee wegen die geen autosnelweg zijn. Zonder de op- of afrit bestaat er nog steeds een topologische verbinding tussen de wegsegmenten waarbij de op- of afrit hoort.' }, 'PLLWEG': { queryable: true, title: 'Parallelweg', abstract: 'Een "parallelweg" is een op- of afrit waarvan de begin- en eindpositie verbonden is met dezelfde autosnelweg. Een "parallelweg" heeft een rechtstreekse verbinding of een verbinding via op- of afritten van een ander type met de bijhorende autosnelweg.' }, 'VENTWEG': { queryable: true, title: 'Ventweg', abstract: 'Een "ventweg" loopt parallel aan een weg met een belangrijke verkeersfunctie die geen autosnelweg is. De weg biedt toegang tot minder belangrijke aanpalende wegen, bestemmingen of adressen en wordt van de hoofdweg gescheiden door kleine constructies.' }, 'INUITP': { queryable: true, title: 'Inrit of uitrit van een parking', abstract: 'Een "in- of uitrit van een parking" is een weg die speciaal ontworpen is om een parkeerterrein of parkeergarage te bereiken of te verlaten.' }, 'INUITD': { queryable: true, title: 'Inrit of uitrit van een dienst', abstract: 'Een "in- of uitrit van een dienst" is een weg die speciaal ontworpen is om een dienst (voorbeeld: luchthaven, station, ziekenhuis, brandweerkazerne, politie, openbare dienst, hotel, restaurant) te bereiken of te verlaten.' }, 'VOETGANGERSZONE': { queryable: true, title: 'Voetgangerszone', abstract: 'Gebied met een wegennet dat speciaal ontworpen is voor gebruik door voetgangers (meestal gesitueerd in stedelijke gebieden). In voetgangerszones is enkel voetgangersverkeer toegelaten (uitzondering: prioritaire voertuigen en leveringen).' }, 'WANDFIETS': { queryable: true, title: 'Wandel- of fietsweg', abstract: 'Op een "wandel- en/of fietsweg" is de verkeerstoegang beperkt tot voetgangers en/of fietsers. De fysieke kenmerken van een "wandel- en/of fietsweg" laten de toegang van andere voertuigen niet toe (smaller dan 2.5m).' }, 'TRAMWEG': { queryable: true, title: 'Tramweg', abstract: 'Een "tramweg" is een weg die speciaal ontworpen is voor het tramverkeer. De fysieke kenmerken van een "tramweg" laten de toegang van andere voertuigen niet toe.' }, 'DIENSTWEG': { queryable: true, title: 'Dienstweg', abstract: 'Een "tramweg" is een weg die speciaal ontworpen is voor het tramverkeer. De fysieke kenmerken van een "tramweg" laten de toegang van andere voertuigen niet toe.' }, 'AARDEWEG': { queryable: true, title: 'Aardeweg', abstract: 'Een "aardeweg" is een weg zonder wegverharding die op zijn minst berijdbaar is voor bepaalde vierwielige motorvoertuigen (bv. terreinwagens, landbouwvoertuigen,...)' }, 'VEER': { queryable: true, title: 'Veer', abstract: 'Een "veer" is bedoeld voor het transport van passagiers, voertuigen of vracht over het water en verbindt vaak twee of meerdere landwegen' }, 'TYPENTG': { queryable: true, title: 'Type weg niet gekend', abstract: 'Wegtype is niet gekend' }, 'LABELS': { queryable: false, title: 'Straatnamen', abstract: 'Straatnamen volgens CRAB' } } },
    { id: 3208, title: 'Administratieve eenheden', url: 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/Administratieve_Eenheden/wms', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(280525, 6557859, 661237, 6712007), format: 'image/png', area: 'BE', abstract: 'Vlaamse administratieve eenheden', attribution: 'AIV', pixelManipulations: [ 'traceGrayscalePixels' ], queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'Refarr', 'Refprv', 'Refgew', 'RefgemGrens', 'RefgemBron', 'RefgemLabel' ], layers: { 'Refgem': { queryable: true, title: 'Gemeenten', abstract: 'Ligging en afgrenzing van de vastgestelde territoria van gemeenten. Gemeenten zijn de laagste bestuurlijke eenheden in België. Gemeenten zijn gegroepeerd in bestuurlijke arrondissementen en provincies. Door het samenwerkingsverband GDI-Vlaanderen als voorlopige referentie gehanteerde geografische dataset van het grondgebied van Vlaanderen met de begrenzing van de Vlaamse gemeenten met bijhorende identificerende informatie.' }, 'Refarr': { queryable: true, title: 'Arrondissementen - Grenzen', abstract: 'Afgrenzing van bestuurlijke arrondissementen in Vlaanderen. Bestuurlijke arrondissementen vormen een administratieve indeling van de provincies. Het gaat om een groepering van een aantal gemeenten. Door het samenwerkingsverband GDI-Vlaanderen als voorlopige referentie gehanteerde geografische dataset van het grondgebied met de begrenzing van Vlaamse bestuurlijke indelingen.' }, 'Refprv': { queryable: true, title: 'Provincies - Grenzen', abstract: 'Afgrenzing van provincies in Vlaanderen. Provincies vormen een administratieve indeling van het Vlaams Gewest. De provincies vormen het bestuurlijke niveau tussen de gemeenten en arrondissementen enerzijds en het Vlaams Gewest anderzijds. Door het samenwerkingsverband GDI-Vlaanderen als voorlopige referentie gehanteerde geografische dataset van het grondgebied van Vlaanderen met bestuurlijke indelingen.' }, 'Refgew': { queryable: true, title: 'Gewest - Grens', abstract: 'Grens van het Vlaams Gewest. Door het samenwerkingsverband GDI-Vlaanderen als voorlopig referentie gehanteerde geografische dataset van het grondgebied en de afgrenzing van het Vlaams Gewest' }, 'RefgemGrens': { queryable: true, title: 'Gemeenten - Grenzen', abstract: 'Grenzen van de vastgestelde territoria van gemeenten. Gemeenten zijn de laagste bestuurlijke eenheden in België. Gemeenten zijn gegroepeerd in bestuurlijke arrondissementen en provincies. Door het samenwerkingsverband GDI-Vlaanderen als voorlopige referentie gehanteerde geografische dataset van het grondgebied van Vlaanderen met de begrenzing van de Vlaamse gemeenten met bijhorende identificerende informatie.' }, 'RefgemBron': { queryable: true, title: 'Gemeenten - Grenzen - Bron Geometrie', abstract: 'Informatie over de herkomst van de geometrische informatie van (een deel van) een gemeentegrens.' }, 'RefgemLabel': { queryable: true, title: 'Gemeenten - Namen', abstract: 'Label met de naam van de gemeente. Gemeenten zijn de laagste bestuurlijke eenheden in België. Gemeenten zijn gegroepeerd in bestuurlijke arrondissementen en provincies. Door het samenwerkingsverband GDI-Vlaanderen als voorlopige referentie gehanteerde geografische dataset van het grondgebied van Vlaanderen met de begrenzing van de Vlaamse gemeenten met bijhorende identificerende informatie.' } } },
    { id: 3209, title: 'Orthofotowerkbestand Vlaanderen', url: 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/ofw/wms', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(280525, 6557859, 661238, 6712008), format: 'image/jpeg', area: 'BE', abstract: 'Compilatie van de meest recente orthofotowerkbestanden voor Vlaanderen', attribution: 'Agentschap Informatie Vlaanderen', pixelManipulations: [ 'whiteTiles2transparent' ], queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'OFW', 'OFW_vdc' ], layers: { 'OFW': { queryable: false, title: 'Orthofotowerkbestand', abstract: 'Deze rasterlaag is een compilatie van de meest recente orthofotowerkbestanden die voor Vlaanderen  beschikbaar zijn. De compilatie heeft een grondresolutie van 25cm.' }, 'OFW_vdc': { queryable: true, title: 'Vliegdagcontour', abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.' } } },
    { id: 3210, title: 'Adrespunten Vlaanderen', url: 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/Adressen/wms', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(280525, 6557859, 661237, 6712007), zoomRange: [6, 10], format: 'image/png', area: 'BE', abstract: 'Overzicht van in CRAB opgenomen adressen (huisnummers met bijhorende straat en gemeente) van Vlaanderen, met hun lokatie. Deze dataset is een bevraging van de CRAB-gegevens, bedoeld om tot een eenvoudige en vlot toegankelijke adressenlijst te komen.', getExternalUrl: function() { var extent = W.map.getExtent(); return 'http://www.geopunt.be/kaart?app=Geopunt-kaart_app&kaart=Adrespunten - CRAB&extent=' + extent.left + ',' + extent.right + ',' + extent.bottom + ',' + extent.top; }, queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'Adrespos' ], layers: { 'Adrespos': { queryable: true, title: 'CRAB - Adrespunt' } } },
    { id: 3211, title: 'Ortho Vl. 2013-2015 Grootschalig', url: 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/ogw/wms', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(280525, 6557859, 661238, 6712008), format: 'image/jpeg', area: 'BE', abstract: 'Tijdsreeks van grootschalige orthofotomozaïeken met een resolutie van 10cm, gebiedsdekkend voor Vlaanderen', attribution: 'Agentschap Informatie Vlaanderen', pixelManipulations: [ 'whiteTiles2transparent' ], getExternalUrl: function() { var extent = W.map.getExtent(); return 'http://www.geopunt.be/kaart?app=Geopunt-kaart_app&kaart=Luchtfoto Vlaanderen, winter 2013-2015 - kleur&extent=' + extent.left + ',' + extent.right + ',' + extent.bottom + ',' + extent.top; }, queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'OGWRGB13_15VL', 'OGWRGB13_15VL_vdc' ], layers: { 'OGWRGB13_15VL': { queryable: false, title: 'Orthofotomozaïek, grootschalig, winteropnamen, kleur, 2013-2015, Vlaanderen', abstract: 'Deze rasterlaag is een compilatie van de grootschalige orthofotomozaïeken (winteropnamen) die voor Vlaanderen in de periode 2013-2015 werden aangemaakt. De compilatie heeft een grondresolutie van 10cm.' }, 'OGWRGB13_15VL_vdc': { queryable: true, title: 'Vliegdagcontour, grootschalig, winteropnamen, kleur, 2013-2015, Vlaanderen' } } },
    { id: 3212, title: 'Snelheidsregimes en referentiepunten AWV', url: 'https://opendata.apps.mow.vlaanderen.be/opendata-geoserver/awv/ows', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(282692, 6565133, 655962, 6710236), format: 'image/png', area: 'BE', abstract: 'Snelheidsregimes langs de genummerde wegen in beheer van AWV', getExternalUrl: function() { var extent = W.map.getExtent(); return 'http://www.geopunt.be/kaart?app=Geopunt-kaart_app&kaart=Snelheidsregimes&extent=' + extent.left + ',' + extent.right + ',' + extent.bottom + ',' + extent.top; }, attribution: 'Agentschap Informatie Vlaanderen', pixelManipulations: [ 'removePartialBlackTransparency', 'traceGrayscalePixels' ], queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'awv:Snelheidsregimes', 'awv:Referentiepunten' ], layers: { 'awv:Snelheidsregimes': { queryable: true, title: 'Snelheidsregimes langs de genummerde wegen in beheer van AWV', abstract: 'Snelheidsregimes zijn delen van een genummerde weg met een uniforme maximale snelheid. De snelheidsregimes zijn lineaire weergaves van een (deel van) de wegen met aanduiding van een uniforme maximum snelheid.' }, 'awv:Referentiepunten': { queryable: true, title: 'Km en hm referentiepunten', abstract: 'Posities van de km en hm referentiepunten langs de Vlaamse autosnelwegen en gewestwegen met de bijbehorende kilometer-/ hectometeraanduidingen' } } },
    { id: 3214, title: 'Administrative Borders', url: 'https://ccff02.minfin.fgov.be/geoservices/arcgis/services/INSPIRE/AU_wms/MapServer/WMSServer', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(282900, 714838, 5509968, 6711134), format: 'image/png', area: 'BE', abstract: 'Administrative borders for Belgium', attribution: 'FPS Finances - General Administration of Patrimonial Documentation', default_layers: ['5', '4', '3', '2', '1'], layers: { '1': { title: 'Country Boundary' }, '2': { title: 'Region Boundary' }, '3': { title: 'Province Boundary' }, '4': { title: 'Arrondissement Boundary' }, '5': { title: 'Town Boundary' }, '7': { title: 'Country' }, '8': { title: 'Region' }, '9': { title: 'Province' }, '10': { title: 'Arrondissement' }, '11': { title: 'Town' } } },
    { id: 3215, title: 'GIPOD Actueel', url: 'https://geoservices.informatievlaanderen.be/raadpleegdiensten/gipodpubliek/wms', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(280525, 6557859, 661237, 6712007), format: 'image/png', area: 'BE', abstract: 'Overzicht van momenteel actief zijnde werken, manifestaties en andere innames op het openbaar domein met hun bijhorende omleidingen en verwachte hinder.', attribution: 'Agentschap Informatie Vlaanderen', getExternalUrl: function() { var extent = W.map.getExtent(); return 'http://www.geopunt.be/kaart?app=Hinder_in_kaart_app&extent=' + extent.left + ',' + extent.right + ',' + extent.bottom + ',' + extent.top; }, queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'ManOmlVndg', 'ManConVndg', 'ManIcoonVndg', 'WoOmlVndg', 'WoConVndg', 'WoIcoonVndg' ], layers: { 'ManOmlVndg': { queryable: false, title: 'Omleidingen van de manifestaties', abstract: 'Deze laag geeft een overzicht van alle omleidingen, horend bij manifestaties en andere innames op het openbaar domein, voor de komende maand.' }, 'ManConVndg': { queryable: true, title: 'Manifestaties contour', abstract: 'Deze laag geeft een overzicht met contouren van alle manifestaties en andere innames op het openbaar domein en de verwachte hinder voor de komende maand.' }, 'ManIcoonVndg': { queryable: false, title: 'Manifestaties icoon', abstract: 'Deze laag geeft een overzicht met iconen van alle manifestaties en andere innames op het openbaar domein en de verwachte hinder voor de komende maand.' }, 'WoOmlVndg': { queryable: false, title: 'Omleidingen van de werkopdrachten', abstract: 'Deze laag geeft een overzicht van alle omleidingen, horend bij werkopdrachten op het openbaar domein, voor de komende maand.' }, 'WoConVndg': { queryable: true, title: 'Werkopdrachten contour', abstract: 'Deze laag geeft een overzicht met contouren van alle werkopdrachten op het openbaar domein en de verwachte hinder voor de komende maand.' }, 'WoIcoonVndg': { queryable: false, title: 'Werkopdrachten icoon', abstract: 'Deze laag geeft een overzicht met iconen van alle werkopdrachten op het openbaar domein en de verwachte hinder voor de komende maand.' } } },
    { id: 3216, title: 'Orthophotos 2016', url: 'https://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_2016/MapServer/WMSServer', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(315258, 6348878, 719736, 6600131), format: 'image/jpeg', area: 'BE', abstract: 'Service de visualisation INSPIRE permettant la visualisation de l\'image orthorectifiée et mosaïquée couvrant l\'entièreté du territoire wallon à une résolution de 25 cm pour l\'année 2016.\nLes prises de vue ont été effectuées verticalement entre le 10 juin 2016 et le 1er novembre 2016. Ce service affiche 3 des 4 bandes disponibles (rouge, vert et bleu) en couleurs naturelles.\nCe service n\'est pas tuilé.', attribution: 'Service public de Wallonie', pixelManipulations: [ 'whiteTiles2transparent' ], queryable: false, default_layers: [ '0' ], layers: { '0': { queryable: false, title: 'ORTHO_2016', abstract: 'Imagerie orthorectifiée et mosaïquée couvrant l\'entièreté du territoire wallon à une résolution de 25 cm.\nLes prises de vue ont été effectuées verticalement entre le 10 juin 2016 et le 1er novembre 2016. Quatre bandes spectrales sont disponibles (rouge, vert, bleu et le proche infra-rouge).\nLe recouvrement longitudinal minimal des photos successives d’une même bande est de 60% avec une tolérance de 5%. D’autre part, le recouvrement latéral minimal entre bandes parallèles successives est de 30%, avec une tolérance de 5%. Les mailles sont de 2 km sur 2km.\nLes métadonnées des orthophotos (date et heure de prise de vue, angle solaire, etc.) sont disponibles sous forme de données attributaires dans la donnée "Orthophotos 2016 - Tuilage".' } } },
    { id: 3217, title: 'Réseau routier régional', url: 'https://geoservices.wallonie.be/arcgis/services/MOBILITE/RES_ROUTIER_REGIONAL/MapServer/WmsServer', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(295477, 6347477, 740431, 6640886), format: 'image/png', area: 'BE', abstract: 'Consultation, recherche et identification des données relatives au Réseau routier régional wallon et aux bornes kilométriques.', attribution: 'Service publique de Wallonie', pixelManipulations: [ 'traceGrayscalePixels' ], queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ '1', '2', '3', '5', '6' ], layers: { '1': { queryable: true, title: 'Nationales', abstract: 'Pour plus d\'informations sur cette donnée, consultez http://geoportail.wallonie.be/catalogue/bdcb789c-4b02-4c0c-863a-98dac4ed0240.html' }, '2': { queryable: true, title: 'Rings', abstract: 'Pour plus d\'informations sur cette donnée, consultez http://geoportail.wallonie.be/catalogue/bdcb789c-4b02-4c0c-863a-98dac4ed0240.html' }, '3': { queryable: true, title: 'Autoroutes', abstract: 'Pour plus d\'informations sur cette donnée, consultez http://geoportail.wallonie.be/catalogue/bdcb789c-4b02-4c0c-863a-98dac4ed0240.html' }, '5': { queryable: true, title: 'Bornes kilométriques', abstract: 'Pour plus d\'informations sur cette donnée, consultez http://geoportail.wallonie.be/catalogue/b1882436-3016-421e-9dfd-0326cca998f2.html' }, '6': { queryable: true, title: 'Bornes hectométriques', abstract: 'Pour plus d\'informations sur cette donnée, consultez http://geoportail.wallonie.be/catalogue/b1882436-3016-421e-9dfd-0326cca998f2.html' } } },
    { id: 3220, title: 'Verkeersborden Vlaanderen', url: 'https://opendata.apps.mow.vlaanderen.be/opendata-geoserver/awv/ows', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(279108, 6561687, 663162, 6713720), format: 'image/png', area: 'BE', abstract: 'Puntvoorstelling van de verkeersborden uit de toepassing Verkeersborden.Vlaanderen', attribution: 'MOW Vlaanderen', queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'awv:Verkeersborden.Vlaanderen_Borden' ], layers: { 'awv:Verkeersborden.Vlaanderen_Borden': { title: 'Verkeersborden.Vlaanderen', queryable: true } } },
    { id: 3221, title: 'Afgeleide snelheidsregimes', url: 'https://opendata.apps.mow.vlaanderen.be/opendata-geoserver/awv/ows', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(281625, 6555960, 664720, 6711205), format: 'image/png', area: 'BE', abstract: 'Kaart van de afgeleide snelheidsregimes op wegen gelegen in het Vlaams gewest. Het basis van het wegenbestand waarop de snelheidsregimes zijn geprojecteerd is steeds de laatste versie van het Wegenregister zoals gepubliceerd op de website van Informatie Vlaanderen. De opstellingen in de Verkeersborden.Vlaanderen databank dienen als basisbestand voor de afgeleide data. De kwaliteit van de afgeleide data hangt af van de correctheid van zowel het Wegenregister als de data is Verkeersborden.Vlaanderen.', attribution: 'MOW Vlaanderen', queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'awv:Afgeleide_snelheidsregimes' ], layers: { 'awv:Afgeleide_snelheidsregimes': { title: 'Afgeleide snelheidsregimes', queryable: true } } },
    { id: 3222, title: 'CIRB FR', url: 'https://geoservices-urbis.irisnet.be/geoserver/ows', crs: 'EPSG:31370', bbox: new OpenLayers.Bounds(471578, 6579050, 499555, 6606337), format: 'image/png', area: 'BE', abstract: 'Données de carte Bruxelloises', attribution: 'Irisnet GIS', pixelManipulations: [ 'whiteTiles2transparent' ], queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'urbisFR' ], layers: { 'urbisFR': { queryable: false, title: 'Urbis Base Map FR', abstract: 'This layer represents the base map in french.' }, 'urbisFRGray': { queryable: false, title: 'Urbis Base Map Gray FR', abstract: 'This layer represents the gray base map in french.' }, 'urbis:LabeledStreetAxe': { queryable: false, title: 'Labeled Street Axe', abstract: 'Labeled StreetAxe for OSIRIS, bug fix for the juxtaposition of street name on building' }, 'urbis:URB_A_ADPT': { queryable: false, title: 'Address points', abstract: 'This layer is the localization of address points of the Brussels Region' }, 'urbis:URB_A_BU': { queryable: true, title: 'Buildings', abstract: 'This layer represents the buildings of the Brussels Region' }, 'urbis:URB_A_MD': { queryable: true, title: 'Monitoring districts', abstract: 'This layer reprensent the monitoring districts of the Brussels Region' }, 'urbis:URB_A_MU': { queryable: true, title: 'Municipalities', abstract: 'This layer represents the municipalities of the Brussels Region' }, 'urbis:URB_A_MY_SA': { queryable: false, title: 'Street axes', abstract: 'This layer represents the axes of the street of the Brussels Region' }, 'urbis:URB_A_MY_SS': { queryable: false, title: 'Street sections', abstract: 'This layer represents the street sections of the Brussels Region' }, 'urbis:URB_A_MZ': { queryable: true, title: 'Municipal zips', abstract: 'This layer is the zip of the municipality of the Brussels Region' }, 'urbis:URB_A_POpenLayers': { queryable: true, title: 'Police districts', abstract: 'This layer is the police districts of the Brussels Region' }, 'urbis:URB_A_RE': { queryable: false, title: 'Region', abstract: 'This layer is the Brussels Region' }, 'urbis:URB_A_SD': { queryable: true, title: 'Statistical districts', abstract: 'This layer represents the limit of the statistical districts of the Brussels Region' }, 'urbis:URB_A_SN': { queryable: false, title: 'Street nodes', abstract: 'This layer represents the street nodes. Each node is an intersection or an extremity of a street axe' }, 'urbis:URB_M_RTLINE': { queryable: false, title: 'Rail tracks', abstract: 'This layer represents the rails tracks.' }, 'urbis:URB_M_SHAPE': { queryable: true, title: 'UrbisMap shapes', abstract: 'This layer represents the shapes of UrbisMap.' }, 'urbis:URB_M_TONAME_LIN': { queryable: true, title: 'Toponymy', abstract: 'This layer represents the toponymy of public places.' }, 'urbis:URB_M_ZIPOINT': { queryable: true, title: 'Points of interest', abstract: 'This layer represents the point of zone of interest.' }, 'urbis:URB_T_LINE': { queryable: false, title: 'Urbis Topo Lines', abstract: 'This layer represents the topo lines.' }, 'urbis:URB_T_POINT': { queryable: true, title: 'Urbis Topo Points', abstract: 'This layer represents the topo points.' }, 'urbis:URB_A_SI_POINT_VW': { queryable: false, title: 'Street sides' }, 'urbis:MuNeighbour': { queryable: true, title: 'Neighbour Municipalities' }, 'urbis:Highways': { queryable: false, title: 'Highways' } } },
    { id: 3223, title: 'Ortho Brussels', url: 'https://geoservices-urbis.irisnet.be/geoserver/ows', crs: 'EPSG:31370', bbox: new OpenLayers.Bounds(471578, 6579050, 499555, 6606337), format: 'image/png', area: 'BE', abstract: 'Orthographic map of Brussels', attribution: 'Irisnet GIS', pixelManipulations: [ 'whiteTiles2transparent' ], queryable: false, default_layers: [ 'Urbis:Ortho' ], layers: { 'Urbis:Ortho': { queryable: false, title: 'Urbis Ortho', abstract: 'This layer always shows the most recent available orthographic images' }, 'Urbis:Ortho2019': { queryable: false, title: 'Ortho 2019', abstract: 'Orthographic imagery for the year 2019 within the Brussels region' }, 'Urbis:Ortho2018': { queryable: false, title: 'Ortho 2018', abstract: 'Orthographic imagery for the year 2018 within the Brussels region' }, 'Urbis:Ortho2017': { queryable: false, title: 'Ortho 2017', abstract: 'Orthographic imagery for the year 2017 within the Brussels region' }, 'Urbis:Ortho2016': { queryable: false, title: 'Ortho 2016', abstract: 'Orthographic imagery for the year 2016 within the Brussels region' }, 'Urbis:Ortho2015': { queryable: false, title: 'Ortho 2015', abstract: 'Orthographic imagery for the year 2015 within the Brussels region' }, 'Urbis:Ortho2014': { queryable: false, title: 'Ortho 2014', abstract: 'Orthographic imagery for the year 2014 within the Brussels region' }, 'Urbis:Ortho2012': { queryable: false, title: 'Ortho 2012', abstract: 'Orthographic imagery for the year 2012 within the Brussels region' }, 'Urbis:Ortho2009': { queryable: false, title: 'Ortho 2009', abstract: 'Orthographic imagery for the year 2009 within the Brussels region' }, 'Urbis:Ortho2004': { queryable: false, title: 'Ortho 2004', abstract: 'Orthographic imagery for the year 2004 within the Brussels region' } } },
    { id: 3224, title: 'Brussels Road Hierarchy', url: 'https://data-mobility.brussels/geoserver/bm_network/wms', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(471578, 6579050, 499555, 6606337), format: 'image/png', area: 'BE', abstract: 'Road hierarchy maintained by Brussels Mobility', attribution: 'Brussels Mobility', pixelManipulations: [ 'brusselsSwapColours' ], queryable: false, default_layers: [ 'specialisation_vp' ], layers: { 'specialisation_vp': { queryable: false, title: 'Road hierarchy' } } },
    { id: 3225, title: 'Brussels Zone 30', url: 'https://data-mobility.brussels/geoserver/bm_network/wms', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(471578, 6579050, 499555, 6606337), format: 'image/png', area: 'BE', abstract: 'Road speed limit data maintained by Brussels Mobility', attribution: 'Brussels Mobility', queryable: true, query_filters: [ applyAllTransformations ], default_layers: [ 'Zones_30' ], layers: { 'Zones_30': { queryable: true, title: 'Road speeds' } } },
    { id: 3226, title: 'Brussels Low Emission Zone', url: 'https://data-mobility.brussels/geoserver/bm_network/wms', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(471578, 6579050, 499555, 6606337), format: 'image/png', area: 'BE', abstract: 'Defines the contours of the low emission zone active in Brussels', attribution: 'Brussels Mobility', queryable: false, default_layers: [ 'lez_zone' ], layers: { 'lez_zone': { queryable: false, title: 'Low Emission Zone' } } },
    { id: 3227, title: 'Verkeersborden Vlaanderen Visualisatie', url: 'https://opendata.apps.mow.vlaanderen.be/opendata-geowebcache/service/wms', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(279108, 6561687, 663162, 6713720), format: 'image/png', area: 'BE', abstract: 'Grafische voorstelling van de verkeersborden uit de toepassing Verkeersborden.Vlaanderen', attribution: 'MOW Vlaanderen', pixelManipulations: [ 'addTranslucentOverlay' ], queryable: false, default_layers: [ 'verkeersborden' ], layers: { 'verkeersborden': { title: 'Grafische voorstelling verkeersborden', queryable: false } } },
    { id: 3228, title: 'Orthophotos Récents', url: 'https://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_LAST/MapServer/WMSServer', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(315258, 6348878, 719736, 6600131), format: 'image/jpeg', area: 'BE', abstract: 'Service de visualisation WMS référençant la dernière campagne disponible des images orthorectifiées couvrant le territoire de la Région Wallonne.', attribution: 'Service public de Wallonie', pixelManipulations: [ 'whiteTiles2transparent' ], queryable: false, default_layers: [ '0' ], layers: { '0': { queryable: false, title: 'ORTHO', abstract: 'Dernière campagne disponible d\'imagerie orthorectifiée et mosaïquée couvrant l\'entièreté du territoire wallon à une résolution de 25 cm. Leur but initial était de servir de base au contrôles liés à la mise en oeuvre de la Politique Agricole Commune (PAC). Quatre bandes spectrales sont disponibles (Rouge, Vert, Bleu et Infra-rouge).' } } },
    { id: 3229, title: 'Orthophotos 2017', url: 'https://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_2017/MapServer/WMSServer', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(315258, 6348878, 719736, 6600131), format: 'image/jpeg', area: 'BE', abstract: 'Service de visualisation INSPIRE permettant la visualisation de l\'image orthorectifiée et mosaïquée couvrant l\'entièreté du territoire wallon à une résolution de 25 cm pour l\'année 2017.\nLes prises de vue ont été effectuées verticalement entre le 10 juin 2017 et le 1er novembre 2017. Ce service affiche 3 des 4 bandes disponibles (rouge, vert et bleu) en couleurs naturelles.\nCe service n\'est pas tuilé.', attribution: 'Service public de Wallonie', pixelManipulations: [ 'whiteTiles2transparent' ], queryable: false, default_layers: [ '0' ], layers: { '0': { queryable: false, title: 'ORTHO_2017', abstract: 'Imagerie orthorectifiée et mosaïquée couvrant l\'entièreté du territoire wallon à une résolution de 25 cm.\nLes prises de vue ont été effectuées verticalement entre le 10 juin 2017 et le 1er novembre 2017. Quatre bandes spectrales sont disponibles (rouge, vert, bleu et le proche infra-rouge).\nLe recouvrement longitudinal minimal des photos successives d’une même bande est de 60% avec une tolérance de 5%. D’autre part, le recouvrement latéral minimal entre bandes parallèles successives est de 30%, avec une tolérance de 5%. Les mailles sont de 2 km sur 2km.\nLes métadonnées des orthophotos (date et heure de prise de vue, angle solaire, etc.) sont disponibles sous forme de données attributaires dans la donnée "Orthophotos 2017 - Tuilage".' } } },
    { id: 3230, title: 'Orthophotos 2018', url: 'https://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_2018/MapServer/WMSServer', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(315258, 6348878, 719736, 6600131), format: 'image/jpeg', area: 'BE', abstract: 'Service de visualisation INSPIRE permettant la visualisation de l\'image orthorectifiée et mosaïquée couvrant l\'entièreté du territoire wallon à une résolution de 25 cm pour l\'année 2018.\nLes prises de vue ont été effectuées verticalement entre le 10 juin 2018 et le 1er novembre 2018. Ce service affiche 3 des 4 bandes disponibles (rouge, vert et bleu) en couleurs naturelles.\nCe service n\'est pas tuilé.', attribution: 'Service public de Wallonie', pixelManipulations: [ 'whiteTiles2transparent' ], queryable: false, default_layers: [ '0' ], layers: { '0': { queryable: false, title: 'ORTHO_2018', abstract: 'Imagerie orthorectifiée et mosaïquée couvrant l\'entièreté du territoire wallon à une résolution de 25 cm.\nLes prises de vue ont été effectuées verticalement entre le 10 juin 2018 et le 1er novembre 2018. Quatre bandes spectrales sont disponibles (rouge, vert, bleu et le proche infra-rouge).\nLe recouvrement longitudinal minimal des photos successives d’une même bande est de 60% avec une tolérance de 5%. D’autre part, le recouvrement latéral minimal entre bandes parallèles successives est de 30%, avec une tolérance de 5%. Les mailles sont de 2 km sur 2km.\nLes métadonnées des orthophotos (date et heure de prise de vue, angle solaire, etc.) sont disponibles sous forme de données attributaires dans la donnée "Orthophotos 2018 - Tuilage".' } } },
    { id: 3231, title: 'Orthophotos 2019', url: 'https://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_2019/MapServer/WMSServer', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(315258, 6348878, 719736, 6600131), format: 'image/jpeg', area: 'BE', abstract: 'Service de visualisation INSPIRE permettant la visualisation de l\'image orthorectifiée et mosaïquée couvrant l\'entièreté du territoire wallon à une résolution de 25 cm pour l\'année 2019.\nLes prises de vue ont été effectuées verticalement entre le 10 juin 2019 et le 1er novembre 2019. Ce service affiche 3 des 4 bandes disponibles (rouge, vert et bleu) en couleurs naturelles.\nCe service n\'est pas tuilé.', attribution: 'Service public de Wallonie', pixelManipulations: [ 'whiteTiles2transparent' ], queryable: false, default_layers: [ '0' ], layers: { '0': { queryable: false, title: 'ORTHO_2019', abstract: 'Imagerie orthorectifiée et mosaïquée couvrant l\'entièreté du territoire wallon à une résolution de 25 cm.\nLes prises de vue ont été effectuées verticalement entre le 10 juin 2019 et le 1er novembre 2019. Quatre bandes spectrales sont disponibles (rouge, vert, bleu et le proche infra-rouge).\nLe recouvrement longitudinal minimal des photos successives d’une même bande est de 60% avec une tolérance de 5%. D’autre part, le recouvrement latéral minimal entre bandes parallèles successives est de 30%, avec une tolérance de 5%. Les mailles sont de 2 km sur 2km.\nLes métadonnées des orthophotos (date et heure de prise de vue, angle solaire, etc.) sont disponibles sous forme de données attributaires dans la donnée "Orthophotos 2019 - Tuilage".' } } },
    { id: 5501, title: 'Mapa basico Rio de Janeiro', url: 'http://pgeo3.rio.rj.gov.br/arcgis/services/Basicos/mapa_basico_UTM/MapServer/WmsServer', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(-4880972, -2646822, -4793898, -2599308), format: 'image/png', area: 'BR', abstract: 'Mapa urbano básico da Cidade do Rio de Janeiro', attribution: 'Cidade do Rio de Janeiro', pixelManipulations: [ 'rioTransparent' ], queryable: true, query_filters: [ applyAllTransformations ], default_layers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'], layers: { '0': { queryable: false, title: 'Limite do Estado do Rio de Janeiro', abstract: 'Divisão Política do Estado do Rio de Janeiro' }, '1': { queryable: false, title: 'relevo' }, '2': { queryable: false, title: 'Quadras' }, '3': { queryable: true, title: 'Logradouros - Ruas' }, '4': { queryable: false, title: 'Praças' }, '5': { queryable: false, title: 'Areas Protegidas' }, '6': { queryable: true, title: 'Favelas' }, '7': { queryable: false, title: 'Loteamentos Irregulares e Clandestinos' }, '8': { queryable: false, title: 'edificações' }, '9': { queryable: false, title: 'Hidrografia - Rios' }, '10': { queryable: false, title: 'Limite de Bairros' }, '11': { queryable: false, title: 'Limite de Regiões Administrativas - RA' }, '12': { queryable: false, title: 'Áreas de Planejamento - AP' }, '13': { queryable: false, title: 'número de porta' }, '14': { queryable: true, title: 'principais logradouros' }, '15': { queryable: false, title: 'Locais de Referência' }, '16': { queryable: false, title: 'Escolas Municipais' }, '17': { queryable: false, title: 'Unidades de Saúde Estaduais e Federais' }, '18': { queryable: false, title: 'Unidades de Saúde Municipais' }, '19': { queryable: false, title: 'Corpo de Bombeiros' }, '20': { queryable: false, title: 'Delegacias Policiais' }, '21': { queryable: false, title: 'Estações de Bonde' }, '22': { queryable: false, title: 'Estações Hidroviárias' }, '23': { queryable: false, title: 'Estações Ferroviárias' }, '24': { queryable: false, title: 'Estações do Metrô' }, '25': { queryable: false, title: 'Aeroportos', abstract: 'principais aeroportos comerciais' } } },
    { id: 96801, title: 'Oman Base Map', url: 'https://nsdig2gapps.ncsi.gov.om/arcgis/services/Base_Map_EN/MapServer/WmsServer', crs: 'EPSG:3857', bbox: new OpenLayers.Bounds(5147047, 1459394, 7435614, 3520164), format: 'image/png', area: 'OM', abstract: 'National Basemap without Major Landmarks', attribution: 'NCSI', pixelManipulations: [ 'omanTransparent', 'traceGrayscalePixels' ], queryable: true, query_filters: [ applyAllTransformations ], default_layers: ['5', '6', '7', '8', '9', '10', '12', '13', '14', '15', '16', '17', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '35', '36', '37', '38', '39', '41', '42', '43', '44', '45', '47', '49', '50', '51'], layers: { '5': { queryable: false, title: 'Country Boundary', abstract: 'Country Boundary' }, '6': { queryable: false, title: 'Governorate', abstract: 'Governorate' }, '7': { queryable: false, title: 'Willayat', abstract: 'Willayat' }, '8': { queryable: false, title: 'Governorate Center', abstract: 'Governorate Center' }, '9': { queryable: false, title: 'Willayat Center', abstract: 'Willayat Center' }, '10': { queryable: false, title: 'Town Center', abstract: 'Town Center' }, '12': { queryable: false, title: 'Rock', abstract: 'Rock' }, '13': { queryable: false, title: 'Sand Dunes_3D', abstract: 'Sand Dunes_3D' }, '14': { queryable: false, title: 'Sand Dunes', abstract: 'Sand Dunes' }, '15': { queryable: false, title: 'Builtup Area', abstract: 'Builtup Area' }, '16': { queryable: false, title: 'Vegetation', abstract: 'Vegetation' }, '17': { queryable: false, title: 'Country Boundary', abstract: 'Country Boundary' }, '19': { queryable: false, title: 'Reservoir', abstract: 'Reservoir' }, '20': { queryable: false, title: 'Marsh Swamp', abstract: 'Marsh Swamp' }, '21': { queryable: false, title: 'Sabkha', abstract: 'Sabkha' }, '22': { queryable: false, title: 'Lake Pond', abstract: 'Lake Pond' }, '23': { queryable: false, title: 'Lagoon', abstract: 'Lagoon' }, '24': { queryable: false, title: 'Wadi Stream', abstract: 'Wadi Stream' }, '25': { queryable: false, title: 'Wadi Spread', abstract: 'Wadi Spread' }, '26': { queryable: false, title: 'Dam', abstract: 'Dam' }, '27': { queryable: false, title: 'Foreshore', abstract: 'Foreshore' }, '28': { queryable: false, title: 'Beach', abstract: 'Beach' }, '29': { queryable: false, title: 'Ditch', abstract: 'Ditch' }, '30': { queryable: false, title: 'Weir', abstract: 'Weir' }, '31': { queryable: false, title: 'Sluice Gate', abstract: 'Sluice Gate' }, '32': { queryable: false, title: 'Waterfall', abstract: 'Waterfall' }, '33': { queryable: false, title: 'Spring', abstract: 'Spring' }, '35': { queryable: false, title: 'Road Centre Lines', abstract: 'Road Centre Lines' }, '36': { queryable: false, title: 'Road Centre Lines', abstract: 'Road Centre Lines' }, '37': { queryable: false, title: 'Streets', abstract: 'Streets' }, '38': { queryable: false, title: 'Minor Roads', abstract: 'Minor Roads' }, '39': { queryable: false, title: 'Major Roads', abstract: 'Major Roads' }, '41': { queryable: false, title: 'Amusement Parks', abstract: 'Amusement Parks' }, '42': { queryable: false, title: 'Golf Courses', abstract: 'Golf Courses' }, '43': { queryable: false, title: 'Parks', abstract: 'Parks' }, '44': { queryable: false, title: 'Racing Tracks', abstract: 'Racing Tracks' }, '45': { queryable: false, title: 'Sports Fields', abstract: 'Sports Fields' }, '47': { queryable: false, title: 'Archeological Sites', abstract: 'Archeological Sites' }, '49': { queryable: false, title: 'Buildings_3D', abstract: 'Buildings_3D' }, '50': { queryable: false, title: 'Buildings', abstract: 'Buildings' }, '51 ': { queryable: false, title: 'Wall and Fences', abstract: 'Wall and Fences' } } }
  ];
  // Turn list into easy to query object with map id as key
  var maps = {};
  mapList.forEach(map => {
    maps[map.id] = map;
  });

  var Settings = {
    'get': function() {
      var settings;
      if (localStorage.OpenMaps) {
        settings = JSON.parse(localStorage.OpenMaps);
      }
      if (!settings) {
        settings = {};
      }
      if (typeof settings.tooltips == 'undefined') {
        settings.tooltips = true;
      }
      if (!settings.state) {
        settings.state = {};
      }
      if (!settings.state.active) {
        settings.state.active = [];
      }
      return settings;
    },
    'put': function(obj) {
      localStorage.OpenMaps = JSON.stringify(obj);
    },
    'set': function(setting, value) {
      var settings = this.get();
      settings[setting] = value;
      this.put(settings);
    },
    'exists': function() {
      return typeof localStorage.OpenMaps != 'undefined';
    }
  };

  var Tooltips = (function() {
    var elements = [];
    return {
      'add': function(element, text, force) {
        if (Settings.get().tooltips || force) {
          element.title = text;
          $(element).tooltip({
            trigger: 'hover'
          });
        }
        if (!force) {
          element.dataset.title = text;
          elements.push(element);
        }
      },
      'remove': function(element) {
        $(element).tooltip('destroy');
        element.title = '';
        var toRemoveIdx = elements.findIndex(function(el) { return el == element; });
        if (toRemoveIdx !== -1) {
          elements.splice(toRemoveIdx, 1);
        }
      },
      'enabled': function() {
        return Settings.get().tooltips;
      },
      'toggle': function() {
        var isEnabled = Settings.get().tooltips;
        Settings.set('tooltips', !isEnabled);
        if (isEnabled) {
          elements.forEach(function(element) {
            $(element).tooltip('destroy');
            element.title = '';
          });
        } else {
          elements.forEach(function(element) {
            element.title = element.dataset.title;
            $(element).tooltip({
              trigger: 'hover'
            });
          });
        }
      }
    };
  })();

  checkVersion();

  // Adjust map tile reload attempts (by default set to 0). This also makes OpenLayers attempt to load tiles a second time in other layers
  OpenLayers.IMAGE_RELOAD_ATTEMPTS = 1;

  // List of map handles
  var handles = [];
  var tab = addOpenMapsTab();

  // New map layer drawer group
  var omGroup = createLayerToggler(null, true, 'Open Maps', null);

  W.app.modeController.model.bind('change:mode', function(model, modeId) {
    if (modeId == 0) {
      addOpenMapsTab(tab);
    }
    document.querySelector('.list-unstyled.togglers').appendChild(omGroup);
  });
  W.prefs.on('change:isImperial', function() {
    addOpenMapsTab(tab);
  });

  // Satellite imagery toggle
  var satImagery = document.createElement('wz-checkbox');
  satImagery.checked = W.map.layers[0].getVisibility();
  // It seems that wz-checkbox can't handle being checked twice, even if the state remains the same
  var checkboxSemaphore = false;
  satImagery.addEventListener('click', function() {
    checkboxSemaphore = true;
    W.map.layers[0].setVisibility(!W.map.layers[0].getVisibility());
    checkboxSemaphore = false;
  });
  W.map.layers[0].events.register('visibilitychanged', null, function() {
    if (checkboxSemaphore) {
      return;
    }
    satImagery.checked = W.map.layers[0].getVisibility();
  });
  satImagery.textContent = I18n.t('openmaps.satellite_imagery');
  tab.appendChild(satImagery);

  // List of maps visible in Open Maps
  var title = document.createElement('h4');
  title.textContent = I18n.t('openmaps.maps_title');
  tab.appendChild(title);
  var handleList = document.createElement('ul');
  sortable(handleList, {
    forcePlaceholderSize: true,
    placeholderClass: 'result',
    handle: '.fa-reorder'
  })[0].addEventListener('sortupdate', function(e) {
    var movedHandle = handles.splice(e.detail.oldElementIndex, 1)[0];
    handles.splice(e.detail.elementIndex, 0, movedHandle);
    var layerGroups = omGroup.querySelectorAll('ul li');
    if (e.detail.elementIndex == layerGroups.length-1) {
      layerGroups[e.detail.oldElementIndex].parentNode.appendChild(layerGroups[e.detail.oldElementIndex]);
    } else {
      layerGroups[e.detail.oldElementIndex].parentNode.insertBefore(layerGroups[e.detail.oldElementIndex], layerGroups[e.detail.elementIndex]);
    }
    if (e.detail.elementIndex >= 0 && e.detail.elementIndex < handles.length) { // sanity check
      var aerialImageryIndex = W.map.getLayerIndex(W.map.getLayerByUniqueName('satellite_imagery'));
      W.map.getOLMap().setLayerIndex(movedHandle.layer, (aerialImageryIndex >= 0 ? aerialImageryIndex : 0) + e.detail.elementIndex + 1);
    }
    saveMapState();
  });
  handleList.className = 'result-list';
  tab.appendChild(handleList);

  // Select box to add new Open Maps maps
  var addMap = document.createElement('select');
  addMap.className = 'form-control';
  updateMapSelector();
  W.map.events.register('moveend', null, updateMapSelector);
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
  var hideTooltips = document.createElement('a');
  hideTooltips.textContent = (Settings.get().tooltips ? I18n.t('openmaps.hide_tooltips') : I18n.t('openmaps.show_tooltips'));
  hideTooltips.style.float = 'right';
  hideTooltips.style.cursor = 'pointer';
  hideTooltips.addEventListener('click', function() {
    Tooltips.toggle();
    hideTooltips.textContent = (Settings.get().tooltips ? I18n.t('openmaps.hide_tooltips') : I18n.t('openmaps.show_tooltips'));
  });
  footer.appendChild(hideTooltips);
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

  // Reload previous map(s)
  if (Settings.exists()) {
    var settings = Settings.get();
    settings.state.active.forEach(function(mapHandle, i) {
      if (maps[mapHandle.mapId] == undefined) { // no strict equal as null should fail as well
        settings.state.active.splice(i, 1);
        Settings.put(settings);
        return;
      }
      handles.push(new MapHandle(maps[mapHandle.mapId], {
        opacity: mapHandle.opacity,
        layers: mapHandle.layers,
        hidden: mapHandle.hidden,
        transparent: mapHandle.transparent,
        improveMap: mapHandle.improveMap
      }));
      saveMapState();
    });
  }
  // Add the control to catch a click on the map area for retrieving map information
  var queryWindowContent, queryWindowOriginalContent;
  var queryWindow = document.createElement('div');
  queryWindow.className = 'open-maps-query-window';
  queryWindow.addEventListener('click', function(e) {
    e.stopPropagation();
  });
  var styleObserver = new MutationObserver(function() {
    if (queryWindow.style.height != '') {
      Settings.set('queryWindowHeight', queryWindow.style.height);
    }
  });
  styleObserver.observe(queryWindow, { attributes: true, attributeFilter: ['style'] });
  var mapObserver = new MutationObserver(function() {
    if (document.getElementById('map').classList.contains('lightboxShown')) {
      queryWindow.style.top = '';
      queryWindow.style.bottom = '35px';
    } else {
      queryWindow.style.top = '40px';
      queryWindow.style.bottom = '';
    }
  });
  mapObserver.observe(document.getElementById('map'), { attributes: true, attributeFilter: ['class'] });
  var queryWindowSwitch = document.createElement('span');
  queryWindowSwitch.className = 'fa fa-fw fa-2x fa-retweet open-maps-query-window-button-left';
  queryWindowSwitch.dataset.placement = 'right';
  Tooltips.add(queryWindowSwitch, I18n.t('openmaps.query_window_switch'));
  queryWindowSwitch.addEventListener('click', function() {
    queryWindowOriginalContent.classList.toggle('hidden');
    queryWindowContent.classList.toggle('hidden');
    var settings = Settings.get();
    settings.queryWindowDisplay = (settings.queryWindowDisplay == undefined || settings.queryWindowDisplay == 'processed' ? 'original': 'processed' );
    Settings.put(settings);
  });
  queryWindow.appendChild(queryWindowSwitch);
  var queryWindowQuery = document.createElement('span');
  queryWindowQuery.className = 'fa fa-fw fa-2x fa-hand-pointer-o open-maps-query-window-button-left';
  queryWindowQuery.dataset.placement = 'right';
  Tooltips.add(queryWindowQuery, I18n.t('openmaps.query_window_query'));
  queryWindowQuery.addEventListener('click', function() {
    if (!getFeatureInfoControl.active) {
      if (getFeatureInfoControl.params) {
        queryWindowQuery.style.color = 'blue';
        getFeatureInfoControl.params.callback = function() {
          queryWindowQuery.style.color = '';
        };
        getFeatureInfoControl.activate();
      } else {
        log('Could not find previous query parameters, weird.');
      }
    } else {
      getFeatureInfoControl.deactivate();
    }
  });
  queryWindow.appendChild(queryWindowQuery);
  var queryWindowClose = document.createElement('span');
  queryWindowClose.className = 'fa fa-fw fa-2x fa-window-close open-maps-query-window-button-right';
  queryWindowClose.addEventListener('click', function() {
    queryWindow.style.display = 'none';
  });
  queryWindow.appendChild(queryWindowClose);
  var queryWindowMinimize = document.createElement('span');
  queryWindowMinimize.className = 'fa fa-fw fa-2x fa-toggle-up open-maps-query-window-button-right';
  queryWindowMinimize.addEventListener('click', function() {
    var isMinimized = queryWindow.style.height != '';
    queryWindow.style.height = (isMinimized ? '' : Settings.get().queryWindowHeight || '185px');
    queryWindow.style.resize = (isMinimized ? 'none' : 'vertical');
    queryWindowMinimize.classList.toggle('fa-toggle-up', isMinimized);
    queryWindowMinimize.classList.toggle('fa-toggle-down', !isMinimized);
  });
  queryWindow.appendChild(queryWindowMinimize);
  var queryWindowTitle = document.createElement('h2');
  queryWindowTitle.textContent = I18n.t('openmaps.query_window_title');
  queryWindow.appendChild(queryWindowTitle);
  var queryWindowLoading = document.createElement('p');
  queryWindowLoading.style.textAlign = 'center';
  queryWindowLoading.style.fontSize = '21px';
  var queryWindowLoadingSpinner = document.createElement('span');
  queryWindowLoadingSpinner.className = 'fa fa-spinner fa-pulse';
  queryWindowLoading.appendChild(queryWindowLoadingSpinner);
  queryWindowLoading.appendChild(document.createTextNode(' ' + I18n.t('openmaps.query_window_loading')));
  queryWindow.appendChild(queryWindowLoading);
  queryWindowContent = document.createElement('div');
  queryWindowContent.style.fontSize = '14px';
  var queryWindowDisplay = Settings.get().queryWindowDisplay;
  queryWindowContent.classList.toggle('hidden', queryWindowDisplay == 'original');
  queryWindow.appendChild(queryWindowContent);
  queryWindowOriginalContent = document.createElement('div');
  queryWindowOriginalContent.style.fontSize = '14px';
  queryWindowOriginalContent.className = 'hidden';
  queryWindowOriginalContent.classList.toggle('hidden', queryWindowDisplay != 'original');
  queryWindow.appendChild(queryWindowOriginalContent);
  document.getElementById('WazeMap').appendChild(queryWindow);
  var querySymbol = document.createElement('span');
  querySymbol.className = 'fa fa-exclamation-triangle fa-4x';
  querySymbol.style.float = 'left';
  querySymbol.style.margin = '0 15px 30px';
  var getFeatureInfoControl = new OpenLayers.Control({
    id: 'GetFeatureInfoControl',
    eventListeners: {
      'activate': function() {
        document.getElementById('WazeMap').style.cursor = 'help';
      },
      'deactivate': function() {
        document.getElementById('WazeMap').style.cursor = '';
      }
    }
  });
  W.map.addControl(getFeatureInfoControl);
  var clickHandler = new OpenLayers.Handler.Click(getFeatureInfoControl, {
    'click': function(e) {
      getFeatureInfoControl.deactivate();
      getFeatureInfoControl.params.callback();
      var queryUrl = getFeatureInfoControl.params.url + '?SERVICE=WMS&REQUEST=GetFeatureInfo&BBOX=' + W.map.getExtent().toBBOX() +
          '&LAYERS=' + getFeatureInfoControl.params.layers + '&QUERY_LAYERS=' + getFeatureInfoControl.params.layers +
          '&HEIGHT=' + W.map.getSize().h + '&WIDTH=' + W.map.getSize().w +
          '&VERSION=1.3.0&CRS=EPSG:3857&I=' + e.xy.x + '&J=' + e.xy.y + '&INFO_FORMAT=text/html';
      var mapId = getFeatureInfoControl.params.id;
      queryWindowLoading.style.display = 'block';
      while (queryWindowContent.firstChild) {
        queryWindowContent.removeChild(queryWindowContent.firstChild);
      }
      while (queryWindowOriginalContent.firstChild) {
        queryWindowOriginalContent.removeChild(queryWindowOriginalContent.firstChild);
      }
      queryWindow.style.display = 'block';
      console.log('Retrieving feature info at ', queryUrl);
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
              queryWindowOriginalContent.innerHTML = body.innerHTML;
              setBorders(queryWindowOriginalContent)
              queryWindowContent.innerHTML = body.innerHTML;
              maps[mapId].query_filters.forEach(function(func) {
                func(queryWindowContent, maps[mapId]);
              });
              queryWindow.style.display = 'block';
              var escHandler = function(e) {
                if (e.keyCode == 27) { // Esc key
                  if (queryWindow.style.display == 'block') {
                    queryWindow.style.display = 'none';
                    e.stopPropagation();
                  }
                  document.removeEventListener('keydown', escHandler);
                }
              };
              document.addEventListener('keydown', escHandler);
            } else {
              querySymbol.style.color = '#999';
              queryWindowContent.appendChild(querySymbol);
              var emptyResponse = document.createElement('p');
              emptyResponse.textContent = I18n.t('openmaps.query_empty_response');
              queryWindowContent.appendChild(emptyResponse);
            }
          } else {
            log(response);
            querySymbol.style.color = 'red';
            queryWindowContent.appendChild(querySymbol);
            var errorResponseTitle = document.createElement('p');
            errorResponseTitle.textContent = I18n.t('openmaps.errors.network');
            queryWindowContent.appendChild(errorResponseTitle);
            var errorResponse = document.createElement('p');
            errorResponse.textContent = I18n.t('openmaps.errors.network_description') + (response.statusText ? response.statusText : '<empty>') + ' (' + response.status + ')';
            queryWindowContent.appendChild(errorResponse);
          }
        },
        ontimeout: function(e) {
          log(e);
          queryWindowLoading.style.display = 'none';
          querySymbol.style.color = 'orange';
          queryWindowContent.appendChild(querySymbol);
          var timeoutResponse = document.createElement('p');
          timeoutResponse.textContent = I18n.t('openmaps.errors.timeout_description');
          queryWindowContent.appendChild(timeoutResponse);
        },
        onerror: function(e) {
          log(e);
          queryWindowLoading.style.display = 'none';
          querySymbol.style.color = 'red';
          queryWindowContent.appendChild(querySymbol);
          var errorResponseTitle = document.createElement('p');
          errorResponseTitle.textContent = I18n.t('openmaps.errors.network');
          queryWindowContent.appendChild(errorResponseTitle);
          var errorResponse = document.createElement('p');
          errorResponse.textContent = I18n.t('openmaps.errors.see_console');
          queryWindowContent.appendChild(errorResponse);
        }
      });
    }
  });
  getFeatureInfoControl.handler = clickHandler;

  function removeUnsafeAttributes(node) {
    if (node.nodeType == Node.ELEMENT_NODE) {
      for (var i = 0; i < node.attributes.length; i++) {
        var attrName = node.attributes[i].name.toLowerCase();
        if (attrName.startsWith('on') || attrName == 'style' || attrName == 'class' || (attrName == 'href' && node.attributes[i].value.trim().toLowerCase().startsWith('javascript:'))) {
          node.removeAttribute(attrName);
        }
      }
    }
    for (var i = 0; i < node.childNodes.length; i++) {
      removeUnsafeAttributes(node.childNodes[i]);
    }
  }

  function setBorders(body) {
    var tables = body.querySelectorAll('table');
    for (var i = 0; i < tables.length; i++) {
      tables[i].border = '1';
    }
  }

  // Turn the columns of the table into rows to make the table go from horizontal to vertical
  function transposeTables(body) {
    var tables = body.querySelectorAll('table');
    for (var i = 0; i < tables.length; i++) {
      var newTable = transposeTable(tables[i]);
      tables[i].parentNode.insertBefore(newTable, tables[i]);
      tables[i].parentNode.removeChild(tables[i]);
    }
    function transposeTable(table) {
      var newTable = document.createElement('table');
      newTable.className = 'table table-striped table-hover table-condensed';
      var caption = table.querySelector('caption');
      if (caption) {
        var header = document.createElement('h5');
        header.textContent = caption.textContent;
        table.parentNode.insertBefore(header, table);
        table.removeChild(caption);
      }
      var tableHead = document.createElement('thead');
      var tableHeadRow = document.createElement('tr');
      var propertyHead = document.createElement('th');
      propertyHead.textContent = I18n.t('openmaps.query_table_property');
      tableHeadRow.appendChild(propertyHead);
      var valueHead = document.createElement('th');
      valueHead.textContent = I18n.t('openmaps.query_table_value');
      tableHeadRow.appendChild(valueHead);
      tableHead.appendChild(tableHeadRow);
      newTable.appendChild(tableHead);
      var tableBody = document.createElement('tbody');
      var firstRow = table.querySelector('tr');
      for (var i = 0; i < firstRow.childNodes.length; i++) {
        if (firstRow.childNodes[i].nodeType == 1) { // Element nodes only
          tableBody.appendChild(document.createElement('tr'));
        }
      }
      var rows = table.querySelectorAll('tr');
      for (var i = 0; i < rows.length; i++) {
        distributeColumnsOverRows(rows[i].childNodes, tableBody);
      }
      newTable.appendChild(tableBody);
      return newTable;
    }
    function distributeColumnsOverRows(columns, tbody) {
      var skippedCols = 0;
      for (var i = 0; i < columns.length; i++) {
        if (columns[i].nodeType == 1) { // Element nodes only
          var cell = document.createElement('td');
          cell.textContent = columns[i].textContent;
          tbody.childNodes[i - skippedCols].appendChild(cell);
        } else {
          skippedCols++;
        }
      }
    }
  }

  // Remove table rows with an empty or null value
  function cleanTableRows(body) {
    var rows = body.querySelectorAll('table tr');
    for (var i = 0; i < rows.length; i++) {
      cleanRow(rows[i]);
    }
    function cleanRow(row) {
      var rowProperty = row.childNodes[0];
      if (rowProperty.textContent.indexOf('_') != -1) {
        rowProperty.textContent = rowProperty.textContent.replace(/_/g, ' ').replace(/  /g, ' ').trim();
      }
      var rowContent = row.childNodes[1].textContent.trim();
      if (rowContent == '' || rowContent.toLowerCase() == 'null') {
        row.parentNode.removeChild(row);
      }
    }
  }

  // Put certain rows at first place as they are more important
  function reorderTableRows(body, map) {
    var propertyOrder = {
      '3101': [ 'openbare ruimte', 'huisnummer', 'huisletter', 'woonplaats' ],
      '3105': [ 'stt naam', 'gme naam' ],
      '3108': [ 'HDE SHT' ],
      '3109': [ 'stt naam', 'wpsnaamnen' ],
      '3202': [ 'OpnDatum' ],
      '3206': [ 'OpnDatum' ],
      '3207': [ 'linksStraatnaam', 'rechtsStraatnaam', 'lblMorfologie', 'lblBeheerder', 'lblOrganisatie' ],
      '3208': [ 'NAAM' ],
      '3209': [ 'OpnDatum' ],
      '3211': [ 'OpnDatum' ],
      '3212': [ 'Snelheidsbeperking', 'Variabel bord' ],
      '3217': [ 'NOM ROUTE', 'NUMERO ROUTE', 'TYPE DESC', 'SOUS TYPE DESC' ],
      '3220': [ 'bordcode' ],
      '3221': [ 'Snelheid' ],
      '5501': [ 'COMPLETO' ]
    };
    if (!propertyOrder[map.id]) {
      return;
    }
    var rows = body.querySelectorAll('table tr');
    var priorityRows = [];
    for (var i = 0; i < rows.length; i++) {
      var location = propertyOrder[map.id].indexOf(rows[i].firstChild.textContent);
      if (location > -1) {
        priorityRows[location] = rows[i];
      }
    }
    priorityRows.reverse().forEach(function(priorityRow) {
      priorityRow.parentNode.insertBefore(priorityRow, priorityRow.parentNode.firstChild);
    });
  }

  // Turn links within table cells into anchors
  function transformUrlsToLinks(body) {
    var cells = body.querySelectorAll('tr td')
    for (var i = 0; i < cells.length; i++) {
      if (cells[i].textContent.startsWith('http')) {
        var anchor = document.createElement('a');
        anchor.href = cells[i].textContent.replace(/&amp;&/g, '&'); // GIPOD issue. TODO: report.
        anchor.target = '_blank';
        anchor.textContent = anchor.href;
        cells[i].textContent = '';
        cells[i].appendChild(anchor);
      }
    }
  }

  // Put any available map layers into separate tabs
  function tabifyLayerBlocks(body, map) {
    var handles = document.createElement('ul');
    handles.className = 'nav nav-tabs';
    var containers = [];
    var currentNode = body.firstChild;
    while (currentNode != null) {
      if (currentNode.nodeName == 'H5') {
        addTab(currentNode);
        removeAndSetNextSibling();
      } else if (containers.length == 0) {
        removeAndSetNextSibling();
      } else {
        var toMove = currentNode;
        currentNode = currentNode.nextSibling;
        containers[containers.length - 1].appendChild(toMove);
      }
    }
    setActiveTab(handles.firstChild);
    body.appendChild(handles);
    for (var i = 0; i < containers.length; i++) {
      body.appendChild(containers[i]);
    }

    function removeAndSetNextSibling() {
      var toRemove = currentNode;
      currentNode = currentNode.nextSibling;
      toRemove.parentNode.removeChild(toRemove);
    }
    function addTab(header) {
      var nameMatch = /'([^']+)'/.exec(header.textContent);
      var layerName = document.createElement('a');
      layerName.style.cursor = 'default';
      if (nameMatch == null || nameMatch.length == 0 || nameMatch[1] == '') {
        layerName.textContent = header.textContent;
      } else if (map.layers[nameMatch[1]]) {
        layerName.textContent = map.layers[nameMatch[1]].title;
      } else {
        layerName.textContent = nameMatch[1];
      }
      var layerContainer = document.createElement('div');
      containers.push(layerContainer);
      var layerTab = document.createElement('li');
      layerTab.addEventListener('click', function() {
        setActiveTab(layerTab);
      });
      layerTab.appendChild(layerName);
      handles.appendChild(layerTab);
    }
    function setActiveTab(activeHandle) {
      for (var i = 0; i < handles.childNodes.length; i++) {
        var handle = handles.childNodes[i];
        handle.classList.toggle('active', handle == activeHandle);
        handle.firstChild.style.color = (handle == activeHandle ? '#3d3d3d' : '');
        handle.firstChild.style.fontWeight = (handle == activeHandle ? 700 : 400);
        var container = containers[i];
        container.classList.toggle('hidden', handle != activeHandle);
      }
    }
  }

  function applyAllTransformations(body, map) {
    transposeTables(body);
    transformUrlsToLinks(body);
    cleanTableRows(body);
    reorderTableRows(body, map);
    tabifyLayerBlocks(body, map);
  }

  function checkVersion() {
    // Convert from old storage object
    if (localStorage.OpenMaps_version) {
      Settings.set('version', localStorage.OpenMaps_version);
      localStorage.removeItem('OpenMaps_version');
    }
    var version = Settings.get().version,
        scriptVersion = GM_info.script.version;
    if (!version) {
      Settings.set('version', scriptVersion);
    } else if (version !== scriptVersion) {
      if (versions.indexOf(version) === -1) {
        // The version has been tampered with if we arrive here, just set to current version
        log('The version number seems to have been tampered with? Ignoring and resetting');
        Settings.set('version', scriptVersion);
        return;
      }
      var message = I18n.t('openmaps.update.message');
      for (var i = versions.indexOf(version)+1; i < versions.length; i++) {
        message += '\nv' + versions[i] + ':\n' + I18n.t('openmaps.update.v' + versions[i].replace(/\./g, '_'));
      }
      Settings.set('version', scriptVersion);
      alert(message);
    }
  }

  function createLayerToggler(parentGroup, checked, name, toggleCallback) {
    var normalizedName = name.toLowerCase().replace(/\s/g, '');
    if (parentGroup == null) {
      var group = document.createElement('li');
      group.className = 'group';
      var groupChildren = document.createElement('ul');
      var groupToggler = document.createElement('div');
      groupToggler.className = 'layer-switcher-toggler-tree-category';
      var groupCaret = document.createElement('i');
      groupCaret.className = 'toggle-category w-icon w-icon-caret-down';
      if (!checked) {
        groupCaret.classList.add('upside-down');
      }
      groupCaret.dataset.groupId = 'GROUP_' + normalizedName;
      groupToggler.appendChild(groupCaret);
      var groupSwitch = document.createElement('wz-toggle-switch');
      groupSwitch.className = 'layer-switcher-group_' + normalizedName;
      groupSwitch.id = 'layer-switcher-group_' + normalizedName;
      groupToggler.appendChild(groupSwitch);
      var groupSwitchLabel = document.createElement('label');
      groupSwitchLabel.className = 'label-text';
      groupSwitchLabel.htmlFor = groupSwitch.id;
      groupSwitchLabel.textContent = name;
      groupToggler.appendChild(groupSwitchLabel);
      group.appendChild(groupToggler);
      groupChildren.className = 'collapsible-GROUP_' + normalizedName;
      group.appendChild(groupChildren);
      document.querySelector('.list-unstyled.togglers').appendChild(group);
      groupCaret.addEventListener('click', function(e) {
        groupCaret.classList.toggle('upside-down');
        groupChildren.classList.toggle('collapse-layer-switcher-group');
      });
      groupSwitch.checked = checked;
      return group;
    } else {
      var layerItem = document.createElement('li');
      var layerToggle = document.createElement('wz-checkbox');
      layerToggle.id = 'layer-switcher-' + normalizedName;
      layerToggle.textContent = name;
      layerItem.appendChild(layerToggle);
      parentGroup.querySelector('ul').appendChild(layerItem);
      parentGroup.querySelector('wz-toggle-switch').addEventListener('click', function(e) {
        layerToggle.disabled = !e.target.checked;
        toggleCallback && toggleCallback(layerToggle.checked && e.target.checked);
      });
      layerToggle.addEventListener('click', e => toggleCallback(e.target.checked));
      layerToggle.checked = checked;
      return layerItem;
    }
  }

  function updateMapSelector() {
    var localMaps = [];
    Object.keys(maps).forEach(function(id) {
      if (maps[id].bbox.intersectsBounds(W.map.getExtent())) {
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

  function loadTileError(tile, callback) {
    // Request the tile again to check the error (OpenLayers doesn't provide this information)
    GM_xmlhttpRequest({
      method: 'GET',
      url: tile.url,
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
            if (response.responseHeaders.indexOf('Content-Type: image') !== -1) {
              log('Seems like we got an image response, redraw tile');
              callback({
                ok: true
              });
              tile.clear();
              tile.draw();
              return;
            }
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

  var tileManipulations = {
    // Replace all fully black pixels with white pixels
    'black2white': bitmap => {
      var dirty = false;
      for (let i = 0; i < bitmap.data.length; i += 4) {
        if (bitmap.data[i + 0] == 0 && bitmap.data[i + 1] == 0 && bitmap.data[i + 2] == 0) {
          bitmap.data[i + 0] = bitmap.data[i + 1] = bitmap.data[i + 2] = 255;
          dirty = true;
        }
      }
      return dirty;
    },
    // For the Oman map: change the beige colour to transparent
    'omanTransparent': bitmap => {
      var dirty = false;
      for (let i = 0; i < bitmap.data.length; i += 4) {
        if (bitmap.data[i + 0] == 235 && bitmap.data[i + 1] == 232 && bitmap.data[i + 2] == 222) {
          bitmap.data[i + 3] = 0;
          dirty = true;
        }
      }
      return dirty;
    },
    // For the Rio de Janeiro map: change the beige colour to transparent
    'rioTransparent': bitmap => {
      var dirty = false;
      for (let i = 0; i < bitmap.data.length; i += 4) {
        if (bitmap.data[i + 0] == 235 && bitmap.data[i + 1] == 255 && bitmap.data[i + 2] == 242) {
          bitmap.data[i + 3] = 0;
          dirty = true;
        }
      }
      return dirty;
    },
    // Remove partial transparency, calculate colour as if it were on a white background
    'removePartialTransparency': bitmap => {
      var dirty = false;
      for (let i = 0; i < bitmap.data.length; i += 4) {
        if (bitmap.data[i + 3] > 0) {
          bitmap.data[i + 0] = Math.floor(255 - bitmap.data[i + 3] + (bitmap.data[i + 3] / 255) * bitmap.data[i + 0] + 0.5);
          bitmap.data[i + 1] = Math.floor(255 - bitmap.data[i + 3] + (bitmap.data[i + 3] / 255) * bitmap.data[i + 1] + 0.5);
          bitmap.data[i + 2] = Math.floor(255 - bitmap.data[i + 3] + (bitmap.data[i + 3] / 255) * bitmap.data[i + 2] + 0.5);
          bitmap.data[i + 3] = 255;
          dirty = true;
        }
      }
      return dirty;
    },
    // Replace the colours for the Brussels map with the corresponding colours used in the WME for road types
    'brusselsSwapColours': bitmap => {
      var dirty = false;
      for (let i = 0; i < bitmap.data.length; i += 4) {
        if (bitmap.data[i + 3] > 0 && bitmap.data[i] == bitmap.data[i + 1] && bitmap.data[i + 1] == bitmap.data[i + 2]) {
          bitmap.data[i + 0] = 255;
          bitmap.data[i + 1] = 252;
          bitmap.data[i + 2] = 208;
          dirty = true;
        } else if (bitmap.data[i + 3] > 0 && bitmap.data[i] >= bitmap.data[i + 2]) {
          bitmap.data[i + 0] = 69;
          bitmap.data[i + 1] = 184;
          bitmap.data[i + 2] = 209;
          dirty = true;
        } else if (bitmap.data[i + 3] > 0 && bitmap.data[i] < bitmap.data[i + 2]) {
          bitmap.data[i + 0] = 105;
          bitmap.data[i + 1] = 191;
          bitmap.data[i + 2] = 136;
          dirty = true;
        }
      }
      return dirty;
    },
    // Remove partial transparency for black pixels, calculate colour as if it were on a white background
    'removePartialBlackTransparency': bitmap => {
      var dirty = false;
      for (let i = 0; i < bitmap.data.length; i += 4) {
        if (bitmap.data[i] < 5 && bitmap.data[i + 1] < 5 && bitmap.data[i + 2] < 5 && bitmap.data[i + 3] > 0) {
          bitmap.data[i + 0] = 255 - bitmap.data[i + 3];
          bitmap.data[i + 1] = 255 - bitmap.data[i + 3];
          bitmap.data[i + 2] = 255 - bitmap.data[i + 3];
          bitmap.data[i + 3] = 255;
          dirty = true;
        }
      }
      return dirty;
    },
    // Add white pixels around any grayscale pixels
    'traceGrayscalePixels': bitmap => {
      var dirty = false;
      var surroundingPixels = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      var pixelsSinceTrace = 2; // How many pixels ago did we trace around a pixel?
      for (let i = 0; i < bitmap.data.length; i += 4) {
        pixelsSinceTrace++;
        // Find opaque, non-white grayscale pixels
        if (bitmap.data[i + 3] != 0 && bitmap.data[i] != 255 && bitmap.data[i] == bitmap.data[i + 1] && bitmap.data[i + 1] == bitmap.data[i + 2]) {
          // Do not check positions we know have been checked by a previous iteration
          var positionsToCheck = (pixelsSinceTrace == 1) ? 3 : ((pixelsSinceTrace == 2) ? 5 : 8);
          surroundingPixels.slice(-1 * positionsToCheck).forEach(pixelRelation => {
            var x = ((i / 4) % bitmap.width) + pixelRelation[0],
                y = Math.floor((i / 4) / bitmap.width) + pixelRelation[1],
                offset = (y * bitmap.width + x) * 4;
            if (x >= 0 && x < bitmap.width && y >= 0 && y < bitmap.height && bitmap.data[offset + 3] == 0) {
              bitmap.data[offset + 0] = bitmap.data[offset + 1] = bitmap.data[offset + 2] = 255;
              bitmap.data[offset + 3] = 200;
              dirty = true;
            }
          });
          pixelsSinceTrace = 0;
        }
      }
      return dirty;
    },
    // Turn white tiles transparent
    'whiteTiles2transparent': bitmap => {
      var dirty = false;
      var pixelArray = new Uint32Array(bitmap.data.buffer);
      var white = 0xFFFFFFFF;
      var transparent = 0x00FFFFFF;
      var whitePixels = 0;
      // Do some analysis of the top and bottom borders to see whether this run is actually needed?
      for (var i = 0; i < bitmap.width; i++) {
        if (pixelArray[i] == white) {
          whitePixels++;
        }
      }
      for (var i = pixelArray.length - bitmap.width; i < pixelArray.length; i++) {
        if (pixelArray[i] == white) {
          whitePixels++;
        }
      }
      if (whitePixels > bitmap.width / 2) { // More than a quarter of the pixels are white
        pixelArray.forEach((pixel, idx) => {
          if (pixel == white) {
            pixelArray[idx] = transparent;
            dirty = true;
          }
        });
      }
      return dirty;
    },
    // Add a semi-transparent white overlay to make map details visible on satellite imagery
    'addTranslucentOverlay': bitmap => {
      var dirty = false;
      var pixelArray = new Uint32Array(bitmap.data.buffer);
      var whiteTranslucent = 0x33FFFFFF;
      var transparent = 0x00000000;
      pixelArray.forEach((pixel, idx) => {
          if (pixel == transparent) {
            pixelArray[idx] = whiteTranslucent;
            dirty = true;
          }
        });
      return dirty;
    }
  }

  // Manipulate a map tile received from the source
  function manipulateTile(event, manipulations) {
    if (event.aborted || !event.tile || !event.tile.imgDiv) {
      return;
    }
    var newTile = document.createElement('canvas');
    newTile.width = event.tile.imgDiv.width;
    newTile.height = event.tile.imgDiv.height;
    var context = newTile.getContext('2d');
    context.drawImage(event.tile.imgDiv, 0, 0);
    var imageData = context.getImageData(0, 0, newTile.width, newTile.height);
    var replaceNeeded = false;
    manipulations.forEach(manipulation => {
      if (tileManipulations.hasOwnProperty(manipulation)) {
        replaceNeeded = replaceNeeded || tileManipulations[manipulation](imageData);
      }
    });
    if (replaceNeeded) {
      context.putImageData(imageData, 0, 0);
      event.tile.imgDiv.src = newTile.toDataURL('image/png');
    }
  }

  function saveMapState() {
    var settings = Settings.get();
    settings.state.active = [];
    handles.forEach(function(handle) {
      var handleState = {
        mapId: handle.mapId,
        opacity: handle.opacity,
        layers: handle.mapLayers,
        hidden: handle.hidden,
        transparent: handle.transparent,
        improveMap: handle.improveMap
      };
      settings.state.active.push(handleState);
    });
    Settings.put(settings);
  }

  function MapHandle(map, options) {
    var self = this;
    this.layer = null;
    this.mapId = map.id;
    this.mapLayers = [];
    this.opacity = (options && options.opacity ? options.opacity : "100");
    this.outOfArea = !map.bbox.intersectsBounds(W.map.getExtent());
    this.hidden = (options && options.hidden ? true : false);
    this.transparent = (options && !options.transparent || map.format == 'image/jpeg' ? false : true);
    this.improveMap = (options && options.improveMap != undefined ? options.improveMap : true);
    var container = document.createElement('li');
    var layerContainer = document.createElement('ul');
    var title = document.createElement('p');
    var description = document.createElement('p');
    var editContainer = document.createElement('div');
    var remove, visibility, query, edit, externalLink, error, info;
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
    var layerToggler = createLayerToggler(omGroup, !this.hidden, map.title, function(visible) {
      if (self.layer) {
        self.layer.setVisibility(visible);
      }
    });

    function updateTileLoader() {
      if (loadedTiles == totalTiles || totalTiles == 0) {
        loadedTiles = 0;
        totalTiles = 0;
        title.style.borderImage = 'none';
      } else {
        var percentage = parseInt(loadedTiles * 100 / totalTiles, 10);
        title.style.borderImage = 'linear-gradient(to right, #4f4, #4f4 ' + percentage + '%, #ddd ' + percentage + '%, #ddd) 100 4 stretch';
      }
    }

    function createIconButton(icon, title, forceTooltip) {
      var button = document.createElement('button');
      button.className = 'fa ' + icon + ' open-maps-icon-button';
      if (title) {
        button.dataset.container = '#sidebar';
        Tooltips.add(button, title, forceTooltip);
      }
      return button;
    }

    this.clearError = function() {
      Tooltips.remove(error);
      error.style.display = 'none';
    };

    this.updateVisibility = function() {
      title.style.color = (self.layer && self.layer.getVisibility() ? '' : '#999');
      description.style.color = (self.layer && self.layer.getVisibility() ? '' : '#999');
      var zoom = W.map.getZoom();
      info.style.display = (self.layer && self.layer.getVisibility() && map.zoomRange && (zoom < map.zoomRange[0] || zoom > map.zoomRange[1]) ? 'inline' : 'none');
      visibility.style.color = (self.outOfArea ? '#999' : '');
      visibility.style.cursor = (self.outOfArea ? 'default' : 'pointer');
    };

    this.updateLayers = function() {
      var visibleLayers = [];
      for (var i = 0; i < this.mapLayers.length; i++) {
        if (this.mapLayers[i].visible) {
          visibleLayers.push(this.mapLayers[i].name);
        }
      }
      if (visibleLayers && visibleLayers.length == 0 && this.layer && map.type == 'WMS') { // Hide map as it has no more layers
        this.layer.setVisibility(false);
      } else if (visibleLayers.length > 0 && !this.layer) { // Add map that received layers
        var params = {
          layers: visibleLayers.join(),
          transparent: self.transparent,
          format: map.format
        };
        var options = {
          transitionEffect: 'resize',
          attribution: map.attribution,
          isBaseLayer: false
        };
        options.projection = new OpenLayers.Projection(map.crs);
        options.tileSize = (map.tile_size ? new OpenLayers.Size(map.tile_size, map.tile_size) : new OpenLayers.Size(512, 512));
        options.tileOptions = {crossOriginKeyword: 'anonymous'};
        this.layer = new OpenLayers.Layer.WMS(map.title, map.url, params, options);
        this.layer.setOpacity(this.opacity / 100);
        this.layer.setVisibility(!this.hidden && !this.outOfArea);

        if (map.zoomRange) {
          this.layer.events.register('moveend', null, function(obj) {
            if (obj.zoomChanged) {
              var zoom = W.map.getZoom();
              info.style.display = (zoom < map.zoomRange[0] || zoom > map.zoomRange[1] ? 'inline' : 'none');
            }
          });
        }

        this.layer.events.register('tileerror', null, function(obj) {
          if (error.title != '') {
            return;
          }
          error.style.display = 'inline';
          Tooltips.add(error, I18n.t('openmaps.retrieving_error'), true);
          loadTileError(obj.tile, function(msg) {
            if (msg.ok) {
              self.clearError();
            } else {
              Tooltips.remove(error);
              Tooltips.add(error, msg.title + ': ' + msg.description, true);
            }
          });
        });
        this.layer.events.register('tileloadstart', null, function(evt) {
          totalTiles++;
          updateTileLoader();
        });
        this.layer.events.register('tileloaded', null, function(evt) {
          loadedTiles++;
          updateTileLoader();
          if (map.pixelManipulations && self.improveMap) {
            manipulateTile(evt, map.pixelManipulations);
          }
        });
        W.map.addLayer(this.layer);
        var aerialImageryIndex = W.map.getLayerIndex(W.map.getLayersBy('uniqueName', 'satellite_imagery')[0]);
        W.map.getOLMap().setLayerIndex(this.layer, (aerialImageryIndex >= 0 ? aerialImageryIndex : 0) + handles.length + 1);
        this.layer.events.register('visibilitychanged', null, function() {
          self.updateVisibility();
        });
      } else if (layerRedrawNeeded) { // Update layers if there's a change
        this.layer.mergeNewParams({
          layers: visibleLayers.join()
        });
        layerRedrawNeeded = false;
      }
      saveMapState();
    };

    remove = createIconButton('fa-times', I18n.t('openmaps.remove_layer'));
    remove.addEventListener('click', function(e) {
      if (self.layer != null) {
        W.map.removeLayer(self.layer);
      }
      Tooltips.remove(remove);
      layerToggler.parentNode.removeChild(layerToggler);
      handles.splice(handles.indexOf(self), 1);
      container.parentNode.removeChild(container);
      saveMapState();
    });
    container.appendChild(remove);
    edit = createIconButton('fa-pencil', I18n.t('openmaps.edit_layer'));
    edit.addEventListener('click', function() {
      editContainer.style.display = (editContainer.style.display == 'none' ? 'block' : 'none');
    });
    container.appendChild(edit);
    visibility = createIconButton((self.hidden ? 'fa-eye-slash' : 'fa-eye'), I18n.t('openmaps.hideshow_layer'));
    visibility.addEventListener('click', function() {
      self.hidden = self.layer.getVisibility();
      self.layer.setVisibility(!self.hidden);
      layerToggler.querySelector('wz-checkbox').checked = !self.hidden;
      saveMapState();
    });
    visibility.addEventListener('mouseenter', function() {
      visibility.classList.toggle('fa-eye', self.hidden);
      visibility.classList.toggle('fa-eye-slash', !self.hidden);
    });
    visibility.addEventListener('mouseleave', function() {
      visibility.classList.toggle('fa-eye', !self.hidden);
      visibility.classList.toggle('fa-eye-slash', self.hidden);
    });
    container.appendChild(visibility);
    if (map.getExternalUrl) {
      externalLink = createIconButton('fa-external-link-square', I18n.t('openmaps.external_link_tooltip'));
      externalLink.addEventListener('click', function() {
        window.open(map.getExternalUrl(), '_blank');
      });
      container.appendChild(externalLink);
    }
    if (map.queryable) {
      query = createIconButton('fa-hand-pointer-o', I18n.t('openmaps.query_layer'));
      query.addEventListener('click', function() {
        if (!getFeatureInfoControl.active) {
          this.style.color = 'blue';
          var queryLayers = [];
          self.mapLayers.forEach(function(mapLayer) {
            if (mapLayer.visible && map.layers[mapLayer.name].queryable) {
              queryLayers.push(mapLayer.name);
            }
          });
          getFeatureInfoControl.params = {
            url: map.queryUrl || map.url,
            id: map.id,
            layers: queryLayers.join(),
            callback: function() {
              query.style.color = '';
            }
          };
          getFeatureInfoControl.activate();
        } else {
          this.style.color = '';
          getFeatureInfoControl.deactivate();
        }
      });
      container.appendChild(query);
    }
    info = createIconButton('fa-info-circle', I18n.t('openmaps.layer_out_of_range'), true);
    container.appendChild(info);
    error = createIconButton('fa-exclamation-triangle');
    error.style.color = 'red';
    error.style.display = 'none';
    error.addEventListener('click', this.clearError);
    container.appendChild(error);
    var handleIcon = document.createElement('span');
    handleIcon.className = 'fa fa-reorder';
    container.appendChild(handleIcon);
    title.className = 'title';
    title.textContent = map.title;
    title.addEventListener('click', (event) => {
      visibility.dispatchEvent(new MouseEvent('click'));
      visibility.classList.toggle('fa-eye');
      visibility.classList.toggle('fa-eye-slash');
    });
    container.appendChild(title);
    description.className = 'additional-info';
    description.title = I18n.t('openmaps.expand');
    description.addEventListener('click', function() {
      this.title = (this.style.whiteSpace == 'nowrap' || this.style.whiteSpace == '' ? I18n.t('openmaps.collapse') : I18n.t('openmaps.expand'));
      this.style.whiteSpace = (this.style.whiteSpace == 'nowrap' || this.style.whiteSpace == '' ? 'normal' : 'nowrap');
    });
    description.textContent = map.abstract;
    container.appendChild(description);
    editContainer.className = 'edit-panel';
    if (map.format != 'image/jpeg') {
      var transparentCheck = document.createElement('wz-checkbox');
      transparentCheck.addEventListener('click', function() {
        self.transparent = !self.transparent;
        self.layer.mergeNewParams({
          transparent: self.transparent
        });
        saveMapState();
      });
      transparentCheck.checked = self.transparent;
      transparentCheck.textContent = I18n.t('openmaps.transparent_label');
      editContainer.appendChild(transparentCheck);
      Tooltips.add(transparentCheck, I18n.t('openmaps.transparent_label_tooltip'));
    }
    if (map.hasOwnProperty('pixelManipulations')) {
      var improveMapCheck = document.createElement('wz-checkbox');
      improveMapCheck.addEventListener('click', function() {
        self.improveMap = !self.improveMap;
        self.layer.redraw();
        saveMapState();
      });
      if (self.improveMap) {
        improveMapCheck.checked = true;
      }
      improveMapCheck.textContent = I18n.t('openmaps.map_improvement_label');
      editContainer.appendChild(improveMapCheck);
      Tooltips.add(improveMapCheck, I18n.t('openmaps.map_improvement_label_tooltip'));
    }
    var opacityLabel = document.createElement('div');
    opacityLabel.textContent = I18n.t('openmaps.opacity_label') + ':';
    opacityLabel.style.marginLeft = '35px';
    opacityLabel.style.color = '#4c4c4c';
    Tooltips.add(opacityLabel, I18n.t('openmaps.opacity_label_tooltip'));
    var opacitySlider = document.createElement('input');
    opacitySlider.className = 'open-maps-opacity-slider';
    opacitySlider.type = 'range';
    opacitySlider.max = 100;
    opacitySlider.min = 5;
    opacitySlider.step = 5;
    opacitySlider.value = this.opacity;
    opacitySlider.addEventListener('input', function() {
      self.layer.setOpacity(Math.max(5, Math.min(100, this.value)) / 100);
      self.opacity = this.value;
      saveMapState();
    });
    opacityLabel.appendChild(opacitySlider);
    editContainer.appendChild(opacityLabel);
    if (self.mapLayers.length > 1) {
      var mapLayersTitle = document.createElement('p');
      mapLayersTitle.textContent = I18n.t('openmaps.map_layers_title') + ':';
      editContainer.appendChild(mapLayersTitle);
      layerContainer.className = 'result-list';
      self.mapLayers.forEach(function(layerItem) {
        var mapLayer = map.layers[layerItem.name];
        var item = document.createElement('li');
        item.className = 'result';
        var layerHandleIcon = document.createElement('span');
        var layerTitle = document.createElement('p');
        var layerDescription = document.createElement('p');
        var visibility = document.createElement('span');
        visibility = createIconButton((layerItem.visible ? 'fa-eye' : 'fa-eye-slash'), I18n.t('openmaps.hideshow_layer'));
        visibility.addEventListener('mouseenter', function() {
          visibility.classList.toggle('fa-eye', !layerItem.visible);
          visibility.classList.toggle('fa-eye-slash', layerItem.visible);
        });
        visibility.addEventListener('mouseleave', function() {
          visibility.classList.toggle('fa-eye', layerItem.visible);
          visibility.classList.toggle('fa-eye-slash', !layerItem.visible);
        });
        visibility.addEventListener('click', function() {
          layerItem.visible = !layerItem.visible;
          layerTitle.style.color = (layerItem.visible ? '' : '#999');
          layerDescription.style.color = (layerItem.visible ? '' : '#999');
          layerRedrawNeeded = true;
          self.updateLayers.call(self);
        });
        item.appendChild(visibility);
        if (mapLayer.queryable) {
          var layerQuery = document.createElement('span');
          layerQuery = createIconButton('fa-hand-pointer-o');
          layerQuery.addEventListener('click', function() {
            this.style.color = 'blue';
            getFeatureInfoControl.params = {
              url: map.url,
              id: map.id,
              layers: layerItem.name,
              callback: function() {
                layerQuery.style.color = '';
              }
            };
            getFeatureInfoControl.activate();
          });
          item.appendChild(layerQuery);
        }
        layerHandleIcon.className = 'fa fa-reorder';
        item.appendChild(layerHandleIcon);
        layerTitle.className = 'title';
        layerTitle.style.cursor = 'default';
        layerTitle.style.color = (layerItem.visible ? '' : '#999');
        layerTitle.textContent = mapLayer.title;
        layerTitle.addEventListener('click', (event) => {
          visibility.dispatchEvent(new MouseEvent('click'));
          visibility.classList.toggle('fa-eye');
          visibility.classList.toggle('fa-eye-slash');
        });
        item.appendChild(layerTitle);
        if (mapLayer.abstract) {
          layerDescription.className = 'additional-info';
          layerDescription.title = I18n.t('openmaps.expand');
          layerDescription.style.color = (layerItem.visible ? '' : '#999');
          layerDescription.addEventListener('click', function() {
            this.title = (this.style.whiteSpace == 'nowrap' ? I18n.t('openmaps.collapse') : I18n.t('openmaps.expand'));
            this.style.whiteSpace = (this.style.whiteSpace == 'nowrap' || this.style.whiteSpace == '' ? 'normal' : 'nowrap');
          });
          layerDescription.textContent = mapLayer.abstract;
          item.appendChild(layerDescription);
        }
        layerContainer.appendChild(item);
      });
      editContainer.appendChild(layerContainer);
    }
    editContainer.style.display = 'none';
    container.appendChild(editContainer);
    container.className = 'result maps-menu-item';
    handleList.appendChild(container);
    sortable(handleList); // refresh HTML5Sortable
    sortable(layerContainer, {
      forcePlaceholderSize: true,
      placeholderClass: 'result',
      handle: '.fa-reorder'
    })[0].addEventListener('sortupdate', function(e) {
      if (e.detail.elementIndex < 0 || e.detail.elementIndex >= self.mapLayers.length || e.detail.oldElementIndex < 0 || e.detail.oldElementIndex >= self.mapLayers.length) { // Sanity check
        log('Received an invalid element index when reordering map layers. Old index: ' + e.detail.oldElementIndex + ', new index: ' + e.detail.elementIndex);
        return;
      }
      self.mapLayers.splice(e.detail.elementIndex, 0, self.mapLayers.splice(e.detail.oldElementIndex, 1)[0]);
      layerRedrawNeeded = self.mapLayers[e.detail.elementIndex].visible; // Only redraw if it was a visible layer
      self.updateLayers.call(self);
    });

    this.updateLayers();
    this.updateVisibility();
  }

  // Add style
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.textContent = `
#sidepanel-openMaps h4 {
  margin-bottom: 5px;
}

#sidePanel-openMaps select {
  margin: 8px 0;
}

.open-maps-query-window {
  display: none;
  top: 40px;
  left: 100px;
  right: 60px;
  max-height: calc(100% - 80px);
  overflow-y: auto;
  background-color: #fff;
  border: 2px solid #ddd;
  padding: 5px;
  color: #000;
  cursor: auto;
  z-index: 10000;
  position: absolute;
}

.open-maps-query-window-button-left, .open-maps-query-window-button-right {
  cursor: pointer;
}
.open-maps-query-window-button-left {
  float: left;
}
.open-maps-query-window-button-right {
  float: right;
}

.open-maps-query-window h2 {
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.5em;
}

.open-maps-query-window table td {
  user-select: text;
}

#sidebar #sidepanel-openMaps .result-list .result {
  padding: 10px 20px;
  cursor: default;
}

.open-maps-maximum-layers {
  border-radius: 8px;
  padding: 8px;
  background-color: #fff;
}

.open-maps-maximum-layers h3 {
  margin-bottom: 15px;
  font-size: 13px;
  font-weight: 700;
}

.open-maps-icon-button {
  border: none;
  background: none;
  padding: 4px;
  float: right;
  cursor: pointer;
  height: auto;
  outline: none;
}

.open-maps-icon-button.fa-info-circle {
  color: #337ab7;
  cursor: help;
  display: none;
}

#sidepanel-openMaps .fa-reorder {
  cursor: move;
}

input.open-maps-opacity-slider {
  vertical-align: middle;
  display: inline;
  margin-left: 8px;
  width: 80px;
}

#sidepanel-openMaps .additional-info {
  font-style: italic;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}

#sidepanel-openMaps .maps-menu-item > div.edit-panel {
  border-radius: 8px;
  margin-top: 2px;
  padding: 8px;
  padding-right: 0;
  background-color: #eee;
}

#sidepanel-openMaps .maps-menu-item > div.edit-panel > p {
  font-weight: bold;
  margin: 10px;
}

#sidepanel-openMaps .maps-menu-item div.edit-panel wz-checkbox {
  margin-left: 5px;
}
#sidepanel-openMaps .maps-menu-item .edit-panel .result-list {
  overflow-y: scroll;
  max-height: 15em;
}

#sidepanel-openMaps .maps-menu-item .edit-panel .result-list .result {
  padding: 5px;
}

#sidepanel-openMaps .title {
  cursor: default;
  border-top: 2px solid transparent;
  border-width: 2px 0 0 0;
}
`;
  }
  if (!styleElement.parentNode) {
    document.head.appendChild(styleElement);
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
