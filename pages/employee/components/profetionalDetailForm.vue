<template>
  <el-form :inline="true" :model="professionalForm" :rules="professionalFormRules" ref="professionalFormRef" label-width="120px" label-position="top">
    <h3 class="form_title">Professional Details</h3>
    <el-row>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Employee ID">
          <el-input placeholder="Employee ID" v-model="professionalForm.employee_id" required></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Date of Joining" prop="date_of_joining">
          <el-date-picker v-model="professionalForm.date_of_joining" type="date" placeholder="Date of Joining"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Probation Period" prop="probation_period">
          <el-input placeholder="Probation Period" v-model="professionalForm.probation_period" required></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Employee Type" prop="employee_type">
          <el-select v-model="professionalForm.employee_type" placeholder="Employee Type" style="width: 100%;" required>
            <el-option label="Full Time" value="Full Time"></el-option>
            <el-option label="Part Time" value="Part Time"></el-option>
            <!-- Add more employee types as needed -->
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Work Location">
          <el-input placeholder="Work Location" v-model="professionalForm.work_location" required></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Designation">
          <el-input placeholder="Designation" v-model="professionalForm.designation" required></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Job Title">
          <el-input placeholder="Job Title" v-model="professionalForm.job_title" required></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Department">
          <el-input placeholder="Department" v-model="professionalForm.department" required></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Current CTC">
          <el-input placeholder="Current CTC" v-model="professionalForm.current_ctc" required></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup>
import { ref, defineExpose, defineEmits } from "vue";
const emit = defineEmits();

// Professional Form
const professionalForm = reactive({
  employee_id: "",
  date_of_joining: null,
  probation_period: "",
  employee_type: "",
  work_location: "",
  designation: "",
  job_title: "",
  department: "",
  current_ctc:""
});

// Professional form validation
const professionalFormRules = ref({
  employee_id: [
    { required: true, message: "Please enter Employee ID", trigger: "blur" },
  ],
  date_of_joining: [
    { required: true, message: "Please select Date of Joining", trigger: "change" },
  ],
  probation_period: [
    { required: true, message: "Please enter Probation Period", trigger: "blur" },
  ],
  employee_type: [
    { required: true, message: "Please select Employee Type", trigger: "change" },
  ],
  work_location: [
    { required: true, message: "Please enter Work Location", trigger: "blur" },
  ],
  designation: [
    { required: true, message: "Please enter Designation", trigger: "blur" },
  ],
  job_title: [
    { required: true, message: "Please enter Job Title", trigger: "blur" },
  ],
  department: [
    { required: true, message: "Please enter Department", trigger: "blur" },
  ],
});

// Professional Form Ref
const professionalFormRef = ref(null);

// Handle Professional Form Submission
const handleProfessionalForm = () => {
  console.log("Professional Form Data:", JSON.stringify(professionalForm));
 emit("changeForm");
  professionalFormRef.value.validate((valid) => {
    if (valid) {
      console.log("Professional Form Data:", JSON.stringify(professionalForm));
      // Your form submission logic here...
      emit("changeForm");
    }
    // If form validation fails, prevent moving to the next step
    return false;
  });
};

defineExpose({
  handleProfessionalForm,
});
</script>
<style></style>
