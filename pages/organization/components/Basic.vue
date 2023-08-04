<template>
  <div class="container-fluid w-90">
    <el-card class="box-card">
      <template #header>
        <div class="card-header d-flex">
          <span class="align-self-center">
           <b>Basic Information</b>
          </span>
          <div class="d-flex flex-row-reverse w-85">
            <template v-if="!editMode">
              <el-button class="w-5" size="large" type="plain" @click="toggleEditMode">
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              </el-button>
            </template>
          </div>
        </div>
      </template>
      <el-form
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
            <div class="col-sm-6">
              <div class="row">
                <div class="col-sm-12">
                  <template v-if="!editMode">
                    <h6>Company Name</h6>
                    <div >{{ formData.companyName }}</div>
                  </template>
                  <template v-else>
                    <h6>Company Name</h6>
                    <el-form-item prop="companyName">
                      <el-input size="large" placeholder="Enter company name" v-model="formData.companyName" />
                    </el-form-item>
                  </template>
                </div>


                <div class="col-sm-12 mt-4">
                  <template v-if="!editMode">
                    <h6>Official Contact No.</h6>
                    <div>{{ formData.officialContact }}</div>
                  </template>
                  <template v-else>
                    <h6>Official Contact No.</h6>
                    <el-form-item prop="officialContact">
                      <el-input size="large" placeholder="Enter official contact number" v-model="formData.officialContact" />
                    </el-form-item>
                  </template>
                </div>    

                <div class="col-sm-12 mt-4">
                  <template v-if="!editMode">
                    <h6>Domain Name</h6>
                    <div>{{ formData.domainName }}</div>
                  </template>
                  <template v-else>
                    <h6>Domain Name</h6>
                    <el-form-item prop="domainName">
                      <el-input size="large" placeholder="Enter domain name" v-model="formData.domainName" />
                    </el-form-item>
                  </template>
                </div>            
              </div>
            </div>


            <div class="col-sm-6">
              <div class="row">
                <div class="col-sm-12">
                  <template v-if="!editMode">
                    <h6>Official Email ID</h6>
                    <div>{{ formData.officialEmail }}</div>
                  </template>
                  <template v-else>
                    <h6>Official Email ID</h6>
                    <el-form-item prop="officialEmail">
                      <el-input size="large" placeholder="Enter official email ID" v-model="formData.officialEmail" />
                    </el-form-item>
                  </template>
                </div>

                <div class="col-sm-12 mt-4">
                  <template v-if="!editMode">
                    <h6>Website</h6>
                    <a :href="getFormattedWebsite(formData.website)" target="_blank">
                      <div>{{ getWebsiteDisplay(formData.website) }}</div>
                    </a>
                  </template>
                  <template v-else>
                    
                    <h6>Website</h6>
                    <el-form-item prop="website">
                      <el-input size="large" placeholder="Enter website URL" v-model="formData.website" />
                    </el-form-item>
                  </template>
                </div>

                <div class="col-sm-12 mt-4">
                    <template v-if="editMode">
                      <h6>Upload logo here</h6>
                      <el-upload
                          class="upload-demo"
                          drag
                          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                          multiple
                          >
                            <i class="bi bi-cloud-upload display-1"></i>
                            <div class="el-upload__text">
                              Drop file here or <em>click to upload</em>
                            </div>
                            <template #tip>
                              <div class="el-upload__tip">
                                jpg/png files with a size less than 500kb
                              </div>
                            </template>
                      </el-upload>
                    </template>
                </div>
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
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const formRef = ref(null);

const formData = reactive({
  companyName: "Blueray Automation Pvt Ltd",
  officialContact: "8235647565",
  officialEmail: "abc.xyz@gmail.com",
  website: "https://hexafoldtech.com/",
  domainName: "Hexafold technologies"
});

const formValidationRules = reactive({
  companyName: [
    {
      required: true,
      message: "Please enter official email",
      trigger: "blur",
    },
  ],
  officialContact: [
    {
      required: true,
      message: "Please enter phone number",
      trigger: "blur",
    },
  ],
  officialEmail: [
    {
      required: true,
      message: "Please enter personal email",
      trigger: "blur",
    },
  ],
  website: [
    {
      required: true,
      message: "Please enter website URL. ",
      trigger: "blur",
    },
  ],
  domainName: [
    {
      required: true,
      message: "Please enter website URL. ",
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

const getFormattedWebsite = (url) => {
  // Add "https://" prefix to the URL if it doesn't already have it
  if (!/^https?:\/\//i.test(url)) {
    return `https://${url}`;
  }
  return url;
};

const getWebsiteDisplay = (url) => {
  // Remove "https://" from the URL before displaying in view mode
  return url.replace(/^https?:\/\//i, "");
};

definePageMeta({
  layout: "layout",
});
</script>

<style scoped>
/* Add your styles here */
</style>
