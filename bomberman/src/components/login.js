import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class Login extends PolymerElement {
  ready() {
    super.ready();
    console.log('login-c.js creado');
  }
  static get template() {
    return html `
      <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
        }
        
        /* Full-width input fields */
        input[type=text],
        input[type=password] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }
        
        /* Set a style for all buttons */
        button {
            background-color: #4CAF50;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            cursor: pointer;
            width: 100%;
        }
        
        button:hover {
            opacity: 0.8;
        }
        
        /* Extra styles for the cancel button */
        .cancelbtn {
            width: auto;
            padding: 10px 18px;
            background-color: #f44336;
        }
        
        /* Center the image and position the close button */
        .imgcontainerModal {
            text-align: center;
            margin: 24px 0 12px 0;
            position: relative;
        }
        
        img.avatar {
            width: 40%;
            border-radius: 50%;
        }
        
        .containerModal {
            padding: 16px;
        }
        
        span.psw {
            float: right;
            padding-top: 16px;
        }
        
        /* The Modal (background) */
        .modal {
            display: block;
            /* Hidden by default */
            position: fixed;
            /* Stay in place */
            z-index: 1;
            /* Sit on top */
            left: 0;
            top: 0;
            width: 100%;
            /* Full width */
            height: 100%;
            /* Full height */
            overflow: auto;
            /* Enable scroll if needed */
            background-color: rgb(0, 0, 0);
            /* Fallback color */
            background-color: rgba(0, 0, 0, 0.8);
            /* Black w/ opacity */
            padding-top: 60px;
        }
        
        /* Modal Content/Box */
        .modal-content {
            background-color: #fefefe;
            margin: 5% auto 15% auto;
            /* 5% from the top, 15% from the bottom and centered */
            border: 1px solid #888;
            width: 250px;
            /* width: 80%; original*/
            /* Could be more or less, depending on screen size */
        }
        
        /* The Close Button (x) */
        .close {
            position: absolute;
            right: 25px;
            top: 0;
            color: #000;
            font-size: 35px;
            font-weight: bold;
        }
        
        .input-center {
            text-align: center;
        }
        
        .close:hover,
        .close:focus {
            color: red;
            cursor: pointer;
        }
        
        /* Add Zoom Animation */
        .animateModal {
            -webkit-animation: animatezoom 0.6s;
            animation: animatezoom 0.6s
        }
        
        @-webkit-keyframes animatezoom {
            from {
                -webkit-transform: scale(0)
            }
        
            to {
                -webkit-transform: scale(1)
            }
        }
        
        @keyframes animatezoom {
            from {
                transform: scale(0)
            }
        
            to {
                transform: scale(1)
            }
        }
        
        /* Change styles for span and cancel button on extra small screens */
        @media screen and (max-width: 300px) {
            span.psw {
                display: block;
                float: none;
            }
        
            .cancelbtn {
                width: 100%;
            }
        }
      </style>
      <div id="id01" class="modal">

        <div class="modal-content animateModal" action="/action_page.php" method="post">
        
          <div class="imgcontainerModal">
          <!-- <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span> -->
          <!-- <img src="img_avatar2.png" alt="Avatar" class="avatar"> -->
          </div>

          <div class="containerModal">
          <!-- <label for="uname"><b>Username</b></label> -->
            <input id="modal_user_login" class="input-center" type="text" placeholder="Usuario" name="uname" required>

          <!-- <label for="psw"><b>Password</b></label> -->
            <input id="modal_user_password"  class="input-center" type="password" placeholder="Contrasena" name="psw" required on-change="handleLogin">

            <button type="button" on-click="handleLogin">Entrar</button>

          </div>

        </div>

      </div>
    `;
  }
  static get properties() {
    return {
      access_login: {
        type: Boolean,
        value: window.access_main,
        notify: true // TRUE CAMBIA TODO, Y FALSE NO
      },
      user_login: {
        type: String,
        value: window.user_main,
        notify: true
      },
      password_login: {
        type: String,
        value: window.password_main,
        notify: true
      }
    };
  }
  handleFunction() {
  }
  handleLogin(){
    this.validarLogin();
  }
  validarLogin(){
    this.user_login = this.shadowRoot.getElementById('modal_user_login').value;
    this.password_login = this.shadowRoot.getElementById('modal_user_password').value;
    if (this.user_login === "" || this.password_login === "") {
      alert('Complete los datos');
      return;
    }
    this.access_login = !this.access_login;    
    this.shadowRoot.getElementById('modal_user_login').value = '';
    this.shadowRoot.getElementById('modal_user_password').value = '';
  }
}

window.customElements.define('login-c', Login);