import { createApp } from 'vue';
import App from './App.vue';
import VTUI from '../../src/index';

createApp(App).use(VTUI).mount('#app');

console.log(VTUI);