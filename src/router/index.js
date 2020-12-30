import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,

    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            auth: true//添加字段判断该页面是否需要登录
        }
    }
]



const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    console.log('ddd')
    // to要跳转到的路径
    // from从哪个路径来
    // next往下执行的回调
    // 在localStorage中获取token
    let token = localStorage.getItem('userName')
    // 判断该页面是否需要登录
    // if (to.meta.auth) {
    //     console.log(token)
    //     // 如果token存在直接跳转
    //     if (token) {
    //         next()
    //     } else {
    //         // 否则跳转到login登录页面
    //         next({
    //             path: '/',
    //             // 跳转时传递参数到登录页面，以便登录后可以跳转到对应页面

    //         })
    //     }
    // } else {
    //     // 如果不需要登录，则直接跳转到对应页面
    //     next()
    // }
})
export default router
