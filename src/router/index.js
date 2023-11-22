import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import user from '../views/user.vue'
import main from '../views/main.vue'
import mall from '@/views/mall'
import pageOne from '@/views/pageOne'
import pageTwo from '@/views/pageTwo'

Vue.use(VueRouter)

//1、创建路由组件

//2、将路由与组件进行映射
const routes = [
  //主路由
  {
    path: '/',
    component: main,
    redirect:'/home',  //重定向（当路径是/的时候，重定向到home页面）
    children: [
      //子路由
      { path: '/home', component: home },  //首页
      { path: '/user', component: user },  //用户管理
      { path: '/mall', component: mall },  //商品管理
      { path: '/page1', component: pageOne },  //
      { path: '/page2', component: pageTwo },  //
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



