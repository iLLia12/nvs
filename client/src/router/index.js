import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import routes from './routes'

Vue.prototype.$axios = axios
const api = axios.create({ baseURL: 'https://api.example.com' })

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,   
  })

  return Router
}
