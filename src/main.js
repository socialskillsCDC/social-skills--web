import Vue from 'vue/dist/vue.js';
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import firebase from 'firebase';

Vue.config.productionTip = false;
Vue.use(Argon);


let app;
let config = {
  apiKey: "",
  authDomain: "sociaskills.firebaseapp.com",
  databaseURL: "https://sociaskills.firebaseio.com",
  projectId: "sociaskills",
  storageBucket: "sociaskills.appspot.com",
  messagingSenderId: "586033119397"
};


firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});
