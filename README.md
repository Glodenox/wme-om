# WME Open Maps

This userscript augments the [Waze Map Editor](https://www.waze.com/editor/) by adding additional maps such as the cadastre as layer. These maps can be made semi-transparant so the satellite imagery is still visible.

### Current maps configured

- AGIV: cadastre and satellite imagery (Flanders, Belgium)
- PICC (Wallonia, Belgium)
- Irisnet (Brussels, Belgium)
- BAG (The Netherlands)
- Weggegevens (The Netherlands)
- Luchtfoto 2014 (The Netherlands)
- BGT (The Netherlands)

## Installation instructions

> TL;DR: install as most other WME userscripts from its [Greasy Fork page](https://greasyfork.org/scripts/13334-wme-openmaps)

Userscripts are snippets of code that are executed after the loading of certain webpages. This script does this after the loading of the Waze Map Editor. In order to run userscripts in your browser, you are adviced to use Firefox or Google Chrome.

You will need to install an add-on that manages userscripts for this to work. If you use Firefox, you should install [GreaseMonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/) and for Google Chrome you should install [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).

These add-ons will be visible in the browser with an additional button that is visible to the right of the address bar. Through this button it will be possible to maintain any userscripts you install.

For WME Open Maps, you should be able to install the script at [Greasy Fork](https://greasyfork.org/scripts/13316-wme-road-events-data). There will be a big green install button which you will have to press to install the script.
__When installing userscripts always pay attention to the site(s) on which the script runs.__ This script only runs on Waze.com, so other sites will not be affected in any way.

After installing a userscript, you will be able to find it working on the site(s) specified. Do note that if you had the page open before installing the userscript, you will first need to refresh the page.

GreaseMonkey and TamperMonkey will occasionally check for new versions of these scripts. You will get a notification when a new version has been found and installed.

## How to use

![Open Maps layers](https://tomputtemans.com/waze-scripts/images/OM-3.png)

The script adds a tab with a selection list that will contain any maps that are available for the current view of the map. With the slider you can determine how strongly the selected map obscures the Waze satellite imagery.

![Open Maps opacity slider](https://tomputtemans.com/waze-scripts/images/OM-4.jpg)

## Feedback and suggestions

Any issues found can be reported at the [GitHub project page](https://github.com/Glodenox/wme-om/issues). A forum thread will be made later when more maps are added. If more maps are to be proposed, they need to be open data. This means that they can be used for commercial use as well without any license. Usually data sources provided by the government meet this requirement, but the license must be checked to be absolutely sure.
