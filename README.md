# vue-admin-muxue

- 这是一个基于vue构建的响应式的后台管理系统，涉及到权限管理，递归组件，多级菜单，可编辑表格，多Tab页，组件封装,数据持久化等主要技术点。
- 侧边的菜单（SideMenu）根据路由表动态生成，由于不知道有几层，所以采用递归的方式渲染
- 在侧边的ZUI中展示几个以前封装组件，包括 Button,Input,Tabs，主要是配色好看
- 本地开发使用mockjs模拟数据，线上改用easy-mock
- 封装了echarts放到了首页展示，在首页还展示了我之前写的开源项目，欢迎star

## 预览

![在线预览](http://ww3.sinaimg.cn/large/006tNc79ly1g5q9cpfgjbj31bw0u0dl8.jpg)

## 其他

```
git clone git@github.com:whhjdi/vue-admin-muxue.git

yarn serve

yarn build
```
## Project setup
