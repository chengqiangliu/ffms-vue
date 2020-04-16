<template>
  <el-dialog :title="dialogTitle" :visible.sync="show" :append-to-body="true"
    @open='openDialog' @close='closeDialog' :close-on-click-modal="false">
    <div class="dialog-content" v-loading='loading'>
      <el-row :gutter="20">
        <el-col :span="14" :offset="4">
          <el-form :model="form">
            <el-form-item label="原卡开户银行" prop="srcBankType"
              :label-width="formLabelWidth">
              <el-select v-model="form.srcBankType" placeholder="请选择原卡开户银行" size="mini">
                <el-option v-for="item in masterData.bankTypeList"
                  :key="item.key" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="原卡号" :label-width="formLabelWidth">
              <el-select v-model="form.srcCardNo" placeholder="请选择原卡号" size="mini">
                <el-option label="1xxx008" value="1xxx008"></el-option>
                <el-option label="1xxx009" value="1xxx009"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="目标卡开户银行" prop="targetBankType"
              :label-width="formLabelWidth">
              <el-select v-model="form.targetBankType" placeholder="请选择目标卡开户银行"
                size="mini">
                <el-option v-for="item in masterData.bankTypeList"
                  :key="item.key" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="目标卡卡号" :label-width="formLabelWidth">
              <el-select v-model="form.targetCardNo" placeholder="请选择目标卡卡号"
                size="mini">
                <el-option label="1xxx008" value="1xxx008"></el-option>
                <el-option label="1xxx009" value="1xxx009"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="原卡转出金额" prop="srcMoneySum"
              :label-width="formLabelWidth">
              <el-input v-model="form.srcMoneySum" placeholder="原卡转出金额"
                size="mini"></el-input>
            </el-form-item>
            <el-form-item label="转账汇率" prop="rate" :label-width="formLabelWidth">
              <el-input v-model="form.rate" placeholder="转账汇率"
                size="mini"></el-input>
            </el-form-item>
            <el-form-item label="目标卡到账金额" prop="targetMoneySum" :label-width="formLabelWidth">
              <el-input v-model="form.targetMoneySum" readonly placeholder="目标卡到账金额"
                size="mini"></el-input>
            </el-form-item>
            <el-form-item label="转账人" :label-width="formLabelWidth">
              <el-select v-model="form.transferName" placeholder="请选择转账人" size="mini">
                <el-option label="老公" value="老公"></el-option>
                <el-option label="老婆" value="老婆"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="转账日期" :label-width="formLabelWidth">
              <el-date-picker type="date"
                placeholder="请选择转账日期"
                v-model="form.transferDate"
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
        srcBankType: '',
        srcCardNo: '',
        targetBankType: '',
        targetCardNo: '',
        srcMoneySum: '',
        rate: '',
        targetMoneySum: '',
        transferName: '',
        transferDate: '',
        formType: 0,
      },
      formLabelWidth: '125px',
    };
  },

  computed: {
    dialogTitle() {
      let title = '';
      if (this.form.formType === 1) {
        title = '转账信息录入';
      } else {
        title = '转账信息修改';
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
        params: that.consumeForm,
        success() {
          that.updated = true;
          that.$message({
            message: '恭喜，转账信息修改成功。',
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
