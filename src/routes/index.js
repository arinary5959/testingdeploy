import { createRouter, createWebHistory } from 'vue-router';
import menua from '../view/aa.vue';
import menub from '../view/bb.vue';
// import home from '../components/HelloWorld.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        // {
        //     path: '/',
        //     name: 'home',
        //     component: home
        // },
        {
            path: '/menua',
            name: 'menua',
            component: menua
        },
        {
            path: '/menub',
            name: 'menub',
            component: menub
        },
    ]
});