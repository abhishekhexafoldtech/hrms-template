<template>
  <div class="mt-10">
    <div>
      <leaveForm ref="dialogFormVisibleRef" />
    </div>
    <el-button text @click="handleDialogFormVisible"> Apply Leave </el-button>
  </div>
</template>
<script setup>
import {ref} from "vue";
import leaveForm from "./leaveForm.vue";
//called Chil component function
const dialogFormVisibleRef = ref(null);
const handleDialogFormVisible = () => {
  dialogFormVisibleRef.value.dialogFormVisibleFun();
};
definePageMeta({
  layout: "layout",
});
</script>
<style></style>
