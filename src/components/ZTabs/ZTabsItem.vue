<template>
  <div class="z-tabs-item" @click="itemClicked" :class="[classes]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ZTabsItem",
  inject: ["eventBus"],
  props: {
    name: {
      type: String | Number,
      required: true
    },
    activeColor: {
      type: String,
      default: "black"
    }
  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    classes() {
      return {
        active: this.active
      };
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.eventBus.$on("update:selected", name => {
        if (name === this.name) {
          this.active = true;
          this.$el.style.color = this.activeColor;
        } else {
          this.active = false;
          this.$el.style.color = "black";
        }
      });
    });
  },
  methods: {
    itemClicked() {
      this.eventBus.$emit("update:selected", this.name, this);
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/css/index.less";
.z-tabs-item {
  padding: 0 2em;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  &.active {
    font-weight: bold;
  }
}
</style>