# ng2-little-kitty
Just for fun

## Installation
First you need to install the npm module:
```sh
npm install ng2-little-kitty --save
```

If you use SystemJS to load your files, you might have to update your config with this if you don't use `defaultJSExtensions: true`:
```js
System.config({
    packages: {
        "ng2-little-kitty": {"defaultExtension": "js"}
    }
});
```


```js
import {HTTP_PROVIDERS} from 'angular2/http';
import {Component, Injectable} from 'angular2/core';
import {LittleKittyService} from 'ng2-little-kitty/ng2-little-kitty';
import {bootstrap} from 'angular2/platform/browser';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    LittleKittyService // not required, but recommended to have 1 unique instance of your service
]);