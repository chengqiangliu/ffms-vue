<template>
  <div class="panel-stat3 fadeInRight animation-delay1" :class="bgClass">
    <div class="dropdown operate-button">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <span class="m-left-xs">操作</span> <i class="fas fa-arrow-alt-circle-down"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-if="operateType === '1'">
            <i class="fab fa-paypal"></i>发工资</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '2'" command="2-1">
            <i class="fab fa-cc-visa"></i> 添加新卡</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '2'" command="2-2">
            <i class="fas fa-exchange-alt"></i> 转账</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '3'" command="3-1">
            <i class="fas fa-money-bill-wave"></i> 取款</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '3'" command="3-2">
            <i class="fas fa-coins"></i> 存款</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '4'" command="4">
            <i class="fas fa-cash-register"></i> 录入消费信息</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '5'">
            <i class="fas fa-download"></i> 借入</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '5'">
            <i class="fas fa-angle-double-up"></i> 还款（出）</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '6'">
            <i class="fas fa-upload"></i> 借出</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '6'">
            <i class="fas fa-angle-double-down"></i> 还款（入）</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '7'">
            <i class="fas fa-hand-holding"></i> 收礼</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '7'">
            <i class="fas fa-hand-holding-usd"></i> 送礼</el-dropdown-item>
          <el-dropdown-item v-if="operateType === '8'">
            <i class="fas fa-balance-scale"></i> 录入销售信息</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div @click="onClick">
      <h2 class="h2ValueClass"> {{ value }} </h2>
      <h5 class="h5ValueClass">{{ title }}</h5>
      <div class="stat-icon">
        <i class="fa-3x" :class="iconClass"></i>
      </div>
    </div>
    <div id="refreshPresentMoneySum" class="refresh-button">
      <i class="fas fa-sync-alt"></i>
    </div>
    <div class="loading-overlay">
      <i class="loading-icon fa fa-refresh fa-spin fa-lg"></i>
    </div>
    <el-dialog v-if="operateType === '2'"
      title="新卡信息录入" :visible.sync="newCardInfoVisible"
      :close-on-click-modal="false" :append-to-body="true">
      <div class="dialog-content">
        <el-row :gutter="20" class="elrow">
          <el-col :span="10" :offset="4">
            <el-form :model="newCardInfo">
              <el-form-item label="银行卡类型" required prop="cardType" :label-width="formLabelWidth">
                <el-select v-model="newCardInfo.cardType" placeholder="请选择银行卡类型" size="mini">
                  <el-option label="储蓄卡" value="储蓄卡"></el-option>
                  <el-option label="信用卡" value="信用卡"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="开户银行" required prop="bankType" :label-width="formLabelWidth">
                <el-select v-model="newCardInfo.bankType" placeholder="请选择开户银行" size="mini">
                  <el-option label="东京三菱UFJ银行" value="东京三菱UFJ银行"></el-option>
                  <el-option label="乐天银行" value="乐天银行"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="银行卡号" required prop="cardNo" :label-width="formLabelWidth">
                <el-input v-model="newCardInfo.cardNo" placeholder="银行卡号" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="办卡人" required :label-width="formLabelWidth">
                <el-select v-model="newCardInfo.holder" placeholder="请选择办卡人" size="mini">
                  <el-option label="老公" value="老公"></el-option>
                  <el-option label="老婆" value="老婆"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="货币类型" required prop="currency" :label-width="formLabelWidth">
                <el-select v-model="newCardInfo.currency" placeholder="货币类型" size="mini">
                  <el-option label="人民币" value="人民币"></el-option>
                  <el-option label="日元" value="日元"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item v-if="newCardInfo.cardType == '信用卡'" required label="信用额度"
                prop="creditSum" :label-width="formLabelWidth">
                <el-input v-model="newCardInfo.creditSum" placeholder="信用额度" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="办卡日期" required :label-width="formLabelWidth">
                <el-date-picker type="date"
                  placeholder="请选择办卡日期"
                  v-model="newCardInfo.createCardDate"
                  size="mini">
                </el-date-picker>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="newCardInfoVisible = false">取消</el-button>
        <el-button type="primary" @click="newcard">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog v-if="operateType === '2'"
      title="转账信息录入" :visible.sync="transferInfoVisible"
      :close-on-click-modal="false" :append-to-body="true">
      <div class="dialog-content">
        <el-row :gutter="20" class="elrow">
          <el-col :span="10" :offset="4">
            <el-form :model="transferInfo">
              <el-form-item label="原卡开户银行" required prop="srcBankType"
                :label-width="formLabelWidth">
                <el-select v-model="transferInfo.srcBankType" placeholder="请选择原卡开户银行" size="mini">
                  <el-option label="东京三菱UFJ银行" value="东京三菱UFJ银行"></el-option>
                  <el-option label="乐天银行" value="乐天银行"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="原卡号" required :label-width="formLabelWidth">
                <el-select v-model="transferInfo.srcCardNo" placeholder="请选择原卡号" size="mini">
                  <el-option label="1xxx008" value="1xxx008"></el-option>
                  <el-option label="1xxx009" value="1xxx009"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="目标卡开户银行" required prop="targetBankType"
                :label-width="formLabelWidth">
                <el-select v-model="transferInfo.targetBankType" placeholder="请选择目标卡开户银行"
                  size="mini">
                  <el-option label="东京三菱UFJ银行" value="东京三菱UFJ银行"></el-option>
                  <el-option label="乐天银行" value="乐天银行"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="目标卡卡号" required :label-width="formLabelWidth">
                <el-select v-model="transferInfo.targetCardNo" placeholder="请选择目标卡卡号"
                  size="mini">
                  <el-option label="1xxx008" value="1xxx008"></el-option>
                  <el-option label="1xxx009" value="1xxx009"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="原卡转出金额" required prop="srcMoneySum"
                :label-width="formLabelWidth">
                <el-input v-model="transferInfo.srcMoneySum" placeholder="原卡转出金额"
                  size="mini"></el-input>
              </el-form-item>
              <el-form-item label="转账汇率" required prop="rate" :label-width="formLabelWidth">
                <el-input v-model="transferInfo.rate" placeholder="转账汇率"
                  size="mini"></el-input>
              </el-form-item>
              <el-form-item label="目标卡到账金额" prop="targetMoneySum" :label-width="formLabelWidth">
                <el-input v-model="transferInfo.targetMoneySum" readonly placeholder="目标卡到账金额"
                  size="mini"></el-input>
              </el-form-item>
              <el-form-item label="转账人" required :label-width="formLabelWidth">
                <el-select v-model="transferInfo.transferName" placeholder="请选择转账人" size="mini">
                  <el-option label="老公" value="老公"></el-option>
                  <el-option label="老婆" value="老婆"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="转账日期" required :label-width="formLabelWidth">
                <el-date-picker type="date"
                  placeholder="请选择转账日期"
                  v-model="transferInfo.transferDate"
                  size="mini">
                </el-date-picker>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="transferInfoVisible = false">取消</el-button>
        <el-button type="primary" @click="transfer">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog v-if="operateType === '3'"
      title="取款信息录入" :visible.sync="withdrawInfoVisible"
      :close-on-click-modal="false" :append-to-body="true">
      <div class="dialog-content">
        <el-row :gutter="20" class="elrow">
          <el-col :span="10" :offset="4">
            <el-form :model="withdrawInfo">
              <el-form-item label="取款人" required :label-width="formLabelWidth">
                <el-select v-model="withdrawInfo.accessorName" placeholder="请选择取款人" size="mini">
                  <el-option label="老公" value="老公"></el-option>
                  <el-option label="老婆" value="老婆"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="银行卡类型" required prop="bankType" :label-width="formLabelWidth">
                <el-select v-model="withdrawInfo.bankType" placeholder="请选择银行卡类型" size="mini">
                  <el-option label="东京三菱UFJ银行" value="东京三菱UFJ银行"></el-option>
                  <el-option label="乐天银行" value="乐天银行"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="银行卡号" required prop="cardNo" :label-width="formLabelWidth">
                <el-select v-model="withdrawInfo.cardNo" placeholder="请选择银行卡号" size="mini">
                  <el-option label="1xxx008" value="1xxx008"></el-option>
                  <el-option label="1xxx009" value="1xxx009"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="取款金额" required prop="moneySum" :label-width="formLabelWidth">
                <el-input v-model="withdrawInfo.moneySum" placeholder="取款金额" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="取款日期" required :label-width="formLabelWidth">
                <el-date-picker type="date"
                  placeholder="请选择取款日期"
                  v-model="withdrawInfo.withdrawDate"
                  size="mini">
                </el-date-picker>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="withdrawInfoVisible = false">取消</el-button>
        <el-button type="primary" @click="withdraw">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog v-if="operateType === '3'"
      title="存款信息录入" :visible.sync="depositInfoVisible"
      :close-on-click-modal="false" :append-to-body="true">
      <div class="dialog-content">
        <el-row :gutter="20" class="elrow">
          <el-col :span="10" :offset="4">
            <el-form :model="depositInfo">
              <el-form-item label="存款人" required :label-width="formLabelWidth">
                <el-select v-model="depositInfo.accessorName" placeholder="请选择存款人" size="mini">
                  <el-option label="老公" value="老公"></el-option>
                  <el-option label="老婆" value="老婆"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="银行卡类型" required prop="bankType" :label-width="formLabelWidth">
                <el-select v-model="depositInfo.bankType" placeholder="请选择银行卡类型" size="mini">
                  <el-option label="东京三菱UFJ银行" value="东京三菱UFJ银行"></el-option>
                  <el-option label="乐天银行" value="乐天银行"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="银行卡号" required prop="cardNo" :label-width="formLabelWidth">
                <el-select v-model="depositInfo.cardNo" placeholder="请选择银行卡号" size="mini">
                  <el-option label="1xxx008" value="1xxx008"></el-option>
                  <el-option label="1xxx009" value="1xxx009"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="存款金额" required prop="moneySum" :label-width="formLabelWidth">
                <el-input v-model="depositInfo.moneySum" placeholder="存款金额" size="mini"></el-input>
              </el-form-item>
              <el-form-item label="存款日期" required :label-width="formLabelWidth">
                <el-date-picker type="date"
                  placeholder="请选择存款日期"
                  v-model="depositInfo.depositDate"
                  size="mini">
                </el-date-picker>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="depositInfoVisible = false">取消</el-button>
        <el-button type="primary" @click="deposit">确定</el-button>
      </span>
    </el-dialog>
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
  data() {
    return {
      newCardInfoVisible: false,
      transferInfoVisible: false,
      withdrawInfoVisible: false,
      depositInfoVisible: false,
      newCardInfo: {
        cardType: '储蓄卡',
        bankType: '',
        cardNo: '',
        holder: '',
        currency: '',
        creditSum: '',
        createCardDate: '',
      },
      transferInfo: {
        srcBankType: '',
        srcCardNo: '',
        targetBankType: '',
        targetCardNo: '',
        srcMoneySum: '',
        rate: '',
        targetMoneySum: '',
        transferName: '',
        transferDate: '',
      },
      withdrawInfo: {
        accessorName: '',
        bankType: '',
        cardNo: '',
        moneySum: '',
        withdrawDate: '',
      },
      depositInfo: {
        accessorName: '',
        bankType: '',
        cardNo: '',
        moneySum: '',
        depositDate: '',
      },
      formLabelWidth: '125px',
    };
  },
  methods: {
    handleCommand(command) {
      if (command === '2-1') {
        this.newCardInfoVisible = true;
      } else if (command === '2-2') {
        this.transferInfoVisible = true;
      } else if (command === '3-1') {
        this.withdrawInfoVisible = true;
      } else if (command === '3-2') {
        this.depositInfoVisible = true;
      } else if (command === '4') {
        this.$router.push({
          path: '/consume/register',
        });
      }
    },

    newcard() {
      this.$message({
        message: 'Congrats, this is a success message.',
        type: 'success',
      });
      this.newCardInfoVisible = false;
    },
    transfer() {
      this.$message({
        message: 'Congrats, this is a success message.',
        type: 'success',
      });
      this.transferInfoVisible = false;
    },
    withdraw() {
      this.$message({
        message: 'Congrats, this is a success message.',
        type: 'success',
      });
      this.withdrawInfoVisible = false;
    },

    deposit() {
      this.$message({
        message: 'Congrats, this is a success message.',
        type: 'success',
      });
      this.depositInfoVisible = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dialog-content {
    width: 100%;
  }

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

  .el-input, .el-select {
    width: 220px;
  }
</style>
