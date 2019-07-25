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
            :animated="false"
            :value="getTabNameFromRoute($route)"
            closable
            @on-click="handleTabClick"
          >
            <TabPane
              :label="item.meta.title"
              :name="item.name"
              :closable="item.name !== 'Home'"
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
      <Footer>@copyright 沐雪 2019</Footer>
    </Layout>
  </Layout>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import { mapState, mapMutations } from "vuex";
import { getTabNameFromRoute } from "@/utils/util";
export default {
  name: "MyLayout",
  components: {
    SideMenu
  },
  data() {
    return {
      collapsed: false,
      getTabNameFromRoute
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
          return item.path !== "*" && item.name !== "Login";
        })
    })
  },
  methods: {
    ...mapMutations(["UPDATE_ROUTER"]),
    handleTabClick() {
      // this.$router.push({ name: this.tabList[index][name] });
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
