<template>
  <div class="home">
    <Row style="margin-bottom: 20px;">
      <HelloWorld :msg="msg" />
    </Row>
    <Row :gutter="20">
      <i-col
        v-for="item in cardData"
        :key="`my_card_${item.title}`"
        :xs="12"
        :md="8"
        :lg="4"
        style="height:120px;padding-bottom: 20px;"
      >
        <my-card
          :icon="item.icon"
          leftWidth="40%"
          rightWidth="60%"
          :color="item.color"
          :url="item.url"
        >
          <p>{{item.title}}</p>
        </my-card>
      </i-col>
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
import MyCard from "@/components/MyCard";

export default {
  name: "home",
  components: {
    HelloWorld,
    MyCharts,
    MyCard
  },
  data() {
    return {
      msg: `
        <h2>
          这是一个使用iView编写的简易的后台管理系统
        </h2>
          <ul>
          <li>
            涉及到权限管理，递归组件，多级菜单，可编辑表格，多Tab页，组件封装,数据持久化等主要技术点。
          </li>
          <li>
            侧边的菜单（SideMenu）根据路由表动态生成，由于不知道有几层，所以采用递归的方式渲染
          </li>
          <li>
            在侧边的ZUI中展示几个以前封装组件，包括 Button,Input,Tabs，主要是配色好看
          </li>
          <li>
            本地开发使用mockjs模拟数据，线上改用easy-mock
          </li>
          <li>
            封装了echarts放到了首页展示，在首页还展示了我之前写的开源项目，欢迎star
          </li>
        </ul>

      `,
      cardData: [
        {
          title: "沐雪音乐",
          icon: "md-musical-note",
          url: "https://whhjdi.xyz/musicByMuxue/dist/#/home",
          color: "#3cb1ff"
        },
        {
          title: "沐雪商城",
          icon: "ios-appstore",
          url: "https://whhjdi.xyz/shop-vue/dist/#/",
          color: "#ff7477"
        },
        {
          title: "React组件",
          icon: "md-outlet",
          url: "http://whhjdi.xyz/react-ts/index.html#/button",
          color: "#28da99"
        },
        {
          title: "涂鸦画板",
          icon: "md-browsers",
          url: "https://whhjdi.xyz/canvas-demo/",
          color: "#9a83da"
        },
        {
          title: "简历编辑",
          icon: "ios-book",
          url: "https://whhjdi.xyz/vue-resumeEdit/dist/#/",
          color: "#ffc367"
        },
        {
          title: "CNode",
          icon: "logo-buffer",
          url: "https://whhjdi.xyz/CNode-taro/dist/",
          color: "#324555"
        }
      ],
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
