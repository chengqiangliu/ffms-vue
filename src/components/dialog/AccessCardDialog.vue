<template>
  <el-dialog :title="dialogTitle" :visible.sync="show" :append-to-body="true"
    @open='openDialog' @close='closeDialog' :close-on-click-modal="false">
    <div class="dialog-content" v-loading='loading'>
      <el-row :gutter="20">
        <el-col :span="14" :offset="4">
          <el-form :model="form">
            <el-form-item label="取款人" :label-width="formLabelWidth">
              <el-select v-model="form.accessorName" placeholder="请选择取款人" size="mini">
                <el-option label="老公" value="老公"></el-option>
                <el-option label="老婆" value="老婆"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="银行卡类型" prop="bankType" :label-width="formLabelWidth">
              <el-select v-model="form.bankType" placeholder="请选择银行卡类型" size="mini">
                <el-option label="东京三菱UFJ银行" value="东京三菱UFJ银行"></el-option>
                <el-option label="乐天银行" value="乐天银行"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="银行卡号" prop="cardNo" :label-width="formLabelWidth">
              <el-select v-model="form.cardNo" placeholder="请选择银行卡号" size="mini">
                <el-option label="1xxx008" value="1xxx008"></el-option>
                <el-option label="1xxx009" value="1xxx009"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="取款金额" prop="moneySum" :label-width="formLabelWidth">
              <el-input v-model="form.moneySum" placeholder="取款金额" size="mini"></el-input>
            </el-form-item>
            <el-form-item label="取款日期" :label-width="formLabelWidth">
              <el-date-picker type="date"
                placeholder="请选择取款日期"
                v-model="form.withdrawDate"
                size="mini">
              </el-date-picker>
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
        accessorName: '',
        bankType: '',
        cardNo: '',
        moneySum: '',
        withdrawDate: '',
        formType: 0,
      },
      formLabelWidth: '125px',
    };
  },

  computed: {
    dialogTitle() {
      let title = '';
      if (this.form.formType === 1) {
        title = '取款信息录入';
      } else if (this.form.formType === 2) {
        title = '存款信息录入';
      } else {
        title = '存款信息修改';
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
        params: that.consumeForm,
        success() {
          that.updated = true;
          that.$message({
            message: '恭喜，取款信息修改成功。',
            type: 'success',
          });
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
