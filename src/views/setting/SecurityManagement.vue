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
                <el-button type="danger" class="search-button"
                  :disabled="maxLoginFailCount === ''">
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
          <el-row :gutter="10">
            <el-col :span="3" :offset="2">
              <div class="condition-label">当前登录用户</div>
            </el-col>
            <el-col :span="3" :offset="12">
              <div class="condition-label">将要被锁定的用户</div>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="24">
              <select multiple="multiple" v-model="selectedLoggingUsers"
                class="select-box pull-left">
                <option v-for="user in loggingUsers" :key="user">
                  {{ user }}
                </option>
              </select>
              <div class="select-box-option">
                <el-button plain size="mini" :disabled="willBeLockedUsers.length === 0"
                    @click="moveToUnlocked">
                  <i class="fa fa-angle-left"></i>
                </el-button>
                <el-button plain size="mini" :disabled="selectedLoggingUsers.length === 0"
                  @click="moveToWillBeLocked">
                  <i class="fa fa-angle-right"></i>
                </el-button>
                <div class="seperator"></div>
                <el-button plain size="mini" :disabled="willBeLockedUsers.length === 0"
                  @click="moveAllToUnlocked">
                  <i class="fa fa-angle-double-left"></i>
                </el-button>
                <el-button plain size="mini" :disabled="loggingUsers.length === 0"
                  @click="moveAllToWillBeLocked">
                  <i class="fa fa-angle-double-right"></i>
                </el-button>
              </div>
              <select multiple="multiple" v-model="selectedWillBeLockedUsers"
                class="select-box pull-right">
                <option v-for="user in willBeLockedUsers" :key="user">
                  {{ user }}
                </option>
              </select>
            </el-col>
          </el-row>
          <el-row :gutter="10" class="submit-row">
            <el-col :span="2" :offset="21">
              <el-button type="danger" class="search-button"
                :disabled="willBeLockedUsers.length === 0">
                <i class="fa fa-sign-language"></i> 提交
              </el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-card>
          <div slot="header">
            <i class="fa fa-unlock"></i> 解除锁定用户
          </div>
          <el-row :gutter="10">
            <el-col :span="3" :offset="2">
              <div class="condition-label">被锁定的用户</div>
            </el-col>
            <el-col :span="3" :offset="12">
              <div class="condition-label">将要被解除的用户</div>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="24">
              <select multiple="multiple" v-model="selectedLockedUsers"
                class="select-box pull-left">
                <option v-for="user in lockedUsers" :key="user">
                  {{ user }}
                </option>
              </select>
              <div class="select-box-option">
                <el-button plain size="mini" :disabled="selectedWillBeUnLockedUsers.length === 0"
                    @click="moveToLocked">
                  <i class="fa fa-angle-left"></i>
                </el-button>
                <el-button plain size="mini" :disabled="selectedLockedUsers.length === 0"
                  @click="moveToWillBeUnLocked">
                  <i class="fa fa-angle-right"></i>
                </el-button>
                <div class="seperator"></div>
                <el-button plain size="mini" :disabled="willBeUnLockedUsers.length === 0"
                  @click="moveAllToLocked">
                  <i class="fa fa-angle-double-left"></i>
                </el-button>
                <el-button plain size="mini" :disabled="lockedUsers.length === 0"
                  @click="moveAllToWillBeUnLocked">
                  <i class="fa fa-angle-double-right"></i>
                </el-button>
              </div>
              <select multiple="multiple" v-model="selectedWillBeUnLockedUsers"
                class="select-box pull-right">
                <option v-for="user in willBeUnLockedUsers" :key="user">
                  {{ user }}
                </option>
              </select>
            </el-col>
          </el-row>
          <el-row :gutter="10" class="submit-row">
            <el-col :span="2" :offset="21">
              <el-button type="danger" class="search-button"
               :disabled="willBeUnLockedUsers.length === 0">
                <i class="fa fa-sign-language"></i> 提交
              </el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <div style="height: 60px;"></div>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';

export default {
  data() {
    return {
      maxLoginFailCount: 0,
      selectedLoggingUsers: [],
      loggingUsers: [],
      selectedWillBeLockedUsers: [],
      willBeLockedUsers: [],
      selectedLockedUsers: [],
      lockedUsers: [],
      selectedWillBeUnLockedUsers: [],
      willBeUnLockedUsers: [],
    };
  },

  methods: {
    moveToWillBeLocked() {
    },

    moveAllToWillBeLocked() {
    },

    moveToUnlocked() {
    },

    moveAllToUnlocked() {
    },

    moveToWillBeUnLocked() {
    },

    moveAllToWillBeUnLocked() {
    },

    moveToLocked() {
    },

    moveAllToLocked() {
    },
  },
  components: {
    BreadCrumb,
  },
};
</script>

<style scoped>
  .login-count-div {
    margin: 15px 0 8px 0;
    padding-bottom: 10px;
  }

  .submit-row {
    border-top: 1px solid #eee;
    margin-top: 10px;
    padding-top: 15px;
  }

  .select-box {
    display: inline-block;
    list-style: none;
    background: #fff;
    padding: 5px;
    width: 40%;
    height: 200px !important;
    font-size: 12px;
    line-height: 1.42857143;
    color: #555;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .pull-left {
    float: left!important;
  }

  .pull-right {
    float: right!important;
  }

  .seperator {
    padding-top: 10px;
  }

  .select-box-option {
    position: absolute;
    left: 50%;
    padding-top: 50px;
    margin-left: -60px;
    display: inline-block;
    height: 200px;
    width: 120px;
    text-align: center
  }
</style>
