import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false

import LabelDatePicker from "@/share/LabelDatePicker"
Vue.component('label-date-picker', LabelDatePicker);
Vue.use(LabelDatePicker);

import DateInput from "@/share/components/input/DateInput"
Vue.component('s-date-input', DateInput);
Vue.use(DateInput);

import LinkedInput from "@/share/components/input/LinkedInput"
Vue.component('s-linked-input', LinkedInput);
Vue.use(LinkedInput);

import CrudBar from "@/share/components/detail/CrudBar"
Vue.component('s-crud-bar', CrudBar);
Vue.use(CrudBar);

import ListView from "@/share/views/ListView"
Vue.component('s-list-view', ListView);
Vue.use(ListView);

import BaseDetailView from "@/share/views/BaseDetailView.vue"
Vue.component('base-detail-view', BaseDetailView);
Vue.use(BaseDetailView);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
