<template>
  <Layout class="my-layout">
    <Sider
      v-model="collapsed"
      collapsible
      breakpoint="sm"
      class="my-sider-wrapper"
    >
      <side-menu :collapsed="collapsed" :list="routers">
        <div class="logo">
          <img src="../assets/images/logo.png" class="logo-img" />
          <span v-if="!collapsed" class="logo-name">沐雪</span>
        </div>
      </side-menu>
    </Sider>
    <Layout>
      <Header class="my-layout-header" :style="{ background: '#fff' }"
        >Hello</Header
      >
      <Content class="my-content-wrapper">
        <div class="tabs-wrapper">
          <Tabs
            type="card"
            closable
            :animated="false"
            :value="$route.name"
            @on-click="handleTabClick"
          >
            <TabPane
              :label="item.meta.title"
              :name="item.name"
              v-for="(item, index) in tabList"
              :key="`tab_${index}`"
            ></TabPane>
          </Tabs>
          <div class="view-wrapper">
            <Card>
              <router-view></router-view>
            </Card>
          </div>
        </div>
      </Content>
      <Footer>4</Footer>
    </Layout>
  </Layout>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import { mapState, mapMutations } from "vuex";
export default {
  name: "MyLayout",
  components: {
    SideMenu
  },
  data() {
    return {
      collapsed: false
      // list: [
      //   { title: "首页", icon: "md-home" },
      //   {
      //     title: "组件",
      //     icon: "md-ionitron",
      //     children: [
      //       {
      //         title: "基础组件",
      //         icon: "ios-leaf",
      //         children: [
      //           {
      //             title: "按钮",
      //             icon: "ios-archive"
      //           },
      //           {
      //             title: "表格",
      //             icon: "ios-barcode"
      //           },
      //           {
      //             title: "树",
      //             icon: "ios-game-controller-a"
      //           }
      //         ]
      //       },
      //       {
      //         title: "其他组件",
      //         icon: "md-magnet",
      //         children: [
      //           {
      //             title: "split-pane",
      //             icon: "ios-heart"
      //           },
      //           {
      //             title: "test",
      //             icon: "ios-heart"
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ]
    };
  },
  watch: {
    $route(newRouter) {
      this.UPDATE_ROUTER(newRouter);
    }
  },
  computed: {
    ...mapState({
      tabList: state => state.tabs.tabList,
      routers: state =>
        state.router.routers.filter(item => {
          return (
            item.path !== "*" && item.name !== "Login" && item.name !== "About"
          );
        })
    })
  },
  methods: {
    ...mapMutations(["UPDATE_ROUTER"]),
    handleTabClick(index) {
      this.$router.push({ name: this.tabList[index].name });
    }
  }
};
</script>

<style lang="less">
.my-layout {
  height: 100%;
  .my-sider-wrapper {
    overflow: hidden;
    height: 100%;
    .ivu-layout-sider-children {
      overflow-y: scroll;
      // margin-right: -10px;
      // padding-right: 10px;
    }
  }
  &-header {
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
