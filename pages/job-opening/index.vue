<template>
  <div class="container mt-8">
    <el-row class="top-header">
      <el-col :sm="24" :xs="24" :md="12" :lg="12">
        <h5>
          Craete Job Opening -
          <el-select v-model="value" size="large" clearable placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </h5>
      </el-col>
      <el-col :sm="24" :xs="24" :md="8" :lg="7">
        <el-button size="large">Cancel</el-button>
        <el-button type="primary" size="large">Save and publish</el-button>
        <el-button type="primary" size="large">Save</el-button>
      </el-col>
    </el-row>
    <el-row class="mt-4">
      <jobOpening />
    </el-row>
    <el-row>
      <AddressInformation />
    </el-row>
    <el-row>
      <ForecastDetails />
    </el-row>
  </div>
</template>

<script setup>
import ForecastDetails from "./components/ForecastDetails.vue";
import AddressInformation from "./components/addressInformation.vue";
import jobOpening from "./components/jobOpening.vue";


import { ref } from 'vue'

const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
]


definePageMeta({
  layout: "layout",
});
</script>
<style>
.top-header {
  display: flex;
  justify-content: space-between;
  background-color: rgb(229, 227, 227);
  padding: 17px 0px 10px 10px;
}
</style>
