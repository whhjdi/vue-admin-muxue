<template>
  <div class="login-wrapper">
    <div class="login-container">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form">
          <Form
            ref="formLogin"
            :model="form"
            :rules="rules"
            @keydown.enter.native="handleSubmit"
          >
            <FormItem prop="userName">
              <i-input v-model="form.userName" placeholder="请输入用户名">
                <span slot="prepend">
                  <Icon :size="16" type="md-person"></Icon>
                </span>
              </i-input>
            </FormItem>
            <FormItem prop="password">
              <i-input type="password" v-model="form.password">
                <span slot="prepend">
                  <Icon :size="16" type="md-lock"></Icon>
                </span>
              </i-input>
            </FormItem>
            <FormItem>
              <Button @click="handleSubmit" type="primary" long>登录</Button>
            </FormItem>
          </Form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        userName: "muxue",
        password: ""
      },
      rules: {
        userName: [
          { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapActions(["handleLogin"]),
    handleSubmit() {
      this.$refs.formLogin.validate(valid => {
        if (valid) {
          this.handleLogin({
            userName: this.form.userName,
            password: this.form.password
          }).then(res => {
            if (res.code === 200) {
              this.$router.push({
                name: "Home"
              });
            }
          });
        }
      });
    }
  }
};
</script>

<style lang="less">
.login-wrapper {
  width: 100%;
  height: 100%;
  // background-image: url("../assets/images/bg.jpg");
  background-color: #2C3E50;
  background-size: cover;
  background-position: center;
  position: relative;
  .login-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
  }
}
</style>
