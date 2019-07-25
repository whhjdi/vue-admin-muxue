<template>
  <div class="my-side-menu">
    <slot></slot>
    <Menu
      width="auto"
      theme="dark"
      v-show="!collapsed"
      @on-select="handleSelect"
      ref="menu"
    >
      <template v-for="(item, index) in list">
        <re-side-submenu
          v-if="item.children && item.name !== 'Page'"
          :parent="item"
          :index="index"
          :key="`menu_item_${index}`"
          >{{ item.meta.title }}</re-side-submenu
        >
        <menu-item
          v-else-if="item.name !== 'Page'"
          :name="item.meta.title"
          :key="`menu_item_${index}`"
        >
          <Icon :type="item.meta.icon" size="20" class="my-menu-item-icon" />
          {{ item.meta.title }}
        </menu-item>
        <menu-item
          v-else
          :name="item.children[0].name"
          :key="`menu_item_${index}`"
        >
          <Icon :type="item.meta.icon" size="20" class="my-menu-item-icon" />
          {{ item.meta.title }}
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
          :content="item.meta.title"
          :style="{ display: 'block', textAlign: 'center' }"
          placement="right"
        >
          <span class="my-drop-menu" @click="handleClick(item.meta.title)">
            <Icon :type="item.meta.icon" size="20" />
          </span>
        </Tooltip>
      </template>
    </div>
  </div>
</template>

<script>
import ReSideSubmenu from "./ReSideSubmenu";
import ReDropdown from "./ReDropdown";
import { mapState } from "vuex";
import { getOpenArrByName } from "@/utils/util";
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
  watch: {
    // openNames() {
    //   this.$nextTick(() => {
    //     this.$refs.menu.handleOpen();
    //   });
    // }
  },
  computed: {
    ...mapState({
      routers: state => state.router.routers
    }),
    openNames() {
      return getOpenArrByName(this.$route.name, this.routers);
    }
  },
  methods: {
    handleSelect(name) {
      this.$router.push({ name });
    },
    handleClick(name) {
      this.$router.push({ name });
    }
  },
  mounted() {
    console.log(this.list);
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
    padding: 10px 0;
  }
  .my-menu-item-icon {
    margin-right: 8px;
    vertical-align: -4px;
  }
}
</style>
