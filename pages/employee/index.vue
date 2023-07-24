<template>
  <div class="container">
    <div class="row d-flex justify-content-center mt-4 pb-5">
      <el-steps :active="active" finish-status="success">
        <el-step title="Candidate Details" />
        <el-step title="Address Details" />
        <el-step title="Professional Details" />
        <el-step title="Education" />
        <el-step title="Experience" />
        <el-step title="Documents" />
      </el-steps>
    </div>
    <!-- Candidate Details start -->
    <div v-if="active === 0" class="row">
      <candidateDetailForm ref="childRef" @changeForm="changeForm" />
    </div>

    <!-- Address Details start -->

    <div v-if="active === 1" class="row">
      <addressDetailForm ref="childRef" @changeForm="changeForm" />
    </div>

    <!-- professionalForm start -->

    <div v-if="active === 2" class="row">
      <profetionalDetailForm ref="childRef" @changeForm="changeForm" />
    </div>

    <!-- educationForm start -->

    <div v-if="active === 3" class="row">
      <educationForm ref="childRef" @changeForm="changeForm" />
    </div>

    <!-- experienceForm start -->

    <div v-if="active === 4" class="row">
      <experienceForm ref="childRef" @changeForm="changeForm" />
    </div>

    <!-- Documents Details -->

    <div v-if="active === 5" class="row">
      <documentsForm ref="childRef" @changeForm="changeForm" />
    </div>

    <el-button
      class="float-end mb-5 fw-bold"
      style="margin-top: 12px"
      type="primary"
      @click="next"
      >Next step</el-button
    >
  </div>
</template>

<script setup>
import candidateDetailForm from "./components/candidateDetailForm.vue";
import addressDetailForm from "./components/addressDetailForm.vue";
import profetionalDetailForm from "./components/profetionalDetailForm.vue";
import educationForm from "./components/educationForm.vue";
import experienceForm from "./components/experienceForm.vue";
import documentsForm from "./components/documentsForm.vue";

import { ref, nextTick } from "vue";
const childRef = ref(null);
const active = ref(0);

//change forms
const next = async () => {
  await nextTick();
  if (active.value === 0) {
    childRef.value.handleCandidateDetail();
  } else if (active.value === 1) {
    childRef.value.handleAddressForm();
  } else if (active.value === 2) {
    childRef.value.handleProfessionalForm();
  } else if (active.value === 3) {
    childRef.value.handleEducationForm();
  } else if (active.value === 4) {
    childRef.value.handleExperienceForm();
  } else if (active.value === 5) {
    childRef.value.handleDocumentForm();
  }
};
//Change form

const changeForm = () => {
  active.value = active.value + 1;
};
</script>
<style scoped>
/* Form styling */
.form-container {
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}


/* Responsiveness */
</style>
