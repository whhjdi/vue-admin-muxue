<template>
  <Submenu :name="parent.title">
    <template slot="title">
      <Icon :type="parent.icon" />
      {{ parent.title }}
    </template>
    <template v-for="(item, i) in parent.children">
      <re-side-submenu
        v-if="item.children"
        :parent="item"
        :index="i"
        :key="`menu_item_${index}_${i}`"
      ></re-side-submenu>
      <menu-item v-else :name="item.title" :key="`menu_item_${index}_${i}`">
        <Icon :type="item.icon" />
        {{ item.title }}
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

<style lang="less" scoped></style>
