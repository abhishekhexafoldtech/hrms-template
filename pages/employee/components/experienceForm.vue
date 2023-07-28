<template>
  <div class="title_flex mb-15">
    <h3 class="form_title">Experience Details</h3>
    <el-button class="add_btn" @click="incrementExperience"><i class="ri-add-line"></i></el-button>
  </div>

  <el-form v-for="(form, index) in experienceFormData" :inline="true" key="index" ref="experienceFormRef" :model="form"
    :rules="experienceFormRules" label-width="120px" label-position="top">
    <el-row class="w-100">
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Occupation" prop="occupation">
          <el-input style="width: 100%" placeholder="Occupation" v-model="form.occupation" required></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Company" prop="company">
          <el-input style="width: 100%" placeholder="Company" v-model="form.company" required></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Summary" prop="summary">
          <el-input style="width: 100%" placeholder="Summary" v-model="form.summary" required></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Duration" prop="duration">
          <el-input style="width: 100%" placeholder="Duration" v-model="form.duration" required></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Currently Work Here" prop="currently_work_here">
          <el-input style="width: 100%" placeholder="Currently Work Here" v-model="form.currently_work_here"
            required></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
  <div class="title_flex m-0" v-if="experience > 1">
    <span></span>
    <el-button class="add_btn" @click="decrementExperience"><i class="ri-subtract-line"></i></el-button>
  </div>
</template>
<script setup>
import { ref, defineExpose, defineEmits } from "vue";
const experience = ref(1);
const minusIcon = ref(true);
const emit = defineEmits();
// experienceForm
const experienceFormData = ref([
  {
    occupation: "",
    company: "",
    summary: "",
    duration: "",
    currently_work_here: "",
  },
]);
const experienceForm = reactive();

//experience form validation

const experienceFormRules = ref({
  occupation: [
    {
      required: true,
      message: "Please enter your occupation",
      trigger: "blur",
    },
  ],
  company: [
    {
      required: true,
      message: "Please enter the company name",
      trigger: "blur",
    },
  ],
  summary: [
    { required: true, message: "Please enter a summary", trigger: "blur" },
  ],
  duration: [
    { required: true, message: "Please enter the duration", trigger: "blur" },
  ],
  currently_work_here: [
    {
      required: true,
      message: "Please specify if you currently work here",
      trigger: "blur",
    },
  ],
});

//Experience

const incrementExperience = () => {
  experienceFormData.value.push({
    occupation: "",
    company: "",
    summary: "",
    duration: "",
    currently_work_here: "",
  });
  experience.value = experience.value + 1;
};

const decrementExperience = () => {
  experienceFormData.value.pop();
  experience.value = experience.value - 1;
};

const experienceFormRef = ref(null)
const handleExperienceForm = () => {
  // emit("changeForm")
  experienceFormData.value.forEach((e, i) => {
    experienceFormRef.value[i].validate((valid) => {
      if (valid) {
        console.log(
          "ExperienceForm Data:",
          JSON.stringify(experienceFormData.value)
        );
        emit("changeForm")
        // Your form submission logic here...
      } else {
        // If form validation fails, prevent moving to the next step
        return false;
      }
    });
  })
};

defineExpose({
  handleExperienceForm,
});
</script>
<style></style>
