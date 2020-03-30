<template>
  <div class="panel-stat3 fadeInRight animation-delay1" :class="bgClass" @click="onClick">
    <div class="dropdown operate-button">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <span class="m-left-xs">操作</span> <i class="fa fa-arrow-circle-o-down fa-lg"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-if="operateType === '1'">
            <i class="fa fa-paypal fa-lg"></i>发工资</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '2'">
            <i class="fa fa-plus fa-lg"></i> 添加新卡</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '2'">
            <i class="fa fa-edit fa-lg"></i> 存款</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '2'">
            <i class="fa fa-exchange fa-lg"></i> 转账</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '3'">
            <i class="fa fa-edit fa-lg"></i> 取款</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '4'" command="4">
            <i class="fa fa-edit fa-lg"></i> 录入消费信息</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '5'">
            <i class="fa fa-edit fa-lg"></i> 借入</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '5'">
            <i class="fa fa-share-square-o fa-lg"></i> 还款（出）</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '6'">
            <i class="fa fa-edit fa-lg"></i> 借出</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '6'">
            <i class="fa fa-reply fa-lg"></i> 还款（入）</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '7'">
            <i class="fa fa-gift fa-lg"></i> 收礼</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '7'">
            <i class="fa fa-gift fa-lg"></i> 送礼</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '8'">
            <i class="fa fa-edit fa-lg"></i> 录入销售信息</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div>
      <h2 class="h2ValueClass"> {{ value }} </h2>
      <h5 class="h5ValueClass">{{ title }}</h5>
      <div class="stat-icon">
        <i class="fa fa-3x" :class="iconClass"></i>
      </div>
    </div>
    <div id="refreshPresentMoneySum" class="refresh-button">
      <i class="fa fa-refresh"></i>
    </div>
    <div class="loading-overlay">
      <i class="loading-icon fa fa-refresh fa-spin fa-lg"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatisticsPanel',
  props: {
    title: String,
    value: String,
    bgClass: String,
    iconClass: String,
    operateType: String,
    onClick: Function,
  },
  methods: {
    handleCommand() {
      this.$router.push({
        path: '/consume/register',
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .panel-stat3 {
    position: relative;
    /*overflow: hidden;*/
    padding: 20px 20px 5px 20px;
    color: #fff;
    cursor: pointer;
    border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px
  }

  .panel-stat3 .stat-icon {
    position: absolute;
    top: 20px;
    right: 10px;
    font-size: 30px;
    opacity: .3
  }

  .panel-stat3 .refresh-button {
    position: absolute;
    top: 10px;
    right: 10px;
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease;
    color: rgba(0, 0, 0, .3)
  }

  .panel-stat3 .operate-button {
    position: absolute;
    top: 10px;
    left: 10px;
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease;
    color: rgba(0, 0, 0, .3);
    font-size: 12px;
  }

  .panel-stat3 .el-dropdown-link:hover {
    color: #fff;
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease
  }

  .panel-stat3 .refresh-button:hover {
    color: #fff;
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease
  }

  .bg-info {
    background-color: #6bafbd;
    color: #fff
  }

  .bg-success {
    background-color: #65cea7;
    color: #fff
  }

  .bg-danger {
    background-color: #fc8675 !important;
    color: #fff !important
  }

  .bg-warning {
    background-color: #f3ce85;
    color: #fff
  }

  .fadeInRight {
    animation-name: fadeInRight;
    -webkit-animation-name: fadeInRight;
    -moz-animation-name: fadeInRight;
    -ms-animation-name: fadeInRight;
    -o-animation-name: fadeInRight;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    -ms-animation-duration: 1s;
    -o-animation-duration: 1s
  }

  .animation-delay1 {
    animation-delay: .1s;
    -webkit-animation-delay: .1s;
    -moz-animation-delay: .1s;
    -ms-animation-delay: .1s;
    -o-animation-delay: .1s;
    animation-timing-function: ease;
    -webkit-animation-timing-function: ease;
    -moz-animation-timing-function: ease;
    -ms-animation-timing-function: ease;
    -o-animation-timing-function: ease;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -ms-animation-fill-mode: both;
    -o-animation-fill-mode: both
  }

  .m-left-xs {
    margin-left: 5px
  }

  a {
    color: #555;
    text-decoration: none;
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease
  }

  a:focus, a:hover {
    color: #999;
    text-decoration: none;
    transition: all .2s ease;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease
  }

  .h2ValueClass {
    margin-top: 15px;
    margin-bottom: 0;
  }

  .h5ValueClass {
    margin-top: 10px;
  }

  .loading-overlay {
  position: absolute;
  display: none;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .4);
  text-align: center
  }

  .loading-overlay.active {
    display: block
  }

  .loading-overlay .loading-icon {
    position: absolute;
    top: 45%;
    left: 50%;
    color: #fff;
    animation: fa-spin .8s infinite linear;
    -webkit-animation: fa-spin .8s infinite linear;
    -moz-animation: fa-spin .8s infinite linear;
    -ms-animation: fa-spin .8s infinite linear;
    -o-animation: fa-spin .8s infinite linear
  }
</style>
