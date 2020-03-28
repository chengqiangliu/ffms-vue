<template>
  <div class="sideNav">
    <!-- <el-button type="button" class="navbar-toggle btn" v-model="isCollapse"
      @click="isCollapse = !isCollapse">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </el-button> -->
    <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-aside class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :collapse="true">
      <el-menu>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-shopping-cart-2"></i>消费管理</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link to="/consume/register">
                <i class="el-icon-shopping-cart-full"></i>
                消费信息录入
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/consume/list">
                <i class="el-icon-s-data"></i>
                消费信息列表
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-wallet"></i>工资管理</template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <router-link to="/consume/register">
                <i class="el-icon-money"></i>
                工资信息录入
              </router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link to="/consume/list">
                <i class="el-icon-s-data"></i>
                工资信息列表
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-bank-card"></i>银行卡管理</template>
          <el-menu-item-group>
            <el-menu-item index="3-1">
              <router-link to="/consume/register">
                <i class="el-icon-postcard"></i>
                银行卡信息录入
              </router-link>
            </el-menu-item>
            <el-menu-item index="3-2">
              <router-link to="/consume/list">
                <i class="el-icon-s-data"></i>
                银行卡信息列表
              </router-link>
            </el-menu-item>
            <el-menu-item index="3-3">
              <router-link to="/consume/register">
                <i class="el-icon-s-data"></i>
                存取款信息列表
              </router-link>
            </el-menu-item>
            <el-menu-item index="3-4">
              <router-link to="/consume/list">
                <i class="el-icon-s-data"></i>
                转账信息列表
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-set-up"></i>债务管理</template>
          <el-menu-item-group>
            <el-menu-item index="4-2">
              <router-link to="/consume/list">
                <i class="el-icon-s-data"></i>
                债务信息列表
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="el-icon-present"></i>礼金管理</template>
          <el-menu-item-group>
            <el-menu-item index="5-1">
              <router-link to="/consume/register">
                <i class="el-icon-sell"></i>
                收礼信息录入
              </router-link>
            </el-menu-item>
            <el-menu-item index="5-2">
              <router-link to="/consume/list">
                <i class="el-icon-sold-out"></i>
                送礼信息录入
              </router-link>
            </el-menu-item>
            <el-menu-item index="5-3">
              <router-link to="/consume/register">
                <i class="el-icon-s-data"></i>
                礼金信息列表
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title"><i class="el-icon-truck"></i>销售管理</template>
          <el-menu-item-group>
            <el-menu-item index="6-1">
              <router-link to="/consume/register">
                <i class="el-icon-shopping-bag-2"></i>
                销售信息录入
              </router-link>
            </el-menu-item>
            <el-menu-item index="6-2">
              <router-link to="/consume/register">
                <i class="el-icon-s-data"></i>
                销售信息列表
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<style scoped>
  .sideNav{
    min-height: 550px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
    color: #ccc;
  }

  .navbar-toggle .icon-bar {
      display: block;
      width: 18px;
      height: 2px;
      margin-bottom: 3px;
      border-radius: 1px;
      -moz-border-radius: 1px;
      -webkit-border-radius: 1px
  }

  .icon-bar {
    background-color: #fff;
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease
  }

  .btn {
    color: #fff;
    background: #272938;
    border: 1px solid #272938;
  }
</style>

<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
