// ==UserScript==
// @name        WME OpenMaps
// @author      Tom 'Glodenox' Puttemans
// @namespace   http://www.tomputtemans.com/
// @description Add additional maps that are released as open data to the Waze Map Editor
// @include     https://www.waze.com/editor*
// @include     https://www.waze.com/*/editor*
// @include     https://beta.waze.com/editor*
// @include     https://beta.waze.com/*/editor*
// @exclude     https://www.waze.com/user*
// @exclude     https://www.waze.com/*/user*
// @connect     wallonie.be
// @connect     geo.api.vlaanderen.be
// @connect     opendata.apps.mow.vlaanderen.be
// @connect     geoserver.gis.cloud.mow.vlaanderen.be
// @connect     www.mercator.vlaanderen.be
// @connect     irisnet.be
// @connect     data.mobility.brussels
// @connect     ccff02.minfin.fgov.be
// @connect     eservices.minfin.fgov.be
// @connect     nationaalgeoregister.nl
// @connect     geo.rijkswaterstaat.nl
// @connect     rj.gov.br
// @connect     wvgis.wvu.edu
// @connect     nsdig2gapps.ncsi.gov.om
// @connect     gismaps.vdem.virginia.gov
// @connect     tnmap.tn.gov
// @connect     apps.pasda.psu.edu
// @connect     services.nationalmap.gov
// @connect     imagery.nationalmap.gov
// @connect     service.pdok.nl
// @connect     *
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAMAAACfBSJ0AAABuVBMVEVHcEwOdZgIbZYNcpUPdJgJcZcLcZYXb5UOcJcOc5oNcpcOdZoPdZkLcpcKcJYLbpRHnKkrhKMohaIRcJQTbpEYtdYHg5Cl2sBrxpqJwMcvuXaT17VUu4k4uHsPcZoHgq4gomWZ17is3MVq0KFJvISe2Lw0vnqA06pEw4UjttdVyZGM1bKG1K4tsXJXwo1hxZRh0Zo6x4Ijq2k7wIBX0JRFtskLfqwNiJRBuoALipt6yqN0x6BOwolKx4px0KAJhaYVnrUMdqK13stSwb59vsmS0rMIg5o1tHUcjZovwapByohfypcxuNa/4tMfq8aCzKhNzY07uNFErLwqq24RlaqUy8Rfv5GMz64vtc05obEalIwlmKk2mqnL6dovk6AZoHYat8pVn68NkKN40aYlsZJos79fq7N+vMN1tbqTx9AZj6GAyL0pqoBGkKsTiLI8q4u31tg1q78no7ghurhexrVzv8VWpLtpq7iizsqlydeaydpxtccvhKMWf4QXmYEtv52IycRln7N0xbQUfpI0wo9Dwbl7rL9LorKu0dJOyaCDzK9jvLUVmJobo6Ygd5pVsKgonpEUe6SJu7z3kfFBAAAAE3RSTlMAwj7t2TFmBxIgp0+aeou4/vTT3cYvbAAABk5JREFUSMeNlvk/Yl0YwKU9KdxbKiUjE7JHpUFJiiTbiIQWZZkWoVLz2veMdfzF73POvRpmmPG9fW798Hx7nuece+45JSVvwuVyeXw+nwff3JIPAgZHWFW5j/jJYojKeB9ReezyqsCafGt5eQvxXZ5LVgrK+P9QeaXCZC6/vOzxLH9/plCQX1Vx+H/TSoUVG4WtQsED2f4r8n15OR+u4vDebay8Kpf3bG2B5SnkvxX5Dtk9T0lB6dsaX1DxlC9AzPJQ3it/xlvID3k88PGeVHHe0tiM8JNc/u2b3OuVrxc1eR6cIUz+slL0Rmusk8vL4eH19bx3HTFMsX5cT1n1Q/X1T5XCP7JhbW9jY2N9HT7Dx17K83rrX/D0e0YeI3x5ube3kQNxL7uXrYYgbxbsavSr+pnPG5Xlrzxh8iS3t5rL5VYRx9X1IBwff6aCqTvmU471clQ5lScnq7m1NfA2sqvx6ur4MYr8FY5xfHI4npIM3ouhTJ7s7q4BufhpdjXr9WaPqXh00RLF/Ml++a/53g/v7obD4bW11Xh8NZ6NZx10dM2nGoBWHPPz8z82ksVK2SzwQHu42l07jcdr4vE4Dke01LQg5jGT85Onu8l7EZdOd5/cvaqouLranblxOH4zWlpbWhGTFF/6wvssNvV8se6ToIF4enNT42hxUNFUeGtja2PjZCPlIPrW9gkOTlhG3CcXlioqFh4c8z+A1qIACiLSGIlQDkIWIBhoUXGFxP3SUmBpaeHL/I8bg/30FMXasZDJRDIRwNKHrj5ZnwxIkQQqlMckfy4GkPdwM2MwTGfsINqnDfZIJGPXRDIWoM9ikVHMyeZSZ7hQNkEaY4FA4AHVcWM32O2nGo3dbp+2WzSGjEWDkGlksg645gAleAKYew5BqJ2jgYc+3EIGCXaURKOxWOwXIHXKOt1udweAtd6Uk2CBJyJq1VL/HN10Znx8enzcgLNoOi8MnQhKa0coe1WPVv8Zv4QrIGxqaUpG9WyRXYz7fOPNvovrThp3T4/OrdPpsAVawmT0n7FLuAzw/Mq5Dtx2h8x9ce2+8Pl8F5TVA+h0UzpdP6KhV6VKONVnZ6UlXBZhsz5C4e1zqAV3BxTl1l1f9xSZmpoaGBgACVmqkTa/upYow95sCmlQB4g6RI+O8lyua8oaaGpq6u5W3SVGRkYSK8/eonJO2a4Er7+9H2lTuqm0C4QplyTtch25XOcgdWu10cHbRNtIW+wMeWLkAdB0e38/1IP+fsoVGgNvDKx0SCIJHZ1rtVrV4Ozs7WHQb8XjAuNpTSFRiVvH2sDYWDo9hunqAk8iOQLtbnB2xew/dBrRPJSUw/w9gtWgbAD6mxAQnw6dY6vrCGmStFYRHcRe0Gw8ZPLRciDUoylaa2ii6TqXuLq6ippEEqU96aH/NojeMXx4Pq3+3oZnsAWkQ+juojVJGrzZWbMpGDSbDtCK5zFIeGCk/scUTFBvU283Rdd5+ujchXuTNDc3T0xEo1FIZ5IG9QcwnOg1AQ06pSbzSqoX0U2b2vNQKB2itWbfxMTdHSpTajo8YOIXBVpIVqnUvIJEFYgqNFcUaWyNwzM7sbOD25OqbaQQv0J5YigUJ0yoaGhLcURZ49M+3/b2zuJszCR1GglcJn7BECihyUx7WoVKoVUA0RDWpqenDQbkxUZNTkjHoPdsPoNEHUrN/hGMYkSheKUZDIaZme0F5FkhXXH75BB4SKXmBC0q2uCKhqBKH6WBt7C0CNpmLSkuHhF4AhJXKvWPtBVJTCBgJVIaeIHR0c2fJLPs5a4JlSLx67Olb4tib2J7ewZDaUaSeLXlcpiU+JVCr2/TJwaBnZ2dbWQuIC22uUmQjNfHERGBRdpCBO9ocQGkpQDWSJLeG34hQKLar6/T0wRhsSVuZxcxUGNs00iQzD/PMCDC4ATrAJDrguaVQ33wdiUWi40iNmFI3tJgj2eSpM1cR+OER19/aDZhzNZNYy1JsN4+MXFYJEkcUFoQBjeIblKp02lVG22QTPze2Y4tgJRYPLQ6nU6kOK1WNbZIVvn7Z0kuR0yQB4DNaFQjjEajzUZAGUwh+68HUD5HwCQgkCRqMfgnwRKV/vPMyy8tF4OKZRJ9s4Qc9ocO2Vw+u4wjEogZYrFAxCnl80o+DpznMe8l+h9u1SIwib9KHQAAAABJRU5ErkJggg==
// @supportURL  https://github.com/Glodenox/wme-om/issues
// @version     3.2.10
// @require     https://bowercdn.net/c/html.sortable-0.4.4/dist/html.sortable.js
// @grant       GM_xmlhttpRequest
// ==/UserScript==

/* global W, I18n, sortable, OpenLayers, Proj4js, $ */

var styleElement;
OpenMaps = {};

async function onWmeReady() {
  if (typeof OpenLayers == 'undefined') {
    log('WME Ready, but OpenLayers is still undefined');
    setTimeout(onWmeReady, 300);
    return;
  }
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
        v3_1_9: '- WV Leaves Off layers updated\n- Renamed some layers for Brussels',
        v3_1_10: '- WV Leaves Off layers updated\n- Fixed several Brussels maps',
        v3_1_11: '- Added Cadastral Borders map (BE)',
        v3_1_12: '- Added aerial imagery of Virginia (US)\n- Updated PICC and Brussels Future speed limits maps (BE)\n- Updated Oman National Basemap maps',
        v3_1_13: '- Added aerial imagery of Tennessee (US)',
        v3_1_14: '- WV Leaves Off layers updated (US)',
        v3_1_15: '- Fix for upcoming WME version',
        v3_1_16: '- Move Virginia map to new hosting location (US)',
        v3_1_17: '- Added aerial imagery of Pennsylvania (US)\n- Tennessee map bounding box correction (US)',
        v3_1_18: '- Added NAIP+ imagery for US territories, Alaska, and Hawaii\n- Added gray pixel tracing for Oman maps',
        v3_1_19: '- Fixed Luchtfoto (NL) by using PDOK directly',
        v3_1_20: '- Adjustments for WME v2.83',
        v3_1_21: '- Updated BAG (NL)\n- Updated luchtfoto (NL)',
        v3_1_22: '- WV Leaves Off layers updated (US)',
        v3_1_23: '- Updated for new WME layout',
        v3_1_24: '- Added North Carolina NC One Map (US)',
        v3_1_25: '- Migrated Flanders map services to new endpoint (BE)\n- Updated PDOK Luchtbeelden (NL)',
        v3_1_26: '- Updated for new WME version',
        v3_2_1: '- Adjust layout for new WME',
        v3_2_2: '- WV Leaves Off layers updated (US)',
        v3_2_3: '- Migrate Maximumsnelheden map (NL)',
        v3_2_4: '- Replace NAIP with NAIP+ map (US)',
        v3_2_5: '- Migrate to new Waze API for creating tabs',
        v3_2_6: '- WV Leaves Off layers updated (US)',
        v3_2_7: '- PICC map layers updated (BE)',
        v3_2_8: '- WV Leaves Off layers updated (US)',
        v3_2_9: '- Cadastral borders map replaced (BE)',
        v3_2_10: '- Fixed spacing issue in query window results\n- Added VLAIO map (BE)'
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
        v3_1_9: '- WV Leaves Off laag updates\n- Enkele Brusselse kaarten hernoemd',
        v3_1_10: '- WV Leaves Off laag updates\n- Enkele Brusselse kaarten hersteld',
        v3_1_11: '- Kaart met kadastrale grenzen toegevoegd (BE)',
        v3_1_12: '- Luchtfoto\'s van Virginia toegevoegd\n- PICC en Brussels Future speed limits kaarten bijgewerkt (BE)\n- Oman National Basemap bijgewerkt',
        v3_1_13: '- Luchtfoto\'s van Tennessee toegevoegd',
        v3_1_14: '- WV Leaves Off laag updates',
        v3_1_15: '- Verbetering voor toekomstige versie van WME',
        v3_1_16: '- Verplaats de kaart van Virginia naar de nieuwe server (US)',
        v3_1_17: '- Luchtfoto\'s van Pennsylvania toegevoegd (US)\n- Correctie aan de begrenzing van de kaart van Tennessee',
        v3_1_18: '- NAIP+-beelden toegevoegd voor Amerikaans grondgebied, Alaska en Hawaii\n- Overtrekken van grijze pixels toegevoegd bij kaarten van Oman',
        v3_1_19: '- Luchtfoto (NL) hersteld door PDOK rechtstreeks op te roepen',
        v3_1_20: '- Aanpassingen voor WME v2.83',
        v3_1_21: '- BAG aangepast (NL)\n- Luchtfoto aangepast (NL)',
        v3_1_22: '- WV Leaves Off laag updates',
        v3_1_23: '- Aanpassingen voor nieuwe lay-out WME',
        v3_1_24: '- North Carolina NC One Map toegevoegd (US)',
        v3_1_25: '- Migratie Vlaamse kaartdiensten naar nieuwe website (BE)\n- PDOK Luchtbeelden bijgewerkt (NL)',
        v3_1_26: '- Aanpassingen voor nieuwe lay-out WME',
        v3_2_1: '- Layout aanpassen voor nieuwe WME',
        v3_2_2: '- WV Leaves Off laag updates',
        v3_2_3: '- Verwijs naar nieuwe Maximumsnelhedenkaart (NL)',
        v3_2_4: '- Vervang NAIP door NAIP+ kaart (US)',
        v3_2_5: '- Maak gebruik van de nieuwe Waze API om tabs aan te maken',
        v3_2_6: '- WV Leaves Off laag updates',
        v3_2_7: '- PICC kaartlagen aangepast (BE)',
        v3_2_8: '- WV Leaves Off laag updates',
        v3_2_9: '- Cadastral borders map vervangen (BE)',
        v3_2_10: '- Probleem met witruimte opgelost in query scherm\n- VLAIO kaart toegevoegd (BE)'
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
    {
      id: 101,
      title: 'WV Leaves Off',
      type: 'WMS',
      url: 'https://services.wvgis.wvu.edu/arcgis/services/Imagery_BaseMaps_EarthCover/wv_imagery_WVGISTC_leaf_off_mosaic/MapServer/WMSServer',
      crs: 'EPSG:3857',
      bbox: [-82.723357, 37.134443, -77.624583, 40.659337],
      format: 'image/jpeg',
      area: 'US',
      abstract: 'Satellite imagery of West Virginia',
      attribution: 'West Virginia University',
      pixelManipulations: ['whiteTiles2transparent'],
      queryable: false,
      default_layers: ['1', '5', '8', '10', '14', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '39', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74'],
      layers: {
        '1': { queryable: true,
          title: 'Wyoming_2018',
          abstract: ''
        },
        '5': { queryable: true,
          title: 'Nicholas_2018',
          abstract: ''
        },
        '8': { queryable: true,
          title: 'Monroe_2018',
          abstract: ''
        },
        '10': { queryable: true,
          title: 'McDowell_2018',
          abstract: ''
        },
        '14': { queryable: true,
          title: 'Mason_2018',
          abstract: ''
        },
        '17': { queryable: true,
          title: 'Logan_2018',
          abstract: ''
        },
        '18': { queryable: true,
          title: 'Lincoln_2018',
          abstract: ''
        },
        '19': { queryable: true,
          title: 'Hardy_2018',
          abstract: ''
        },
        '20': { queryable: true,
          title: 'Barbour_2018',
          abstract: ''
        },
        '21': { queryable: true,
          title: 'Tucker_2019',
          abstract: ''
        },
        '22': { queryable: true,
          title: 'Gilmer_2019',
          abstract: ''
        },
        '23': { queryable: true,
          title: 'Clay_2019',
          abstract: ''
        },
        '24': { queryable: true,
          title: 'Braxton_2019',
          abstract: ''
        },
        '25': { queryable: true,
          title: 'Mineral_2019',
          abstract: ''
        },
        '26': { queryable: true,
          title: 'Hancock_2019',
          abstract: ''
        },
        '27': { queryable: true,
          title: 'Grant_2019',
          abstract: ''
        },
        '28': { queryable: true,
          title: 'Taylor_2020',
          abstract: ''
        },
        '29': { queryable: true,
          title: 'Pleasants_2020',
          abstract: ''
        },
        '30': { queryable: true,
          title: 'Marion_2020',
          abstract: ''
        },
        '31': { queryable: true,
          title: 'Summers_2020',
          abstract: ''
        },
        '32': { queryable: true,
          title: 'Webster_2020',
          abstract: ''
        },
        '33': { queryable: true,
          title: 'Mingo_2020',
          abstract: ''
        },
        '34': { queryable: true,
          title: 'Boone_2020',
          abstract: ''
        },
        '35': { queryable: true,
          title: 'Greenbrier_2020',
          abstract: ''
        },
        '36': { queryable: true,
          title: 'Fayette_2020',
          abstract: ''
        },
        '37': { queryable: true,
          title: 'Preston_2020',
          abstract: ''
        },
        '39': { queryable: true,
          title: 'Mercer_2021',
          abstract: ''
        },
        '42': { queryable: true,
          title: 'Putnam_2021',
          abstract: ''
        },
        '43': { queryable: true,
          title: 'Pendleton_2021',
          abstract: ''
        },
        '44': { queryable: true,
          title: 'Wayne_2021',
          abstract: ''
        },
        '45': { queryable: true,
          title: 'Wirt_2022',
          abstract: ''
        },
        '46': { queryable: true,
          title: 'Wetzel_2022',
          abstract: ''
        },
        '47': { queryable: true,
          title: 'Upshur_2022',
          abstract: ''
        },
        '48': { queryable: true,
          title: 'Roane_2022',
          abstract: ''
        },
        '49': { queryable: true,
          title: 'Randolph_2022',
          abstract: ''
        },
        '50': { queryable: true,
          title: 'Raleigh_2022',
          abstract: ''
        },
        '51': { queryable: true,
          title: 'Pocahontas_2022',
          abstract: ''
        },
        '52': { queryable: true,
          title: 'Morgan_2022',
          abstract: ''
        },
        '53': { queryable: true,
          title: 'Marshall_2022',
          abstract: ''
        },
        '54': { queryable: true,
          title: 'Lewis_2022',
          abstract: ''
        },
        '55': { queryable: true,
          title: 'Jefferson_2022',
          abstract: ''
        },
        '56': { queryable: true,
          title: 'Kanawha_2022',
          abstract: ''
        },
        '57': { queryable: true,
          title: 'Jackson_2022',
          abstract: ''
        },
        '58': { queryable: true,
          title: 'Harrison_2022',
          abstract: ''
        },
        '59': { queryable: true,
          title: 'Hampshire_2022',
          abstract: ''
        },
        '60': { queryable: true,
          title: 'Calhoun_2022',
          abstract: ''
        },
        '61': { queryable: true,
          title: 'Brooke_2022',
          abstract: ''
        },
        '62': { queryable: true,
          title: 'Wood_2023',
          abstract: ''
        },
        '63': { queryable: true,
          title: 'Tyler_2023',
          abstract: ''
        },
        '64': { queryable: true,
          title: 'Taylor_2023',
          abstract: ''
        },
        '65': { queryable: true,
          title: 'Ritchie_2023',
          abstract: ''
        },
        '66': { queryable: true,
          title: 'Putnam_2023',
          abstract: ''
        },
        '67': { queryable: true,
          title: 'Ohio_2023',
          abstract: ''
        },
        '68': { queryable: true,
          title: 'Monongalia_2023',
          abstract: ''
        },
        '69': { queryable: true,
          title: 'Jefferson_2023',
          abstract: ''
        },
        '70': { queryable: true,
          title: 'Harrison_2023',
          abstract: ''
        },
        '71': { queryable: true,
          title: 'Doddridge_2023',
          abstract: ''
        },
        '72': { queryable: true,
          title: 'Cabell_2023',
          abstract: ''
        },
        '73': { queryable: true,
          title: 'Berkeley_2023',
          abstract: ''
        },
        '74': { queryable: true,
          title: 'CountiesImagery_Year',
          abstract: ''
        }
      }
    }, {
      id: 102,
      title: 'USDA NAIP+ Imagery',
      type: 'WMS',
      url: 'https://imagery.nationalmap.gov:443/arcgis/services/USGSNAIPPlus/ImageServer/WMSServer',
      crs: 'EPSG:3857',
      bbox: [-179.297176, -14.629169, 179.825647, 71.498685],
      format: 'image/jpeg',
      area: 'US',
      abstract: 'USDA NAIP+ Imagery of the Continuous US',
      attribution: 'USDA',
      queryable: false,
      default_layers: ['0'],
      layers: {
        '0': {
          queryable: false,
          title: 'USDA NAIP+ Imagery',
          abstract: 'USDA NAIP+ Imagery of the Continuous US'
        }
      }
    }, {
      id: 104,
      title: 'Virginia Aerial Imagery',
      type: 'WMS',
      url: 'https://gismaps.vdem.virginia.gov/arcgis/services/VBMP_Imagery/MostRecentImagery_WGS/MapServer/WMSServer',
      crs: 'EPSG:3857',
      bbox: [-84.09707, 36.06439, -74.820609, 39.927717],
      format: 'image/jpeg',
      area: 'US',
      abstract: 'Most recent aerial imagery from Virginia Geographic Information Network',
      attribution: 'Virginia Geographic Information Network',
      pixelManipulations: ['vaBlankTiles2Transparent'],
      queryable: false,
      default_layers: ['0'],
      layers: {
        '0': {
          queryable: false,
          title: 'VBMP most recent imagery',
          abstract: 'Orthoimagery collected in Spring 2013, 2014, 2015 and 2017 (whichever is most recently available) by the VBMP program for Virginia. The imagery is displayed in true color (RED, GREEN, BLUE). The spatial reference is WGS 1984 Web Mercator (Auxiliary Sphere). The imagery is tiled at 12 levels from 1:4,622,324 to 1:2,257. The imagery was collected to meet ASPRS Class 1 orthoimagery standards. Most areas were collected at a 1-ft ground sample distance (GSD), with some urban areas upgraded to 6-inch and 3-inch GSD. - "Any determination of topography or contours, or any depiction of physical improvements, property lines or boundaries is for general information only and shall not be used for the design, modification, or construction of improvements to real property or for flood plain determination." Subsection C of § 54.1-402.'
        }
      }
    }, {
      id: 105,
      title: 'Tennessee Aerial Imagery',
      type: 'WMS',
      url: 'https://tnmap.tn.gov/arcgis/services/BASEMAPS/IMAGERY_WEB_MERCATOR/MapServer/WMSServer',
      crs: 'EPSG:3857',
      bbox: [-90.350458, 34.961664, -81.609963, 36.686075],
      format: 'image/png',
      area: 'US',
      abstract: 'Tennessee Department of Transportation(TDOT) Imagery Product',
      attribution: 'TDOT',
      queryable: false,
      default_layers: ['0'],
      layers: {
        '0': {
          queryable: false,
          title: 'TDOT Imagery',
          abstract: 'TDOT Imagery Product'
        }
      }
    }, {
      id: 106,
      title: 'Pennsylvania Aerial Imagery',
      type: 'WMS',
      url: 'https://apps.pasda.psu.edu/arcgis/services/PEMAImagery2018_WEB/MapServer/WMSServer',
      crs: 'EPSG:3857',
      bbox: [-80.589716, 39.679911, -74.682489, 42.29279],
      format: 'image/png',
      area: 'US',
      abstract: 'Aerial Imagery from PEMA, 2018-2020',
      attribution: 'PASDA',
      queryable: false,
      default_layers: ['1', '5', '9', '13', '17', '21', '25', '29', '33', '37', '41', '45', '49', '53', '57', '61', '65', '69', '73', '77', '81', '85', '89', '93', '97', '101', '105', '109', '113', '117', '121', '125', '129', '133', '137', '141', '145', '149', '153', '157', '161', '165', '169', '173', '177', '181', '185', '189', '193', '197', '201', '205', '209', '213', '217'],
      layers: {
        '1': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_YorkCounty_Mosaic2018_1'
        },
        '5': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_WyomingCounty_Mosaic2020'
        },
        '9': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_WayneCounty_Mosaic2020'
        },
        '13': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_WashingtonCounty_Mosaic2018'
        },
        '17': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_UnionCounty_Mosaic2020'
        },
        '21': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_SusquehannaCounty_Mosaic2020'
        },
        '25': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_SullivanCounty_Mosaic2020'
        },
        '29': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_SomersetCounty_Mosaic2020'
        },
        '33': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_SnyderCounty_Mosaic2020'
        },
        '37': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_SchuylkillCounty_Mosaic2018'
        },
        '41': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_PotterCounty_Mosaic2020'
        },
        '45': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_PhiladelphiaCounty_Mosaic2018'
        },
        '49': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_PerryCounty_Mosaic2018'
        },
        '53': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_NorthumberlandCounty_Mosaic2018'
        },
        '57': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_NorthamptonCounty_Mosaic'
        },
        '61': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_MontourCounty_Mosaic2018_gdb'
        },
        '65': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_MontgomeryCounty_Mosaic2018'
        },
        '69': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_MonroeCounty_Mosaic2018'
        },
        '73': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_McKeanCounty_Mosaic2019_JP2'
        },
        '77': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_MifflinCounty_Mosaic2020'
        },
        '81': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_LycomingCounty_Mosaic2020'
        },
        '85': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_LuzerneCounty_Mosaic2018'
        },
        '89': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_LehighCounty_Mosaic2018'
        },
        '93': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_LebanonCounty_Mosaic2018'
        },
        '97': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_LawrenceCounty_Mosaic2020'
        },
        '101': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_LancasterCounty_Mosaic2018'
        },
        '105': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_LackawannaCounty_Mosaic2020'
        },
        '109': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_JuniataCounty_Mosaic2020'
        },
        '113': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_JeffersonCounty_Mosaic2018'
        },
        '117': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_HuntingdonCounty_Mosaic2020'
        },
        '121': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_GreeneCounty_Mosaic2018_gdb'
        },
        '125': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_FultonCounty_Mosaic2020'
        },
        '129': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_FranklinCounty_Mosaic2018'
        },
        '133': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_FayetteCounty_Mosaic2020'
        },
        '137': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_ErieCounty_Mosaic2018_JP2'
        },
        '141': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_ElkCounty_Mosaic2019_JP2'
        },
        '145': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_DelawareCounty_Mosaic2018'
        },
        '149': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_DauphinCounty_Mosaic2018'
        },
        '153': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_CumberlandCounty_Mosaic2018_JP2'
        },
        '157': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_CrawfordCounty_Mosaic2018_JP2'
        },
        '161': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_ColumbiaCounty_Mosaic2018'
        },
        '165': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_ClintonCounty_Mosaic2020'
        },
        '169': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_ClearfieldCounty_Mosaic2018'
        },
        '173': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_ChesterCounty_Mosaic2020'
        },
        '177': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_CentreCounty_Mosaic2020'
        },
        '181': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_CarbonCounty_Mosaic2018'
        },
        '185': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_CameronCounty_Mosaic2019_JP2'
        },
        '189': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_CambriaCounty_Mosaic2018'
        },
        '193': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_BucksCounty_Mosaic'
        },
        '197': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_BradfordCounty_Mosaic2020'
        },
        '201': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_BlairCounty_Mosaic2020'
        },
        '205': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_BerksCounty_Mosaic2020'
        },
        '209': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_BeaverCounty_Mosaic2020'
        },
        '213': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_AlleghenyCounty_Mosaic2018'
        },
        '217': {
          queryable: true,
          title: 'Image',
          abstract: 'PEMA_AdamsCounty_Mosaic2018_JP2'
        }
      }
    }, {
      id: 107,
      title: 'USDA NAIP+ Puerto Rico',
      type: 'WMS',
      url: 'https://services.nationalmap.gov/arcgis/services/USGSNAIPPlus/MapServer/WMSServer',
      crs: 'EPSG:3857',
      bbox: [-67.95584, 17.865141, -65.21849, 18.522609],
      format: 'image/png',
      area: 'US',
      abstract: 'USDA NAIP+ Imagery of Puerto Rico',
      attribution: 'USDA',
      queryable: false,
      default_layers: ['1'],
      layers: {
        '1': {
          queryable: false,
          title: 'USDA NAIP+ Puerto Rico',
          abstract: 'USDA NAIP+ Imagery of the Puerto Rico'
        }
      }
    }, {
      id: 108,
      title: 'USDA NAIP+ Virgin Islands',
      type: 'WMS',
      url: 'https://services.nationalmap.gov/arcgis/services/USGSNAIPPlus/MapServer/WMSServer',
      crs: 'EPSG:3857',
      bbox: [-65.077787, 17.654595, -64.546763, 18.427245],
      format: 'image/png',
      area: 'US',
      abstract: 'USDA NAIP+ Imagery of Virgin Islands',
      attribution: 'USDA',
      queryable: false,
      default_layers: ['5'],
      layers: {
        '5': {
          queryable: false,
          title: 'USDA NAIP+ Virgin Islands',
          abstract: 'USDA NAIP+ Imagery of the Virgin Islands'
        }
      }
    }, {
      id: 109,
      title: 'USDA NAIP+ Hawaii',
      type: 'WMS',
      url: 'https://services.nationalmap.gov/arcgis/services/USGSNAIPPlus/MapServer/WMSServer',
      crs: 'EPSG:3857',
      bbox: [-160.678325, 17.356606, -152.847819, 23.203373],
      format: 'image/png',
      area: 'US',
      abstract: 'USDA NAIP+ Imagery of Hawaii',
      attribution: 'USDA',
      queryable: false,
      default_layers: ['9'],
      layers: {
        '9': {
          queryable: false,
          title: 'USDA NAIP+ Hawaii',
          abstract: 'USDA NAIP+ Imagery of the Hawaii'
        }
      }
    }, {
      id: 110,
      title: 'USDA NAIP+ American Samoa',
      type: 'WMS',
      url: 'https://services.nationalmap.gov/arcgis/services/USGSNAIPPlus/MapServer/WMSServer',
      crs: 'EPSG:3857',
      bbox: [-170.851656, -14.377607, -169.40573, -14.143065],
      format: 'image/png',
      area: 'US',
      abstract: 'USDA NAIP+ Imagery of American Samoa',
      attribution: 'USDA',
      queryable: false,
      default_layers: ['13'],
      layers: {
        '13': {
          queryable: false,
          title: 'USDA NAIP+ American Samoa',
          abstract: 'USDA NAIP+ Imagery of the American Samoa'
        }
      }
    }, {
      id: 111,
      title: 'USDA NAIP+ Guam/Northern Mariana Islands',
      type: 'WMS',
      url: 'https://services.nationalmap.gov/arcgis/services/USGSNAIPPlus/MapServer/WMSServer',
      crs: 'EPSG:3857',
      bbox: [144.549128, 13.165851, 146.125274, 20.625758],
      format: 'image/png',
      area: 'US',
      abstract: 'USDA NAIP+ Imagery of Guam/Northern Mariana Islands',
      attribution: 'USDA',
      queryable: false,
      default_layers: ['17'],
      layers: {
        '17': {
          queryable: false,
          title: 'USDA NAIP+ Guam/Northern Mariana Islands',
          abstract: 'USDA NAIP+ Imagery of the Guam/Northern Mariana Islands'
        }
      }
    }, {
      id: 112,
      title: 'USDA NAIP+ St. John',
      type: 'WMS',
      url: 'https://services.nationalmap.gov/arcgis/services/USGSNAIPPlus/MapServer/WMSServer',
      crs: 'EPSG:3857',
      bbox: [-64.806465, 18.268151, -64.635387, 18.37756],
      format: 'image/png',
      area: 'US',
      abstract: 'USDA NAIP+ Imagery of St. John',
      attribution: 'USDA',
      queryable: false,
      default_layers: ['21'],
      layers: {
        '21': {
          queryable: false,
          title: 'USDA NAIP+ St. John',
          abstract: 'USDA NAIP+ Imagery of the St. John'
        }
      }
    }, {
      id: 113,
      title: 'USDA NAIP+ Alaska',
      type: 'WMS',
      url: 'https://services.nationalmap.gov/arcgis/services/USGSNAIPPlus/MapServer/WMSServer',
      crs: 'EPSG:3857',
      bbox: [-173.25, 54.383756, -129.786987, 71.506811],
      format: 'image/png',
      area: 'US',
      abstract: 'USDA NAIP+ Imagery of Alaska',
      attribution: 'USDA',
      queryable: false,
      default_layers: ['29'],
      layers: {
        '29': {
          queryable: false,
          title: 'USDA NAIP+ Alaska',
          abstract: 'USDA NAIP+ Imagery of the Alaska'
        }
      }
    }, {
      id: 114,
      title: 'NC OneMap',
      type: 'WMS',
      url: 'https://services.nconemap.gov/secure/services/Imagery/Orthoimagery_Latest/ImageServer/WMSServer',
      crs: 'EPSG:3857',
      bbox: [-84.262261, 33.695574, -75.399761, 36.590526],
      format: 'image/png',
      area: 'US',
      abstract: 'Most recent aerial imagery from NC OneMap',
      attribution: 'NC OneMap', // https://www.nconemap.gov/pages/terms
      queryable: false,
      default_layers: ['0'],
      layers: {
        '0': {
          queryable: false,
          title: 'Orthoimagery_Latest',
          abstract: 'Imagery/Orthoimagery_Latest'
        }
      }
    }, {
      id: 3101,
      title: 'BAG',
      type: 'WMS',
      url: 'https://service.pdok.nl/lv/bag/wms/v2_0',
      crs: 'EPSG:3857',
      bbox: [3.206231, 50.733604, 7.245263, 53.58298],
      format: 'image/png',
      area: 'NL',
      abstract: 'De gegevens bestaan uit BAG-panden en een deelselectie van BAG-gegevens van deze panden en de zich daarin bevindende verblijfsobjecten. Ook de ligplaatsen en standplaatsen zijn hierin opgenomen met een deelselectie van BAG-gegevens. De gegevens van de nummeraanduiding zijn in deze services onderdeel van de adresseerbare objecten, hierbij wordt slechts 1 adres opgenomen, dus objecten met meerdere adressen (hoofd- en nevenadressen) zijn niet compleet. In deze services zitten dus niet alle BAG adressen. Wij adviseren u, aangezien er sprake is van beperkte gegevens, om in de webservice BAG Bevragen de actuele gegevens te controleren. Dit kan ook in een van de andere BAG producten: BAG Web, BAG Extract of BAG Compact. BAG Bevragen: http://www.kadaster.nl/web/artikel/productartikel/BAG-Bevragen.htm Andere BAG producten: http://www.kadaster.nl/web/Themas/Registraties/BAG/BAGartikelen/BAG-producten.htm De service wordt dagelijks geactualiseerd.',
      attribution: 'BAG',
      getExternalUrl: () => 'https://bagviewer.kadaster.nl/lvbag/bag-viewer/index.html',
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['ligplaats', 'pand', 'verblijfsobject', 'woonplaats', 'standplaats'],
      layers: {
        'ligplaats': {
          queryable: false,
          title: 'ligplaats'
        },
        'pand': {
          queryable: false,
          title: 'pand'
        },
        'standplaats': {
          queryable: false,
          title: 'standplaats'
        },
        'verblijfsobject': {
          queryable: true,
          title: 'verblijfsobject'
        },
        'woonplaats': {
          queryable: false,
          title: 'woonplaats'
        }
      }
    }, {
      id: 3103,
      title: 'Weggegevens',
      type: 'WMS',
      url: 'https://geodata.nationaalgeoregister.nl/weggeg/wms',
      crs: 'EPSG:3857',
      bbox: [3.460993, 50.740995, 7.239002, 53.443005],
      format: 'image/png',
      area: 'NL',
      abstract: 'De service van Weggegevens bevat op dit moment de lagen maximum snelheden en rijstroken van de rijkswegen.',
      attribution: 'PDOK',
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['weggegaantalrijbanen', 'weggegmaximumsnelheden'],
      layers: {
        'weggegaantalrijbanen': {
          queryable: true,
          title: 'Weggegevens aantal rijbanen'
        },
        'weggegmaximumsnelheden': {
          queryable: true,
          title: 'Weggegevens maximumsnelheden'
        }
      }
    }, {
      id: 3105,
      title: 'Hectopunten Rijkswaterstaat',
      type: 'WMS',
      url: 'https://geodata.nationaalgeoregister.nl/nwbwegen/wms',
      crs: 'EPSG:3857',
      bbox: [3.000000, 50.740995, 7.000000, 53.000000],
      zoomRange: [14, 22],
      format: 'image/png',
      area: 'NL',
      abstract: 'Het NWB-Wegen is een digitaal geografisch bestand van nagenoeg alle wegen in Nederland. Opgenomen zijn alle wegen die worden beheerd door wegbeheerders als het Rijk, provincies, gemeenten en waterschappen, echter alleen voor zover deze zijn voorzien van een straatnaam of nummer. Dus ook losliggende voet- en fietspaden en onverharde wegen zijn, indien voorzien van een straatnaam, in het NWB-Wegen opgenomen. Indien een weg gescheiden rijbanen heeft, wat vooral het geval is bij Rijkswegen, worden deze als aparte wegvakken in het bestand verwerkt. In totaal beslaat het NWB-Wegen ongeveer 145.000 kilometer gedigitaliseerde wegvakken (in aantal +/-825000). Het NWB-Wegen wordt 4 keer per jaar geactualiseerd.',
      attribution: 'PDOK',
      pixelManipulations: ['removePartialBlackTransparency', 'traceGrayscalePixels'],
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['hectopunten', 'wegvakken'],
      layers: {
        'hectopunten': {
          queryable: true,
          title: 'NWB Wegen hectopunten'
        },
        'wegvakken': {
          queryable: true,
          title: 'NWB Wegen wegvakken'
        }
      }
    }, {
      id: 3106,
      title: 'Luchtfoto (PDOK)',
      type: 'WMS',
      url: 'https://service.pdok.nl/hwh/luchtfotorgb/wms/v1_0',
      crs: 'EPSG:3857',
      bbox: [-1.657293, 48.040499, 12.431731, 56.110592],
      format: 'image/jpeg',
      area: 'NL',
      abstract: 'Een jaarlijks te vernieuwen dataset van luchtopnamen van Nederland in hoge en lage resolutie.',
      attribution: 'PDOK',
      pixelManipulations: ['whiteTiles2transparent'],
      queryable: false,
      default_layers: ['Actueel_orthoHR'],
      layers: {
        'Actueel_orthoHR': {
          queryable: false,
          title: 'Luchtfoto Actueel HR',
          abstract: 'Landsdekkende hoge resolutie dataset kleuren luchtfoto\'s van de meest recente jaargang.'
        },
        'Actueel_ortho25': {
          queryable: false,
          title: 'Luchtfoto Actueel 25cm',
          abstract: 'Landsdekkende 25cm resolutie dataset kleuren luchtfoto\'s van de meest recente jaargang.'
        },
        '2022_orthoHR': {
          queryable: false,
          title: 'Luchtfoto 2022 Ortho HR',
          abstract: 'Landsdekkende dataset in hoge resolutie kleuren luchtfoto\'s van 2022.'
        },
        '2021_orthoHR': {
          queryable: false,
          title: 'Luchtfoto 2021 Ortho HR',
          abstract: 'Landsdekkende dataset in hoge resolutie kleuren luchtfoto\'s van 2021.'
        },
        '2020_ortho25': {
          queryable: false,
          title: 'Luchtfoto 2020 Ortho 25cm RGB',
          abstract: 'Landsdekkende dataset 25cm resolutie kleuren luchtfoto\'s van 2019.'
        },
        '2019_ortho25': {
          queryable: false,
          title: 'Luchtfoto 2019 Ortho 25cm RGB',
          abstract: 'Landsdekkende dataset 25cm resolutie kleuren luchtfoto\'s van 2019.'
        },
        '2018_ortho25': {
          queryable: false,
          title: 'Luchtfoto 2018 Ortho 25cm RGB',
          abstract: 'Landsdekkende dataset 25cm resolutie kleuren luchtfoto\'s van 2018.'
        },
        '2017_ortho25': {
          queryable: false,
          title: 'Luchtfoto 2017 Ortho 25cm RGB',
          abstract: 'Landsdekkende dataset 25cm resolutie kleuren luchtfoto\'s van 2017.'
        },
        '2016_ortho25': {
          queryable: false,
          title: 'Luchtfoto 2016 Ortho 25cm RGB',
          abstract: 'Landsdekkende dataset 25cm resolutie kleuren luchtfoto\'s van 2016.'
        }
      }
    }, {
      id: 3107,
      title: 'Kadastrale kaart',
      type: 'WMS',
      url: 'https://geodata.nationaalgeoregister.nl/kadastralekaart/wms/v4_0',
      crs: 'EPSG:3857',
      bbox: [3.460993, 50.740995, 7.239002, 53.443005],
      format: 'image/png',
      area: 'NL',
      abstract: 'Overzicht van de ligging van de kadastrale percelen in Nederland. Fungeert als schakel tussen terrein en registratie, vervult voor externe gebruiker vaak een referentiefunctie, een ondergrond ten opzichte waarvan de gebruiker eigen informatie kan vastleggen en presenteren.',
      attribution: 'PDOK',
      pixelManipulations: ['removePartialBlackTransparency', 'traceGrayscalePixels'],
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['KadastraleKaart'],
      layers: {
        'KadastraleKaart': {
          queryable: true,
          title: 'Kadastrale Kaart'
        },
        'Bebouwing': {
          queryable: true,
          title: 'Bebouwing'
        },
        'Label': {
          queryable: true,
          title: 'Label'
        },
        'Bebouwingvlak': {
          queryable: true,
          title: 'Bebouwingvlak'
        },
        'KadastraleGrens': {
          queryable: true,
          title: 'Kadastrale Grens'
        },
        'Bijpijling': {
          queryable: true,
          title: 'Bijpijling'
        },
        'Perceel': {
          queryable: true,
          title: 'Perceel'
        },
        'Perceelvlak': {
          queryable: true,
          title: 'Perceelvlak'
        },
        'Nummeraanduidingreeks': {
          queryable: true,
          title: 'Nummeraanduidingreeks'
        }
      }
    }, {
      id: 3108,
      title: 'Maximumsnelheden',
      type: 'WMS',
      url: 'https://geo.rijkswaterstaat.nl/services/ogc/gdr/maximum_snelheden_wegen/ows',
      crs: 'EPSG:3857',
      bbox: [3.253348, 50.73394, 7.246081, 53.549177],
      format: 'image/png',
      area: 'NL',
      abstract: 'Maximumsnelhedenkaart van alle wegen in Nederland, voorzien door Rijkswaterstaat',
      attribution: 'Rijkswaterstaat',
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['max_snelheden_overdag', 'max_snelheden_nacht'],
      layers: {
        'max_snelheden_overdag': {
          title: 'Maximumsnelheden overdag',
          queryable: true
        },
        'max_snelheden_nacht': {
          title: 'Maximumsnelheden \'s nachts',
          queryable: true
        },
        'max_snelheden_advies': {
          title: 'Adviessnelheden per wegvak',
          abstract: 'De wegkenmerkendatabase voor snelheden bevat ook de adviessnelheden dat geldt voor een bepaald wegvak of een deel daarvan.\nNu zijn alleen adviessnelheden voor de rijkswegen opgenomen in het bestand, maar in de toekomst wordt dit uitgebreid met de adviessnelheden voor het onderliggend wegennet.',
          queryable: true
        }
      }
    }, {
      id: 3109,
      title: 'Nationaal Wegen Bestand',
      type: 'WMS',
      url: 'https://geodata.nationaalgeoregister.nl/nwbwegen/wms',
      crs: 'EPSG:3857',
      bbox: [3.197329, 7.255724, 58.960412, 53.611001],
      format: 'image/png',
      area: 'NL',
      abstract: 'Nationaal Wegen Bestand met alle gegevens van de Nederlandse wegen',
      attribution: 'Nationaal Wegen Bestand',
      pixelManipulations: ['removePartialTransparency'],
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['wegvakken'],
      layers: {
        'wegvakken': {
          title: 'Nationaal Wegen Bestand Wegvakken',
          queryable: true
        }
      }
    }, {
      id: 3201,
      title: 'GRB Vlaanderen',
      type: 'WMS',
      url: 'https://geo.api.vlaanderen.be/GRB/wms',
      crs: 'EPSG:3857',
      bbox: [2.519999, 50.639999, 5.940002, 51.510003],
      format: 'image/png',
      area: 'BE',
      abstract: 'Opvragen en visualiseren van het Grootschalig Referentiebestand (GRB) als een kaart. Omvat alle GRB-gegevens gebaseerd op het GRBgis product. De gebruiker kan selecteren welke GRB-gegevens gevisualiseerd moeten worden en in welke volgorde. Voor een gedetailleerde databeschrijving van het GRB raadpleegt u best het GRB-objectenhandboek via www.agiv.be/producten/grb/objectcatalogus/entiteiten.',
      attribution: 'Agentschap Informatie Vlaanderen',
      getExternalUrl: (extent) => 'http://www.geopunt.be/kaart?app=Geopunt-kaart_app&kaart=Basiskaart - GRB: volledige kaart&extent=' + extent.left + ',' + extent.right + ',' + extent.bottom + ',' + extent.top,
      queryable: false,
      default_layers: ['GRB_BSK'],
      layers: {
        'GRB_BSK': {
          queryable: false,
          title: 'GRB-basiskaart',
          abstract: 'Deze laag omvat alle (GRB-) entiteiten die zichtbaar zijn in de GRB-basiskaart'
        }
      }
    }, {
      id: 3202,
      title: 'Orthomozaïek Vlaanderen',
      type: 'WMS',
      url: 'https://geo.api.vlaanderen.be/OMWRGBMRVL/wms',
      crs: 'EPSG:3857',
      bbox: [2.519999, 50.639999, 5.940002, 51.510003],
      format: 'image/jpeg',
      area: 'BE',
      abstract: 'WMS die de compilatie weergeeft van de meest recente middenschalige orthofotomozaïeken uit de wintervluchten die voor ieder deel van Vlaanderen beschikbaar zijn die wordt bijgewerkt telkens er een nieuw deel beschikbaar is.',
      attribution: 'Agentschap Informatie Vlaanderen',
      pixelManipulations: ['whiteTiles2transparent'],
      getExternalUrl: (extent) => 'http://www.geopunt.be/kaart?app=Geopunt-kaart_app&kaart=Opnamedatum meest recente luchtfoto in achtergrondkaart&extent=' + extent.left + ',' + extent.right + ',' + extent.bottom + ',' + extent.top,
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['Ortho', 'Vliegdagcontour'],
      layers: {
        'Ortho': {
          queryable: false,
          title: 'Orthofotomozaïek, middenschalig, winteropnamen, kleur, meest recent, Vlaanderen',
          abstract: 'Deze rasterlaag is een compilatie van de meest recente orthofotomozaëken (winteropnamen) die voor ieder deel  van Vlaanderen beschikbaar zijn en wordt  bijgewerkt telkens er een nieuw deel ingewonnen is. De compilatie heeft een grondresolutie van 25 cm.'
        },
        'Vliegdagcontour': {
          queryable: true,
          title: 'Vliegdagcontour Orthofotomozaïek',
          abstract: 'Deze vectorlaag geeft voor ieder deel van de rastercompilatie de opnamedatum weer.'
        }
      }
    }, {
      id: 3203,
      title: 'PICC, Service de visualisation',
      type: 'WMS',
      url: 'https://geoservices.wallonie.be/arcgis/services/TOPOGRAPHIE/PICC_VDIFF/MapServer/WMSServer',
      crs: 'EPSG:3857',
      bbox: [2.654315, 6.636506, 57.020365, 51.110628],
      zoomRange: [16, 22],
      format: 'image/png',
      area: 'BE',
      abstract: 'Service de visualisation du Projet Informatique de Cartographie Continue (PICC)',
      attribution: 'Service public de Wallonie',
      pixelManipulations: ['traceGrayscalePixels'],
      getExternalUrl: () => 'http://geoportail.wallonie.be/walonmap',
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['1', '3', '4', '5', '7', '9', '10', '11', '12', '13', '14', '16', '17', '18', '19', '21', '22', '23', '24', '26', '27', '28', '29', '30', '31', '32'],
      layers: {
        '1': {
          queryable: true,
          title: 'Relief: ligne'
        },
        '3': {
          queryable: true,
          title: 'Hydrographie: emprise'
        },
        '4': {
          queryable: true,
          title: 'Hydrographie: bord'
        },
        '5': {
          queryable: true,
          title: 'Hydrographie: axe'
        },
        '7': {
          queryable: true,
          title: 'Reseau ferroviaire: ligne'
        },
        '9': {
          queryable: true,
          title: 'Voirie: surface'
        },
        '10': {
          queryable: true,
          title: 'Voirie: axe (>= 50k)'
        },
        '11': {
          queryable: true,
          title: 'Voirie: axe (5k-50k)'
        },
        '12': {
          queryable: true,
          title: 'Voirie: axe'
        },
        '13': {
          queryable: true,
          title: 'Voirie: ligne'
        },
        '14': {
          queryable: true,
          title: 'Voirie: noeud'
        },
        '16': {
          queryable: true,
          title: 'Occupation du sol: surface'
        },
        '17': {
          queryable: true,
          title: 'Occupation du sol: bord'
        },
        '18': {
          queryable: true,
          title: 'Occupation du sol: ligne'
        },
        '19': {
          queryable: true,
          title: 'Occupation du sol: point'
        },
        '21': {
          queryable: true,
          title: 'Construction: emprise d\'ouvrage d\'art'
        },
        '22': {
          queryable: true,
          title: 'Construction: emprise du batiment'
        },
        '23': {
          queryable: true,
          title: 'Construction: ouvrage d\'art: bord'
        },
        '24': {
          queryable: true,
          title: 'Construction: bord du batiment'
        },
        '26': {
          queryable: true,
          title: 'Equipement: surface'
        },
        '27': {
          queryable: true,
          title: 'Equipement: axe'
        },
        '28': {
          queryable: true,
          title: 'Equipement: ligne'
        },
        '29': {
          queryable: true,
          title: 'Equipement: point'
        },
        '30': {
          queryable: true,
          title: 'Symbologie'
        },
        '31': {
          queryable: true,
          title: 'Adresses'
        },
        '32': {
          queryable: true,
          title: 'Toponymie'
        }
      }
    }, {
      id: 3204,
      title: 'Brussels CIRB (NL)',
      type: 'WMS',
      url: 'https://geoservices-urbis.irisnet.be/geoserver/ows',
      crs: 'EPSG:31370',
      bbox: [4.236257, 50.760569, 4.487579, 50.915368],
      format: 'image/png',
      area: 'BE',
      abstract: 'Brusselse kaartgegevens',
      attribution: 'Irisnet GIS',
      pixelManipulations: ['whiteTiles2transparent'],
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['urbisNL'],
      layers: {
        'urbisNL': {
          queryable: false,
          title: 'Urbis Base Map NL',
          abstract: 'This layer represents the base map in dutch.'
        },
        'urbisNLGray': {
          queryable: false,
          title: 'Urbis Base Map Gray NL',
          abstract: 'This layer represents the gray base map in dutch.'
        },
        'urbis:LabeledStreetAxe': {
          queryable: false,
          title: 'Labeled Street Axe',
          abstract: 'Labeled StreetAxe for OSIRIS, bug fix for the juxtaposition of street name on building'
        },
        'urbis:URB_A_ADPT': {
          queryable: false,
          title: 'Address points',
          abstract: 'This layer is the localization of address points of the Brussels Region'
        },
        'urbis:URB_A_BU': {
          queryable: true,
          title: 'Buildings',
          abstract: 'This layer represents the buildings of the Brussels Region'
        },
        'urbis:URB_A_MD': {
          queryable: true,
          title: 'Monitoring districts',
          abstract: 'This layer reprensent the monitoring districts of the Brussels Region'
        },
        'urbis:URB_A_MU': {
          queryable: true,
          title: 'Municipalities',
          abstract: 'This layer represents the municipalities of the Brussels Region'
        },
        'urbis:URB_A_MY_SA': {
          queryable: false,
          title: 'Street axes',
          abstract: 'This layer represents the axes of the street of the Brussels Region'
        },
        'urbis:URB_A_MY_SS': {
          queryable: false,
          title: 'Street sections',
          abstract: 'This layer represents the street sections of the Brussels Region'
        },
        'urbis:URB_A_MZ': {
          queryable: true,
          title: 'Municipal zips',
          abstract: 'This layer is the zip of the municipality of the Brussels Region'
        },
        'urbis:URB_A_POpenLayers': {
          queryable: true,
          title: 'Police districts',
          abstract: 'This layer is the police districts of the Brussels Region'
        },
        'urbis:URB_A_RE': {
          queryable: false,
          title: 'Region',
          abstract: 'This layer is the Brussels Region'
        },
        'urbis:URB_A_SD': {
          queryable: true,
          title: 'Statistical districts',
          abstract: 'This layer represents the limit of the statistical districts of the Brussels Region'
        },
        'urbis:URB_A_SN': {
          queryable: false,
          title: 'Street nodes',
          abstract: 'This layer represents the street nodes. Each node is an intersection or an extremity of a street axe'
        },
        'urbis:URB_M_RTLINE': {
          queryable: false,
          title: 'Rail tracks',
          abstract: 'This layer represents the rails tracks.'
        },
        'urbis:URB_M_SHAPE': {
          queryable: true,
          title: 'UrbisMap shapes',
          abstract: 'This layer represents the shapes of UrbisMap.'
        },
        'urbis:URB_M_TONAME_LIN': {
          queryable: true,
          title: 'Toponymy',
          abstract: 'This layer represents the toponymy of public places.'
        },
        'urbis:URB_M_ZIPOINT': {
          queryable: true,
          title: 'Points of interest',
          abstract: 'This layer represents the point of zone of interest.'
        },
        'urbis:URB_T_LINE': {
          queryable: false,
          title: 'Urbis Topo Lines',
          abstract: 'This layer represents the topo lines.'
        },
        'urbis:URB_T_POINT': {
          queryable: true,
          title: 'Urbis Topo Points',
          abstract: 'This layer represents the topo points.'
        },
        'urbis:URB_A_SI_POINT_VW': {
          queryable: false,
          title: 'Street sides'
        },
        'urbis:MuNeighbour': {
          queryable: true,
          title: 'Neighbour Municipalities'
        },
        'urbis:Highways': {
          queryable: false,
          title: 'Highways'
        }
      }
    }, {
      id: 3205,
      title: 'GIPOD Nu + 1 maand',
      type: 'WMS',
      url: 'https://geo.api.vlaanderen.be/gipodpubliek/wms',
      crs: 'EPSG:3857',
      bbox: [2.519999, 50.639999, 5.939993, 51.509997],
      format: 'image/png',
      area: 'BE',
      abstract: 'Overzicht van alle concreet geplande en in uitvoering zijnde werken, manifestaties en andere innames op het openbaar domein met hun bijhorende omleidingen en verwachte hinder, voor de komende maand.',
      attribution: 'Agentschap Informatie Vlaanderen',
      getExternalUrl: (extent) => 'http://www.geopunt.be/kaart?app=Hinder_in_kaart_app&extent=' + extent.left + ',' + extent.right + ',' + extent.bottom + ',' + extent.top,
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['ManOml', 'ManCon', 'ManIcoon', 'WoOml', 'WoCon', 'WoIcoon'],
      layers: {
        'ManOml': {
          queryable: false,
          title: 'Omleidingen van de manifestaties',
          abstract: 'Deze laag geeft een overzicht van alle omleidingen, horend bij manifestaties en andere innames op het openbaar domein, voor de komende maand.'
        },
        'ManCon': {
          queryable: true,
          title: 'Manifestaties contour',
          abstract: 'Deze laag geeft een overzicht met contouren van alle manifestaties en andere innames op het openbaar domein en de verwachte hinder voor de komende maand.'
        },
        'ManIcoon': {
          queryable: false,
          title: 'Manifestaties icoon',
          abstract: 'Deze laag geeft een overzicht met iconen van alle manifestaties en andere innames op het openbaar domein en de verwachte hinder voor de komende maand.'
        },
        'WoOml': {
          queryable: false,
          title: 'Omleidingen van de werkopdrachten',
          abstract: 'Deze laag geeft een overzicht van alle omleidingen, horend bij werkopdrachten op het openbaar domein, voor de komende maand.'
        },
        'WoCon': {
          queryable: true,
          title: 'Werkopdrachten contour',
          abstract: 'Deze laag geeft een overzicht met contouren van alle werkopdrachten op het openbaar domein en de verwachte hinder voor de komende maand.'
        },
        'WoIcoon': {
          queryable: false,
          title: 'Werkopdrachten icoon',
          abstract: 'Deze laag geeft een overzicht met iconen van alle werkopdrachten op het openbaar domein en de verwachte hinder voor de komende maand.'
        }
      }
    }, {
      id: 3206,
      title: 'Ortho Vlaanderen Tijdsreeksen',
      type: 'WMS',
      url: 'https://geo.api.vlaanderen.be/OMW/wms',
      crs: 'EPSG:3857',
      bbox: [2.519999, 50.639999, 5.940002, 51.510003],
      format: 'image/jpeg',
      area: 'BE',
      abstract: 'Tijdsreeks van middenschalige orthofotomozaïeken met een resolutie van 25cm, gebiedsdekkend voor Vlaanderen',
      attribution: 'Agentschap Informatie Vlaanderen',
      pixelManipulations: ['whiteTiles2transparent'],
      getExternalUrl: (extent) => 'http://www.geopunt.be/kaart?app=Geopunt-kaart_app&extent=' + extent.left + ',' + extent.right + ',' + extent.bottom + ',' + extent.top,
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['OMWRGB22VL', 'OMWRGB22VL_VDC'],
      layers: {
        'OMWRGB22VL': {
          queryable: false,
          title: 'Winteropnamen, 2022',
          abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2022 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.'
        },
        'OMWRGB22VL_VDC': {
          queryable: true,
          title: 'Winteropnamen, 2022, vliegdagcontour',
          abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.'
        },
        'OMWRGB21VL': {
          queryable: false,
          title: 'Winteropnamen, 2021',
          abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2021 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.'
        },
        'OMWRGB21VL_VDC': {
          queryable: true,
          title: 'Winteropnamen, 2021, vliegdagcontour',
          abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.'
        },
        'OMWRGB20VL': {
          queryable: false,
          title: 'Winteropnamen, 2020',
          abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2020 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.'
        },
        'OMWRGB20VL_VDC': {
          queryable: true,
          title: 'Winteropnamen, 2020, vliegdagcontour',
          abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.'
        },
        'OMWRGB19VL': {
          queryable: false,
          title: 'Winteropnamen, 2019',
          abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2019 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.'
        },
        'OMWRGB19VL_VDC': {
          queryable: true,
          title: 'Winteropnamen, 2019, vliegdagcontour',
          abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.'
        },
        'OMWRGB18VL': {
          queryable: false,
          title: 'Winteropnamen, 2018',
          abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2018 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.'
        },
        'OMWRGB18VL_VDC': {
          queryable: true,
          title: 'Winteropnamen, 2018, vliegdagcontour',
          abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.'
        },
        'OMWRGB17VL': {
          queryable: false,
          title: 'Winteropnamen, 2017',
          abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2017 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.'
        },
        'OMWRGB17VL_VDC': {
          queryable: true,
          title: 'Winteropnamen, 2017, vliegdagcontour',
          abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.'
        },
        'OMWRGB16VL': {
          queryable: false,
          title: 'Winteropnamen, 2016',
          abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2016 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.'
        },
        'OMWRGB16VL_VDC': {
          queryable: true,
          title: 'Winteropnamen, 2016, vliegdagcontour',
          abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.'
        },
        'OMWRGB15VL': {
          queryable: false,
          title: 'Winteropnamen, 2015',
          abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2015 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.'
        },
        'OMWRGB15VL_VDC': {
          queryable: true,
          title: 'Winteropnamen, 2015, vliegdagcontour',
          abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.'
        },
        'OMWRGB14VL': {
          queryable: false,
          title: 'Winteropnamen, 2014',
          abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2014 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.'
        },
        'OMWRGB14VL_VDC': {
          queryable: true,
          title: 'Winteropnamen, 2014, vliegdagcontour',
          abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.'
        },
        'OMWRGB13VL': {
          queryable: false,
          title: 'Winteropnamen, 2013',
          abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2013 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.'
        },
        'OMWRGB13VL_VDC': {
          queryable: true,
          title: 'Winteropnamen, 2013, vliegdagcontour',
          abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.'
        },
        'OMWRGB12VL': {
          queryable: false,
          title: 'Winteropnamen, 2012',
          abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in 2012 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.'
        },
        'OMWRGB12VL_VDC': {
          queryable: true,
          title: 'Winteropnamen, 2012, vliegdagcontour',
          abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.'
        },
        'OMWRGB08_11VL': {
          queryable: false,
          title: 'Winteropnamen, 2008-2011',
          abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in de periode 2008-2011 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.'
        },
        'OMWRGB08_11VL_VDC': {
          queryable: true,
          title: 'Winteropnamen, 2008-2011, vliegdagcontour',
          abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.'
        },
        'OMWRGB05_07VL': {
          queryable: false,
          title: 'Winteropnamen, 2005-2007',
          abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in de periode 2005-2007 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.'
        },
        'OMWRGB05_07VL_VDC': {
          queryable: true,
          title: 'Winteropnamen, 2005-2007, vliegdagcontour',
          abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.'
        },
        'OMWRGB00_03VL': {
          queryable: false,
          title: 'Winteropnamen, 2000-2003',
          abstract: 'Deze rasterlaag is een compilatie van de orthofotomozaïeken (winteropnamen) die voor Vlaanderen in de periode 2000-2003 werden aangemaakt. De compilatie heeft een grondresolutie van 25cm.'
        },
        'OMWRGB00_03VL_VDC': {
          queryable: true,
          title: 'Winteropnamen, 2000-2003, vliegdagcontour',
          abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.'
        }
      }
    }, {
      id: 3207,
      title: 'Wegenregister',
      type: 'WMS',
      url: 'https://geo.api.vlaanderen.be/Wegenregister/wms',
      crs: 'EPSG:3857',
      bbox: [2.519999, 50.639999, 5.939993, 51.509997],
      format: 'image/png',
      area: 'BE',
      abstract: 'De wegen in het Wegenregister. Het Wegenregister is een middenschalig referentiebestand van de wegen in Vlaanderen. Het bevat alle wegen van Vlaanderen, met bijhorende attribuutgegevens.',
      attribution: 'Agentschap Informatie Vlaanderen',
      getExternalUrl: (extent) => 'http://www.geopunt.be/kaart?app=Geopunt-kaart_app&kaart=wegennet&extent=' + extent.left + ',' + extent.right + ',' + extent.bottom + ',' + extent.top,
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['AUTOSWEG', 'WEGGESCH', 'WEGEEN', 'ROT', 'SPECSIT', 'VERKPLEIN', 'OPAFOGKR', 'OPAFGGKR', 'PLLWEG', 'VENTWEG', 'INUITP', 'INUITD', 'VOETGANGERSZONE', 'WANDFIETS', 'TRAMWEG', 'DIENSTWEG', 'AARDEWEG', 'VEER', 'TYPENTG', 'LABELS'],
      layers: {
        'AUTOSWEG': {
          queryable: true,
          title: 'Autosnelweg',
          abstract: 'Een "autosnelweg" heeft typisch twee gescheiden parallelle rijbanen met tegengestelde toegelaten rijrichtingen. Op een autosnelweg komen geen gelijkgrondse kruisingen voor. Kruisingen met andere wegen gebeuren steeds ofwel over bruggen of in tunnels.'
        },
        'WEGGESCH': {
          queryable: true,
          title: 'Weg met gescheiden rijbanen',
          abstract: '"Een weg met gescheiden rijbanen die geen autosnelweg is" wordt gekenmerkt door de aanwezigheid van minstens twee rijbanen (onafhankelijk van het aantal rijstroken) die fysiek gescheiden zijn en tegengestelde toegelaten rijrichtingen hebben.'
        },
        'WEGEEN': {
          queryable: true,
          title: 'Weg met één rijbaan',
          abstract: 'Wegsegmenten die behoren tot een hoofdcirculatiezone die gekenmerkt wordt door de aanwezigheid van slechts één circulatievak in de dwarsrichting.'
        },
        'ROT': {
          queryable: true,
          title: 'Rotonde',
          abstract: 'Wegsegmenten die tot de rotonde behoren vormen een gesloten ringvormige structuur. Op deze wegsegmenten is enkel éénrichtingsverkeer toegelaten.'
        },
        'SPECSIT': {
          queryable: true,
          title: 'Speciale verkeerssituatie',
          abstract: 'Wegsegmenten die behoren tot een min of meer cirkelvormige constructie die geen rotonde is.'
        },
        'VERKPLEIN': {
          queryable: true,
          title: 'Verkeersplein',
          abstract: 'Wegsegmenten die worden opgenomen in gebieden waar het verkeer ongestructureerd verloopt. Het gaat typisch om marktpleinen, parkeerterreinen of terreinen met een andere functie dan een zuivere verkeersfunctie'
        },
        'OPAFOGKR': {
          queryable: true,
          title: 'Oprit of afrit behorende tot een nietgelijkgrondse kruising',
          abstract: 'Een "op- of afrit, behorende tot een niet-gelijkgrondse kruising" verzorgt de verbinding tussen twee wegen die zich niet-gelijkgronds kruisen. Alle op- en afritten van autosnelwegen en verkeerswisselaars worden eveneens tot deze klasse gerekend.'
        },
        'OPAFGGKR': {
          queryable: true,
          title: 'Oprit of afrit  behorende tot een gelijkgrondse kruising',
          abstract: 'Een "op- of afrit, behorende tot een gelijkgrondse kruising" verzorgt de verbinding tussen twee wegen die geen autosnelweg zijn. Zonder de op- of afrit bestaat er nog steeds een topologische verbinding tussen de wegsegmenten waarbij de op- of afrit hoort.'
        },
        'PLLWEG': {
          queryable: true,
          title: 'Parallelweg',
          abstract: 'Een "parallelweg" is een op- of afrit waarvan de begin- en eindpositie verbonden is met dezelfde autosnelweg. Een "parallelweg" heeft een rechtstreekse verbinding of een verbinding via op- of afritten van een ander type met de bijhorende autosnelweg.'
        },
        'VENTWEG': {
          queryable: true,
          title: 'Ventweg',
          abstract: 'Een "ventweg" loopt parallel aan een weg met een belangrijke verkeersfunctie die geen autosnelweg is. De weg biedt toegang tot minder belangrijke aanpalende wegen, bestemmingen of adressen en wordt van de hoofdweg gescheiden door kleine constructies.'
        },
        'INUITP': {
          queryable: true,
          title: 'Inrit of uitrit van een parking',
          abstract: 'Een "in- of uitrit van een parking" is een weg die speciaal ontworpen is om een parkeerterrein of parkeergarage te bereiken of te verlaten.'
        },
        'INUITD': {
          queryable: true,
          title: 'Inrit of uitrit van een dienst',
          abstract: 'Een "in- of uitrit van een dienst" is een weg die speciaal ontworpen is om een dienst (voorbeeld: luchthaven, station, ziekenhuis, brandweerkazerne, politie, openbare dienst, hotel, restaurant) te bereiken of te verlaten.'
        },
        'VOETGANGERSZONE': {
          queryable: true,
          title: 'Voetgangerszone',
          abstract: 'Gebied met een wegennet dat speciaal ontworpen is voor gebruik door voetgangers (meestal gesitueerd in stedelijke gebieden). In voetgangerszones is enkel voetgangersverkeer toegelaten (uitzondering: prioritaire voertuigen en leveringen).'
        },
        'WANDFIETS': {
          queryable: true,
          title: 'Wandel- of fietsweg',
          abstract: 'Op een "wandel- en/of fietsweg" is de verkeerstoegang beperkt tot voetgangers en/of fietsers. De fysieke kenmerken van een "wandel- en/of fietsweg" laten de toegang van andere voertuigen niet toe (smaller dan 2.5m).'
        },
        'TRAMWEG': {
          queryable: true,
          title: 'Tramweg',
          abstract: 'Een "tramweg" is een weg die speciaal ontworpen is voor het tramverkeer. De fysieke kenmerken van een "tramweg" laten de toegang van andere voertuigen niet toe.'
        },
        'DIENSTWEG': {
          queryable: true,
          title: 'Dienstweg',
          abstract: 'Een "tramweg" is een weg die speciaal ontworpen is voor het tramverkeer. De fysieke kenmerken van een "tramweg" laten de toegang van andere voertuigen niet toe.'
        },
        'AARDEWEG': {
          queryable: true,
          title: 'Aardeweg',
          abstract: 'Een "aardeweg" is een weg zonder wegverharding die op zijn minst berijdbaar is voor bepaalde vierwielige motorvoertuigen (bv. terreinwagens, landbouwvoertuigen,...)'
        },
        'VEER': {
          queryable: true,
          title: 'Veer',
          abstract: 'Een "veer" is bedoeld voor het transport van passagiers, voertuigen of vracht over het water en verbindt vaak twee of meerdere landwegen'
        },
        'TYPENTG': {
          queryable: true,
          title: 'Type weg niet gekend',
          abstract: 'Wegtype is niet gekend'
        },
        'LABELS': {
          queryable: false,
          title: 'Straatnamen',
          abstract: 'Straatnamen volgens CRAB'
        }
      }
    }, {
      id: 3208,
      title: 'Administratieve eenheden',
      type: 'WMS',
      url: 'https://geo.api.vlaanderen.be/Administratieve_Eenheden/wms',
      crs: 'EPSG:3857',
      bbox: [2.519999, 50.639999, 5.939993, 51.509997],
      format: 'image/png',
      area: 'BE',
      abstract: 'Vlaamse administratieve eenheden',
      attribution: 'AIV',
      pixelManipulations: ['traceGrayscalePixels'],
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['Refarr', 'Refprv', 'Refgew', 'RefgemGrens', 'RefgemBron', 'RefgemLabel'],
      layers: {
        'Refgem': {
          queryable: true,
          title: 'Gemeenten',
          abstract: 'Ligging en afgrenzing van de vastgestelde territoria van gemeenten. Gemeenten zijn de laagste bestuurlijke eenheden in België. Gemeenten zijn gegroepeerd in bestuurlijke arrondissementen en provincies. Door het samenwerkingsverband GDI-Vlaanderen als voorlopige referentie gehanteerde geografische dataset van het grondgebied van Vlaanderen met de begrenzing van de Vlaamse gemeenten met bijhorende identificerende informatie.'
        },
        'Refarr': {
          queryable: true,
          title: 'Arrondissementen - Grenzen',
          abstract: 'Afgrenzing van bestuurlijke arrondissementen in Vlaanderen. Bestuurlijke arrondissementen vormen een administratieve indeling van de provincies. Het gaat om een groepering van een aantal gemeenten. Door het samenwerkingsverband GDI-Vlaanderen als voorlopige referentie gehanteerde geografische dataset van het grondgebied met de begrenzing van Vlaamse bestuurlijke indelingen.'
        },
        'Refprv': {
          queryable: true,
          title: 'Provincies - Grenzen',
          abstract: 'Afgrenzing van provincies in Vlaanderen. Provincies vormen een administratieve indeling van het Vlaams Gewest. De provincies vormen het bestuurlijke niveau tussen de gemeenten en arrondissementen enerzijds en het Vlaams Gewest anderzijds. Door het samenwerkingsverband GDI-Vlaanderen als voorlopige referentie gehanteerde geografische dataset van het grondgebied van Vlaanderen met bestuurlijke indelingen.'
        },
        'Refgew': {
          queryable: true,
          title: 'Gewest - Grens',
          abstract: 'Grens van het Vlaams Gewest. Door het samenwerkingsverband GDI-Vlaanderen als voorlopig referentie gehanteerde geografische dataset van het grondgebied en de afgrenzing van het Vlaams Gewest'
        },
        'RefgemGrens': {
          queryable: true,
          title: 'Gemeenten - Grenzen',
          abstract: 'Grenzen van de vastgestelde territoria van gemeenten. Gemeenten zijn de laagste bestuurlijke eenheden in België. Gemeenten zijn gegroepeerd in bestuurlijke arrondissementen en provincies. Door het samenwerkingsverband GDI-Vlaanderen als voorlopige referentie gehanteerde geografische dataset van het grondgebied van Vlaanderen met de begrenzing van de Vlaamse gemeenten met bijhorende identificerende informatie.'
        },
        'RefgemBron': {
          queryable: true,
          title: 'Gemeenten - Grenzen - Bron Geometrie',
          abstract: 'Informatie over de herkomst van de geometrische informatie van (een deel van) een gemeentegrens.'
        },
        'RefgemLabel': {
          queryable: true,
          title: 'Gemeenten - Namen',
          abstract: 'Label met de naam van de gemeente. Gemeenten zijn de laagste bestuurlijke eenheden in België. Gemeenten zijn gegroepeerd in bestuurlijke arrondissementen en provincies. Door het samenwerkingsverband GDI-Vlaanderen als voorlopige referentie gehanteerde geografische dataset van het grondgebied van Vlaanderen met de begrenzing van de Vlaamse gemeenten met bijhorende identificerende informatie.'
        }
      }
    }, {
      id: 3209,
      title: 'Orthofotowerkbestand Vlaanderen',
      type: 'WMS',
      url: 'https://geo.api.vlaanderen.be/ofw/wms',
      crs: 'EPSG:3857',
      bbox: [2.519999, 50.639999, 5.940002, 51.510003],
      format: 'image/jpeg',
      area: 'BE',
      abstract: 'Compilatie van de meest recente orthofotowerkbestanden voor Vlaanderen',
      attribution: 'Agentschap Informatie Vlaanderen',
      pixelManipulations: ['whiteTiles2transparent'],
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['OFW', 'OFW_vdc'],
      layers: {
        'OFW': {
          queryable: false,
          title: 'Orthofotowerkbestand',
          abstract: 'Deze rasterlaag is een compilatie van de meest recente orthofotowerkbestanden die voor Vlaanderen  beschikbaar zijn. De compilatie heeft een grondresolutie van 25cm.'
        },
        'OFW_vdc': {
          queryable: true,
          title: 'Vliegdagcontour',
          abstract: 'Vectorlaag die voor ieder deel van het bijhorende product de opnamedatum weergeeft.'
        }
      }
    }, {
      id: 3210,
      title: 'Adrespunten Vlaanderen',
      type: 'WMS',
      url: 'https://geo.api.vlaanderen.be/Adressen/wms',
      crs: 'EPSG:3857',
      bbox: [2.519999, 50.639999, 5.939993, 51.509997],
      zoomRange: [18, 22],
      format: 'image/png',
      area: 'BE',
      abstract: 'Overzicht van in CRAB opgenomen adressen (huisnummers met bijhorende straat en gemeente) van Vlaanderen, met hun lokatie. Deze dataset is een bevraging van de CRAB-gegevens, bedoeld om tot een eenvoudige en vlot toegankelijke adressenlijst te komen.',
      getExternalUrl: (extent) => 'http://www.geopunt.be/kaart?app=Geopunt-kaart_app&kaart=Adrespunten - CRAB&extent=' + extent.left + ',' + extent.right + ',' + extent.bottom + ',' + extent.top,
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['Adrespos'],
      layers: {
        'Adrespos': {
          queryable: true,
          title: 'CRAB - Adrespunt'
        }
      }
    }, {
      id: 3211,
      title: 'Ortho Vl. 2013-2015 Grootschalig',
      type: 'WMS',
      url: 'https://geo.api.vlaanderen.be/OGW/wms',
      crs: 'EPSG:3857',
      bbox: [2.519999, 50.639999, 5.940002, 51.510003],
      format: 'image/jpeg',
      area: 'BE',
      abstract: 'Tijdsreeks van grootschalige orthofotomozaïeken met een resolutie van 10cm, gebiedsdekkend voor Vlaanderen',
      attribution: 'Agentschap Informatie Vlaanderen',
      pixelManipulations: ['whiteTiles2transparent'],
      getExternalUrl: (extent) => 'http://www.geopunt.be/kaart?app=Geopunt-kaart_app&kaart=Luchtfoto Vlaanderen, winter 2013-2015 - kleur&extent=' + extent.left + ',' + extent.right + ',' + extent.bottom + ',' + extent.top,
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['OGWRGB13_15VL', 'OGWRGB13_15VL_vdc'],
      layers: {
        'OGWRGB13_15VL': {
          queryable: false,
          title: 'Orthofotomozaïek, grootschalig, winteropnamen, kleur, 2013-2015, Vlaanderen',
          abstract: 'Deze rasterlaag is een compilatie van de grootschalige orthofotomozaïeken (winteropnamen) die voor Vlaanderen in de periode 2013-2015 werden aangemaakt. De compilatie heeft een grondresolutie van 10cm.'
        },
        'OGWRGB13_15VL_vdc': {
          queryable: true,
          title: 'Vliegdagcontour, grootschalig, winteropnamen, kleur, 2013-2015, Vlaanderen'
        }
      }
    }, {
      id: 3212,
      title: 'Snelheidsregimes en referentiepunten AWV',
      type: 'WMS',
      url: 'https://opendata.apps.mow.vlaanderen.be/opendata-geoserver/awv/ows',
      crs: 'EPSG:3857',
      bbox: [2.539465, 50.681421, 5.892607, 51.500095],
      format: 'image/png',
      area: 'BE',
      abstract: 'Snelheidsregimes langs de genummerde wegen in beheer van AWV',
      getExternalUrl: (extent) => 'http://www.geopunt.be/kaart?app=Geopunt-kaart_app&kaart=Snelheidsregimes&extent=' + extent.left + ',' + extent.right + ',' + extent.bottom + ',' + extent.top,
      attribution: 'Agentschap Informatie Vlaanderen',
      pixelManipulations: ['removePartialBlackTransparency', 'traceGrayscalePixels'],
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['awv:Snelheidsregimes', 'awv:Referentiepunten'],
      layers: {
        'awv:Snelheidsregimes': {
          queryable: true,
          title: 'Snelheidsregimes langs de genummerde wegen in beheer van AWV',
          abstract: 'Snelheidsregimes zijn delen van een genummerde weg met een uniforme maximale snelheid. De snelheidsregimes zijn lineaire weergaves van een (deel van) de wegen met aanduiding van een uniforme maximum snelheid.'
        },
        'awv:Referentiepunten': {
          queryable: true,
          title: 'Km en hm referentiepunten',
          abstract: 'Posities van de km en hm referentiepunten langs de Vlaamse autosnelwegen en gewestwegen met de bijbehorende kilometer-/ hectometeraanduidingen'
        }
      }
    }, {
      id: 3215,
      title: 'GIPOD Actueel',
      type: 'WMS',
      url: 'https://geo.api.vlaanderen.be/gipodpubliek/wms',
      crs: 'EPSG:3857',
      bbox: [2.519999, 50.639999, 5.939993, 51.509997],
      format: 'image/png',
      area: 'BE',
      abstract: 'Overzicht van momenteel actief zijnde werken, manifestaties en andere innames op het openbaar domein met hun bijhorende omleidingen en verwachte hinder.',
      attribution: 'Agentschap Informatie Vlaanderen',
      getExternalUrl: (extent) => 'http://www.geopunt.be/kaart?app=Hinder_in_kaart_app&extent=' + extent.left + ',' + extent.right + ',' + extent.bottom + ',' + extent.top,
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['ManOmlVndg', 'ManConVndg', 'ManIcoonVndg', 'WoOmlVndg', 'WoConVndg', 'WoIcoonVndg'],
      layers: {
        'ManOmlVndg': {
          queryable: false,
          title: 'Omleidingen van de manifestaties',
          abstract: 'Deze laag geeft een overzicht van alle omleidingen, horend bij manifestaties en andere innames op het openbaar domein, voor de komende maand.'
        },
        'ManConVndg': {
          queryable: true,
          title: 'Manifestaties contour',
          abstract: 'Deze laag geeft een overzicht met contouren van alle manifestaties en andere innames op het openbaar domein en de verwachte hinder voor de komende maand.'
        },
        'ManIcoonVndg': {
          queryable: false,
          title: 'Manifestaties icoon',
          abstract: 'Deze laag geeft een overzicht met iconen van alle manifestaties en andere innames op het openbaar domein en de verwachte hinder voor de komende maand.'
        },
        'WoOmlVndg': {
          queryable: false,
          title: 'Omleidingen van de werkopdrachten',
          abstract: 'Deze laag geeft een overzicht van alle omleidingen, horend bij werkopdrachten op het openbaar domein, voor de komende maand.'
        },
        'WoConVndg': {
          queryable: true,
          title: 'Werkopdrachten contour',
          abstract: 'Deze laag geeft een overzicht met contouren van alle werkopdrachten op het openbaar domein en de verwachte hinder voor de komende maand.'
        },
        'WoIcoonVndg': {
          queryable: false,
          title: 'Werkopdrachten icoon',
          abstract: 'Deze laag geeft een overzicht met iconen van alle werkopdrachten op het openbaar domein en de verwachte hinder voor de komende maand.'
        }
      }
    }, {
      id: 3216,
      title: 'Orthophotos 2016',
      type: 'WMS',
      url: 'https://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_2016/MapServer/WMSServer',
      crs: 'EPSG:3857',
      bbox: [2.832011, 49.434306, 6.465498, 50.880207],
      format: 'image/jpeg',
      area: 'BE',
      abstract: 'Service de visualisation INSPIRE permettant la visualisation de l\'image orthorectifiée et mosaïquée couvrant l\'entièreté du territoire wallon à une résolution de 25 cm pour l\'année 2016.\nLes prises de vue ont été effectuées verticalement entre le 10 juin 2016 et le 1er novembre 2016. Ce service affiche 3 des 4 bandes disponibles (rouge, vert et bleu) en couleurs naturelles.\nCe service n\'est pas tuilé.',
      attribution: 'Service public de Wallonie',
      pixelManipulations: ['whiteTiles2transparent'],
      queryable: false,
      default_layers: ['0'],
      layers: {
        '0': {
          queryable: false,
          title: 'ORTHO_2016',
          abstract: 'Imagerie orthorectifiée et mosaïquée couvrant l\'entièreté du territoire wallon à une résolution de 25 cm.\nLes prises de vue ont été effectuées verticalement entre le 10 juin 2016 et le 1er novembre 2016. Quatre bandes spectrales sont disponibles (rouge, vert, bleu et le proche infra-rouge).\nLe recouvrement longitudinal minimal des photos successives d’une même bande est de 60% avec une tolérance de 5%. D’autre part, le recouvrement latéral minimal entre bandes parallèles successives est de 30%, avec une tolérance de 5%. Les mailles sont de 2 km sur 2km.\nLes métadonnées des orthophotos (date et heure de prise de vue, angle solaire, etc.) sont disponibles sous forme de données attributaires dans la donnée "Orthophotos 2016 - Tuilage".'
        }
      }
    }, {
      id: 3217,
      title: 'Réseau routier régional',
      type: 'WMS',
      url: 'https://geoservices.wallonie.be/arcgis/services/MOBILITE/RES_ROUTIER_REGIONAL/MapServer/WmsServer',
      crs: 'EPSG:3857',
      bbox: [2.654315, 49.426121, 6.651405, 51.110628],
      format: 'image/png',
      area: 'BE',
      abstract: 'Consultation, recherche et identification des données relatives au Réseau routier régional wallon et aux bornes kilométriques.',
      attribution: 'Service publique de Wallonie',
      pixelManipulations: ['traceGrayscalePixels'],
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['1', '2', '3', '5', '6'],
      layers: {
        '1': {
          queryable: true,
          title: 'Nationales',
          abstract: 'Pour plus d\'informations sur cette donnée, consultez http://geoportail.wallonie.be/catalogue/bdcb789c-4b02-4c0c-863a-98dac4ed0240.html'
        },
        '2': {
          queryable: true,
          title: 'Rings',
          abstract: 'Pour plus d\'informations sur cette donnée, consultez http://geoportail.wallonie.be/catalogue/bdcb789c-4b02-4c0c-863a-98dac4ed0240.html'
        },
        '3': {
          queryable: true,
          title: 'Autoroutes',
          abstract: 'Pour plus d\'informations sur cette donnée, consultez http://geoportail.wallonie.be/catalogue/bdcb789c-4b02-4c0c-863a-98dac4ed0240.html'
        },
        '5': {
          queryable: true,
          title: 'Bornes kilométriques',
          abstract: 'Pour plus d\'informations sur cette donnée, consultez http://geoportail.wallonie.be/catalogue/b1882436-3016-421e-9dfd-0326cca998f2.html'
        },
        '6': {
          queryable: true,
          title: 'Bornes hectométriques',
          abstract: 'Pour plus d\'informations sur cette donnée, consultez http://geoportail.wallonie.be/catalogue/b1882436-3016-421e-9dfd-0326cca998f2.html'
        }
      }
    }, {
      id: 3220,
      title: 'Verkeersborden Vlaanderen',
      type: 'WMS',
      url: 'https://opendata.apps.mow.vlaanderen.be/opendata-geoserver/awv/ows',
      crs: 'EPSG:3857',
      bbox: [2.50727, 50.661802, 5.957286, 51.519573],
      format: 'image/png',
      area: 'BE',
      abstract: 'Puntvoorstelling van de verkeersborden uit de toepassing Verkeersborden.Vlaanderen',
      attribution: 'MOW Vlaanderen',
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['awv:Verkeersborden.Vlaanderen_Borden'],
      layers: {
        'awv:Verkeersborden.Vlaanderen_Borden': {
          title: 'Verkeersborden.Vlaanderen',
          queryable: true
        }
      }
    }, {
      id: 3221,
      title: 'Afgeleide snelheidsregimes',
      type: 'WMS',
      url: 'https://opendata.apps.mow.vlaanderen.be/opendata-geoserver/awv/ows',
      crs: 'EPSG:3857',
      bbox: [2.52988, 50.629179, 5.971281, 51.505513],
      format: 'image/png',
      area: 'BE',
      abstract: 'Kaart van de afgeleide snelheidsregimes op wegen gelegen in het Vlaams gewest. Het basis van het wegenbestand waarop de snelheidsregimes zijn geprojecteerd is steeds de laatste versie van het Wegenregister zoals gepubliceerd op de website van Informatie Vlaanderen. De opstellingen in de Verkeersborden.Vlaanderen databank dienen als basisbestand voor de afgeleide data. De kwaliteit van de afgeleide data hangt af van de correctheid van zowel het Wegenregister als de data is Verkeersborden.Vlaanderen.',
      attribution: 'MOW Vlaanderen',
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['awv:Afgeleide_snelheidsregimes'],
      layers: {
        'awv:Afgeleide_snelheidsregimes': {
          title: 'Afgeleide snelheidsregimes',
          queryable: true
        }
      }
    }, {
      id: 3222,
      title: 'Brussels CIRB (FR)',
      type: 'WMS',
      url: 'https://geoservices-urbis.irisnet.be/geoserver/ows',
      crs: 'EPSG:31370',
      bbox: [4.236257, 50.760569, 4.487579, 50.915368],
      format: 'image/png',
      area: 'BE',
      abstract: 'Données de carte Bruxelloises',
      attribution: 'Irisnet GIS',
      pixelManipulations: ['whiteTiles2transparent'],
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['urbisFR'],
      layers: {
        'urbisFR': {
          queryable: false,
          title: 'Urbis Base Map FR',
          abstract: 'This layer represents the base map in french.'
        },
        'urbisFRGray': {
          queryable: false,
          title: 'Urbis Base Map Gray FR',
          abstract: 'This layer represents the gray base map in french.'
        },
        'urbis:LabeledStreetAxe': {
          queryable: false,
          title: 'Labeled Street Axe',
          abstract: 'Labeled StreetAxe for OSIRIS, bug fix for the juxtaposition of street name on building'
        },
        'urbis:URB_A_ADPT': {
          queryable: false,
          title: 'Address points',
          abstract: 'This layer is the localization of address points of the Brussels Region'
        },
        'urbis:URB_A_BU': {
          queryable: true,
          title: 'Buildings',
          abstract: 'This layer represents the buildings of the Brussels Region'
        },
        'urbis:URB_A_MD': {
          queryable: true,
          title: 'Monitoring districts',
          abstract: 'This layer reprensent the monitoring districts of the Brussels Region'
        },
        'urbis:URB_A_MU': {
          queryable: true,
          title: 'Municipalities',
          abstract: 'This layer represents the municipalities of the Brussels Region'
        },
        'urbis:URB_A_MY_SA': {
          queryable: false,
          title: 'Street axes',
          abstract: 'This layer represents the axes of the street of the Brussels Region'
        },
        'urbis:URB_A_MY_SS': {
          queryable: false,
          title: 'Street sections',
          abstract: 'This layer represents the street sections of the Brussels Region'
        },
        'urbis:URB_A_MZ': {
          queryable: true,
          title: 'Municipal zips',
          abstract: 'This layer is the zip of the municipality of the Brussels Region'
        },
        'urbis:URB_A_POpenLayers': {
          queryable: true,
          title: 'Police districts',
          abstract: 'This layer is the police districts of the Brussels Region'
        },
        'urbis:URB_A_RE': {
          queryable: false,
          title: 'Region',
          abstract: 'This layer is the Brussels Region'
        },
        'urbis:URB_A_SD': {
          queryable: true,
          title: 'Statistical districts',
          abstract: 'This layer represents the limit of the statistical districts of the Brussels Region'
        },
        'urbis:URB_A_SN': {
          queryable: false,
          title: 'Street nodes',
          abstract: 'This layer represents the street nodes. Each node is an intersection or an extremity of a street axe'
        },
        'urbis:URB_M_RTLINE': {
          queryable: false,
          title: 'Rail tracks',
          abstract: 'This layer represents the rails tracks.'
        },
        'urbis:URB_M_SHAPE': {
          queryable: true,
          title: 'UrbisMap shapes',
          abstract: 'This layer represents the shapes of UrbisMap.'
        },
        'urbis:URB_M_TONAME_LIN': {
          queryable: true,
          title: 'Toponymy',
          abstract: 'This layer represents the toponymy of public places.'
        },
        'urbis:URB_M_ZIPOINT': {
          queryable: true,
          title: 'Points of interest',
          abstract: 'This layer represents the point of zone of interest.'
        },
        'urbis:URB_T_LINE': {
          queryable: false,
          title: 'Urbis Topo Lines',
          abstract: 'This layer represents the topo lines.'
        },
        'urbis:URB_T_POINT': {
          queryable: true,
          title: 'Urbis Topo Points',
          abstract: 'This layer represents the topo points.'
        },
        'urbis:URB_A_SI_POINT_VW': {
          queryable: false,
          title: 'Street sides'
        },
        'urbis:MuNeighbour': {
          queryable: true,
          title: 'Neighbour Municipalities'
        },
        'urbis:Highways': {
          queryable: false,
          title: 'Highways'
        }
      }
    }, {
      id: 3223,
      title: 'Brussels Ortho',
      type: 'WMS',
      url: 'https://geoservices-urbis.irisnet.be/geoserver/ows',
      crs: 'EPSG:31370',
      bbox: [4.236257, 50.760569, 4.487579, 50.915368],
      format: 'image/png',
      area: 'BE',
      abstract: 'Orthographic map of Brussels',
      attribution: 'Irisnet GIS',
      pixelManipulations: ['whiteTiles2transparent'],
      queryable: false,
      default_layers: ['Urbis:Ortho'],
      layers: {
        'Urbis:Ortho': {
          queryable: false,
          title: 'Urbis Ortho',
          abstract: 'This layer always shows the most recent available orthographic images'
        },
        'Urbis:Ortho2019': {
          queryable: false,
          title: 'Ortho 2019',
          abstract: 'Orthographic imagery for the year 2019 within the Brussels region'
        },
        'Urbis:Ortho2018': {
          queryable: false,
          title: 'Ortho 2018',
          abstract: 'Orthographic imagery for the year 2018 within the Brussels region'
        },
        'Urbis:Ortho2017': {
          queryable: false,
          title: 'Ortho 2017',
          abstract: 'Orthographic imagery for the year 2017 within the Brussels region'
        },
        'Urbis:Ortho2016': {
          queryable: false,
          title: 'Ortho 2016',
          abstract: 'Orthographic imagery for the year 2016 within the Brussels region'
        },
        'Urbis:Ortho2015': {
          queryable: false,
          title: 'Ortho 2015',
          abstract: 'Orthographic imagery for the year 2015 within the Brussels region'
        },
        'Urbis:Ortho2014': {
          queryable: false,
          title: 'Ortho 2014',
          abstract: 'Orthographic imagery for the year 2014 within the Brussels region'
        },
        'Urbis:Ortho2012': {
          queryable: false,
          title: 'Ortho 2012',
          abstract: 'Orthographic imagery for the year 2012 within the Brussels region'
        },
        'Urbis:Ortho2009': {
          queryable: false,
          title: 'Ortho 2009',
          abstract: 'Orthographic imagery for the year 2009 within the Brussels region'
        },
        'Urbis:Ortho2004': {
          queryable: false,
          title: 'Ortho 2004',
          abstract: 'Orthographic imagery for the year 2004 within the Brussels region'
        }
      }
    }, {
      id: 3224,
      title: 'Brussels Road Hierarchy',
      type: 'WMS',
      url: 'https://data.mobility.brussels/geoserver/bm_network/wms',
      crs: 'EPSG:3857',
      bbox: [4.236257, 50.760569, 4.487579, 50.915368],
      format: 'image/png',
      area: 'BE',
      abstract: 'Road hierarchy maintained by Brussels Mobility',
      attribution: 'Brussels Mobility',
      pixelManipulations: ['brusselsSwapColours'],
      queryable: false,
      default_layers: ['specialisation_vp'],
      layers: {
        'specialisation_vp': {
          queryable: false,
          title: 'Road hierarchy'
        }
      }
    }, {
      id: 3225,
      title: 'Brussels Zone 30',
      type: 'WMS',
      url: 'https://data.mobility.brussels/geoserver/bm_network/wms',
      crs: 'EPSG:3857',
      bbox: [4.236257, 50.760569, 4.487579, 50.915368],
      format: 'image/png',
      area: 'BE',
      abstract: 'Road speed limit data maintained by Brussels Mobility',
      attribution: 'Brussels Mobility',
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['Zones_30'],
      layers: {
        'Zones_30': {
          queryable: true,
          title: 'Road speeds'
        }
      }
    }, {
      id: 3226,
      title: 'Brussels Low Emission Zone',
      type: 'WMS',
      url: 'https://data.mobility.brussels/geoserver/bm_network/wms',
      crs: 'EPSG:3857',
      bbox: [4.236257, 50.760569, 4.487579, 50.915368],
      format: 'image/png',
      area: 'BE',
      abstract: 'Defines the contours of the low emission zone active in Brussels',
      attribution: 'Brussels Mobility',
      queryable: false,
      default_layers: ['lez_zone'],
      layers: {
        'lez_zone': {
          queryable: false,
          title: 'Low Emission Zone'
        }
      }
    }, {
      id: 3227,
      title: 'Verkeersborden Vlaanderen Visualisatie',
      type: 'WMS',
      url: 'https://opendata.apps.mow.vlaanderen.be/opendata-geowebcache/service/wms',
      crs: 'EPSG:3857',
      bbox: [2.50727, 50.661802, 5.957286, 51.519573],
      format: 'image/png',
      area: 'BE',
      abstract: 'Grafische voorstelling van de verkeersborden uit de toepassing Verkeersborden.Vlaanderen',
      attribution: 'MOW Vlaanderen',
      pixelManipulations: ['addTranslucentOverlay'],
      queryable: false,
      default_layers: ['verkeersborden'],
      layers: {
        'verkeersborden': {
          title: 'Grafische voorstelling verkeersborden',
          queryable: false
        }
      }
    }, {
      id: 3228,
      title: 'Orthophotos Récentes',
      type: 'WMS',
      url: 'https://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_LAST/MapServer/WMSServer',
      crs: 'EPSG:3857',
      bbox: [2.832011, 49.434306, 6.465498, 50.880207],
      format: 'image/jpeg',
      area: 'BE',
      abstract: 'Service de visualisation WMS référençant la dernière campagne disponible des images orthorectifiées couvrant le territoire de la Région Wallonne.',
      attribution: 'Service public de Wallonie',
      pixelManipulations: ['whiteTiles2transparent'],
      queryable: false,
      default_layers: ['0'],
      layers: {
        '0': {
          queryable: false,
          title: 'ORTHO',
          abstract: 'Dernière campagne disponible d\'imagerie orthorectifiée et mosaïquée couvrant l\'entièreté du territoire wallon à une résolution de 25 cm. Leur but initial était de servir de base au contrôles liés à la mise en oeuvre de la Politique Agricole Commune (PAC). Quatre bandes spectrales sont disponibles (Rouge, Vert, Bleu et Infra-rouge).'
        }
      }
    }, {
      id: 3229,
      title: 'Orthophotos 2017',
      type: 'WMS',
      url: 'https://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_2017/MapServer/WMSServer',
      crs: 'EPSG:3857',
      bbox: [2.832011, 49.434306, 6.465498, 50.880207],
      format: 'image/jpeg',
      area: 'BE',
      abstract: 'Service de visualisation INSPIRE permettant la visualisation de l\'image orthorectifiée et mosaïquée couvrant l\'entièreté du territoire wallon à une résolution de 25 cm pour l\'année 2017.\nLes prises de vue ont été effectuées verticalement entre le 10 juin 2017 et le 1er novembre 2017. Ce service affiche 3 des 4 bandes disponibles (rouge, vert et bleu) en couleurs naturelles.\nCe service n\'est pas tuilé.',
      attribution: 'Service public de Wallonie',
      pixelManipulations: ['whiteTiles2transparent'],
      queryable: false,
      default_layers: ['0'],
      layers: {
        '0': {
          queryable: false,
          title: 'ORTHO_2017',
          abstract: 'Imagerie orthorectifiée et mosaïquée couvrant l\'entièreté du territoire wallon à une résolution de 25 cm.\nLes prises de vue ont été effectuées verticalement entre le 10 juin 2017 et le 1er novembre 2017. Quatre bandes spectrales sont disponibles (rouge, vert, bleu et le proche infra-rouge).\nLe recouvrement longitudinal minimal des photos successives d’une même bande est de 60% avec une tolérance de 5%. D’autre part, le recouvrement latéral minimal entre bandes parallèles successives est de 30%, avec une tolérance de 5%. Les mailles sont de 2 km sur 2km.\nLes métadonnées des orthophotos (date et heure de prise de vue, angle solaire, etc.) sont disponibles sous forme de données attributaires dans la donnée "Orthophotos 2017 - Tuilage".'
        }
      }
    }, {
      id: 3230,
      title: 'Orthophotos 2018',
      type: 'WMS',
      url: 'https://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_2018/MapServer/WMSServer',
      crs: 'EPSG:3857',
      bbox: [2.832011, 49.434306, 6.465498, 50.880207],
      format: 'image/jpeg',
      area: 'BE',
      abstract: 'Service de visualisation INSPIRE permettant la visualisation de l\'image orthorectifiée et mosaïquée couvrant l\'entièreté du territoire wallon à une résolution de 25 cm pour l\'année 2018.\nLes prises de vue ont été effectuées verticalement entre le 10 juin 2018 et le 1er novembre 2018. Ce service affiche 3 des 4 bandes disponibles (rouge, vert et bleu) en couleurs naturelles.\nCe service n\'est pas tuilé.',
      attribution: 'Service public de Wallonie',
      pixelManipulations: ['whiteTiles2transparent'],
      queryable: false,
      default_layers: ['0'],
      layers: {
        '0': {
          queryable: false,
          title: 'ORTHO_2018',
          abstract: 'Imagerie orthorectifiée et mosaïquée couvrant l\'entièreté du territoire wallon à une résolution de 25 cm.\nLes prises de vue ont été effectuées verticalement entre le 10 juin 2018 et le 1er novembre 2018. Quatre bandes spectrales sont disponibles (rouge, vert, bleu et le proche infra-rouge).\nLe recouvrement longitudinal minimal des photos successives d’une même bande est de 60% avec une tolérance de 5%. D’autre part, le recouvrement latéral minimal entre bandes parallèles successives est de 30%, avec une tolérance de 5%. Les mailles sont de 2 km sur 2km.\nLes métadonnées des orthophotos (date et heure de prise de vue, angle solaire, etc.) sont disponibles sous forme de données attributaires dans la donnée "Orthophotos 2018 - Tuilage".'
        }
      }
    }, {
      id: 3231,
      title: 'Orthophotos 2019',
      type: 'WMS',
      url: 'https://geoservices.wallonie.be/arcgis/services/IMAGERIE/ORTHO_2019/MapServer/WMSServer',
      crs: 'EPSG:3857',
      bbox: [2.832011, 49.434306, 6.465498, 50.880207],
      format: 'image/jpeg',
      area: 'BE',
      abstract: 'Service de visualisation INSPIRE permettant la visualisation de l\'image orthorectifiée et mosaïquée couvrant l\'entièreté du territoire wallon à une résolution de 25 cm pour l\'année 2019.\nLes prises de vue ont été effectuées verticalement entre le 10 juin 2019 et le 1er novembre 2019. Ce service affiche 3 des 4 bandes disponibles (rouge, vert et bleu) en couleurs naturelles.\nCe service n\'est pas tuilé.',
      attribution: 'Service public de Wallonie',
      pixelManipulations: ['whiteTiles2transparent'],
      queryable: false,
      default_layers: ['0'],
      layers: {
        '0': {
          queryable: false,
          title: 'ORTHO_2019',
          abstract: 'Imagerie orthorectifiée et mosaïquée couvrant l\'entièreté du territoire wallon à une résolution de 25 cm.\nLes prises de vue ont été effectuées verticalement entre le 10 juin 2019 et le 1er novembre 2019. Quatre bandes spectrales sont disponibles (rouge, vert, bleu et le proche infra-rouge).\nLe recouvrement longitudinal minimal des photos successives d’une même bande est de 60% avec une tolérance de 5%. D’autre part, le recouvrement latéral minimal entre bandes parallèles successives est de 30%, avec une tolérance de 5%. Les mailles sont de 2 km sur 2km.\nLes métadonnées des orthophotos (date et heure de prise de vue, angle solaire, etc.) sont disponibles sous forme de données attributaires dans la donnée "Orthophotos 2019 - Tuilage".'
        }
      }
    }, {
      id: 3232,
      title: 'Ville 30/Stad 30',
      type: 'WMS',
      url: 'https://data.mobility.brussels/geoserver/bm_network/wms',
      crs: 'EPSG:3857',
      bbox: [4.236257, 50.760569, 4.487579, 50.915368],
      zoomRange: [15, 22],
      format: 'image/png',
      area: 'BE',
      abstract: 'Future speed limits in Brussels Mobility (green/blue: 30, orange: 50, pink: 70, black: 90/120)',
      attribution: 'Brussels Mobility',
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['ville30_detailed'],
      layers: {
        'ville30_detailed': {
          queryable: true,
          title: 'Road speeds'
        }
      }
    }, {
      id: 3234,
      title: 'Cadastral Borders',
      type: 'WMS',
      url: 'https://ccff02.minfin.fgov.be/geoservices/arcgis/services/WMS/Cadastral_Layers/MapServer/WmsServer',
      crs: 'EPSG:3857',
      bbox: [2.541334, 6.408098, 49.496885, 51.505116],
      format: 'image/png',
      area: 'BE',
      abstract: 'Map of cadastral borders as they are defined at FPS Finances. This can often be used to find town borders.',
      attribution: 'FPS Finances - General Administration of Patrimonial Documentation',
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: [ 'Regional_building', 'Cadastral_building', 'Cadastral_parcel', 'Polder_wateringue_zone', 'Address', 'Property_stone', 'Cadastral_block', 'Cadastral_section', 'Cadastral_division', 'Municipality', 'District', 'Province', 'Region', 'Country' ],
      layers: {
        'Regional_building': {
          queryable: true,
          title: 'Regional building',
          abstract: 'A regional building is a building managed by the Region.It comes from large-scale referentials (GRB for Flanders, Urbis for Brussel and PICC for Wallonia).'
        },
        'Cadastral_building': {
          queryable: true,
          title: 'Cadastral building',
          abstract: 'A cadastral building is a building whose GAPD (via the commune, the citizen, the site visit,...) has established that it has been put into service. A building has been put into service from the moment it is used according to its destination'
        },
        'Cadastral_parcel': {
          queryable: true,
          title: 'Cadastral parcel',
          abstract: 'A part of the Belgian territory, geographically defined and identified by the GAPD on the cadastral parcel plan, which corresponds to the surface area of one or more patrimonial cadastral parcels'
        },
        'Polder_wateringue_zone': {
          queryable: true,
          title: 'Polder wateringue zone',
          abstract: 'Polder and wateringue zone'
        },
        'Address': {
          queryable: true,
          title: 'Address',
          abstract: 'Police number of BestAdress'
        },
        'Property_stone': {
          queryable: true,
          title: 'Property stone',
          abstract: 'Property stone that have been placed to delimit a parcel'
        },
        'Cadastral_block': {
          queryable: true,
          title: 'Cadastral block',
          abstract: 'A cadastral parcel block is a set of adjacent parcels delimited by the public domain or by municipal boundaries'
        },
        'Cadastral_section': {
          queryable: true,
          title: 'Cadastral section',
          abstract: 'The cadastral sections  are divisions or parts of cadastral divisions'
        },
        'Cadastral_division': {
          queryable: true,
          title: 'Cadastral division',
          abstract: 'The cadastral divisions correspond with cadastral zones consisting of municipalities or parts of municipalities'
        },
        'Municipality': {
          queryable: true,
          title: 'Municipality',
          abstract: 'The boundaries of the municipalities are administrative units based on the administrative boundaries who delimit of the administrative entities at different hierarchical levels, in particular the municipalities, the districts, the provinces, the regions and the country'
        },
        'District': {
          queryable: true,
          title: 'District',
          abstract: 'The boundaries of the districts are administrative units based on the administrative boundaries who delimit the administrative entities on different hierarchical levels, particular the municipalities, the districts, the provinces, the regions and the country'
        },
        'Province': {
          queryable: true,
          title: 'Province',
          abstract: 'The boundaries of the provinces are administrative units based on the administrative boundaries who gives the delimitation of the administrative entities at different hierarchical levels, in particular the municipalities, the districts, the provinces, the regions and the country'
        },
        'Region': {
          queryable: true,
          title: 'Region',
          abstract: 'The boundaries of the regions are administrative units based on the administrative boundaries who delimit of the administrative entities at different hierarchical levels, in particular the municipalities, the districts, the provinces, the regions and the country'
        },
        'Country': {
          queryable: true,
          title: 'Country',
          abstract: 'The national borders are administrative units based on the administrative boundaries who delimit of the administrative entities at different hierarchical levels, in particular the municipalities, the districts, the provinces, the regions and the country'
        }
      }
    }, {
      id: 3235,
      type: 'WMS',
      url: 'https://geo.api.vlaanderen.be/VLAIO/wms',
      crs: 'EPSG:3857',
      bbox: [2.50727, 50.661802, 5.957286, 51.519573],
      format: 'image/png',
      title: 'Agentschap Innoveren en Ondernemen',
      area: 'BE',
      abstract: 'Bevat de locaties van brownfieldconvenanten, steunzones en bedrijventerreinen',
      attribution: 'Agentschap Digitaal Vlaanderen',
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: [ 'Brownf', 'Steunzone', 'Bedrplan', 'Bedrter', 'Bedrontw', 'Bedrperc', 'Bedrpercab', 'Bedrbeh' ],
      layers: {
        'Brownf': {
          queryable: true,
          title: 'Brownfieldconvenanten',
          abstract: 'De Vlaamse Regering wenst de herontwikkeling van verlaten bedrijventerreinen (zg. brownfields ) te stimuleren en te faciliteren door het afsluiten van convenanten met projectontwikkelaars en investeerders. Via zo\'n convenant krijgen projectontwikkelaars en investeerders een aantal juridisch-administratieve en financiële voordelen bij de ontwikkeling van braakliggende en onderbenutte bedrijventerreinen. Daarmee wil de Vlaamse Regering hen ertoe aanzetten bij voorkeur verlaten sites (brownfields) te hergebruiken in plaats van nieuwe gebieden (greenfields) aan te snijden voor de ontwikkeling van industriële activiteiten, woningbouw of recreatie.'
        },
        'Steunzone': {
          queryable: true,
          title: 'Steunzones - Gebieden waar inhouding van bedrijfsvoorheffing mogelijk is',
          abstract: 'Bedrijven die investeren in een afgebakende steunzone (ook wel "ontwrichte zone" genoemd) kunnen een vrijstelling van 25% van de doorstorting van bedrijfsvoorheffing bekomen, voor een periode van 2 jaar per extra arbeidsplaats die als gevolg van deze investering werd gecreëerd en die gedurende ten minste drie jaar (kmo\'s) of vijf jaar (grote ondernemingen) behouden blijft.'
        },
        'Bedrplan': {
          queryable: true,
          title: 'Planningszone met economische bestemming',
          abstract: 'De laag \'Planningszone met economische bestemming\' omvat een overzicht van toekomstige economische zones of omvorming van bestaande zones naar een niet-economische bestemming uit ontwerp-(her)bestemmingsplannen die een openbaar karakter hebben. Het zijn plannen in de fase waar de datum van de plenaire vergadering gekend is of waarvan de plenaire vergadering reeds heeft plaatsgevonden.'
        },
        'Bedrter': {
          queryable: true,
          title: 'Bedrijventerrein',
          abstract: 'De laag \'Bedrijventerrein\' omvat de som van alle ruimtelijke eenheden uit de ruimtelijke planningsprocedure en met een economische bestemming vanaf de dossierfase Publicatie in Belgisch Staatsblad. Een bedrijventerrein is altijd de unie van de percelen die ertoe behoren.'
        },
        'Bedrontw': {
          queryable: true,
          title: 'Ontwikkelbare bedrijvenzone',
          abstract: 'Een Ontwikkelbare Bedrijvenzone bevat de contouren van de Bedrijventerreinen vanaf de mijlpaal publicatie in het Belgisch Staatsblad tot aan de oplevering van de nutsvoorzieningen en infrastructuur. Deze zones kunnen nieuwe terreinen zijn of herontwikkelingstrajecten. Wanneer een (her)ontwikkeling in meerdere fasen gebeurt, dan wordt de ontwikkelbare zone opgesplitst volgens deze fasen.'
        },
        'Bedrperc': {
          queryable: true,
          title: 'Bedrijventerreinperceel',
          abstract: 'Een bedrijventerreinperceel is een ruimtelijke eenheid binnen een Bedrijventerrein met eenzelfde gebruik of functie.'
        },
        'Bedrpercab': {
          queryable: true,
          title: 'Bedrijventerreinperceelaanbieding',
          abstract: 'De laag \'bedrijventerreinperceelaanbieding\' bevat percelen die te koop of te huur worden aangeboden met een referentie naar het perceel, de aanbiedende organisatie en de website waar het perceel wordt aangeboden.'
        },
        'Bedrbeh': {
          queryable: true,
          title: 'Beheerde bedrijvenzone',
          abstract: 'Een beheerde bedrijvenzone is een ruimtelijke eenheid binnen een bedrijventerrein in het beheer van een agent.'
        }
      }
    }, {
      id: 3236,
      type: 'WFS',
      url: 'https://geoserver.gis.cloud.mow.vlaanderen.be/geoserver/beleid/laadpunten_public/wfs',
      crs: 'EPSG:31370',
      bbox: [2.519999, 50.639999, 5.940002, 51.510003],
      title: 'Laadpunten Vlaanderen',
      area: 'BE',
      abstract: 'Overzicht van laadpunten in Vlaanderen',
      markerIcon: ''
    }, {
      id: 5501,
      title: 'Mapa basico Rio de Janeiro',
      type: 'WMS',
      url: 'http://pgeo3.rio.rj.gov.br/arcgis/services/Basicos/mapa_basico_UTM/MapServer/WmsServer',
      crs: 'EPSG:3857',
      bbox: [-43.846517, -23.122354, -43.064318, -22.729244],
      format: 'image/png',
      area: 'BR',
      abstract: 'Mapa urbano básico da Cidade do Rio de Janeiro',
      attribution: 'Cidade do Rio de Janeiro',
      pixelManipulations: ['rioTransparent'],
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'],
      layers: {
        '0': {
          queryable: false,
          title: 'Limite do Estado do Rio de Janeiro',
          abstract: 'Divisão Política do Estado do Rio de Janeiro'
        },
        '1': {
          queryable: false,
          title: 'relevo'
        },
        '2': {
          queryable: false,
          title: 'Quadras'
        },
        '3': {
          queryable: true,
          title: 'Logradouros - Ruas'
        },
        '4': {
          queryable: false,
          title: 'Praças'
        },
        '5': {
          queryable: false,
          title: 'Areas Protegidas'
        },
        '6': {
          queryable: true,
          title: 'Favelas'
        },
        '7': {
          queryable: false,
          title: 'Loteamentos Irregulares e Clandestinos'
        },
        '8': {
          queryable: false,
          title: 'edificações'
        },
        '9': {
          queryable: false,
          title: 'Hidrografia - Rios'
        },
        '10': {
          queryable: false,
          title: 'Limite de Bairros'
        },
        '11': {
          queryable: false,
          title: 'Limite de Regiões Administrativas - RA'
        },
        '12': {
          queryable: false,
          title: 'Áreas de Planejamento - AP'
        },
        '13': {
          queryable: false,
          title: 'número de porta'
        },
        '14': {
          queryable: true,
          title: 'principais logradouros'
        },
        '15': {
          queryable: false,
          title: 'Locais de Referência'
        },
        '16': {
          queryable: false,
          title: 'Escolas Municipais'
        },
        '17': {
          queryable: false,
          title: 'Unidades de Saúde Estaduais e Federais'
        },
        '18': {
          queryable: false,
          title: 'Unidades de Saúde Municipais'
        },
        '19': {
          queryable: false,
          title: 'Corpo de Bombeiros'
        },
        '20': {
          queryable: false,
          title: 'Delegacias Policiais'
        },
        '21': {
          queryable: false,
          title: 'Estações de Bonde'
        },
        '22': {
          queryable: false,
          title: 'Estações Hidroviárias'
        },
        '23': {
          queryable: false,
          title: 'Estações Ferroviárias'
        },
        '24': {
          queryable: false,
          title: 'Estações do Metrô'
        },
        '25': {
          queryable: false,
          title: 'Aeroportos',
          abstract: 'principais aeroportos comerciais'
        }
      }
    }, {
      id: 96801,
      title: 'Oman National Basemap (EN) Transparent with Major Landmarks',
      type: 'WMS',
      url: 'https://nsdig2gapps.ncsi.gov.om/arcgis1/services/Geoportal/BaseMapTransparentLandmarksEN/MapServer/WmsServer',
      crs: 'EPSG:3857',
      bbox: [46.23671, 12.997039, 66.795257, 30.129168],
      format: 'image/png',
      area: 'OM',
      abstract: 'National Basemap Transparent with Major Landmarks',
      attribution: 'NCSI',
      pixelManipulations: ['traceGrayscalePixels'],
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['1', '2', '3', '5', '6', '7', '8', '9', '10', '12', '13', '14', '15', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '33', '34', '35', '36', '37', '39', '40', '41', '42', '43', '45', '47', '48', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130'],
      layers: {
        '1': {
          queryable: true,
          title: 'Name of Ocean',
          abstract: 'Name of Ocean'
        },
        '2': {
          queryable: true,
          title: 'World Ocean',
          abstract: 'World Ocean'
        },
        '3': {
          queryable: true,
          title: 'World Countries',
          abstract: 'World Countries'
        },
        '5': {
          queryable: true,
          title: 'Country Boundary',
          abstract: 'Country Boundary'
        },
        '6': {
          queryable: true,
          title: 'Governorate ',
          abstract: 'Governorate '
        },
        '7': {
          queryable: true,
          title: 'Willayat',
          abstract: 'Willayat'
        },
        '8': {
          queryable: true,
          title: 'Governorate Center',
          abstract: 'Governorate Center'
        },
        '9': {
          queryable: true,
          title: 'Willayat Center',
          abstract: 'Willayat Center'
        },
        '10': {
          queryable: true,
          title: 'Town Center',
          abstract: 'Town Center'
        },
        '12': {
          queryable: true,
          title: 'Rock',
          abstract: 'Rock'
        },
        '13': {
          queryable: true,
          title: 'Sand Dunes',
          abstract: 'Sand Dunes'
        },
        '14': {
          queryable: true,
          title: 'Builtup Area',
          abstract: 'Builtup Area'
        },
        '15': {
          queryable: true,
          title: 'Vegetation',
          abstract: 'Vegetation'
        },
        '17': {
          queryable: true,
          title: 'Reservoir',
          abstract: 'Reservoir'
        },
        '18': {
          queryable: true,
          title: 'Marsh Swamp',
          abstract: 'Marsh Swamp'
        },
        '19': {
          queryable: true,
          title: 'Sabkha',
          abstract: 'Sabkha'
        },
        '20': {
          queryable: true,
          title: 'Lake Pond',
          abstract: 'Lake Pond'
        },
        '21': {
          queryable: true,
          title: 'Lagoon',
          abstract: 'Lagoon'
        },
        '22': {
          queryable: true,
          title: 'Wadi Stream',
          abstract: 'Wadi Stream'
        },
        '23': {
          queryable: true,
          title: 'Wadi Spread',
          abstract: 'Wadi Spread'
        },
        '24': {
          queryable: true,
          title: 'Dam',
          abstract: 'Dam'
        },
        '25': {
          queryable: true,
          title: 'Foreshore',
          abstract: 'Foreshore'
        },
        '26': {
          queryable: true,
          title: 'Beach',
          abstract: 'Beach'
        },
        '27': {
          queryable: true,
          title: 'Ditch',
          abstract: 'Ditch'
        },
        '28': {
          queryable: true,
          title: 'Weir',
          abstract: 'Weir'
        },
        '29': {
          queryable: true,
          title: 'Sluice Gate',
          abstract: 'Sluice Gate'
        },
        '30': {
          queryable: true,
          title: 'Waterfall',
          abstract: 'Waterfall'
        },
        '31': {
          queryable: true,
          title: 'Spring',
          abstract: 'Spring'
        },
        '33': {
          queryable: true,
          title: 'Road Centre Lines',
          abstract: 'Road Centre Lines'
        },
        '34': {
          queryable: true,
          title: 'Road Centre Lines',
          abstract: 'Road Centre Lines'
        },
        '35': {
          queryable: true,
          title: 'Streets',
          abstract: 'Streets'
        },
        '36': {
          queryable: true,
          title: 'Minor Roads',
          abstract: 'Minor Roads'
        },
        '37': {
          queryable: true,
          title: 'Major Roads',
          abstract: 'Major Roads'
        },
        '39': {
          queryable: true,
          title: 'Amusement Parks',
          abstract: 'Amusement Parks'
        },
        '40': {
          queryable: true,
          title: 'Golf Courses',
          abstract: 'Golf Courses'
        },
        '41': {
          queryable: true,
          title: 'Parks',
          abstract: 'Parks'
        },
        '42': {
          queryable: true,
          title: 'Racing Tracks',
          abstract: 'Racing Tracks'
        },
        '43': {
          queryable: true,
          title: 'Sports Fields',
          abstract: 'Sports Fields'
        },
        '45': {
          queryable: true,
          title: 'Archeological Sites',
          abstract: 'Archeological Sites'
        },
        '47': {
          queryable: true,
          title: 'Buildings',
          abstract: 'Buildings'
        },
        '48': {
          queryable: true,
          title: 'Wall and Fences',
          abstract: 'Wall and Fences'
        },
        '50': {
          queryable: true,
          title: 'Consulates',
          abstract: 'Consulates'
        },
        '51': {
          queryable: true,
          title: 'International Missions',
          abstract: 'International Missions'
        },
        '52': {
          queryable: true,
          title: 'Embassies',
          abstract: 'Embassies'
        },
        '53': {
          queryable: true,
          title: 'Money Exchange',
          abstract: 'Money Exchange'
        },
        '54': {
          queryable: true,
          title: 'Stock Exchange',
          abstract: 'Stock Exchange'
        },
        '55': {
          queryable: true,
          title: 'Banks',
          abstract: 'Banks'
        },
        '56': {
          queryable: true,
          title: 'Fuel Stations',
          abstract: 'Fuel Stations'
        },
        '57': {
          queryable: true,
          title: 'Department Stores',
          abstract: 'Department Stores'
        },
        '58': {
          queryable: true,
          title: 'Shopping Mall Locations',
          abstract: 'Shopping Mall Locations'
        },
        '59': {
          queryable: true,
          title: 'Market Locations',
          abstract: 'Market Locations'
        },
        '60': {
          queryable: true,
          title: 'Ambulance Station',
          abstract: 'Ambulance Station'
        },
        '61': {
          queryable: true,
          title: 'Civil Defense Centers',
          abstract: 'Civil Defense Centers'
        },
        '62': {
          queryable: true,
          title: 'Police Station',
          abstract: 'Police Station'
        },
        '63': {
          queryable: true,
          title: 'Government Offices',
          abstract: 'Government Offices'
        },
        '64': {
          queryable: true,
          title: 'College Locations',
          abstract: 'College Locations'
        },
        '65': {
          queryable: true,
          title: 'Training Centers',
          abstract: 'Training Centers'
        },
        '66': {
          queryable: true,
          title: 'University Locations',
          abstract: 'University Locations'
        },
        '67': {
          queryable: true,
          title: 'School Locations',
          abstract: 'School Locations'
        },
        '68': {
          queryable: true,
          title: 'Health Centers',
          abstract: 'Health Centers'
        },
        '69': {
          queryable: true,
          title: 'Hospital Locations',
          abstract: 'Hospital Locations'
        },
        '70': {
          queryable: true,
          title: 'Diagnostic Centers',
          abstract: 'Diagnostic Centers'
        },
        '71': {
          queryable: true,
          title: 'Churches',
          abstract: 'Churches'
        },
        '72': {
          queryable: true,
          title: 'Temples',
          abstract: 'Temples'
        },
        '73': {
          queryable: true,
          title: 'Shrines',
          abstract: 'Shrines'
        },
        '74': {
          queryable: true,
          title: 'Mosques',
          abstract: 'Mosques'
        },
        '75': {
          queryable: true,
          title: 'Amusement Parks',
          abstract: 'Amusement Parks'
        },
        '76': {
          queryable: true,
          title: 'Beach Location',
          abstract: 'Beach Location'
        },
        '77': {
          queryable: true,
          title: 'Cinema Theaters',
          abstract: 'Cinema Theaters'
        },
        '78': {
          queryable: true,
          title: 'Skating Centers',
          abstract: 'Skating Centers'
        },
        '79': {
          queryable: true,
          title: 'Bowling Centers',
          abstract: 'Bowling Centers'
        },
        '80': {
          queryable: true,
          title: 'Theaters',
          abstract: 'Theaters'
        },
        '81': {
          queryable: true,
          title: 'Cultural Facilities',
          abstract: 'Cultural Facilities'
        },
        '82': {
          queryable: true,
          title: 'Museums',
          abstract: 'Museums'
        },
        '83': {
          queryable: true,
          title: 'Park Locations',
          abstract: 'Park Locations'
        },
        '84': {
          queryable: true,
          title: 'Convention Centers',
          abstract: 'Convention Centers'
        },
        '85': {
          queryable: true,
          title: 'Resturants',
          abstract: 'Resturants'
        },
        '86': {
          queryable: true,
          title: 'Hotels',
          abstract: 'Hotels'
        },
        '87': {
          queryable: true,
          title: 'Archeological Site Locations',
          abstract: 'Archeological Site Locations'
        },
        '88': {
          queryable: true,
          title: 'FerryTerminals',
          abstract: 'FerryTerminals'
        },
        '89': {
          queryable: true,
          title: 'Airport Locations',
          abstract: 'Airport Locations'
        },
        '91': {
          queryable: true,
          title: 'Consulates',
          abstract: 'Consulates'
        },
        '92': {
          queryable: true,
          title: 'International Missions',
          abstract: 'International Missions'
        },
        '93': {
          queryable: true,
          title: 'Embassies',
          abstract: 'Embassies'
        },
        '94': {
          queryable: true,
          title: 'Money Exchange',
          abstract: 'Money Exchange'
        },
        '95': {
          queryable: true,
          title: 'Stock Exchange',
          abstract: 'Stock Exchange'
        },
        '96': {
          queryable: true,
          title: 'Banks',
          abstract: 'Banks'
        },
        '97': {
          queryable: true,
          title: 'Fuel Stations',
          abstract: 'Fuel Stations'
        },
        '98': {
          queryable: true,
          title: 'Department Stores',
          abstract: 'Department Stores'
        },
        '99': {
          queryable: true,
          title: 'Shopping Mall Locations',
          abstract: 'Shopping Mall Locations'
        },
        '100': {
          queryable: true,
          title: 'Market Locations',
          abstract: 'Market Locations'
        },
        '101': {
          queryable: true,
          title: 'Ambulance Station',
          abstract: 'Ambulance Station'
        },
        '102': {
          queryable: true,
          title: 'Civil Defense Centers',
          abstract: 'Civil Defense Centers'
        },
        '103': {
          queryable: true,
          title: 'Police Station',
          abstract: 'Police Station'
        },
        '104': {
          queryable: true,
          title: 'Government Offices',
          abstract: 'Government Offices'
        },
        '105': {
          queryable: true,
          title: 'College Locations',
          abstract: 'College Locations'
        },
        '106': {
          queryable: true,
          title: 'Training Centers',
          abstract: 'Training Centers'
        },
        '107': {
          queryable: true,
          title: 'University Locations',
          abstract: 'University Locations'
        },
        '108': {
          queryable: true,
          title: 'School Locations',
          abstract: 'School Locations'
        },
        '109': {
          queryable: true,
          title: 'Health Centers',
          abstract: 'Health Centers'
        },
        '110': {
          queryable: true,
          title: 'Hospital Locations',
          abstract: 'Hospital Locations'
        },
        '111': {
          queryable: true,
          title: 'Diagnostic Centers',
          abstract: 'Diagnostic Centers'
        },
        '112': {
          queryable: true,
          title: 'Churches',
          abstract: 'Churches'
        },
        '113': {
          queryable: true,
          title: 'Temples',
          abstract: 'Temples'
        },
        '114': {
          queryable: true,
          title: 'Shrines',
          abstract: 'Shrines'
        },
        '115': {
          queryable: true,
          title: 'Mosques',
          abstract: 'Mosques'
        },
        '116': {
          queryable: true,
          title: 'Amusement Parks',
          abstract: 'Amusement Parks'
        },
        '117': {
          queryable: true,
          title: 'Beach Location',
          abstract: 'Beach Location'
        },
        '118': {
          queryable: true,
          title: 'Cinema Theaters',
          abstract: 'Cinema Theaters'
        },
        '119': {
          queryable: true,
          title: 'Skating Centers',
          abstract: 'Skating Centers'
        },
        '120': {
          queryable: true,
          title: 'Bowling Centers',
          abstract: 'Bowling Centers'
        },
        '121': {
          queryable: true,
          title: 'Theaters',
          abstract: 'Theaters'
        },
        '122': {
          queryable: true,
          title: 'Cultural Facilities',
          abstract: 'Cultural Facilities'
        },
        '123': {
          queryable: true,
          title: 'Museums',
          abstract: 'Museums'
        },
        '124': {
          queryable: true,
          title: 'Park Locations',
          abstract: 'Park Locations'
        },
        '125': {
          queryable: true,
          title: 'Convention Centers',
          abstract: 'Convention Centers'
        },
        '126': {
          queryable: true,
          title: 'Resturants',
          abstract: 'Resturants'
        },
        '127': {
          queryable: true,
          title: 'Hotels',
          abstract: 'Hotels'
        },
        '128': {
          queryable: true,
          title: 'Archeological Site Locations',
          abstract: 'Archeological Site Locations'
        },
        '129': {
          queryable: true,
          title: 'FerryTerminals',
          abstract: 'FerryTerminals'
        },
        '130': {
          queryable: true,
          title: 'Airport Locations',
          abstract: 'Airport Locations'
        }
      }
    }, {
      id: 96802,
      title: 'Oman National Basemap (AR) Transparent with Major Landmarks',
      type: 'WMS',
      url: 'https://nsdig2gapps.ncsi.gov.om/arcgis1/services/Geoportal/BaseMapTransparentLandmarksAR/MapServer/WmsServer',
      crs: 'EPSG:3857',
      bbox: [46.23671, 12.997039, 66.795257, 30.129168],
      format: 'image/png',
      area: 'OM',
      abstract: 'National Basemap Transparent with Major Landmarks',
      attribution: 'NCSI',
      pixelManipulations: ['traceGrayscalePixels'],
      queryable: true,
      query_filters: [ applyAllTransformations ],
      default_layers: ['1', '2', '3', '5', '6', '7', '8', '9', '10', '12', '13', '14', '15', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '33', '34', '35', '36', '37', '39', '40', '41', '42', '43', '45', '47', '48', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130'],
      layers: {
        '1': {
          queryable: true,
          title: 'Name of Ocean',
          abstract: 'أسماء المحيطات'
        },
        '2': {
          queryable: true,
          title: 'World Ocean',
          abstract: 'المحيطات'
        },
        '3': {
          queryable: true,
          title: 'World Countries',
          abstract: 'دول العالم'
        },
        '5': {
          queryable: true,
          title: 'Country Boundary',
          abstract: 'حدود السلطنة'
        },
        '6': {
          queryable: true,
          title: 'Governorate ',
          abstract: 'المحافظات'
        },
        '7': {
          queryable: true,
          title: 'Willayat',
          abstract: 'الولايات'
        },
        '8': {
          queryable: true,
          title: 'Governorate Center',
          abstract: 'مركز المحافظة'
        },
        '9': {
          queryable: true,
          title: 'Willayat Center',
          abstract: 'مركز الولاية'
        },
        '10': {
          queryable: true,
          title: 'Town Center',
          abstract: 'مركز المدينة'
        },
        '12': {
          queryable: true,
          title: 'Rock',
          abstract: 'تجمعات صخرية'
        },
        '13': {
          queryable: true,
          title: 'Sand Dunes',
          abstract: 'الكثبان الرملية'
        },
        '14': {
          queryable: true,
          title: 'Builtup Area',
          abstract: 'الإمتدادات العمرانية'
        },
        '15': {
          queryable: true,
          title: 'Vegetation',
          abstract: 'الغطاء النباتي'
        },
        '17': {
          queryable: true,
          title: 'Reservoir',
          abstract: 'خزانات المياه'
        },
        '18': {
          queryable: true,
          title: 'Marsh Swamp',
          abstract: 'مستنقعات'
        },
        '19': {
          queryable: true,
          title: 'Sabkha',
          abstract: 'السبخات'
        },
        '20': {
          queryable: true,
          title: 'Lake Pond',
          abstract: 'برك المياه'
        },
        '21': {
          queryable: true,
          title: 'Lagoon',
          abstract: 'بحيرات ملحية'
        },
        '22': {
          queryable: true,
          title: 'Wadi Stream',
          abstract: 'مسارات الأودية'
        },
        '23': {
          queryable: true,
          title: 'Wadi Spread',
          abstract: 'الأودية'
        },
        '24': {
          queryable: true,
          title: 'Dam',
          abstract: 'سدود'
        },
        '25': {
          queryable: true,
          title: 'Foreshore',
          abstract: 'حد الساحل'
        },
        '26': {
          queryable: true,
          title: 'Beach',
          abstract: 'الشواطئ'
        },
        '27': {
          queryable: true,
          title: 'Ditch',
          abstract: 'خنادق'
        },
        '28': {
          queryable: true,
          title: 'Weir',
          abstract: 'مصدات المياه'
        },
        '29': {
          queryable: true,
          title: 'Sluice Gate',
          abstract: 'بوابات التصريف'
        },
        '30': {
          queryable: true,
          title: 'Waterfall',
          abstract: 'الشلالات'
        },
        '31': {
          queryable: true,
          title: 'Spring',
          abstract: 'ينابيع'
        },
        '33': {
          queryable: true,
          title: 'Road Centre Lines',
          abstract: 'خطوط منتصف الطرق'
        },
        '34': {
          queryable: true,
          title: 'Road Centre Lines',
          abstract: 'خطوط منتصف الطرق'
        },
        '35': {
          queryable: true,
          title: 'Streets',
          abstract: 'الشوارع'
        },
        '36': {
          queryable: true,
          title: 'Minor Roads',
          abstract: 'الطرق الثانوية'
        },
        '37': {
          queryable: true,
          title: 'Major Roads',
          abstract: 'الطرق الرئيسية'
        },
        '39': {
          queryable: true,
          title: 'Amusement Parks',
          abstract: 'المتنزهات الترفيهية'
        },
        '40': {
          queryable: true,
          title: 'Golf Courses',
          abstract: 'ملاعب الجولف'
        },
        '41': {
          queryable: true,
          title: 'Parks',
          abstract: 'الحدائق'
        },
        '42': {
          queryable: true,
          title: 'Racing Tracks',
          abstract: 'مضامير السباق'
        },
        '43': {
          queryable: true,
          title: 'Sports Fields',
          abstract: 'الملاعب الرياضية'
        },
        '45': {
          queryable: true,
          title: 'Archeological Sites',
          abstract: 'المواقع الأثرية'
        },
        '47': {
          queryable: true,
          title: 'Buildings',
          abstract: 'المباني'
        },
        '48': {
          queryable: true,
          title: 'Wall and Fences',
          abstract: 'الأسوار والأسيجة'
        },
        '50': {
          queryable: true,
          title: 'Consulates',
          abstract: 'الهيئات الدبلوماسية'
        },
        '51': {
          queryable: true,
          title: 'International Missions',
          abstract: 'السفارات'
        },
        '52': {
          queryable: true,
          title: 'Embassies',
          abstract: 'القنصليات'
        },
        '53': {
          queryable: true,
          title: 'Money Exchange',
          abstract: 'سوق الأوراق المالية'
        },
        '54': {
          queryable: true,
          title: 'Stock Exchange',
          abstract: 'شركات الصرافة'
        },
        '55': {
          queryable: true,
          title: 'Banks',
          abstract: 'البنوك'
        },
        '56': {
          queryable: true,
          title: 'Fuel Stations',
          abstract: 'محطات الوقود'
        },
        '57': {
          queryable: true,
          title: 'Department Stores',
          abstract: 'مواقع الاسواق'
        },
        '58': {
          queryable: true,
          title: 'Shopping Mall Locations',
          abstract: 'المتاجر متعددة الأقسام'
        },
        '59': {
          queryable: true,
          title: 'Market Locations',
          abstract: 'مواقع المراكز التجارية'
        },
        '60': {
          queryable: true,
          title: 'Ambulance Station',
          abstract: 'مراكز الاسعاف'
        },
        '61': {
          queryable: true,
          title: 'Civil Defense Centers',
          abstract: 'مراكز الدفاع المدني'
        },
        '62': {
          queryable: true,
          title: 'Police Station',
          abstract: 'مراكز الشرطة'
        },
        '63': {
          queryable: true,
          title: 'Government Offices',
          abstract: 'مواقع الجهات الحكومية'
        },
        '64': {
          queryable: true,
          title: 'College Locations',
          abstract: 'مراكز التدريب والتأهيل'
        },
        '65': {
          queryable: true,
          title: 'Training Centers',
          abstract: 'مواقع الكليات'
        },
        '66': {
          queryable: true,
          title: 'University Locations',
          abstract: 'مواقع الجامعات'
        },
        '67': {
          queryable: true,
          title: 'School Locations',
          abstract: 'مواقع المدارس'
        },
        '68': {
          queryable: true,
          title: 'Health Centers',
          abstract: 'المراكز الصحية'
        },
        '69': {
          queryable: true,
          title: 'Hospital Locations',
          abstract: 'مواقع المستشفيات'
        },
        '70': {
          queryable: true,
          title: 'Diagnostic Centers',
          abstract: 'مراكز التشخيص الطبي'
        },
        '71': {
          queryable: true,
          title: 'Churches',
          abstract: 'الأضرحة'
        },
        '72': {
          queryable: true,
          title: 'Temples',
          abstract: 'الكنائس'
        },
        '73': {
          queryable: true,
          title: 'Shrines',
          abstract: 'المعابد'
        },
        '74': {
          queryable: true,
          title: 'Mosques',
          abstract: 'المساجد'
        },
        '75': {
          queryable: true,
          title: 'Amusement Parks',
          abstract: 'المتنزهات الترفيهية'
        },
        '76': {
          queryable: true,
          title: 'Beach Location',
          abstract: 'مواقع الشواطئ'
        },
        '77': {
          queryable: true,
          title: 'Cinema Theaters',
          abstract: 'دور السينما'
        },
        '78': {
          queryable: true,
          title: 'Skating Centers',
          abstract: 'مراكز التزلج'
        },
        '79': {
          queryable: true,
          title: 'Bowling Centers',
          abstract: 'مراكز البولينج'
        },
        '80': {
          queryable: true,
          title: 'Theaters',
          abstract: 'المسارح'
        },
        '81': {
          queryable: true,
          title: 'Cultural Facilities',
          abstract: 'المواقع الثقافية'
        },
        '82': {
          queryable: true,
          title: 'Museums',
          abstract: 'المتاحف'
        },
        '83': {
          queryable: true,
          title: 'Park Locations',
          abstract: 'مواقع الحدائق'
        },
        '84': {
          queryable: true,
          title: 'Convention Centers',
          abstract: 'مراكز المؤتمرات'
        },
        '85': {
          queryable: true,
          title: 'Resturants',
          abstract: 'المطاعم'
        },
        '86': {
          queryable: true,
          title: 'Hotels',
          abstract: 'الفنادق'
        },
        '87': {
          queryable: true,
          title: 'Archeological Site Locations',
          abstract: 'المواقع الأثرية - النقاط'
        },
        '88': {
          queryable: true,
          title: 'FerryTerminals',
          abstract: 'محطات العبارات'
        },
        '89': {
          queryable: true,
          title: 'Airport Locations',
          abstract: 'المطارات'
        },
        '91': {
          queryable: true,
          title: 'Consulates',
          abstract: 'الهيئات الدبلوماسية'
        },
        '92': {
          queryable: true,
          title: 'International Missions',
          abstract: 'السفارات'
        },
        '93': {
          queryable: true,
          title: 'Embassies',
          abstract: 'القنصليات'
        },
        '94': {
          queryable: true,
          title: 'Money Exchange',
          abstract: 'سوق الأوراق المالية'
        },
        '95': {
          queryable: true,
          title: 'Stock Exchange',
          abstract: 'شركات الصرافة'
        },
        '96': {
          queryable: true,
          title: 'Banks',
          abstract: 'البنوك'
        },
        '97': {
          queryable: true,
          title: 'Fuel Stations',
          abstract: 'محطات الوقود'
        },
        '98': {
          queryable: true,
          title: 'Department Stores',
          abstract: 'مواقع الاسواق'
        },
        '99': {
          queryable: true,
          title: 'Shopping Mall Locations',
          abstract: 'المتاجر متعددة الأقسام'
        },
        '100': {
          queryable: true,
          title: 'Market Locations',
          abstract: 'مواقع المراكز التجارية'
        },
        '101': {
          queryable: true,
          title: 'Ambulance Station',
          abstract: 'مراكز الاسعاف'
        },
        '102': {
          queryable: true,
          title: 'Civil Defense Centers',
          abstract: 'مراكز الدفاع المدني'
        },
        '103': {
          queryable: true,
          title: 'Police Station',
          abstract: 'مراكز الشرطة'
        },
        '104': {
          queryable: true,
          title: 'Government Offices',
          abstract: 'مواقع الجهات الحكومية'
        },
        '105': {
          queryable: true,
          title: 'College Locations',
          abstract: 'مراكز التدريب والتأهيل'
        },
        '106': {
          queryable: true,
          title: 'Training Centers',
          abstract: 'مواقع الكليات'
        },
        '107': {
          queryable: true,
          title: 'University Locations',
          abstract: 'مواقع الجامعات'
        },
        '108': {
          queryable: true,
          title: 'School Locations',
          abstract: 'مواقع المدارس'
        },
        '109': {
          queryable: true,
          title: 'Health Centers',
          abstract: 'المراكز الصحية'
        },
        '110': {
          queryable: true,
          title: 'Hospital Locations',
          abstract: 'مواقع المستشفيات'
        },
        '111': {
          queryable: true,
          title: 'Diagnostic Centers',
          abstract: 'مراكز التشخيص الطبي'
        },
        '112': {
          queryable: true,
          title: 'Churches',
          abstract: 'الأضرحة'
        },
        '113': {
          queryable: true,
          title: 'Temples',
          abstract: 'الكنائس'
        },
        '114': {
          queryable: true,
          title: 'Shrines',
          abstract: 'المعابد'
        },
        '115': {
          queryable: true,
          title: 'Mosques',
          abstract: 'المساجد'
        },
        '116': {
          queryable: true,
          title: 'Amusement Parks',
          abstract: 'المتنزهات الترفيهية'
        },
        '117': {
          queryable: true,
          title: 'Beach Location',
          abstract: 'مواقع الشواطئ'
        },
        '118': {
          queryable: true,
          title: 'Cinema Theaters',
          abstract: 'دور السينما'
        },
        '119': {
          queryable: true,
          title: 'Skating Centers',
          abstract: 'مراكز التزلج'
        },
        '120': {
          queryable: true,
          title: 'Bowling Centers',
          abstract: 'مراكز البولينج'
        },
        '121': {
          queryable: true,
          title: 'Theaters',
          abstract: 'المسارح'
        },
        '122': {
          queryable: true,
          title: 'Cultural Facilities',
          abstract: 'المواقع الثقافية'
        },
        '123': {
          queryable: true,
          title: 'Museums',
          abstract: 'المتاحف'
        },
        '124': {
          queryable: true,
          title: 'Park Locations',
          abstract: 'مواقع الحدائق'
        },
        '125': {
          queryable: true,
          title: 'Convention Centers',
          abstract: 'مراكز المؤتمرات'
        },
        '126': {
          queryable: true,
          title: 'Resturants',
          abstract: 'المطاعم'
        },
        '127': {
          queryable: true,
          title: 'Hotels',
          abstract: 'الفنادق'
        },
        '128': {
          queryable: true,
          title: 'Archeological Site Locations',
          abstract: 'المواقع الأثرية - النقاط'
        },
        '129': {
          queryable: true,
          title: 'FerryTerminals',
          abstract: 'محطات العبارات'
        },
        '130': {
          queryable: true,
          title: 'Airport Locations',
          abstract: 'المطارات'
        }
      }
    }
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

  // Add missing projections with a local proj4js instance (it breaks WME if this is picked up by OpenLayers)
  function phi4z(e,t,i,n,r,s,o,a,l){var h,c,u,d,p,f,m,g,y,v;for(l=s,v=1;15>=v;v++)if(h=Math.sin(l),u=Math.tan(l),a=u*Math.sqrt(1-e*h*h),c=Math.sin(2*l),d=t*l-i*c+n*Math.sin(4*l)-r*Math.sin(6*l),p=t-2*i*Math.cos(2*l)+4*n*Math.cos(4*l)-6*r*Math.cos(6*l),f=2*d+a*(d*d+o)-2*s*(a*d+1),m=e*c*(d*d+o-2*s*d)/(2*a),g=2*(s-d)*(a*p-2/c)-2*p,y=f/(m+g),l+=y,1e-10>=Math.abs(y))return l;return proj4js.reportError("phi4z: No convergence"),null}
  var proj4js={defaultDatum:"WGS84",transform:function(e,t,i){if(!e.readyToUse)return this.reportError("Proj4js initialization for:"+e.srsCode+" not yet complete"),i;if(!t.readyToUse)return this.reportError("Proj4js initialization for:"+t.srsCode+" not yet complete"),i;if(e.datum&&t.datum&&((e.datum.datum_type==proj4js.common.PJD_3PARAM||e.datum.datum_type==proj4js.common.PJD_7PARAM)&&"WGS84"!=t.datumCode||(t.datum.datum_type==proj4js.common.PJD_3PARAM||t.datum.datum_type==proj4js.common.PJD_7PARAM)&&"WGS84"!=e.datumCode)){var n=proj4js.WGS84;this.transform(e,n,i),e=n}return"enu"!=e.axis&&this.adjust_axis(e,!1,i),"longlat"==e.projName?(i.x*=proj4js.common.D2R,i.y*=proj4js.common.D2R):(e.to_meter&&(i.x*=e.to_meter,i.y*=e.to_meter),e.inverse(i)),e.from_greenwich&&(i.x+=e.from_greenwich),i=this.datum_transform(e.datum,t.datum,i),t.from_greenwich&&(i.x-=t.from_greenwich),"longlat"==t.projName?(i.x*=proj4js.common.R2D,i.y*=proj4js.common.R2D):(t.forward(i),t.to_meter&&(i.x/=t.to_meter,i.y/=t.to_meter)),"enu"!=t.axis&&this.adjust_axis(t,!0,i),i},datum_transform:function(e,t,i){return e.compare_datums(t)?i:e.datum_type==proj4js.common.PJD_NODATUM||t.datum_type==proj4js.common.PJD_NODATUM?i:((e.es!=t.es||e.a!=t.a||e.datum_type==proj4js.common.PJD_3PARAM||e.datum_type==proj4js.common.PJD_7PARAM||t.datum_type==proj4js.common.PJD_3PARAM||t.datum_type==proj4js.common.PJD_7PARAM)&&(e.geodetic_to_geocentric(i),(e.datum_type==proj4js.common.PJD_3PARAM||e.datum_type==proj4js.common.PJD_7PARAM)&&e.geocentric_to_wgs84(i),(t.datum_type==proj4js.common.PJD_3PARAM||t.datum_type==proj4js.common.PJD_7PARAM)&&t.geocentric_from_wgs84(i),t.geocentric_to_geodetic(i)),i)},adjust_axis:function(e,t,i){for(var n,r,s=i.x,o=i.y,a=i.z||0,l=0;3>l;l++)if(!t||2!=l||void 0!==i.z)switch(0==l?(n=s,r="x"):1==l?(n=o,r="y"):(n=a,r="z"),e.axis[l]){case"e":i[r]=n;break;case"w":i[r]=-n;break;case"n":i[r]=n;break;case"s":i[r]=-n;break;case"u":void 0!==i[r]&&(i.z=n);break;case"d":void 0!==i[r]&&(i.z=-n);break;default:return alert("ERROR: unknow axis ("+e.axis[l]+") - check definition of "+e.projName),null}return i},reportError:function(){},extend:function(e,t){if(e=e||{},t)for(var i in t){var n=t[i];void 0!==n&&(e[i]=n)}return e},Class:function(){for(var e,t=function(){this.initialize.apply(this,arguments)},i={},n=0;arguments.length>n;++n)e="function"==typeof arguments[n]?arguments[n].prototype:arguments[n],proj4js.extend(i,e);return t.prototype=i,t},bind:function(e,t){var i=Array.prototype.slice.apply(arguments,[2]);return function(){var n=i.concat(Array.prototype.slice.apply(arguments,[0]));return e.apply(t,n)}},scriptName:"proj4js-compressed.js",defsLookupService:"http://spatialreference.org/ref",libPath:null,getScriptLocation:function(){if(this.libPath)return this.libPath;for(var e=this.scriptName,t=e.length,i=document.getElementsByTagName("script"),n=0;i.length>n;n++){var r=i[n].getAttribute("src");if(r){var s=r.lastIndexOf(e);if(s>-1&&s+t==r.length){this.libPath=r.slice(0,-t);break}}}return this.libPath||""},loadScript:function(e,t,i,n){var r=document.createElement("script");r.defer=!1,r.type="text/javascript",r.id=e,r.src=e,r.onload=t,r.onerror=i,r.loadCheck=n,/MSIE/.test(navigator.userAgent)&&(r.onreadystatechange=this.checkReadyState),document.getElementsByTagName("head")[0].appendChild(r)},checkReadyState:function(){"loaded"==this.readyState&&(this.loadCheck()?this.onload():this.onerror())}};
  proj4js.Proj=proj4js.Class({readyToUse:!1,title:null,projName:null,units:null,datum:null,x0:0,y0:0,localCS:!1,queue:null,initialize:function(e,t){if(this.srsCodeInput=e,this.queue=[],t&&this.queue.push(t),e.indexOf("GEOGCS")>=0||e.indexOf("GEOCCS")>=0||e.indexOf("PROJCS")>=0||e.indexOf("LOCAL_CS")>=0)return this.parseWKT(e),this.deriveConstants(),this.loadProjCode(this.projName),void 0;if(0==e.indexOf("urn:")){var i=e.split(":");"ogc"!=i[1]&&"x-ogc"!=i[1]||"def"!=i[2]||"crs"!=i[3]||(e=i[4]+":"+i[i.length-1])}else if(0==e.indexOf("http://")){var n=e.split("#");n[0].match(/epsg.org/)?e="EPSG:"+n[1]:n[0].match(/RIG.xml/)&&(e="IGNF:"+n[1])}this.srsCode=e.toUpperCase(),0==this.srsCode.indexOf("EPSG")?(this.srsCode=this.srsCode,this.srsAuth="epsg",this.srsProjNumber=this.srsCode.substring(5)):0==this.srsCode.indexOf("IGNF")?(this.srsCode=this.srsCode,this.srsAuth="IGNF",this.srsProjNumber=this.srsCode.substring(5)):0==this.srsCode.indexOf("CRS")?(this.srsCode=this.srsCode,this.srsAuth="CRS",this.srsProjNumber=this.srsCode.substring(4)):(this.srsAuth="",this.srsProjNumber=this.srsCode),this.loadProjDefinition()},loadProjDefinition:function(){if(proj4js.defs[this.srsCode])return this.defsLoaded(),void 0;var e=proj4js.getScriptLocation()+"defs/"+this.srsAuth.toUpperCase()+this.srsProjNumber+".js";proj4js.loadScript(e,proj4js.bind(this.defsLoaded,this),proj4js.bind(this.loadFromService,this),proj4js.bind(this.checkDefsLoaded,this))},loadFromService:function(){var e=proj4js.defsLookupService+"/"+this.srsAuth+"/"+this.srsProjNumber+"/proj4js/";proj4js.loadScript(e,proj4js.bind(this.defsLoaded,this),proj4js.bind(this.defsFailed,this),proj4js.bind(this.checkDefsLoaded,this))},defsLoaded:function(){this.parseDefs(),this.loadProjCode(this.projName)},checkDefsLoaded:function(){return proj4js.defs[this.srsCode]?!0:!1},defsFailed:function(){proj4js.reportError("failed to load projection definition for: "+this.srsCode),proj4js.defs[this.srsCode]=proj4js.defs.WGS84,this.defsLoaded()},loadProjCode:function(e){if(proj4js.Proj[e])return this.initTransforms(),void 0;var t=proj4js.getScriptLocation()+"projCode/"+e+".js";proj4js.loadScript(t,proj4js.bind(this.loadProjCodeSuccess,this,e),proj4js.bind(this.loadProjCodeFailure,this,e),proj4js.bind(this.checkCodeLoaded,this,e))},loadProjCodeSuccess:function(e){proj4js.Proj[e].dependsOn?this.loadProjCode(proj4js.Proj[e].dependsOn):this.initTransforms()},loadProjCodeFailure:function(e){proj4js.reportError("failed to find projection file for: "+e)},checkCodeLoaded:function(e){return proj4js.Proj[e]?!0:!1},initTransforms:function(){if(proj4js.extend(this,proj4js.Proj[this.projName]),this.init(),this.readyToUse=!0,this.queue)for(var e;e=this.queue.shift();)e.call(this,this)},wktRE:/^(\w+)\[(.*)\]$/,parseWKT:function(e){var t=e.match(this.wktRE);if(t){var i,n=t[1],r=t[2],s=r.split(",");i="TOWGS84"==n.toUpperCase()?n:s.shift(),i=i.replace(/^\"/,""),i=i.replace(/\"$/,"");for(var o=[],a=0,l="",h=0;s.length>h;++h){for(var c=s[h],u=0;c.length>u;++u)"["==c.charAt(u)&&++a,"]"==c.charAt(u)&&--a;l+=c,0===a?(o.push(l),l=""):l+=","}switch(n){case"LOCAL_CS":this.projName="identity",this.localCS=!0,this.srsCode=i;break;case"GEOGCS":this.projName="longlat",this.geocsCode=i,this.srsCode||(this.srsCode=i);break;case"PROJCS":this.srsCode=i;break;case"GEOCCS":break;case"PROJECTION":this.projName=proj4js.wktProjections[i];break;case"DATUM":this.datumName=i;break;case"LOCAL_DATUM":this.datumCode="none";break;case"SPHEROID":this.ellps=i,this.a=parseFloat(o.shift()),this.rf=parseFloat(o.shift());break;case"PRIMEM":this.from_greenwich=parseFloat(o.shift());break;case"UNIT":this.units=i,this.unitsPerMeter=parseFloat(o.shift());break;case"PARAMETER":var d=i.toLowerCase(),p=parseFloat(o.shift());switch(d){case"false_easting":this.x0=p;break;case"false_northing":this.y0=p;break;case"scale_factor":this.k0=p;break;case"central_meridian":this.long0=p*proj4js.common.D2R;break;case"latitude_of_origin":this.lat0=p*proj4js.common.D2R;break;case"more_here":break;default:}break;case"TOWGS84":this.datum_params=o;break;case"AXIS":var d=i.toLowerCase(),p=o.shift();switch(p){case"EAST":p="e";break;case"WEST":p="w";break;case"NORTH":p="n";break;case"SOUTH":p="s";break;case"UP":p="u";break;case"DOWN":p="d";break;case"OTHER":default:p=" "}switch(this.axis||(this.axis="enu"),d){case"x":this.axis=p+this.axis.substr(1,2);break;case"y":this.axis=this.axis.substr(0,1)+p+this.axis.substr(2,1);break;case"z":this.axis=this.axis.substr(0,2)+p;break;default:}case"MORE_HERE":break;default:}for(var h=0;o.length>h;++h)this.parseWKT(o[h])}},parseDefs:function(){this.defData=proj4js.defs[this.srsCode];var e,t;if(this.defData){for(var i=this.defData.split("+"),n=0;i.length>n;n++){var r=i[n].split("=");switch(e=r[0].toLowerCase(),t=r[1],e.replace(/\s/gi,"")){case"":break;case"title":this.title=t;break;case"proj":this.projName=t.replace(/\s/gi,"");break;case"units":this.units=t.replace(/\s/gi,"");break;case"datum":this.datumCode=t.replace(/\s/gi,"");break;case"nadgrids":this.nagrids=t.replace(/\s/gi,"");break;case"ellps":this.ellps=t.replace(/\s/gi,"");break;case"a":this.a=parseFloat(t);break;case"b":this.b=parseFloat(t);break;case"rf":this.rf=parseFloat(t);break;case"lat_0":this.lat0=t*proj4js.common.D2R;break;case"lat_1":this.lat1=t*proj4js.common.D2R;break;case"lat_2":this.lat2=t*proj4js.common.D2R;break;case"lat_ts":this.lat_ts=t*proj4js.common.D2R;break;case"lon_0":this.long0=t*proj4js.common.D2R;break;case"alpha":this.alpha=parseFloat(t)*proj4js.common.D2R;break;case"lonc":this.longc=t*proj4js.common.D2R;break;case"x_0":this.x0=parseFloat(t);break;case"y_0":this.y0=parseFloat(t);break;case"k_0":this.k0=parseFloat(t);break;case"k":this.k0=parseFloat(t);break;case"r_a":this.R_A=!0;break;case"zone":this.zone=parseInt(t,10);break;case"south":this.utmSouth=!0;break;case"towgs84":this.datum_params=t.split(",");break;case"to_meter":this.to_meter=parseFloat(t);break;case"from_greenwich":this.from_greenwich=t*proj4js.common.D2R;break;case"pm":t=t.replace(/\s/gi,""),this.from_greenwich=proj4js.PrimeMeridian[t]?proj4js.PrimeMeridian[t]:parseFloat(t),this.from_greenwich*=proj4js.common.D2R;break;case"axis":t=t.replace(/\s/gi,"");var s="ewnsud";3==t.length&&-1!=s.indexOf(t.substr(0,1))&&-1!=s.indexOf(t.substr(1,1))&&-1!=s.indexOf(t.substr(2,1))&&(this.axis=t);break;case"no_defs":break;default:}}this.deriveConstants()}},deriveConstants:function(){if("@null"==this.nagrids&&(this.datumCode="none"),this.datumCode&&"none"!=this.datumCode){var e=proj4js.Datum[this.datumCode];e&&(this.datum_params=e.towgs84?e.towgs84.split(","):null,this.ellps=e.ellipse,this.datumName=e.datumName?e.datumName:this.datumCode)}if(!this.a){var t=proj4js.Ellipsoid[this.ellps]?proj4js.Ellipsoid[this.ellps]:proj4js.Ellipsoid.WGS84;proj4js.extend(this,t)}this.rf&&!this.b&&(this.b=(1-1/this.rf)*this.a),(0===this.rf||Math.abs(this.a-this.b)<proj4js.common.EPSLN)&&(this.sphere=!0,this.b=this.a),this.a2=this.a*this.a,this.b2=this.b*this.b,this.es=(this.a2-this.b2)/this.a2,this.e=Math.sqrt(this.es),this.R_A&&(this.a*=1-this.es*(proj4js.common.SIXTH+this.es*(proj4js.common.RA4+this.es*proj4js.common.RA6)),this.a2=this.a*this.a,this.b2=this.b*this.b,this.es=0),this.ep2=(this.a2-this.b2)/this.b2,this.k0||(this.k0=1),this.axis||(this.axis="enu"),this.datum=new proj4js.datum(this)}});
  proj4js.Proj.longlat={init:function(){},forward:function(e){return e},inverse:function(e){return e}};
  proj4js.Proj.identity=proj4js.Proj.longlat;
  proj4js.defs={WGS84:"+title=long/lat:WGS84 +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees","EPSG:4326":"+title=long/lat:WGS84 +proj=longlat +a=6378137.0 +b=6356752.31424518 +ellps=WGS84 +datum=WGS84 +units=degrees","EPSG:4269":"+title=long/lat:NAD83 +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees","EPSG:3875":"+title= Google Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"},proj4js.defs["EPSG:3785"]=proj4js.defs["EPSG:3875"],proj4js.defs.GOOGLE=proj4js.defs["EPSG:3875"],proj4js.defs["EPSG:900913"]=proj4js.defs["EPSG:3875"],proj4js.defs["EPSG:102113"]=proj4js.defs["EPSG:3875"];
  proj4js.common={PI:3.141592653589793,HALF_PI:1.5707963267948966,TWO_PI:6.283185307179586,FORTPI:.7853981633974483,R2D:57.29577951308232,D2R:.017453292519943295,SEC_TO_RAD:484813681109536e-20,EPSLN:1e-10,MAX_ITER:20,COS_67P5:.3826834323650898,AD_C:1.0026,PJD_UNKNOWN:0,PJD_3PARAM:1,PJD_7PARAM:2,PJD_GRIDSHIFT:3,PJD_WGS84:4,PJD_NODATUM:5,SRS_WGS84_SEMIMAJOR:6378137,SIXTH:.16666666666666666,RA4:.04722222222222222,RA6:.022156084656084655,RV4:.06944444444444445,RV6:.04243827160493827,msfnz:function(e,t,i){var n=e*t;return i/Math.sqrt(1-n*n)},tsfnz:function(e,t,i){var n=e*i,r=.5*e;return n=Math.pow((1-n)/(1+n),r),Math.tan(.5*(this.HALF_PI-t))/n},phi2z:function(e,t){for(var i,n,r=.5*e,s=this.HALF_PI-2*Math.atan(t),o=0;15>=o;o++)if(i=e*Math.sin(s),n=this.HALF_PI-2*Math.atan(t*Math.pow((1-i)/(1+i),r))-s,s+=n,1e-10>=Math.abs(n))return s;return alert("phi2z has NoConvergence"),-9999},qsfnz:function(e,t){var i;return e>1e-7?(i=e*t,(1-e*e)*(t/(1-i*i)-.5/e*Math.log((1-i)/(1+i)))):2*t},asinz:function(e){return Math.abs(e)>1&&(e=e>1?1:-1),Math.asin(e)},e0fn:function(e){return 1-.25*e*(1+e/16*(3+1.25*e))},e1fn:function(e){return.375*e*(1+.25*e*(1+.46875*e))},e2fn:function(e){return.05859375*e*e*(1+.75*e)},e3fn:function(e){return e*e*e*(35/3072)},mlfn:function(e,t,i,n,r){return e*r-t*Math.sin(2*r)+i*Math.sin(4*r)-n*Math.sin(6*r)},srat:function(e,t){return Math.pow((1-e)/(1+e),t)},sign:function(e){return 0>e?-1:1},adjust_lon:function(e){return e=Math.abs(e)<this.PI?e:e-this.sign(e)*this.TWO_PI},adjust_lat:function(e){return e=Math.abs(e)<this.HALF_PI?e:e-this.sign(e)*this.PI},latiso:function(e,t,i){if(Math.abs(t)>this.HALF_PI)return+Number.NaN;if(t==this.HALF_PI)return Number.POSITIVE_INFINITY;if(t==-1*this.HALF_PI)return-1*Number.POSITIVE_INFINITY;var n=e*i;return Math.log(Math.tan((this.HALF_PI+t)/2))+e*Math.log((1-n)/(1+n))/2},fL:function(e,t){return 2*Math.atan(e*Math.exp(t))-this.HALF_PI},invlatiso:function(e,t){var i=this.fL(1,t),n=0,r=0;do n=i,r=e*Math.sin(n),i=this.fL(Math.exp(e*Math.log((1+r)/(1-r))/2),t);while(Math.abs(i-n)>1e-12);return i},sinh:function(e){var t=Math.exp(e);return t=(t-1/t)/2},cosh:function(e){var t=Math.exp(e);return t=(t+1/t)/2},tanh:function(e){var t=Math.exp(e);return t=(t-1/t)/(t+1/t)},asinh:function(e){var t=e>=0?1:-1;return t*Math.log(Math.abs(e)+Math.sqrt(e*e+1))},acosh:function(e){return 2*Math.log(Math.sqrt((e+1)/2)+Math.sqrt((e-1)/2))},atanh:function(e){return Math.log((e-1)/(e+1))/2},gN:function(e,t,i){var n=t*i;return e/Math.sqrt(1-n*n)},pj_enfn:function(e){var t=[];t[0]=this.C00-e*(this.C02+e*(this.C04+e*(this.C06+e*this.C08))),t[1]=e*(this.C22-e*(this.C04+e*(this.C06+e*this.C08)));var i=e*e;return t[2]=i*(this.C44-e*(this.C46+e*this.C48)),i*=e,t[3]=i*(this.C66-e*this.C68),t[4]=i*e*this.C88,t},pj_mlfn:function(e,t,i,n){return i*=t,t*=t,n[0]*e-i*(n[1]+t*(n[2]+t*(n[3]+t*n[4])))},pj_inv_mlfn:function(e,t,i){for(var n=1/(1-t),r=e,s=proj4js.common.MAX_ITER;s;--s){var o=Math.sin(r),a=1-t*o*o;if(a=(this.pj_mlfn(r,o,Math.cos(r),i)-e)*a*Math.sqrt(a)*n,r-=a,Math.abs(a)<proj4js.common.EPSLN)return r}return proj4js.reportError("cass:pj_inv_mlfn: Convergence error"),r},C00:1,C02:.25,C04:.046875,C06:.01953125,C08:.01068115234375,C22:.75,C44:.46875,C46:.013020833333333334,C48:.007120768229166667,C66:.3645833333333333,C68:.005696614583333333,C88:.3076171875};
  proj4js.datum=proj4js.Class({initialize:function(e){if(this.datum_type=proj4js.common.PJD_WGS84,e.datumCode&&"none"==e.datumCode&&(this.datum_type=proj4js.common.PJD_NODATUM),e&&e.datum_params){for(var t=0;e.datum_params.length>t;t++)e.datum_params[t]=parseFloat(e.datum_params[t]);(0!=e.datum_params[0]||0!=e.datum_params[1]||0!=e.datum_params[2])&&(this.datum_type=proj4js.common.PJD_3PARAM),e.datum_params.length>3&&(0!=e.datum_params[3]||0!=e.datum_params[4]||0!=e.datum_params[5]||0!=e.datum_params[6])&&(this.datum_type=proj4js.common.PJD_7PARAM,e.datum_params[3]*=proj4js.common.SEC_TO_RAD,e.datum_params[4]*=proj4js.common.SEC_TO_RAD,e.datum_params[5]*=proj4js.common.SEC_TO_RAD,e.datum_params[6]=e.datum_params[6]/1e6+1)}e&&(this.a=e.a,this.b=e.b,this.es=e.es,this.ep2=e.ep2,this.datum_params=e.datum_params)},compare_datums:function(e){return this.datum_type!=e.datum_type?!1:this.a!=e.a||Math.abs(this.es-e.es)>5e-11?!1:this.datum_type==proj4js.common.PJD_3PARAM?this.datum_params[0]==e.datum_params[0]&&this.datum_params[1]==e.datum_params[1]&&this.datum_params[2]==e.datum_params[2]:this.datum_type==proj4js.common.PJD_7PARAM?this.datum_params[0]==e.datum_params[0]&&this.datum_params[1]==e.datum_params[1]&&this.datum_params[2]==e.datum_params[2]&&this.datum_params[3]==e.datum_params[3]&&this.datum_params[4]==e.datum_params[4]&&this.datum_params[5]==e.datum_params[5]&&this.datum_params[6]==e.datum_params[6]:this.datum_type==proj4js.common.PJD_GRIDSHIFT||e.datum_type==proj4js.common.PJD_GRIDSHIFT?(alert("ERROR: Grid shift transformations are not implemented."),!1):!0},geodetic_to_geocentric:function(e){var t,i,n,r,s,o,a,l=e.x,h=e.y,c=e.z?e.z:0,u=0;if(-proj4js.common.HALF_PI>h&&h>-1.001*proj4js.common.HALF_PI)h=-proj4js.common.HALF_PI;else if(h>proj4js.common.HALF_PI&&1.001*proj4js.common.HALF_PI>h)h=proj4js.common.HALF_PI;else if(-proj4js.common.HALF_PI>h||h>proj4js.common.HALF_PI)return proj4js.reportError("geocent:lat out of range:"+h),null;return l>proj4js.common.PI&&(l-=2*proj4js.common.PI),s=Math.sin(h),a=Math.cos(h),o=s*s,r=this.a/Math.sqrt(1-this.es*o),t=(r+c)*a*Math.cos(l),i=(r+c)*a*Math.sin(l),n=(r*(1-this.es)+c)*s,e.x=t,e.y=i,e.z=n,u},geocentric_to_geodetic:function(e){var t,i,n,r,s,o,a,l,h,c,u,d,p,f,m,g,y,v=1e-12,b=v*v,L=30,x=e.x,C=e.y,w=e.z?e.z:0;if(p=!1,t=Math.sqrt(x*x+C*C),i=Math.sqrt(x*x+C*C+w*w),v>t/this.a){if(p=!0,m=0,v>i/this.a)return g=proj4js.common.HALF_PI,y=-this.b,void 0}else m=Math.atan2(C,x);n=w/i,r=t/i,s=1/Math.sqrt(1-this.es*(2-this.es)*r*r),l=r*(1-this.es)*s,h=n*s,f=0;do f++,a=this.a/Math.sqrt(1-this.es*h*h),y=t*l+w*h-a*(1-this.es*h*h),o=this.es*a/(a+y),s=1/Math.sqrt(1-o*(2-o)*r*r),c=r*(1-o)*s,u=n*s,d=u*l-c*h,l=c,h=u;while(d*d>b&&L>f);return g=Math.atan(u/Math.abs(c)),e.x=m,e.y=g,e.z=y,e},geocentric_to_geodetic_noniter:function(e){var t,i,n,r,s,o,a,l,h,c,u,d,p,f,m,g,y,v=e.x,b=e.y,L=e.z?e.z:0;if(v=parseFloat(v),b=parseFloat(b),L=parseFloat(L),y=!1,0!=v)t=Math.atan2(b,v);else if(b>0)t=proj4js.common.HALF_PI;else if(0>b)t=-proj4js.common.HALF_PI;else if(y=!0,t=0,L>0)i=proj4js.common.HALF_PI;else{if(!(0>L))return i=proj4js.common.HALF_PI,n=-this.b,void 0;i=-proj4js.common.HALF_PI}return s=v*v+b*b,r=Math.sqrt(s),o=L*proj4js.common.AD_C,l=Math.sqrt(o*o+s),c=o/l,d=r/l,u=c*c*c,a=L+this.b*this.ep2*u,g=r-this.a*this.es*d*d*d,h=Math.sqrt(a*a+g*g),p=a/h,f=g/h,m=this.a/Math.sqrt(1-this.es*p*p),n=f>=proj4js.common.COS_67P5?r/f-m:-proj4js.common.COS_67P5>=f?r/-f-m:L/p+m*(this.es-1),0==y&&(i=Math.atan(p/f)),e.x=t,e.y=i,e.z=n,e},geocentric_to_wgs84:function(e){if(this.datum_type==proj4js.common.PJD_3PARAM)e.x+=this.datum_params[0],e.y+=this.datum_params[1],e.z+=this.datum_params[2];else if(this.datum_type==proj4js.common.PJD_7PARAM){var t=this.datum_params[0],i=this.datum_params[1],n=this.datum_params[2],r=this.datum_params[3],s=this.datum_params[4],o=this.datum_params[5],a=this.datum_params[6],l=a*(e.x-o*e.y+s*e.z)+t,h=a*(o*e.x+e.y-r*e.z)+i,c=a*(-s*e.x+r*e.y+e.z)+n;e.x=l,e.y=h,e.z=c}},geocentric_from_wgs84:function(e){if(this.datum_type==proj4js.common.PJD_3PARAM)e.x-=this.datum_params[0],e.y-=this.datum_params[1],e.z-=this.datum_params[2];else if(this.datum_type==proj4js.common.PJD_7PARAM){var t=this.datum_params[0],i=this.datum_params[1],n=this.datum_params[2],r=this.datum_params[3],s=this.datum_params[4],o=this.datum_params[5],a=this.datum_params[6],l=(e.x-t)/a,h=(e.y-i)/a,c=(e.z-n)/a;e.x=l+o*h-s*c,e.y=-o*l+h+r*c,e.z=s*l-r*h+c}}});
  proj4js.Point=proj4js.Class({initialize:function(e,t,i){if("object"==typeof e)this.x=e[0],this.y=e[1],this.z=e[2]||0;else if("string"==typeof e&&t===void 0){var n=e.split(",");this.x=parseFloat(n[0]),this.y=parseFloat(n[1]),this.z=parseFloat(n[2])||0}else this.x=e,this.y=t,this.z=i||0},clone:function(){return new proj4js.Point(this.x,this.y,this.z)},toString:function(){return"x="+this.x+",y="+this.y},toShortString:function(){return this.x+", "+this.y}});
  proj4js.PrimeMeridian={greenwich:0,lisbon:-9.131906111111,paris:2.337229166667,bogota:-74.080916666667,madrid:-3.687938888889,rome:12.452333333333,bern:7.439583333333,jakarta:106.807719444444,ferro:-17.666666666667,brussels:4.367975,stockholm:18.058277777778,athens:23.7163375,oslo:10.722916666667};
  proj4js.Ellipsoid={MERIT:{a:6378137,rf:298.257,ellipseName:"MERIT 1983"},SGS85:{a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"},GRS80:{a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"},IAU76:{a:6378140,rf:298.257,ellipseName:"IAU 1976"},airy:{a:6377563.396,b:6356256.91,ellipseName:"Airy 1830"},"APL4.":{a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"},NWL9D:{a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"},mod_airy:{a:6377340.189,b:6356034.446,ellipseName:"Modified Airy"},andrae:{a:6377104.43,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"},aust_SA:{a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"},GRS67:{a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"},bessel:{a:6377397.155,rf:299.1528128,ellipseName:"Bessel 1841"},bess_nam:{a:6377483.865,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"},clrk66:{a:6378206.4,b:6356583.8,ellipseName:"Clarke 1866"},clrk80:{a:6378249.145,rf:293.4663,ellipseName:"Clarke 1880 mod."},CPM:{a:6375738.7,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"},delmbr:{a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"},engelis:{a:6378136.05,rf:298.2566,ellipseName:"Engelis 1985"},evrst30:{a:6377276.345,rf:300.8017,ellipseName:"Everest 1830"},evrst48:{a:6377304.063,rf:300.8017,ellipseName:"Everest 1948"},evrst56:{a:6377301.243,rf:300.8017,ellipseName:"Everest 1956"},evrst69:{a:6377295.664,rf:300.8017,ellipseName:"Everest 1969"},evrstSS:{a:6377298.556,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"},fschr60:{a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"},fschr60m:{a:6378155,rf:298.3,ellipseName:"Fischer 1960"},fschr68:{a:6378150,rf:298.3,ellipseName:"Fischer 1968"},helmert:{a:6378200,rf:298.3,ellipseName:"Helmert 1906"},hough:{a:6378270,rf:297,ellipseName:"Hough"},intl:{a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"},kaula:{a:6378163,rf:298.24,ellipseName:"Kaula 1961"},lerch:{a:6378139,rf:298.257,ellipseName:"Lerch 1979"},mprts:{a:6397300,rf:191,ellipseName:"Maupertius 1738"},new_intl:{a:6378157.5,b:6356772.2,ellipseName:"New International 1967"},plessis:{a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"},krass:{a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"},SEasia:{a:6378155,b:6356773.3205,ellipseName:"Southeast Asia"},walbeck:{a:6376896,b:6355834.8467,ellipseName:"Walbeck"},WGS60:{a:6378165,rf:298.3,ellipseName:"WGS 60"},WGS66:{a:6378145,rf:298.25,ellipseName:"WGS 66"},WGS72:{a:6378135,rf:298.26,ellipseName:"WGS 72"},WGS84:{a:6378137,rf:298.257223563,ellipseName:"WGS 84"},sphere:{a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"}};
  proj4js.Datum={WGS84:{towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"},GGRS87:{towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"},NAD83:{towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"},NAD27:{nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"},potsdam:{towgs84:"606.0,23.0,413.0",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"},carthage:{towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"},hermannskogel:{towgs84:"653.0,-212.0,449.0",ellipse:"bessel",datumName:"Hermannskogel"},ire65:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"},nzgd49:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"},OSGB36:{towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Airy 1830"}};
  proj4js.WGS84=new proj4js.Proj("WGS84");
  proj4js.Datum.OSB36=proj4js.Datum.OSGB36;
  proj4js.wktProjections={"Lambert Tangential Conformal Conic Projection":"lcc",Mercator:"merc","Popular Visualisation Pseudo Mercator":"merc",Mercator_1SP:"merc",Transverse_Mercator:"tmerc","Transverse Mercator":"tmerc","Lambert Azimuthal Equal Area":"laea","Universal Transverse Mercator System":"utm"};
  proj4js.Proj.aea={init:function(){return Math.abs(this.lat1+this.lat2)<proj4js.common.EPSLN?(proj4js.reportError("aeaInitEqualLatitudes"),void 0):(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=proj4js.common.msfnz(this.e3,this.sin_po,this.cos_po),this.qs1=proj4js.common.qsfnz(this.e3,this.sin_po,this.cos_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=proj4js.common.msfnz(this.e3,this.sin_po,this.cos_po),this.qs2=proj4js.common.qsfnz(this.e3,this.sin_po,this.cos_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=proj4js.common.qsfnz(this.e3,this.sin_po,this.cos_po),this.ns0=Math.abs(this.lat1-this.lat2)>proj4js.common.EPSLN?(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0,void 0)},forward:function(e){var t=e.x,i=e.y;this.sin_phi=Math.sin(i),this.cos_phi=Math.cos(i);var n=proj4js.common.qsfnz(this.e3,this.sin_phi,this.cos_phi),r=this.a*Math.sqrt(this.c-this.ns0*n)/this.ns0,s=this.ns0*proj4js.common.adjust_lon(t-this.long0),o=r*Math.sin(s)+this.x0,a=this.rh-r*Math.cos(s)+this.y0;return e.x=o,e.y=a,e},inverse:function(e){var t,i,n,r,s,o;return e.x-=this.x0,e.y=this.rh-e.y+this.y0,this.ns0>=0?(t=Math.sqrt(e.x*e.x+e.y*e.y),n=1):(t=-Math.sqrt(e.x*e.x+e.y*e.y),n=-1),r=0,0!=t&&(r=Math.atan2(n*e.x,n*e.y)),n=t*this.ns0/this.a,i=(this.c-n*n)/this.ns0,this.e3>=1e-10?(n=1-.5*(1-this.es)*Math.log((1-this.e3)/(1+this.e3))/this.e3,o=Math.abs(Math.abs(n)-Math.abs(i))>1e-10?this.phi1z(this.e3,i):i>=0?.5*proj4js.common.PI:-.5*proj4js.common.PI):o=this.phi1z(this.e3,i),s=proj4js.common.adjust_lon(r/this.ns0+this.long0),e.x=s,e.y=o,e},phi1z:function(e,t){var i,n,r,s,o,a=proj4js.common.asinz(.5*t);if(proj4js.common.EPSLN>e)return a;for(var l=e*e,h=1;25>=h;h++)if(i=Math.sin(a),n=Math.cos(a),r=e*i,s=1-r*r,o=.5*s*s/n*(t/(1-l)-i/s+.5/e*Math.log((1-r)/(1+r))),a+=o,1e-7>=Math.abs(o))return a;return proj4js.reportError("aea:phi1z:Convergence error"),null}};
  proj4js.Proj.sterea={dependsOn:"gauss",init:function(){return proj4js.Proj.gauss.init.apply(this),this.rc?(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"),void 0):(proj4js.reportError("sterea:init:E_ERROR_0"),void 0)},forward:function(e){var t,i,n,r;return e.x=proj4js.common.adjust_lon(e.x-this.long0),proj4js.Proj.gauss.forward.apply(this,[e]),t=Math.sin(e.y),i=Math.cos(e.y),n=Math.cos(e.x),r=this.k0*this.R2/(1+this.sinc0*t+this.cosc0*i*n),e.x=r*i*Math.sin(e.x),e.y=r*(this.cosc0*t-this.sinc0*i*n),e.x=this.a*e.x+this.x0,e.y=this.a*e.y+this.y0,e},inverse:function(e){var t,i,n,r,s;if(e.x=(e.x-this.x0)/this.a,e.y=(e.y-this.y0)/this.a,e.x/=this.k0,e.y/=this.k0,s=Math.sqrt(e.x*e.x+e.y*e.y)){var o=2*Math.atan2(s,this.R2);t=Math.sin(o),i=Math.cos(o),r=Math.asin(i*this.sinc0+e.y*t*this.cosc0/s),n=Math.atan2(e.x*t,s*this.cosc0*i-e.y*this.sinc0*t)}else r=this.phic0,n=0;return e.x=n,e.y=r,proj4js.Proj.gauss.inverse.apply(this,[e]),e.x=proj4js.common.adjust_lon(e.x+this.long0),e}};
  proj4js.Proj.poly={init:function(){0==this.lat0&&(this.lat0=90),this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=proj4js.common.e0fn(this.es),this.e1=proj4js.common.e1fn(this.es),this.e2=proj4js.common.e2fn(this.es),this.e3=proj4js.common.e3fn(this.es),this.ml0=proj4js.common.mlfn(this.e0,this.e1,this.e2,this.e3,this.lat0)},forward:function(e){var t,i,n,r,s,o,a,l=e.x,h=e.y;return n=proj4js.common.adjust_lon(l-this.long0),1e-7>=Math.abs(h)?(o=this.x0+this.a*n,a=this.y0-this.a*this.ml0):(t=Math.sin(h),i=Math.cos(h),r=proj4js.common.mlfn(this.e0,this.e1,this.e2,this.e3,h),s=proj4js.common.msfnz(this.e,t,i),n=t,o=this.x0+this.a*s*Math.sin(n)/t,a=this.y0+this.a*(r-this.ml0+s*(1-Math.cos(n))/t)),e.x=o,e.y=a,e},inverse:function(e){var t,i,n,r,s,o;if(e.x-=this.x0,e.y-=this.y0,t=this.ml0+e.y/this.a,r=0,1e-7>=Math.abs(t))s=e.x/this.a+this.long0,o=0;else{if(i=t*t+e.x/this.a*(e.x/this.a),r=phi4z(this.es,this.e0,this.e1,this.e2,this.e3,this.al,i,n,o),1!=r)return r;s=proj4js.common.adjust_lon(proj4js.common.asinz(e.x*n/this.a)/Math.sin(o)+this.long0)}return e.x=s,e.y=o,e}};
  proj4js.Proj.equi={init:function(){this.x0||(this.x0=0),this.y0||(this.y0=0),this.lat0||(this.lat0=0),this.long0||(this.long0=0)},forward:function(e){var t=e.x,i=e.y,n=proj4js.common.adjust_lon(t-this.long0),r=this.x0+this.a*n*Math.cos(this.lat0),s=this.y0+this.a*i;return this.t1=r,this.t2=Math.cos(this.lat0),e.x=r,e.y=s,e},inverse:function(e){e.x-=this.x0,e.y-=this.y0;var t=e.y/this.a;Math.abs(t)>proj4js.common.HALF_PI&&proj4js.reportError("equi:Inv:DataError");var i=proj4js.common.adjust_lon(this.long0+e.x/(this.a*Math.cos(this.lat0)));e.x=i,e.y=t}};
  proj4js.Proj.merc={init:function(){this.lat_ts&&(this.k0=this.sphere?Math.cos(this.lat_ts):proj4js.common.msfnz(this.es,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))},forward:function(e){var t=e.x,i=e.y;if(i*proj4js.common.R2D>90&&-90>i*proj4js.common.R2D&&t*proj4js.common.R2D>180&&-180>t*proj4js.common.R2D)return proj4js.reportError("merc:forward: llInputOutOfRange: "+t+" : "+i),null;var n,r;if(Math.abs(Math.abs(i)-proj4js.common.HALF_PI)<=proj4js.common.EPSLN)return proj4js.reportError("merc:forward: ll2mAtPoles"),null;if(this.sphere)n=this.x0+this.a*this.k0*proj4js.common.adjust_lon(t-this.long0),r=this.y0+this.a*this.k0*Math.log(Math.tan(proj4js.common.FORTPI+.5*i));else{var s=Math.sin(i),o=proj4js.common.tsfnz(this.e,i,s);n=this.x0+this.a*this.k0*proj4js.common.adjust_lon(t-this.long0),r=this.y0-this.a*this.k0*Math.log(o)}return e.x=n,e.y=r,e},inverse:function(e){var t,i,n=e.x-this.x0,r=e.y-this.y0;if(this.sphere)i=proj4js.common.HALF_PI-2*Math.atan(Math.exp(-r/this.a*this.k0));else{var s=Math.exp(-r/(this.a*this.k0));if(i=proj4js.common.phi2z(this.e,s),-9999==i)return proj4js.reportError("merc:inverse: lat = -9999"),null}return t=proj4js.common.adjust_lon(this.long0+n/(this.a*this.k0)),e.x=t,e.y=i,e}};
  proj4js.Proj.utm={dependsOn:"tmerc",init:function(){return this.zone?(this.lat0=0,this.long0=(6*Math.abs(this.zone)-183)*proj4js.common.D2R,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,proj4js.Proj.tmerc.init.apply(this),this.forward=proj4js.Proj.tmerc.forward,this.inverse=proj4js.Proj.tmerc.inverse,void 0):(proj4js.reportError("utm:init: zone must be specified for UTM"),void 0)}};
  proj4js.Proj.eqdc={init:function(){this.mode||(this.mode=0),this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=proj4js.common.e0fn(this.es),this.e1=proj4js.common.e1fn(this.es),this.e2=proj4js.common.e2fn(this.es),this.e3=proj4js.common.e3fn(this.es),this.sinphi=Math.sin(this.lat1),this.cosphi=Math.cos(this.lat1),this.ms1=proj4js.common.msfnz(this.e,this.sinphi,this.cosphi),this.ml1=proj4js.common.mlfn(this.e0,this.e1,this.e2,this.e3,this.lat1),0!=this.mode?(Math.abs(this.lat1+this.lat2)<proj4js.common.EPSLN&&proj4js.reportError("eqdc:Init:EqualLatitudes"),this.sinphi=Math.sin(this.lat2),this.cosphi=Math.cos(this.lat2),this.ms2=proj4js.common.msfnz(this.e,this.sinphi,this.cosphi),this.ml2=proj4js.common.mlfn(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=Math.abs(this.lat1-this.lat2)>=proj4js.common.EPSLN?(this.ms1-this.ms2)/(this.ml2-this.ml1):this.sinphi):this.ns=this.sinphi,this.g=this.ml1+this.ms1/this.ns,this.ml0=proj4js.common.mlfn(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0)},forward:function(e){var t=e.x,i=e.y,n=proj4js.common.mlfn(this.e0,this.e1,this.e2,this.e3,i),r=this.a*(this.g-n),s=this.ns*proj4js.common.adjust_lon(t-this.long0),o=this.x0+r*Math.sin(s),a=this.y0+this.rh-r*Math.cos(s);return e.x=o,e.y=a,e},inverse:function(e){e.x-=this.x0,e.y=this.rh-e.y+this.y0;var t,i;this.ns>=0?(i=Math.sqrt(e.x*e.x+e.y*e.y),t=1):(i=-Math.sqrt(e.x*e.x+e.y*e.y),t=-1);var n=0;0!=i&&(n=Math.atan2(t*e.x,t*e.y));var r=this.g-i/this.a,s=this.phi3z(r,this.e0,this.e1,this.e2,this.e3),o=proj4js.common.adjust_lon(this.long0+n/this.ns);return e.x=o,e.y=s,e},phi3z:function(e,t,i,n,r){var s,o;s=e;for(var a=0;15>a;a++)if(o=(e+i*Math.sin(2*s)-n*Math.sin(4*s)+r*Math.sin(6*s))/t-s,s+=o,1e-10>=Math.abs(o))return s;return proj4js.reportError("PHI3Z-CONV:Latitude failed to converge after 15 iterations"),null}};
  proj4js.Proj.tmerc={init:function(){this.e0=proj4js.common.e0fn(this.es),this.e1=proj4js.common.e1fn(this.es),this.e2=proj4js.common.e2fn(this.es),this.e3=proj4js.common.e3fn(this.es),this.ml0=this.a*proj4js.common.mlfn(this.e0,this.e1,this.e2,this.e3,this.lat0)},forward:function(e){var t,i,n,r=e.x,s=e.y,o=proj4js.common.adjust_lon(r-this.long0),a=Math.sin(s),l=Math.cos(s);if(this.sphere){var h=l*Math.sin(o);if(1e-10>Math.abs(Math.abs(h)-1))return proj4js.reportError("tmerc:forward: Point projects into infinity"),93;i=.5*this.a*this.k0*Math.log((1+h)/(1-h)),t=Math.acos(l*Math.cos(o)/Math.sqrt(1-h*h)),0>s&&(t=-t),n=this.a*this.k0*(t-this.lat0)}else{var c=l*o,u=Math.pow(c,2),d=this.ep2*Math.pow(l,2),p=Math.tan(s),f=Math.pow(p,2);t=1-this.es*Math.pow(a,2);var m=this.a/Math.sqrt(t),g=this.a*proj4js.common.mlfn(this.e0,this.e1,this.e2,this.e3,s);i=this.k0*m*c*(1+u/6*(1-f+d+u/20*(5-18*f+Math.pow(f,2)+72*d-58*this.ep2)))+this.x0,n=this.k0*(g-this.ml0+m*p*u*(.5+u/24*(5-f+9*d+4*Math.pow(d,2)+u/30*(61-58*f+Math.pow(f,2)+600*d-330*this.ep2))))+this.y0}return e.x=i,e.y=n,e},inverse:function(e){var t,i,n,r,s,o,a=6;if(this.sphere){var l=Math.exp(e.x/(this.a*this.k0)),h=.5*(l-1/l),c=this.lat0+e.y/(this.a*this.k0),u=Math.cos(c);t=Math.sqrt((1-u*u)/(1+h*h)),s=proj4js.common.asinz(t),0>c&&(s=-s),o=0==h&&0==u?this.long0:proj4js.common.adjust_lon(Math.atan2(h,u)+this.long0)}else{var d=e.x-this.x0,p=e.y-this.y0;for(t=(this.ml0+p/this.k0)/this.a,i=t,r=0;!0&&(n=(t+this.e1*Math.sin(2*i)-this.e2*Math.sin(4*i)+this.e3*Math.sin(6*i))/this.e0-i,i+=n,!(Math.abs(n)<=proj4js.common.EPSLN));r++)if(r>=a)return proj4js.reportError("tmerc:inverse: Latitude failed to converge"),95;if(Math.abs(i)<proj4js.common.HALF_PI){var f=Math.sin(i),m=Math.cos(i),g=Math.tan(i),y=this.ep2*Math.pow(m,2),v=Math.pow(y,2),b=Math.pow(g,2),L=Math.pow(b,2);t=1-this.es*Math.pow(f,2);var x=this.a/Math.sqrt(t),C=x*(1-this.es)/t,w=d/(x*this.k0),S=Math.pow(w,2);s=i-x*g*S/C*(.5-S/24*(5+3*b+10*y-4*v-9*this.ep2-S/30*(61+90*b+298*y+45*L-252*this.ep2-3*v))),o=proj4js.common.adjust_lon(this.long0+w*(1-S/6*(1+2*b+y-S/20*(5-2*y+28*b-3*v+8*this.ep2+24*L)))/m)}else s=proj4js.common.HALF_PI*proj4js.common.sign(p),o=this.long0}return e.x=o,e.y=s,e}},proj4js.defs.GOOGLE="+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs",proj4js.defs["EPSG:900913"]=proj4js.defs.GOOGLE;
  proj4js.Proj.gstmerc={init:function(){var e=this.b/this.a;this.e=Math.sqrt(1-e*e),this.lc=this.long0,this.rs=Math.sqrt(1+this.e*this.e*Math.pow(Math.cos(this.lat0),4)/(1-this.e*this.e));var t=Math.sin(this.lat0),i=Math.asin(t/this.rs),n=Math.sin(i);this.cp=proj4js.common.latiso(0,i,n)-this.rs*proj4js.common.latiso(this.e,this.lat0,t),this.n2=this.k0*this.a*Math.sqrt(1-this.e*this.e)/(1-this.e*this.e*t*t),this.xs=this.x0,this.ys=this.y0-this.n2*i,this.title||(this.title="Gauss Schreiber transverse mercator")},forward:function(e){var t=e.x,i=e.y,n=this.rs*(t-this.lc),r=this.cp+this.rs*proj4js.common.latiso(this.e,i,Math.sin(i)),s=Math.asin(Math.sin(n)/proj4js.common.cosh(r)),o=proj4js.common.latiso(0,s,Math.sin(s));return e.x=this.xs+this.n2*o,e.y=this.ys+this.n2*Math.atan(proj4js.common.sinh(r)/Math.cos(n)),e},inverse:function(e){var t=e.x,i=e.y,n=Math.atan(proj4js.common.sinh((t-this.xs)/this.n2)/Math.cos((i-this.ys)/this.n2)),r=Math.asin(Math.sin((i-this.ys)/this.n2)/proj4js.common.cosh((t-this.xs)/this.n2)),s=proj4js.common.latiso(0,r,Math.sin(r));return e.x=this.lc+n/this.rs,e.y=proj4js.common.invlatiso(this.e,(s-this.cp)/this.rs),e}};
  proj4js.Proj.ortho={init:function(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)},forward:function(e){var t,i,n,r,s,o,a=e.x,l=e.y;if(n=proj4js.common.adjust_lon(a-this.long0),t=Math.sin(l),i=Math.cos(l),r=Math.cos(n),o=this.sin_p14*t+this.cos_p14*i*r,s=1,o>0||Math.abs(o)<=proj4js.common.EPSLN)var h=this.a*s*i*Math.sin(n),c=this.y0+this.a*s*(this.cos_p14*t-this.sin_p14*i*r);else proj4js.reportError("orthoFwdPointError");return e.x=h,e.y=c,e},inverse:function(e){var t,i,n,r,s,o,a;return e.x-=this.x0,e.y-=this.y0,t=Math.sqrt(e.x*e.x+e.y*e.y),t>this.a+1e-7&&proj4js.reportError("orthoInvDataError"),i=proj4js.common.asinz(t/this.a),n=Math.sin(i),r=Math.cos(i),o=this.long0,Math.abs(t)<=proj4js.common.EPSLN&&(a=this.lat0),a=proj4js.common.asinz(r*this.sin_p14+e.y*n*this.cos_p14/t),s=Math.abs(this.lat0)-proj4js.common.HALF_PI,Math.abs(s)<=proj4js.common.EPSLN&&(o=this.lat0>=0?proj4js.common.adjust_lon(this.long0+Math.atan2(e.x,-e.y)):proj4js.common.adjust_lon(this.long0-Math.atan2(-e.x,e.y))),s=r-this.sin_p14*Math.sin(a),e.x=o,e.y=a,e}};
  proj4js.Proj.krovak={init:function(){this.a=6377397.155,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.4334234309119251),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq},forward:function(e){var t,i,n,r,s,o,a,l=e.x,h=e.y,c=proj4js.common.adjust_lon(l-this.long0);return t=Math.pow((1+this.e*Math.sin(h))/(1-this.e*Math.sin(h)),this.alfa*this.e/2),i=2*(Math.atan(this.k*Math.pow(Math.tan(h/2+this.s45),this.alfa)/t)-this.s45),n=-c*this.alfa,r=Math.asin(Math.cos(this.ad)*Math.sin(i)+Math.sin(this.ad)*Math.cos(i)*Math.cos(n)),s=Math.asin(Math.cos(i)*Math.sin(n)/Math.cos(r)),o=this.n*s,a=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(r/2+this.s45),this.n),e.y=a*Math.cos(o)/1,e.x=a*Math.sin(o)/1,this.czech&&(e.y*=-1,e.x*=-1),e},inverse:function(e){var t,i,n,r,s,o,a,l,h=e.x;e.x=e.y,e.y=h,this.czech&&(e.y*=-1,e.x*=-1),o=Math.sqrt(e.x*e.x+e.y*e.y),s=Math.atan2(e.y,e.x),r=s/Math.sin(this.s0),n=2*(Math.atan(Math.pow(this.ro0/o,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),t=Math.asin(Math.cos(this.ad)*Math.sin(n)-Math.sin(this.ad)*Math.cos(n)*Math.cos(r)),i=Math.asin(Math.cos(n)*Math.sin(r)/Math.cos(t)),e.x=this.long0-i/this.alfa,a=t,l=0;var c=0;do e.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(t/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(a))/(1-this.e*Math.sin(a)),this.e/2))-this.s45),1e-10>Math.abs(a-e.y)&&(l=1),a=e.y,c+=1;while(0==l&&15>c);return c>=15?(proj4js.reportError("PHI3Z-CONV:Latitude failed to converge after 15 iterations"),null):e}};
  proj4js.Proj.somerc={init:function(){var e=this.lat0;this.lambda0=this.long0;var t=Math.sin(e),i=this.a,n=this.rf,r=1/n,s=2*r-Math.pow(r,2),o=this.e=Math.sqrt(s);this.R=this.k0*i*Math.sqrt(1-s)/(1-s*Math.pow(t,2)),this.alpha=Math.sqrt(1+s/(1-s)*Math.pow(Math.cos(e),4)),this.b0=Math.asin(t/this.alpha),this.K=Math.log(Math.tan(Math.PI/4+this.b0/2))-this.alpha*Math.log(Math.tan(Math.PI/4+e/2))+this.alpha*o/2*Math.log((1+o*t)/(1-o*t))},forward:function(e){var t=Math.log(Math.tan(Math.PI/4-e.y/2)),i=this.e/2*Math.log((1+this.e*Math.sin(e.y))/(1-this.e*Math.sin(e.y))),n=-this.alpha*(t+i)+this.K,r=2*(Math.atan(Math.exp(n))-Math.PI/4),s=this.alpha*(e.x-this.lambda0),o=Math.atan(Math.sin(s)/(Math.sin(this.b0)*Math.tan(r)+Math.cos(this.b0)*Math.cos(s))),a=Math.asin(Math.cos(this.b0)*Math.sin(r)-Math.sin(this.b0)*Math.cos(r)*Math.cos(s));return e.y=this.R/2*Math.log((1+Math.sin(a))/(1-Math.sin(a)))+this.y0,e.x=this.R*o+this.x0,e},inverse:function(e){for(var t=e.x-this.x0,i=e.y-this.y0,n=t/this.R,r=2*(Math.atan(Math.exp(i/this.R))-Math.PI/4),s=Math.asin(Math.cos(this.b0)*Math.sin(r)+Math.sin(this.b0)*Math.cos(r)*Math.cos(n)),o=Math.atan(Math.sin(n)/(Math.cos(this.b0)*Math.cos(n)-Math.sin(this.b0)*Math.tan(r))),a=this.lambda0+o/this.alpha,l=0,h=s,c=-1e3,u=0;Math.abs(h-c)>1e-7;){if(++u>20)return proj4js.reportError("omercFwdInfinity"),void 0;l=1/this.alpha*(Math.log(Math.tan(Math.PI/4+s/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(h))/2)),c=h,h=2*Math.atan(Math.exp(l))-Math.PI/2}return e.x=a,e.y=h,e}};
  proj4js.Proj.stere={ssfn_:function(e,t,i){return t*=i,Math.tan(.5*(proj4js.common.HALF_PI+e))*Math.pow((1-t)/(1+t),.5*i)},TOL:1e-8,NITER:8,CONV:1e-10,S_POLE:0,N_POLE:1,OBLIQ:2,EQUIT:3,init:function(){this.phits=this.lat_ts?this.lat_ts:proj4js.common.HALF_PI;var e=Math.abs(this.lat0);if(this.mode=Math.abs(e)-proj4js.common.HALF_PI<proj4js.common.EPSLN?0>this.lat0?this.S_POLE:this.N_POLE:e>proj4js.common.EPSLN?this.OBLIQ:this.EQUIT,this.phits=Math.abs(this.phits),this.es){var t;switch(this.mode){case this.N_POLE:case this.S_POLE:Math.abs(this.phits-proj4js.common.HALF_PI)<proj4js.common.EPSLN?this.akm1=2*this.k0/Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)):(e=Math.sin(this.phits),this.akm1=Math.cos(this.phits)/proj4js.common.tsfnz(this.e,this.phits,e),e*=this.e,this.akm1/=Math.sqrt(1-e*e));break;case this.EQUIT:this.akm1=2*this.k0;break;case this.OBLIQ:e=Math.sin(this.lat0),t=2*Math.atan(this.ssfn_(this.lat0,e,this.e))-proj4js.common.HALF_PI,e*=this.e,this.akm1=2*this.k0*Math.cos(this.lat0)/Math.sqrt(1-e*e),this.sinX1=Math.sin(t),this.cosX1=Math.cos(t)}}else switch(this.mode){case this.OBLIQ:this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0);case this.EQUIT:this.akm1=2*this.k0;break;case this.S_POLE:case this.N_POLE:this.akm1=Math.abs(this.phits-proj4js.common.HALF_PI)>=proj4js.common.EPSLN?Math.cos(this.phits)/Math.tan(proj4js.common.FORTPI-.5*this.phits):2*this.k0}},forward:function(e){var t=e.x;t=proj4js.common.adjust_lon(t-this.long0);var i,n,r=e.y;if(this.sphere){var s,o,a,l;switch(s=Math.sin(r),o=Math.cos(r),a=Math.cos(t),l=Math.sin(t),this.mode){case this.EQUIT:n=1+o*a,proj4js.common.EPSLN>=n&&proj4js.reportError("stere:forward:Equit"),n=this.akm1/n,i=n*o*l,n*=s;break;case this.OBLIQ:n=1+this.sinph0*s+this.cosph0*o*a,proj4js.common.EPSLN>=n&&proj4js.reportError("stere:forward:Obliq"),n=this.akm1/n,i=n*o*l,n*=this.cosph0*s-this.sinph0*o*a;break;case this.N_POLE:a=-a,r=-r;case this.S_POLE:Math.abs(r-proj4js.common.HALF_PI)<this.TOL&&proj4js.reportError("stere:forward:S_POLE"),n=this.akm1*Math.tan(proj4js.common.FORTPI+.5*r),i=l*n,n*=a}}else{a=Math.cos(t),l=Math.sin(t),s=Math.sin(r);var h,c;if(this.mode==this.OBLIQ||this.mode==this.EQUIT){var u=2*Math.atan(this.ssfn_(r,s,this.e));h=Math.sin(u-proj4js.common.HALF_PI),c=Math.cos(u)}switch(this.mode){case this.OBLIQ:var d=this.akm1/(this.cosX1*(1+this.sinX1*h+this.cosX1*c*a));n=d*(this.cosX1*h-this.sinX1*c*a),i=d*c;break;case this.EQUIT:var d=2*this.akm1/(1+c*a);n=d*h,i=d*c;break;case this.S_POLE:r=-r,a=-a,s=-s;case this.N_POLE:i=this.akm1*proj4js.common.tsfnz(this.e,r,s),n=-i*a}i*=l}return e.x=i*this.a+this.x0,e.y=n*this.a+this.y0,e},inverse:function(e){var t,i,n,r,s,o,a=(e.x-this.x0)/this.a,l=(e.y-this.y0)/this.a,h=0,c=0,u=0,d=0;if(this.sphere){var p,f,m,g;switch(f=Math.sqrt(a*a+l*l),p=2*Math.atan(f/this.akm1),m=Math.sin(p),g=Math.cos(p),t=0,this.mode){case this.EQUIT:i=Math.abs(f)<=proj4js.common.EPSLN?0:Math.asin(l*m/f),(0!=g||0!=a)&&(t=Math.atan2(a*m,g*f));break;case this.OBLIQ:i=Math.abs(f)<=proj4js.common.EPSLN?this.phi0:Math.asin(g*this.sinph0+l*m*this.cosph0/f),p=g-this.sinph0*Math.sin(i),(0!=p||0!=a)&&(t=Math.atan2(a*m*this.cosph0,p*f));break;case this.N_POLE:l=-l;case this.S_POLE:i=Math.abs(f)<=proj4js.common.EPSLN?this.phi0:Math.asin(this.mode==this.S_POLE?-g:g),t=0==a&&0==l?0:Math.atan2(a,l)}e.x=proj4js.common.adjust_lon(t+this.long0),e.y=i}else{switch(s=Math.sqrt(a*a+l*l),this.mode){case this.OBLIQ:case this.EQUIT:h=2*Math.atan2(s*this.cosX1,this.akm1),n=Math.cos(h),r=Math.sin(h),c=0==s?Math.asin(n*this.sinX1):Math.asin(n*this.sinX1+l*r*this.cosX1/s),h=Math.tan(.5*(proj4js.common.HALF_PI+c)),a*=r,l=s*this.cosX1*n-l*this.sinX1*r,d=proj4js.common.HALF_PI,u=.5*this.e;break;case this.N_POLE:l=-l;case this.S_POLE:h=-s/this.akm1,c=proj4js.common.HALF_PI-2*Math.atan(h),d=-proj4js.common.HALF_PI,u=-.5*this.e}for(o=this.NITER;o--;c=i)if(r=this.e*Math.sin(c),i=2*Math.atan(h*Math.pow((1+r)/(1-r),u))-d,Math.abs(c-i)<this.CONV)return this.mode==this.S_POLE&&(i=-i),t=0==a&&0==l?0:Math.atan2(a,l),e.x=proj4js.common.adjust_lon(t+this.long0),e.y=i,e}}};
  proj4js.Proj.nzmg={iterations:1,init:function(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013},forward:function(e){for(var t=e.x,i=e.y,n=i-this.lat0,r=t-this.long0,s=1e-5*(n/proj4js.common.SEC_TO_RAD),o=r,a=1,l=0,h=1;10>=h;h++)a*=s,l+=this.A[h]*a;for(var c,u,d=l,p=o,f=1,m=0,g=0,y=0,h=1;6>=h;h++)c=f*d-m*p,u=m*d+f*p,f=c,m=u,g=g+this.B_re[h]*f-this.B_im[h]*m,y=y+this.B_im[h]*f+this.B_re[h]*m;return e.x=y*this.a+this.x0,e.y=g*this.a+this.y0,e},inverse:function(e){for(var t,i,n=e.x,r=e.y,s=n-this.x0,o=r-this.y0,a=o/this.a,l=s/this.a,h=1,c=0,u=0,d=0,p=1;6>=p;p++)t=h*a-c*l,i=c*a+h*l,h=t,c=i,u=u+this.C_re[p]*h-this.C_im[p]*c,d=d+this.C_im[p]*h+this.C_re[p]*c;for(var f=0;this.iterations>f;f++){for(var m,g,y=u,v=d,b=a,L=l,p=2;6>=p;p++)m=y*u-v*d,g=v*u+y*d,y=m,v=g,b+=(p-1)*(this.B_re[p]*y-this.B_im[p]*v),L+=(p-1)*(this.B_im[p]*y+this.B_re[p]*v);y=1,v=0;for(var x=this.B_re[1],C=this.B_im[1],p=2;6>=p;p++)m=y*u-v*d,g=v*u+y*d,y=m,v=g,x+=p*(this.B_re[p]*y-this.B_im[p]*v),C+=p*(this.B_im[p]*y+this.B_re[p]*v);var w=x*x+C*C;u=(b*x+L*C)/w,d=(L*x-b*C)/w}for(var S=u,O=d,_=1,E=0,p=1;9>=p;p++)_*=S,E+=this.D[p]*_;var k=this.lat0+1e5*E*proj4js.common.SEC_TO_RAD,T=this.long0+O;return e.x=T,e.y=k,e}};
  proj4js.Proj.mill={init:function(){},forward:function(e){var t=e.x,i=e.y,n=proj4js.common.adjust_lon(t-this.long0),r=this.x0+this.a*n,s=this.y0+1.25*this.a*Math.log(Math.tan(proj4js.common.PI/4+i/2.5));return e.x=r,e.y=s,e},inverse:function(e){e.x-=this.x0,e.y-=this.y0;var t=proj4js.common.adjust_lon(this.long0+e.x/this.a),i=2.5*(Math.atan(Math.exp(.8*e.y/this.a))-proj4js.common.PI/4);return e.x=t,e.y=i,e}};
  proj4js.Proj.gnom={init:function(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1},forward:function(e){var t,i,n,r,s,o,a,l,h=e.x,c=e.y;return n=proj4js.common.adjust_lon(h-this.long0),t=Math.sin(c),i=Math.cos(c),r=Math.cos(n),o=this.sin_p14*t+this.cos_p14*i*r,s=1,o>0||Math.abs(o)<=proj4js.common.EPSLN?(a=this.x0+this.a*s*i*Math.sin(n)/o,l=this.y0+this.a*s*(this.cos_p14*t-this.sin_p14*i*r)/o):(proj4js.reportError("orthoFwdPointError"),a=this.x0+this.infinity_dist*i*Math.sin(n),l=this.y0+this.infinity_dist*(this.cos_p14*t-this.sin_p14*i*r)),e.x=a,e.y=l,e},inverse:function(e){var t,i,n,r,s,o;return e.x=(e.x-this.x0)/this.a,e.y=(e.y-this.y0)/this.a,e.x/=this.k0,e.y/=this.k0,(t=Math.sqrt(e.x*e.x+e.y*e.y))?(r=Math.atan2(t,this.rc),i=Math.sin(r),n=Math.cos(r),o=proj4js.common.asinz(n*this.sin_p14+e.y*i*this.cos_p14/t),s=Math.atan2(e.x*i,t*this.cos_p14*n-e.y*this.sin_p14*i),s=proj4js.common.adjust_lon(this.long0+s)):(o=this.phic0,s=0),e.x=s,e.y=o,e}};
  proj4js.Proj.sinu={init:function(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=proj4js.common.pj_enfn(this.es)},forward:function(e){var t,i,n=e.x,r=e.y;if(n=proj4js.common.adjust_lon(n-this.long0),this.sphere){if(this.m)for(var s=this.n*Math.sin(r),o=proj4js.common.MAX_ITER;o;--o){var a=(this.m*r+Math.sin(r)-s)/(this.m+Math.cos(r));if(r-=a,Math.abs(a)<proj4js.common.EPSLN)break}else r=1!=this.n?Math.asin(this.n*Math.sin(r)):r;t=this.a*this.C_x*n*(this.m+Math.cos(r)),i=this.a*this.C_y*r}else{var l=Math.sin(r),h=Math.cos(r);i=this.a*proj4js.common.pj_mlfn(r,l,h,this.en),t=this.a*n*h/Math.sqrt(1-this.es*l*l)}return e.x=t,e.y=i,e},inverse:function(e){var t,i,n;if(e.x-=this.x0,e.y-=this.y0,t=e.y/this.a,this.sphere)e.y/=this.C_y,t=this.m?Math.asin((this.m*e.y+Math.sin(e.y))/this.n):1!=this.n?Math.asin(Math.sin(e.y)/this.n):e.y,n=e.x/(this.C_x*(this.m+Math.cos(e.y)));else{t=proj4js.common.pj_inv_mlfn(e.y/this.a,this.es,this.en);var r=Math.abs(t);proj4js.common.HALF_PI>r?(r=Math.sin(t),i=this.long0+e.x*Math.sqrt(1-this.es*r*r)/(this.a*Math.cos(t)),n=proj4js.common.adjust_lon(i)):r-proj4js.common.EPSLN<proj4js.common.HALF_PI&&(n=this.long0)}return e.x=n,e.y=t,e}};
  proj4js.Proj.vandg={init:function(){this.R=6370997},forward:function(e){var t,i,n=e.x,r=e.y,s=proj4js.common.adjust_lon(n-this.long0);Math.abs(r)<=proj4js.common.EPSLN&&(t=this.x0+this.R*s,i=this.y0);var o=proj4js.common.asinz(2*Math.abs(r/proj4js.common.PI));(Math.abs(s)<=proj4js.common.EPSLN||Math.abs(Math.abs(r)-proj4js.common.HALF_PI)<=proj4js.common.EPSLN)&&(t=this.x0,i=r>=0?this.y0+proj4js.common.PI*this.R*Math.tan(.5*o):this.y0+proj4js.common.PI*this.R*-Math.tan(.5*o));var a=.5*Math.abs(proj4js.common.PI/s-s/proj4js.common.PI),l=a*a,h=Math.sin(o),c=Math.cos(o),u=c/(h+c-1),d=u*u,p=u*(2/h-1),f=p*p,m=proj4js.common.PI*this.R*(a*(u-f)+Math.sqrt(l*(u-f)*(u-f)-(f+l)*(d-f)))/(f+l);return 0>s&&(m=-m),t=this.x0+m,m=Math.abs(m/(proj4js.common.PI*this.R)),i=r>=0?this.y0+proj4js.common.PI*this.R*Math.sqrt(1-m*m-2*a*m):this.y0-proj4js.common.PI*this.R*Math.sqrt(1-m*m-2*a*m),e.x=t,e.y=i,e},inverse:function(e){var t,i,n,r,s,o,a,l,h,c,u,d,p;return e.x-=this.x0,e.y-=this.y0,u=proj4js.common.PI*this.R,n=e.x/u,r=e.y/u,s=n*n+r*r,o=-Math.abs(r)*(1+s),a=o-2*r*r+n*n,l=-2*o+1+2*r*r+s*s,p=r*r/l+(2*a*a*a/l/l/l-9*o*a/l/l)/27,h=(o-a*a/3/l)/l,c=2*Math.sqrt(-h/3),u=3*p/h/c,Math.abs(u)>1&&(u=u>=0?1:-1),d=Math.acos(u)/3,i=e.y>=0?(-c*Math.cos(d+proj4js.common.PI/3)-a/3/l)*proj4js.common.PI:-(-c*Math.cos(d+proj4js.common.PI/3)-a/3/l)*proj4js.common.PI,Math.abs(n)<proj4js.common.EPSLN&&(t=this.long0),t=proj4js.common.adjust_lon(this.long0+proj4js.common.PI*(s-1+Math.sqrt(1+2*(n*n-r*r)+s*s))/2/n),e.x=t,e.y=i,e}};
  proj4js.Proj.cea={init:function(){},forward:function(e){var t=e.x,i=e.y,n=proj4js.common.adjust_lon(t-this.long0),r=this.x0+this.a*n*Math.cos(this.lat_ts),s=this.y0+this.a*Math.sin(i)/Math.cos(this.lat_ts);return e.x=r,e.y=s,e},inverse:function(e){e.x-=this.x0,e.y-=this.y0;var t=proj4js.common.adjust_lon(this.long0+e.x/this.a/Math.cos(this.lat_ts)),i=Math.asin(e.y/this.a*Math.cos(this.lat_ts));return e.x=t,e.y=i,e}};
  proj4js.Proj.eqc={init:function(){this.x0||(this.x0=0),this.y0||(this.y0=0),this.lat0||(this.lat0=0),this.long0||(this.long0=0),this.lat_ts||(this.lat_ts=0),this.title||(this.title="Equidistant Cylindrical (Plate Carre)"),this.rc=Math.cos(this.lat_ts)},forward:function(e){var t=e.x,i=e.y,n=proj4js.common.adjust_lon(t-this.long0),r=proj4js.common.adjust_lat(i-this.lat0);return e.x=this.x0+this.a*n*this.rc,e.y=this.y0+this.a*r,e},inverse:function(e){var t=e.x,i=e.y;return e.x=proj4js.common.adjust_lon(this.long0+(t-this.x0)/(this.a*this.rc)),e.y=proj4js.common.adjust_lat(this.lat0+(i-this.y0)/this.a),e}};
  proj4js.Proj.cass={init:function(){this.sphere||(this.en=proj4js.common.pj_enfn(this.es),this.m0=proj4js.common.pj_mlfn(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))},C1:.16666666666666666,C2:.008333333333333333,C3:.041666666666666664,C4:.3333333333333333,C5:.06666666666666667,forward:function(e){var t,i,n=e.x,r=e.y;return n=proj4js.common.adjust_lon(n-this.long0),this.sphere?(t=Math.asin(Math.cos(r)*Math.sin(n)),i=Math.atan2(Math.tan(r),Math.cos(n))-this.phi0):(this.n=Math.sin(r),this.c=Math.cos(r),i=proj4js.common.pj_mlfn(r,this.n,this.c,this.en),this.n=1/Math.sqrt(1-this.es*this.n*this.n),this.tn=Math.tan(r),this.t=this.tn*this.tn,this.a1=n*this.c,this.c*=this.es*this.c/(1-this.es),this.a2=this.a1*this.a1,t=this.n*this.a1*(1-this.a2*this.t*(this.C1-(8-this.t+8*this.c)*this.a2*this.C2)),i-=this.m0-this.n*this.tn*this.a2*(.5+(5-this.t+6*this.c)*this.a2*this.C3)),e.x=this.a*t+this.x0,e.y=this.a*i+this.y0,e},inverse:function(e){e.x-=this.x0,e.y-=this.y0;var t,i,n=e.x/this.a,r=e.y/this.a;if(this.sphere)this.dd=r+this.lat0,t=Math.asin(Math.sin(this.dd)*Math.cos(n)),i=Math.atan2(Math.tan(n),Math.cos(this.dd));else{var s=proj4js.common.pj_inv_mlfn(this.m0+r,this.es,this.en);this.tn=Math.tan(s),this.t=this.tn*this.tn,this.n=Math.sin(s),this.r=1/(1-this.es*this.n*this.n),this.n=Math.sqrt(this.r),this.r*=(1-this.es)*this.n,this.dd=n/this.n,this.d2=this.dd*this.dd,t=s-this.n*this.tn/this.r*this.d2*(.5-(1+3*this.t)*this.d2*this.C3),i=this.dd*(1+this.t*this.d2*(-this.C4+(1+3*this.t)*this.d2*this.C5))/Math.cos(s)}return e.x=proj4js.common.adjust_lon(this.long0+i),e.y=t,e}};
  proj4js.Proj.gauss={init:function(){var e=Math.sin(this.lat0),t=Math.cos(this.lat0);t*=t,this.rc=Math.sqrt(1-this.es)/(1-this.es*e*e),this.C=Math.sqrt(1+this.es*t*t/(1-this.es)),this.phic0=Math.asin(e/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+proj4js.common.FORTPI)/(Math.pow(Math.tan(.5*this.lat0+proj4js.common.FORTPI),this.C)*proj4js.common.srat(this.e*e,this.ratexp))},forward:function(e){var t=e.x,i=e.y;return e.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*i+proj4js.common.FORTPI),this.C)*proj4js.common.srat(this.e*Math.sin(i),this.ratexp))-proj4js.common.HALF_PI,e.x=this.C*t,e},inverse:function(e){for(var t=1e-14,i=e.x/this.C,n=e.y,r=Math.pow(Math.tan(.5*n+proj4js.common.FORTPI)/this.K,1/this.C),s=proj4js.common.MAX_ITER;s>0&&(n=2*Math.atan(r*proj4js.common.srat(this.e*Math.sin(e.y),-.5*this.e))-proj4js.common.HALF_PI,!(t>Math.abs(n-e.y)));--s)e.y=n;return s?(e.x=i,e.y=n,e):(proj4js.reportError("gauss:inverse:convergence failed"),null)}};
  proj4js.Proj.omerc={init:function(){this.mode||(this.mode=0),this.lon1||(this.lon1=0,this.mode=1),this.lon2||(this.lon2=0),this.lat2||(this.lat2=0);var e=this.b/this.a,t=1-Math.pow(e,2);Math.sqrt(t),this.sin_p20=Math.sin(this.lat0),this.cos_p20=Math.cos(this.lat0),this.con=1-this.es*this.sin_p20*this.sin_p20,this.com=Math.sqrt(1-t),this.bl=Math.sqrt(1+this.es*Math.pow(this.cos_p20,4)/(1-t)),this.al=this.a*this.bl*this.k0*this.com/this.con,Math.abs(this.lat0)<proj4js.common.EPSLN?(this.ts=1,this.d=1,this.el=1):(this.ts=proj4js.common.tsfnz(this.e,this.lat0,this.sin_p20),this.con=Math.sqrt(this.con),this.d=this.bl*this.com/(this.cos_p20*this.con),this.f=this.d*this.d-1>0?this.lat0>=0?this.d+Math.sqrt(this.d*this.d-1):this.d-Math.sqrt(this.d*this.d-1):this.d,this.el=this.f*Math.pow(this.ts,this.bl)),0!=this.mode?(this.g=.5*(this.f-1/this.f),this.gama=proj4js.common.asinz(Math.sin(this.alpha)/this.d),this.longc=this.longc-proj4js.common.asinz(this.g*Math.tan(this.gama))/this.bl,this.con=Math.abs(this.lat0),this.con>proj4js.common.EPSLN&&Math.abs(this.con-proj4js.common.HALF_PI)>proj4js.common.EPSLN?(this.singam=Math.sin(this.gama),this.cosgam=Math.cos(this.gama),this.sinaz=Math.sin(this.alpha),this.cosaz=Math.cos(this.alpha),this.u=this.lat0>=0?this.al/this.bl*Math.atan(Math.sqrt(this.d*this.d-1)/this.cosaz):-(this.al/this.bl)*Math.atan(Math.sqrt(this.d*this.d-1)/this.cosaz)):proj4js.reportError("omerc:Init:DataError")):(this.sinphi=Math.sin(this.at1),this.ts1=proj4js.common.tsfnz(this.e,this.lat1,this.sinphi),this.sinphi=Math.sin(this.lat2),this.ts2=proj4js.common.tsfnz(this.e,this.lat2,this.sinphi),this.h=Math.pow(this.ts1,this.bl),this.l=Math.pow(this.ts2,this.bl),this.f=this.el/this.h,this.g=.5*(this.f-1/this.f),this.j=(this.el*this.el-this.l*this.h)/(this.el*this.el+this.l*this.h),this.p=(this.l-this.h)/(this.l+this.h),this.dlon=this.lon1-this.lon2,this.dlon<-proj4js.common.PI&&(this.lon2=this.lon2-2*proj4js.common.PI),this.dlon>proj4js.common.PI&&(this.lon2=this.lon2+2*proj4js.common.PI),this.dlon=this.lon1-this.lon2,this.longc=.5*(this.lon1+this.lon2)-Math.atan(this.j*Math.tan(.5*this.bl*this.dlon)/this.p)/this.bl,this.dlon=proj4js.common.adjust_lon(this.lon1-this.longc),this.gama=Math.atan(Math.sin(this.bl*this.dlon)/this.g),this.alpha=proj4js.common.asinz(this.d*Math.sin(this.gama)),Math.abs(this.lat1-this.lat2)<=proj4js.common.EPSLN?proj4js.reportError("omercInitDataError"):this.con=Math.abs(this.lat1),this.con<=proj4js.common.EPSLN||Math.abs(this.con-proj4js.common.HALF_PI)<=proj4js.common.EPSLN?proj4js.reportError("omercInitDataError"):Math.abs(Math.abs(this.lat0)-proj4js.common.HALF_PI)<=proj4js.common.EPSLN&&proj4js.reportError("omercInitDataError"),this.singam=Math.sin(this.gam),this.cosgam=Math.cos(this.gam),this.sinaz=Math.sin(this.alpha),this.cosaz=Math.cos(this.alpha),this.u=this.lat0>=0?this.al/this.bl*Math.atan(Math.sqrt(this.d*this.d-1)/this.cosaz):-(this.al/this.bl)*Math.atan(Math.sqrt(this.d*this.d-1)/this.cosaz))},forward:function(e){var t,i,n,r,s,o,a,l,h,c,u,d=e.x,p=e.y;t=Math.sin(p),c=proj4js.common.adjust_lon(d-this.longc),o=Math.sin(this.bl*c),Math.abs(Math.abs(p)-proj4js.common.HALF_PI)>proj4js.common.EPSLN?(u=proj4js.common.tsfnz(this.e,p,t),r=this.el/Math.pow(u,this.bl),h=.5*(r-1/r),i=.5*(r+1/r),a=(h*this.singam-o*this.cosgam)/i,n=Math.cos(this.bl*c),1e-7>Math.abs(n)?s=this.al*this.bl*c:(s=this.al*Math.atan((h*this.cosgam+o*this.singam)/n)/this.bl,0>n&&(s+=proj4js.common.PI*this.al/this.bl))):(a=p>=0?this.singam:-this.singam,s=this.al*p/this.bl),Math.abs(Math.abs(a)-1)<=proj4js.common.EPSLN&&proj4js.reportError("omercFwdInfinity"),l=.5*this.al*Math.log((1-a)/(1+a))/this.bl,s-=this.u;var f=this.x0+l*this.cosaz+s*this.sinaz,m=this.y0+s*this.cosaz-l*this.sinaz;return e.x=f,e.y=m,e},inverse:function(e){var t,i,n,r,s,o,a,l,h,c,u,d,p;return e.x-=this.x0,e.y-=this.y0,p=0,r=e.x*this.cosaz-e.y*this.sinaz,s=e.y*this.cosaz+e.x*this.sinaz,s+=this.u,o=Math.exp(-this.bl*r/this.al),a=.5*(o-1/o),i=.5*(o+1/o),h=Math.sin(this.bl*s/this.al),c=(h*this.cosgam+a*this.singam)/i,Math.abs(Math.abs(c)-1)<=proj4js.common.EPSLN?(u=this.longc,d=c>=0?proj4js.common.HALF_PI:-proj4js.common.HALF_PI):(n=1/this.bl,l=Math.pow(this.el/Math.sqrt((1+c)/(1-c)),n),d=proj4js.common.phi2z(this.e,l),t=this.longc-Math.atan2(a*this.cosgam-h*this.singam,n)/this.bl,u=proj4js.common.adjust_lon(t)),e.x=u,e.y=d,e}};
  proj4js.Proj.lcc={init:function(){if(this.lat2||(this.lat2=this.lat0),this.k0||(this.k0=1),Math.abs(this.lat1+this.lat2)<proj4js.common.EPSLN)return proj4js.reportError("lcc:init: Equal Latitudes"),void 0;var e=this.b/this.a;this.e=Math.sqrt(1-e*e);var t=Math.sin(this.lat1),i=Math.cos(this.lat1),n=proj4js.common.msfnz(this.e,t,i),r=proj4js.common.tsfnz(this.e,this.lat1,t),s=Math.sin(this.lat2),o=Math.cos(this.lat2),a=proj4js.common.msfnz(this.e,s,o),l=proj4js.common.tsfnz(this.e,this.lat2,s),h=proj4js.common.tsfnz(this.e,this.lat0,Math.sin(this.lat0));this.ns=Math.abs(this.lat1-this.lat2)>proj4js.common.EPSLN?Math.log(n/a)/Math.log(r/l):t,this.f0=n/(this.ns*Math.pow(r,this.ns)),this.rh=this.a*this.f0*Math.pow(h,this.ns),this.title||(this.title="Lambert Conformal Conic")},forward:function(e){var t=e.x,i=e.y;if(!(90>=i&&i>=-90&&180>=t&&t>=-180))return proj4js.reportError("lcc:forward: llInputOutOfRange: "+t+" : "+i),null;var n,r,s=Math.abs(Math.abs(i)-proj4js.common.HALF_PI);if(s>proj4js.common.EPSLN)n=proj4js.common.tsfnz(this.e,i,Math.sin(i)),r=this.a*this.f0*Math.pow(n,this.ns);else{if(s=i*this.ns,0>=s)return proj4js.reportError("lcc:forward: No Projection"),null;r=0}var o=this.ns*proj4js.common.adjust_lon(t-this.long0);return e.x=this.k0*r*Math.sin(o)+this.x0,e.y=this.k0*(this.rh-r*Math.cos(o))+this.y0,e},inverse:function(e){var t,i,n,r,s,o=(e.x-this.x0)/this.k0,a=this.rh-(e.y-this.y0)/this.k0;this.ns>0?(t=Math.sqrt(o*o+a*a),i=1):(t=-Math.sqrt(o*o+a*a),i=-1);var l=0;if(0!=t&&(l=Math.atan2(i*o,i*a)),0!=t||this.ns>0){if(i=1/this.ns,n=Math.pow(t/(this.a*this.f0),i),r=proj4js.common.phi2z(this.e,n),-9999==r)return null}else r=-proj4js.common.HALF_PI;return s=proj4js.common.adjust_lon(l/this.ns+this.long0),e.x=s,e.y=r,e}};
  proj4js.Proj.laea={S_POLE:1,N_POLE:2,EQUIT:3,OBLIQ:4,init:function(){var e=Math.abs(this.lat0);if(this.mode=Math.abs(e-proj4js.common.HALF_PI)<proj4js.common.EPSLN?0>this.lat0?this.S_POLE:this.N_POLE:Math.abs(e)<proj4js.common.EPSLN?this.EQUIT:this.OBLIQ,this.es>0){var t;switch(this.qp=proj4js.common.qsfnz(this.e,1),this.mmf=.5/(1-this.es),this.apa=this.authset(this.es),this.mode){case this.N_POLE:case this.S_POLE:this.dd=1;break;case this.EQUIT:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case this.OBLIQ:this.rq=Math.sqrt(.5*this.qp),t=Math.sin(this.lat0),this.sinb1=proj4js.common.qsfnz(this.e,t)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*t*t)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd}}else this.mode==this.OBLIQ&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))},forward:function(e){var t,i,n=e.x,r=e.y;if(n=proj4js.common.adjust_lon(n-this.long0),this.sphere){var s,o,a;switch(a=Math.sin(r),o=Math.cos(r),s=Math.cos(n),this.mode){case this.OBLIQ:case this.EQUIT:if(i=this.mode==this.EQUIT?1+o*s:1+this.sinph0*a+this.cosph0*o*s,proj4js.common.EPSLN>=i)return proj4js.reportError("laea:fwd:y less than eps"),null;i=Math.sqrt(2/i),t=i*o*Math.sin(n),i*=this.mode==this.EQUIT?a:this.cosph0*a-this.sinph0*o*s;break;case this.N_POLE:s=-s;case this.S_POLE:if(Math.abs(r+this.phi0)<proj4js.common.EPSLN)return proj4js.reportError("laea:fwd:phi < eps"),null;i=proj4js.common.FORTPI-.5*r,i=2*(this.mode==this.S_POLE?Math.cos(i):Math.sin(i)),t=i*Math.sin(n),i*=s}}else{var s,l,a,h,c=0,u=0,d=0;switch(s=Math.cos(n),l=Math.sin(n),a=Math.sin(r),h=proj4js.common.qsfnz(this.e,a),(this.mode==this.OBLIQ||this.mode==this.EQUIT)&&(c=h/this.qp,u=Math.sqrt(1-c*c)),this.mode){case this.OBLIQ:d=1+this.sinb1*c+this.cosb1*u*s;break;case this.EQUIT:d=1+u*s;break;case this.N_POLE:d=proj4js.common.HALF_PI+r,h=this.qp-h;break;case this.S_POLE:d=r-proj4js.common.HALF_PI,h=this.qp+h}if(Math.abs(d)<proj4js.common.EPSLN)return proj4js.reportError("laea:fwd:b < eps"),null;switch(this.mode){case this.OBLIQ:case this.EQUIT:d=Math.sqrt(2/d),i=this.mode==this.OBLIQ?this.ymf*d*(this.cosb1*c-this.sinb1*u*s):(d=Math.sqrt(2/(1+u*s)))*c*this.ymf,t=this.xmf*d*u*l;break;case this.N_POLE:case this.S_POLE:h>=0?(t=(d=Math.sqrt(h))*l,i=s*(this.mode==this.S_POLE?d:-d)):t=i=0}}return e.x=this.a*t+this.x0,e.y=this.a*i+this.y0,e},inverse:function(e){e.x-=this.x0,e.y-=this.y0;var t,i,n=e.x/this.a,r=e.y/this.a;if(this.sphere){var s,o=0,a=0;if(s=Math.sqrt(n*n+r*r),i=.5*s,i>1)return proj4js.reportError("laea:Inv:DataError"),null;switch(i=2*Math.asin(i),(this.mode==this.OBLIQ||this.mode==this.EQUIT)&&(a=Math.sin(i),o=Math.cos(i)),this.mode){case this.EQUIT:i=Math.abs(s)<=proj4js.common.EPSLN?0:Math.asin(r*a/s),n*=a,r=o*s;break;case this.OBLIQ:i=Math.abs(s)<=proj4js.common.EPSLN?this.phi0:Math.asin(o*this.sinph0+r*a*this.cosph0/s),n*=a*this.cosph0,r=(o-Math.sin(i)*this.sinph0)*s;break;case this.N_POLE:r=-r,i=proj4js.common.HALF_PI-i;break;case this.S_POLE:i-=proj4js.common.HALF_PI}t=0!=r||this.mode!=this.EQUIT&&this.mode!=this.OBLIQ?Math.atan2(n,r):0}else{var l,h,c,u,d=0;switch(this.mode){case this.EQUIT:case this.OBLIQ:if(n/=this.dd,r*=this.dd,u=Math.sqrt(n*n+r*r),proj4js.common.EPSLN>u)return e.x=0,e.y=this.phi0,e;h=2*Math.asin(.5*u/this.rq),l=Math.cos(h),n*=h=Math.sin(h),this.mode==this.OBLIQ?(d=l*this.sinb1+r*h*this.cosb1/u,c=this.qp*d,r=u*this.cosb1*l-r*this.sinb1*h):(d=r*h/u,c=this.qp*d,r=u*l);break;case this.N_POLE:r=-r;case this.S_POLE:if(c=n*n+r*r,!c)return e.x=0,e.y=this.phi0,e;d=1-c/this.qp,this.mode==this.S_POLE&&(d=-d)}t=Math.atan2(n,r),i=this.authlat(Math.asin(d),this.apa)}return e.x=proj4js.common.adjust_lon(this.long0+t),e.y=i,e},P00:.3333333333333333,P01:.17222222222222222,P02:.10257936507936508,P10:.06388888888888888,P11:.0664021164021164,P20:.016415012942191543,authset:function(e){var t,i=[];return i[0]=e*this.P00,t=e*e,i[0]+=t*this.P01,i[1]=t*this.P10,t*=e,i[0]+=t*this.P02,i[1]+=t*this.P11,i[2]=t*this.P20,i},authlat:function(e,t){var i=e+e;return e+t[0]*Math.sin(i)+t[1]*Math.sin(i+i)+t[2]*Math.sin(i+i+i)}};
  proj4js.Proj.aeqd={init:function(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0)},forward:function(e){var t=e.x;e.y;var i,n=Math.sin(e.y),r=Math.cos(e.y),s=proj4js.common.adjust_lon(t-this.long0),o=Math.cos(s),a=this.sin_p12*n+this.cos_p12*r*o;if(Math.abs(Math.abs(a)-1)<proj4js.common.EPSLN){if(i=1,0>a)return proj4js.reportError("aeqd:Fwd:PointError"),void 0}else{var l=Math.acos(a);i=l/Math.sin(l)}return e.x=this.x0+this.a*i*r*Math.sin(s),e.y=this.y0+this.a*i*(this.cos_p12*n-this.sin_p12*r*o),e},inverse:function(e){e.x-=this.x0,e.y-=this.y0;var t=Math.sqrt(e.x*e.x+e.y*e.y);if(t>2*proj4js.common.HALF_PI*this.a)return proj4js.reportError("aeqdInvDataError"),void 0;var i,n=t/this.a,r=Math.sin(n),s=Math.cos(n),o=this.long0;if(Math.abs(t)<=proj4js.common.EPSLN)i=this.lat0;else{i=proj4js.common.asinz(s*this.sin_p12+e.y*r*this.cos_p12/t);var a=Math.abs(this.lat0)-proj4js.common.HALF_PI;Math.abs(a)<=proj4js.common.EPSLN?o=this.lat0>=0?proj4js.common.adjust_lon(this.long0+Math.atan2(e.x,-e.y)):proj4js.common.adjust_lon(this.long0-Math.atan2(-e.x,e.y)):(a=s-this.sin_p12*Math.sin(i),Math.abs(a)<proj4js.common.EPSLN&&Math.abs(e.x)<proj4js.common.EPSLN||(Math.atan2(e.x*r*this.cos_p12,a*t),o=proj4js.common.adjust_lon(this.long0+Math.atan2(e.x*r*this.cos_p12,a*t))))}return e.x=o,e.y=i,e}};
  proj4js.Proj.moll={init:function(){},forward:function(e){for(var t=e.x,i=e.y,n=proj4js.common.adjust_lon(t-this.long0),r=i,s=proj4js.common.PI*Math.sin(i),o=0;!0;o++){var a=-(r+Math.sin(r)-s)/(1+Math.cos(r));if(r+=a,Math.abs(a)<proj4js.common.EPSLN)break;o>=50&&proj4js.reportError("moll:Fwd:IterationError")}r/=2,proj4js.common.PI/2-Math.abs(i)<proj4js.common.EPSLN&&(n=0);var l=.900316316158*this.a*n*Math.cos(r)+this.x0,h=1.4142135623731*this.a*Math.sin(r)+this.y0;return e.x=l,e.y=h,e},inverse:function(e){var t,i;e.x-=this.x0;var i=e.y/(1.4142135623731*this.a);Math.abs(i)>.999999999999&&(i=.999999999999);var t=Math.asin(i),n=proj4js.common.adjust_lon(this.long0+e.x/(.900316316158*this.a*Math.cos(t)));-proj4js.common.PI>n&&(n=-proj4js.common.PI),n>proj4js.common.PI&&(n=proj4js.common.PI),i=(2*t+Math.sin(2*t))/proj4js.common.PI,Math.abs(i)>1&&(i=1);var r=Math.asin(i);return e.x=n,e.y=r,e}};

  // BD72 / Belgian Lambert 72 -- Belgium
  proj4js.defs["EPSG:31370"] = "+proj=lcc +lat_1=51.16666723333333 +lat_2=49.8333339 +lat_0=90 +lon_0=4.367486666666666 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=-106.869,52.2978,-103.724,0.3366,-0.457,1.8422,-1.2747 +units=m +no_defs";
  // Amersfoort / RD New -- Netherlands - Holland - Dutch
  proj4js.defs["EPSG:28992"] = "+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +towgs84=565.4171,50.3319,465.5524,1.9342,-1.6677,9.1019,4.0725 +units=m +no_defs";

  let googleProjection = new proj4js.Proj("EPSG:900913");
  [
    "EPSG:31370",
    "EPSG:28992"
  ].forEach(projection => {
    OpenLayers.Projection.addTransform("EPSG:900913", projection, (point) => proj4js.transform(googleProjection, new proj4js.Proj(projection), point));
    OpenLayers.Projection.addTransform(projection, "EPSG:900913", (point) => proj4js.transform(new proj4js.Proj(projection), googleProjection, point));
  });

  // Add custom WFS layer
  OpenMaps.WFSLayer = OpenLayers.Class(OpenLayers.Layer.Vector, { // TODO: probably add an implementation with OpenLayers.Layer.Markers as well
    isBaseLayer: false,
    url: null,
    extent: null,
    crs: null,
    loadedArea: null,
    markerIcon: "",
    styleMap: new OpenLayers.StyleMap({
      "default": new OpenLayers.Style({
        fillColor: '#cccccc',
        fillOpacity: 1,
        fontColor: '#111111',
        fontWeight: 'bold',
        strokeColor: '#ffffff',
        strokeOpacity: 1,
        strokeWidth: 2,
        pointRadius: 12,
        fontFamily: 'FontAwesome',
        label: '${markerIcon}', // Default to star
        title: '${title}'
      }, {
        context: {
          markerIcon: (feature) => feature.layer.markerIcon || '',
          title: (feature) => feature.attributes?.uitbater
        }
      }),
      'highlight': new OpenLayers.Style({
        pointRadius: 14,
        strokeColor: '#eeeeee'
      }),
      'select': new OpenLayers.Style({
        pointRadius: 14,
        strokeColor: '#dddddd',
        fillColor: '#bbbbbb'
      }),
      'highlightselected': new OpenLayers.Style({
        pointRadius: 14,
        strokeColor: '#eeeeee',
        fillColor: '#bbbbbb'
      })
    }),
    initialize: function(name, url, extent, crs, options) {
      options = options || {};
      this.uniqueName = name.replaceAll(' ', '-').toLowerCase();
      this.url = url;
      this.extent = extent;
      this.maxExtent = extent;
      this.dataCRS = crs;
      this.markerIcon = options?.markerIcon;
      OpenLayers.Layer.Vector.prototype.initialize.apply(this, [name, options]);
    },
    addFeatures: function(features) {
      features.forEach(feature => {
        let _wmeObject = {
          isDeleted: () => false,
          setSelected: (state) => console.log(state, feature),
          isNew: () => false,
          getType: () => null,
          getID: () => -1,
          arePropertiesEditable: () => false,
          arePropertiesSuggestible: () => false,
          isGeometryEditable: () => false,
          isGeometrySuggestible: () => false
        };
        feature.attributes._wmeObject = _wmeObject; // Fake data needed to allow Waze event triggering (old style)
        feature.attributes.wazeFeature = { // Fake data needed to allow Waze event triggering (new style)
          _wmeObject: _wmeObject
        };
      });
      OpenLayers.Layer.Vector.prototype.addFeatures.apply(this, [ features ]);
    },
    moveTo: function(bounds, zoomChanged, dragging) {
      OpenLayers.Layer.Vector.prototype.moveTo.apply(this, arguments);
      if (!dragging && (this.loadedArea == null || !this.loadedArea.containsBounds(bounds))) {
        this.loadedArea = bounds.scale(1.5);
        let dataProjection = new OpenLayers.Projection(this.dataCRS);
        let requestArea = this.loadedArea.clone().transform(W.map.getProjectionObject(), dataProjection);
        let searchParams = new URLSearchParams({
          service: "WFS",
          request: "GetFeature",
          version: "2.0.0",
          typeNames: "beleid:laadpunten_public",
          bbox: requestArea.toBBOX(),
          srsName: this.dataCRS,
          outputFormat: "application/json",
          count: 500
        });
        GM_xmlhttpRequest({
          method: 'GET',
          responseType: 'json',
          url: this.url + '?' + searchParams.toString(),
          timeout: 10000,
          context: this.layer,
          onload: (response) => {
            let geoJSONFeatures = response.response;
            if (geoJSONFeatures.features.length >= 300) {
              // TODO: limit reached, request to zoom in further
              console.log('300 features returned, zoom in further to get new data')
              return;
            }
            let newFeatures = (new OpenLayers.Format.GeoJSON()).read(geoJSONFeatures);
            newFeatures.forEach(feature => {
              feature.geometry.transform(dataProjection, W.map.getProjectionObject());
              feature.bounds.transform(dataProjection, W.map.getProjectionObject());
            });
            this.removeAllFeatures();
            this.addFeatures(newFeatures);
          },
          onerror: (response) => console.log('Error getting features', response),
          ontimeout: (response) => console.log('Timeout getting features', response)
        });
      }
    },
    CLASS_NAME: "OpenMaps.WFSLayer"
  });

  // List of map handles
  var handles = [];
  var tab = await addOpenMapsTab();

  // New map layer drawer group
  var omGroup = createLayerToggler(null, true, 'Open Maps', null);

  // Satellite imagery toggle
  var satImagery = document.createElement('wz-checkbox');
  satImagery.checked = W.map.getLayerByName('satellite_imagery').getVisibility();
  // It seems that wz-checkbox can't handle being checked twice, even if the state remains the same
  var checkboxSemaphore = false;
  satImagery.addEventListener('click', function() {
    checkboxSemaphore = true;
    W.map.getLayerByName('satellite_imagery').setVisibility(!W.map.getLayerByName('satellite_imagery').getVisibility());
    checkboxSemaphore = false;
  });
  W.map.getLayerByName('satellite_imagery').events.register('visibilitychanged', null, function() {
    if (checkboxSemaphore) {
      return;
    }
    satImagery.checked = W.map.getLayerByName('satellite_imagery').getVisibility();
  });
  satImagery.textContent = I18n.t('openmaps.satellite_imagery');
  tab.appendChild(satImagery);

  // List of maps visible in Open Maps
  var title = document.createElement('h4');
  title.textContent = I18n.t('openmaps.maps_title');
  tab.appendChild(title);
  var handleList = document.createElement('div');
  handleList.className = 'openmaps-map-list';
  sortable(handleList, {
    forcePlaceholderSize: true,
    placeholderClass: 'result',
    handle: '.fa-reorder'
  })[0].addEventListener('sortupdate', function(e) {
    var movedHandle = handles.splice(e.detail.oldElementIndex, 1)[0];
    handles.splice(e.detail.elementIndex, 0, movedHandle);
    var layerGroups = omGroup.querySelectorAll('div.result-list wz-card');
    if (e.detail.elementIndex == layerGroups.length-1) {
      layerGroups[e.detail.oldElementIndex].parentNode.appendChild(layerGroups[e.detail.oldElementIndex]);
    } else {
      layerGroups[e.detail.oldElementIndex].parentNode.insertBefore(layerGroups[e.detail.oldElementIndex], layerGroups[e.detail.elementIndex]);
    }
    if (e.detail.elementIndex >= 0 && e.detail.elementIndex < handles.length) { // sanity check
      var aerialImageryIndex = W.map.getLayerIndex(W.map.getLayerByName('satellite_imagery'));
      W.map.getOLMap().setLayerIndex(movedHandle.layer, (aerialImageryIndex >= 0 ? aerialImageryIndex : 0) + e.detail.elementIndex + 1);
    }
    saveMapState();
  });
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
              maps[mapId].query_filters.forEach((func) => {
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
      var versions = Object.keys(translations.en.update).map((version) => version.replace('v', '').replaceAll('_', '.'));
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
      layerItem.innerHTML = `<wz-checkbox id="layer-switcher-${normalizedName}" value="off" checked="">${name}</wz-checkbox>`;
      var layerToggle = layerItem.querySelector('wz-checkbox');
      layerToggle.checked = false;
      parentGroup.querySelector('ul').appendChild(layerItem);
      var parentSwitch = parentGroup.querySelector('wz-toggle-switch');
      var parentObserver = new MutationObserver(() => {
        layerToggle.disabled = !parentSwitch.hasAttribute('checked');
        toggleCallback && toggleCallback(layerToggle.checked && parentSwitch.hasAttribute('checked'));
      });
      parentObserver.observe(parentSwitch, { attributes: true, attributeFilter: ['checked'] });
      layerToggle.addEventListener('click', e => toggleCallback(e.target.checked && parentSwitch.hasAttribute('checked')));
      layerToggle.checked = checked;
      return layerItem;
    }
  }

  function updateMapSelector() {
    var localMaps = [];
    let dataProjection = new OpenLayers.Projection('EPSG:4326');
    Object.keys(maps).forEach(function(id) {
      let bounds = (new OpenLayers.Bounds(maps[id].bbox)).transform(dataProjection, W.map.getProjectionObject());
      if (bounds.intersectsBounds(W.map.getExtent())) {
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

  // Create a tab for Open Maps
  async function addOpenMapsTab() {
    const {tabLabel, tabPane} = W.userscripts.registerSidebarTab('openMaps');

    tabLabel.innerHTML = '<span class="fa"></span>';
    tabLabel.title = I18n.t('openmaps.tab_title');
    tabPane.id = 'sidepanel-openMaps';

    await W.userscripts.waitForElementConnected(tabPane);

    return Promise.resolve(tabPane);
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
    // Turn blank tiles transparent - tuned to 0xFFFDFDFD for Virginia
    'vaBlankTiles2Transparent': bitmap => {
      var dirty = false;
      var pixelArray = new Uint32Array(bitmap.data.buffer);
      var white = 0xFFFFFFFF;
      var offwhite = 0xFFFDFDFD;
      var transparent = 0x00FFFFFF;
      var whitePixels = 0;
      // Do some analysis of the top and bottom borders to see whether this run is actually needed?
      for (var i = 0; i < bitmap.width; i++) {
        if (pixelArray[i] == white || pixelArray[i] == offwhite) {
          whitePixels++;
        }
      }
      for (var i = pixelArray.length - bitmap.width; i < pixelArray.length; i++) {
        if (pixelArray[i] == white || pixelArray[i] == offwhite) {
          whitePixels++;
        }
      }
      if (whitePixels > bitmap.width / 2) { // More than a quarter of the pixels are white
        pixelArray.forEach((pixel, idx) => {
          if (pixel == white || pixel == offwhite) {
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
    this.area = (new OpenLayers.Bounds(map.bbox)).transform(new OpenLayers.Projection('EPSG:4326'), W.map.getProjectionObject());
    this.outOfArea = !this.area.intersectsBounds(W.map.getExtent());
    this.hidden = (options && options.hidden ? true : false);
    this.transparent = (options && !options.transparent || map.format == 'image/jpeg' ? false : true);
    this.improveMap = (options && options.improveMap != undefined ? options.improveMap : true);
    var container = document.createElement('wz-card');
    var layerContainer = document.createElement('div');
    var title = document.createElement('div');
    var description = document.createElement('div');
    var editContainer = document.createElement('div');
    var remove, visibility, query, edit, externalLink, error, info;
    var loadedTiles = 0;
    var totalTiles = 0;
    var layerRedrawNeeded = false; // flag to set when a layer was made visibile/invisible
    // Deal with layers within map
    if (map.layers) {
      var layerKeys = Object.keys(map.layers);
      if (options && options.layers) {
        options.layers.forEach(function(oldLayer) { // Necessary if the map no longer contains certain layers that were still stored
          if (layerKeys.indexOf(oldLayer.name) != -1) {
            self.mapLayers.push(oldLayer);
            // Remove layer from map layers
            layerKeys.splice(layerKeys.indexOf(oldLayer.name), 1);
          }
        });
        var noLayersLeft = layerKeys.length == 0;
        layerKeys.forEach(function(layerKey) { // Add any new layers at the end of the checkboxes
          self.mapLayers.push({
            name: layerKey,
            visible: noLayersLeft ? (map.default_layers.indexOf(layerKey) != -1) : false
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
      } else if (map.type == 'WMS' && visibleLayers.length > 0 && !this.layer || (map.type != 'WMS' && !this.layer)) { // Add map that received layers
        if (map.type == 'WMS') {
          this.layer = new OpenLayers.Layer.WMS(map.title, map.url, {
            layers: visibleLayers.join(),
            transparent: self.transparent,
            format: map.format
          }, {
            transitionEffect: 'resize',
            attribution: map.attribution,
            isBaseLayer: false,
            projection: new OpenLayers.Projection(map.crs),
            tileSize: (map.tile_size ? new OpenLayers.Size(map.tile_size, map.tile_size) : new OpenLayers.Size(512, 512)),
            tileOptions: {crossOriginKeyword: 'anonymous'}
          });
        } else if (map.type == 'WMTS') {
          this.layer = new OpenLayers.Layer.WMTS({
            name: map.title,
            url: map.url,
            layer: map.layer,
            style: map.style,
            matrixSet: map.matrixSetId,
            tileOrigin: map.tileOrigin || undefined,
            //tileFullExtent: map.tileFullExtent || undefined,
            matrixIds: map.matrixIds || undefined,
            serverResolutions: map.serverResolutions || undefined,
            format: map.format,
            zoomOffset: map.zoomOffset || 0,
            projection: new OpenLayers.Projection(map.crs),
            transitionEffect: 'resize',
            attribution: map.attribution,
            isBaseLayer: false,
            projection: new OpenLayers.Projection(map.crs),
            tileSize: (map.tile_size ? new OpenLayers.Size(map.tile_size, map.tile_size) : new OpenLayers.Size(512, 512))
          });
        } else if (map.type == 'WFS') {
          this.layer = new OpenMaps.WFSLayer(map.title, map.url, this.area, map.crs, {
            markerIcon: map.markerIcon
          });
          console.log(this.layer, map.markerIcon);
          let layerContainer =  W.selectionManager.selectionMediator.getRootContainerLayer() || W.selectionManager.getRootContainerLayer();
          layerContainer.layers.push(this.layer);
          layerContainer.collectRoots();
          (W.selectionManager.selectionMediator._layers || W.selectionManager.selectableLayers).push(this.layer);
        }
        this.layer.setOpacity(this.opacity / 100);
        this.layer.setVisibility(!this.hidden && !this.outOfArea);

        if (map.zoomRange) {
          this.layer.events.register('moveend', null, function(obj) {
            if (obj.zoomChanged) {
              var zoom = W.map.getZoom();
              info.style.display = (self.layer && self.layer.getVisibility() && map.zoomRange && (zoom < map.zoomRange[0] || zoom > map.zoomRange[1]) ? 'inline' : 'none');
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
        var aerialImageryIndex = W.map.getLayerIndex(W.map.getLayerByName('satellite_imagery'));
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

    var buttons = document.createElement('div');
    buttons.className = 'buttons';
    var handleContainer = document.createElement('div');
    handleContainer.innerHTML = '<i class="fa fa-reorder"></i>';
    buttons.appendChild(handleContainer);

    error = createIconButton('fa-exclamation-triangle');
    error.style.color = 'red';
    error.style.display = 'none';
    error.addEventListener('click', this.clearError);
    buttons.appendChild(error);

    info = createIconButton('fa-info-circle', I18n.t('openmaps.layer_out_of_range'), true);
    buttons.appendChild(info);

    if (map.type == 'WMS' && map.queryable) {
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
      buttons.appendChild(query);
    }

    if (map.getExternalUrl) {
      externalLink = createIconButton('fa-external-link-square', I18n.t('openmaps.external_link_tooltip'));
      externalLink.addEventListener('click', function() {
        window.open(map.getExternalUrl(W.map.getExtent()), '_blank');
      });
      buttons.appendChild(externalLink);
    }

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
    buttons.appendChild(visibility);

    edit = createIconButton('fa-pencil', I18n.t('openmaps.edit_layer'));
    edit.addEventListener('click', function() {
      editContainer.style.display = (editContainer.style.display == 'none' ? 'block' : 'none');
    });
    buttons.appendChild(edit);

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
    buttons.appendChild(remove);
    container.appendChild(buttons);

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
    opacityLabel.style.marginLeft = '30px';
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
      layerContainer.className = 'openmaps-map-list';
      self.mapLayers.forEach(function(layerItem) {
        var mapLayer = map.layers[layerItem.name];
        var item = document.createElement('wz-card');
        item.className = 'result maps-menu-item list-item-card';
        var buttonContainer = document.createElement('div');
        buttonContainer.className = 'buttons';
        var layerHandleIcon = document.createElement('div');
        layerHandleIcon.innerHTML = '<i class="fa fa-reorder"></i>';
        buttonContainer.appendChild(layerHandleIcon);
        var layerTitle = document.createElement('p');
        var layerDescription = document.createElement('div');
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
          buttonContainer.appendChild(layerQuery);
        }
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
        buttonContainer.appendChild(visibility);
        item.appendChild(buttonContainer);
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
    container.className = 'result maps-menu-item list-item-card';
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

#sidepanel-openMaps .openmaps-map-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

#sidepanel-openMaps select {
  background-color: var(--background_variant, #f2f4f7);
  height: 40px;
  margin-top: 1em;
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

.open-maps-query-window .hidden {
  display: none;
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
  font-size: 14px;
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
  font-size: 20px;
}

input.open-maps-opacity-slider {
  vertical-align: middle;
  display: inline;
  margin-left: 8px;
  width: 100px;
}

#sidepanel-openMaps .additional-info {
  font-style: italic;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;

}

#sidepanel-openMaps .maps-menu-item {
  cursor: default;
}

#sidepanel-openMaps .maps-menu-item > .buttons {
  display: flex;
}

#sidepanel-openMaps .maps-menu-item > .buttons > div:first-child {
  flex-grow: 1;
}

#sidepanel-openMaps .maps-menu-item > div.edit-panel {
  border-radius: 8px;
  margin-top: 2px;
  padding: 8px;
  width: 100%;
  background-color: #eee;
  font-size: 14px;
}

#sidepanel-openMaps .maps-menu-item > div.edit-panel > p {
  font-weight: bold;
  padding-left: 0px;
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
  margin-bottom: 0;
  font-weight: bold;
  font-size: 14px;
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

function onWmeInitialized() {
  if (W.userscripts?.state?.isReady) {
    log('W is ready and in "wme-ready" state. Proceeding with initialization.');
    onWmeReady();
  } else {
    log('W is ready, but not in "wme-ready" state. Adding event listener.');
    document.addEventListener('wme-ready', onWmeReady, { once: true });
  }
}

function bootstrap() {
  if (!W) {
    log('W is not available. Adding event listener.');
    document.addEventListener('wme-initialized', onWmeInitialized, { once: true });
  } else {
    onWmeInitialized();
  }
}

bootstrap();
