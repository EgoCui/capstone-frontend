export default ({ app, redirect, params, query, store }) => {
  // app: vue 的实例
  // redirect: 跳转
  // 因为这里 context 可以解构出 vue 的实例
  // 我们就可以通过 app 来调用 router 使用客户端的方式(vue原本的方式)来做了
  // 白名单
  const allowRouteList = ["login", "home"];
  const loginRoutePath = "/login";
  const defaultRoutePath = "/";
  app.router.beforeEach((to, form, next) => {
    // 这里需要注意的是，在 Vue 中我们可以使用 next('/...') 去跳转
    // 在这里必须使用 redirect('/...') 来跳转
    const token = app.$cookies.get("token");
    function checkToken() {
      if (to.path === loginRoutePath) {
        next({ path: defaultRoutePath });
      } else {
        next();
      }
    }
    if (token) {
      checkToken();
    } else {
      // 免登录名单
      if (allowRouteList.includes(to.name)) {
        next();
      } else {
        next("/login");
      }
    }
  });
};
