# Angular/Ionic Framework

This is a demo project showing an [xml-viewer-component](https://github.com/dwarfcoder/xml-viewer-component) usage 

First of all, install and save component:
```
npm install xml-viewer-component --save
```

Then you should import CUSTOM_ELEMENTS_SCHEMA in your module:

```javascript
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
```

Add schema section in @NgModule declaration:

```javascript
@NgModule({
    // ...
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
```

The *CUSTOM_ELEMENTS_SCHEMA* needs to be included in any module that uses custom elements.

Then you should call *defineCustomElements()* function. You can place this call in *main.ts* when bootstraping module, like this (added to main.ts):

```javascript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// add this line of code:
import { defineCustomElements } from 'xml-viewer-component/dist/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// add this line of code:
defineCustomElements(window);
```

## Usage

Then in your page markup file (i.e. my-page.html, or contacts.html or whatever markup file you need) call to component like this:

```html
<xml-viewer-component xml='<?xml version="1.0" encoding="utf-8"?>
<root>
    <name required="true">Test XML data</name>
    <description>
        This is a test data
    </description>
    <list>
        <item primary="true">Item 1</item>
        <item>Item 2</item>
    </list>
</root>
'></xml-viewer-component>
```

Parameters:

* xml: an xml data (text)

## Accessing component

Add markup to your template like this (details in comments for this snippet):
```javascript
import {Component, ElementRef, ViewChild} from '@angular/core';

import 'xml-viewer-component';

@Component({
    selector: 'app-home',
    template: `<xml-viewer-component xml={{xmlValue}}></xml-viewer-component>`,
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

    // define a variable containing xml value as a string. This variable is binded to the *xml* attribute of the xml-viewer-component
    xmlValue : string = `<?xml version="1.0" encoding="utf-8"?><root></root>`;

    constructor() {
        // demo purpose only: change xml value
        setInterval(() => this.changeXmlValue(), 5000);
    }

  changeXmlValue = () => {
    this.xmlValue = `<?xml version="1.0" encoding="utf-8"?>
    <root>
        <name required="true">Test XML data</name>
        <description>
            This is a test data
        </description>
        <list>
            <item primary="true">Item 1</item>
            <item>Item 2</item>
        </list>
    </root>`;
}
```
This is it.
Happy coding!