<template>
  <div class="split-pane-container">
    <!-- 普通的方法 -->
    <!-- <split-pane :value="offset" @input="handleInput"></split-pane> -->

    <!-- v-model -->
    <!-- <split-pane v-model="offset"></split-pane> -->

    <!-- .sync -->
    <split-pane :value.sync="offset">
      <div slot="left">left</div>
      <div slot="right">right</div>
    </split-pane>
  </div>
</template>

<script>
import SplitPane from "@/components/SplitPane";
export default {
  components: {
    SplitPane
  },
  data() {
    return {
      offset: 0.3
    };
  },
  methods: {
    handleInput(value) {
      this.offset = value;
    }
  }
};
</script>

<style lang="less" scoped>
.split-pane-container {
  width: 500px;
  height: 300px;
  background: #eac;
}
</style>
