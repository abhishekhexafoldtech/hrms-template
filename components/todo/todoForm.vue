<template>
    <div class="">
        <el-dialog v-model="dialogFormVisible" width="60%">        
        <span ><h5 style="margin-left:30px;">Add Todo</h5></span>
            <el-form
                label-position="top"
                label-width="100px"
                :model="formData"
                :rules="formValidationRules"
                style="max-width: 100%; border-radius: 15px; height: fluid"
                class="bg-white px-5 py-4 rounded-5"
                ref="formRef"
            >
            <el-row>
                <el-col :xs="24" :sm="24" :lg="24" :xl="24">
                        <el-form-item label="Todo Description" prop="description">
                            <el-input type="textarea" placeholder="Enter todo here..." v-model="formData.description"/>
                        </el-form-item>
                    </el-col>
            </el-row>

                <el-button type="primary" size="large" style="float:right;" @click="handleFormData">Save</el-button> 
                <el-button size="large"  style="float:right; margin-right: 10px;" @click="dialogFormVisible = false">Back</el-button> 

            </el-form>
    </el-dialog>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router"
const router = useRouter();


const dialogFormVisible = ref(false);
const leaveFormRef = ref(null);

const dialogFormVisibleFun = () => {
  dialogFormVisible.value = true;
};


const formRef = ref(null);
const showErrorMessage = ref(false);

const formData = reactive({
    description: ""
    
})

const formValidationRules = reactive({
    Description: [
        {
        required: true,
        message: "Please enter todo",
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
            router.push("/expense")
            flashNotification('success','Add Successfully')
        } else {
            flashNotification('error','Something went wrong')
        }
        }
    });

}


defineExpose({
  dialogFormVisibleFun,
});
</script>