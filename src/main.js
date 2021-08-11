import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import observe  from "@/assets/js/observe.js"
Vue.config.productionTip = false

let obj={
  a:{
    m:{
      n:5,
    }
  },
  b:4,
  g:[11,22,33]
};
observe(obj);
obj.g.push({b:5});
obj.g.b=7;

var vm=new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
