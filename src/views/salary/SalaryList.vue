<template>
  <div style="width: 100%;">
    <BreadCrumb subTitle="工资信息列表" />
    <el-row>
      <el-col>
        <el-card>
          <div slot="header">
            <i class="fa fa-list-ul"></i> 查询条件
          </div>
          <el-row :gutter="10">
            <el-col :span="2">
              <div class="condition-label">姓名</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="ownerName" placeholder="姓名" size="mini">
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
                v-model="fromeDate"
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
                v-model="endDate"
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
                <el-option label="发工资时间" value="yearMonth"></el-option>
                <el-option label="姓名" value="owner"></el-option>
                <el-option label="工资额" value="salarySum"></el-option>
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
                  prop="ownerName"
                  label="姓名"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="paymentType"
                  label="工资类别"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="cardNo"
                  label="银行卡号"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="salarySum"
                  label="工资额"
                  width="120">
                </el-table-column>
                <el-table-column
                  sortable
                  prop="yearMonth"
                  label="发工资时间"
                  width="150">
                  <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.yearMonth }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="detail"
                  label="发工资描述"
                  width="120">
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
  name: 'SalaryList',
  data() {
    return {
      ownerName: '',
      paymentType: '',
      cardNo: '',
      salarySum: '',
      yearMonth: '',
      detail: '',
      sortKey: '消费时间',
      sortType: '降序',
      currentPage: 1,
      tableData: [
        {
          ownerName: '2016-05-03',
          paymentType: 'Tom',
          cardNo: 'California',
          salarySum: 'Los Angeles',
          yearMonth: '2016-05-03',
          detail: 'CA 90036',
        }, {
          ownerName: '2016-05-03',
          paymentType: 'Tom',
          cardNo: 'California',
          salarySum: 'Los Angeles',
          yearMonth: '2016-05-03',
          detail: 'CA 90036',
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
