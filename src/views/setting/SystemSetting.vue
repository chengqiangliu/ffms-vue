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
              <span slot="label"><i class="fas fa-cookie-bite"></i> 商品类型</span>
              <div class="input-div">
                <el-row :gutter="10">
                  <el-col :span="3">
                    <div class="condition-label">商品类型:</div>
                  </el-col>
                  <el-col :span="5">
                    <el-input v-model="goodsType" placeholder="商品类型" size="mini"></el-input>
                  </el-col>
                  <el-col :span="2" :offset="2">
                    <el-button type="primary" class="search-button" size="mini"
                      :disabled="goodsType === ''" @click="addToGoodsTypeList">
                      <i class="fa fa-plus-circle"></i> 添加
                    </el-button>
                  </el-col>
                </el-row>
              </div>
              <div>
                <el-row :gutter="10">
                  <el-col :span="3" :offset="2">
                    <div class="condition-label">目标商品类型</div>
                  </el-col>
                  <el-col :span="3" :offset="12">
                    <div class="condition-label">既存商品类型</div>
                  </el-col>
                </el-row>
                <select multiple="multiple" v-model="selectedGoodsTypes"
                  class="select-box pull-left">
                  <option v-for="goodsType in goodsTypeList" :key="goodsType">
                    {{ goodsType }}
                  </option>
                </select>
                <div class="select-box-option">
                  <el-button plain size="mini" :disabled="willDeleteGoodsTypes.length === 0"
                     @click="removeGoodsTypes">
                    <i class="fa fa-angle-left"></i>
                  </el-button>
                  <el-button plain size="mini" :disabled="selectedGoodsTypes.length === 0"
                    @click="addGoodsTypes">
                    <i class="fa fa-angle-right"></i>
                  </el-button>
                  <div class="seperator"></div>
                  <el-button plain size="mini" :disabled="goodsTypeListInDb.length === 0"
                    @click="removeAllGoodsTypes">
                    <i class="fa fa-angle-double-left"></i>
                  </el-button>
                  <el-button plain size="mini" :disabled="goodsTypeList.length === 0"
                    @click="addAllGoodsTypes">
                    <i class="fa fa-angle-double-right"></i>
                  </el-button>
                </div>
                <select multiple="multiple" v-model="willDeleteGoodsTypes"
                  class="select-box pull-right">
                  <option v-for="goodsType in goodsTypeListInDb" :key="goodsType">
                    {{ goodsType }}
                  </option>
                </select>
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
                    <el-button type="primary" class="search-button" size="mini"
                      :disabled="bankType === ''" @click="addToBankTypeList">
                      <i class="fa fa-plus-circle"></i> 添加
                    </el-button>
                  </el-col>
                </el-row>
              </div>
              <div>
                <el-row :gutter="10">
                  <el-col :span="3" :offset="2">
                    <div class="condition-label">目标银行类型</div>
                  </el-col>
                  <el-col :span="3" :offset="12">
                    <div class="condition-label">既存银行类型</div>
                  </el-col>
                </el-row>
                <select multiple="multiple" v-model="selectedBankTypes"
                  class="select-box pull-left">
                  <option v-for="bankType in bankTypeList" :key="bankType">
                    {{ bankType }}
                  </option>
                </select>
                <div class="select-box-option">
                  <el-button plain size="mini" :disabled="willDeleteBankTypes.length === 0"
                     @click="removeBankTypes">
                    <i class="fa fa-angle-left"></i>
                  </el-button>
                  <el-button plain size="mini" :disabled="selectedBankTypes.length === 0"
                    @click="addBankTypes">
                    <i class="fa fa-angle-right"></i>
                  </el-button>
                  <div class="seperator"></div>
                  <el-button plain size="mini" :disabled="bankTypeListInDb.length === 0"
                    @click="removeAllBankTypes">
                    <i class="fa fa-angle-double-left"></i>
                  </el-button>
                  <el-button plain size="mini" :disabled="bankTypeList.length === 0"
                    @click="addAllBankTypes">
                    <i class="fa fa-angle-double-right"></i>
                  </el-button>
                </div>
                <select multiple="multiple" v-model="willDeleteBankTypes"
                  class="select-box pull-right">
                  <option v-for="bankType in bankTypeListInDb" :key="bankType">
                    {{ bankType }}
                  </option>
                </select>
              </div>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label"><i class="fa fa-credit-card"></i> 银行卡类型</span>
              <div class="input-div">
                <el-row :gutter="10">
                  <el-col :span="3">
                    <div class="condition-label">银行卡类型:</div>
                  </el-col>
                  <el-col :span="5">
                    <el-input v-model="cardType" placeholder="银行卡类型" size="mini"></el-input>
                  </el-col>
                  <el-col :span="2" :offset="2">
                    <el-button type="primary" class="search-button" size="mini"
                      :disabled="cardType === ''" @click="addToCardTypeList">
                      <i class="fa fa-plus-circle"></i> 添加
                    </el-button>
                  </el-col>
                </el-row>
              </div>
              <div>
                <el-row :gutter="10">
                  <el-col :span="3" :offset="2">
                    <div class="condition-label">目标银行卡类型</div>
                  </el-col>
                  <el-col :span="3" :offset="12">
                    <div class="condition-label">既存银行卡类型</div>
                  </el-col>
                </el-row>
                <select multiple="multiple" v-model="selectedCardTypes"
                  class="select-box pull-left">
                  <option v-for="cardType in cardTypeList" :key="cardType">
                    {{ cardType }}
                  </option>
                </select>
                <div class="select-box-option">
                  <el-button plain size="mini" :disabled="willDeleteCardTypes.length === 0"
                     @click="removeCardTypes">
                    <i class="fa fa-angle-left"></i>
                  </el-button>
                  <el-button plain size="mini" :disabled="selectedCardTypes.length === 0"
                    @click="addCardTypes">
                    <i class="fa fa-angle-right"></i>
                  </el-button>
                  <div class="seperator"></div>
                  <el-button plain size="mini" :disabled="cardTypeListInDb.length === 0"
                    @click="removeAllCardTypes">
                    <i class="fa fa-angle-double-left"></i>
                  </el-button>
                  <el-button plain size="mini" :disabled="cardTypeList.length === 0"
                    @click="addAllCardTypes">
                    <i class="fa fa-angle-double-right"></i>
                  </el-button>
                </div>
                <select multiple="multiple" v-model="willDeleteCardTypes"
                  class="select-box pull-right">
                  <option v-for="cardType in cardTypeListInDb" :key="cardType">
                    {{ cardType }}
                  </option>
                </select>
              </div>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label"><i class="fab fa-btc"></i> 货币类型</span>
              <div class="input-div">
                <el-row :gutter="10">
                  <el-col :span="3">
                    <div class="condition-label">货币类型:</div>
                  </el-col>
                  <el-col :span="5">
                    <el-input v-model="currency" placeholder="货币类型" size="mini"></el-input>
                  </el-col>
                  <el-col :span="2" :offset="2">
                    <el-button type="primary" class="search-button" size="mini"
                      :disabled="currency === ''" @click="addToCurrencyList">
                      <i class="fa fa-plus-circle"></i> 添加
                    </el-button>
                  </el-col>
                </el-row>
              </div>
              <div>
                <el-row :gutter="10">
                  <el-col :span="3" :offset="2">
                    <div class="condition-label">目标货币类型</div>
                  </el-col>
                  <el-col :span="3" :offset="12">
                    <div class="condition-label">既存货币类型</div>
                  </el-col>
                </el-row>
                <select multiple="multiple" v-model="selectedCurrencys"
                  class="select-box pull-left">
                  <option v-for="currency in currencyList" :key="currency">
                    {{ currency }}
                  </option>
                </select>
                <div class="select-box-option">
                  <el-button plain size="mini" :disabled="willDeleteCurrencys.length === 0"
                     @click="removeCurrencys">
                    <i class="fa fa-angle-left"></i>
                  </el-button>
                  <el-button plain size="mini" :disabled="selectedCurrencys.length === 0"
                    @click="addCurrencys">
                    <i class="fa fa-angle-right"></i>
                  </el-button>
                  <div class="seperator"></div>
                  <el-button plain size="mini" :disabled="currencyListInDb.length === 0"
                    @click="removeAllCurrencys">
                    <i class="fa fa-angle-double-left"></i>
                  </el-button>
                  <el-button plain size="mini" :disabled="currencyList.length === 0"
                    @click="addAllCurrencys">
                    <i class="fa fa-angle-double-right"></i>
                  </el-button>
                </div>
                <select multiple="multiple" v-model="willDeleteCurrencys"
                  class="select-box pull-right">
                  <option v-for="currency in currencyListInDb" :key="currency">
                    {{ currency }}
                  </option>
                </select>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';

export default {
  data() {
    return {
      goodsType: '',
      selectedGoodsTypes: [],
      goodsTypeList: [],
      willDeleteGoodsTypes: [],
      goodsTypeListInDb: [],
      bankType: '',
      selectedBankTypes: [],
      bankTypeList: [],
      willDeleteBankTypes: [],
      bankTypeListInDb: [],
      cardType: '',
      cardTypeList: [],
      selectedCardTypes: [],
      willDeleteCardTypes: [],
      cardTypeListInDb: [],
      currency: '',
      currencyList: [],
      selectedCurrencys: [],
      willDeleteCurrencys: [],
      currencyListInDb: [],
    };
  },

  methods: {
    addToGoodsTypeList() {
      if (this.goodsTypeList.includes(this.goodsType)) {
        this.$message({
          message: '要添加的商品类型已经存在。',
          type: 'warning',
        });
      } else {
        this.goodsTypeList.push(this.goodsType);
      }
      this.goodsType = '';
    },

    addGoodsTypes() {
      const commonItems = this.goodsTypeListInDb
        .filter((x) => this.selectedGoodsTypes.every((y) => y === x));
      if (commonItems.length !== 0) {
        this.$message({
          message: '要添加的商品类型已经存在。',
          type: 'warning',
        });
        return;
      }

      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/masterdata/add',
        params: that.selectedGoodsTypes,
        success() {
          that.goodsTypeListInDb = that.goodsTypeListInDb.concat(that.selectedGoodsTypes);
          that.goodsTypeList = that.goodsTypeList
            .filter((x) => that.selectedGoodsTypes.every((y) => y !== x));
          that.selectedGoodsTypes = [];
          that.$message({
            message: '商品类型已成功添加。',
            type: 'success',
          });
        },
      });
    },

    addAllGoodsTypes() {
      const commonItems = this.goodsTypeListInDb
        .filter((x) => this.goodsTypeList.every((y) => y === x));
      if (commonItems.length !== 0) {
        this.$message({
          message: '要添加的商品类型已经存在。',
          type: 'warning',
        });
        return;
      }

      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/masterdata/add',
        params: that.goodsTypeList,
        success() {
          that.goodsTypeListInDb = that.goodsTypeListInDb.concat(that.goodsTypeList);
          that.goodsTypeList = that.goodsTypeList
            .filter((x) => that.goodsTypeList.every((y) => y !== x));
          that.goodsTypeList = [];
          that.$message({
            message: '商品类型已成功添加。',
            type: 'success',
          });
        },
      });
    },

    removeGoodsTypes() {
      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/masterdata/delete',
        params: that.willDeleteGoodsTypes,
        success() {
          that.goodsTypeList = that.goodsTypeList.concat(that.willDeleteGoodsTypes
            .filter((x) => that.goodsTypeList.indexOf(x) < 0));
          that.goodsTypeListInDb = that.goodsTypeListInDb
            .filter((x) => that.willDeleteGoodsTypes.every((y) => y !== x));
          that.willDeleteGoodsTypes = [];
          that.$message({
            message: '商品类型已成功删除。',
            type: 'success',
          });
        },
      });
    },

    removeAllGoodsTypes() {
      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/masterdata/delete',
        params: that.goodsTypeListInDb,
        success() {
          that.goodsTypeList = that.goodsTypeList.concat(that.goodsTypeListInDb
            .filter((x) => that.goodsTypeList.indexOf(x) < 0));
          that.goodsTypeListInDb = that.goodsTypeListInDb
            .filter((x) => that.goodsTypeListInDb.every((y) => y !== x));
          that.goodsTypeListInDb = [];
          that.$message({
            message: '商品类型已成功删除。',
            type: 'success',
          });
        },
      });
    },

    addToBankTypeList() {
      if (this.bankTypeList.includes(this.bankType)) {
        this.$message({
          message: '要添加的银行类型已经存在。',
          type: 'warning',
        });
      } else {
        this.bankTypeList.push(this.bankType);
      }
      this.bankType = '';
    },

    addBankTypes() {
      const commonItems = this.bankTypeListInDb
        .filter((x) => this.selectedBankTypes.every((y) => y === x));
      if (commonItems.length !== 0) {
        this.$message({
          message: '要添加的银行类型已经存在。',
          type: 'warning',
        });
        return;
      }

      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/masterdata/add',
        params: that.selectedBankTypes,
        success() {
          that.bankTypeListInDb = that.bankTypeListInDb.concat(that.selectedBankTypes);
          that.bankTypeList = that.bankTypeList
            .filter((x) => that.selectedBankTypes.every((y) => y !== x));
          that.selectedBankTypes = [];
          that.$message({
            message: '银行类型已成功添加。',
            type: 'success',
          });
        },
      });
    },

    addAllBankTypes() {
      const commonItems = this.bankTypeListInDb
        .filter((x) => this.bankTypeList.every((y) => y === x));
      if (commonItems.length !== 0) {
        this.$message({
          message: '要添加的银行类型已经存在。',
          type: 'warning',
        });
        return;
      }

      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/masterdata/add',
        params: that.bankTypeList,
        success() {
          that.bankTypeListInDb = that.bankTypeListInDb.concat(that.bankTypeList);
          that.bankTypeList = that.bankTypeList
            .filter((x) => that.bankTypeList.every((y) => y !== x));
          that.bankTypeList = [];
          that.$message({
            message: '银行类型已成功添加。',
            type: 'success',
          });
        },
      });
    },

    removeBankTypes() {
      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/masterdata/delete',
        params: that.willDeleteBankTypes,
        success() {
          that.bankTypeList = that.bankTypeList.concat(that.willDeleteBankTypes
            .filter((x) => that.bankTypeList.indexOf(x) < 0));
          that.bankTypeListInDb = that.bankTypeListInDb
            .filter((x) => that.willDeleteBankTypes.every((y) => y !== x));
          that.willDeleteBankTypes = [];
          that.$message({
            message: '银行类型已成功删除。',
            type: 'success',
          });
        },
      });
    },

    removeAllBankTypes() {
      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/masterdata/delete',
        params: that.bankTypeListInDb,
        success() {
          that.bankTypeList = that.bankTypeList.concat(that.bankTypeListInDb
            .filter((x) => that.bankTypeList.indexOf(x) < 0));
          that.bankTypeListInDb = that.bankTypeListInDb
            .filter((x) => that.bankTypeListInDb.every((y) => y !== x));
          that.bankTypeListInDb = [];
          that.$message({
            message: '银行类型已成功删除。',
            type: 'success',
          });
        },
      });
    },

    addToCardTypeList() {
      if (this.cardTypeList.includes(this.cardType)) {
        this.$message({
          message: '要添加的银行卡类型已经存在。',
          type: 'warning',
        });
      } else {
        this.cardTypeList.push(this.cardType);
      }
      this.cardType = '';
    },

    addCardTypes() {
      const commonItems = this.cardTypeListInDb
        .filter((x) => this.selectedCardTypes.every((y) => y === x));
      if (commonItems.length !== 0) {
        this.$message({
          message: '要添加的银行卡类型已经存在。',
          type: 'warning',
        });
        return;
      }

      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/masterdata/add',
        params: that.selectedCardTypes,
        success() {
          that.cardTypeListInDb = that.cardTypeListInDb.concat(that.selectedCardTypes);
          that.cardTypeList = that.cardTypeList
            .filter((x) => that.selectedCardTypes.every((y) => y !== x));
          that.selectedCardTypes = [];
          that.$message({
            message: '银行卡类型已成功添加。',
            type: 'success',
          });
        },
      });
    },

    addAllCardTypes() {
      const commonItems = this.cardTypeListInDb
        .filter((x) => this.cardTypeList.every((y) => y === x));
      if (commonItems.length !== 0) {
        this.$message({
          message: '要添加的银行卡类型已经存在。',
          type: 'warning',
        });
        return;
      }

      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/masterdata/add',
        params: that.cardTypeList,
        success() {
          that.cardTypeListInDb = that.cardTypeListInDb.concat(that.cardTypeList);
          that.cardTypeList = that.cardTypeList
            .filter((x) => that.cardTypeList.every((y) => y !== x));
          that.cardTypeList = [];
          that.$message({
            message: '银行卡类型已成功添加。',
            type: 'success',
          });
        },
      });
    },

    removeCardTypes() {
      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/masterdata/delete',
        params: that.willDeleteCardTypes,
        success() {
          that.cardTypeList = that.cardTypeList.concat(that.willDeleteCardTypes
            .filter((x) => that.cardTypeList.indexOf(x) < 0));
          that.cardTypeListInDb = that.cardTypeListInDb
            .filter((x) => that.willDeleteCardTypes.every((y) => y !== x));
          that.willDeleteCardTypes = [];
          that.$message({
            message: '银行卡类型已成功删除。',
            type: 'success',
          });
        },
      });
    },

    removeAllCardTypes() {
      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/masterdata/delete',
        params: that.cardTypeListInDb,
        success() {
          that.cardTypeList = that.cardTypeList.concat(that.cardTypeListInDb
            .filter((x) => that.cardTypeList.indexOf(x) < 0));
          that.cardTypeListInDb = that.cardTypeListInDb
            .filter((x) => that.cardTypeListInDb.every((y) => y !== x));
          that.cardTypeListInDb = [];
          that.$message({
            message: '银行卡类型已成功删除。',
            type: 'success',
          });
        },
      });
    },

    addToCurrencyList() {
      if (this.currencyList.includes(this.currency)) {
        this.$message({
          message: '要添加的货币类型已经存在。',
          type: 'warning',
        });
      } else {
        this.currencyList.push(this.currency);
      }
      this.currency = '';
    },

    addCurrencys() {
      const commonItems = this.currencyListInDb
        .filter((x) => this.selectedCurrencys.every((y) => y === x));
      if (commonItems.length !== 0) {
        this.$message({
          message: '要添加的货币类型已经存在。',
          type: 'warning',
        });
        return;
      }

      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/masterdata/add',
        params: that.selectedCurrencys,
        success() {
          that.currencyListInDb = that.currencyListInDb.concat(that.selectedCurrencys);
          that.currencyList = that.currencyList
            .filter((x) => that.selectedCurrencys.every((y) => y !== x));
          that.selectedCurrencys = [];
          that.$message({
            message: '货币类型已成功添加。',
            type: 'success',
          });
        },
      });
    },

    addAllCurrencys() {
      const commonItems = this.currencyListInDb
        .filter((x) => this.currencyList.every((y) => y === x));
      if (commonItems.length !== 0) {
        this.$message({
          message: '要添加的货币类型已经存在。',
          type: 'warning',
        });
        return;
      }

      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/masterdata/add',
        params: that.currencyList,
        success() {
          that.currencyListInDb = that.currencyListInDb.concat(that.currencyList);
          that.currencyList = that.currencyList
            .filter((x) => that.currencyList.every((y) => y !== x));
          that.currencyList = [];
          that.$message({
            message: '货币类型已成功添加。',
            type: 'success',
          });
        },
      });
    },

    removeCurrencys() {
      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/masterdata/delete',
        params: that.willDeleteCurrencys,
        success() {
          that.currencyList = that.currencyList.concat(that.willDeleteCurrencys
            .filter((x) => that.currencyList.indexOf(x) < 0));
          that.currencyListInDb = that.currencyListInDb
            .filter((x) => that.willDeleteCurrencys.every((y) => y !== x));
          that.willDeleteCurrencys = [];
          that.$message({
            message: '货币类型已成功删除。',
            type: 'success',
          });
        },
      });
    },

    removeAllCurrencys() {
      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/masterdata/delete',
        params: that.currencyListInDb,
        success() {
          that.currencyList = that.currencyList.concat(that.currencyListInDb
            .filter((x) => that.currencyList.indexOf(x) < 0));
          that.currencyListInDb = that.currencyListInDb
            .filter((x) => that.currencyListInDb.every((y) => y !== x));
          that.currencyListInDb = [];
          that.$message({
            message: '货币类型已成功删除。',
            type: 'success',
          });
        },
      });
    },

  },
  components: {
    BreadCrumb,
  },
};
</script>

<style scoped>
  .el-tabs {
    margin-bottom: 10px;
  }

  .input-div {
    border-bottom: 1px solid #eee;
    margin: 10px 0 20px 0;
    padding-bottom: 10px;
  }

  .select-box {
    display: inline-block;
    list-style: none;
    background: #fff;
    padding: 5px;
    width: 40%;
    height: 200px !important;
    font-size: 12px;
    line-height: 1.42857143;
    color: #555;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .pull-left {
    float: left!important;
  }

  .pull-right {
    float: right!important;
  }

  .seperator {
    padding-top: 10px;
  }

  .select-box-option {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -60px;
    display: inline-block;
    height: 200px;
    width: 120px;
    text-align: center
  }
</style>
