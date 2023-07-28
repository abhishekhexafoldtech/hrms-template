<template>
  <div class="container">
    <el-form label-position="right" label-width="160px">
      <h5>Job Opening Information</h5>
      <el-row :gutter="20" style="justify-content: space-between">
        <el-col :span="8" :xs="24" :sm="24" :md="12" :lg="10">
          <el-form-item label="Posting Title">
            <el-input size="large" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="Contact Name">
            <el-input size="large" placeholder="">
              <template #append>
                <el-icon><DocumentCopy /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="Assigned Recruiter(s)">
            <el-input size="large" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="Target Date">
            <el-input size="large" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="Job Opening Status">
            <el-select
              v-model="value"
              placeholder="Select"
              size="large"
              style="width: 100%"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Industry">
            <el-select
              v-model="value"
              placeholder="Select"
              size="large"
              style="width: 100%"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Salary">
            <el-select
              v-model="value"
              placeholder="Select"
              size="large"
              style="width: 100%"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="8" :xs="24" :sm="24" :md="12" :lg="10">
          <el-form-item label="Client Name">
            <el-input size="large" placeholder="">
              <template #append>
                <el-icon><DocumentCopy /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="Account Manager">
            <el-select
              v-model="value"
              placeholder="Select"
              size="large"
              style="width: 100%"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Date Opened">
            <el-input size="large" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="Job Type">
            <el-select
              v-model="value"
              placeholder="Select"
              size="large"
              style="width: 100%"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Work Experience">
            <el-select
              v-model="value"
              placeholder="Select"
              size="large"
              style="width: 100%"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Required Skill">
            <el-input size="large" placeholder=""></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script setup>
import { ref } from "vue";

const value = ref("");

const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];

definePageMeta({
  layout: "layout",
});
</script>
<style></style>
