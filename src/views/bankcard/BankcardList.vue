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
              <el-select v-model="lockStatus" placeholder="办卡人" size="mini">
                <el-option label="老公" value="老公"></el-option>
                <el-option label="老婆" value="老婆"></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">开户银行</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="lockStatus" placeholder="卡的类型" size="mini">
                <el-option label="银行卡" value="银行卡"></el-option>
                <el-option label="信用卡" value="信用卡"></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">卡的类型</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="lockStatus" placeholder="开户银行" size="mini">
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
              <el-select v-model="sortKey" placeholder="请选择排序字段" size="mini">
                <el-option label="卡内余额" value="cardBalance"></el-option>
                <el-option label="办卡人" value="holder"></el-option>
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
                height="280">
                <el-table-column
                  type="selection"
                  fixed
                  width="55">
                </el-table-column>
                <el-table-column
                  prop="cardNo"
                  label="银行卡号"
                  width="120">
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
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.lastLogonTime }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  label="编辑"
                  width="200">
                  <template slot-scope="scope">
                    <el-button
                      type="warning"
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
  name: 'BankcardList',
  data() {
    return {
      id: '',
      cardNo: '',
      cardType: '',
      bankType: '',
      creditSum: 0,
      cardBalance: '',
      holder: '',
      createCardDate: '',
      sortKey: '用户名',
      sortType: '降序',
      currentPage: 1,
      tableData: [
        {
          cardNo: '10000010',
          cardType: 'BankCard',
          bankType: '三菱UFJ银行',
          creditSum: 0,
          cardBalance: 580000,
          holder: '老公',
          lastLogonTime: '2015-08-15',
        }, {
          cardNo: '10000020',
          cardType: 'CreditCard',
          bankType: '乐天银行',
          creditSum: 150000,
          cardBalance: 0,
          holder: '老公',
          lastLogonTime: '2015-08-15',
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
