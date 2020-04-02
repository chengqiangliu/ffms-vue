<template>
  <div class="dialog-content">
    <el-row :gutter="20">
      <el-col :span="6">
        <span class="header-span">请选择还款对象</span>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="3">
        <div class="condition-label">借款人</div>
      </el-col>
      <el-col :span="6">
        <el-select v-model="paybackInInfo.willPaybackList" placeholder="请选择姓名" size="mini">
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
    <el-row :gutter="20">
      <el-col :span="6">
        <span class="header-span">还款信息</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3" :offset="1">
        <div class="condition-label">还款方式</div>
      </el-col>
      <el-col :span="6">
        <el-radio-group v-model="paybackInInfo.paybackType" size="mini">
          <el-radio label="刷卡"></el-radio>
          <el-radio label="现金"></el-radio>
        </el-radio-group>
      </el-col>
      <el-col :span="3" :offset="2">
        <div class="condition-label">还款人</div>
      </el-col>
      <el-col :span="4">
        <el-select v-model="paybackInInfo.userName" placeholder="请选择还款人" size="mini">
          <el-option label="老公" value="老公"></el-option>
          <el-option label="老婆" value="老婆"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20" v-if="paybackInInfo.paybackType == '刷卡'">
      <el-col :span="3" :offset="1">
        <div class="condition-label">开户银行</div>
      </el-col>
      <el-col :span="4">
        <el-select v-model="paybackInInfo.bankType" placeholder="请选择开户银行" size="mini">
          <el-option label="东京三菱UFJ银行" value="东京三菱UFJ银行"></el-option>
          <el-option label="乐天银行" value="乐天银行"></el-option>
        </el-select>
      </el-col>
      <el-col :span="3" :offset="4">
        <div class="condition-label">银行卡号</div>
      </el-col>
      <el-col :span="4">
        <el-select v-model="paybackInInfo.cardNo" placeholder="请选择银行卡号"
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
        <el-input v-model="paybackInInfo.refundMoneySum" placeholder="还款金额" size="mini"></el-input>
      </el-col>
      <el-col :span="3" :offset="4">
        <div class="condition-label">还款日期</div>
      </el-col>
      <el-col :span="4">
         <el-date-picker type="date"
            placeholder="请选择还款日期"
            v-model="paybackInInfo.refundDate"
            size="mini">
          </el-date-picker>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <span class="header-span">借款信息</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3" :offset="1">
        <div class="condition-label">借款金额</div>
      </el-col>
      <el-col :span="4">
        <el-input v-model="paybackInInfo.lendMoneySum" disabled="true" size="mini"></el-input>
      </el-col>
      <el-col :span="3" :offset="4">
        <div class="condition-label">借款日期</div>
      </el-col>
      <el-col :span="4">
        <el-input v-model="paybackInInfo.lendDate" disabled="true" size="mini"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3" :offset="1">
        <div class="condition-label">已还金额</div>
      </el-col>
      <el-col :span="4">
        <el-input v-model="paybackInInfo.refundedMoneySum" disabled="true" size="mini"></el-input>
      </el-col>
      <el-col :span="3" :offset="4">
        <div class="condition-label">未还金额</div>
      </el-col>
      <el-col :span="4">
        <el-input v-model="paybackInInfo.notRefundMoneySum" disabled="true" size="mini"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3" :offset="1">
        <div class="condition-label">己方姓名</div>
      </el-col>
      <el-col :span="4">
        <el-input v-model="paybackInInfo.lender" disabled="true" size="mini"></el-input>
      </el-col>
      <el-col :span="3" :offset="4">
        <div class="condition-label">债款人</div>
      </el-col>
      <el-col :span="4">
         <el-input v-model="paybackInInfo.friend" disabled="true" size="mini"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <span class="header-span">※ 选中借款人后单击查询按钮，得到要还款的信息后，输入本次还款信息，进行还款。</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'PaybackInInfo',
  data() {
    return {
      paybackInInfo: {
        willPaybackList: '',
        userName: '',
        paybackType: '刷卡',
        bankType: '',
        cardNo: '',
        refundMoneySum: 0,
        refundDate: '',
        lendMoneySum: 0,
        lendDate: '',
        refundedMoneySum: '',
        notRefundMoneySum: '',
        lender: '',
        friend: 'test',
      },
      formLabelWidth: '125px',
    };
  },
};
</script>

<style scoped>
  .dialog-content {
    width: 100%;
  }

  .el-input, .el-select {
    width: 180px;
  }

  .el-row {
    border-top: 1px solid #eee;
    margin: 0;
    padding: 10px 0;
    font-size: 12px;
  }

  .header-span {
    font-size: 13px;
    font-weight: bold;
  }
</style>
