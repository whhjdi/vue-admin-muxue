<template>
  <div class="my-side-menu">
    <slot></slot>
    <Menu width="auto" theme="dark">
      <template v-for="(item, index) in list">
        <re-side-submenu
          v-if="item.children"
          :parent="item"
          :index="index"
          :key="`menu_item_${index}`"
          >{{ item.title }}</re-side-submenu
        >
        <menu-item v-else :name="item.title" :key="`menu_item_${index}`">
          <Icon :type="item.icon" />
          {{ item.title }}
        </menu-item>
      </template>
    </Menu>
    <div></div>
  </div>
</template>

<script>
import ReSideSubmenu from "./ReSideSubmenu";
export default {
  name: "SideMenu",
  components: {
    ReSideSubmenu
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="less" scoped>
.my-side-menu {
  width: 100%;
}
</style>
