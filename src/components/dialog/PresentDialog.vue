<template>
  <el-dialog :title="dialogTitle" :visible.sync="show" :append-to-body="true"
    @open='openDialog' @close='closeDialog' :close-on-click-modal="false">
    <div class="dialog-content" v-loading='loading'>
      <el-row :gutter="20">
        <el-col :span="14" :offset="4">
          <el-form :model="form">
            <el-form-item label="送/收礼人" :label-width="formLabelWidth">
              <el-select v-model="form.operator" placeholder="请选择送/收礼人" size="mini">
                <el-option label="老公" value="老公"></el-option>
                <el-option label="老婆" value="老婆"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="朋友" prop="friend" :label-width="formLabelWidth">
              <el-input v-model="form.friend" placeholder="收礼人" size="mini"></el-input>
            </el-form-item>
            <el-form-item label="礼品类型" prop="presentType">
                <el-radio-group v-model="form.presentType" size="mini">
                  <el-radio label="刷卡"></el-radio>
                  <el-radio label="现金"></el-radio>
                  <el-radio label="实物"></el-radio>
                </el-radio-group>
              </el-form-item>
            <el-form-item v-if="form.presentType == '刷卡'" label="开户银行"
              prop="bankType" :label-width="formLabelWidth">
              <el-select v-model="form.bankType" placeholder="请选择开户银行" size="mini">
                <el-option v-for="item in masterData.bankTypeList"
                  :key="item.key" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item v-if="form.presentType == '刷卡'" label="银行卡号"
              prop="cardNo" :label-width="formLabelWidth">
              <el-input v-model="form.cardNo" placeholder="银行卡号" size="mini"></el-input>
            </el-form-item>
            <el-form-item v-if="form.presentType == '实物'" label="礼金名"
              prop="presentName" :label-width="formLabelWidth">
              <el-input v-model="form.presentName" placeholder="礼金名" size="mini">
              </el-input>
            </el-form-item>
            <el-form-item v-else label="礼金额"
              prop="moneySum" :label-width="formLabelWidth">
              <el-input v-model="form.moneySum" placeholder="礼金额" size="mini"></el-input>
            </el-form-item>
            <el-form-item label="送/收礼日期" :label-width="formLabelWidth">
              <el-date-picker type="date"
                placeholder="请选择送/收礼日期"
                v-model="form.operateDate"
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
        operator: '',
        friend: '',
        presentType: '刷卡',
        cardType: '储蓄卡',
        bankType: '',
        cardNo: '',
        moneySum: '',
        presentName: '',
        operateDate: '',
        formType: 0,
      },
      formLabelWidth: '125px',
    };
  },

  computed: {
    dialogTitle() {
      let title = '';
      if (this.form.formType === 1) {
        title = '收礼信息录入';
      } else if (this.form.formType === 2) {
        title = '送礼信息录入';
      } else {
        title = '送/收礼信息修改';
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
            message: '恭喜，送/收礼信息修改成功。',
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
