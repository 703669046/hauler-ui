import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    // {
    //     path: '/',
    //     redirect: '/tab/home'
    // },
    
    {
        path: '/',
        name: 'other',
        meta: {title: 'other'},
        component: () => import('@/views/index.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
