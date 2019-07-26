<template>
  <div class="wrapper">
    <div class="item">
      <h1>几种输入状态</h1>
      <p>z-input 可以接收 value,placeholder,disabled,error 等数据实现不同的效果</p>
      <z-input value="hello world"></z-input>
      <z-input placeholder="请输入用户名"></z-input>
      <z-input disabled placeholder="disabled"></z-input>
      <z-input error="error"></z-input>
    </div>
    <div class="item">
      <h1>事件</h1>
      <p>本组件监听change,input,blur,focus等事件，用户可以拿到他们传出来的数据。 并且支持 v-model 的语法</p>
      <z-input v-model="msg"></z-input>
      <p>{{msg}}</p>
    </div>
  </div>
</template>

<script>
import ZInput from "@/components/ZInput";
export default {
  components: {
    ZInput
  },
  data() {
    return {
      msg: "hello"
    };
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/zui.less";
</style>