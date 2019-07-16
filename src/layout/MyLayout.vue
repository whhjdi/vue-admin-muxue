<template>
  <Layout class="my-layout">
    <Sider v-model="collapsed" collapsible breakpoint="sm">
      <side-menu :collapsed="collapsed" :list="list">
        <Icon type="ios-beaker-outline" />
      </side-menu>
    </Sider>
    <Layout>
      <Header class="my-layout-header">2</Header>
      <Content>3</Content>
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
        { title: "首页", icon: "ios-beaker" },
        {
          title: "组件",
          icon: "ios-beaker",
          children: [
            {
              title: "基础组件",
              icon: "ios-heart",
              children: [
                {
                  title: "按钮"
                }
              ]
            },
            {
              title: "其他组件",
              icon: "ios-beaker-outline",
              children: [
                {
                  title: "split-pane",
                  icon: "ios-heart",
                  children: [
                    {
                      title: "hello",
                      icon: "ios-heart"
                    }
                  ]
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
}
</style>
