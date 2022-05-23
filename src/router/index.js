import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

//引入导航内容组件
import Fuwufanwei from '../views/fuwufanwei.vue'
import Qiyezizhi from '../views/qiyezizhi.vue'
import Gongchengyeji from '../views/gongchengyeji'
import Zhuanyeshebei from '../views/zhuanyeshebei.vue'
import Lianxi from '../views/lianxi.vue'

//引入服务范围的三个组件
import Gongchengjiance from '../components/gongchengjiance.vue'
import Anquanjianding from '../components/anquanjianding.vue'
import Jishuzixun from '../components/jishuzixun.vue'


//引入工程业绩的多个组块
import Gc01 from '../components/gongchengyeji/gc01.vue'
import Gc02 from '../components/gongchengyeji/gc02.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomeView,
  },

  {
    path: '/fuwufanwei',
    component: Fuwufanwei,
    redirect: '/fuwufanwei/gongchengjiance',
    children: [
      {
        path: '/fuwufanwei/gongchengjiance',
        component: Gongchengjiance,
      },
      {
        path: '/fuwufanwei/anquanjianding',
        component: Anquanjianding,
      },
      {
        path: '/fuwufanwei/jishuzixun',
        component: Jishuzixun,
      },
    ]
  },
  {
    path: '/zhuanyeshebei',
    component: Zhuanyeshebei
  },
  {
    path: '/gongchengyeji',
    component: Gongchengyeji
  },
  {
    path: '/gongchengyeji/gc01',
    component: Gc01
  },
  {
    path: '/qiyezizhi',
    component: Qiyezizhi
  },
  {
    path: '/lianxi',
    component: Lianxi
  }
]

const router = new VueRouter({
  routes,

})

export default router
