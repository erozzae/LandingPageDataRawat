import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _412fdc0d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _3b343a3d = () => interopDefault(import('..\\pages\\blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _b40cb8ca = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))

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
    component: _412fdc0d,
    name: "index___id"
  }, {
    path: "/id/blank-page",
    component: _3b343a3d,
    name: "blank-page___id"
  }, {
    path: "/id/contact",
    component: _b40cb8ca,
    name: "contact___id"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
