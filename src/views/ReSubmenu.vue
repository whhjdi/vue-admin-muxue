<template>
  <my-submenu>
    <div slot="title">{{ parent.title }}</div>
    <template v-for="(item, i) in parent.children">
      <my-menu-item v-if="!item.children" :key="`menu_item_${index}_${i}`">{{
        item.title
      }}</my-menu-item>
      <re-submenu
        v-else
        :key="`menu_item_${index}_${i}`"
        :parent="item"
        :index="i"
      ></re-submenu>
    </template>
  </my-submenu>
</template>

<script>
import MyMenuComponents from "@/components/Menu";
const { MySubmenu, MyMenuItem } = MyMenuComponents;
export default {
  name: "ReSubmenu",
  components: {
    MySubmenu,
    MyMenuItem
  },
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number
    }
  }
};
</script>

<style lang="less" scoped></style>
