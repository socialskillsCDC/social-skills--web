import Vue from 'vue/dist/vue.js';
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import firebase from 'firebase'; 
import Vuefire from 'vuefire';
import {apiConfig} from "../localConfig";

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(Vuefire);

let app;
let config;
if (Vue.config.productionTip == false){
  config = apiConfig;
}


firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    console.log(user);
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});
