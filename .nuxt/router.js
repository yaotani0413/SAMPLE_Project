import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _387fee82 = () => interopDefault(import('../pages/NewPost.vue' /* webpackChunkName: "pages/NewPost" */))
const _1140f0f5 = () => interopDefault(import('../pages/ProfileEdit.vue' /* webpackChunkName: "pages/ProfileEdit" */))
const _25b22270 = () => interopDefault(import('../pages/Signin.vue' /* webpackChunkName: "pages/Signin" */))
const _3a4878e6 = () => interopDefault(import('../pages/Signup.vue' /* webpackChunkName: "pages/Signup" */))
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
    path: "/NewPost",
    component: _387fee82,
    name: "NewPost"
  }, {
    path: "/ProfileEdit",
    component: _1140f0f5,
    name: "ProfileEdit"
  }, {
    path: "/Signin",
    component: _25b22270,
    name: "Signin"
  }, {
    path: "/Signup",
    component: _3a4878e6,
    name: "Signup"
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
