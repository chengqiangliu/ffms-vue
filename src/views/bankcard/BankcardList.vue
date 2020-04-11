<template>
  <div style="width: 100%;">
    <BreadCrumb subTitle="银行卡列表" />
    <el-row>
      <el-col>
        <el-card>
          <div slot="header">
            <i class="fa fa-list-ul"></i> 查询条件
          </div>
          <el-row :gutter="10">
            <el-col :span="2">
              <div class="condition-label">办卡人</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.holder" placeholder="请选择办卡人" size="mini">
                <el-option label="老公" value="老公"></el-option>
                <el-option label="老婆" value="老婆"></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">卡的类型</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.cardType" placeholder="请选择卡的类型" size="mini">
                <el-option label="银行卡" value="银行卡"></el-option>
                <el-option label="信用卡" value="信用卡"></el-option>
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
          </el-row>
          <el-row :gutter="10" class="search-button-row">
            <el-col :span="2">
              <div class="condition-label">排序字段</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="requestParams.sortKey" placeholder="请选择排序字段" size="mini">
                <el-option label="卡内余额" value="cardBalance"></el-option>
                <el-option label="办卡人" value="holder"></el-option>
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
                  prop="cardNo"
                  label="银行卡号"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="cardType"
                  label="卡的类型"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="bankType"
                  label="开户银行"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="creditSum"
                  label="信用额度"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="cardBalance"
                  label="卡内余额"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="holder"
                  label="办卡人"
                  width="120">
                </el-table-column>
                <el-table-column
                  sortable
                  prop="createCardDate"
                  label="办卡时间"
                  width="150">
                  <template slot-scope="scope">
                    <i class="far fa-clock"></i>
                    <span style="margin-left: 10px">{{ scope.row.createCardDate }}</span>
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
    <bankcard-dialog ref="editDialog" @updated="handleSearch" />
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';
import BankcardDialog from '@/components/dialog/BankcardDialog.vue';

export default {
  name: 'BankcardList',
  data() {
    return {
      requestParams: {
        holder: '',
        bankType: '',
        cardType: '',
        sortKey: '用户名',
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
        url: '/bankcard/list',
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
            message: '银行卡信息已被删除成功。',
            type: 'success',
          });
        })
        .catch(() => {});
    },
  },

  components: {
    BreadCrumb,
    BankcardDialog,
  },
};
</script>
