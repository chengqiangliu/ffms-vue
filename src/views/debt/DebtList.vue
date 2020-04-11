<template>
  <div style="width: 100%;">
    <BreadCrumb subTitle="债务信息列表" />
    <el-row>
      <el-col>
        <el-card>
          <div slot="header">
            <i class="fa fa-list-ul"></i> 查询条件
          </div>
          <el-row :gutter="10">
            <el-col :span="2">
              <div class="condition-label">借款类型</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.debtType" placeholder="借款类型" size="mini">
                <el-option label="借出" value="借出"></el-option>
                <el-option label="借入" value="借入"></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">债款人</div>
            </el-col>
            <el-col :span="4">
              <el-input v-model="requestParams.friend" placeholder="债款人" size="mini"></el-input>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">借款方式</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.paymentType" placeholder="借款方式" size="mini">
                <el-option label="现金" value="现金"></el-option>
                <el-option label="刷卡" value="刷卡"></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">还款情况</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.isPayoff" placeholder="还款情况" size="mini">
                <el-option label="还清" value="还清"></el-option>
                <el-option label="部分" value="部分"></el-option>
                <el-option label="未还" value="未还"></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="2">
              <div class="condition-label">姓名</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.debterName" placeholder="姓名" size="mini">
                <el-option label="老公" value="老公"></el-option>
                <el-option label="老婆" value="老婆"></el-option>
                <el-option label="宝宝" value="宝宝"></el-option>
              </el-select>
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
                <el-option label="还款情况" value="isPayoff"></el-option>
                <el-option label="借款时间" value="borrowTime"></el-option>
                <el-option label="借款额" value="srcMoneyNum"></el-option>
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
                  prop="debterName"
                  label="自己方"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="friend"
                  label="债款人"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="debtType"
                  label="借款类型"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="paymentType"
                  label="借款方式"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="srcMoneySum"
                  label="借款额"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="hasPaidSum"
                  label="已还额"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="hasNotPaidSum"
                  label="未还额"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="isPayoff"
                  label="还款情况"
                  width="120">
                </el-table-column>
                <el-table-column
                  sortable
                  prop="debtDate"
                  label="借款时间"
                  width="150">
                  <template slot-scope="scope">
                    <i class="far fa-clock"></i>
                    <span style="margin-left: 10px">{{ scope.row.debtDate }}</span>
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
    <debt-dialog ref="editDialog" @updated="handleSearch" />
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';
import DebtDialog from '@/components/dialog/DebtDialog.vue';

export default {
  name: 'DebtList',
  data() {
    return {
      requestParams: {
        debtType: '',
        friend: '',
        paymentType: '',
        isPayoff: '',
        fromeDate: '',
        endDate: '',
        sortKey: '借款时间',
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
        url: '/debt/list',
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
            message: '借款信息已被删除成功。',
            type: 'success',
          });
        })
        .catch(() => {});
    },
  },

  components: {
    BreadCrumb,
    DebtDialog,
  },
};
</script>
