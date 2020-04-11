<template>
  <div style="width: 100%">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="page-title">
          <h3>系统首页</h3>
          <span>财务状况：<strong :style="{'color': statusColor}">{{ financeStatus }}</strong></span>
        </div><!-- /page-title -->
      </el-col>
      <el-col :span="6" :offset=12>
        <ul class="page-stats">
          <li>
            <div class="value">
              <span>总收入</span>
              <h4>{{ dashboardValues.income }}</h4>
            </div>
          </li>
          <li>
            <div class="value">
              <span>总支出</span>
              <h4>{{ dashboardValues.outcome }}</h4>
            </div>
          </li>
        </ul>
      </el-col>
    </el-row>
    <div class="grey-container shortcut-wrapper">
      <a class="shortcut-link" @click="transitionToSecurityManagement">
        <span class="shortcut-icon">
          <i class="fa f fa-user-md"></i>
        </span>
        <span class="text">安全管理</span>
      </a>
      <a class="shortcut-link" @click="transitionToUserList">
        <span class="shortcut-icon">
          <i class="fa fa-user"></i>
        </span>
        <span class="text">用户管理</span>
      </a>
      <a class="shortcut-link" @click="transitionToSetting">
        <span class="shortcut-icon">
          <i class="fa fa-cog"></i></span>
        <span class="text">系统数据管理</span>
      </a>
      <a class="shortcut-link" @click="transitionToHelp">
        <span class="shortcut-icon">
          <i class="fa fa-life-ring"></i></span>
        <span class="text">系统使用说明</span>
      </a>
    </div>
    <div class="pannelContainer">
      <el-row :gutter="24">
        <el-col :span="6">
          <statistics-panel title="工资总额"
            :value="dashboardValues.salaryMoneySum" iconClass="fab fa-cc-paypal"
            bgClass="bg-info" operateType="1" :onClick="transitionToSalaryList"
            @actived="refresh(1)" ref="statsPanel1"/>
        </el-col>
        <el-col :span="6">
          <statistics-panel title="银行卡总金额"
            :value="dashboardValues.bankcardMoneySum" iconClass="fa fa-credit-card"
            bgClass="bg-success" operateType="2" :onClick="transitionToBankcardList"
            @actived="refresh(2)" ref="statsPanel2"/>
        </el-col>
        <el-col :span="6">
          <statistics-panel title="手头现金"
            :value="dashboardValues.handMoneySum" iconClass="fas fa-money-bill-alt"
            bgClass="bg-info" operateType="3" :onClick="transitionToAccessCardList"
            @actived="refresh(3)" ref="statsPanel3"/>
        </el-col>
        <el-col :span="6">
          <statistics-panel title="消费总金额"
            :value="dashboardValues.consumeMoneySum" iconClass="fas fa-shopping-cart"
            bgClass="bg-danger" operateType="4" :onClick="transitionToConsumeList"
            @actived="refresh(4)" ref="statsPanel4"/>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="6">
          <statistics-panel title="借入总金额"
            :value="dashboardValues.borrowMoneySum" iconClass="far fa-hand-lizard"
            bgClass="bg-warning" operateType="5" :onClick="transitionToDebtList"
            @actived="refresh(5)" ref="statsPanel5"/>
        </el-col>
        <el-col :span="6">
          <statistics-panel title="借出总金额"
            :value="dashboardValues.lendMoneySum" iconClass="fa fa-paper-plane"
            bgClass="bg-danger" operateType="6" :onClick="transitionToDebtList"
            @actived="refresh(6)" ref="statsPanel6"/>
        </el-col>
        <el-col :span="6">
          <statistics-panel title="礼金总金额"
            :value="dashboardValues.receivePresentMoneySum" iconClass="fa fa-gift"
            bgClass="bg-warning" operateType="7" :onClick="transitionToPresentList"
            @actived="refresh(7)" ref="statsPanel7"/>
        </el-col>
        <el-col :span="6">
          <statistics-panel title="销售总金额"
            :value="dashboardValues.salesMoneySum" iconClass="fa fa-shopping-basket"
            bgClass="bg-success" operateType="8" :onClick="transitionToSalesList"
            @actived="refresh(8)" ref="statsPanel8"/>
        </el-col>
      </el-row>
    </div>
    <div style="margin-bottom: 70px;">
      <el-row>
        <el-col :span="22" :offset="1">
          <consume-line-chat />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import StatisticsPanel from '@/components/StatisticsPanel.vue';
import ConsumeLineChat from '@/components/ConsumeLineChat.vue';

export default {
  data() {
    return {
      dashboardValues: {
        salaryMoneySum: 0,
        bankcardMoneySum: 0,
        handMoneySum: 0,
        consumeMoneySum: 0,
        borrowMoneySum: 0,
        lendMoneySum: 0,
        receivePresentMoneySum: 0,
        sendPresentMoneySum: 0,
        salesMoneySum: 0,
        income: 0,
        outcome: 0,
      },
      statusColor: '#67C23A',
      financeStatus: '良好',
    };
  },

  mounted() {
    const that = this;
    this.$request.httpRequest({
      method: 'post',
      url: '/dashboard/init',
      params: {},
      success(response) {
        that.dashboardValues = { ...response.data };
        if (that.dashboardValues.income <= that.dashboardValues.outcome) {
          that.statusColor = '#F56C6C';
          that.financeStatus = '危险';
        } else {
          that.statusColor = '#67C23A';
          that.financeStatus = '良好';
        }
      },
    });
  },

  methods: {
    refresh(operateType) {
      const that = this;
      this.$request.httpRequest({
        method: 'post',
        url: '/dashboard/refresh',
        params: {},
        success(response) {
          if (operateType === 1) {
            that.dashboardValues.salaryMoneySum = response.data.moneySum;
            that.$refs.statsPanel1.inactive();
          } else if (operateType === 2) {
            that.dashboardValues.handMoneySum = response.data.moneySum;
            that.$refs.statsPanel2.inactive();
          } else if (operateType === 3) {
            that.dashboardValues.handMoneySum = response.data.moneySum;
            that.$refs.statsPanel3.inactive();
          } else if (operateType === 4) {
            that.dashboardValues.consumeMoneySum = response.data.moneySum;
            that.$refs.statsPanel4.inactive();
          } else if (operateType === 5) {
            that.dashboardValues.borrowMoneySum = response.data.moneySum;
            that.$refs.statsPanel5.inactive();
          } else if (operateType === 6) {
            that.dashboardValues.lendMoneySum = response.data.moneySum;
            that.$refs.statsPanel6.inactive();
          } else if (operateType === 7) {
            that.dashboardValues.receivePresentMoneySum = response.data.moneySum;
            that.$refs.statsPanel7.inactive();
          } else if (operateType === 8) {
            that.dashboardValues.salesMoneySum = response.data.moneySum;
            that.$refs.statsPanel8.inactive();
          }
        },
      });
    },

    transitionToSecurityManagement() {
      this.$router.push({
        path: '/system/securitymanagement',
      }).catch((err) => err);
    },

    transitionToSetting() {
      this.$router.push({
        path: '/system/setting',
      }).catch((err) => err);
    },

    transitionToHelp() {
      this.$router.push({
        path: '/system/help',
      }).catch((err) => err);
    },

    transitionToUserList() {
      this.$router.push({
        path: '/user/list',
      }).catch((err) => err);
    },

    transitionToConsumeList() {
      this.$router.push({
        path: '/consume/list',
      }).catch((err) => err);
    },

    transitionToBankcardList() {
      this.$router.push({
        path: '/bankcard/list',
      }).catch((err) => err);
    },

    transitionToSalaryList() {
      this.$router.push({
        path: '/salary/list',
      }).catch((err) => err);
    },

    transitionToDebtList() {
      this.$router.push({
        path: '/debt/list',
      }).catch((err) => err);
    },

    transitionToAccessCardList() {
      this.$router.push({
        path: '/accesscard/list',
      }).catch((err) => err);
    },

    transitionToExchangeList() {
      this.$router.push({
        path: '/exchange/list',
      }).catch((err) => err);
    },

    transitionToPresentList() {
      this.$router.push({
        path: '/present/list',
      }).catch((err) => err);
    },

    transitionToSalesList() {
      this.$router.push({
        path: '/sales/list',
      }).catch((err) => err);
    },
  },

  components: {
    StatisticsPanel,
    ConsumeLineChat,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-title {
    float: left;
    color: #777;
    font-family: 'Open Sans', sans-serif;
    margin-top: -10px;
    margin-left: 20px;
  }

  .page-title span {
    display: block;
    color: #999;
    text-shadow: 0 1px 0 #fff;
    font-size: 12px;
    margin-top: -10px;
  }

  .page-stats {
    float: right;
    margin: 5px 0;
    padding: 0;
    list-style: none;
  }

  .page-stats li {
    float: left;
    display: block;
    padding: 0 20px;
    border-right: 1px solid #ccc
  }

  .page-stats li:last-child {
    border-right: none
  }

  .page-stats li .value span {
    font-size: 11px;
    font-weight: 600;
    color: #bbb;
    text-shadow: 0 1px 0 #fff;
    text-transform: uppercase
  }

  .page-stats li .value h4 {
    font-size: 20px;
    line-height: 20px;
    font-weight: 600;
    color: #777;
    margin: 5px 0
  }

  .grey-container {
    background: #eee;
    padding: 15px;
    border: 1px solid #dfdfdf;
    border-width: 1px 0;
    margin-top: 20px;
  }

  .shortcut-wrapper {
    text-align: center;
    color: #999;
    text-shadow: 0 1px 0 #fff;
    font-size: 12px;
  }

  @media (max-width:767px) {
    .shortcut-wrapper {
        text-align: left
    }
  }

  .shortcut-link {
    display: inline-block;
    /* color: #ccc; */
    margin-right: 35px;
    text-shadow: 0 1px 0 #fff;
    transition: color .2s ease;
    -webkit-transition: color .2s ease;
    -moz-transition: color .2s ease;
    -ms-transition: color .2s ease;
    -o-transition: color .2s ease
  }

  .shortcut-link .shortcut-icon {
    position: relative;
    font-size: 30px;
    cursor: pointer;
  }

  .shortcut-link .shortcut-icon .shortcut-alert {
    position: absolute;
    border-radius: 50em;
    -moz-border-radius: 50em;
    -webkit-border-radius: 50em;
    font-size: 11px;
    color: #fff;
    top: 0;
    right: 0;
    background: #fc8675;
    border: 1px solid #fc8675;
    text-shadow: none;
    font-weight: 700;
    line-height: 16px;
    width: 18px;
    height: 18px;
    text-align: center
  }

  .shortcut-link .text {
    display: inline-block;
    margin-left: 10px;
    color: #626262;
    font-weight: 600;
    cursor: pointer;
  }

  .shortcut-link:hover {
    text-decoration: none;
    color: #626262;
    transition: color .2s ease;
    -webkit-transition: color .2s ease;
    -moz-transition: color .2s ease;
    -ms-transition: color .2s ease;
    -o-transition: color .2s ease
  }

  .el-row {
    margin-top: 5px;
    margin-bottom: 20px;
  }

  .pannelContainer {
    padding: 20px 20px;
    margin-bottom: 20px;
  }
</style>
