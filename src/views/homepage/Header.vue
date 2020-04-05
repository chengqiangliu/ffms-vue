<template>
  <div>
    <div id="top-nav">
      <a class="brand" @click="transitionToDashboard">
        <span>家庭财务</span>
        <span class="text-toggle">管理系统</span>
      </a>
      <el-button type="button" class="navbar-toggle btn" @click="toggleAside">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </el-button>
      <div class="nav-notification">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <strong>Baobao</strong><i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="1">
              <i class="fas fa-user-edit"></i>编辑个人信息
            </el-dropdown-item>
            <el-dropdown-item command="2">
              <i class="fas fa-sign-out-alt"></i>退出系统
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .el-dropdown-link {
    color: #BECFE0;
  }

  .el-dropdown-link:hover {
    color: #fff;
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease
  }

  #top-nav .brand {
    display: block;
    text-align: center;
    font-size: 17px;
    line-height: 60px;
    width: 165px;
    color: #BECFE0;
    background: #272938;
    float: left;
    cursor: pointer;
    transition: all .5s ease;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease
  }

  #top-nav .brand:focus, #top-nav .brand:hover {
    color: #fff;
    transition: all .5s ease;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease
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
    margin-top: 10px;
  }

  #top-nav .nav-notification {
    float: right;
    display: block;
    text-align: right;
    width: 100px;
    font-size: 12px;
    padding-top: 19px;
    cursor: pointer;
  }

  .el-link {
    color: #BECFE0;
    font-size: 13px;
    font-family: 'Open Sans',sans-serif;
  }
</style>

<script>
export default {
  methods: {
    toggleAside() {
      this.$root.$emit('toggleSideMenu');
    },

    handleCommand(command) {
      if (command === '1') {
        this.$router.push({
          path: '/profile/edit',
        });
      } else if (command === '2') {
        this.$confirm('你确定要退出系统吗？')
          .then(() => {
          })
          .catch(() => {});
      }
    },

    transitionToDashboard() {
      this.$router.push({
        path: '/',
      });
    },
  },
};
</script>
