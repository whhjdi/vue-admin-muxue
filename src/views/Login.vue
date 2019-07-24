<template>
  <div>login</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["handleLogin"])
  },
  mounted() {
    this.handleLogin({ userName: "muxue", password: 123 }).then(res => {
      if (res.code === 200) {
        this.$router.push({
          name: "Home"
        });
      }
    });
  }
};
</script>

<style lang="scss" scoped></style>
