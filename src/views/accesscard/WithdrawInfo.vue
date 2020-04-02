<template>
  <div class="dialog-content">
    <el-row :gutter="20">
      <el-col :span="10" :offset="4">
        <el-form :model="withdrawInfo">
          <el-form-item label="取款人" required :label-width="formLabelWidth">
            <el-select v-model="withdrawInfo.accessorName" placeholder="请选择取款人" size="mini">
              <el-option label="老公" value="老公"></el-option>
              <el-option label="老婆" value="老婆"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="银行卡类型" required prop="bankType" :label-width="formLabelWidth">
            <el-select v-model="withdrawInfo.bankType" placeholder="请选择银行卡类型" size="mini">
              <el-option label="东京三菱UFJ银行" value="东京三菱UFJ银行"></el-option>
              <el-option label="乐天银行" value="乐天银行"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="银行卡号" required prop="cardNo" :label-width="formLabelWidth">
            <el-select v-model="withdrawInfo.cardNo" placeholder="请选择银行卡号" size="mini">
              <el-option label="1xxx008" value="1xxx008"></el-option>
              <el-option label="1xxx009" value="1xxx009"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="取款金额" required prop="moneySum" :label-width="formLabelWidth">
            <el-input v-model="withdrawInfo.moneySum" placeholder="取款金额" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="取款日期" required :label-width="formLabelWidth">
            <el-date-picker type="date"
              placeholder="请选择取款日期"
              v-model="withdrawInfo.withdrawDate"
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
  name: 'WithdrawInfo',
  data() {
    return {
      withdrawInfo: {
        accessorName: '',
        bankType: '',
        cardNo: '',
        moneySum: '',
        withdrawDate: '',
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
