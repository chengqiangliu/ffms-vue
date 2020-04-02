<template>
  <div class="dialog-content">
    <el-row :gutter="20">
      <el-col :span="10" :offset="4">
        <el-form :model="transferInfo">
          <el-form-item label="原卡开户银行" required prop="srcBankType"
            :label-width="formLabelWidth">
            <el-select v-model="transferInfo.srcBankType" placeholder="请选择原卡开户银行" size="mini">
              <el-option label="东京三菱UFJ银行" value="东京三菱UFJ银行"></el-option>
              <el-option label="乐天银行" value="乐天银行"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="原卡号" required :label-width="formLabelWidth">
            <el-select v-model="transferInfo.srcCardNo" placeholder="请选择原卡号" size="mini">
              <el-option label="1xxx008" value="1xxx008"></el-option>
              <el-option label="1xxx009" value="1xxx009"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="目标卡开户银行" required prop="targetBankType"
            :label-width="formLabelWidth">
            <el-select v-model="transferInfo.targetBankType" placeholder="请选择目标卡开户银行"
              size="mini">
              <el-option label="东京三菱UFJ银行" value="东京三菱UFJ银行"></el-option>
              <el-option label="乐天银行" value="乐天银行"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="目标卡卡号" required :label-width="formLabelWidth">
            <el-select v-model="transferInfo.targetCardNo" placeholder="请选择目标卡卡号"
              size="mini">
              <el-option label="1xxx008" value="1xxx008"></el-option>
              <el-option label="1xxx009" value="1xxx009"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="原卡转出金额" required prop="srcMoneySum"
            :label-width="formLabelWidth">
            <el-input v-model="transferInfo.srcMoneySum" placeholder="原卡转出金额"
              size="mini"></el-input>
          </el-form-item>
          <el-form-item label="转账汇率" required prop="rate" :label-width="formLabelWidth">
            <el-input v-model="transferInfo.rate" placeholder="转账汇率"
              size="mini"></el-input>
          </el-form-item>
          <el-form-item label="目标卡到账金额" prop="targetMoneySum" :label-width="formLabelWidth">
            <el-input v-model="transferInfo.targetMoneySum" readonly placeholder="目标卡到账金额"
              size="mini"></el-input>
          </el-form-item>
          <el-form-item label="转账人" required :label-width="formLabelWidth">
            <el-select v-model="transferInfo.transferName" placeholder="请选择转账人" size="mini">
              <el-option label="老公" value="老公"></el-option>
              <el-option label="老婆" value="老婆"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="转账日期" required :label-width="formLabelWidth">
            <el-date-picker type="date"
              placeholder="请选择转账日期"
              v-model="transferInfo.transferDate"
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
  name: 'ExchangeInfo',
  data() {
    return {
      transferInfo: {
        srcBankType: '',
        srcCardNo: '',
        targetBankType: '',
        targetCardNo: '',
        srcMoneySum: '',
        rate: '',
        targetMoneySum: '',
        transferName: '',
        transferDate: '',
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
    width: 220px;
  }
</style>
