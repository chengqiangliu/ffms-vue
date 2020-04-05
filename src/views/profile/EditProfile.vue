<template>
  <div class="main-div">
    <BreadCrumb subTitle="编辑个人信息" />
    <div class="shadow">
      <el-row :gutter="20" class="elrow">
        <el-col :span="10" :offset=6>
          <el-form :model="profileForm" :rules="rules" ref="profileForm"
            label-width="120px" class="demo-profileForm">
            <el-form-item label="用户名" prop="userName">
              <el-input v-model="profileForm.userName" placeholder="用户名" readOnly size="mini">
              </el-input>
            </el-form-item>
            <el-form-item label="原密码" prop="password">
              <el-input v-model="profileForm.password" placeholder="原密码"
                show-password size="mini"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPassword">
              <el-input v-model="profileForm.newPassword" placeholder="新密码"
                show-password size="mini"></el-input>
            </el-form-item>
            <el-form-item label="确认新密码" prop="confirmNewPassword">
              <el-input v-model="profileForm.confirmNewPassword" placeholder="确认新密码"
                show-password size="mini"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
              <el-input v-model="profileForm.email" size="mini">
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="resetForm('profileForm')" size="mini">重置</el-button>
              <el-button type="primary" @click="submitForm('profileForm')" size="mini">
                修改</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
  .main-div {
    width: 100%;
    height: 100%;
  }

  .elrow {
    margin-top: 20px;
  }

  .el-input, .el-select {
    width: 220px;
  }

  .el-form-item {
    margin-bottom: 18px;
  }

  .shadow {
    height: 75%;
    margin: 50px 20px 70px 20px;
    -webkit-box-shadow: 0 12px 12px -4px rgba(0,0,0,.1);
    -moz-box-shadow: 0 12px 12px -4px rgba(0,0,0,.1);
    box-shadow: 0 12px 12px -4px rgba(0,0,0,.1);
  }
</style>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';

export default {
  data() {
    return {
      profileForm: {
        userName: '',
        password: '',
        newPassword: '',
        confirmNewPassword: '',
        email: '',
      },
      rules: {
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
        newPassword: [
          {
            required: true,
            message: '请输入新密码',
            trigger: 'blur',
          },
          {
            min: 5,
            max: 20,
            message: '新密码长度应该在5到20之间',
            trigger: 'blur',
          },
        ],
        confirmNewPassword: [
          {
            required: true,
            message: '请输入确认新密码',
            trigger: 'blur',
          },
          {
            min: 5,
            max: 20,
            message: '确认新密码长度应该在5到20之间',
            trigger: 'blur',
          },
        ],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
        return false;
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },

  components: {
    BreadCrumb,
  },
};
</script>
