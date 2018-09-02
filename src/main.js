import Vue from 'vue/dist/vue.js';
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import firebase from 'firebase'; 
import Vuefire from 'vuefire';

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(Vuefire);

let app;
let config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID
};


firebase.initializeApp(config); 
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



