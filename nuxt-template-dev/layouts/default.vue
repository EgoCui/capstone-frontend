<template>
  <div style="height: 100%">
    <my-header />
    <div style="margin-bottom: 70px"></div>
    <nuxt />
    <concat />
    <my-footer />
  </div>
</template>

<script>
import MyHeader from "@/components/header/index";
import Concat from "@/components/index/concat";
import MyFooter from "@/components/footer/index";
if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
}

export default {
  components: {
    MyHeader,
    Concat,
    MyFooter,
  },
  mounted() {
    if (process.browser) {
      // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({}).init();
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/normalize.css";
@import "@/assets/styles/reset.scss";
@import "@/assets/styles/variables.scss";

html {
  font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei",
    FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB",
    "Hiragino Sans GB W3", Roboto, Arial, sans-serif;
  font-size: 14px;
  color: #333;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
