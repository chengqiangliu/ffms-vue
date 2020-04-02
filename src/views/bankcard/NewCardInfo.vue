<template>
  <div class="dialog-content">
    <el-row :gutter="20">
      <el-col :span="10" :offset="4">
        <el-form :model="newCardInfo">
          <el-form-item label="银行卡类型" required prop="cardType" :label-width="formLabelWidth">
            <el-select v-model="newCardInfo.cardType" placeholder="请选择银行卡类型" size="mini">
              <el-option label="储蓄卡" value="储蓄卡"></el-option>
              <el-option label="信用卡" value="信用卡"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="开户银行" required prop="bankType" :label-width="formLabelWidth">
            <el-select v-model="newCardInfo.bankType" placeholder="请选择开户银行" size="mini">
              <el-option label="东京三菱UFJ银行" value="东京三菱UFJ银行"></el-option>
              <el-option label="乐天银行" value="乐天银行"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="银行卡号" required prop="cardNo" :label-width="formLabelWidth">
            <el-input v-model="newCardInfo.cardNo" placeholder="银行卡号" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="办卡人" required :label-width="formLabelWidth">
            <el-select v-model="newCardInfo.holder" placeholder="请选择办卡人" size="mini">
              <el-option label="老公" value="老公"></el-option>
              <el-option label="老婆" value="老婆"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="货币类型" required prop="currency" :label-width="formLabelWidth">
            <el-select v-model="newCardInfo.currency" placeholder="货币类型" size="mini">
              <el-option label="人民币" value="人民币"></el-option>
              <el-option label="日元" value="日元"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="newCardInfo.cardType == '信用卡'" required label="信用额度"
            prop="creditSum" :label-width="formLabelWidth">
            <el-input v-model="newCardInfo.creditSum" placeholder="信用额度" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="办卡日期" required :label-width="formLabelWidth">
            <el-date-picker type="date"
              placeholder="请选择办卡日期"
              v-model="newCardInfo.createCardDate"
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
  name: 'NewCardInfo',
  data() {
    return {
      newCardInfo: {
        cardType: '储蓄卡',
        bankType: '',
        cardNo: '',
        holder: '',
        currency: '',
        creditSum: '',
        createCardDate: '',
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
