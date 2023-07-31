<template>
  <div>
    <div class="title_flex mb-15">
      <h3 class="form_title">Education Details</h3>
      <el-button class="add_btn" @click="incrementEducation"><i class="ri-add-line"></i></el-button>
    </div>
    <el-form
      ref="educationFormRef"
      v-for="(form, index) in educationFormData"
      :key="index"
      :inline="true"
      :model="form"
      :rules="educationFormRules"
      label-width="120px"
      label-position="top"
    >
      <el-row class="w-100">
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="Qualification Type" prop="qualification_type">
            <el-select v-model="form.qualification_type" style="width: 100%;" placeholder="Qualification Type" required>
              
              <el-option disabled label="Select Qualification Type"></el-option>
              <el-option v-for="type in qualificationTypes" :key="type" :value="type" :label="type">
              </el-option>
            </el-select>

          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="Course Name" prop="course_name">
            <el-input placeholder="Course Name" v-model="form.course_name" required></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="Course Type" prop="course_type">
            <el-select v-model="form.course_type" style="width: 100%;" placeholder="Course Type" required>
              <el-option label="Full-time" value="Full-time"></el-option>
              <el-option label="Part-time" value="Part-time"></el-option>
        </el-select>

          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="Stream" prop="stream">
            <el-input placeholder="Stream" v-model="form.stream" required></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="Start Date" prop="start_date">
            <el-date-picker
              v-model="form.start_date"
              type="date"
              placeholder="Start Date"
              required
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="End Date" prop="end_date">
            <el-date-picker
              v-model="form.end_date"
              type="date"
              placeholder="End Date"
              required
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="College Name" prop="college_name">
            <el-input placeholder="College Name" v-model="form.college_name" required></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <el-form-item label="University Name" prop="university_name">
            <el-input placeholder="University Name" v-model="form.university_name" required></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="title_flex m-0" v-if="educationFormData.length > 1">
      <span></span>
      <el-button class="add_btn" @click="decrementEducation"><i class="ri-subtract-line"></i></el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineExpose, defineEmits, nextTick } from "vue";
const education = ref(1);
const emit = defineEmits();``

// Qualification Type options
const qualificationTypes = ref([
  "Graduation",
  "Postgraduation",
  "Diploma",
  "PhD",
  "Other",
]);

// educationForm
const educationFormData = ref([
  {
    qualification_type: "",
    course_name: "",
    course_type: "",
    stream: "",
    start_date: "",
    end_date: "",
    college_name: "",
    university_name: "",
  },
]);

// education form validation
const educationFormRules = ref({
  qualification_type: [{ required: true, message: "Please select qualification type", trigger: "change" }],
  course_name: [{ required: true, message: "Please enter course name", trigger: "blur" }],
  course_type: [{ required: true, message: "Please select course type", trigger: "change" }],
  stream: [{ required: true, message: "Please enter stream", trigger: "blur" }],
  start_date: [{ required: true, message: "Please select start date", trigger: "change" }],
  end_date: [{ required: true, message: "Please select end date", trigger: "change" }],
  college_name: [{ required: true, message: "Please enter college name", trigger: "blur" }],
  university_name: [{ required: true, message: "Please enter university name", trigger: "blur" }],
});

// Education
const incrementEducation = () => {
  educationFormData.value.push({
    qualification_type: "",
    course_name: "",
    course_type: "",
    stream: "",
    start_date: "",
    end_date: "",
    college_name: "",
    university_name: "",
  });
  education.value = educationFormData.value.length;
};

const decrementEducation = () => {
  educationFormData.value.pop();
  education.value = educationFormData.value.length;
};

const educationFormRef = ref(null);

const handleEducationForm = () => {
  console.log("EducationForm Data:", JSON.stringify(educationFormData.value));
  emit("changeForm");
  educationFormData.value.forEach((form, index) => {
    educationFormRef.value[index].validate((valid) => {
      if (valid) {
        console.log("EducationForm Data:", JSON.stringify(educationFormData.value));
        emit("changeForm");
        // Your form submission logic here...
      } else {
        // If form validation fails, prevent moving to the next step
        return false;
      }
    });
  });
};


defineExpose({
  handleEducationForm,
});
</script>

<style>
</style>

