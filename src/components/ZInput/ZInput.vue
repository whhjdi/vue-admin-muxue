<template>
  <div class="wrapper" :class="{ error }">
    <input
      type="text"
      class="z-input"
      :class="error"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <div v-if="error" class="error-msg">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-information" />
      </svg>
      <span>{{ error }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "z-input",
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: "请在文本框中输入内容"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/css/index.less";
.wrapper {
  margin: 2px;
  display: inline-flex;
  align-items: center;
  > .z-input {
    font-size: @z-font-size;
    height: 32px;
    border: 1px solid @z-border;
    color: #333333;
    padding: 0 8px;
    &:hover {
      border-color: @z-color-green;
    }
    &:focus {
      outline: none;
      border-color: @z-color-green;
    }
    &[disabled] {
      border-color: @z-border;
      cursor: not-allowed;
    }
  }
}
.error {
  position: relative;
  &.z-input {
    border-color: @z-color-red;
  }
}
.error-msg {
  position: absolute;
  left: 0;
  top: 100%;
  color: @z-color-red;
  .icon {
    fill: @z-color-red;
  }
}
</style>
