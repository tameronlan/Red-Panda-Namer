import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ComponentView from './lib/ComponentView';
import Toasted from 'vue-toasted';

import './scss/main.scss';

Vue.config.productionTip = false;

// Components
Vue.component('ComponentView', ComponentView);

// Modules
Vue.use(Toasted, {
    position: 'bottom-center',
    duration: 4000
});

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});
