import Vue from 'vue'
import Router from 'vue-router'
import contents from '../components/Contents.vue';
// import contents1 from '../components/Contents1.vue';
// import contents2 from '../components/Contents2.vue';
// import contents3 from '../components/Contents3.vue';
// import contents4 from '../components/Contents4.vue';
// import contents5 from '../components/Contents5.vue';
// import contents6 from '../components/Contents6.vue';
// import contents7 from '../components/Contents7.vue';
const contents1 = () => import('../components/Contents1.vue');
const contents2 = () => import('../components/Contents2.vue');
const contents3 = () => import('../components/Contents3.vue');
const contents4 = () => import('../components/Contents4.vue');
const contents5 = () => import('../components/Contents5.vue');
const contents6 = () => import('../components/Contents6.vue');
const contents7 = () => import('../components/Contents7.vue');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/hotsales',
      
    },
    {
      path: '/hotsales/gyLike',
      component: contents1
    },
    {
      path: '/hotsales/stSelect',
      component: contents2
    },
    {
      path: '/hotsales/newArrival',
      component: contents3
    },
    {
      path: '/hotsales/bigSale',
      component: contents4
    },
    {
      path: '/hotsales/amtNew',
      component: contents5
    },
    {
      path: '/hotsales/trnCar',
      component: contents6
    },
    {
      path: '/hotsales/suv',
      component: contents7
    },

  ]
})


