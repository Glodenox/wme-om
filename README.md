# WME Open Maps

This userscript augments the [Waze Map Editor](https://www.waze.com/editor/) by adding additional maps such as the cadastre as layer. The maps available here are open data that can be used within commercial applications such as Waze.

## How to use

![Open Maps layers](http://tomputtemans.com/waze-scripts/images/Sidebar.png)

The script adds a tab with a selection list that will contain any maps that are available for the current view of the map. It is also possible to easily disable the satellite imagery in Waze from here should you have an alternative source of imagery active.

![Open Maps map attributes](http://tomputtemans.com/waze-scripts/images/LayerAttributes.png)

In the sidebar you can add, reorder and remove maps, change how transparent a map should be, decide which map layers should be loaded and query the map or a specific layer to retrieve more information from the map service (if available).

![Open Maps layer drawer](http://tomputtemans.com/waze-scripts/images/LayerChooser.png)

It is also possible to adjust the visibility of these maps within the usual layer drawer. These changes are considered to be temporary and will not be preserved over sessions.

![Open Maps overview](http://tomputtemans.com/waze-scripts/images/Overview.png)

## Installation instructions

> TL;DR: install as most other WME userscripts from its [Greasy Fork page](https://greasyfork.org/scripts/13334-wme-openmaps)

Userscripts are snippets of code that are executed after the loading of certain webpages. This script does this after the loading of the Waze Map Editor. In order to run userscripts in your browser, you are adviced to use Firefox or Google Chrome.

You will need to install an add-on that manages userscripts for this to work. If you use Firefox, you should install [GreaseMonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/) and for Google Chrome you should install [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).

These add-ons will be visible in the browser with an additional button that is visible to the right of the address bar. Through this button it will be possible to maintain any userscripts you install.

For WME Open Maps, you should be able to install the script at [Greasy Fork](https://greasyfork.org/scripts/13334-wme-openmaps). There will be a big green install button which you will have to press to install the script.
__When installing userscripts always pay attention to the site(s) on which the script runs.__ This script only runs on Waze.com, so other sites will not be affected in any way.

After installing a userscript, you will be able to find it working on the site(s) specified. Do note that if you had the page open before installing the userscript, you will first need to refresh the page.

GreaseMonkey and TamperMonkey will occasionally check for new versions of these scripts. You will get a notification when a new version has been found and installed.

## Feedback and suggestions

Any issues found can be reported at the [GitHub project page](https://github.com/Glodenox/wme-om/issues). A forum thread will be made later when more maps are added. If you want to propose a map to be added, please talk to one of your country champs. All proposed maps need to be open data. This means that they can be used for commercial use as well without any license. Often data sources provided by the government meet this requirement, but the license must be vetted carefully to be absolutely sure.
