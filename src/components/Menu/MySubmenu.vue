<template>
  <ul class="my-submenu">
    <div class="my-submenu-title" @click="handleClick">
      <slot name="title"></slot>
      <svg
        class="icon title-icon"
        aria-hidden="true"
        :style="{ transform: `rotate(${showChild ? 180 : 0}deg)` }"
      >
        <use xlink:href="#m-up" />
      </svg>
    </div>
    <div v-show="showChild" class="my-submenu-child">
      <slot></slot>
    </div>
  </ul>
</template>

<script>
export default {
  name: "MySubmenu",
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

<style lang="less">
.my-submenu {
  &-title {
    line-height: 43px;
    height: 43px;
    position: relative;
    padding-left: 10px;
    & > .title-icon {
      transition: all 300ms;
      position: absolute;
      top: 14px;
      right: 10px;
    }
  }
  &-child {
    overflow: hidden;
    padding-left: 20px;
  }
}
</style>
