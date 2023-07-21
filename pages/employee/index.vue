<template>
  <div class="container">
    <div class="row d-flex justify-content-center mt-4 pb-5">
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
      <div class="form-container">
        <div class="main-form-container">
          <div class="ms-3">
            <el-form
              :inline="true"
              :model="professionalForm"
              label-width="120px"
              label-position="top"
            >
              <div class="row">
                <!-- first row -->
                <div class="row">
                  <div class="col-12 col-md-4">
                    <el-form-item label="Experience">
                      <el-input
                        style="width: 100%"
                        placeholder="Experience"
                        v-model="professionalForm.experience"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>

                  <div class="col-12 col-md-4">
                    <el-form-item label="Skill Set">
                      <el-input
                        style="width: 100%"
                        placeholder="Skill Set"
                        v-model="professionalForm.skill_set"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>

                  <div class="col-12 col-md-4">
                    <el-form-item label="Highest Qualification">
                      <el-input
                        style="width: 100%"
                        placeholder="Highest Qualification"
                        v-model="professionalForm.highest_qualification"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>

                <!-- second row -->

                <div class="row">
                  <div class="col-12 col-md-4">
                    <el-form-item label="Location">
                      <el-input
                        style="width: 100%"
                        placeholder="Location"
                        v-model="professionalForm.location"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>

                  <div class="col-12 col-md-4">
                    <el-form-item label="Current Salary">
                      <el-input
                        style="width: 100%"
                        placeholder="Current Salary"
                        v-model="professionalForm.current_salary"
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
    <div v-show="active === 3" class="row">
      <div class="form-container">
        <div class="main-form-container">
          <div class="ms-3">
            <p @click="incrementEducation" class="float-end">
              <i class="ri-add-circle-fill w-50"></i>
            </p>

            <el-form
              v-for="item in education"
              :inline="true"
              :model="educationForm"
              label-width="120px"
              label-position="top"
            >
              <p class="w-95 text-bg-light">Education Detail</p>

              <div class="row">
                <!-- first row -->
                <div class="row">
                  <div class="col-12 col-md-4">
                    <el-form-item label="School Name">
                      <el-input
                        style="width: 100%"
                        placeholder="School Name"
                        v-model="educationForm.school_name"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>

                  <div class="col-12 col-md-4">
                    <el-form-item label="Degree/Diploma">
                      <el-input
                        style="width: 100%"
                        placeholder="Degree/Diploma"
                        v-model="educationForm.degree_diploma"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>

                  <div class="col-12 col-md-4">
                    <el-form-item label="Field(s) of Study">
                      <el-input
                        style="width: 100%"
                        placeholder="Field(s) of Study"
                        v-model="educationForm.field_of_Study"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>

                <!-- second row -->

                <div class="row">
                  <div class="col-12 col-md-4">
                    <el-form-item label="Date of Completion">
                      <el-input
                        style="width: 100%"
                        placeholder="Date of Completion"
                        v-model="educationForm.date_of_completion"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>

                  <div class="col-12 col-md-4">
                    <el-form-item label="Additional Notes">
                      <el-input
                        style="width: 100%"
                        placeholder="Additional Notes"
                        v-model="educationForm.aditional_notes"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>
              </div>
            </el-form>
            <div class="row">
              <div class="col-12">
                <p
                  v-show="minusIcon"
                  @click="decrementEducation"
                  class="float-end"
                >
                  <i class="ri-subtract-line"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="active === 4" class="row">
      <div class="form-container">
        <div class="main-form-container">
          <div class="ms-3">
            <span @click="incrementExperience" class="float-end">
              <i class="ri-add-circle-fill"></i>
            </span>

            <el-form
              v-for="item in experience"
              :inline="true"
              :model="experienceForm"
              label-width="120px"
              label-position="top"
            >
              <p class="w-95 text-bg-light">Experience Detail</p>
              <div class="row">
                <!-- first row -->
                <div class="row">
                  <div class="col-12 col-md-4">
                    <el-form-item label="Occupation">
                      <el-input
                        style="width: 100%"
                        placeholder="Occupation"
                        v-model="experienceForm.occupation"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>

                  <div class="col-12 col-md-4">
                    <el-form-item label="Company">
                      <el-input
                        style="width: 100%"
                        placeholder="Company"
                        v-model="experienceForm.company"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>

                  <div class="col-12 col-md-4">
                    <el-form-item label="Summary">
                      <el-input
                        style="width: 100%"
                        placeholder="Summary"
                        v-model="experienceForm.summary"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>

                <!-- second row -->

                <div class="row">
                  <div class="col-12 col-md-4">
                    <el-form-item label="Duration">
                      <el-input
                        style="width: 100%"
                        placeholder="Duration"
                        v-model="experienceForm.duration"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>

                  <div class="col-12 col-md-4">
                    <el-form-item label="Currently Work Here">
                      <el-input
                        style="width: 100%"
                        placeholder="Currently Work Here"
                        v-model="experienceForm.currently_work_here"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>
              </div>
            </el-form>
            <div class="row">
              <div class="col-12">
                <p
                  v-show="minusIcon"
                  @click="decrementExperience"
                  class="float-end"
                >
                  <i class="ri-subtract-line"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Documents Details -->

    <div v-show="active === 5" class="row">
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
                    <el-form-item label="Adhar Card">
                      <el-upload
                        v-model:file-list="fileList"
                        class="upload-demo"
                        multiple="false"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :limit="3"
                        :on-exceed="handleExceed"
                      >
                        <el-button type="primary">Click to upload</el-button>
                        <template #tip>
                          <div class="el-upload__tip">
                            jpg/png files with a size less than 500KB.
                          </div>
                        </template>
                      </el-upload>
                    </el-form-item>
                  </div>

                  <div class="col-12 col-md-4">
                    <el-form-item label="Pan Card">
                      <el-upload
                        v-model:file-list="fileList"
                        class="upload-demo"
                        multiple="false"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :limit="3"
                        :on-exceed="handleExceed"
                      >
                        <el-button type="primary">Click to upload</el-button>
                        <template #tip>
                          <div class="el-upload__tip">
                            jpg/png files with a size less than 500KB.
                          </div>
                        </template>
                      </el-upload>
                    </el-form-item>
                  </div>

                  <div class="col-12 col-md-4">
                    <el-form-item label="Passport Size Photo">
                      <el-upload
                        v-model:file-list="fileList"
                        class="upload-demo"
                        multiple="false"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :limit="3"
                        :on-exceed="handleExceed"
                      >
                        <el-button type="primary">Click to upload</el-button>
                        <template #tip>
                          <div class="el-upload__tip">
                            jpg/png files with a size less than 500KB.
                          </div>
                        </template>
                      </el-upload>
                    </el-form-item>
                  </div>
                </div>

                <!-- second row -->

                <div class="row">
                  <div class="col-12 col-md-4">
                    <el-form-item label="Experience Letter">
                      <el-upload
                        v-model:file-list="fileList"
                        class="upload-demo"
                        multiple="false"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :limit="3"
                        :on-exceed="handleExceed"
                      >
                        <el-button type="primary">Click to upload</el-button>
                        <template #tip>
                          <div class="el-upload__tip">
                            jpg/png files with a size less than 500KB.
                          </div>
                        </template>
                      </el-upload>
                    </el-form-item>
                  </div>

                  <div class="col-12 col-md-4">
                    <el-form-item label="Other Certificate">
                      <el-upload
                        v-model:file-list="fileList"
                        class="upload-demo"
                        multiple="false"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :limit="3"
                        :on-exceed="handleExceed"
                      >
                        <el-button type="primary">Click to upload</el-button>
                        <template #tip>
                          <div class="el-upload__tip">
                            jpg/png files with a size less than 500KB.
                          </div>
                        </template>
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

    <el-button
      class="float-end mb-5 fw-bold"
      style="margin-top: 12px"
      type="primary"
      @click="next"
      >Next step</el-button
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
const active = ref(0);
const education = ref(1);
const experience = ref(1);
const minusIcon = ref(true);

// candidateForm
const candidateForm = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  aadhaar: "",
  pan: "",
});

// addressForm
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

//  professionalForm
const professionalForm = reactive({
  experience: "",
  skill_set: "",
  highest_qualification: "",
  location: "",
  current_salary: "",
});

// educationForm
const educationFormData = ref([]);
const educationForm = reactive({
  school_name: "",
  degree_diploma: "",
  field_of_Study: "",
  date_of_completion: "",
  aditional_notes: "",
});

// experienceForm
const experienceFormData = ref([]);
const experienceForm = reactive({
  occupation: "",
  company: "",
  summary: "",
  duration: "",
  currently_work_here: "",
});

//change forms
const next = () => {
  if (active.value++ > 5) active.value = 0;
  if (active.value === 1) {
    handleCandidateDetail();
  } else if (active.value === 2) {
    handleAddressForm();
  } else if (active.value === 3) {
    handleProfessionalForm();
  } else if (active.value === 4) {
    handleEducationForm();
  } else if (active.value === 5) {
    handleExperienceForm();
  } else if (active.value === 6) {
    handleDocumentForm();
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

const handleProfessionalForm = () => {
  console.log(JSON.stringify(professionalForm));
};

//Education

const incrementEducation = () => {
  educationFormData.value.push(educationForm);
  console.log(educationFormData.value);
  education.value = education.value + 1;
};

const decrementEducation = () => {
  experienceFormData.value.pop();
  console.log(educationFormData.value);
  education.value = education.value - 1;
};

const handleEducationForm = () => {
  console.log(educationFormData.value);
};

//Experience

const incrementExperience = () => {
  experienceFormData.value.push(experienceForm);
  console.log(experienceFormData.value);
  experience.value = experience.value + 1;
};

const decrementExperience = () => {
  experienceFormData.value.pop();
  console.log(experienceFormData.value);
  experience.value = experience.value - 1;
};

const handleExperienceForm = () => {
  onsole.log(experienceFormData.value);
};

//Documents

const handleDocumentForm = () => {};

// end
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
