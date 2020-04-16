<template>
  <div style="width: 100%;">
    <BreadCrumb subTitle="销售信息录入" />
    <div class="shadow">
      <el-row :gutter="20" class="elrow">
        <el-col :span="10" :offset=6>
          <el-form :model="salesForm" :rules="rules" ref="salesForm"
            label-width="120px">
            <el-form-item label="商品名" prop="goodsName" required>
              <el-input v-model="salesForm.goodsName" placeholder="商品名" size="mini"></el-input>
            </el-form-item>
            <el-form-item label="商品类别" prop="goodsType">
              <el-select v-model="salesForm.goodsType" placeholder="请选择商品类别" size="mini">
                <el-option v-for="item in masterData.goodsTypeList"
                  :key="item.key" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="单价" prop="price">
              <el-input v-model="salesForm.price" placeholder="单价" size="mini"></el-input>
            </el-form-item>
            <el-form-item label="数量" prop="quantity">
              <el-input-number v-model="salesForm.quantity" :min="1" :max="1000" size="mini">
              </el-input-number>
            </el-form-item>
            <el-form-item label="总价" prop="goodsSum">
              <el-input v-model="salesForm.goodsSum" disabled size="mini"></el-input>
            </el-form-item>
            <el-form-item label="付款方式" prop="paymentType">
              <el-radio-group v-model="salesForm.paymentType" size="mini">
                <el-radio label="现金" value="0"></el-radio>
                <el-radio label="刷卡" value="1"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item v-if="salesForm.paymentType == '刷卡'" label="开户银行" prop="bankType">
              <el-select v-model="salesForm.bankType" placeholder="请选择开户银行" size="mini">
                <el-option v-for="item in masterData.bankTypeList"
                  :key="item.key" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item v-if="salesForm.paymentType == '刷卡'" label="银行卡号" prop="cardNo">
              <el-select v-model="salesForm.cardNo" placeholder="请选择银行卡号" size="mini">
                <el-option label="1xxx008" value="1xxx008"></el-option>
                <el-option label="1xxx009" value="1xxx009"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="销售人" prop="consumer">
              <el-select v-model="salesForm.consumer" placeholder="请选择销售人" size="mini">
                <el-option label="老公" value="老公"></el-option>
                <el-option label="老婆" value="老婆"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="销售日期" prop="consumeDate">
              <el-date-picker type="date"
                placeholder="请选择销售日期"
                v-model="salesForm.consumeDate"
                size="mini">
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button @click="resetForm('salesForm')" size="mini">Reset</el-button>
              <el-button type="primary" @click="submitForm('salesForm')" size="mini">
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
      salesForm: {
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
            message: '请选择销售人',
            trigger: 'change',
          },
        ],
        consumeDate: [
          {
            required: true,
            type: 'date',
            message: '请选择一个销售日期',
            trigger: 'change',
          },
        ],
      },
    };
  },

  computed: {
    masterData() {
      return this.$store.getters.masterData;
    },
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const that = this;
          this.$request.httpRequest({
            method: 'post',
            url: '/sales/register',
            params: {},
            success() {
              that.$message({
                message: '恭喜，销售信息录入成功。',
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
