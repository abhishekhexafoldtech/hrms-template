<template>
  <el-form ref="candidateDetailFormRef" :inline="true" :model="candidateForm" label-width="120px" label-position="top"
    :rules="candidateFormRules">
    <h3 class="form_title">Candidate Details</h3>
    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-form-item label="Email" prop="email">
          <el-input placeholder="Email" v-model="candidateForm.email" type="email" required></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-form-item label="Phone" prop="phone">
          <el-input placeholder="Phone" v-model="candidateForm.phone" type="tel" required></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-form-item label="Aadhaar Card Number" prop="aadhaar">
          <el-input placeholder="Aadhaar Card" v-model="candidateForm.aadhaar" required></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-form-item label="PAN Card Number" prop="pan">
          <el-input placeholder="PAN Card" v-model="candidateForm.pan" required></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-form-item label="* Photo" prop="imageUrl">
          <el-upload :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" />
            <el-icon v-else class="avatar-uploader-icon">
              <i class="ri-add-line"></i>
            </el-icon>
          </el-upload>
          <span v-show="isImageUploaded" class="input_error">plese upload image</span>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script setup>
import { ref, defineExpose, defineEmits } from "vue";
// candidateForm
const imageUrl = ref("");
const emit = defineEmits(); //emit
const candidateForm = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  aadhaar: "",
  pan: "",
});
//defineprops

// Candidate from validation

const candidateFormRules = ref({
  email: [
    { required: true, message: "Please enter your email", trigger: "blur" },
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
      pattern: /^\d{10}$/,
      message: "Please enter a valid 10-digit phone number",
      trigger: "blur",
    },
  ],
  aadhaar: [
    {
      required: true,
      message: "Please enter your Aadhaar card number",
      trigger: "blur",
    },
    {
      pattern: /^\d{12}$/,
      message: "Please enter a valid 12-digit Aadhaar card number",
      trigger: "blur",
    },
  ],
  pan: [
    {
      required: true,
      message: "Please enter your PAN card number",
      trigger: "blur",
    },
    {
      pattern: /^\d{4}$/,
      message: "Please enter a valid PAN card number",
      trigger: "blur",
    },
  ],
});
// { pattern: /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/, message: "Please enter a valid PAN card number", trigger: "blur" },

//imageUrl
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
  // emit("changeForm");
  // Validate the candidateForm
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
