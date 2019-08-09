import Vue from 'vue'
import Router from 'vue-router'

import home from '../views/tabbar/HomeContainer.vue' //首页路由

// const home = () => import('../views/tabbar/HomeContainer.vue')
const Classify = () => import('../views/tabbar/ClassifyContainer') //分类
const mine = () => import('../views/tabbar/MineContainer') //我的
const shopping = () => import('../views/tabbar/ShoppingContainer') //购物车

// 子路由
const nongchanpin = () => import('../views/ClassifyContainer/nongchanpin.vue') //农产品
const nongyongzichan = () => import('../views/ClassifyContainer/nongyongzichan.vue') //农用
const communication = () =>  import('../views/ClassifyContainer/communication')  //通讯
const maquillage = () =>  import('../views/ClassifyContainer/maquillage')  //化妆

//列表页
const listpage = () => import('../views/Listpage/litspage')
//详情页
const detailpage=()=>import('../views/Listpage/detailpage')

Vue.use(Router)
const routes = [{ //首页路由
    path: '/',
    name: 'home',
    component: home
  },
  { //分类
    path: '/classify',
    name: 'classify',
    component: Classify,
    redirect:'classify/nongchan',
    children:[
      { //农产品
        path: 'nongchan',
        name: 'nongchan',
        component: nongchanpin
      },
      { //农产品
        path: 'nongyong',
        name: 'nongyong',
        component: nongyongzichan
      },
      { //通讯
        path: 'commun',
        name: 'commun',
        component: communication
      },
      { //化妆
        path: 'maquillage',
        name: 'maquillage',
        component: maquillage
      },
    ]
  },
  { //列表页
    path: '/listpage/:id',
    name: 'listpage',
    component: listpage
  },
  { //详情页
    path: '/detailpage/:id',
    name: 'detailpage',
    component: detailpage
  },
  { //我的
    path: '/mine',
    name: 'mine',
    component: mine
  },
  { //购物车
    path: '/shopping',
    name: 'shopping',
    component: shopping
  },
 
];
let router = new Router({
  routes: routes
});

export default router