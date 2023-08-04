<template>
  <div class="container-fluid w-90">
    <el-card class="box-card">
      <template #header>
        <div class="card-header d-flex">
          <span class="align-self-center">
            <h4>Social Profile</h4>
          </span>
          <div class="d-flex flex-row-reverse w-90">
            <template v-if="!editMode">
              <el-button class="w-5" size="large" type="plain" @click="toggleEditMode">
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              </el-button>
            </template>
          </div>
        </div>
      </template>
      <div v-if="!editMode">
        <div class="row">

            <div class="col-sm-3 ">            
            <a :href="formData.facebook" target="_blank">
              <img src='@/assets/img/facebook.png' alt="facebook logo" />
            <h6>Facebook</h6>
            </a>
          </div>
          
          <div class="col-sm-3">            
            <a :href="formData.linkedin" target="_blank">
              <img src='@/assets/img/linkedin.png' alt="facebook logo" />
            <h6>LinkedIn</h6>
            </a>
          </div>

          <div class="col-sm-3">            
            <a :href="formData.twitter" target="_blank">
              <img src='@/assets/img/twitter.png' alt="facebook logo" />
            <h6>Twitter</h6>
            </a>
          </div>

          <div class="col-sm-3">            
            <a :href="formData.instagram" target="_blank">
              <img src='@/assets/img/instagram.png' alt="instagram logo" />
            <h6>Instagram</h6>
            </a>
          </div>
        </div>
      </div>
      <el-form
        v-else
        label-position="top"
        label-width="100px"
        :model="formData"
        :rules="formValidationRules"
        style="max-width: 100%; border-radius: 15px; height: fluid"
        class="bg-white px-5 py-4 rounded-5"
        ref="formRef"
      >
        <div>
          <div class="row">
            <div class="col-sm-3">
              <img src='@/assets/img/facebook.png' alt="facebook logo" />
              <h6>Facebook</h6>
              <el-form-item prop="facebook">
                <el-input size="large" placeholder="Enter Facebook URL" v-model="formData.facebook" />
              </el-form-item>
            </div>
            <div class="col-sm-3">
              <img src='@/assets/img/linkedin.png' alt="facebook logo" />
              <h6>LinkedIn</h6>
              <el-form-item prop="linkedin">
                <el-input size="large" placeholder="Enter LinkedIn URL" v-model="formData.linkedin" />
              </el-form-item>
            </div>
            <div class="col-sm-3">
              <img src='@/assets/img/twitter.png' alt="facebook logo" />
              <h6>Twitter</h6>
              <el-form-item prop="twitter">
                <el-input size="large" placeholder="Enter Twitter URL" v-model="formData.twitter" />
              </el-form-item>
            </div>
            <div class="col-sm-3">
              <img src='@/assets/img/instagram.png' alt="instagram logo" />
              <h6>Instagram</h6>
              <el-form-item prop="instagram">
                <el-input size="large" placeholder="Enter Instagram URL" v-model="formData.instagram" />
              </el-form-item>
            </div>
          </div>
        </div>
        <div class="mt-3 d-flex flex-row-reverse">
          <template v-if="editMode">
            <el-button size="large" class="m-3 w-8" type="primary" @click="saveForm">
              SAVE
            </el-button>
            <el-button size="large" class="m-3 w-8" @click="toggleEditMode">
              CANCEL
            </el-button>
          </template>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const formRef = ref(null);

const formData = reactive({
  facebook: "https://www.facebook.com/your-profile",
  linkedin: "https://www.linkedin.com/in/your-profile",
  twitter: "https://www.twitter.com/your-profile",
  instagram: "https://www.instagram.com/your-profile"
});

const formValidationRules = reactive({
  facebook: [
    {
      required: true,
      message: "Please enter Facebook URL",
      trigger: "blur",
    },
  ],
  linkedin: [
    {
      required: true,
      message: "Please enter LinkedIn URL",
      trigger: "blur",
    },
  ],
  twitter: [
    {
      required: true,
      message: "Please enter Twitter URL",
      trigger: "blur",
    },
  ],
  instagram: [
    {
      required: true,
      message: "Please enter Twitter URL",
      trigger: "blur",
    },
  ],
});

const editMode = ref(false);

const toggleEditMode = () => {
  editMode.value = !editMode.value;
  // Reset form data if switching back to view mode
  if (!editMode.value) {
    // You may want to reset the form data here
  }
};

const saveForm = () => {
  // Perform form submission or update here
  editMode.value = false;
};

const getFormattedUrl = (url) => {
  // Remove "https://" from the URL before displaying in view mode
  return url.replace(/^https?:\/\//, "");
};

definePageMeta({
  layout: "layout",
});
</script>

<style scoped>
img{
  width: 70px;
}
</style>
