<template>
  <div style="width: 100%;">
    <BreadCrumb subTitle="用户安全管理" />
    <el-row>
      <el-col>
        <el-card>
          <div slot="header">
            <i class="fa fa-cog"></i> 最大登录失败次数设定
          </div>
          <div class="login-count-div">
            <el-row :gutter="6">
              <el-col :span="7">
                <div class="condition-label">本地用户将被锁定，当你连续登录失败</div>
              </el-col>
              <el-col :span="2">
                <el-input v-model="maxLoginFailCount" placeholder="0" size="mini"></el-input>
              </el-col>
              <el-col :span="6">
                <div class="condition-label">[0-999]之后。0代表永远不会被锁定）</div>
              </el-col>
              <el-col :span="2" :offset="6">
                <el-button type="danger" class="search-button">
                  <i class="fa fa-sign-language"></i> 提交
                </el-button>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-card>
          <div slot="header">
            <i class="fa fa-lock"></i> 强制锁定用户
          </div>
          <div style="text-align: center">
            <el-transfer
              :titles="['当前登录用户', '将要被锁定用户']"
              filterable
              v-model="goodsTypeList"
              :props="{
                key: 'value',
                label: 'desc'
              }"
              :data="goodsTypeListData"
              style="text-align: left; display: inline-block">
            </el-transfer>
          </div>
          <div class="submit-div">
            <el-row :gutter="10">
              <el-col :span="2" :offset="21">
                <el-button type="danger" class="search-button">
                  <i class="fa fa-sign-language"></i> 提交
                </el-button>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-card>
          <div slot="header">
            <i class="fa fa-unlock"></i> 解除锁定用户
          </div>
          <div style="text-align: center;">
            <el-transfer
              :titles="['被锁定的用户', '将要被解除的用户']"
              filterable
              v-model="goodsTypeList"
              :props="{
                key: 'value',
                label: 'desc'
              }"
              :data="goodsTypeListData"
              style="text-align: left; display: inline-block">
            </el-transfer>
          </div>
          <div class="submit-div">
            <el-row :gutter="10">
              <el-col :span="2" :offset="21">
                <el-button type="danger" class="search-button">
                  <i class="fa fa-sign-language"></i> 提交
                </el-button>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div style="height: 60px;"></div>
  </div>
</template>

<style scoped>
  .login-count-div {
    margin: 15px 0 8px 0;
    padding-bottom: 10px;
  }

  .submit-div {
    border-top: 1px solid #eee;
    margin: 10px 0 20px 0;
    padding-top: 17px;
  }

  .el-transfer {
    font-size: 13px;
    font-family: 'Open Sans', sans-serif;
    color: #777;
  }
</style>


<script>
import BreadCrumb from '@/components/BreadCrumb.vue';

export default {
  name: 'SecurityManagement',
  methods: {
    toggleAside() {
    },
  },
  components: {
    BreadCrumb,
  },
};
</script>
