import { createApp } from 'vue';
import App from './App.vue';
import VTUI, { Button } from '../../src/index';
import '../../src/styles/index.less';

createApp(App).use(VTUI).mount('#app');

console.log(VTUI, Button);