import {
    html,
    PolymerElement
  } from '@polymer/polymer/polymer-element.js';
  
  /**
   * @customElement
   * @polymer
   */
  class Test extends PolymerElement {
    ready() {
      super.ready()
      console.log('test.js creado'); 
    }
    static get template() {
      return html `
        <h2>Component {{dataTest}}!</h2>
        <button on-click="handleClick">Kick Me</button>
      `;
    }
    static get properties() {
      return {
        dataTest: {
          type: Boolean,
          value: window.accessMain,
          notify: true
        }
      };
    }
    handleClick() {
      console.log(':handleClick:');
      this.dataTest = !this.dataTest;
    }
  }
  
  window.customElements.define('test-c', Test);