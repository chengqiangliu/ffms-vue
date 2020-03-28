<template>
  <div style="width: 100%">
    <BreadCrumb subTitle="消费信息列表" />
    <el-row class="elrow">
      <el-col>
        <el-table
          :data="tableData"
          :default-sort = "{prop: 'date', order: 'descending'}"
          stripe
          height="300">
          <el-table-column
            type="selection"
            fixed
            width="55">
          </el-table-column>
          <el-table-column
            prop="goodsName"
            label="商品名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="goodsType"
            label="商品类别"
            width="120">
          </el-table-column>
          <el-table-column
            prop="price"
            label="单价"
            width="120">
          </el-table-column>
          <el-table-column
            prop="quantity"
            label="数量"
            width="300">
          </el-table-column>
          <el-table-column
            prop="acquisitionValue"
            label="总价"
            width="120">
          </el-table-column>
          <el-table-column
            prop="paymentType"
            label="付款方式"
            width="120">
          </el-table-column>
          <el-table-column
            prop="consumer"
            label="消费人"
            width="120">
          </el-table-column>
          <el-table-column
            sortable
            prop="consumeDate"
            label="消费日期"
            width="150">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.consumeDate }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="Operations"
            width="170">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">
                <i class="el-icon-edit"></i>
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">
                <i class="el-icon-delete"></i>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
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
      tableData: [
        {
          goodsName: '2016-05-03',
          goodsType: 'Tom',
          state: 'California',
          price: 'Los Angeles',
          quantity: 'No. 189, Grove St, Los Angeles',
          acquisitionValue: 'CA 90036',
          paymentType: 'CA 90036',
          consumer: 'CA 90036',
          consumeDate: '2016-05-03',
        }, {
          goodsName: '2016-05-02',
          goodsType: 'Tom',
          price: 'California',
          city: 'Los Angeles',
          quantity: 'No. 189, Grove St, Los Angeles',
          acquisitionValue: 'CA 90036',
          paymentType: 'CA 90036',
          consumer: 'CA 90036',
          consumeDate: '2016-05-02',
        }, {
          goodsName: '2016-05-04',
          goodsType: 'Tom',
          price: 'California',
          city: 'Los Angeles',
          quantity: 'No. 189, Grove St, Los Angeles',
          acquisitionValue: 'CA 90036',
          paymentType: 'CA 90036',
          consumer: 'CA 90036',
          consumeDate: '2016-05-04',
        }, {
          goodsName: '2016-05-01',
          goodsType: 'Tom',
          price: 'California',
          city: 'Los Angeles',
          quantity: 'No. 189, Grove St, Los Angeles',
          acquisitionValue: 'CA 90036',
          paymentType: 'CA 90036',
          consumer: 'CA 90036',
          consumeDate: '2016-05-01',
        }, {
          goodsName: '2016-05-08',
          goodsType: 'Tom',
          price: 'California',
          city: 'Los Angeles',
          quantity: 'No. 189, Grove St, Los Angeles',
          acquisitionValue: 'CA 90036',
          paymentType: 'CA 90036',
          consumer: 'CA 90036',
          consumeDate: '2016-05-08',
        }, {
          goodsName: '2016-05-06',
          goodsType: 'Tom',
          price: 'California',
          city: 'Los Angeles',
          quantity: 'No. 189, Grove St, Los Angeles',
          acquisitionValue: 'CA 90036',
          paymentType: 'CA 90036',
          consumer: 'CA 90036',
          consumeDate: '2016-05-06',
        }, {
          goodsName: '2016-05-07',
          goodsType: 'Tom',
          price: 'California',
          city: 'Los Angeles',
          quantity: 'No. 189, Grove St, Los Angeles',
          acquisitionValue: 'CA 90036',
          paymentType: 'CA 90036',
          consumer: 'CA 90036',
          consumeDate: '2016-05-07',
        },
      ],
    };
  },

  components: {
    BreadCrumb,
  },
};
</script>
