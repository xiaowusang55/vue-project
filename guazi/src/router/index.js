import Vue from 'vue'
import Router from 'vue-router'
import contents from '../components/Contents.vue';
import contents1 from '../components/Contents1.vue';
import contents2 from '../components/Contents2.vue';
import contents3 from '../components/Contents3.vue';
import contents4 from '../components/Contents4.vue';
import contents5 from '../components/Contents5.vue';
import contents6 from '../components/Contents6.vue';
import contents7 from '../components/Contents7.vue';


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/hotsales/:id',
      component: contents,
      children: [
        {
          path:'gyLike',
          component: contents1
        },
        {
          path:'stSelect',
          component: contents2
        },
        {
          path:'newArrival',
          component: contents3
        },
        {
          path:'bigSale',
          component: contents4
        },
        {
          path:'amtNew',
          component: contents5
        },
        {
          path:'trnCar',
          component: contents6
        },
        {
          path:'suv',
          component: contents7
        },
      ]
    },
  ]
})
