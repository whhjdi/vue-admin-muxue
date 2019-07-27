<template>
  <div class="home">
    <Row style="margin-bottom: 20px;">
      <HelloWorld msg="Welcome to My Vue.js App" />
    </Row>
    <Row :gutter="20">
      <i-col :md="24" :lg="12" style="margin-bottom: 20px;">
        <Card title="饼图">
          <my-charts :option="option1" :style="{height:'400px'}" chartType="bar"></my-charts>
        </Card>
      </i-col>
      <i-col :md="24" :lg="12" style="margin-bottom: 20px;">
        <Card title="柱状图">
          <my-charts :option="option2" :style="{height:'400px'}" chartType="bar"></my-charts>
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MyCharts from "@/components/MyCharts";

export default {
  name: "home",
  components: {
    HelloWorld,
    MyCharts
  },
  data() {
    return {
      option1: {
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      },
      option2: {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ["product", "2012", "2013", "2014", "2015"],
            ["Matcha Latte", 41.1, 30.4, 65.1, 53.3],
            ["Milk Tea", 86.5, 92.1, 85.7, 83.1],
            ["Cheese Cocoa", 24.1, 67.2, 79.5, 86.4]
          ]
        },
        xAxis: [
          { type: "category", gridIndex: 0 },
          { type: "category", gridIndex: 1 }
        ],
        yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
        grid: [{ bottom: "55%" }, { top: "55%" }],
        series: [
          // These series are in the first grid.
          { type: "bar", seriesLayoutBy: "row" },
          { type: "bar", seriesLayoutBy: "row" },
          { type: "bar", seriesLayoutBy: "row" },
          // These series are in the second grid.
          { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
          { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
          { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
          { type: "bar", xAxisIndex: 1, yAxisIndex: 1 }
        ]
      }
    };
  }
};
</script>
