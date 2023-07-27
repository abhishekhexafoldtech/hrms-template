<template>
  <p @click="incrementEducation" class="float-end">
    <i class="ri-add-circle-fill w-50"></i>
  </p>
  <h3 class="form_title">Education Details</h3>

  <el-form ref="educationFormRef" v-for="(form, index) in educationFormData" :key="index" :inline="true" :model="form"
    :rules="educationFormRules" label-width="120px" label-position="top">
    <el-row>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="School Name" prop="school_name">
          <el-input placeholder="School Name" v-model="form.school_name" required></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Degree/Diploma" prop="degree_diploma">
          <el-input placeholder="Degree/Diploma" v-model="form.degree_diploma" required></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Field(s) of Study" prop="field_of_study">
          <el-input placeholder="Field(s) of Study" v-model="form.field_of_study" required></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Date of Completion" prop="date_of_completion">
          <el-input placeholder="Date of Completion" v-model="form.date_of_completion" required></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Additional Notes" prop="additional_notes">
          <el-input placeholder="Additional Notes" v-model="form.additional_notes" required></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
  <p v-if="education > 1" @click="decrementEducation" class="float-end">
    <i class="ri-subtract-line"></i>
  </p>
</template>

<script setup>
import { ref, defineExpose, defineEmits, nextTick } from "vue";
const education = ref(1);
const emit = defineEmits();

// educationForm
const educationFormData = ref([
  {
    school_name: "",
    degree_diploma: "",
    field_of_study: "",
    date_of_completion: "",
    additional_notes: "",
  },
]);

//education form validation

const educationFormRules = ref({
  school_name: [
    {
      required: true,
      message: "Please enter the school name",
      trigger: "blur",
    },
  ],
  degree_diploma: [
    {
      required: true,
      message: "Please enter the degree/diploma",
      trigger: "blur",
    },
  ],
  field_of_study: [
    {
      required: true,
      message: "Please enter the field of study",
      trigger: "blur",
    },
  ],
  date_of_completion: [
    {
      required: true,
      message: "Please enter the date of completion",
      trigger: "blur",
    },
  ],
  additional_notes: [
    {
      required: true,
      message: "Please enter additional notes",
      trigger: "blur",
    },
  ],
});

//Education

const incrementEducation = (index) => {
  educationFormData.value.push({
    school_name: "",
    degree_diploma: "",
    field_of_study: "",
    date_of_completion: "",
    additional_notes: "",
  });
  education.value = education.value + 1;
};

const decrementEducation = () => {
  educationFormData.value.pop();
  education.value = education.value - 1;
};

const educationFormRef = ref(null);

const handleEducationForm = () => {
  // emit("changeForm")
  educationFormData.value.forEach((e, i) => {
    educationFormRef.value[i].validate((valid) => {
      if (valid) {
        console.log(
          "EducationForm Data:",
          JSON.stringify(educationFormData.value)
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
  handleEducationForm,
});
</script>

<style></style>
