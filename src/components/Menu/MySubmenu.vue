<template>
  <ul class="my-submenu">
    <div class="my-submenu-title" @click="handleClick">
      <slot name="title"></slot>
    </div>
    <div v-show="showChild" class="my-submenu-child">
      <slot></slot>
    </div>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      showChild: false
    };
  },
  methods: {
    handleClick() {
      this.showChild = !this.showChild;
    }
  }
};
</script>

<style lang="less" scoped>
.my-submenu {
  &-title {
    background: rgb(228, 99, 99);
  }
  &-child {
    overflow: hidden;
  }
}
</style>
