<template>
  <el-form ref="candidateDetailFormRef" :inline="true" :model="candidateForm" label-width="120px" label-position="top"
    :rules="candidateFormRules">
    <h3 class="form_title">Candidate Details</h3>
    <el-row>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="First Name" prop="firstName">
          <el-input placeholder="First Name" v-model="candidateForm.firstName" required></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Middle Name">
          <el-input placeholder="Middle Name" v-model="candidateForm.middleName"></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Last Name" prop="lastName">
          <el-input placeholder="Last Name" v-model="candidateForm.lastName" required></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Gender" prop="gender">
          <el-select v-model="candidateForm.gender" placeholder="Gender" style="width: 100%;" required>
            <el-option label="Male" value="male"></el-option>
            <el-option label="Female" value="female"></el-option>
            <el-option label="Other" value="other"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Phone" prop="phone">
          <el-input placeholder="Phone" v-model="candidateForm.phone" type="tel" required></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Alternate Phone Number" prop="alternatePhone">
          <el-input placeholder="Alternate Phone" v-model="candidateForm.alternatePhone" type="tel"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Blood Group">
          <el-input placeholder="Blood Group" v-model="candidateForm.bloodGroup"></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Date of Birth" prop="dob">
          <el-date-picker v-model="candidateForm.dob" type="date" placeholder="Date of Birth"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Marital Status">
          <el-select v-model="candidateForm.maritalStatus" style="width: 100%;" placeholder="Marital Status" required>
            <el-option label="Single" value="single"></el-option>
            <el-option label="Married" value="married"></el-option>
            <el-option label="Divorced" value="divorced"></el-option>
            <el-option label="Widowed" value="widowed"></el-option>
            <el-option label="Other" value="other"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Email" prop="email">
          <el-input placeholder="Email" v-model="candidateForm.email" type="email" required></el-input>
        </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <el-form-item label="Personal Email" prop="personal_email">
          <el-input placeholder="Personal Email" v-model="candidateForm.personal_email"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>


<script setup>
import { ref, defineExpose, defineEmits } from "vue";

const imageUrl = ref("");
const emit = defineEmits();
const candidateForm = reactive({
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  personal_email:"",
  phone: "",
  alternatePhone: "",
  bloodGroup: "",
  dob: "",
  gender: "",
  maritalStatus: "",
});


const candidateFormRules = ref({
  firstName: [
    { required: true, message: "Please enter the first name", trigger: "blur" },
  ],
  middleName: [
  { required: true, message: "Please enter the middle name", trigger: "blur" },

  ],
  lastName: [
    { required: true, message: "Please enter the last name", trigger: "blur" },
  ],
  email: [
    { required: true, message: "Please enter your email", trigger: "blur" },
    {
      type: "email",
      message: "Please enter a valid email address",
      trigger: "blur",
    },
  ],
  personal_email: [
    { required: true, message: "Please enter your personal email", trigger: "blur" },
    {
      type: "email",
      message: "Please enter a valid email address",
      trigger: "blur",
    },
  ],
  phone: [
    {
      required: true,
      message: "Please enter your phone number",
      trigger: "blur",
    },
    {
      // pattern: /^\d{10}$/,
      message: "Please enter a valid 10-digit phone number",
      trigger: "blur",
    },
  ],
  alternatePhone: [
    // Validation rules for alternate phone number can be added here if needed
  ],
  bloodGroup: [
    // Validation rules for blood group can be added here if needed
    // Example:
    { required: true, message: "Please enter your blood group", trigger: "blur" },
  ],
  dob: [
    // Validation rules for date of birth can be added here if needed
    // Example:
    { required: true, message: "Please enter your date of birth", trigger: "change" },
  ],
  gender: [
    { required: true, message: "Please select your gender", trigger: "change" },
  ],
  maritalStatus: [
    { required: true, message: "Please select your marital status", trigger: "change" },
  ],
});


const isImageUploaded = ref(false);

// Candidate Details start...........
function handleAvatarSuccess(res, file) {
  imageUrl.value = URL.createObjectURL(file.raw);
  isImageUploaded.value = false; // Set to true when the image is uploaded
}

// Function to handle avatar upload before it's sent
function beforeAvatarUpload(file) {
  const isJPG = file.type === "image/jpeg";
  const isPNG = file.type === "image/png";
  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isJPG && !isPNG) {
    alert("Only JPG and PNG formats are allowed");
  }

  if (!isLt2M) {
    alert("Image must be smaller than 2MB");
  }

  return (isJPG || isPNG) && isLt2M;
}

const candidateDetailFormRef = ref(null);
const handleCandidateDetail = () => {
  emit("changeForm");
  console.log("Candidate Form Data:", JSON.stringify(candidateForm));
  candidateDetailFormRef.value.validate((valid) => {
    if (valid && imageUrl.value) {
      isImageUploaded.value = false;
      // Both form and image are valid, proceed with form submission logic
      console.log("Candidate Form Data:", JSON.stringify(candidateForm));
      console.log("Image URL:", imageUrl.value);
      emit("changeForm");
      // Your form submission logic here...
    } else if (!imageUrl.value) {
      isImageUploaded.value = true;
    }
    // If form validation fails, prevent moving to the next step
    return false;
  });
};

defineExpose({
  handleCandidateDetail,
});
</script>

<style></style>
