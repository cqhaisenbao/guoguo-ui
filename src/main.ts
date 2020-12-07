import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/guoguo.scss';
import './assets/style/index.scss';
import {createApp} from 'vue';
import App from './App.vue';
import {router} from './router';
import 'github-markdown-css';

const app = createApp(App);
app.use(router);
app.mount('#app');
