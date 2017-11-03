import {Element as PolymerElement}
  from "../node_modules/@polymer/polymer/polymer-element.js"

export class MyAppElement extends PolymerElement {
  static get is(){
    return 'my-app';
  }

  static get template(){
    return `<h1>Hello World - [[name]]</h1>`;
  }

  static get properties(){
    name: {
      Type: String
    }
  }

  constructor() {
    super();
    this.name = 'Polymer';
  }
}

customElements.define('my-app', MyAppElement);
