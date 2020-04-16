<template>
  <el-dialog :title="dialogTitle" :visible.sync="show" :append-to-body="true"
    @open='openDialog' @close='closeDialog' :close-on-click-modal="false">
    <div class="dialog-content" v-loading='loading'>
      <el-row :gutter="20">
        <el-col :span="14" :offset="4">
          <el-form :model="form">
            <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
              <el-input v-model="form.username" placeholder="用户名" size="mini"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
              <el-input v-model="form.password" placeholder="原密码"
                show-password size="mini"></el-input>
            </el-form-item>
           <el-form-item label="确认密码" prop="confirmPassword" :label-width="formLabelWidth">
              <el-input v-model="form.confirmPassword" placeholder="确认密码"
                show-password size="mini"></el-input>
            </el-form-item>
            <el-form-item label="用户角色" :label-width="formLabelWidth">
              <el-select v-model="form.role" placeholder="请选择用户角色" size="mini">
                <el-option label="普通用户" value="普通用户"></el-option>
                <el-option label="管理员" value="管理员"></el-option>
                <el-option label="超级用户" value="超级用户"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Email" prop="email" :label-width="formLabelWidth">
              <el-input v-model="form.email" placeholder="Email" size="mini"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="show = false">取消</el-button>
      <el-button type="primary" @click="handleConfirm">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      resolve: null,
      show: false,
      loading: false,
      updated: false,
      form: {
        username: '',
        password: '',
        confirmPassword: '',
        role: '',
        email: '',
      },
      formLabelWidth: '125px',
    };
  },

  computed: {
    dialogTitle() {
      let title = '';
      if (this.form.formType === 1) {
        title = '用户信息修改';
      } else {
        title = '添加新用户';
      }
      return title;
    },
  },

  methods: {
    openDialog() {
      this.$nextTick(() => {
        if (this.resolve) {
          this.resolve(this);
        }
      });
    },

    closeDialog() {
      if (this.updated) {
        this.$emit('updated', this.form);
      }
    },

    open() {
      this.show = true;
      return new Promise((resolve) => {
        this.resolve = resolve;
      });
    },

    initData(data) {
      this.form = { ...data };
    },

    handleConfirm() {
      this.loading = true;
      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/consume/update',
        params: that.form,
        success() {
          that.updated = true;
          if (that.form.formType === 1) {
            that.$message({
              message: '恭喜，用户信息修改成功',
              type: 'success',
            });
          } else {
            that.$message({
              message: '恭喜，添加用户成功。',
              type: 'success',
            });
          }
          that.loading = false;
        },
      });
    },
  },
};
</script>

<style scoped>
  .dialog-content {
    width: 100%;
    padding-top: 15px;
  }

  .el-input, .el-select {
    width: 220px;
  }
</style>
