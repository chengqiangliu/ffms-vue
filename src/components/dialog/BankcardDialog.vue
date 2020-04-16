<template>
  <el-dialog :title="dialogTitle" :visible.sync="show" :append-to-body="true"
    @open='openDialog' @close='closeDialog' :close-on-click-modal="false">
    <div class="dialog-content" v-loading='loading'>
      <el-row :gutter="20">
        <el-col :span="14" :offset="4">
          <el-form :model="form">
            <el-form-item label="银行卡类型" prop="cardType" :label-width="formLabelWidth">
              <el-select v-model="form.cardType" placeholder="请选择银行卡类型" size="mini">
                <el-option v-for="item in masterData.cardTypeList"
                  :key="item.key" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="开户银行" prop="bankType" :label-width="formLabelWidth">
              <el-select v-model="form.bankType" placeholder="请选择开户银行" size="mini">
                <el-option v-for="item in masterData.bankTypeList"
                  :key="item.key" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="银行卡号" prop="cardNo" :label-width="formLabelWidth">
              <el-input v-model="form.cardNo" placeholder="银行卡号" size="mini"></el-input>
            </el-form-item>
            <el-form-item label="办卡人" :label-width="formLabelWidth">
              <el-select v-model="form.holder" placeholder="请选择办卡人" size="mini">
                <el-option label="老公" value="老公"></el-option>
                <el-option label="老婆" value="老婆"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="货币类型" prop="currency" :label-width="formLabelWidth">
              <el-select v-model="form.currency" placeholder="货币类型" size="mini">
                <el-option v-for="item in masterData.currencyList"
                  :key="item.key" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item v-if="form.cardType == '信用卡'" label="信用额度"
              prop="creditSum" :label-width="formLabelWidth">
              <el-input v-model="form.creditSum" placeholder="信用额度" size="mini"></el-input>
            </el-form-item>
            <el-form-item label="办卡日期" :label-width="formLabelWidth">
              <el-date-picker type="date"
                placeholder="请选择办卡日期"
                v-model="form.createCardDate"
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
        cardType: '储蓄卡',
        bankType: '',
        cardNo: '',
        holder: '',
        currency: '',
        creditSum: '',
        createCardDate: '',
        formType: 0,
      },
      formLabelWidth: '125px',
    };
  },

  computed: {
    dialogTitle() {
      let title = '';
      if (this.form.formType === 1) {
        title = '银行卡信息录入';
      } else {
        title = '银行卡信息修改';
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
            message: '恭喜，银行卡信息修改成功。',
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
