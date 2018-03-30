import Vue from 'vue';
import App from './App.vue';
import Timer from './components/Timer.vue';
import TimeSetting from './components/TimeSetting.vue';

Vue.component('app-timer', Timer);
Vue.component('app-time-setting', TimeSetting);

new Vue({
  el: '#app',
  render: h => h(App)
})
