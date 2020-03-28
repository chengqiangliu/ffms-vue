<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-header>
      <Header />
    </el-header>
    <el-container class="main-container">
      <el-aside width="200px">
        <Aside />
      </el-aside>
      <el-main style="padding: 0;">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
  .el-container {
    background: #f9f9f9;
  }

  .el-header {
    background: #272938;
    z-index: 1000;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
  }

  .main-container {
    position: fixed;
    left: 0;
    top: 60px;
    width: 100%;
    height: 100%;
  }

  .el-aside {
    background-color: #415160;
  }
</style>

<script>
// @ is an alias to /src
import Aside from '@/views/homepage/Aside.vue';
import Header from '@/views/homepage/Header.vue';

export default {
  name: 'Dashboard',
  components: {
    Aside,
    Header,
  },
};
</script>
