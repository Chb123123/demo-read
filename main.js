import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import { myRequrse } from "util/defaultUrl.js"
Vue.prototype.$myRequrse = myRequrse
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif