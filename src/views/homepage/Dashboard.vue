<template>
  <div style="width: 100%">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="page-title">
          <h3>系统首页</h3>
          <span>财务状况：<strong>良好</strong></span>
        </div><!-- /page-title -->
      </el-col>
      <el-col :span="6" :offset=12>
        <ul class="page-stats">
          <li>
            <div class="value">
              <span>总收入</span>
              <h4>500</h4>
            </div>
          </li>
          <li>
            <div class="value">
              <span>总支出</span>
              <h4>100</h4>
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
          <StatisticsPanel title="工资总额"
            value="1000" bgClass="bg-info" iconClass="fab fa-cc-paypal" operateType="1"
            :onClick="transitionToSalaryList" />
        </el-col>
        <el-col :span="6">
          <StatisticsPanel title="银行卡总金额"
            value="1000" bgClass="bg-success" iconClass="fa fa-credit-card" operateType="2"
            :onClick="transitionToBankcardList"/>
        </el-col>
        <el-col :span="6">
          <StatisticsPanel title="手头现金"
            value="1000" bgClass="bg-info" iconClass="fas fa-money-bill-alt" operateType="3"
            :onClick="transitionToAccessCardList" />
        </el-col>
        <el-col :span="6">
          <StatisticsPanel title="消费总金额"
            value="1000" bgClass="bg-danger" iconClass="fas fa-shopping-cart" operateType="4"
            :onClick="transitionToConsumeList" />
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="6">
          <StatisticsPanel title="借入总金额"
            value="1000" bgClass="bg-warning" iconClass="far fa-hand-lizard" operateType="5"
            :onClick="transitionToDebtList" />
        </el-col>
        <el-col :span="6">
          <StatisticsPanel title="借出总金额"
            value="1000" bgClass="bg-danger" iconClass="fa fa-paper-plane" operateType="6"
            :onClick="transitionToDebtList" />
        </el-col>
        <el-col :span="6">
          <StatisticsPanel title="礼金总金额"
            value="1000" bgClass="bg-warning" iconClass="fa fa-gift" operateType="7"
            :onClick="transitionToPresentList" />
        </el-col>
        <el-col :span="6">
          <StatisticsPanel title="销售总金额"
            value="1000" bgClass="bg-success" iconClass="fa fa-shopping-basket" operateType="8"
            :onClick="transitionToSalesList" />
        </el-col>
      </el-row>
    </div>
    <div style="margin-bottom: 70px;">
      <el-row>
        <el-col :span="22" :offset="1">
          <ConsumeLineChat />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

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

<script>
import StatisticsPanel from '@/components/StatisticsPanel.vue';
import ConsumeLineChat from '@/components/ConsumeLineChat.vue';

export default {
  methods: {
    transitionToSecurityManagement() {
      this.$router.push({
        path: '/system/securitymanagement',
      });
    },
    transitionToSetting() {
      this.$router.push({
        path: '/system/setting',
      });
    },
    transitionToHelp() {
      this.$router.push({
        path: '/system/help',
      });
    },
    transitionToUserList() {
      this.$router.push({
        path: '/user/list',
      });
    },
    transitionToConsumeList() {
      this.$router.push({
        path: '/consume/list',
      });
    },
    transitionToBankcardList() {
      this.$router.push({
        path: '/bankcard/list',
      });
    },
    transitionToSalaryList() {
      this.$router.push({
        path: '/salary/list',
      });
    },
    transitionToDebtList() {
      this.$router.push({
        path: '/debt/list',
      });
    },
    transitionToAccessCardList() {
      this.$router.push({
        path: '/accesscard/list',
      });
    },
    transitionToExchangeList() {
      this.$router.push({
        path: '/exchange/list',
      });
    },
    transitionToPresentList() {
      this.$router.push({
        path: '/present/list',
      });
    },
    transitionToSalesList() {
      this.$router.push({
        path: '/sales/list',
      });
    },
  },

  components: {
    StatisticsPanel,
    ConsumeLineChat,
  },
};
</script>
