import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _766f74f1 = () => interopDefault(import('../pages/aboutus/index.vue' /* webpackChunkName: "pages/aboutus/index" */))
const _40ccba07 = () => interopDefault(import('../pages/previous/index.vue' /* webpackChunkName: "pages/previous/index" */))
const _05f0cfa5 = () => interopDefault(import('../pages/share/index.vue' /* webpackChunkName: "pages/share/index" */))
const _7efc7215 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _9b00dba2 = () => interopDefault(import('../pages/previous/_id.vue' /* webpackChunkName: "pages/previous/_id" */))
const _4648774d = () => interopDefault(import('../pages/share/_id.vue' /* webpackChunkName: "pages/share/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aboutus",
    component: _766f74f1,
    name: "aboutus"
  }, {
    path: "/previous",
    component: _40ccba07,
    name: "previous"
  }, {
    path: "/share",
    component: _05f0cfa5,
    name: "share"
  }, {
    path: "/",
    component: _7efc7215,
    name: "index"
  }, {
    path: "/previous/:id",
    component: _9b00dba2,
    name: "previous-id"
  }, {
    path: "/share/:id",
    component: _4648774d,
    name: "share-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
