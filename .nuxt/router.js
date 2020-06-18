import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _356405ab = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _7912c674 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _6bbc6294 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _356405ab,
    name: "login"
  }, {
    path: "/signup",
    component: _7912c674,
    name: "signup"
  }, {
    path: "/",
    component: _6bbc6294,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
