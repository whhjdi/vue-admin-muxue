<template>
  <div>
    <my-menu>
      <my-menu-item>1111</my-menu-item>
      <my-menu-item>2222</my-menu-item>
      <my-submenu>
        <div slot="title">3333</div>
        <my-menu-item>3333-1</my-menu-item>
        <my-menu-item>3333-2</my-menu-item>
        <my-submenu>
          <div slot="title">3333-3</div>
          <my-menu-item>3333-3-1</my-menu-item>
          <my-menu-item>3333-3-2</my-menu-item>
        </my-submenu>
      </my-submenu>
    </my-menu>
  </div>
</template>

<script>
import MyMenuComponents from "@/components/Menu";

export default {
  components: {
    ...MyMenuComponents
  }
};
</script>

<style lang="less" scoped></style>
