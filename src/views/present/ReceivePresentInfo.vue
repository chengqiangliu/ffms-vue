<template>
  <div class="dialog-content">
    <el-row :gutter="20">
      <el-col :span="14" :offset="5">
        <el-form :model="receivePresentInfo">
          <el-form-item label="收礼人" required :label-width="formLabelWidth">
            <el-select v-model="receivePresentInfo.receiver" placeholder="请选择收礼人" size="mini">
              <el-option label="老公" value="老公"></el-option>
              <el-option label="老婆" value="老婆"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="送礼人" required prop="friend" :label-width="formLabelWidth">
            <el-input v-model="receivePresentInfo.friend" placeholder="送礼人" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="礼品类型" prop="presentType">
              <el-radio-group v-model="receivePresentInfo.presentType" size="mini">
                <el-radio label="刷卡"></el-radio>
                <el-radio label="现金"></el-radio>
                <el-radio label="实物"></el-radio>
              </el-radio-group>
            </el-form-item>
          <el-form-item v-if="receivePresentInfo.presentType == '刷卡'" label="开户银行"
            required prop="bankType" :label-width="formLabelWidth">
            <el-select v-model="receivePresentInfo.bankType" placeholder="请选择开户银行" size="mini">
              <el-option label="东京三菱UFJ银行" value="东京三菱UFJ银行"></el-option>
              <el-option label="乐天银行" value="乐天银行"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="receivePresentInfo.presentType == '刷卡'" label="银行卡号"
            required prop="cardNo" :label-width="formLabelWidth">
            <el-input v-model="receivePresentInfo.cardNo" placeholder="银行卡号" size="mini"></el-input>
          </el-form-item>
          <el-form-item v-if="receivePresentInfo.presentType == '实物'" required label="礼金名"
            prop="presentName" :label-width="formLabelWidth">
            <el-input v-model="receivePresentInfo.presentName" placeholder="礼金名" size="mini">
            </el-input>
          </el-form-item>
          <el-form-item v-else required label="礼金额"
            prop="moneySum" :label-width="formLabelWidth">
            <el-input v-model="receivePresentInfo.moneySum" placeholder="礼金额" size="mini">
            </el-input>
          </el-form-item>
          <el-form-item label="收礼日期" required :label-width="formLabelWidth">
            <el-date-picker type="date"
              placeholder="请选择收礼日期"
              v-model="receivePresentInfo.giveDate"
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
  name: 'receivePresentInfo',
  data() {
    return {
      receivePresentInfo: {
        receiver: '',
        friend: '',
        presentType: '刷卡',
        cardType: '储蓄卡',
        bankType: '',
        cardNo: '',
        moneySum: '',
        presentName: '',
        giveDate: '',
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
