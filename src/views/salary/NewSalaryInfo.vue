<template>
  <div class="dialog-content">
    <el-row :gutter="20">
      <el-col :span="14" :offset="5">
        <el-form :model="newSalaryInfo">
          <el-form-item label="姓名" required :label-width="formLabelWidth">
            <el-select v-model="newSalaryInfo.holder" placeholder="请选择姓名" size="mini">
              <el-option label="老公" value="老公"></el-option>
              <el-option label="老婆" value="老婆"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="月份" required :label-width="formLabelWidth">
            <el-date-picker type="month"
              placeholder="请选择月份"
              v-model="newSalaryInfo.yearMonth"
              size="mini">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="发工资方式" required prop="payrollType">
            <el-radio-group v-model="newSalaryInfo.payrollType" size="mini">
              <el-radio label="刷卡"></el-radio>
              <el-radio label="现金"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-if="newSalaryInfo.payrollType == '刷卡'" label="开户银行"
            required prop="bankType" :label-width="formLabelWidth">
            <el-select v-model="newSalaryInfo.bankType" placeholder="请选择开户银行" size="mini">
              <el-option label="东京三菱UFJ银行" value="东京三菱UFJ银行"></el-option>
              <el-option label="乐天银行" value="乐天银行"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item  v-if="newSalaryInfo.payrollType == '刷卡'" label="银行卡号"
            required prop="cardNo" :label-width="formLabelWidth">
            <el-select v-model="newSalaryInfo.cardNo" placeholder="请选择银行卡号"
              size="mini">
              <el-option label="1xxx008" value="1xxx008"></el-option>
              <el-option label="1xxx009" value="1xxx009"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="工资额" required prop="salarySum" :label-width="formLabelWidth">
            <el-input v-model="newSalaryInfo.salarySum" placeholder="工资额" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="备注" prop="detail" :label-width="formLabelWidth">
            <el-input v-model="newSalaryInfo.detail" placeholder="备注" size="mini"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'NewSalaryInfo',
  data() {
    return {
      newSalaryInfo: {
        holder: '',
        yearMonth: '',
        payrollType: '刷卡',
        bankType: '',
        cardNo: '',
        salarySum: '',
        detail: '',
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
