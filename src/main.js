// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

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
