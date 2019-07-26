
<template>
  <button class="z-button" :class="[size,color,shape]" @click="$emit('click')">
    <span v-if="loading">加载中</span>
    <div v-else>
      <slot>默认</slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "z-button",
  props: {
    size: {
      type: String,
      default: "normal"
    },
    color: {
      type: String,
      default: "default"
    },
    shape: {
      type: String,
      default: "square"
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {}
};
</script>

<style lang="less">
@import "../../assets/css/index.less";
.z-button {
  display: inline-block;
  padding: 0 1em;
  color: #fff;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 1;
    background: @z-color-black;
  }
}
//size
.normal {
  height: 32px;
  line-height: 32px;
  border: 1px solid @z-border;
  font-size: @z-font-size;
}
.big {
  height: 38px;
  line-height: 38px;
  font-size: 16px;
}
.large {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  width: 100%;
}
.small {
  height: 24px;
  line-height: 24px;
  font-size: 12px;
}
//形状
.square {
  border-radius: @z-button-border-radius-square;
}
.round {
  border-radius: @z-button-border-radius-round;
}
</style>