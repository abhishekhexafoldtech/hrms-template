<template>
<div class="container-fluid mt-7 mt-8">
    <div class="row">
        <el-tabs tab-position="left" style="height: 100%" class="demo-tabs">
            <!-- General -->
            <el-tab-pane label="General" class="">
                <div class="col-sm-12">
                    <div class="shadow-lg p-3 mb-5 bg-body rounded mt-1">
                        <el-form label-position="top" label-width="100px" :model="formData" :rules="formValidationRules" :size="size" style="max-width: 100%; border-radius: 15px; height: 650px" class="bg-white px-5 py-4 rounded-5" ref="formRef">
                            <el-row :gutter="20">
                                <el-col :span="12">
                                    <el-form-item label="Name" prop="name">
                                        <el-input placeholder="Enter name" v-model="formData.name" />
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="Username" prop="username">
                                        <el-input placeholder="Enter  Username" v-model="formData.username" />
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="12">
                                    <el-form-item label="Email" prop="email">
                                        <el-input placeholder="Enter your email address" v-model="formData.email" />
                                    </el-form-item>
                                </el-col>

                                <el-col :span="12">
                                    <el-form-item label="Mobile #" prop="mobile">
                                        <el-input placeholder="Enter Mobile No." v-model="formData.mobile" />
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <div class="row">
                                <div class="col-sm-6">Select Avatar</div>
                            </div>
                            <div class="row">

                                <div class="col-sm-6">
                                    <div class="row">
                                        <el-upload class="upload-demo" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
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
            <el-tab-pane label="Change Password">
                <div class="col-sm-12">
                    <div class="shadow p-3 mb-5 bg-body rounded mt-1">
                        <!-- Add the :rules attribute to bind the validation rules -->
                       
                        <el-form :model="formInline" :rules="formValidationRules" :size="size" label-position="top" label-width="100px" style="max-width: 100%; border-radius: 15px; height: 650px" class="bg-white px-5 py-4 rounded-5" ref="formRef">
                          <h3>Create a new password</h3>
                          <p>Your new password must be different from previous password</p>
                          <el-row :gutter="20">
                            <el-col :span="10">
                              <el-form-item label="Old Password" prop="oldPass">
                              <el-input v-model.number="formData.oldPass" placeholder="Old Password"/>
                          </el-form-item>
                            </el-col>
                            <el-col :span="10">
                               <el-form-item label="Password" prop="pass">
                                  <el-input v-model="formData.pass" type="password" autocomplete="off" placeholder="New Password"/>
                              </el-form-item>
                            </el-col>
                          </el-row>

                          <el-row :gutter="20">
                            <el-col :span="10">
                              <el-form-item label="Confirm Password" prop="checkPass">
                                <el-input v-model="formData.checkPass" type="password" autocomplete="off" placeholder="Confirm Password"/>
                            </el-form-item>
                            </el-col>
                          </el-row>
                            <div class="row mt-4">
                              <div class="col-sm-10 d-flex flex-row-reverse">
                                  <button class="btn btn-primary w-20" @click="submitForm(ruleFormRef)">Submit</button>
                              </div>
                          </div>
                        </el-form>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</div>
</template>

<script setup>
import { reactive, ref } from "vue";

const size = ref("large")

const formData = reactive({
    name: "",
    username: "",
    phone: "",
    ext: "",
    mobile: "",
    email: "",
    // Change password
    oldPass: "",
    pass: "",
    checkPass: "",
});

// Password Validation
const validatePassword = (rule, value) => {
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!passwordRegex.test(value)) {
    return Promise.reject(
      "Password must be at least 8 characters and contain both a number and a special character (!@#$%^&*)"
    );
  }
  return Promise.resolve();
};

//Confirm Password Validation 
const validateConfirmPassword = (rule, value) => {
    if (value !== formData.pass) {
        return Promise.reject("The two passwords do not match");
    }
    return Promise.resolve();
};

const formValidationRules = reactive({
    name: [{
        required: true,
        message: "Please enter name",
        trigger: "blur",
    }, ],
    username: [{
        required: true,
        message: "Please enter username",
        trigger: "blur",
    }, ],
    phone: [{
            required: true,
            message: "Please enter Phone",
            trigger: "blur",
        },
        {
            type: 'number',
            message: 'phone must be a number'
        },
    ],
    mobile: [{
            required: true,
            message: "Please enter mobile",
            trigger: "blur",
        },
        {
            type: 'number',
            message: 'mobile must be a number'
        },
    ],
    ext: [{
        required: true,
        message: "Please enter ext",
        trigger: "blur",
    }, ],
    email: [{
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
    oldPass: [{
            required: true,
            message: "Old password is required",
            trigger: "blur"
        }
    ],
    pass: [{
            required: true,
            message: "Please enter your password",
            trigger: "blur",
        },
        {
            validator: validatePassword,
            trigger: "blur",
        },
        // Add other password validation rules as needed
    ],
    checkPass: [{
            required: true,
            message: "Please confirm your password",
            trigger: "blur",
        },
        {
            validator: validateConfirmPassword,
            trigger: "blur",
        },
    ],
});
// // Change password

definePageMeta({
    layout: "layout",
});
</script>

<style scoped>


.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
    width: 20%;
}

</style>
