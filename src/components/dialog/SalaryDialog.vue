<template>
  <el-dialog :title="dialogTitle" :visible.sync="show" :append-to-body="true"
    @open='openDialog' @close='closeDialog' :close-on-click-modal="false">
    <div class="dialog-content" v-loading='loading'>
      <el-row :gutter="20">
        <el-col :span="14" :offset="4">
          <el-form :model="form">
            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-select v-model="form.holder" placeholder="请选择姓名" size="mini">
                <el-option label="老公" value="老公"></el-option>
                <el-option label="老婆" value="老婆"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="月份" :label-width="formLabelWidth">
              <el-date-picker type="month"
                placeholder="请选择月份"
                v-model="form.yearMonth"
                size="mini">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="发工资方式" prop="payrollType">
              <el-radio-group v-model="form.payrollType" size="mini">
                <el-radio label="刷卡"></el-radio>
                <el-radio label="现金"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item v-if="form.payrollType == '刷卡'" label="开户银行"
              prop="bankType" :label-width="formLabelWidth">
              <el-select v-model="form.bankType" placeholder="请选择开户银行" size="mini">
                <el-option v-for="item in masterData.bankTypeList"
                  :key="item.key" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item  v-if="form.payrollType == '刷卡'" label="银行卡号"
              prop="cardNo" :label-width="formLabelWidth">
              <el-select v-model="form.cardNo" placeholder="请选择银行卡号"
                size="mini">
                <el-option label="1xxx008" value="1xxx008"></el-option>
                <el-option label="1xxx009" value="1xxx009"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="工资额" prop="salarySum" :label-width="formLabelWidth">
              <el-input v-model="form.salarySum" placeholder="工资额" size="mini"></el-input>
            </el-form-item>
            <el-form-item label="备注" prop="detail" :label-width="formLabelWidth">
              <el-input v-model="form.detail" placeholder="备注" size="mini"></el-input>
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
        holder: '',
        yearMonth: '',
        payrollType: '刷卡',
        bankType: '',
        cardNo: '',
        salarySum: '',
        detail: '',
        formType: 0,
      },
      formLabelWidth: '125px',
    };
  },

  computed: {
    dialogTitle() {
      let title = '';
      if (this.form.formType === 1) {
        title = '工资信息录入';
      } else {
        title = '工资信息修改';
      }
      return title;
    },

    masterData() {
      return this.$store.getters.masterData;
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
          that.$message({
            message: '恭喜，工资信息修改成功。',
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
