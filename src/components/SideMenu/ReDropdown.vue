<template>
  <Dropdown placement="right-start" @on-click="handleDropClick" transfer>
    <span class="my-drop-menu" :style="dropmenuStyle">
      <Icon
        :type="parent.meta.icon"
        :size="20"
        :color="iconColor"
        :style="{ paddingRight: showTitle ? '5px' : '0' }"
      />
      <span v-if="showTitle">{{ parent.meta.title }}</span>
    </span>
    <DropdownMenu slot="list">
      <template v-for="(item, i) in parent.children">
        <re-dropdown
          v-if="item.children"
          :key="`Dropdown_${index}_${i}`"
          :parent="item"
          :index="i"
          iconColor="#rgba(0,0,0,0.9)"
          :showTitle="true"
        ></re-dropdown>
        <DropdownItem v-else :key="`Dropdown_${index}_${i}`" :name="item.name">{{ item.meta.title }}</DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  name: "ReDropdown",
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    index: Number,
    showTitle: {
      type: Boolean,
      default: false
    },
    iconColor: {
      type: String,
      default: "rgb(255,255,255)"
    }
  },
  computed: {
    dropmenuStyle() {
      return {
        padding: this.showTitle ? "10px 25px" : ""
      };
    }
  },
  methods: {
    handleDropClick(name) {
      if (!this.showTitle) {
        this.$emit("on-select", name);
      }
    }
  }
};
</script>

<style lang="less">
.my-drop-menu {
  padding: 5px 0;
}
.ivu-dropdown-menu {
  text-align: center;
  .ivu-dropdown {
    padding: 8px 0;
    &:hover {
      background: rgba(51, 51, 51, 0.1);
    }
  }
}
</style>
