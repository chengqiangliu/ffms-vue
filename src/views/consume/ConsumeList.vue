<template>
  <div style="width: 100%;">
    <BreadCrumb subTitle="消费信息列表" />
    <el-row>
      <el-col>
        <el-card>
          <div slot="header">
            <i class="fa fa-list-ul"></i> 查询条件
          </div>
          <el-row :gutter="10">
            <el-col :span="2">
              <div class="condition-label">消费者</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="consumer" placeholder="消费者">
                <el-option label="老公" value="老公"></el-option>
                <el-option label="老婆" value="老婆"></el-option>
                <el-option label="宝宝" value="宝宝"></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">商品类别</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="goodsType" placeholder="商品类别">
                <el-option label="食品" value="食品"></el-option>
                <el-option label="电子产品" value="电子产品"></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">付款方式</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="paymentType" placeholder="付款方式">
                <el-option label="现金" value="现金"></el-option>
                <el-option label="信用卡" value="信用卡"></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">商品名</div>
            </el-col>
            <el-col :span="4">
              <el-input v-model="goodsName" placeholder="商品名"></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="2">
              <div class="condition-label">总价</div>
            </el-col>
            <el-col :span="2">
              <el-select v-model="sumFlag" placeholder="比较">
                <el-option label="大于" value=">"></el-option>
                <el-option label="等于" value="="></el-option>
                <el-option label="小于" value="&lt;"></el-option>
                <el-option label="不等于" value="!="></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <el-input v-model="goodsSum" placeholder="金额"></el-input>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">开始时间</div>
            </el-col>
            <el-col :span="4">
              <el-date-picker type="date"
                placeholder="请选择开始时间"
                v-model="fromeDate"
                style="width: 100%;">
              </el-date-picker>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">结束时间</div>
            </el-col>
            <el-col :span="4">
              <el-date-picker type="date"
                placeholder="请选择结束时间"
                v-model="endDate"
                style="width: 100%;">
              </el-date-picker>
            </el-col>
          </el-row>
          <el-row :gutter="10" class="search-button-row">
            <el-col :span="2">
              <div class="condition-label">排序字段</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="sortKey" placeholder="请选择排序字段">
                <el-option label="消费时间" value="consumeTime"></el-option>
                <el-option label="商品名" value="goodsName"></el-option>
                <el-option label="商品类型" value="goodsType"></el-option>
                <el-option label="总价" value="goodsSum"></el-option>
                <el-option label="付款方式" value="paymentType"></el-option>
              </el-select>
            </el-col>
            <el-col :span="4">
              <el-select v-model="sortType" placeholder="请选择排序方式">
                <el-option label="降序" value="desc"></el-option>
                <el-option label="升序" value="asc"></el-option>
              </el-select>
            </el-col>
            <el-col :span="2" :offset="2">
              <el-button type="primary"><i class="fa fa-search"></i> 查询</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-card>
          <div slot="header">
            <i class="fa fa-table"></i> 查询结果
            <el-button style="float: right; margin-top: -6px;" type="danger">
              <i class="fa fa-trash-o"></i> 删除
            </el-button>
          </div>
          <el-row>
            <el-col>
              <el-table
                :data="tableData"
                :default-sort = "{prop: 'date', order: 'descending'}"
                stripe
                height="245">
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
                  label="操作"
                  width="200">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="handleEdit(scope.$index, scope.row)">
                      <i class="el-icon-edit">编辑</i>
                    </el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">
                      <i class="el-icon-delete">删除</i>
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination style="float: right;"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
              </el-pagination>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';

export default {
  data() {
    return {
      consumer: '',
      goodsType: '',
      paymentType: '',
      goodsName: '',
      sumFlag: '',
      goodsSum: '',
      fromeDate: '',
      endDate: '',
      sortKey: '消费时间',
      sortType: '降序',
      currentPage: 1,
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

  methods: {
    handleSizeChange() {

    },

    handleCurrentChange() {

    },
  },

  components: {
    BreadCrumb,
  },
};
</script>
