<template>
  <div class="container-fluid cbox mt-7">
    <div class="row">
      <!-- <div class="col-sm-2 mt-4">
                    <ul>
                        <button class="btn btn-primary w-100"><i class="fa fa-home"></i> General</button>
                        <button type="button" class="btn w-100"><i class="bi bi-calendar-week-fill"></i> Change Password</button>
                    </ul>
                </div> -->
      <el-tabs tab-position="left" style="height: 100%" class="demo-tabs">
        <!-- General -->
        <el-tab-pane label="General" class="">
          <div class="col-sm-12">
            <div class="shadow p-3 mb-5 bg-body rounded mt-1">
              <el-form
                label-position="top"
                label-width="100px"
                :model="formData"
                :rules="formValidationRules"
                :size="size"
                style="max-width: 100%; border-radius: 15px; height: 650px"
                class="bg-white px-5 py-4 rounded-5"
                ref="formRef"
              >
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="Name" prop="name" >
                      <el-input
                        placeholder="Enter name"
                        v-model="formData.name"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="Username" prop="username">
                      <el-input
                        placeholder="Enter  Username"
                        v-model="formData.username"
                      />
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="Email" prop="email">
                      <el-input
                        placeholder="Enter your email address"
                        v-model="formData.email"
                      />
                    </el-form-item>
                  </el-col>
                  
                  <el-col :span="12">
                    <el-form-item                      
                      label="Mobile #"
                      prop="mobile"
                    >
                      <el-input
                        placeholder="Enter Mobile No."
                        v-model="formData.mobile"
                      />
                    </el-form-item>
                  </el-col>
                </el-row>
  
                <div class="row">
                  <div class="col-sm-6">Select Avatar</div>
                </div>
                <div class="row">
                  
                  <div class="col-sm-6">
                    <div class="row">
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
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-sm-11 d-flex flex-row-reverse">
                      <button class="btn btn-primary w-10" @click="saveProfile">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </el-form>
            </div>
          </div>
        </el-tab-pane>
        <!-- Change Password -->
        <el-tab-pane label="Change Password">Change Password</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped>
.cbox {
  background-color: rgb(248, 248, 248);
}

.slct-avatar {
  border: 1px solid rgb(203, 203, 203);
}


.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
  width: 20%;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}

</style>

<script setup>
definePageMeta({
  layout: "layout",
});
import { reactive,ref } from "vue";

const size = ref("large")


const formData = reactive({
  name: "",
  username: "",
  phone: "",
  ext: "",
  mobile: "",
  email: "",
});

const formValidationRules = reactive({
  name: [
    {
      required: true,
      message: "Please enter name",
      trigger: "blur",
    },
  ],
  username: [
    {
      required: true,
      message: "Please enter username",
      trigger: "blur",
    },
  ],
  phone: [
    {
      required: true,
      message: "Please enter Phone",
      trigger: "blur",
    },
    { 
      type: 'number', 
      message: 'phone must be a number' 
    },
  ],
  mobile: [
    {
      required: true,
      message: "Please enter mobile",
      trigger: "blur",
    },
    { 
      type: 'number', 
      message: 'mobile must be a number' 
    },
  ],
  ext: [
    {
      required: true,
      message: "Please enter ext",
      trigger: "blur",
    },
  ],
  email: [
    { 
      required: true,
      message: "Email is required", 
      trigger: "blur" 
    },
    { 
      type: "email", 
      message: "Invalid email address", 
      trigger: "blur" 
    },
  ],
});
</script>
