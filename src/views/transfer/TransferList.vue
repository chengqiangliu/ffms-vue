<template>
  <div style="width: 100%;">
    <BreadCrumb subTitle="转账信息列表" />
    <el-row>
      <el-col>
        <el-card>
          <div slot="header">
            <i class="fa fa-list-ul"></i> 查询条件
          </div>
          <el-row :gutter="10">
            <el-col :span="2">
              <div class="condition-label">转账人</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.transferPerson" placeholder="转账人" size="mini">
                <el-option label="老公" value="老公"></el-option>
                <el-option label="老婆" value="老婆"></el-option>
                <el-option label="宝宝" value="宝宝"></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">开户银行</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.bankType" placeholder="请选择开户银行" size="mini">
                <el-option label="东京三菱UFJ银行" value="东京三菱UFJ银行"></el-option>
                <el-option label="乐天银行" value="乐天银行"></el-option>
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
              <el-select v-model="sortKey" placeholder="请选择排序字段" size="mini">
                <el-option label="转账日期" value="transferDate"></el-option>
                <el-option label="转账人" value="transferPerson"></el-option>
                <el-option label="转账金额" value="srcMoneySum"></el-option>
              </el-select>
            </el-col>
            <el-col :span="4">
              <el-select v-model="sortType" placeholder="请选择排序方式" size="mini">
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
          <el-row style="height: 320px;">
            <el-col>
              <el-table
                :data="tableData"
                :default-sort = "{prop: 'date', order: 'descending'}"
                stripe
                height="290">
                <el-table-column
                  type="selection"
                  fixed
                  width="55">
                </el-table-column>
                <el-table-column
                  prop="transferPerson"
                  label="转账人"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="srcBankType"
                  label="原卡开户银行"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="srcCardNo"
                  label="原银行卡号"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="srcMoneySum"
                  label="原卡转账金额"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="targetBankType"
                  label="目标卡开户银行"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="targetCardNo"
                  label="目标银行卡号"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="rate"
                  label="转账汇率"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="targetMoneySum"
                  label="目标卡到账金额"
                  width="120">
                </el-table-column>
                <el-table-column
                  sortable
                  prop="transferDate"
                  label="转账日期"
                  width="150">
                  <template slot-scope="scope">
                    <i class="far fa-clock"></i>
                    <span style="margin-left: 10px">{{ scope.row.transferDate }}</span>
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
    <transfer-dialog ref="editDialog" @update="handleSearch" />
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';
import TransferDialog from '@/components/dialog/TransferDialog.vue';

export default {
  name: 'TransferList',
  data() {
    return {
      requestParams: {
        transferPerson: '',
        bankType: '',
        fromeDate: '',
        endDate: '',
        sortKey: '转账日期',
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
        url: '/transfer/list',
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
            message: '转账信息已被删除成功。',
            type: 'success',
          });
        })
        .catch(() => {});
    },
  },

  components: {
    BreadCrumb,
    TransferDialog,
  },
};
</script>
