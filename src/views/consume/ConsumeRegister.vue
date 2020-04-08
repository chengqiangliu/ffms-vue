<template>
  <div style="width: 100%;">
    <BreadCrumb subTitle="消费信息录入" />
    <div class="shadow">
      <el-row :gutter="20" class="elrow">
        <el-col :span="10" :offset=6>
          <el-form :model="consumeForm" :rules="rules" ref="consumeForm"
            label-width="120px">
            <el-form-item label="商品名" prop="goodsName" required>
              <el-input v-model="consumeForm.goodsName" placeholder="商品名" size="mini"></el-input>
            </el-form-item>
            <el-form-item label="商品类别" prop="goodsType">
              <el-select v-model="consumeForm.goodsType" placeholder="请选择商品类别" size="mini">
                <el-option label="食品" value="食品"></el-option>
                <el-option label="电子产品" value="电子产品"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="单价" prop="price">
              <el-input v-model="consumeForm.price" placeholder="单价" size="mini"></el-input>
            </el-form-item>
            <el-form-item label="数量" prop="quantity">
              <el-input-number v-model="consumeForm.quantity" :min="1" :max="1000" size="mini">
              </el-input-number>
            </el-form-item>
            <el-form-item label="总价" prop="goodsSum">
              <el-input v-model="consumeForm.goodsSum" disabled size="mini"></el-input>
            </el-form-item>
            <el-form-item label="付款方式" prop="paymentType">
              <el-radio-group v-model="consumeForm.paymentType" size="mini">
                <el-radio label="现金" value="0"></el-radio>
                <el-radio label="刷卡" value="1"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item v-if="consumeForm.paymentType == '刷卡'" label="银行卡类型" prop="bankType">
              <el-select v-model="consumeForm.bankType" placeholder="请选择银行卡类型" size="mini">
                <el-option label="东京三菱UFJ银行" value="东京三菱UFJ银行"></el-option>
                <el-option label="乐天银行" value="乐天银行"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item v-if="consumeForm.paymentType == '刷卡'" label="银行卡号" prop="cardNo">
              <el-select v-model="consumeForm.cardNo" placeholder="请选择银行卡号" size="mini">
                <el-option label="1xxx008" value="1xxx008"></el-option>
                <el-option label="1xxx009" value="1xxx009"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="消费人" prop="consumer">
              <el-select v-model="consumeForm.consumer" placeholder="请选择消费人" size="mini">
                <el-option label="老公" value="老公"></el-option>
                <el-option label="老婆" value="老婆"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="消费日期" prop="consumeDate">
              <el-date-picker type="date"
                placeholder="请选择消费日期"
                v-model="consumeForm.consumeDate"
                size="mini">
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button @click="resetForm('consumeForm')" size="mini">Reset</el-button>
              <el-button type="primary" @click="submitForm('consumeForm')" size="mini">
                Create</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
  .elrow {
    margin-top: 20px;
  }

  .el-input, .el-select {
    width: 220px;
  }

  .el-form-item {
    margin-bottom: 18px;
  }

  .shadow {
    margin: 20px 20px 70px 20px;
    -webkit-box-shadow: 0 12px 12px -4px rgba(0,0,0,.1);
    -moz-box-shadow: 0 12px 12px -4px rgba(0,0,0,.1);
    box-shadow: 0 12px 12px -4px rgba(0,0,0,.1);
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
        paymentType: '现金',
        bankType: '',
        cardNo: '',
        consumer: '',
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
        consumer: [
          {
            required: true,
            message: '请选择消费人',
            trigger: 'change',
          },
        ],
        consumeDate: [
          {
            required: true,
            type: 'date',
            message: '请选择一个消费日期',
            trigger: 'change',
          },
        ],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const that = this;
          this.$request.httpRequest({
            method: 'post',
            url: '/consume/register',
            params: {},
            success() {
              that.$message({
                message: '恭喜，消费信息录入成功。',
                type: 'success',
              });
            },
          });
        } else {
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
