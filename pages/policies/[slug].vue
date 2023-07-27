<template>
    <div class="mt-8">
        <span ><h5 style="margin-left:30px;">Add Policy</h5></span>
       <el-card style="margin:30px;">
        <el-form
            label-position="top"
            label-width="100px"
            :model="formData"
            :rules="formValidationRules"
            style="max-width: 100%; border-radius: 15px; height: 760px"
            class="bg-white px-5 py-4 rounded-5"
            ref="formRef"
        >
            <el-row :gutter="10">
                <el-col :xs="12" :sm="12" :lg="12" :xl="12">
                    <el-form-item label="Title" prop="title">
                        <el-input v-model="formData.title" />
                    </el-form-item>
                 </el-col>
                <el-col :xs="12" :sm="12" :lg="12" :xl="12">
                    <el-form-item label="Sub Title" prop="subTitle" >
                        <el-input v-model="formData.subTitle" />
                    </el-form-item>
                </el-col>
              
              
                <el-col :xs="24" :sm="24" :lg="24" :xl="24">
                    <el-form-item label="Description" prop="description">
                        <el-input type="textarea" v-model="formData.description"/>
                    </el-form-item>
                </el-col>

                <el-col :xs="8" :sm="8" :lg="8" :xl="8">
                    <el-form-item label="Upload file" prop="productName">
                        <el-upload
                            class="upload-demo"
                            drag
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                            multiple
                        >
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

            <el-button type="primary" style="float:right;" @click="handleFormData">Save</el-button> 
            <el-button  style="float:right; margin-right: 10px;" @click="handleCancle">Back</el-button> 

        </el-form>
       </el-card>

    </div>
</template>

<script setup>
import { UploadFilled } from '@element-plus/icons-vue'
import { flashNotification } from "@/composables/useNotification"
import { useRouter } from "vue-router"
const router = useRouter();

const formRef = ref(null);
const showErrorMessage = ref(false);

const formData = reactive({
    title: "",
    subTitle: "",
    description: ""
})

const formValidationRules = reactive({
    title: [
        {
        required: true,
        message: "Please enter title",
        trigger: "blur",
        },
    ],
})

function handleFormData() {
    formRef.value.validate((valid) => {
        let val = showErrorMessage.value;
        if (valid && val === false) {
        // Form is valid, do something with the data
        console.log("Form submitted:", JSON.stringify(formData));
        if(true) {
            router.push("/policies")
            flashNotification('success','Add Successfully')
        } else {
            flashNotification('error','Something went wrong')
        }
        }
    });

}

function handleCancle() {
    router.push("/policies")
}



definePageMeta({
    layout: "layout"
})
</script>