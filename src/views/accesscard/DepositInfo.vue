<template>
  <div class="dialog-content">
    <el-row :gutter="20">
      <el-col :span="10" :offset="4">
        <el-form :model="depositInfo">
          <el-form-item label="存款人" required :label-width="formLabelWidth">
            <el-select v-model="depositInfo.accessorName" placeholder="请选择存款人" size="mini">
              <el-option label="老公" value="老公"></el-option>
              <el-option label="老婆" value="老婆"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="银行卡类型" required prop="bankType" :label-width="formLabelWidth">
            <el-select v-model="depositInfo.bankType" placeholder="请选择银行卡类型" size="mini">
              <el-option label="东京三菱UFJ银行" value="东京三菱UFJ银行"></el-option>
              <el-option label="乐天银行" value="乐天银行"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="银行卡号" required prop="cardNo" :label-width="formLabelWidth">
            <el-select v-model="depositInfo.cardNo" placeholder="请选择银行卡号" size="mini">
              <el-option label="1xxx008" value="1xxx008"></el-option>
              <el-option label="1xxx009" value="1xxx009"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="存款金额" required prop="moneySum" :label-width="formLabelWidth">
            <el-input v-model="depositInfo.moneySum" placeholder="存款金额" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="存款日期" required :label-width="formLabelWidth">
            <el-date-picker type="date"
              placeholder="请选择存款日期"
              v-model="depositInfo.depositDate"
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
  name: 'DepositInfo',
  data() {
    return {
      depositInfo: {
        accessorName: '',
        bankType: '',
        cardNo: '',
        moneySum: '',
        depositDate: '',
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
