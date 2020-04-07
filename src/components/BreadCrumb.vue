<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
    <el-breadcrumb-item :to="{ path: '/dashboard' }">
      <i class="fas fa-tachometer-alt"></i> 系统首页
    </el-breadcrumb-item>
    <el-breadcrumb-item>{{ subTitle }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: ['subTitle'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .breadcrumb {
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    background: 0 0;
    padding: 12px 15px;
    border-bottom: 1px solid #eee;
    margin-bottom: 15px;
    font-size: 12px;
    font-weight: 700;
    color: #777;
    box-shadow: 0 1px 0 #fff;
    -moz-box-shadow: 0 1px 0 #fff;
    -webkit-box-shadow: 0 1px 0 #fff;
    text-shadow: 0 1px #fff;
  }
</style>
