import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-if.js';
import '../components/login.js';
import '../components/view.js';


/**
 * @customElement
 * @polymer
 */
class BombermanApp extends PolymerElement {
  ready() {
    super.ready()

    const socket = io('http://localhost:8000/');

    // Whenever the server emits 'new message', update the chat body
    socket.on('new message', (data) => {
      console.log('data:', data);
    });

    console.log('bomberman-app creado');
  }
  static get template() {
    return html `
      <!-- <h2>Main {{datam}}!</h2> -->
      <!-- <button on-click="handleClick">Kick Me</button> -->
      <template is="dom-if" if="{{!access_main}}">
        <login-c access_login='{{access_main}}' user_login='{{user_main}}' password_login='{{password_main}}'></login-c>
      </template>
      <view-c access_view='{{access_main}}'  user_view='{{user_main}}' password_view='{{password_main}}'></view-c>
    `;
  }
  static get properties() {
    return {
      access_main: {
        type: Boolean,
        value: false
      },
      user_main: {
        type: String,
        value: 'user'
      },
      password_main: {
        type: String,
        value: 'password'
      }
    };
  }
  handleClick() {
    console.log(':handleClick:');
    this.access_main = !this.access_main;
  }
}

window.customElements.define('bomberman-app', BombermanApp);