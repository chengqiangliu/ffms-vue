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
              <el-input v-model="username" placeholder="用户名" size="mini"></el-input>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">锁定状态</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="lockStatus" placeholder="锁定状态" size="mini">
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
              <el-select v-model="sortKey" placeholder="请选择排序字段" size="mini">
                <el-option label="用户名" value="username"></el-option>
                <el-option label="锁定状态" value="lockStatus"></el-option>
              </el-select>
            </el-col>
            <el-col :span="4">
              <el-select v-model="sortType" placeholder="请选择排序方式" size="mini">
                <el-option label="降序" value="desc"></el-option>
                <el-option label="升序" value="asc"></el-option>
              </el-select>
            </el-col>
            <el-col :span="2" :offset="2">
              <el-button type="primary" class="search-button">
                <i class="fa fa-search"></i> 查询
              </el-button>
            </el-col>
            <el-col :span="2" :offset="2">
              <el-button type="warning" class="search-button">
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
                height="280">
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
                  width="150">
                  <template slot-scope="scope">
                    <i class="far fa-clock"></i>
                    <span style="margin-left: 10px">{{ scope.row.lastLogonTime }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="200">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      type="warning"
                      @click="handleEdit(scope.$index, scope.row)">
                      <i class="el-icon-edit">编辑</i>
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
  name: 'UserList',
  data() {
    return {
      id: '',
      username: '',
      role: '',
      email: '',
      failLoginCount: 0,
      lockStatus: '',
      lastLogonTime: '',
      sortKey: '用户名',
      sortType: '降序',
      currentPage: 1,
      tableData: [
        {
          username: '2016-05-03',
          role: 'Tom',
          email: 'California',
          failLoginCount: 'Los Angeles',
          lockStatus: '锁定',
          lastLogonTime: '2016-05-03',
        }, {
          username: '2016-05-03',
          role: 'Tom',
          email: 'California',
          failLoginCount: 'Los Angeles',
          lockStatus: '未锁定',
          lastLogonTime: '2016-05-03',
        },
      ],
    };
  },

  methods: {
    handleSizeChange() {

    },

    handleCurrentChange() {

    },

    handleEdit(index, row) {
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
