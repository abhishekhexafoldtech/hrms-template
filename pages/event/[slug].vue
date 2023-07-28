<template>
    <div class="mt-8">
        <span ><h5 style="margin-left:30px;">Add Event</h5></span>
       <el-card style="margin:30px;">
        <el-form
            label-position="top"
            label-width="100px"
            :model="formData"
            :rules="formValidationRules"
            ref="formRef"
        >
            <el-row :gutter="10">
                <el-col :xs="8" :sm="8" :lg="8" :xl="8">
                    <el-form-item label="Event Name" prop="name">
                        <el-input v-model="formData.name" />
                    </el-form-item>
                 </el-col>
                <el-col :xs="8" :sm="8" :lg="8" :xl="8">
                    <el-form-item label="Where" prop="where" >
                        <el-input v-model="formData.where" />
                    </el-form-item>
                 </el-col>
                <el-col :xs="8" :sm="8" :lg="8" :xl="8">
                    <el-form-item label="Event Link" prop="link">
                        <el-input v-model="formData.link"  />
                    </el-form-item>
                 </el-col>
                <el-col :xs="6" :sm="6" :lg="6" :xl="6">
                    <el-form-item label="Start Date"  prop="startDate">
                        <el-date-picker
                            v-model="formData.startDate"
                            type="date"
                            placeholder="Pick a day"
                        />
                    </el-form-item>
                 </el-col>
                <el-col :xs="6" :sm="6" :lg="6" :xl="6">
                    <el-form-item label="Start Time" prop="startTime">
                        <el-time-picker v-model="formData.startTime" placeholder="Arbitrary time" />
                    </el-form-item>
                 </el-col>
                <el-col :xs="6" :sm="6" :lg="6" :xl="6">
                    <el-form-item label="End Date" prop="endDate">
                        <el-date-picker
                            v-model="formData.endDate"
                            type="date"
                            placeholder="Pick a day"
                        />
                    </el-form-item>
                 </el-col>
                <el-col :xs="6" :sm="6" :lg="6" :xl="6">
                    <el-form-item label="End Time" prop="endTime">
                        <el-time-picker v-model="formData.endTime" placeholder="Arbitrary time" />
                    </el-form-item>
                 </el-col>
                <el-col :xs="8" :sm="8" :lg="8" :xl="8">
                    <el-form-item label="" prop="productName">
                       <el-checkbox  label="Repeat" v-model="formData.isRepeat" size="large" />
                    </el-form-item>
                 </el-col>
                <el-col :xs="8" :sm="8" :lg="8" :xl="8">
                    <el-form-item label="" prop="productName">
                       <el-checkbox  label="Reminder" v-model="formData.isReminder" size="large" />
                    </el-form-item>
                 </el-col>

                 <el-col :xs="8" :sm="8" :lg="8" :xl="8">
                   &nbsp;
                 </el-col>

                 <el-col v-if="formData.isRepeat" :xs="8" :sm="8" :lg="8" :xl="8">
                    <el-form-item label="Repeat every" prop="repeatSamp">
                        <el-input v-model="formData.repeatSamp" type="number"/>
                    </el-form-item>
                 </el-col>

                 <el-col v-if="formData.isRepeat" :xs="8" :sm="8" :lg="8" :xl="8">
                    <el-form-item label="Event Name" prop="name">
                        <el-select
                            v-model="formData.repeatSampVal"
                            placeholder="Select"
                            style="width: 240px"
                            >
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </el-select>
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

            <br>
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
    name: "",
    where: "",
    link: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    isRepeat: "",
    isReminder: "",
    description: "",
    repeatSamp: "",
    repeatSampVal: ""
})

const formValidationRules = reactive({
    name: [
        {
        required: true,
        message: "Please enter event name",
        trigger: "blur",
        },
    ],
    startDate: [
        {
        required: true,
        message: "Please enter event name",
        trigger: "blur",
        },
    ],
    startTime: [
        {
        required: true,
        message: "Please enter event name",
        trigger: "blur",
        },
    ],
    endDate: [
        {
        required: true,
        message: "Please enter event name",
        trigger: "blur",
        },
    ],
    endTime: [
        {
        required: true,
        message: "Please enter event name",
        trigger: "blur",
        },
    ],
})

const options = [
  {
    value: 'Day(s)',
    label: 'Day(s)',
  },
  {
    value: 'Week(s)',
    label: 'Week(s)',
  },
  {
    value: 'Month(s)',
    label: 'Month(s)',
  },
  {
    value: 'Year(s)',
    label: 'Year(s)',
  }
]

function handleFormData() {
    formRef.value.validate((valid) => {
        let val = showErrorMessage.value;
        if (valid && val === false) {
        // Form is valid, do something with the data
        console.log("Form submitted:", JSON.stringify(formData));
        if(true) {
            router.push("/event")
            flashNotification('success','Add Successfully')
        } else {
            flashNotification('error','Something went wrong')
        }
        }
    });

}

function handleCancle() {
    router.push("/event")
}



definePageMeta({
    layout: "layout"
})
</script>