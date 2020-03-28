<template>
  <el-container style="height: 100%;">
    <el-header>
      <Header />
    </el-header>
    <el-container class="main-container">
      <el-aside :style="getAsideWidth">
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

  data() {
    return {
      asideWidth: 200,
    };
  },

  computed: {
    getAsideWidth() {
      return {
        width: `${this.asideWidth}px`,
      };
    },
  },

  mounted() {
    this.$root.$on('toggleSideMenu', () => {
      if (this.asideWidth === 200) {
        this.asideWidth = 0;
      } else {
        this.asideWidth = 200;
      }
    });
  },

  components: {
    Aside,
    Header,
  },
};
</script>
