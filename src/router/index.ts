import Vue from 'vue'
import Router from 'vue-router'
import User from '../views/User.vue'

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: User
    }
];

const route = new Router({
    mode: 'history',
    routes
});

/* 前置导航守卫 */
route.beforeEach((to, from, next) => {
    // do something before next route
    next()
});

/* 后置导航守卫 */
route.afterEach((to, from) => {
    // do something after route
});

export default route
