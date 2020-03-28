<template>
  <div>
    <div id="top-nav">
      <a class="brand"> <span>家庭财务</span>
        <span class="text-toggle">管理系统</span>
      </a>
      <el-button type="button" class="navbar-toggle btn" @click="toggleAside">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </el-button>
      <div class="nav-notification">
        <el-dropdown>
          <div><el-avatar icon="el-icon-user-solid"></el-avatar></div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><i class="el-icon-edit-outline"></i>Edit Profile</el-dropdown-item>
            <el-dropdown-item><i class="el-icon-lock"></i>Log out</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #top-nav .brand {
    display: block;
    text-align: center;
    font-size: 17px;
    line-height: 60px;
    width: 165px;
    color: #999;
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
    padding-top: 9px;
    cursor: pointer;
  }
</style>

<script>
export default {
  methods: {
    toggleAside() {
      this.$root.$emit('toggleSideMenu');
    },
  },
};
</script>
