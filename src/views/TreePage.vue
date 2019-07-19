<template>
  <div class="my-tree-wrapper">
    <my-tree
      :folderList.sync="folderList"
      :fileList.sync="fileList"
      :folderDrop="folderDrop"
      :fileDrop="fileDrop"
    ></my-tree>
  </div>
</template>

<script>
import { getFileList, getFolderList } from "@/api/data.js";
import MyTree from "@/components/MyTree";

export default {
  name: "TreePage",
  components: {
    MyTree
  },
  data() {
    return {
      folderList: [],
      fileList: [],
      folderDrop: [
        { name: "rename", title: "重命名" },
        { name: "delete", title: "删除" }
      ],
      fileDrop: [
        { name: "rename", title: "重命名" },
        { name: "delete", title: "删除" }
      ]
    };
  },
  methods: {},
  mounted() {
    Promise.all([getFolderList(), getFileList()]).then(res => {
      this.folderList = res[0].data;
      this.fileList = res[1].data;
    });
  }
};
</script>

<style lang="less">
.my-tree-wrapper {
  padding: 18px;
  background: #fff;
}
</style>
