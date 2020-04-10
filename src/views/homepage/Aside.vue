<template>
  <div style="padding: 0 5px 0 5px;">
    <div class="user-block">
      <el-avatar icon="el-icon-user-solid"
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
      </el-avatar>
      <div class="user-detail">
        <strong>Baobao</strong>
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
          <el-menu-item @click="newSalaryInfoVisible = true">
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
          <el-menu-item @click="transferInfoVisible = true">
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
          <el-menu-item @click="receivePresentInfoVisible = true">
            <i class="fas fa-hand-holding"></i>
            收礼信息录入
          </el-menu-item>
          <el-menu-item @click="givePresentInfoVisible = true">
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
    <el-dialog title="工资信息录入"
      :visible.sync="newSalaryInfoVisible" :close-on-click-modal="false"
      :append-to-body="true">
      <NewSalaryInfo />
      <span slot="footer" class="dialog-footer">
        <el-button @click="closePopup(1)">取消</el-button>
        <el-button type="primary" @click="newSalary">确定</el-button>
      </span>
    </el-dialog>
    <bankcard-dialog ref="bankcardDialog" @update="reload" />
    <el-dialog title="转账信息录入"
      :visible.sync="transferInfoVisible" :close-on-click-modal="false"
      :append-to-body="true">
      <TransferInfo />
      <span slot="footer" class="dialog-footer">
        <el-button @click="closePopup(3)">取消</el-button>
        <el-button type="primary" @click="transfer">确定</el-button>
      </span>
    </el-dialog>
    <access-card-dialog ref="withdrawDialog" @update="reload" />
    <access-card-dialog ref="depositDialog" @update="reload" />
    <el-dialog title="借款（入）信息录入"
      :visible.sync="borrowInfoVisible" :close-on-click-modal="false"
      :append-to-body="true">
      <BorrowInfo />
      <span slot="footer" class="dialog-footer">
        <el-button @click="closePopup(6)">取消</el-button>
        <el-button type="primary" @click="borrow">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="借款（出）信息录入"
      :visible.sync="lendInfoVisible" :close-on-click-modal="false"
      :append-to-body="true">
      <LendInfo />
      <span slot="footer" class="dialog-footer">
        <el-button @click="closePopup(7)">取消</el-button>
        <el-button type="primary" @click="lend">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="收礼信息录入"
      :visible.sync="receivePresentInfoVisible" :close-on-click-modal="false"
      :append-to-body="true">
      <ReceivePresentInfo />
      <span slot="footer" class="dialog-footer">
        <el-button @click="closePopup(8)">取消</el-button>
        <el-button type="primary" @click="receivePresent">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="送礼信息录入"
      :visible.sync="givePresentInfoVisible" :close-on-click-modal="false"
      :append-to-body="true">
      <GivePresentInfo />
      <span slot="footer" class="dialog-footer">
        <el-button @click="closePopup(9)">取消</el-button>
        <el-button type="primary" @click="givePresent">确定</el-button>
      </span>
    </el-dialog>
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
import TransferInfo from '@/views/transfer/TransferInfo.vue';
import NewSalaryInfo from '@/views/salary/NewSalaryInfo.vue';
import BankcardDialog from '@/components/BankcardDialog.vue';
import BorrowInfo from '@/views/debt/BorrowInfo.vue';
import LendInfo from '@/views/debt/LendInfo.vue';
import ReceivePresentInfo from '@/views/present/ReceivePresentInfo.vue';
import GivePresentInfo from '@/views/present/GivePresentInfo.vue';
import AccessCardDialog from '@/components/AccessCardDialog.vue';

export default {
  data() {
    return {
      isCollapse: false,
      newSalaryInfoVisible: false,
      transferInfoVisible: false,
      borrowInfoVisible: false,
      lendInfoVisible: false,
      receivePresentInfoVisible: false,
      givePresentInfoVisible: false,
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

    closePopup(command) {
      if (command === 1) {
        this.newSalaryInfoVisible = false;
      } else if (command === 3) {
        this.transferInfoVisible = false;
      } else if (command === 6) {
        this.borrowInfoVisible = false;
      } else if (command === 7) {
        this.lendInfoVisible = false;
      } else if (command === 8) {
        this.receivePresentInfoVisible = false;
      } else if (command === 9) {
        this.givePresentInfoVisible = false;
      }
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

    reload() {
      console.log('reload');
    },

    newSalary() {
      this.$message({
        message: 'Congrats, this is a success message.',
        type: 'success',
      });
      this.newSalaryInfoVisible = false;
    },

    transfer() {
      this.$message({
        message: 'Congrats, this is a success message.',
        type: 'success',
      });
      this.transferInfoVisible = false;
    },

    borrow() {
      this.$message({
        message: 'Congrats, this is a success message.',
        type: 'success',
      });
      this.borrowInfoVisible = false;
    },

    lend() {
      this.$message({
        message: 'Congrats, this is a success message.',
        type: 'success',
      });
      this.lendInfoVisible = false;
    },

    receivePresent() {
      this.$message({
        message: 'Congrats, this is a success message.',
        type: 'success',
      });
      this.receivePresentInfoVisible = false;
    },

    givePresent() {
      this.$message({
        message: 'Congrats, this is a success message.',
        type: 'success',
      });
      this.givePresentInfoVisible = false;
    },
  },

  mounted() {
    this.$root.$on('toggleSideMenu', () => {
      this.isCollapse = !this.isCollapse;
    });
  },

  components: {
    TransferInfo,
    NewSalaryInfo,
    BankcardDialog,
    AccessCardDialog,
    LendInfo,
    BorrowInfo,
    ReceivePresentInfo,
    GivePresentInfo,
  },
};
</script>
