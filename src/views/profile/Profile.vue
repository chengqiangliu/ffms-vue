<template>
  <div class="main-div">
    <BreadCrumb subTitle="个人信息" />
    <div class="shadow">
      <el-row :gutter="20" class="elrow">
        <el-col :span="16" :offset=4>
          <div>
            <el-image :src="require('../../assets/images/404.png')"></el-image>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
  .main-div {
    width: 100%;
    height: 100%;
  }

  .elrow {
    margin-top: 20px;
  }

  .el-input, .el-select {
    width: 220px;
  }

  .el-form-item {
    margin-bottom: 18px;
  }

  .shadow {
    height: 75%;
    margin: 50px 20px 70px 20px;
    -webkit-box-shadow: 0 12px 12px -4px rgba(0,0,0,.1);
    -moz-box-shadow: 0 12px 12px -4px rgba(0,0,0,.1);
    box-shadow: 0 12px 12px -4px rgba(0,0,0,.1);
  }
</style>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';

export default {
  data() {
    return {
    };
  },

  methods: {
  },

  components: {
    BreadCrumb,
  },
};
</script>
