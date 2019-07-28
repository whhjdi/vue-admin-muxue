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
        <div class="my-layout-header-container">
          <div class="breadcrumn-wrapper" :style="{float:'left'}">
            <Breadcrumb>
              <BreadcrumbItem
                v-for="(item,index) in list"
                :to="{path:$route.path}"
                :key="`bread_${index}`"
              >
                <Icon :type="item.meta.icon" size="16" :style="{verticalAlign:'-2px'}"></Icon>
                <span>{{item.meta.title}}</span>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div class="avatar">
            <Dropdown>
              <Badge dot>
                <Avatar shape="circle" :src="require('../assets/images/avatar.jpeg')" />
                <Icon type="ios-arrow-down"></Icon>
              </Badge>
              <DropdownMenu slot="list">
                <DropdownItem name="About">
                  <a href="//github.com/whhjdi/vue-admin-muxue" target="_blank">项目地址</a>
                </DropdownItem>
                <DropdownItem>
                  <a>
                    <router-link :to="{path:'/about'}">关于</router-link>
                  </a>
                </DropdownItem>
                <DropdownItem name="Logout">
                  <a @click="handleLogout">退出登录</a>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
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
            <Card shadow>
              <router-view></router-view>
            </Card>
          </div>
        </div>
      </Content>
      <Footer class="my-footer-wrapper">
        @copyright
        <a href="//github.com/whhjdi" target="_blank">沐雪</a> 2019
      </Footer>
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
      routers: state => state.router.routers[0].children
    }),
    list() {
      let arr = [];
      this.$route.matched.forEach(item => {
        if (item.path) {
          arr.push(item);
        }
      });
      return arr;
    }
  },
  methods: {
    ...mapActions(["handleRemove", "logout"]),
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
      return () => {
        return (
          <div>
            <span>{item.meta.title}</span>
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
    },
    handleLogout() {
      this.logout().then(() => {
        this.$router.push({ name: "Login" });
      });
    }
  }
};
</script>

<style lang="less">
.my-layout {
  height: 100%;
  .my-sider-wrapper {
    overflow: hidden;
    height: ~"calc(100% - 48px)";
  }
  .ivu-layout-header {
    padding: 0 20px;
  }
  &-header {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    &-container {
      .avatar {
        float: right;
        margin-right: 20px;
        margin-top: 10px;
        line-height: 40px;
        img {
          width: 100%;
        }
        a {
          color: #000;
        }
      }
    }
  }
  .logo {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    &-img {
      width: 44px;
      vertical-align: -14px;
    }
    &-name {
      margin-left: 10px;
      color: white;
      font-size: 20px;
    }
  }

  .my-content-wrapper {
    padding: 20px;
    overflow-y: scroll;
  }
  .my-footer-wrapper {
    background: #fff;
    color: #515a6e;
    font-size: 14px;
    text-align: center;
  }
}
</style>
