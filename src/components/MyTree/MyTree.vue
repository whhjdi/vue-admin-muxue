<template>
  <div>
    <Tree :data="treeList" :render="renderContent"></Tree>
  </div>
</template>

<script>
import { putFileToFolder, putFolderToTree, expandFolder } from "@/utils/util";
import clonedeep from "clonedeep";
export default {
  name: "MyTree",
  props: {
    folderList: {
      type: Array,
      default: () => []
    },
    fileList: {
      type: Array,
      default: () => []
    },
    folderDrop: Array,
    fileDrop: Array
  },
  data() {
    return {
      treeList: [],
      currentRenameId: "",
      currentContent: ""
    };
  },
  watch: {
    folderList() {
      this.handleTreeList();
    },
    fileList() {
      this.handleTreeList();
    }
  },
  methods: {
    renderContent(h, { data }) {
      const dropList = data.type === "folder" ? this.folderDrop : this.fileDrop;
      const dropdownRender =
        dropList &&
        dropList.map(item => {
          return <DropdownItem name={item.name}>{item.title}</DropdownItem>;
        });
      const isRename =
        this.currentRenameId === `${data.type || "file"}_{${data.id}}`;
      return (
        <div class="my-folder-wrapper">
          {data.type === "folder" ? (
            <Icon type="ios-folder" class="my-icon" />
          ) : (
            <Icon type="logo-apple" class="my-icon" />
          )}

          {isRename ? (
            <span>
              <i-input
                value={data.title}
                on-input={this.handleInput.bind(this)}
                class="rename-input"
              ></i-input>
              <i-button
                size="small"
                type="text"
                on-click={this.handleSaveInput.bind(this, data)}
              >
                <Icon type="md-checkmark" color="green" />
              </i-button>
              <i-button
                size="small"
                type="text"
                on-click={this.handleCloseInput.bind(this)}
              >
                <Icon type="md-close" color="red" />
              </i-button>
            </span>
          ) : (
            <span>{data.title}</span>
          )}
          {dropList && !isRename ? (
            <dropdown
              placement="right-start"
              on-on-click={this.handleDropItemClick.bind(this, data)}
            >
              <i-button size="small" type="text" class="my-folder-button">
                <Icon type="md-more" size="12"></Icon>
              </i-button>
              <DropdownMenu slot="list">{dropdownRender}</DropdownMenu>
            </dropdown>
          ) : (
            ""
          )}
        </div>
      );
    },
    handleTreeList() {
      const arr = putFileToFolder(this.folderList, this.fileList);
      const arr2 = putFolderToTree(arr);
      this.treeList = arr2;
    },

    handleDropItemClick(data, name) {
      let folderId = data.folder_id;
      if (name === "rename") {
        this.currentRenameId = `${data.type || "file"}_{${data.id}}`;
      } else if (name === "delete") {
        //1
        this.$Modal.confirm({
          title: "提示",
          content: `您确定要删除这个${data.type ? `文件夹` : "文件"}吗?`,
          onOk: () => {
            this.handleDeleteFolder(data);
            this.$nextTick(() => {
              expandFolder(this.treeList, folderId);
            });
          }
        });
      }
    },
    handleDeleteFolder(data) {
      const isFolder = data.type === "folder";
      const updateListName = isFolder ? "folderList" : "fileList";
      let updateList = isFolder
        ? clonedeep(this.folderList)
        : clonedeep(this.fileList);
      updateList = updateList.filter(item => item.id !== data.id);
      this.$emit(`update:${updateListName}`, updateList);
    },
    handleInput(value) {
      this.currentContent = value;
    },
    handleSaveInput(data) {
      const id = data.id;
      const type = data.type;

      if (type === "folder") {
        const newFolderList = this.updateList(clonedeep(this.folderList), id);
        this.$emit("update:folderList", newFolderList);
      } else {
        const newFileList = this.updateList(clonedeep(this.fileList), id);
        this.$emit("update:fileList", newFileList);
      }
      this.currentRenameId = "";
    },
    updateList(list, id) {
      let index = -1;
      while (++index < list.length) {
        let item = list[index];
        if (item.id === id) {
          item.name = this.currentContent;
          list.splice(index, 1, item);
          break;
        }
      }
      return list;
    },
    handleCloseInput() {
      this.currentRenameId = "";
    }
  },
  mounted() {
    this.handleTreeList();
  }
};
</script>

<style lang="less">
.my-folder-wrapper {
  display: inline-block;
  width: 300px;
  .my-icon {
    margin-right: 5px;
  }
  & > .ivu-dropdown {
    float: right;
  }
  .rename-input {
    width: 100px;
  }
}
</style>
