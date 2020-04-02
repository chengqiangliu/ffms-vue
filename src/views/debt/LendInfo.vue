<template>
  <div class="dialog-content">
    <el-row :gutter="20">
      <el-col :span="14" :offset="5">
        <el-form :model="lendInfo">
          <el-form-item label="姓名" required :label-width="formLabelWidth">
            <el-select v-model="lendInfo.userName" placeholder="请选择姓名" size="mini">
              <el-option label="老公" value="老公"></el-option>
              <el-option label="老婆" value="老婆"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="借款人" required prop="friend" :label-width="formLabelWidth">
            <el-input v-model="lendInfo.friend" placeholder="借款人" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="付款方式" required prop="paymentType">
            <el-radio-group v-model="lendInfo.paymentType" size="mini">
              <el-radio label="刷卡"></el-radio>
              <el-radio label="现金"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-if="lendInfo.paymentType == '刷卡'" label="开户银行"
            required prop="bankType" :label-width="formLabelWidth">
            <el-select v-model="lendInfo.bankType" placeholder="请选择开户银行" size="mini">
              <el-option label="东京三菱UFJ银行" value="东京三菱UFJ银行"></el-option>
              <el-option label="乐天银行" value="乐天银行"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item  v-if="lendInfo.paymentType == '刷卡'" label="银行卡号"
            required prop="cardNo" :label-width="formLabelWidth">
            <el-select v-model="lendInfo.cardNo" placeholder="请选择银行卡号"
              size="mini">
              <el-option label="1xxx008" value="1xxx008"></el-option>
              <el-option label="1xxx009" value="1xxx009"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="借款金额" required prop="moneySum" :label-width="formLabelWidth">
            <el-input v-model="lendInfo.moneySum" placeholder="借款金额" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="借款日期" required :label-width="formLabelWidth">
            <el-date-picker type="date"
              placeholder="请选择借款日期"
              v-model="lendInfo.lendDate"
              size="mini">
            </el-date-picker>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'LendInfo',
  data() {
    return {
      lendInfo: {
        userName: '',
        friend: '',
        paymentType: '刷卡',
        bankType: '',
        cardNo: '',
        moneySum: 0,
        lendDate: '',
      },
      formLabelWidth: '80px',
    };
  },
};
</script>

<style scoped>
  .dialog-content {
    width: 100%;
  }

  .el-input, .el-select {
    width: 220px;
  }
</style>
