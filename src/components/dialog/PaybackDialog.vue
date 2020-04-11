<template>
  <el-dialog :title="title"
    :visible.sync="show" :close-on-click-modal="false"
    @open='openDialog' @close='closeDialog' :append-to-body="true">
    <div class="dialog-content" v-loading='loading'>
      <el-row class="title-row" :gutter="20">
        <el-col :span="24">
          <el-divider content-position="left">请选择还款对象</el-divider>
       </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="condition-label">借款人</div>
        </el-col>
        <el-col :span="6">
          <el-select v-model="form.willPaybackList" placeholder="请选择姓名" size="mini">
            <el-option label="老公" value="老公"></el-option>
            <el-option label="老婆" value="老婆"></el-option>
          </el-select>
        </el-col>
        <el-col :span="2" :offset="4">
          <el-button type="primary" class="search-button">
            <i class="fa fa-search"></i> 查询
          </el-button>
        </el-col>
      </el-row>
      <el-row class="title-row" :gutter="20">
        <el-col :span="24">
          <el-divider content-position="left">还款信息</el-divider>
       </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="3" :offset="1">
          <div class="condition-label">还款方式</div>
        </el-col>
        <el-col :span="6">
          <el-radio-group v-model="form.paybackType" size="mini">
            <el-radio label="刷卡"></el-radio>
            <el-radio label="现金"></el-radio>
          </el-radio-group>
        </el-col>
        <el-col :span="3" :offset="2">
          <div class="condition-label">还款人</div>
        </el-col>
        <el-col :span="4">
          <el-select v-model="form.userName" placeholder="请选择还款人" size="mini">
            <el-option label="老公" value="老公"></el-option>
            <el-option label="老婆" value="老婆"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row :gutter="20" v-if="form.paybackType == '刷卡'">
        <el-col :span="3" :offset="1">
          <div class="condition-label">开户银行</div>
        </el-col>
        <el-col :span="4">
          <el-select v-model="form.bankType" placeholder="请选择开户银行" size="mini">
            <el-option label="东京三菱UFJ银行" value="东京三菱UFJ银行"></el-option>
            <el-option label="乐天银行" value="乐天银行"></el-option>
          </el-select>
        </el-col>
        <el-col :span="3" :offset="4">
          <div class="condition-label">银行卡号</div>
        </el-col>
        <el-col :span="4">
          <el-select v-model="form.cardNo" placeholder="请选择银行卡号"
            size="mini">
            <el-option label="1xxx008" value="1xxx008"></el-option>
            <el-option label="1xxx009" value="1xxx009"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="3" :offset="1">
          <div class="condition-label">还款金额</div>
        </el-col>
        <el-col :span="4">
          <el-input v-model="form.refundMoneySum" placeholder="还款金额" size="mini"></el-input>
        </el-col>
        <el-col :span="3" :offset="4">
          <div class="condition-label">还款日期</div>
        </el-col>
        <el-col :span="4">
          <el-date-picker type="date"
              placeholder="请选择还款日期"
              v-model="form.refundDate"
              size="mini">
            </el-date-picker>
        </el-col>
      </el-row>
      <el-row class="title-row" :gutter="20">
        <el-col :span="24">
          <el-divider content-position="left">借款信息</el-divider>
       </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="3" :offset="1">
          <div class="condition-label">借款金额</div>
        </el-col>
        <el-col :span="4">
          <el-input v-model="form.lendMoneySum" disabled="true" size="mini"></el-input>
        </el-col>
        <el-col :span="3" :offset="4">
          <div class="condition-label">借款日期</div>
        </el-col>
        <el-col :span="4">
          <el-input v-model="form.lendDate" disabled="true" size="mini"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="3" :offset="1">
          <div class="condition-label">已还金额</div>
        </el-col>
        <el-col :span="4">
          <el-input v-model="form.refundedMoneySum" disabled="true" size="mini"></el-input>
        </el-col>
        <el-col :span="3" :offset="4">
          <div class="condition-label">未还金额</div>
        </el-col>
        <el-col :span="4">
          <el-input v-model="form.notRefundMoneySum" disabled="true" size="mini"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="3" :offset="1">
          <div class="condition-label">己方姓名</div>
        </el-col>
        <el-col :span="4">
          <el-input v-model="form.lender" disabled="true" size="mini"></el-input>
        </el-col>
        <el-col :span="3" :offset="4">
          <div class="condition-label">债款人</div>
        </el-col>
        <el-col :span="4">
          <el-input v-model="form.friend" disabled="true" size="mini"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <span class="header-span">※ 选中借款人后单击查询按钮，得到要还款的信息后，输入本次还款信息，进行还款。</span>
        </el-col>
      </el-row>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="show = false">取消</el-button>
      <el-button type="primary" @click="update">确定</el-button>
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
      form: {},
      formType: 0,
    };
  },

  computed: {
    title() {
      let title = '';
      if (this.form.formType === 1) {
        title = '还款（出）信息录入';
      } else if (this.form.formType === 2) {
        title = '还款（入）信息录入';
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

    update() {
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
              message: '恭喜，还款（出）成功。',
              type: 'success',
            });
          } else if (that.form.formType === 2) {
            that.$message({
              message: '恭喜，还款（入）成功。',
              type: 'success',
            });
          }
          that.loading = false;
        },
      }).catch((res) => {
        this.loading = false;
        console.log(res);
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
    width: 180px;
  }

  .el-row {
    border-bottom: 1px solid #eee;
    margin: 0;
    padding: 8px 0;
    font-size: 12px;
  }

  .title-row {
    padding: 0;
  }

  .header-span {
    font-size: 13px;
    font-weight: bold;
  }
</style>
