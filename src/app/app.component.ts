import { Component } from '@angular/core';

import 'xml-viewer-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xml-viewer-app';
  xmlValue : string = `<?xml version="1.0" encoding="utf-8"?>
  <root></root>`;

  currentTimeValue: string = '';

  constructor() {
    setInterval(() => this.changeXmlValue(), 5000);
  }

  changeXmlValue = () => {
    console.log('changeXmlValue() call');

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
        <time>${this.currentTimeValue}</time>
    </root>`;

    setInterval(() => this.setCurrentTime(), 1000);
  }

  setCurrentTime() {
    const d = new Date();
    this.currentTimeValue = d.toLocaleTimeString();
  }
}
