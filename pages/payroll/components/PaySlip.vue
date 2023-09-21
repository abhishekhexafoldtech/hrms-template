<template>
    <div>
        <span>
            Year:
            <el-select v-model="selectedYear" class="m-2" placeholder="Select Year">
                <el-option
                    v-for="item in years"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
        </span>
        <span>
            Month:
            <el-select v-model="selectedMonth" class="m-2" placeholder="Select Month">
                <el-option
                    v-for="item in months"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
        </span>
    </div>
    
      <div class="d-flex justify-content-center mt-5">
        <div class="payslip w-80 border-dark shadow p-2">
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="text-center lh-1 mb-2">
                            <h6 class="fw-bold">Payslip</h6> <span class="fw-normal">Payment slip for the month of June 2021</span>
                        </div>
                        <div class="d-flex justify-content-end"> <span>Working Branch:MALAD WEST</span> </div>
                        <div class="row">
                            <div class="col-md-10">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder">EMP Code</span> <small class="ms-3">39124</small> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder">EMP Name</span> <small class="ms-3">Ashok</small> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder">PF No.</span> <small class="ms-3">101523065714</small> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder">NOD</span> <small class="ms-3">28</small> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder">ESI No.</span> <small class="ms-3"></small> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder">Mode of Pay</span> <small class="ms-3">SBI</small> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder">Designation</span> <small class="ms-3">Marketing Staff (MK)</small> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder">Ac No.</span> <small class="ms-3">*******0701</small> </div>
                                    </div>
                                </div>
                            </div>
                            <table class="mt-4 table table-bordered">
                                <thead class="bg-dark text-white">
                                    <tr>
                                        <th scope="col">Earnings</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Deductions</th>
                                        <th scope="col">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Basic</th>
                                        <td>16250.00</td>
                                        <td>PF</td>
                                        <td>1800.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">DA</th>
                                        <td>550.00</td>
                                        <td>ESI</td>
                                        <td>142.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">HRA</th>
                                        <td>1650.00 </td>
                                        <td>TDS</td>
                                        <td>0.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">WA</th>
                                        <td>120.00 </td>
                                        <td>LOP</td>
                                        <td>0.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CA</th>
                                        <td>0.00 </td>
                                        <td>PT</td>
                                        <td>0.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CCA</th>
                                        <td>0.00 </td>
                                        <td>SPL. Deduction</td>
                                        <td>500.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">MA</th>
                                        <td>3000.00</td>
                                        <td>EWF</td>
                                        <td>0.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Sales Incentive</th>
                                        <td>0.00</td>
                                        <td>CD</td>
                                        <td>0.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Leave Encashment</th>
                                        <td>0.00</td>
                                        <td colspan="2"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Holiday Wages</th>
                                        <td>500.00</td>
                                        <td colspan="2"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Special Allowance</th>
                                        <td>100.00</td>
                                        <td colspan="2"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Bonus</th>
                                        <td>1400.00</td>
                                        <td colspan="2"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Individual Incentive</th>
                                        <td>2400.00</td>
                                        <td colspan="2"></td>
                                    </tr>
                                    <tr class="border-top">
                                        <th scope="row">Total Earning</th>
                                        <td>25970.00</td>
                                        <td>Total Deductions</td>
                                        <td>2442.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-md-4"> <br> <span class="fw-bold">Net Pay : 24528.00</span> </div>
                            <div class="border col-md-8">
                                <div class="d-flex flex-column"> <span>In Words</span> <span>Twenty Five thousand nine hundred seventy only</span> </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <div class="d-flex flex-column mt-2"> <span class="fw-bolder">For Blueray Automation</span> <span class="mt-4">Authorised Signatory</span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="d-flex justify-content-center m-3">
        <button class="theme_black_btn w-15">Download</button>
      </div>
      
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectedYear = ref('')
const selectedMonth = ref('')

const months = [
  {
    value: 'Option1',
    label: 'Jan',
  },
  {
    value: 'Option2',
    label: 'Feb',
  },
  {
    value: 'Option3',
    label: 'Mar',
  },
  {
    value: 'Option4',
    label: 'Apr',
  },
  {
    value: 'Option5',
    label: 'Jun',
  },
]

const years = [
  {
    value: 'Option1',
    label: '2022',
  },
  {
    value: 'Option2',
    label: '2023',
  },
]
</script>
<style scoped>
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.border-dark{
    border: 3px solid black;
}
</style>