import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import dateFilter from '@/filters/date.filter'
import massegePlugin from '@/utils/message.plugin'
// import axios from 'axios'

Vue.config.productionTip = false

// Vue.use(axios)
Vue.use(massegePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


