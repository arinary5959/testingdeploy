 /*eslint-disable*/
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './routes/index.js';
import { store } from './store/index.js';
import { firebase } from './firebase/index.js';
console.log(firebase)

const app = createApp(App);
// console.log(firebase)
app.use(router);
app.use(store);
app.mount('#app');
