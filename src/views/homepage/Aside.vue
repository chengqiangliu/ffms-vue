<template>
  <div>
    <div class="user-block">
      <el-avatar icon="el-icon-user-solid"
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
      </el-avatar>
      <div class="user-detail">
        <strong>Baobao</strong>
        <ul class="list-inline">
          <li><a>个人信息</a></li>
        </ul>
      </div>
    </div>
    <el-menu background-color="#415160"
      text-color="#fff"
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
          <el-menu-item index="2-1" route="/consume/register">
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
          <el-menu-item index="3-1" route="/consume/register">
            <i class="fab fa-cc-visa"></i>
            银行卡信息录入
          </el-menu-item>
          <el-menu-item index="3-2" route="/bankcard/list">
            <i class="fas fa-list-alt"></i>
            银行卡信息列表
          </el-menu-item>
          <el-menu-item index="3-3" route="/accesscard/list">
            <i class="fas fa-list-alt"></i>
            存取款信息列表
          </el-menu-item>
          <el-menu-item index="3-4" route="/transfer/list">
            <i class="fas fa-list-alt"></i>
            转账信息列表
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-set-up"></i>债务管理</template>
        <el-menu-item-group>
          <el-menu-item index="4-1" route="/debt/list">
            <i class="fas fa-list-alt"></i>
            债务信息列表
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-present"></i>礼金管理</template>
        <el-menu-item-group>
          <el-menu-item index="5-1" route="/consume/register">
            <i class="fas fa-hand-holding"></i>
            收礼信息录入
          </el-menu-item>
          <el-menu-item index="5-2" route="/consume/register">
            <i class="fas fa-hand-holding-usd"></i>
            送礼信息录入
          </el-menu-item>
          <el-menu-item index="5-3" route="/present/list">
            <i class="fas fa-list-alt"></i>
            礼金信息列表
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title"><i class="el-icon-truck"></i>销售管理</template>
        <el-menu-item-group>
          <el-menu-item index="6-1" route="/consume/register">
            <i class="fas fa-balance-scale"></i>
            销售信息录入
          </el-menu-item>
          <el-menu-item index="6-2" route="/sales/list">
            <i class="fas fa-list-alt"></i>
            销售信息列表
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
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
  }

  a {
    color: #e6f1f7;
    font-size: 11px;
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
    margin-top: 5px;
  }

  .el-avatar {
    margin-top: 5px;
    margin-left: 15px;
  }
</style>


<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },

  mounted() {
    this.$root.$on('toggleSideMenu', () => {
      this.isCollapse = !this.isCollapse;
    });
  },
};
</script>
