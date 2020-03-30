<template>
  <div style="width: 100%;">
    <BreadCrumb subTitle="系统数据管理" />
    <el-row>
      <el-col>
        <el-card>
          <div slot="header">
            <i class="fa fa-cogs"></i> 系统数据管理
          </div>
          <el-tabs type="border-card">
            <el-tab-pane>
              <span slot="label"><i class="fa fa-list"></i> 商品类型</span>
              <div class="input-div">
                <el-row :gutter="10">
                  <el-col :span="3">
                    <div class="condition-label">商品类型:</div>
                  </el-col>
                  <el-col :span="5">
                    <el-input v-model="goodsType" placeholder="商品类型" size="mini"></el-input>
                  </el-col>
                  <el-col :span="2" :offset="2">
                    <el-button type="primary" class="search-button">
                      <i class="fa fa-plus-circle"></i> 添加
                    </el-button>
                  </el-col>
                </el-row>
              </div>
              <div style="text-align: center">
                <el-transfer
                  :titles="['目标商品类型', '既存商品类型']"
                  filterable
                  v-model="goodsTypeList"
                  :props="{
                    key: 'value',
                    label: 'desc'
                  }"
                  :data="goodsTypeListData"
                  style="text-align: left; display: inline-block">
                </el-transfer>
              </div>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label"><i class="fa fa-university"></i> 银行类型</span>
              <div class="input-div">
                <el-row :gutter="10">
                  <el-col :span="3">
                    <div class="condition-label">银行类型:</div>
                  </el-col>
                  <el-col :span="5">
                    <el-input v-model="bankType" placeholder="银行类型" size="mini"></el-input>
                  </el-col>
                  <el-col :span="2" :offset="2">
                    <el-button type="primary" class="search-button">
                      <i class="fa fa-plus-circle"></i> 添加
                    </el-button>
                  </el-col>
                </el-row>
              </div>
              <div style="text-align: center">
                <el-transfer
                  :titles="['目标银行类型', '既存银行类型']"
                  filterable
                  v-model="bankTypeList"
                  :props="{
                    key: 'value',
                    label: 'desc'
                  }"
                  :data="bankTypeListData"
                  style="text-align: left; display: inline-block">
                </el-transfer>
              </div>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label"><i class="fa fa-credit-card-alt"></i> 银行卡类型</span>
              <div class="input-div">
                <el-row :gutter="10">
                  <el-col :span="3">
                    <div class="condition-label">银行卡类型:</div>
                  </el-col>
                  <el-col :span="5">
                    <el-input v-model="cardType" placeholder="银行卡类型" size="mini"></el-input>
                  </el-col>
                  <el-col :span="2" :offset="2">
                    <el-button type="primary" class="search-button">
                      <i class="fa fa-plus-circle"></i> 添加
                    </el-button>
                  </el-col>
                </el-row>
              </div>
              <div style="text-align: center">
                <el-transfer
                  :titles="['目标银行卡类型', '既存银行卡类型']"
                  filterable
                  v-model="cardTypeList"
                  :props="{
                    key: 'value',
                    label: 'desc'
                  }"
                  :data="cardTypeListData"
                  style="text-align: left; display: inline-block">
                </el-transfer>
              </div>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label"><i class="fa fa-btc"></i> 货币类型</span>
              <div class="input-div">
                <el-row :gutter="10">
                  <el-col :span="3">
                    <div class="condition-label">货币类型:</div>
                  </el-col>
                  <el-col :span="5">
                    <el-input v-model="currency" placeholder="货币类型" size="mini"></el-input>
                  </el-col>
                  <el-col :span="2" :offset="2">
                    <el-button type="primary" class="search-button">
                      <i class="fa fa-plus-circle"></i> 添加
                    </el-button>
                  </el-col>
                </el-row>
              </div>
              <div style="text-align: center">
                <el-transfer
                  :titles="['目标货币类型', '既存货币类型']"
                  filterable
                  v-model="currencyList"
                  :props="{
                    key: 'value',
                    label: 'desc'
                  }"
                  :data="currencyListData"
                  style="text-align: left; display: inline-block">
                </el-transfer>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
  .el-tabs {
    margin-bottom: 10px;
  }

  .input-div {
    border-bottom: 1px solid #eee;
    margin: 10px 0 20px 0;
    padding-bottom: 10px;
  }

  .el-transfer {
    font-size: 13px;
    font-family: 'Open Sans', sans-serif;
    color: #777;
  }
</style>


<script>
import BreadCrumb from '@/components/BreadCrumb.vue';

export default {
  name: 'SystemSetting',
  methods: {
    toggleAside() {
    },
  },
  components: {
    BreadCrumb,
  },
};
</script>
