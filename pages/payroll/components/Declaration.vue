<template>
    <div>
      SUMMARY OF YOUR TAX DECLARATION/PROOF SUBMISSION FOR FY
      <el-select v-model="selectedYear" class="m-2" placeholder="Select Year">
        <el-option
          v-for="item in years"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <h6>Tax Projection Sheet for {{ selectedYear }}</h6>
      <div class="d-flex justify-content-center">
        <table class="mt-4 table table-bordered w-80">
            <thead class="bg-dark text-white">
              <tr>
                <th scope="col">Particulars</th>
                <th scope="col">Old Tax Regime</th>
                <th scope="col">New Tax regime (until 31st March 2023)</th>
                <th scope="col">New Tax Regime (From 1st April 2023)</th>

              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tableData" :key="index">
                <th class="width" scope="row">{{ item.perticulars }}</th>
                <td v-for="value in item.values" :key="value">{{ value }}</td>
              </tr>
              <tr class="border-top">
                <th scope="row">Net Pay</th>
                <td>{{ netPay }}</td>
                <td></td>
                <td>{{ totalDeductions }}</td>
              </tr>
            </tbody>
          </table>
      </div>
      
    </div>
  </template>
  <script setup>
  import { ref } from 'vue';
  
  const selectedYear = ref('2022-23');
  
  const years = [
    {
      value: '2021-22',
      label: '2021-22',
    },
    {
      value: '2022-23',
      label: '2022-23',
    },
  ];
  
  const months = [
    'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'
  ];
  
  const tableData = ref([
    {
        perticulars: 'Income level for rebate eligibility',
        values: [16250.00, 16250.00, 16250.00],
    },
    {
        perticulars: 'Effective Tax-Free Salary income',
        values: [550.00, 550.00, 550.00],
    },
    {
        perticulars: 'Rebate u/s 87A',
        values: [1650.00, 1650.00, 1650.00,],
    },
    {
        perticulars: 'HRA Exemption',
        values: [120.00, 120.00, 120.00,],
    },
    {
        perticulars: 'Leave Travel Allowance (LTA)',
        values: [0.00, 0.00, 0.00,],
    },
    {
        perticulars: `Other allowances`,
        values: [500.00, 500.00, 500.00,],
    },
    {
        perticulars: 'Standard Deduction (Rs 50,000)',
        values: [3000.00, 3000.00, 3000.00,],
    },
    {
        perticulars: 'Entertainment Allowance Deduction and Professional Tax',
        values: [0.00, 0.00, 0.00,],
    },
    {
        perticulars: 'Perquisites for official purposes',
        values: [500.00, 500.00, 500.00,],
    },
    {
        perticulars: 'Interest on Home Loan u/s 24b on slef-occupied or vacant property',
        values: [1400.00, 1400.00, 1400.00,],
    },
    {
        perticulars: 'Deduction u/s 80C (EPF|LIC|ELSS|PPF|FD|Children’s tuition fee etc)',
        values: [2400.00, 2400.00, 2400.00,],
    },
    {
        perticulars: 'Employee’s (own) contribution to NPS',
        values: [2400.00, 2400.00, 2400.00,],
    },
    {
        perticulars: 'Employer’s contribution to NPS',
        values: [2400.00, 2400.00, 2400.00,],
    },
    {
        perticulars: 'Medical insurance premium – 80D',
        values: [2400.00, 2400.00, 2400.00,],
    },
    {
        perticulars: 'Disabled Individual – 80U',
        values: [2400.00, 2400.00, 2400.00,],
    },
    {
        perticulars: 'Interest on education loan – 80E',
        values: [2400.00, 2400.00, 2400.00,],
    },
    {
        perticulars: 'Interest on Electric vehicle loan – 80EEB',
        values: [2400.00, 2400.00, 2400.00,],
    },
    {
        perticulars: 'Donation to Political party/trust etc – 80G',
        values: [2400.00, 2400.00, 2400.00,],
    },
    {
        perticulars: 'Savings Bank Interest u/s 80TTA and 80TTB	',
        values: [2400.00, 2400.00, 2400.00,],
    },
    {
        perticulars: 'Other Chapter VI-A deductions',
        values: [2400.00, 2400.00, 2400.00,],
    },
    {
        perticulars: 'All contributions to Agniveer Corpus Fund – 80CCH',
        values: [2400.00, 2400.00, 2400.00,],
    },
    {
        perticulars: 'Deduction on Family Pension Income',
        values: [2400.00, 2400.00, 2400.00,],
    },
    {
        perticulars: 'Gifts upto Rs 5,000',
        values: [2400.00, 2400.00, 2400.00,],
    },
    {
        perticulars: 'Exemption on voluntary retirement 10(10C)',
        values: [2400.00, 2400.00, 2400.00,],
    },
    {
        perticulars: 'Exemption on gratuity u/s 10(10)',
        values: [2400.00, 2400.00, 2400.00,],
    },
    {
        perticulars: 'Exemption on Leave encashment u/s 10(10AA)',
        values: [2400.00, 2400.00, 2400.00,],
    },
    {
        perticulars: 'Daily Allowance',
        values: [2400.00, 2400.00, 2400.00,],
    },
    {
        perticulars: 'Transport Allowance for a specially-abled person',
        values: [2400.00, 2400.00, 2400.00,],
    },
    {
        perticulars: 'Conveyance Allowance',
        values: [2400.00, 2400.00, 2400.00,],
    }
  ]);
  
  </script>
 <style scoped>

</style>