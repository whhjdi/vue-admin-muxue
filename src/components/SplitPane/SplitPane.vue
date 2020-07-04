<template>
  <div class="split-pane-wrapper" ref="splitPane">
    <div
      class="pane pane-left"
      :style="{ width: leftOffsetPercent, paddingRight: padding }"
    >
      <slot name="left"></slot>
    </div>

    <div
      class="pane pane-button"
      :style="{ left: buttonLeft, width: buttonWidthCalc }"
      @mousedown="handleMousedown"
      @mouseup="handleMouseup"
    ></div>
    <div
      class="pane pane-right"
      :style="{ left: leftOffsetPercent, paddingLeft: padding }"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SplitPane",
  props: {
    value: {
      type: Number,
      default: 0.5
    },
    buttonWidth: {
      type: Number,
      default: 10
    },
    max: {
      type: Number,
      default: 0.9
    },
    min: {
      type: Number,
      default: 0.1
    }
  },
  data() {
    return {
      canMove: false,
      initOffset: 0
    };
  },
  computed: {
    leftOffsetPercent() {
      return `${this.value * 100}%`;
    },
    buttonLeft() {
      return `calc(${this.value * 100}% - ${this.buttonWidth / 2}px)`;
    },
    buttonWidthCalc() {
      return `${this.buttonWidth}px`;
    },
    padding() {
      return `${this.buttonWidth / 2}px`;
    }
  },
  methods: {
    handleMousedown(e) {
      document.addEventListener("mousemove", this.handleMousemove);
      document.addEventListener("mouseup", this.handleMouseup);
      this.initOffset = e.pageX - e.srcElement.getBoundingClientRect().left;
      this.canMove = true;
    },
    handleMousemove(e) {
      if (!this.canMove) return;
      const { left, width } = this.$refs.splitPane.getBoundingClientRect();
      const pageX = e.pageX;
      const offset = pageX - left - this.initOffset + this.buttonWidth / 2;
      let leftOffset = offset / width;
      if (leftOffset < this.min) {
        leftOffset = this.min;
      }
      if (leftOffset > this.max) {
        leftOffset = this.max;
      }
      // this.$emit("input", leftOffset);
      this.$emit("update:value", leftOffset);
    },
    handleMouseup() {
      this.canMove = false;
    }
  },
  destroyed() {
    document.removeEventListener("mousemove", this.handleMousemove);
    document.removeEventListener("mouseup", this.handleMouseup);
  }
};
</script>

<style lang="less" scoped>
.split-pane-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  color: white;
  text-align: center;
  font-size: 48px;
  .pane {
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    &-left {
      background: rgb(222, 88, 88);
      left: 0;
    }
    &-right {
      background: rgb(56, 51, 111);
      right: 0;
    }
    &-button {
      background: rgb(215, 215, 215);
      z-index: 10;
      user-select: none;
      cursor: col-resize;
    }
  }
}
</style>
