<template>
  <Layout class="my-layout">
    <Sider v-model="collapsed" collapsible breakpoint="sm" class="my-sider-wrapper">
      <side-menu :collapsed="collapsed" :list="routers">
        <div class="logo">
          <img src="../assets/images/logo.png" class="logo-img" />
          <span v-if="!collapsed" class="logo-name">沐雪</span>
        </div>
      </side-menu>
    </Sider>
    <Layout>
      <Header class="my-layout-header" :style="{ background: '#fff' }">
        <Breadcrumb>
          <template v-for="(item,index) in $route.matched">
            <BreadcrumbItem :to="$route.name" :key="`bread_${index}`" v-if="item.name!=='Page'">
              <Icon :type="item.meta.icon" size="16" :style="{lineHeight: '7px'}"></Icon>
              <span>{{item.name}}</span>
            </BreadcrumbItem>
          </template>
        </Breadcrumb>
      </Header>
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
              :label="labelRender(item)"
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
      <Footer>@copyright 沐雪 2019</Footer>
    </Layout>
  </Layout>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import { mapState, mapActions } from "vuex";
import { getTabNameFromRoute, getRouteNameFromTabList } from "@/utils/util";
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
    ...mapActions(["handleRemove"]),
    handleTabClick(id) {
      this.$router.push(getRouteNameFromTabList(id));
    },
    handleTabRemove(id, e) {
      e.stopPropagation();
      this.handleRemove({ id, $route: this.$route }).then(nextRoute => {
        this.$router.push(nextRoute);
      });
    },
    labelRender(item) {
      console.log(item, 1);
      return () => {
        return (
          <div>
            <span>
              {item.meta && item.meta.title ? item.meta.title : "qwee"}
            </span>
            {item.meta && item.meta.closable ? (
              <Icon
                type="md-close-circle"
                style="line-height:12px;margin-left:6px;margin-right:0"
                nativeOn-click={this.handleTabRemove.bind(
                  this,
                  getTabNameFromRoute(item)
                )}
              />
            ) : (
              ""
            )}
          </div>
        );
      };
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
