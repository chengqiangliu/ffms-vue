<template>
  <div class="main-div">
    <el-row :gutter="20">
      <el-col :span="8" :offset=9>
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

<style scoped>
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

<script>
// import BreadCrumb from '@/components/BreadCrumb.vue';

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
      this.$axios.post('/login', {})
        .then((response) => {
          localStorage.setItem('ADMIN_TOKEN', 'logged');
          this.$router.push({
            path: '/dashboard',
          }).catch((err) => err);
        })
        .catch((error) => {
          this.$message({
            message: `login error, ${error}`,
            type: 'error',
            duration: 3000,
          });
        });
    },
  },

  components: {
    // BreadCrumb,
  },
};
</script>
