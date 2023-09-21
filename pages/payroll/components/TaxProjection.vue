<template>
    <div>
      Year:
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
                <th scope="col">Components</th>
                <th v-for="month in months" :key="month">{{ month }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tableData" :key="index">
                <th scope="row">{{ item.component }}</th>
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
      component: 'Gross',
      values: [16250.00, 16250.00, 16250.00, 16250.00, 16250.00, 16250.00, 16250.00, 16250.00, 16250.00, 16250.00, 16250.00, 16250.00],
    },
    {
      component: 'Basic',
      values: [550.00, 550.00, 550.00, 550.00, 550.00, 550.00, 550.00, 550.00, 550.00, 550.00, 550.00, 550.00, ],
    },
    {
      component: 'HRA',
      values: [1650.00, 1650.00, 1650.00, 1650.00, 1650.00, 1650.00, 1650.00, 1650.00, 1650.00, 1650.00, 1650.00, 1650.00, ],
    },
    {
      component: 'Conveyance Allowance',
      values: [120.00, 120.00, 120.00, 120.00, 120.00, 120.00, 120.00, 120.00, 120.00, 120.00, 120.00, 120.00, ],
    },
    {
      component: 'Medical Allowance',
      values: [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
    },
    {
      component: 'Educational Allowance',
      values: [500.00, 500.00, 500.00, 500.00, 500.00, 500.00, 500.00, 500.00, 500.00, 500.00, 500.00, 500.00, ],
    },
    {
      component: 'Special Allowance',
      values: [3000.00, 3000.00, 3000.00, 3000.00, 3000.00, 3000.00, 3000.00, 3000.00, 3000.00, 3000.00, 3000.00, 3000.00, ],
    },
    {
      component: 'Sales Incentive',
      values: [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, ],
    },
    {
      component: 'Holiday Wages',
      values: [500.00, 500.00, 500.00, 500.00, 500.00, 500.00, 500.00, 500.00, 500.00, 500.00, 500.00, 500.00, ],
    },
    {
      component: 'PT',
      values: [1400.00, 1400.00, 1400.00, 1400.00, 1400.00, 1400.00, 1400.00, 1400.00, 1400.00, 1400.00, 1400.00, 1400.00, ],
    },
    {
      component: 'Income Tax',
      values: [2400.00, 2400.00, 2400.00, 2400.00, 2400.00, 2400.00, 2400.00, 2400.00, 2400.00, 2400.00, 2400.00, 2400.00, ],
    },
  ]);
  
  </script>
