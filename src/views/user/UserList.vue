<template>
  <div style="width: 100%;">
    <BreadCrumb subTitle="用户列表" />
    <el-row>
      <el-col>
        <el-card>
          <div slot="header">
            <i class="fa fa-list-ul"></i> 查询条件
          </div>
          <el-row :gutter="10">
            <el-col :span="2">
              <div class="condition-label">用户名</div>
            </el-col>
            <el-col :span="4">
              <el-input v-model="requestParams.username" placeholder="用户名" size="mini"></el-input>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">锁定状态</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.lockStatus" placeholder="锁定状态" size="mini">
                <el-option label="锁定" value="锁定"></el-option>
                <el-option label="未锁定" value="未锁定"></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row :gutter="10" class="search-button-row">
            <el-col :span="2">
              <div class="condition-label">排序字段</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.sortKey" placeholder="请选择排序字段" size="mini">
                <el-option label="用户名" value="username"></el-option>
                <el-option label="锁定状态" value="lockStatus"></el-option>
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
            <el-col :span="2" :offset="2">
              <el-button type="warning" class="search-button" @click="handleAdd">
                <i class="fa fa-plus-circle"></i> 添加新用户
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
            <el-button style="float: right; margin-top: -6px;" type="danger"
              :disabled="multipleSelection.length === 0" @click="handleMultipleDelete">
              <i class="fa fa-trash-o"></i> 删除
            </el-button>
          </div>
          <el-row>
            <el-col>
              <el-table :data="tableData"
                @selection-change="handleSelectionChange"
                :default-sort = "{prop: 'date', order: 'descending'}"
                stripe height="280">
                <el-table-column
                  type="selection"
                  fixed
                  width="55">
                </el-table-column>
                <el-table-column
                  prop="username"
                  label="用户名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="role"
                  label="用户角色"
                  width="130">
                </el-table-column>
                <el-table-column
                  prop="email"
                  label="Email"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="failLoginCount"
                  label="连续登录失败数"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="lockStatus"
                  label="锁定状态"
                  width="120">
                </el-table-column>
                <el-table-column
                  sortable
                  prop="lastLogonTime"
                  label="上次登录时间"
                  width="200">
                  <template slot-scope="scope">
                    <i class="far fa-clock"></i>
                    <span style="margin-left: 10px">{{ scope.row.lastLogonTime }}</span>
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
    <user-dialog ref='editDialog' @updated="handleSearch" />
    <user-dialog ref='addDialog' @updated="handleSearch" />
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';
import UserDialog from '@/components/dialog/UserDialog.vue';

export default {
  name: 'UserList',
  data() {
    return {
      requestParams: {
        username: '',
        lockStatus: '',
        sortKey: '用户名',
        sortType: '降序',
        currentPage: 1,
        totalCount: 0,
        countPerPage: 20,
      },
      tableData: [],
      multipleSelection: [],
    };
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    handleSearch() {
      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/user/list',
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

    handleAdd() {
      this.$refs.addDialog.open().then((that) => {
        const data = { formType: 0 };
        that.initData(data);
      });
    },

    handleEdit(row) {
      this.$refs.editDialog.open().then((that) => {
        const data = { ...row };
        data.formType = 1;
        that.initData(data);
      });
    },

    handleMultipleDelete() {
      this.$confirm('你确定要删除选择的记录吗', '提示', { type: 'warning' })
        .then(() => {
          const that = this;
          this.$request.httpRequest({
            method: 'post',
            url: '/user/delete',
            params: that.multipleSelection,
            success() {
              that.handleSearch();
              that.$message({
                message: '恭喜，删除成功。',
                type: 'success',
              });
            },
          });
        })
        .catch(() => {});
    },

    handleDelete(row) {
      this.$confirm('你确定要删除这条记录吗', '提示', { type: 'warning' })
        .then(() => {
          const that = this;
          this.$request.httpRequest({
            method: 'post',
            url: '/user/delete',
            params: row,
            success() {
              that.handleSearch();
              that.$message({
                message: '恭喜，删除成功。',
                type: 'success',
              });
            },
          });
        })
        .catch(() => {});
    },
  },

  components: {
    BreadCrumb,
    UserDialog,
  },
};
</script>
