<template >
    <section class="leave_wrap ">
        <h3>Payroll</h3>
      </section>
    <div style="height: 800px;">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="Payslip" name="first">
                <el-card class="card">
                    <h5>Payslip</h5>
                    <PaySlip/>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="Salary Structure" name="second">
                <el-card class="card">
                    <h5>Salary Structure</h5>
                    <SalaryStructure/>
                </el-card>
            </el-tab-pane>

            <el-tab-pane label="Tax Projection" name="third">
                <el-card class="card">
                    <h5>Tax Projection</h5>
                    <TaxProjection/>
                </el-card>
            </el-tab-pane>

            <el-tab-pane label="Declaration" name="fourth">
                <el-card class="card">
                    <h5>Declaration</h5>
                    <Declaration/>   
                </el-card>
                                  
            </el-tab-pane>

            <el-tab-pane label="Bank Account" name="fifth">
                <BankAccount/>
            </el-tab-pane>
          </el-tabs>
    </div>
</template>

<script setup >
import BankAccount from './components/BankAccount.vue';
import TaxProjection from './components/TaxProjection.vue';
import SalaryStructure from './components/SalaryStructure.vue';
import Declaration from './components/Declaration.vue';
import PaySlip from './components/PaySlip.vue';


definePageMeta({
  layout: "layout",
});
</script>