<template>
  <div class="my-tree-wrapper">
    <Tree :data="treeList" :render="renderContent"></Tree>
  </div>
</template>

<script>
import { getFileList, getFolderList } from "@/api/data.js";
import { putFileToFolder, putFolderToTree } from "@/utils/util";
export default {
  name: "TreePage",
  data() {
    return {
      folderList: [],
      fileList: [],
      treeList: [],
      renderContent(h, { root, node, data }) {
        console.log(1, data, root, node);
        return (
          <div class="my-folder-wrapper">
            {data.type === "folder" ? (
              <Icon type="ios-folder" class="my-icon" />
            ) : (
              <Icon type="logo-apple" class="my-icon" />
            )}

            {data.title}
          </div>
        );
      }
    };
  },
  methods: {},
  mounted() {
    Promise.all([getFolderList(), getFileList()]).then(res => {
      this.folderList = res[0].data;
      this.fileList = res[1].data;
      const arr = putFileToFolder(this.folderList, this.fileList);
      const arr2 = putFolderToTree(arr);
      this.treeList = arr2;
    });
  }
};
</script>

<style lang="less">
.my-tree-wrapper {
  padding: 18px;
  background: #fff;
  .my-folder-wrapper {
    display: inline-block;
    .my-icon {
      margin-right: 5px;
    }
  }
}
</style>
