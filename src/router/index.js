import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
import Home from '@/pages/home/home.vue'
import Product from '@/pages/product/product.vue'
import Contact from '@/pages/contact/contact.vue'
import Details from '@/pages/details/details.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/home',
      component: Index,
      children: [
        {path: 'home', name: 'Home', component: Home},
        {path: 'product', name: 'Product', component: Product},
        {path: 'contact', name: 'Contact', component: Contact},
        {path: 'details', name: 'Details', component: Details}

      ]
    }
  ]
})
