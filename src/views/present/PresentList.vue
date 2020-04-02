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
              <el-select v-model="sendType" placeholder="送礼方式" size="mini">
                <el-option label="送礼" value="1"></el-option>
                <el-option label="收礼" value="0"></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <div class="condition-label">礼品类型</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="presentType" placeholder="礼品类型" size="mini">
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
          <el-row :gutter="10">
            <el-col :span="2">
              <div class="condition-label">送礼人</div>
            </el-col>
            <el-col :span="4">
              <el-select v-model="sendorName" placeholder="送礼人" size="mini">
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
              <el-select v-model="sortKey" placeholder="请选择排序字段" size="mini">
                <el-option label="送礼时间" value="sendDate"></el-option>
                <el-option label="送礼人" value="sendorName"></el-option>
                <el-option label="礼金额" value="moneySum"></el-option>
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
  name: 'PresentList',
  data() {
    return {
      sendorName: '',
      sendType: '',
      presentType: '',
      friend: '',
      moneySum: '',
      presentName: '',
      quantity: '',
      sendDate: '',
      sortKey: '送礼时间',
      sortType: '降序',
      currentPage: 1,
      tableData: [
        {
          sendorName: '2016-05-03',
          sendType: 'Tom',
          presentType: 'California',
          friend: 'Los Angeles',
          moneySum: '189',
          presentName: 'CA 90036',
          quantity: 'CA 90036',
          sendDate: 'CA 90036',
        }, {
          sendorName: '2016-05-03',
          sendType: 'Tom',
          presentType: 'California',
          friend: 'Los Angeles',
          moneySum: '189',
          presentName: 'CA 90036',
          quantity: 'CA 90036',
          sendDate: '2016-05-02',
        }, {
          sendorName: '2016-05-03',
          sendType: 'Tom',
          presentType: 'California',
          friend: 'Los Angeles',
          moneySum: '189',
          presentName: 'CA 90036',
          quantity: 'CA 90036',
          sendDate: '2016-05-04',
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
