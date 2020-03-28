<template>
  <div>
    <div id="top-nav">
      <a class="brand"> <span>家庭财务</span>
        <span class="text-toggle">管理系统</span>
      </a>
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
    width: 194px;
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
