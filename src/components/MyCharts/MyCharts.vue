<template>
  <div ref="charts" class="my-charts"></div>
</template>

<script>
import echarts from "echarts";
import { theme } from "./macarons";
import { addListener, removeListener } from "resize-detector";
export default {
  name: "charts",
  props: {
    option: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      dom: null
    };
  },
  watch: {
    option(newVal) {
      this.dom.setOption(newVal);
    }
  },
  methods: {
    resize() {
      this.dom.resize();
    },
    initCharts() {
      this.dom = echarts.init(this.$refs.charts, theme);
      addListener(this.$refs.charts, this.resize);
      this.dom.setOption(this.option);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initCharts(this.option);
    });
  },
  beforeDestroy() {
    removeListener(this.$refs.charts, this.resize);
    this.dom.dispose();
    this.dom = null;
  }
};
</script>

<style lang="less" scoped>
</style>