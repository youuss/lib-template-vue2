import Vue from 'vue';
import element from 'element-ui';
import App from './App.vue';
import CMP from '../lib';
import '../style.scss';

Vue.use(CMP);
Vue.use(element, { size: 'small' });

new Vue({
  el: '#app',
  render: (h) => h(App),
});
