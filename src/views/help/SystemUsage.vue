<template>
  <div style="width: 100%;">
    <BreadCrumb subTitle="系统帮助页面" />
    <div class="shadow">
      <el-collapse accordion>
        <el-collapse-item title="系统首页" name="1">
          <div class="image-div">
            <span>登陆后进入系统首页。</span>
            <div>
              <el-image :src="require('../../assets/images/main.png')"></el-image>
            </div>
            <span>单击“安全管理”按钮，进入安全管理页面。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/usermanagement1.png')">
              </el-image> -->
              <!-- <el-image :src="require('../../assets/images/usermanagement2.png')">
              </el-image> -->
            </div>
            <span>单击“用户管理”按钮，进入用户管理页面。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/selectuser.png')"></el-image> -->
            </div>
            <span>单击“系统数据管理”按钮，进入系统数据管理页面。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/setting.png')"></el-image> -->
            </div>
            <span>单击“系统使用说明”按钮，进入系统设定页面。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/help.png')"></el-image> -->
            </div>
            <span>单击“个人信息”按钮或右上角下拉菜单的“编辑个人信息”按钮，进入个人信息页面。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/profile.png')"></el-image> -->
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="消费管理" name="2">
          <div class="image-div">
            <span>单击左侧菜单中的“消费管理”下的“录入消费信息”菜单或系统主页中“消费总额”中
              的“操作”链接下的“录入消费信息”进入录入消费信息页面。</span><br>
            <span>输入信息后，单击“录入”按钮进行录入。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/addConsume.png')"></el-image> -->
            </div>
            <span>单击左侧菜单中的“消费管理”下的“消费信息查询”菜单或单击系统主页
              中“消费总额”链接进入消费信息查询页面。</span><br>
            <div>
              <!-- <el-image :src="require('../../assets/images/selectConsume.png')"></el-image>-->
            </div>
            <span>输入查询条件后，单击“查询”按钮进行查询。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/selectConsumeResult.png')">
              </el-image>-->
            </div>
            <span>单击查询记录中的“编辑”按钮进行编辑。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/updateConsume.png')">
              </el-image>-->
            </div>
            <span>选择要删除的记录，单击“删除”按钮进行删除。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/deleteConsume.png')">
              </el-image>-->
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="工资管理" name="3">
          <div class="image-div">
            <span>单击系统主页中“工资总额”中的“操作”链接下的“发工资”进入录入工资信息页面。</span><br>
            <span>输入信息后，单击“确定”按钮进行录入。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/addSalary.png')">
              </el-image>-->
            </div>
            <span>单击左侧菜单中的“工资管理”下的“工资信息查询”菜单或单击系统主页
              中“工资总额”链接进入工资信息查询页面。</span><br>
            <div>
              <!-- <el-image :src="require('../../assets/images/selectSalary.png')">
              </el-image>-->
            </div>
            <span>输入查询条件后，单击“查询”按钮进行查询。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/selectSalaryResult.png')">
              </el-image>-->
            </div>
            <span>单击查询记录中的“编辑”按钮进行编辑。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/updateSalary.png')">
              </el-image>-->
            </div>
            <span>选择要删除的记录，单击“删除”按钮进行删除。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/deleteSalary.png')">
              </el-image>-->
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="银行卡管理" name="4">
          <div class="image-div">
            <span>单击系统主页中“银行卡总额”中的“操作”链接下的“添加新卡”进入录入银行卡信息页面。</span><br>
            <span>输入信息后，单击“确定”按钮进行录入。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/addBanckcard.png')">
              </el-image>-->
            </div>
            <span>单击左侧菜单中的“银行卡管理”下的“银行卡信息查询”菜单或单击系统主页
              中“银行卡总额”链接进入银行卡信息查询页面。</span><br>
            <div>
              <!-- <el-image :src="require('../../assets/images/selectBanckcard.png')">
              </el-image>-->
            </div>
            <span>输入查询条件后，单击“查询”按钮进行查询。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/selectBanckcardResult.png')">
              </el-image>-->
            </div>
            <span>单击查询记录中的“编辑”按钮进行编辑。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/updateBanckcard.png')">
              </el-image>-->
            </div>
            <span>选择要删除的记录，单击“删除”按钮进行删除。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/deleteBanckcard.png')">
              </el-image>-->
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="存取款管理" name="5">
          <div class="image-div">
            <span>单击系统主页中“手头现金”中的“操作”链接下的“取款”进入录入取款信息页面。</span><br>
            <span>输入信息后，单击“确定”按钮进行录入。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/withdraw.png')">
              </el-image>-->
            </div>
            <span>单击系统主页中“银行卡总额”中的“操作”链接下的“存款”进入录入存款信息页面。</span><br>
            <span>输入信息后，单击“确定”按钮进行录入。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/deposit.png')">
              </el-image>-->
            </div>
            <span>单击左侧菜单中的“银行卡管理”下的“存取款信息查询”菜单或单击系统主页
            中“手头现金”链接进入存取款信息查询页面。</span><br>
            <div>
              <!-- <el-image :src="require('../../assets/images/selectAccessCard.png')">
              </el-image>-->
            </div>
            <span>输入查询条件后，单击“查询”按钮进行查询。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/selectAccessCardResult.png')">
              </el-image>-->
            </div>
            <span>单击查询记录中的“编辑”按钮进行编辑。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/updateAccessCard.png')">
              </el-image>-->
            </div>
            <span>选择要删除的记录，单击“删除”按钮进行删除。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/deleteAccessCard.png')">
              </el-image>-->
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="转账管理" name="6">
          <div class="image-div">
            <span>单击系统主页中“银行卡总额”中的“操作”链接下的“转账”进入录入转账信息页面。</span><br>
            <span>输入信息后，单击“确定”按钮进行录入。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/addTransfer.png')">
              </el-image>-->
            </div>
            <span>单击左侧菜单中的“银行卡管理”下的“转账信息查询”菜单进入转账信息查询页面。</span><br>
            <div>
              <!-- <el-image :src="require('../../assets/images/selectTransfer.png')">
              </el-image>-->
            </div>
            <span>输入查询条件后，单击“查询”按钮进行查询。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/selectTransferResult.png')">
              </el-image>-->
            </div>
            <span>单击查询记录中的“编辑”按钮进行编辑。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/updateTransfer.png')">
              </el-image>-->
            </div>
            <span>选择要删除的记录，单击“删除”按钮进行删除。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/deleteTransfer.png')">
              </el-image>-->
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="债务管理" name="7">
          <div class="image-div">
            <span>单击系统主页中“借入总金额”中的“操作”链接下的“借入”进入借入信息录入页面。</span><br>
              <span>输入信息后，单击“确定”按钮进行录入。</span>
              <div>
                <!-- <el-image :src="require('../../assets/images/borrow.png')">
                </el-image>-->
              </div>
              <span>单击系统主页中“借入总金额”中的“操作”链接下的“还款（出）”进入还出信息录入页面。</span><br>
              <span>输入信息后，单击“确定”按钮进行录入。</span>
              <div>
                <!-- <el-image :src="require('../../assets/images/paybackOut.png')">
                </el-image>-->
              </div>
              <span>单击系统主页中“借出总金额”中的“操作”链接下的“借出”进入借出信息录入页面。</span><br>
              <span>输入信息后，单击“确定”按钮进行录入。</span>
              <div>
                <!-- <el-image :src="require('../../assets/images/lend.png')">
                </el-image>-->
              </div>
              <span>单击系统主页中“借出总金额”中的“操作”链接下的“还款（入）”进入还入信息录入页面。</span><br>
              <span>输入信息后，单击“确定”按钮进行录入。</span>
              <div>
                <!-- <el-image :src="require('../../assets/images/paybackIn.png')">
                </el-image>-->
              </div>
              <span>单击左侧菜单中的“债务管理”下的“债务信息查询”菜单，或者单击系统主页中“借入总
                金额”链接或者单击系统主页中“借出总金额”链接进入债务信息查询页面。</span><br>
              <div>
                <!-- <el-image :src="require('../../assets/images/selectDebt.png')">
                </el-image>-->
              </div>
              <span>输入查询条件后，单击“查询”按钮进行查询。</span>
              <div>
                <!-- <el-image :src="require('../../assets/images/selectDebtResult.png')">
                </el-image>-->
              </div>
              <span>单击查询记录中的“编辑”按钮进行编辑。</span>
              <div>
                <!-- <el-image :src="require('../../assets/images/updateDebt.png')">
                </el-image>-->
              </div>
              <span>选择要删除的记录，单击“删除”按钮进行删除。</span>
              <div>
                <!-- <el-image :src="require('../../assets/images/deleteDebt.png')">
                </el-image>-->
              </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="礼金管理" name="8">
          <div class="image-div">
            <span>单击左侧菜单中的“礼金管理”下的“收礼信息录入”菜单或系统主页中“礼金总额”中
              的“操作”链接下的“收礼”进入收礼信息录入页面。</span><br>
              <span>输入信息后，单击“确定”按钮进行录入。</span>
              <div>
                <!-- <el-image :src="require('../../assets/images/receivePresent.png')">
                </el-image>-->
              </div>
              <span>单击左侧菜单中的“礼金管理”下的“送礼信息录入”菜单或系统主页中“礼金总额”中
                的“操作”链接下的“送礼”进入送礼信息录入页面。</span><br>
              <span>输入信息后，单击“确定”按钮进行录入。</span>
              <div>
                <!-- <el-image :src="require('../../assets/images/sendPresent.png')">
                </el-image>-->
              </div>
              <span>单击左侧菜单中的“礼金管理”下的“礼金信息查询”菜单进入礼金信息查询页面。</span><br>
              <div>
                <!-- <el-image :src="require('../../assets/images/selectPresent.png')">
                </el-image>-->
              </div>
              <span>输入查询条件后，单击“查询”按钮进行查询。</span>
              <div>
                <!-- <el-image :src="require('../../assets/images/selectPresentResult.png')">
                </el-image>-->
              </div>
              <span>单击查询记录中的“编辑”按钮进行编辑。</span>
              <div>
                <!-- <el-image :src="require('../../assets/images/updatePresent.png')">
                </el-image>-->
              </div>
              <span>选择要删除的记录，单击“删除”按钮进行删除。</span>
              <div>
                <!-- <el-image :src="require('../../assets/images/deletePresent.png')">
                </el-image>-->
              </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="销售管理" name="9">
          <div class="image-div">
            <span>单击左侧菜单中的“销售管理”下的“录入销售信息”菜单或系统主页中“销售总额”中的“操作”链接下
              的“录入销售信息”进入录入销售信息页面。</span><br>
            <span>输入信息后，单击“录入”按钮进行录入。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/addSales.png')">
              </el-image>-->
            </div>
            <span>单击左侧菜单中的“销售管理”下的“销售信息查询”菜单或单击系统
              主页中“销售总额”链接进入销售信息查询页面。</span><br>
            <div>
              <!-- <el-image :src="require('../../assets/images/selectSales.png')">
              </el-image>-->
            </div>
            <span>输入查询条件后，单击“查询”按钮进行查询。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/selectSalesResult.png')">
              </el-image>-->
            </div>
            <span>单击查询记录中的“编辑”按钮进行编辑。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/updateSales.png')">
              </el-image>-->
            </div>
            <span>选择要删除的记录，单击“删除”按钮进行删除。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/deleteSales.png')">
              </el-image>-->
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="用户管理" name="9">
          <div class="image-div">
            <span>单击系统首页的“用户管理”按钮，进入用户管理页面。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/selectuser.png')">
              </el-image>-->
            </div>
            <span>单击用户管理页面中的“添加新用户”按钮进入添加用户页面。</span><br>
            <div>
              <!-- <el-image :src="require('../../assets/images/addUser.png')">
              </el-image>-->
            </div>
            <span>单击用户管理页面中的“查询户”按钮进行查询。</span><br>
            <div>
              <!-- <el-image :src="require('../../assets/images/selectUserResult.png')">
              </el-image>-->
            </div>
            <span>单击查询记录中的“编辑”按钮进行编辑。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/updateUser.png')">
              </el-image>-->
            </div>
            <span>选择要删除的记录，单击“删除”按钮进行删除。</span>
            <div>
              <!-- <el-image :src="require('../../assets/images/deleteUser.png')">
              </el-image>-->
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<style scoped>
  .image-div {
    padding: 0 30px;
  }

  .shadow {
    margin: 20px 20px 70px 20px;
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
