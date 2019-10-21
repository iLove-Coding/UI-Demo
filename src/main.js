import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from "./router";
import store from "./store";
import VueParticles from 'vue-particles'
import VueCookie from 'vue-cookie';
// Tell Vue to use the plugin
Vue.use(VueCookie);
Vue.use(VueParticles)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')