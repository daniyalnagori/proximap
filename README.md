# ProxiMap

Proximap is a responsive web app for finding nearby public infrastructure, and uses drinking fountains as a showcase example.
It is being developed in conjunction with [Datablue](//github.com/mmmatthew/datablue), a tool for collecting, aggregating, and serving
fountain data from Open Street Map, Wikidata, Wikimedia Commons, and Wikipedia. Check out [water-fountains.org](//water-fountains.org)
for more information on the overall project, and [beta.water-fountains.org](http://beta.water-fountains.org) to see a beta version of the app!

The project is open source under the GNU Affero General Public License, with a profit contribution agreement applying under restricted conditions. See [COPYING](/COPYING) for information.

# Up and running

## Requirements
- NodeJS
- Angular CLI: after NodeJS is installed, open a command window and run `npm install -g @angular/cli`

## Get the files and dependencies

Clone this repository to your computer, open a command window in the directory you cloned to, change to the `code/` directory and run `npm install`.

## Launch a dev server

In the `code/` directory, open a command window and  run `ng serve` to launch a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. If the app fails to display in the browser, run `ng serve -prod` instead.

## Build the project

Run `ng build` from the `code/` directory to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Extract and generate translations

html tags can be marked for translation with the `i18n` attribute. Extract strings for translation with `ng xi18n`. Follow instructions [here](https://angular.io/guide/i18n#create-the-translation-files) to create translation files, and then use the CLI to serve or build the project in the alternative languages: `ng serve --aot --i18nFile=src/locale/messages.de.xlf --i18nFormat=xlf --locale=de`

# Testing
We use BrowserStack to test design concepts and user experience for iOS and Android devices.
[![BrowserStack logo](https://raw.githubusercontent.com/mmmatthew/proximap/master/docs/images/BrowserStack_Logo-01.png "BrowserStack")](http://browserstack.com/)

# Contributing

Submit an issue for a feature request, architecture suggestion, or to discuss a modification you have made or would like to make. 

If you would like to contribute directly to the code, fork this repo and make a pull request.

To get ideas for how to contribute, see open issues.
