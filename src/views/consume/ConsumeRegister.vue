<template>
  <div style="width: 100%">
    <BreadCrumb subTitle="消费信息录入" />
    <el-row :gutter="20" class="elrow">
      <el-col :span="12" :offset="6">
        <el-form :model="consumeForm" :rules="rules" ref="consumeForm"
          label-width="120px" class="demo-consumeForm">
          <el-form-item label="商品名" prop="goodsName">
            <el-input v-model="consumeForm.goodsName"></el-input>
          </el-form-item>
          <el-form-item label="商品类别" prop="goodsType">
            <el-select v-model="consumeForm.goodsType" placeholder="商品类别">
              <el-option label="食品" value="食品"></el-option>
              <el-option label="电子产品" value="电子产品"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="单价" prop="price">
            <el-input v-model="consumeForm.price"></el-input>
          </el-form-item>
          <el-form-item label="数量" prop="quantity">
            <el-input-number v-model="consumeForm.quantity" :min="1" :max="1000"></el-input-number>
          </el-form-item>
          <el-form-item label="总价" prop="goodsSum">
            <el-input v-model="consumeForm.goodsSum"></el-input>
          </el-form-item>
          <el-form-item label="付款方式" prop="paymentType">
            <el-radio-group v-model="consumeForm.paymentType">
              <el-radio label="现金"></el-radio>
              <el-radio label="信用卡"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="银行卡类型" prop="bankType">
            <el-select v-model="consumeForm.bankType" placeholder="银行卡类型">
              <el-option label="东京三菱UFJ银行" value="东京三菱UFJ银行"></el-option>
              <el-option label="乐天银行" value="乐天银行"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="银行卡号" prop="cardNo">
            <el-select v-model="consumeForm.cardNo" placeholder="银行卡号">
              <el-option label="1xxx008" value="1xxx008"></el-option>
              <el-option label="1xxx009" value="1xxx009"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="货币类型" prop="currency">
            <el-select v-model="consumeForm.currency" placeholder="货币类型">
              <el-option label="人民币" value="人民币"></el-option>
              <el-option label="日元" value="日元"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="消费时间" required>
            <el-col :span="11">
              <el-form-item prop="consumeDate">
                <el-date-picker type="date"
                  placeholder="请选择消费时间"
                  v-model="consumeForm.consumeDate"
                  style="width: 100%;">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('consumeForm')">Create</el-button>
            <el-button @click="resetForm('consumeForm')">Reset</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
  .elrow {
    margin-top: 50px;
  }
</style>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';

export default {
  data() {
    return {
      consumeForm: {
        goodsName: '',
        goodsType: '',
        price: 0,
        quantity: 1,
        goodsSum: 0,
        paymentType: '',
        bankType: '',
        cardNo: '',
        currency: '',
        consumeDate: '',
      },
      rules: {
        goodsName: [
          {
            required: true,
            message: '请输入商品名',
            trigger: 'blur',
          },
          {
            min: 1,
            max: 20,
            message: '商品名长度应该在1到20之间',
            trigger: 'blur',
          },
        ],
        goodsType: [
          {
            required: true,
            message: '请选择商品类别',
            trigger: 'change',
          },
        ],
        price: [
          {
            required: true,
            message: '请输入单价',
            trigger: 'blur',
          },
        ],
        bankType: [
          {
            required: true,
            message: '请选择银行卡类型',
            trigger: 'change',
          },
        ],
        cardNo: [
          {
            required: true,
            message: '请选择银行卡号',
            trigger: 'change',
          },
        ],
        currency: [
          {
            required: true,
            message: '请选择货币类型',
            trigger: 'change',
          },
        ],
        consumeDate: [
          {
            type: 'date', required: true, message: '请选择一个消费日期', trigger: 'change',
          },
        ],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },

  components: {
    BreadCrumb,
  },
};
</script>
