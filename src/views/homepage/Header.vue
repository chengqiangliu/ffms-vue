<template>
  <div>
    <div>
      <a class="top-brand" @click="transitionToDashboard">
        <span>家庭财务</span>
        <span class="text-toggle">管理系统</span>
      </a>
      <el-button type="button" class="navbar-toggle" @click="toggleAside">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </el-button>
      <div class="nav-logout">
        <el-menu
          mode="horizontal"
          background-color="#272938"
          text-color="#BECFE0"
          active-text-color="#BECFE0">
          <el-submenu index="1">
            <template slot="title">Baobao</template>
            <el-menu-item index="1-1" @click="editUserInfo">
              <i class="fas fa-user-edit"></i>&nbsp;编辑个人信息
            </el-menu-item>
            <el-menu-item index="1-2" @click="logout">
              <i class="fas fa-sign-out-alt"></i>&nbsp;退出系统
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .top-brand {
    display: block;
    text-align: center;
    font-size: 17px;
    line-height: 60px;
    width: 165px;
    color: #BECFE0;
    background: #272938;
    float: left;
    cursor: pointer;
  }

  .top-brand:focus, .top-brand:hover {
    color: #fff;
  }

  .navbar-toggle {
    color: #fff;
    background: #272938;
    border: 1px solid #272938;
    margin-top: 13px;
  }

  .navbar-toggle .icon-bar {
    display: block;
    width: 18px;
    height: 2px;
    margin-bottom: 3px;
    border-radius: 1px;
    background-color: #fff;
  }

  .nav-logout {
    display: block;
    text-align: center;
    font-size: 12px;
    line-height: 60px;
    width: 110px;
    color: #BECFE0;
    background: #272938;
    float: right;
  }
</style>

<script>
export default {
  methods: {
    toggleAside() {
      this.$root.$emit('toggleSideMenu');
    },

    editUserInfo() {
      this.$router.push({
        path: '/profile/edit',
      }).catch((err) => err);
    },

    logout() {
      this.$confirm('你确定要退出系统吗？', '提醒', { type: 'warning' })
        .then(() => {
          localStorage.removeItem('ADMIN_TOKEN');
          this.$router.push({
            path: '/login',
          }).catch((err) => err);
        })
        .catch(() => {});
    },

    transitionToDashboard() {
      this.$router.push({
        path: '/dashboard',
      }).catch((err) => err);
    },
  },
};
</script>
