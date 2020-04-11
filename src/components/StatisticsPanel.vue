<template>
  <div class="panel-stat3 fadeInRight animation-delay1" :class="bgClass">
    <div class="dropdown operate-button">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <span class="m-left-xs">操作</span> <i class="fas fa-arrow-alt-circle-down"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-if="operateType === '1'" command="1">
            <i class="fab fa-paypal"></i>发工资</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '2'" command="2-1">
            <i class="fab fa-cc-visa"></i> 添加新卡</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '2'" command="2-2">
            <i class="fas fa-exchange-alt"></i> 转账</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '3'" command="3-1">
            <i class="fas fa-money-bill-wave"></i> 取款</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '3'" command="3-2">
            <i class="fas fa-coins"></i> 存款</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '4'" command="4">
            <i class="fas fa-cash-register"></i> 录入消费信息</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '5'" command="5-1">
            <i class="fas fa-download"></i> 借入</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '5'" command="5-2">
            <i class="fas fa-angle-double-up"></i> 还款（出）</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '6'" command="6-1">
            <i class="fas fa-upload"></i> 借出</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '6'" command="6-2">
            <i class="fas fa-angle-double-down"></i> 还款（入）</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '7'" command="7-1">
            <i class="fas fa-hand-holding"></i> 收礼</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '7'" command="7-2">
            <i class="fas fa-hand-holding-usd"></i> 送礼</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '8'" command="8">
            <i class="fas fa-balance-scale"></i> 录入销售信息</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div @click="onClick">
      <h2 class="h2ValueClass"> {{ value }} </h2>
      <h5 class="h5ValueClass">{{ title }}</h5>
      <div class="stat-icon">
        <i class="fa-3x" :class="iconClass"></i>
      </div>
    </div>
    <div id="refreshPresentMoneySum" class="refresh-button">
      <i class="fas fa-sync-alt"></i>
    </div>
    <div class="loading-overlay">
      <i class="loading-icon fa fa-refresh fa-spin fa-lg"></i>
    </div>
    <salary-dialog v-if="operateType === '1'" ref="salaryDialog" @update="reload" />
    <bankcard-dialog v-if="operateType === '2'" ref="bankcardDialog" @update="reload" />
    <transfer-dialog v-if="operateType === '2'" ref="transferDialog" @update="reload" />
    <access-card-dialog v-if="operateType === '3'" ref="withdrawDialog" @update="reload" />
    <access-card-dialog v-if="operateType === '3'" ref="depositDialog" @update="reload" />
    <debt-dialog v-if="operateType === '5'" ref="borrowDialog" @update="reload" />
    <payback-dialog v-if="operateType === '5'" ref="paybackOutDialog" @update="reload" />
    <debt-dialog v-if="operateType === '6'" ref="lendDialog" @update="reload" />
    <payback-dialog v-if="operateType === '6'" ref="paybackInDialog" @update="reload" />
    <present-dialog v-if="operateType === '7'" ref="givePresentDialog" @update="reload" />
    <present-dialog v-if="operateType === '7'" ref="receivePresentDialog" @update="reload" />
  </div>
</template>

<script>
import TransferDialog from '@/components/dialog/TransferDialog.vue';
import AccessCardDialog from '@/components/dialog/AccessCardDialog.vue';
import BankcardDialog from '@/components/dialog/BankcardDialog.vue';
import SalaryDialog from '@/components/dialog/SalaryDialog.vue';
import PresentDialog from '@/components/dialog/PresentDialog.vue';
import DebtDialog from '@/components/dialog/DebtDialog.vue';
import PaybackDialog from '@/components/dialog/PaybackDialog.vue';

export default {
  name: 'StatisticsPanel',
  props: {
    title: String,
    value: String,
    bgClass: String,
    iconClass: String,
    operateType: String,
    onClick: Function,
  },
  data() {
    return {
    };
  },
  methods: {
    handleCommand(command) {
      if (command === '1') {
        this.openSalaryDialog();
      } else if (command === '2-1') {
        this.openBankcardDialog();
      } else if (command === '2-2') {
        this.openTransferDialog();
      } else if (command === '3-1') {
        this.openWithdrawDialog();
      } else if (command === '3-2') {
        this.openDepositDialog();
      } else if (command === '4') {
        this.$router.push({
          path: '/consume/register',
        }).catch((err) => err);
      } else if (command === '5-1') {
        this.openBorrowDialog();
      } else if (command === '5-2') {
        this.openPaybackOutDialog();
      } else if (command === '6-1') {
        this.openLendDialog();
      } else if (command === '6-2') {
        this.openPaybackInDialog();
      } else if (command === '7-1') {
        this.openReceivePresentDialog();
      } else if (command === '7-2') {
        this.openGivePresentDialog();
      } else if (command === '8') {
        this.$router.push({
          path: '/sales/register',
        }).catch((err) => err);
      }
    },

    openTransferDialog() {
      this.$refs.transferDialog.open().then((that) => {
        that.initData({ formType: 1 });
      });
    },

    openSalaryDialog() {
      this.$refs.salaryDialog.open().then((that) => {
        that.initData({ formType: 1 });
      });
    },

    openBankcardDialog() {
      this.$refs.bankcardDialog.open().then((that) => {
        that.initData({ formType: 1 });
      });
    },

    openWithdrawDialog() {
      this.$refs.withdrawDialog.open().then((that) => {
        that.initData({ formType: 1 });
      });
    },

    openDepositDialog() {
      this.$refs.depositDialog.open().then((that) => {
        that.initData({ formType: 2 });
      });
    },

    openReceivePresentDialog() {
      this.$refs.receivePresentDialog.open().then((that) => {
        that.initData({ formType: 1 });
      });
    },

    openGivePresentDialog() {
      this.$refs.givePresentDialog.open().then((that) => {
        that.initData({ formType: 2 });
      });
    },

    openBorrowDialog() {
      this.$refs.borrowDialog.open().then((that) => {
        that.initData({ formType: 1 });
      });
    },

    openLendDialog() {
      this.$refs.lendDialog.open().then((that) => {
        that.initData({ formType: 2 });
      });
    },

    openPaybackOutDialog() {
      this.$refs.paybackOutDialog.open().then((that) => {
        that.initData({ formType: 1 });
      });
    },

    openPaybackInDialog() {
      this.$refs.paybackInDialog.open().then((that) => {
        that.initData({ formType: 2 });
      });
    },

    reload() {
      console.log('reload');
    },
  },
  components: {
    TransferDialog,
    SalaryDialog,
    PresentDialog,
    PaybackDialog,
    AccessCardDialog,
    BankcardDialog,
    DebtDialog,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .panel-stat3 {
    position: relative;
    /*overflow: hidden;*/
    padding: 20px 20px 5px 20px;
    color: #fff;
    cursor: pointer;
    border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px
  }

  .panel-stat3 .stat-icon {
    position: absolute;
    top: 20px;
    right: 10px;
    font-size: 30px;
    opacity: .3
  }

  .panel-stat3 .refresh-button {
    position: absolute;
    top: 10px;
    right: 10px;
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease;
    color: rgba(0, 0, 0, .3)
  }

  .panel-stat3 .operate-button {
    position: absolute;
    top: 10px;
    left: 10px;
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease;
    color: rgba(0, 0, 0, .3);
    font-size: 12px;
  }

  .panel-stat3 .el-dropdown-link:hover {
    color: #fff;
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease
  }

  .panel-stat3 .refresh-button:hover {
    color: #fff;
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease
  }

  .bg-info {
    background-color: #6bafbd;
    color: #fff
  }

  .bg-success {
    background-color: #65cea7;
    color: #fff
  }

  .bg-danger {
    background-color: #fc8675 !important;
    color: #fff !important
  }

  .bg-warning {
    background-color: #f3ce85;
    color: #fff
  }

  .fadeInRight {
    animation-name: fadeInRight;
    -webkit-animation-name: fadeInRight;
    -moz-animation-name: fadeInRight;
    -ms-animation-name: fadeInRight;
    -o-animation-name: fadeInRight;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    -ms-animation-duration: 1s;
    -o-animation-duration: 1s
  }

  .animation-delay1 {
    animation-delay: .1s;
    -webkit-animation-delay: .1s;
    -moz-animation-delay: .1s;
    -ms-animation-delay: .1s;
    -o-animation-delay: .1s;
    animation-timing-function: ease;
    -webkit-animation-timing-function: ease;
    -moz-animation-timing-function: ease;
    -ms-animation-timing-function: ease;
    -o-animation-timing-function: ease;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -ms-animation-fill-mode: both;
    -o-animation-fill-mode: both
  }

  .m-left-xs {
    margin-left: 5px
  }

  a {
    color: #555;
    text-decoration: none;
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease
  }

  a:focus, a:hover {
    color: #999;
    text-decoration: none;
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease
  }

  .h2ValueClass {
    margin-top: 15px;
    margin-bottom: 0;
  }

  .h5ValueClass {
    margin-top: 10px;
  }

  .loading-overlay {
    position: absolute;
    display: none;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .4);
    text-align: center
  }

  .loading-overlay.active {
    display: block
  }

  .loading-overlay .loading-icon {
    position: absolute;
    top: 45%;
    left: 50%;
    color: #fff;
    animation: fa-spin .8s infinite linear;
    -webkit-animation: fa-spin .8s infinite linear;
    -moz-animation: fa-spin .8s infinite linear;
    -ms-animation: fa-spin .8s infinite linear;
    -o-animation: fa-spin .8s infinite linear
  }
</style>
