<template>
  <div class="form-container mt-10">
    <el-form
      :model="form"
      :rules="rules"
      ref="leaveFormRef"
      label-position="top"
      class="leave-form"
    >
      <el-row :gutter="20">
        <el-col :span="24" :sm="12" :md="8">
          <el-form-item label="Leave Type" prop="leaveType">
            <el-select v-model="form.leaveType" placeholder="Select leave type">
              <el-option label="Vacation" value="vacation"></el-option>
              <el-option label="Sick Leave" value="sick_leave"></el-option>
              <el-option
                label="Personal Leave"
                value="personal_leave"
              ></el-option>
              <el-option label="Other" value="other"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24" :sm="12" :md="8">
          <el-form-item label="Start Date" prop="startDate">
            <el-date-picker
              v-model="form.startDate"
              type="date"
              placeholder="Select start date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="24" :sm="12" :md="8">
          <el-form-item label="End Date" prop="endDate">
            <el-date-picker
              v-model="form.endDate"
              type="date"
              placeholder="Select end date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="Reason" prop="reason">
        <el-input
          v-model="form.reason"
          type="textarea"
          :rows="4"
          placeholder="Enter the reason for leave"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">Submit</el-button>
        <el-button @click="resetForm">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { format, isFuture, isToday ,isBefore} from "date-fns";
const form = ref({
  leaveType: "",
  startDate: null,
  endDate: null,
  reason: "",
});

const rules = {
  leaveType: [
    {
      required: true,
      message: "Please select the leave type",
      trigger: "blur",
    },
  ],
  startDate: [
    {
      required: true,
      message: "Please select the start date",
      trigger: "blur",
    },
    {
      validator: (rule, value, callback) => {
        if (!isToday(value)&&!isFuture(value)) {
          form.value.startDate = null;
            callback(new Error("Start date accept only current and future date"));
          } else {
            callback();
          }
        
      },
      trigger: "change",
    },
  ],
  endDate: [
    {
      required: true,
      message: "Please select the end date",
      trigger: "blur",
    },
    {
      validator: (rule, value, callback) => {
        if (isBefore(value,form.value.startDate)) {
          form.value.endDate = null;
            callback(new Error("End date must be greater than start date"));
          } else if(form.value.startDate===null){
            form.value.endDate = null;
            callback(new Error("First select start date"));
          } else {
            callback();
          }
        
      },
      trigger: "change",
      
    },
  ],
  reason: [
    {
      required: true,
      message: "Please enter the reason for leave",
      trigger: "blur",
    },
  ],
};

const leaveFormRef = ref(null);
const submitForm = () => {
  leaveFormRef.value.validate((valid) => {
    if (valid) {
      // Handle form submission here
      console.log("Form submitted", JSON.stringify(form.value));
    } else {
      console.log("Form validation failed");
    }
  });
};

const resetForm = () => {
  form.value = {
    leaveType: "",
    startDate: null,
    endDate: null,
    reason: "",
  };
};

definePageMeta({
  layout: "layout",
});
</script>

<style>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #e0e6ed;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
}

.el-form-item__label {
  font-weight: bold;
  color: #333;
}

.el-button {
  margin-right: 10px;
}

/* Mobile responsiveness */
@media screen and (max-width: 767px) {
  .el-form-item {
    margin-bottom: 10px;
  }

  .el-button {
    width: 100%;
    margin-top: 10px;
  }
}

</style>
