<template>
  <div style="padding: 0 5px 0 5px;">
    <div class="user-block">
      <el-avatar icon="el-icon-user-solid"
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
      </el-avatar>
      <div class="user-detail">
        <strong>{{ $store.getters.userInfo.username }}</strong>
        <ul class="list-inline">
          <li><a @click="transitionToProfile">个人信息</a></li>
        </ul>
      </div>
    </div>
    <div class="dashboard-div">
      <ul class="list-inline">
        <li><a @click="transitionToDashboard">
          <i class="fas fa-tachometer-alt"></i>&nbsp;系统首页</a>
        </li>
      </ul>
    </div>
    <el-menu background-color="#415160"
      text-color="#BECFE0"
      active-text-color="#ffd04b"
      :router=true
      :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-shopping-cart-2"></i>消费管理</template>
        <el-menu-item-group>
          <el-menu-item index="1-1" route="/consume/register">
            <i class="fas fa-cash-register"></i>
            消费信息录入
          </el-menu-item>
          <el-menu-item index="1-2" route="/consume/list">
            <i class="fas fa-list-alt"></i>
            消费信息列表
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-money"></i>工资管理</template>
        <el-menu-item-group>
          <el-menu-item @click="openSalaryDialog">
            <i class="fab fa-paypal"></i>
            工资信息录入
          </el-menu-item>
          <el-menu-item index="2-2" route="/salary/list">
            <i class="fas fa-list-alt"></i>
            工资信息列表
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-bank-card"></i>银行卡管理</template>
        <el-menu-item-group>
          <el-menu-item @click="openBankcardDialog">
            <i class="fab fa-cc-visa"></i>
            银行卡信息录入
          </el-menu-item>
          <el-menu-item index="3-2" route="/bankcard/list">
            <i class="fas fa-list-alt"></i>
            银行卡信息列表
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-bank-card"></i>转账管理</template>
        <el-menu-item-group>
          <el-menu-item @click="openTransferDialog">
            <i class="fas fa-exchange-alt"></i> 转账信息录入
          </el-menu-item>
          <el-menu-item index="4-2" route="/transfer/list">
            <i class="fas fa-list-alt"></i>
            转账信息列表
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-bank-card"></i>存取款管理</template>
        <el-menu-item-group>
          <el-menu-item @click="openWithdrawDialog">
            <i class="fas fa-money-bill-wave"></i>
            取款信息录入
          </el-menu-item>
          <el-menu-item @click="openDepositDialog">
            <i class="fas fa-coins"></i>
            存款信息录入
          </el-menu-item>
          <el-menu-item index="5-3" route="/accesscard/list">
            <i class="fas fa-list-alt"></i>
            存取款信息列表
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title"><i class="el-icon-set-up"></i>债务管理</template>
        <el-menu-item-group>
          <el-menu-item @click="borrowInfoVisible = true">
            <i class="fas fa-download"></i> 借入信息录入
          </el-menu-item>
          <el-menu-item @click="lendInfoVisible = true">
            <i class="fas fa-upload"></i> 借出信息录入
          </el-menu-item>
          <el-menu-item index="6-3" route="/debt/list">
            <i class="fas fa-list-alt"></i>
            债务信息列表
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title"><i class="el-icon-present"></i>礼金管理</template>
        <el-menu-item-group>
          <el-menu-item @click="openReceivePresentDialog">
            <i class="fas fa-hand-holding"></i>
            收礼信息录入
          </el-menu-item>
          <el-menu-item @click="openGivePresentDialog">
            <i class="fas fa-hand-holding-usd"></i>
            送礼信息录入
          </el-menu-item>
          <el-menu-item index="7-3" route="/present/list">
            <i class="fas fa-list-alt"></i>
            礼金信息列表
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title"><i class="el-icon-truck"></i>销售管理</template>
        <el-menu-item-group>
          <el-menu-item index="8-1" route="/sales/register">
            <i class="fas fa-balance-scale"></i>
            销售信息录入
          </el-menu-item>
          <el-menu-item index="8-2" route="/sales/list">
            <i class="fas fa-list-alt"></i>
            销售信息列表
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <div style="height: 60px;"></div>
    <salary-dialog ref="salaryDialog" @update="reload" />
    <bankcard-dialog ref="bankcardDialog" @update="reload" />
    <transfer-dialog ref="transferDialog" @update="reload" />
    <access-card-dialog ref="withdrawDialog" @update="reload" />
    <access-card-dialog ref="depositDialog" @update="reload" />
    <debt-dialog ref="borrowDialog" @update="reload" />
    <debt-dialog ref="lendDialog" @update="reload" />
    <present-dialog ref="givePresentDialog" @update="reload" />
    <present-dialog ref="receivePresentDialog" @update="reload" />
  </div>
</template>

<style scoped>
  .user-block{
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #506274;
  }

  .user-block .user-detail {
    float: right;
    color: #e6f1f7;
    margin-right: 60px
  }

  .user-block .user-detail ul {
    margin-top: 5px;
  }

  .user-block .user-detail ul li {
    text-decoration: none;
    padding: 0;
    font-size: 11px;
  }

  .dashboard-div {
    padding-left: 45px;
    border-bottom: 1px solid #506274;
  }

  .dashboard-div ul li {
    text-decoration: none;
    padding: 0;
    font-size: 14px;
  }

  a {
    color: #e6f1f7;
    text-decoration: none;
    cursor: pointer;
  }

  a:focus, a:hover {
    color: #999;
    text-decoration: none;
  }

  .list-inline{
    padding-left:0;
    list-style:none;
  }

  .el-menu {
    margin-top: 3px;
    color: #777;
    border-right: none;
  }

  .el-menu-item {
    color: #777;
  }

  .el-avatar {
    margin-top: 5px;
    margin-left: 15px;
  }
</style>


<script>
import TransferDialog from '@/components/dialog/TransferDialog.vue';
import SalaryDialog from '@/components/dialog/SalaryDialog.vue';
import BankcardDialog from '@/components/dialog/BankcardDialog.vue';
import DebtDialog from '@/components/dialog/DebtDialog.vue';
import PresentDialog from '@/components/dialog/PresentDialog.vue';
import AccessCardDialog from '@/components/dialog/AccessCardDialog.vue';

export default {
  data() {
    return {
      isCollapse: false,
    };
  },

  methods: {
    transitionToDashboard() {
      this.$router.push({
        path: '/dashboard',
      }).catch((err) => err);
    },

    transitionToProfile() {
      this.$router.push({
        path: '/profile/baseinfo',
      }).catch((err) => err);
    },

    openSalaryDialog() {
      this.$refs.salaryDialog.open().then((that) => {
        that.initData({ formType: 1 });
      });
    },

    openTransferDialog() {
      this.$refs.transferDialog.open().then((that) => {
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

    reload() {
      console.log('reload');
    },
  },

  mounted() {
    this.$root.$on('toggleSideMenu', () => {
      this.isCollapse = !this.isCollapse;
    });
  },

  components: {
    TransferDialog,
    SalaryDialog,
    BankcardDialog,
    AccessCardDialog,
    DebtDialog,
    PresentDialog,
  },
};
</script>
