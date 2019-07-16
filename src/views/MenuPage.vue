<template>
  <div>
    <!-- <my-menu>
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
    </my-menu>-->
    <my-menu>
      <template v-for="(item, index) in list">
        <my-menu-item v-if="!item.children" :key="`menu-item-${index}`">{{
          item.title
        }}</my-menu-item>
        <re-submenu
          v-else
          :key="`menu-item-${index}`"
          :parent="item"
          :index="index"
        ></re-submenu>
      </template>
    </my-menu>
  </div>
</template>

<script>
import MyMenuComponents from "@/components/Menu";
import ReSubmenu from "./ReSubmenu";
const { MyMenu, MyMenuItem } = MyMenuComponents;
export default {
  components: {
    ReSubmenu,
    MyMenu,
    MyMenuItem
  },
  data() {
    return {
      list: [
        { title: "首页" },
        {
          title: "组件",
          children: [
            {
              title: "基础组件",
              children: [
                {
                  title: "按钮"
                }
              ]
            },
            {
              title: "其他组件",
              children: [
                {
                  title: "split-pane"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped></style>
