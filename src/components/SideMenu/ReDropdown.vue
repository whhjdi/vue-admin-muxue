<template>
  <Dropdown placement="right-start" @on-click="handleDropClick">
    <span class="my-drop-menu" :style="dropmenuStyle">
      <Icon
        :type="parent.icon"
        :size="20"
        :color="iconColor"
        :style="{ paddingRight: showTitle ? '5px' : '0' }"
      />
      <span v-if="showTitle">{{ parent.title }}</span>
    </span>
    <DropdownMenu slot="list">
      <template v-for="(item, i) in parent.children">
        <re-dropdown
          v-if="item.children"
          :key="`Dropdown_${index}_${i}`"
          :parent="item"
          :index="i"
          iconColor="#515A6E"
          :showTitle="true"
        ></re-dropdown>
        <DropdownItem
          v-else
          :key="`Dropdown_${index}_${i}`"
          :name="item.title"
          >{{ item.title }}</DropdownItem
        >
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
      default: "#fff"
    }
  },
  computed: {
    dropmenuStyle() {
      return {
        textAlign: this.showTitle ? "left" : "center",
        padding: this.showTitle ? "10px 0" : ""
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

<style lang="less" scoped></style>
