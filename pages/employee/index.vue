<template>
  <div class="container">
    <div class="row d-flex justify-content-center mt-4">
      <el-steps :active="active" finish-status="success">
        <el-step title="Candidate Details" />
        <el-step title=" Address Details" />
        <el-step title="Professional Details" />
        <el-step title="Education" />
        <el-step title="Experience" />
        <el-step title="Documents" />
      </el-steps>
    </div>
    <!-- Candidate Details start -->
    <div v-show="active === 0" class="row">
      <h2
        class="my-3"
        style="font-family: sans-serif; color: rgb(82, 162, 164)"
      >
        Candidate Details
      </h2>
      <div class="form-container">
        <div class="main-form-container">
          <div class="ms-3">
            <el-form
              :inline="true"
              :model="candidateForm"
              label-width="120px"
              label-position="top"
            >
              <div class="row">
                <!-- first row -->
                <div class="row">
                  <div class="col-12 col-md-4">
                    <el-form-item label="Email">
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
                    <el-form-item label="Phone">
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
                    <el-form-item label="Aadhaar Card Number">
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
                    <el-form-item label="PAN Card Number">
                      <el-input
                        style="width: 100%"
                        placeholder="PAN Card"
                        v-model="candidateForm.pan"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>

                  <div class="col-12 col-md-4">
                    <el-form-item label="Photo">
                      <el-upload
                        class="avatar-uploader photo_upload py-4 px-5"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                      >
                        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                        <el-icon v-else class="avatar-uploader-icon"
                          ><Plus
                        /></el-icon>
                      </el-upload>
                    </el-form-item>
                  </div>
                </div>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>

    <!-- Address Details start -->

    <div v-show="active === 1" class="row">
      <h2
        class="my-3"
        style="font-family: sans-serif; color: rgb(82, 162, 164)"
      >
        Address Details
      </h2>
      <div class="form-container">
        <div class="main-form-container">
          <div class="ms-3">
            <el-form
              :inline="true"
              class="demo-form-inline"
              :model="addressForm"
              label-width="120px"
              label-position="top"
            >
              <div class="row">
                <!-- Present Address Details -->
                <p>Present address</p>
                <div class="row">
                  <div class="col-12 col-md-8">
                    <el-form-item label="Address">
                      <el-input
                        style="width: 100%"
                        placeholder="Address"
                        v-model="addressForm.presentAddress.address"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-4">
                    <el-form-item label="State">
                      <el-input
                        style="width: 100%"
                        placeholder="State"
                        v-model="addressForm.presentAddress.state"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>
                  <div class="col-12 col-md-4">
                    <el-form-item label="Country">
                      <el-input
                        style="width: 100%"
                        placeholder="Country"
                        v-model="addressForm.presentAddress.country"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-4">
                    <el-form-item label="PIN">
                      <el-input
                        style="width: 100%"
                        placeholder="PIN"
                        v-model="addressForm.presentAddress.pin"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>
              </div>
              <!-- Permanent Address Details -->
              <div class="row">
                <p>Permanent address</p>
                <div class="row">
                  <div class="col-12 col-md-8">
                    <el-form-item label="Address">
                      <el-input
                        style="width: 100%"
                        placeholder="Address"
                        v-model="addressForm.permanentAddress.address"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-4">
                    <el-form-item label="State">
                      <el-input
                        style="width: 100%"
                        placeholder="State"
                        v-model="addressForm.permanentAddress.state"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>
                  <div class="col-12 col-md-4">
                    <el-form-item label="Country">
                      <el-input
                        style="width: 100%"
                        placeholder="Country"
                        v-model="addressForm.permanentAddress.country"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-4">
                    <el-form-item label="PIN">
                      <el-input
                        style="width: 100%"
                        placeholder="PIN"
                        v-model="addressForm.permanentAddress.pin"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>

    <div v-show="active === 2" class="row">
      <h1>Professional Details</h1>
    </div>
    <div v-show="active === 3" class="row">
      <h1>Education</h1>
    </div>
    <div v-show="active === 4" class="row">
      <h1>Experience</h1>
    </div>
    <div v-show="active === 5" class="row">
      <h1>Documents</h1>
    </div>

    <el-button
      class="bg-gradient-faded-info-vertical float-end mb-5 px-4 py-3 fw-bold"
      style="margin-top: 12px"
      @click="next"
      >Next step</el-button
    >
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Plus } from "@element-plus/icons-vue";
const active = ref(0);
const candidateForm = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  aadhaar: "",
  pan: "",
});

const addressForm = reactive({
  presentAddress: {
    address: "",
    city: "",
    state: "",
    country: "",
    pin: "",
  },
  permanentAddress: {
    address: "",
    city: "",
    state: "",
    country: "",
    pin: "",
  },
});

//change forms
const next = () => {
  if (active.value++ > 5) active.value = 0;
  if (active.value === 1) {
    handleCandidateDetail();
  } else if (active.value === 2) {
    handleAddressForm();
  } else if (active.value === 3) {
    console.log("3");
  } else if (active.value === 4) {
    console.log("4");
  } else if (active.value === 5) {
    console.log("5");
  } else if (active.value === 6) {
    console.log("6");
  }
};

// Candidate Details
const imageUrl = ref("");
function handleAvatarSuccess(res, file) {
  imageUrl.value = URL.createObjectURL(file.raw);
  console.log(imageUrl.value);
}

function beforeAvatarUpload(file) {
  const isJPG = file.type === "image/jpeg";
  if (!isJPG) {
    alert("Only JPG format allowed");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    alert("Image must be smaller than 2MB!");
  }
  return isJPG && isLt2M;
}

const handleCandidateDetail = () => {
  console.log(JSON.stringify(candidateForm), imageUrl.value);
};

// Address Details

const handleAddressForm = () => {
  console.log(JSON.stringify(addressForm));
};

//Professional Details

//Education

//Experience

//Documents
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

.photo_upload {
  border: 1px solid rgb(232, 220, 220);
  border-radius: 5px;
}

/* Responsiveness */
</style>
