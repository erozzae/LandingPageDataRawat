import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _212618cc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _1b28d2d0 = () => interopDefault(import('..\\pages\\blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _8d61e830 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))

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
    path: "/id",
    component: _212618cc,
    name: "index___id"
  }, {
    path: "/id/blank-page",
    component: _1b28d2d0,
    name: "blank-page___id"
  }, {
    path: "/id/contact",
    component: _8d61e830,
    name: "contact___id"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
