import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5f449750 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _64ba5fa2 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _03463347 = () => interopDefault(import('../pages/fundraising.vue' /* webpackChunkName: "pages/fundraising" */))
const _ba3f96a0 = () => interopDefault(import('../pages/manager.vue' /* webpackChunkName: "pages/manager" */))
const _48352ae0 = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _37dc6838 = () => interopDefault(import('../pages/pastProduction.vue' /* webpackChunkName: "pages/pastProduction" */))
const _40ccba07 = () => interopDefault(import('../pages/previous/index.vue' /* webpackChunkName: "pages/previous/index" */))
const _05f0cfa5 = () => interopDefault(import('../pages/share/index.vue' /* webpackChunkName: "pages/share/index" */))
const _43516fac = () => interopDefault(import('../pages/training/index.vue' /* webpackChunkName: "pages/training/index" */))
const _35a16050 = () => interopDefault(import('../pages/user.vue' /* webpackChunkName: "pages/user" */))
const _11b5cfc4 = () => interopDefault(import('../pages/work.vue' /* webpackChunkName: "pages/work" */))
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
    path: "/about",
    component: _5f449750,
    name: "about"
  }, {
    path: "/blog",
    component: _64ba5fa2,
    name: "blog"
  }, {
    path: "/fundraising",
    component: _03463347,
    name: "fundraising"
  }, {
    path: "/manager",
    component: _ba3f96a0,
    name: "manager"
  }, {
    path: "/news",
    component: _48352ae0,
    name: "news"
  }, {
    path: "/pastProduction",
    component: _37dc6838,
    name: "pastProduction"
  }, {
    path: "/previous",
    component: _40ccba07,
    name: "previous"
  }, {
    path: "/share",
    component: _05f0cfa5,
    name: "share"
  }, {
    path: "/training",
    component: _43516fac,
    name: "training"
  }, {
    path: "/user",
    component: _35a16050,
    name: "user"
  }, {
    path: "/work",
    component: _11b5cfc4,
    name: "work"
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
