<template>
  <div class="main-div">
    <el-row :gutter="20" class="elrow">
      <el-col :span="16" :offset=4>
        <div>
          <el-image :src="require('../../assets/images/404.png')"></el-image>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
  .main-div {
    width: 100%;
  }

  .elrow {
    margin-top: 50px;
  }
</style>
