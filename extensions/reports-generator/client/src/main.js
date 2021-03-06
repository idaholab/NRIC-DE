// Copyright 2020, Battelle Energy Alliance, LLC  ALL RIGHTS RESERVED

import Vue from 'vue';
import App from './App'
import {getTemplates} from "./utils/utils";
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
