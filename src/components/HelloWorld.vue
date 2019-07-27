<template>
  <div class="hello">
    <Card :title="`当前用户是{${value.name}}`">
      <p slot="extra">权限:[ {{value.access}} ]</p>
      <div v-html="msg" class="msg"></div>
    </Card>
  </div>
</template>

<script>
import { getUserInfo } from "@/api/user";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      value: {}
    };
  },
  mounted() {
    getUserInfo({ id: 12 }).then(res => {
      this.value = res.data;
    });
  },
  methods: {}
};
</script>
<style lang="less">
.msg {
  > ul {
    padding-left: 20px;
  }
}
</style>

