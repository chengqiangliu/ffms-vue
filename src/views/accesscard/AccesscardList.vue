<template>
  <div style="width: 100%;">
    <BreadCrumb subTitle="存取款信息列表" />
    <el-row>
      <el-col>
        <el-card>
          <div slot="header">
            <i class="fa fa-list-ul"></i> 查询条件
          </div>
          <el-row :gutter="10">
            <el-col :span="2">
              <div class="condition-label">存取款类型</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.accessType" placeholder="商品类别" size="mini">
                <el-option label="存款" value="存款"></el-option>
                <el-option label="取款" value="取款"></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">开户银行</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.bankType" placeholder="请选择银行卡类型" size="mini">
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
          <el-row :gutter="10">
            <el-col :span="2">
              <div class="condition-label">取款人</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.accessor" placeholder="取款人" size="mini">
                <el-option label="老公" value="老公"></el-option>
                <el-option label="老婆" value="老婆"></el-option>
                <el-option label="宝宝" value="宝宝"></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row :gutter="10" class="search-button-row">
            <el-col :span="2">
              <div class="condition-label">排序字段</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.sortKey" placeholder="请选择排序字段" size="mini">
                <el-option label="存取款日期" value="accessDate"></el-option>
                <el-option label="存取款人" value="accessor"></el-option>
                <el-option label="存取款类型" value="accessType"></el-option>
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
          <el-row>
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
                  prop="accessor"
                  label="存取款人"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="accessType"
                  label="存取款类型"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="bankType"
                  label="银行类型"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="cardNo"
                  label="银行卡号"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="moneySum"
                  label="存取金额"
                  width="120">
                </el-table-column>
                <el-table-column
                  sortable
                  prop="accessDate"
                  label="存取时间"
                  width="150">
                  <template slot-scope="scope">
                    <i class="far fa-clock"></i>
                    <span style="margin-left: 10px">{{ scope.row.accessDate }}</span>
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
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';

export default {
  name: 'AccesscardList',
  data() {
    return {
      requestParams: {
        accessType: '',
        bankType: '',
        fromeDate: '',
        endDate: '',
        accessor: '',
        sortKey: '存取款日期',
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
        url: '/accesscard/list',
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

    handleEdit(index, row) {
      this.$confirm(`你确定要删除这条记录吗? RowNum: ${index}, 单价：${row.price}`)
        .then(() => {
        })
        .catch(() => {});
    },

    handleDelete(index, row) {
      this.$confirm(`你确定要删除这条记录吗? RowNum: ${index}, 单价：${row.price}`)
        .then(() => {
        })
        .catch(() => {});
    },
  },

  components: {
    BreadCrumb,
  },
};
</script>
