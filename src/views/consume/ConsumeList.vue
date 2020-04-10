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
              <el-select v-model="requestParams.consumer" placeholder="消费者" size="mini">
                <el-option label="老公" value="老公"></el-option>
                <el-option label="老婆" value="老婆"></el-option>
                <el-option label="宝宝" value="宝宝"></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">商品类别</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.goodsType" placeholder="商品类别" size="mini">
                <el-option label="食品" value="食品"></el-option>
                <el-option label="电子产品" value="电子产品"></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">付款方式</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.paymentType" placeholder="付款方式" size="mini">
                <el-option label="现金" value="现金"></el-option>
                <el-option label="信用卡" value="信用卡"></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">商品名</div>
            </el-col>
            <el-col :span="4">
              <el-input v-model="requestParams.goodsName" placeholder="商品名" size="mini"></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="2">
              <div class="condition-label">总价</div>
            </el-col>
            <el-col :span="2">
              <el-select v-model="requestParams.sumFlag" placeholder="比较" size="mini">
                <el-option label="大于" value=">"></el-option>
                <el-option label="等于" value="="></el-option>
                <el-option label="小于" value="&lt;"></el-option>
                <el-option label="不等于" value="!="></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <el-input v-model="requestParams.goodsSum" placeholder="金额" size="mini"></el-input>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">开始时间</div>
            </el-col>
            <el-col :span="4">
              <el-date-picker type="date"
                placeholder="请选择开始时间"
                v-model="requestParams.fromeDate"
                style="width: 100%;"
                size="mini">
              </el-date-picker>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">结束时间</div>
            </el-col>
            <el-col :span="4">
              <el-date-picker type="date"
                placeholder="请选择结束时间"
                v-model="requestParams.endDate"
                style="width: 100%;"
                size="mini">
              </el-date-picker>
            </el-col>
          </el-row>
          <el-row :gutter="10" class="search-button-row">
            <el-col :span="2">
              <div class="condition-label">排序字段</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.sortKey" placeholder="请选择排序字段" size="mini">
                <el-option label="消费时间" value="consumeTime"></el-option>
                <el-option label="商品名" value="goodsName"></el-option>
                <el-option label="商品类型" value="goodsType"></el-option>
                <el-option label="总价" value="goodsSum"></el-option>
                <el-option label="付款方式" value="paymentType"></el-option>
              </el-select>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.sortType" placeholder="请选择排序方式" size="mini">
                <el-option label="降序" value="desc"></el-option>
                <el-option label="升序" value="asc"></el-option>
              </el-select>
            </el-col>
            <el-col :span="2" :offset="2">
              <el-button type="primary" class="search-button" @click="handleSearch">
                <i class="fa fa-search"></i> 查询
              </el-button>
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
          <el-row style="height: 280px;">
            <el-col>
              <el-table
                :data="tableData"
                :default-sort = "{prop: 'date', order: 'descending'}"
                stripe
                height="250">
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
                  width="120">
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
                    <i class="far fa-clock"></i>
                    <span style="margin-left: 10px">{{ scope.row.consumeDate }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  label="操作"
                  fixed="right"
                  width="120">
                  <template slot-scope="scope">
                    <el-button size="mini" type="text" class="opt-button"
                      @click="handleEdit(scope.row)">
                      <i class="el-icon-edit">编辑</i>
                    </el-button>
                    <el-button size="mini" type="text" class="opt-button"
                      @click="handleDelete(scope.row)">
                      <i class="el-icon-delete">删除</i>
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination v-if="tableData.length > 0" style="float: right;"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="requestParams.currentPage"
                :page-sizes="[20, 40, 60]"
                :page-size="requestParams.countPerPage"
                layout="total, sizes, prev, pager, next, jumper"
                :total="requestParams.totalCount">
              </el-pagination>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <ConsumeEdit ref='editDialog' @updated="handleSearch" />
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';
import ConsumeEdit from '@/views/consume/ConsumeEdit.vue';

export default {
  name: 'ConsumeList',
  data() {
    return {
      requestParams: {
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
        totalCount: 0,
        countPerPage: 20,
      },
      tableData: [],
    };
  },

  methods: {
    handleSearch() {
      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/consume/list',
        params: that.requestParams,
        success(response) {
          that.tableData = response.data.details;
          that.requestParams.totalCount = response.data.pageInfo.totalCount;
        },
      });
    },

    handleSizeChange(value) {
      this.requestParams.currentPage = 1;
      this.requestParams.countPerPage = value;
      this.handleSearch();
    },

    handleCurrentChange(value) {
      this.requestParams.currentPage = value;
      this.handleSearch();
    },

    handleEdit(row) {
      this.$refs.editDialog.open().then((that) => {
        that.initData(row);
      });
    },

    handleDelete(row) {
      this.$confirm('你确定要删除这条记录吗', '提示', { type: 'warning' })
        .then(() => {
          console.log(row);
          this.$message({
            message: '消费信息已被删除成功。',
            type: 'success',
          });
        })
        .catch(() => {});
    },
  },

  components: {
    BreadCrumb,
    ConsumeEdit,
  },
};
</script>
