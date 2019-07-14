<template>
  <ul class="my-menu">
    <slot></slot>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.my-menu {
  color: #fff;
  padding: 0;
  margin: 0;
  width: 200px;
  ul {
    padding: 0;
    margin: 0;
  }
}
</style>
