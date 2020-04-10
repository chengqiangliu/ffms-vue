<template>
  <el-dialog title="修改消费信息"
    :visible.sync="show" :close-on-click-modal="false"
    @open='openDialog' @close='closeDialog' :append-to-body="true">
    <div class="shadow" v-loading='loading'>
      <el-row :gutter="20">
        <el-col :span="14" :offset="5">
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
          </el-form>
        </el-col>
      </el-row>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="show = false">取消</el-button>
      <el-button type="primary" @click="update">确定</el-button>
    </span>
  </el-dialog>
</template>


<script>
export default {
  data() {
    return {
      resolve: null,
      show: false,
      loading: false,
      updated: false,
      consumeForm: {},
    };
  },

  methods: {
    openDialog() {
      this.$nextTick(() => {
        if (this.resolve) {
          this.resolve(this);
        }
      });
    },

    closeDialog() {
      if (this.updated) {
        this.$emit('updated', this.form);
      }
    },

    open() {
      this.show = true;
      return new Promise((resolve) => {
        this.resolve = resolve;
      });
    },

    initData(data) {
      this.consumeForm = { ...data };
    },

    update() {
      this.loading = true;
      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/consume/update',
        params: that.consumeForm,
        success() {
          that.updated = true;
          that.$message({
            message: '恭喜，消费信息修改成功。',
            type: 'success',
          });
          that.loading = false;
        },
      }).catch((res) => {
        this.loading = false;
        console.log(res);
      });
    },
  },
};
</script>
