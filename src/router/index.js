import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import user from '../views/user.vue'
import main from '../views/main.vue'
Vue.use(VueRouter)

//1、创建路由组件

//2、将路由与组件进行映射
const routes = [
  //主路由
  {
    path: '/',
    component: main,
    children: [
      //子路由
      { path: '/home', component: home },
      { path: '/user', component: user }
    ]
  },
]

//3、创建router实例，然后传routes配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

//将当前的router实例对外进行暴露
export default router

//将router挂载到根节点（mine.js） 



