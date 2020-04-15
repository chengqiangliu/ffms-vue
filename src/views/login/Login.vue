<template>
  <div class="main-div">
    <el-row :gutter="20">
      <el-col :span="6" :offset=9 style="text-align: center;">
        <span><h3>欢迎登录家庭财务管理系统</h3></span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10" :offset=7>
        <el-card>
          <el-form :model="loginForm" :rules="rules" ref="loginForm"
            label-width="150px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="loginForm.username" placeholder="用户名" size="mini"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="loginForm.password" placeholder="密码" show-password size="mini">
              </el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="hangdleLogin" size="mini">
            登录</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
          },
          {
            min: 5,
            max: 20,
            message: '用户名长度应该在5到20之间',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
          {
            min: 5,
            max: 20,
            message: '密码长度应该在5到20之间',
            trigger: 'blur',
          },
        ],
      },
    };
  },

  methods: {
    hangdleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          const that = this;
          this.$request.httpRequest({
            method: 'post',
            url: '/login',
            params: that.loginForm,
            success(data) {
              localStorage.setItem('LOGIN_TOKEN', data.token);
              const uesrInfo = {
                username: that.loginForm.username,
                role: '',
              };
              that.$store.commit('setUserInfo', uesrInfo);
              that.$router.push({
                path: '/dashboard',
              }).catch((err) => err);
            },
          });
        } else {
          return false;
        }
        return false;
      });
    },
  },

  components: {
  },
};
</script>

<style scoped>
  h3{
    color: #BECFE0;
  }

  .main-div {
    width: 100%;
    padding-top: 60px;
  }

  .el-card {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .elrow {
    margin-top: 20px;
  }

  .el-button {
    margin-top: 10px;
    margin-left: 80px;
    width: 300px;
  }

  .el-input, .el-select {
    width: 220px;
  }
</style>
