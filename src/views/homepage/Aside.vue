<template>
  <el-menu background-color="#415160"
    class="el-menu-demo"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router=true
    :collapse="isCollapse">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-shopping-cart-2"></i>消费管理</template>
      <el-menu-item-group>
        <el-menu-item index="1-1" route="/consume/register">
          <i class="el-icon-shopping-cart-full"></i>
          消费信息录入
        </el-menu-item>
        <el-menu-item index="1-2" route="/consume/list">
          <i class="el-icon-s-data"></i>
          消费信息列表
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-wallet"></i>工资管理</template>
      <el-menu-item-group>
        <el-menu-item index="2-1" route="/consume/register">
          <i class="el-icon-money"></i>
          工资信息录入
        </el-menu-item>
        <el-menu-item index="2-2" route="/consume/list">
          <i class="el-icon-s-data"></i>
          工资信息列表
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-bank-card"></i>银行卡管理</template>
      <el-menu-item-group>
        <el-menu-item index="3-1" route="/consume/register">
          <i class="el-icon-postcard"></i>
          银行卡信息录入
        </el-menu-item>
        <el-menu-item index="3-2" route="/consume/list">
          <i class="el-icon-s-data"></i>
          银行卡信息列表
        </el-menu-item>
        <el-menu-item index="3-3" route="/consume/list">
          <i class="el-icon-s-data"></i>
          存取款信息列表
        </el-menu-item>
        <el-menu-item index="3-4" route="/consume/list">
          <i class="el-icon-s-data"></i>
          转账信息列表
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title"><i class="el-icon-set-up"></i>债务管理</template>
      <el-menu-item-group>
        <el-menu-item index="4-1" route="/consume/list">
          <i class="el-icon-s-data"></i>
          债务信息列表
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title"><i class="el-icon-present"></i>礼金管理</template>
      <el-menu-item-group>
        <el-menu-item index="5-1" route="/consume/register">
          <i class="el-icon-sell"></i>
          收礼信息录入
        </el-menu-item>
        <el-menu-item index="5-2" route="/consume/register">
          <i class="el-icon-sold-out"></i>
          送礼信息录入
        </el-menu-item>
        <el-menu-item index="5-3" route="/consume/list">
          <i class="el-icon-s-data"></i>
          礼金信息列表
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title"><i class="el-icon-truck"></i>销售管理</template>
      <el-menu-item-group>
        <el-menu-item index="6-1" route="/consume/register">
          <i class="el-icon-shopping-bag-2"></i>
          销售信息录入
        </el-menu-item>
        <el-menu-item index="6-2" route="/consume/list">
          <i class="el-icon-s-data"></i>
          销售信息列表
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

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
