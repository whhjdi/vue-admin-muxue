<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { getUserInfo } from "@/api/user";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    getUserInfo({ id: 12 }).then(res => {
      console.log(res);
    });
  },
  methods: {}
};
</script>
