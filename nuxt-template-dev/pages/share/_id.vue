<template>
  <my-slot class="home">
    <h1>{{ $route.params.id }}Season</h1>
    <p>The Genesian Theatre is proud to present our 77th Season in 2021</p>
  </my-slot>
</template>

<script>
import MySlot from "@/components/slot/index";
export default {
  components: {
    MySlot,
  },
  computed: {
    info() {
      const index = this.$route.params.id;
      return index;
    },
  },
  mounted() {
    if (process.browser) {
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: calc(100% - 382px);
}
</style>
