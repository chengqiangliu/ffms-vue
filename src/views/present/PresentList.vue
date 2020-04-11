<template>
  <div style="width: 100%;">
    <BreadCrumb subTitle="礼金信息列表" />
    <el-row>
      <el-col>
        <el-card>
          <div slot="header">
            <i class="fa fa-list-ul"></i> 查询条件
          </div>
          <el-row :gutter="10">
            <el-col :span="2">
              <div class="condition-label">送礼方式</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.sendType" placeholder="送礼方式" size="mini">
                <el-option label="送礼" value="1"></el-option>
                <el-option label="收礼" value="0"></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">礼品类型</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.presentType" placeholder="礼品类型" size="mini">
                <el-option label="刷卡" value="1"></el-option>
                <el-option label="现金" value="2"></el-option>
                <el-option label="实物" value="3"></el-option>
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
              <div class="condition-label">送礼人</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.sendorName" placeholder="送礼人" size="mini">
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
                <el-option label="送礼时间" value="sendDate"></el-option>
                <el-option label="送礼人" value="sendorName"></el-option>
                <el-option label="礼金额" value="moneySum"></el-option>
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
                  prop="sendorName"
                  label="送礼人"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="sendType"
                  label="收/送礼"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="presentType"
                  label="礼金类别"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="friend"
                  label="朋友"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="moneySum"
                  label="礼金额"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="presentName"
                  label="礼品名"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="quantity"
                  label="礼品数量"
                  width="120">
                </el-table-column>
                <el-table-column
                  sortable
                  prop="sendDate"
                  label="收/送礼日期"
                  width="150">
                  <template slot-scope="scope">
                    <i class="far fa-clock"></i>
                    <span style="margin-left: 10px">{{ scope.row.sendDate }}</span>
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
    <present-dialog ref="editDialog" @updated="handleSearch" />
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';
import PresentDialog from '@/components/dialog/PresentDialog.vue';

export default {
  name: 'PresentList',
  data() {
    return {
      requestParams: {
        sendType: '',
        presentType: '',
        fromeDate: '',
        endDate: '',
        sendorName: '',
        sortKey: '送礼时间',
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
        url: '/present/list',
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
            message: '礼金信息已被删除成功。',
            type: 'success',
          });
        })
        .catch(() => {});
    },
  },

  components: {
    BreadCrumb,
    PresentDialog,
  },
};
</script>
