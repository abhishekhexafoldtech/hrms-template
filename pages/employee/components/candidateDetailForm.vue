<template>
  <div class="form-container">
    <div class="main-form-container">
      <div class="ms-3">
        <el-form
          ref="candidateDetailFormRef"
          :inline="true"
          :model="candidateForm"
          label-width="120px"
          label-position="top"
          :rules="candidateFormRules"
        >
          <div class="row">
            <!-- first row -->
            <div class="row">
              <div class="col-12 col-md-4">
                <el-form-item label="Email" prop="email">
                  <el-input
                    style="width: 100%"
                    placeholder="Email"
                    v-model="candidateForm.email"
                    type="email"
                    required
                  ></el-input>
                </el-form-item>
              </div>

              <div class="col-12 col-md-4">
                <el-form-item label="Phone" prop="phone">
                  <el-input
                    style="width: 100%"
                    placeholder="Phone"
                    v-model="candidateForm.phone"
                    type="tel"
                    required
                  ></el-input>
                </el-form-item>
              </div>

              <div class="col-12 col-md-4">
                <el-form-item label="Aadhaar Card Number" prop="aadhaar">
                  <el-input
                    style="width: 100%"
                    placeholder="Aadhaar Card"
                    v-model="candidateForm.aadhaar"
                    required
                  ></el-input>
                </el-form-item>
              </div>
            </div>

            <!-- second row -->

            <div class="row">
              <div class="col-12 col-md-4">
                <el-form-item label="PAN Card Number" prop="pan">
                  <el-input
                    style="width: 100%"
                    placeholder="PAN Card"
                    v-model="candidateForm.pan"
                    required
                  ></el-input>
                </el-form-item>
              </div>

              <div class="col-12 col-md-4">
                <el-form-item label="Photo" prop="imageUrl">
                  <el-upload
                    class="avatar-uploader photo_upload py-4 px-5"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    :rules="[imageUrlRule]"
                  >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon"
                      ><Plus
                    /></el-icon>
                  </el-upload>
                </el-form-item>
                <span v-show="isImageUploaded" class="text-danger"
                  >plese upload image</span
                >
              </div>
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Plus } from "@element-plus/icons-vue";
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
const imageUrlRule = ref({
  validator: () => {
    if (isImageUploaded.value) {
      // isImageUploaded.value = false;
    } else {
      isImageUploaded.value = true;
    }
  },
  trigger: "blur",
});

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
  // Validate the candidateForm
  candidateDetailFormRef.value.validate((valid) => {
    if (valid) {
      // Both form and image are valid, proceed with form submission logic
      console.log("Candidate Form Data:", JSON.stringify(candidateForm));
      console.log("Image URL:", imageUrl.value);
      emit("changeForm");
      // Your form submission logic here...
    } else if (!isImageUploaded.value) {
      // isImageUploaded.value = true;
    }
    // If form validation fails, prevent moving to the next step
    return false;
  });
};
defineExpose({
  handleCandidateDetail,
});
</script>
<style>
.photo_upload {
  border: 1px solid rgb(232, 220, 220);
  border-radius: 5px;
}
</style>
