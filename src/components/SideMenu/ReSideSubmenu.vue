<template>
  <Submenu :name="parent.name">
    <template slot="title">
      <Icon :type="parent.meta.icon" size="20" class="my-menu-item-icon" />
      {{ parent.meta.title }}
    </template>
    <template v-for="(item, i) in parent.children">
      <re-side-submenu
        v-if="item.children"
        :parent="item"
        :index="i"
        :key="`menu_item_${index}_${i}`"
      ></re-side-submenu>
      <menu-item v-else :name="item.name" :key="`menu_item_${index}_${i}`">
        <Icon :type="item.meta.icon" size="20" class="my-menu-item-icon" />
        {{ item.meta.title }}
      </menu-item>
    </template>
  </Submenu>
</template>

<script>
export default {
  name: "ReSideSubmenu",
  props: {
    parent: {
      type: Object,
      default: () => []
    },
    index: Number
  }
};
</script>

<style lang="less" scoped>
.my-menu-item-icon {
  vertical-align: -3px;
}
</style>
