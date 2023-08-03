<template>
    <section class="emp_wrap">
      <div class="container">
        <h3 class="sec_title" v-if="active<6">Create Employee</h3>
        <h3 class="sec_title" v-if="active>5">Employee Successfully Created</h3>
        <div class="emp_steps">
          <el-steps :active="active" finish-status="success" align-center>
            <el-step title="Candidate Details" />
            <el-step title="Professional Details"/>
            <el-step title="Address Details" />
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

          <!-- professionalForm start -->
  
          <div v-if="active === 1">
            <profetionalDetailForm ref="childRef" @changeForm="changeForm" />
          </div>
  
          <!-- Address Details start -->
  
          <div v-if="active === 2">
            <addressDetailForm ref="childRef" @changeForm="changeForm" />
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
  
          <!-- Success -->
  
          <div v-if="active === 6">
            <successPage/>
          </div>
  
          <div class="d-flex justify-content-between">
            <el-button v-if="active >0 && active < 6" type="primary" class="btn px-5" @click="backPage"
            > Back </el-button
          >
          <el-button v-if="active < 6" class="btn bg-gradient-primary" @click="nextPage"
            >Next step</el-button
          >
          </div>
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
  import successPage from "./components/successPage.vue";
  
  import { ref, nextTick } from "vue";
  const childRef = ref(null);
  const active = ref(0);
  
  //change forms
  const nextPage = async () => {
    await nextTick();
    if (active.value === 0) {
      childRef.value.handleCandidateDetail();
    } else if (active.value === 1) {
      childRef.value.handleProfessionalForm();
    } else if (active.value === 2) {
      childRef.value.handleAddressForm();
    } else if (active.value === 3) {
      childRef.value.handleEducationForm();
    } else if (active.value === 4) {
      childRef.value.handleExperienceForm();
    } else if (active.value === 5) {
      childRef.value.handleDocumentForm();
    }
  };

  //backPage

const backPage=()=>{
  active.value = active.value - 1;
}  

//Change form
  
  const changeForm = () => {
    active.value = active.value + 1;
  };
  
  definePageMeta({
    layout: "layout",
  });
  </script>
  <style scoped></style>
  