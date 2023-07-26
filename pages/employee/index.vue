<template>
  <section class="emp_wrap">
    <div class="container">
      <h3 class="sec_title">Create Employee</h3>
      <div class="emp_steps">
        <el-steps :active="active" finish-status="success" align-center>
          <el-step title="Candidate Details" />
          <el-step title="Address Details" />
          <el-step title="Professional Details" />
          <el-step title="Education" />
          <el-step title="Experience" />
          <el-step title="Documents" />
        </el-steps>
      </div>
      <div class="input_form">
        <!-- Candidate Details start -->
        <div v-if="active === 0">
          <candidateDetailForm ref="childRef" @changeForm="changeForm" />
        </div>

        <!-- Address Details start -->

        <div v-if="active === 1">
          <addressDetailForm ref="childRef" @changeForm="changeForm" />
        </div>

        <!-- professionalForm start -->

        <div v-if="active === 2">
          <profetionalDetailForm ref="childRef" @changeForm="changeForm" />
        </div>

        <!-- educationForm start -->

        <div v-if="active === 3">
          <educationForm ref="childRef" @changeForm="changeForm" />
        </div>

        <!-- experienceForm start -->

        <div v-if="active === 4">
          <experienceForm ref="childRef" @changeForm="changeForm" />
        </div>

        <!-- Documents Details -->

        <div v-if="active === 5">
          <documentsForm ref="childRef" @changeForm="changeForm" />
        </div>

        <el-button class="btn bg-gradient-primary" @click="next">Next
          step</el-button>
      </div>
    </div>
  </section>
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

definePageMeta({
  layout: "layout",
});


</script>
<style scoped></style>
