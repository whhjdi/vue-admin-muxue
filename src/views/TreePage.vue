<template>
  <div>1</div>
</template>

<script>
import { getFileList, getFolderList } from "@/api/data.js";

export default {
  name: "TreePage",

  mounted() {
    getFolderList().then(res => {
      console.log(res.data);
    });
    getFileList().then(res => {
      console.log(res.data);
    });
  }
};
</script>

<style lang="less" scoped></style>
