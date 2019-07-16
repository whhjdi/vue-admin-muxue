<template>
  <div class="my-side-menu">
    <slot></slot>
    <Menu
      width="auto"
      theme="dark"
      v-show="!collapsed"
      @on-select="handleSelect"
    >
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
    <div v-show="collapsed" class="drap-wrapper">
      <template v-for="(item, index) in list">
        <re-dropdown
          v-if="item.children"
          :key="`Dropdown_${index}`"
          :parent="item"
          :index="index"
          @on-select="handleSelect"
        ></re-dropdown>
        <Tooltip
          v-else
          :key="`Tooltip_${index}`"
          transfer
          :content="item.title"
          :style="{ display: 'block', textAlign: 'center' }"
          placement="right"
        >
          <span class="my-drop-menu" @click="handleClick(item.title)">
            <Icon :type="item.icon" :size="20" />
          </span>
        </Tooltip>
      </template>
    </div>
  </div>
</template>

<script>
import ReSideSubmenu from "./ReSideSubmenu";
import ReDropdown from "./ReDropdown";
export default {
  name: "SideMenu",
  components: {
    ReSideSubmenu,
    ReDropdown
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
  },
  methods: {
    handleSelect(name) {
      console.log(name);
    },
    handleClick(name) {
      console.log(name);
    }
  }
};
</script>

<style lang="less" scoped>
.my-side-menu {
  width: 100%;
  .my-drop-menu {
    display: block;
    width: 100%;
    color: white;
    padding: 10px 0;
  }
  .drap-wrapper > .ivu-dropdown {
    display: block;
    text-align: center;
  }
  .ivu-dropdown {
    padding: 10px 0;
  }
}
</style>
