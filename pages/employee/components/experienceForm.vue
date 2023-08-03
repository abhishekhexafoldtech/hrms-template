<template>
  <div>
    <!-- Experience Details Section -->
    <div class="title_flex mb-15">
      <h3 class="form_title">Experience Details</h3>
      <el-button class="add_btn" @click="incrementExperience"><i class="ri-add-line"></i></el-button>
    </div>

    <!-- Experience Form -->
    <el-form v-for="(form, index) in experienceFormData" :key="index" :inline="true" ref="experienceFormRef" :model="form"
      :rules="experienceFormRules" label-width="120px" label-position="top">
      <!-- <h1>lk {{ form}}</h1> -->
      <el-row class="w-100">
        <!-- Job Title Input -->
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item label="Job Title" prop="job_title">
            <el-input v-model="form.job_title" placeholder="Job Title" required></el-input>
          </el-form-item>
        </el-col>

        <!-- Company Input -->
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item label="Company" prop="company">
            <el-input v-model="form.company" placeholder="Company" required></el-input>
          </el-form-item>
        </el-col>

        <!-- Start Date Input -->
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item label="Start Date" prop="start_date">
            <el-date-picker v-model="form.start_date" type="date" placeholder="Start Date" required></el-date-picker>
          </el-form-item>
        </el-col>

        <!-- End Date Input -->
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item label="End Date" prop="end_date">
            <el-date-picker v-model="form.end_date" type="date" placeholder="End Date" required></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item label="Document Offer Later" prop="document_offer_later">
            <el-upload :limit="1" class="upload-demo" drag :before-upload="isFileTypeValid" v-model="form.document_offer_later"
              :action="fileUploadApi" :on-change="fileChangeHandler(form, index, 'document_offer_later')
                " multiple>
              <el-icon class="el-icon--upload"><upload-filled /></el-icon>
              <div class="el-upload__text">
                Drop file here or <em>click to upload</em>
              </div>
              <template #tip>
                <div class="el-upload__tip">
                  jpg/png files with a size less than 500kb
                </div>
              </template>
            </el-upload>
          </el-form-item>
        </el-col>
        <!-- File Upload for Document Joining Later -->
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item label="Document Joining Later" prop="document_joining_later">
            <el-upload :limit="1" class="upload-demo" drag :before-upload="isFileTypeValid" v-model="form.document_joining_later"
              :action="fileUploadApi" :on-change="fileChangeHandler(form, index, 'document_joining_later')
                " multiple>
              <el-icon class="el-icon--upload"><upload-filled /></el-icon>
              <div class="el-upload__text">
                Drop file here or <em>click to upload</em>
              </div>
              <template #tip>
                <div class="el-upload__tip">
                  jpg/png files with a size less than 500kb
                </div>
              </template>
            </el-upload>
          </el-form-item>
        </el-col>

        <!-- File Upload for Document Release Later -->
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item label="Document Release Later" prop="document_release_later">
            <el-upload :limit="1" class="upload-demo" drag :before-upload="isFileTypeValid" v-model="form.document_release_later"
              :action="fileUploadApi" :on-change="fileChangeHandler(form, index, 'document_release_later')
                " multiple>
              <el-icon class="el-icon--upload"><upload-filled /></el-icon>
              <div class="el-upload__text">
                Drop file here or <em>click to upload</em>
              </div>
              <template #tip>
                <div class="el-upload__tip">
                  jpg/png files with a size less than 500kb
                </div>
              </template>
            </el-upload>
          </el-form-item>
        </el-col>

        <!-- File Upload for Other Document -->
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item label="Other Document" prop="other_document">
            <el-upload :limit="1" class="upload-demo" drag :before-upload="isFileTypeValid" v-model="form.other_document"
              :action="fileUploadApi" :on-change="fileChangeHandler(form, index, 'other_document')" multiple>
              <el-icon class="el-icon--upload"><upload-filled /></el-icon>
              <div class="el-upload__text">
                Drop file here or <em>click to upload</em>
              </div>
              <template #tip>
                <div class="el-upload__tip">
                  jpg/png files with a size less than 500kb
                </div>
              </template>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <!-- Button to Add More Experience Sections -->
    <div class="title_flex m-0" v-if="experience > 1">
      <span></span>
      <el-button class="add_btn" @click="decrementExperience"><i class="ri-subtract-line"></i></el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineExpose, defineEmits } from "vue";
const experience = ref(1);
const emit = defineEmits();
import { UploadFilled } from "@element-plus/icons-vue";

const fileUploadApi = "";

// experienceForm
const experienceFormData = ref([
  {
    job_title: "",
    company: "",
    start_date: "",
    end_date: "",
    document_offer_later: [],
    document_joining_later: [],
    document_release_later: [],
    other_document: [],
  },
]);

// Function to validate the file before uploading
function isFileTypeValid(file) {
  const allowedTypes = [".jpg", ".jpeg", ".png", ".pdf"];
  const fileType = file.name
    .substring(file.name.lastIndexOf("."))
    .toLowerCase();
  const isValidType = allowedTypes.includes(fileType);
  return isValidType;
}

// experience form validation
const experienceFormRules = ref({
  job_title: [
    { required: true, message: "Please enter job title", trigger: "blur" },
  ],
  company: [
    { required: true, message: "Please enter company name", trigger: "blur" },
  ],
  start_date: [
    { required: true, message: "Please select start date", trigger: "change" },
  ],
  end_date: [
    { required: true, message: "Please select end date", trigger: "change" },
  ],
  document_offer_later: [
    {
      required: true,
      message: "Please upload the document offer later",
      trigger: "change",
    },
    {
      validator: isFileTypeValid,
      trigger: "change",
    },
  ],
  document_joining_later: [
    {
      required: true,
      message: "Please upload the document joining later",
      trigger: "change",
    },
  ],
  document_release_later: [
    {
      required: true,
      message: "Please upload the document release later",
      trigger: "change",
    },
  ],
  other_document: [
    {
      required: true,
      message: "Please upload the other document",
      trigger: "change",
    },
  ],
});

// Experience

const incrementExperience = () => {
  experienceFormData.value.push({
    job_title: "",
    company: "",
    start_date: "",
    end_date: "",
    document_offer_later: [],
    document_joining_later: [],
    document_release_later: [],
    other_document: [],
  });
  experience.value = experience.value + 1;
};

const decrementExperience = () => {
  experienceFormData.value.pop();
  experience.value = experience.value - 1;
};

// Function to handle file upload change
const fileChangeHandler = (form, index, listName) => (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file.raw);
  reader.onload = () => {
    const base64Data = reader.result;
    // Check file type before updating the reactive experienceFormData object
    if (isFileTypeValid(file)) {
      console.log(file);
      // Update the reactive experienceFormData object with the latest file list, including Base64 data
      experienceFormData.value[index][listName] = [
        {
          name: file.name.name,
          percentage: file.percentage,
          status: file.status,
          size: file.size,
          raw: file.raw,
          uid: file.uid,
          base64Data: base64Data, // Add the Base64 data to the object
        },
      ];
    } else {
      // Clear the file list if the file type is invalid
      experienceFormData.value[index][listName] = [];
      form[listName] = [];
    }
  };
};

const experienceFormRef = ref(null);

const handleExperienceForm = () => {
  console.log("ExperienceForm Data:", JSON.stringify(experienceFormData.value));
  emit("changeForm")
  experienceFormData.value.forEach((e, i) => {
    experienceFormRef.value[i].validate((valid) => {
      if (valid) {
        console.log(
          "ExperienceForm Data:",
          JSON.stringify(experienceFormData.value)
        );
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
  handleExperienceForm,
});
</script>
