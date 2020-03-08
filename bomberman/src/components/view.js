import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';


/**
 * @customElement
 * @polymer
 */
class View extends PolymerElement {
  ready() {
    super.ready();
    console.log('view-c.js creado');
  }
  static get template() {
    return html `
      <style>
        #map{
          height: 600px;
          display: block;
        }
      </style>
      <div id="map">
      </div>
    `;
  }
  static get properties() {
    return {
      access_view: {
        type: Boolean,
        value: window.access_main,
        notify: true
      },
      user_view: {
        type: String,
        value: window.user_main,
        notify: true
      },
      password_view: {
        type: String,
        value: window.password_main,
        notify: true
      }
    };
  }

}

window.customElements.define('view-c', View);