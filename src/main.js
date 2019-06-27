// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Header from './components/Header/Header' 
import imgContainer from './components/Section/imgContainer'
import Section from './components/Section/Section'
import Content from './components/Section/Content'
import Form from './components/Form/Form'
import About from './components/Section/About'

Vue.use(BootstrapVue);

//CUSTOM GLOBAL COMPONENTS
Vue.component('app-header', Header);
Vue.component('img-container', imgContainer);
Vue.component('app-section', Section);
Vue.component('app-content', Content);
Vue.component('app-form', Form);
Vue.component('app-about', About);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
