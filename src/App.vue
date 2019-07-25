<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "app",
  components: {},
  watch: {
    $route(newRouter) {
      this.UPDATE_ROUTER(newRouter);
    }
  },
  methods: {
    ...mapMutations(["UPDATE_ROUTER"])
  }
};
</script>

<style>
html,
body {
  height: 100%;
}
body {
  margin: 0;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
