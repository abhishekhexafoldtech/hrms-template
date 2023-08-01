<template>
    <div class="mt-8 container-fluid shadow p-3 bg-body rounded w-80">
        <span ><h5 style="margin-left:30px;">Add Expense</h5></span>
       <div >
        <el-form
            label-position="top"
            label-width="100px"
            :model="formData"
            :rules="formValidationRules"
            style="max-width: 100%; border-radius: 15px; height: 760px"
            class="bg-white px-5 py-4 rounded-5"
            ref="formRef"
        >
        <el-row :gutter="20">
            <el-col :span="12">
                <el-form-item label="Item Name" prop="itemName">
                    <el-input size="large" placeholder="Enter item name" v-model="formData.itemName" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="Item Price" prop="price">
                    <el-input size="large" placeholder="Enter Item Price" v-model="formData.price" />
                </el-form-item>
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :xs="8" :sm="8" :lg="8" :xl="8">
                    <el-form-item label="Purchase Date"  prop="purchaseDate">
                        <el-date-picker
                            v-model="formData.purchaseDate"
                            type="date"
                            placeholder="Pick a day"
                        />
                    </el-form-item>
                 </el-col>
            
        </el-row>
        <el-row>
             <el-col :xs="24" :sm="24" :lg="24" :xl="24">
                    <el-form-item label="Description" prop="description">
                        <el-input type="textarea" v-model="formData.description"/>
                    </el-form-item>
                </el-col>
        </el-row>

            <el-button type="primary" size="large" style="float:right;" @click="handleFormData">Save</el-button> 
            <el-button size="large"  style="float:right; margin-right: 10px;" @click="handleCancle">Back</el-button> 

        </el-form>
       </div>

    </div>
</template>

<script setup>
import { useRouter } from "vue-router"
const router = useRouter();

const formRef = ref(null);
const showErrorMessage = ref(false);

const formData = reactive({
    itemName: "",
    price: "",
    startDate: "",
    description: ""
    
})

const formValidationRules = reactive({
    itemName: [
        {
        required: true,
        message: "Please enter item name",
        trigger: "blur",
        },
    ],
    purchaseDate: [
        {
        required: true,
        message: "Please enter purchase date",
        trigger: "blur",
        },
    ],
        price: [
        {
        required: true,
        message: "Please enter price",
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

function handleCancle() {
    router.push("/expense")
}



definePageMeta({
    layout: "layout"
})
</script>