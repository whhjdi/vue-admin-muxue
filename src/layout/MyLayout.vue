<template>
  <Layout class="my-layout">
    <Sider v-model="collapsed" collapsible breakpoint="sm">
      <side-menu :collapsed="collapsed" :list="list">
        <div class="logo">
          <img src="../assets/images/logo.png" class="logo-img" />
          <span v-if="!collapsed" class="logo-name">沐雪</span>
        </div>
      </side-menu>
    </Sider>
    <Layout>
      <Header class="my-layout-header">2</Header>
      <Content class="my-content-wrapper">
        <router-view></router-view>
      </Content>
      <Footer>4</Footer>
    </Layout>
  </Layout>
</template>

<script>
import SideMenu from "@/components/SideMenu";
export default {
  name: "MyLayout",
  components: {
    SideMenu
  },
  data() {
    return {
      collapsed: true,
      list: [
        { title: "首页", icon: "md-home" },
        {
          title: "组件",
          icon: "md-ionitron",
          children: [
            {
              title: "基础组件",
              icon: "ios-leaf",
              children: [
                {
                  title: "按钮",
                  icon: "ios-archive"
                },
                {
                  title: "表格",
                  icon: "ios-barcode"
                },
                {
                  title: "树",
                  icon: "ios-game-controller-a"
                }
              ]
            },
            {
              title: "其他组件",
              icon: "md-magnet",
              children: [
                {
                  title: "split-pane",
                  icon: "ios-heart"
                },
                {
                  title: "test",
                  icon: "ios-heart"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.my-layout {
  height: 100%;
  &-header {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }
  .logo {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    &-img {
      width: 40px;
      vertical-align: -12px;
    }
    &-name {
      margin-left: 10px;
      color: white;
      font-size: 20px;
    }
  }
  .my-content-wrapper {
    padding: 18px;
  }
}
</style>
