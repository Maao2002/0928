// 引入全部并封装成一个对象vueRouter
import * as VueRouter from 'vue-router'

// 1.定义组件
import MyView from "@/components/MyView.vue"
import MyMusic from "@/components/MyMusic.vue"
// 2.配置路由规则
let routes = [
    { path: "/view", component: MyView },
    { path: "/music", component: MyMusic },
]
// 3.创建实例
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

export default router