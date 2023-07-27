<template>
  <div class="mt-10">
    <el-dialog v-model="dialogFormVisible" width="60%" title="Apply Leave">
      <el-form
        :model="formData"
        :rules="rules"
        ref="leaveFormRef"
        label-position="top"
        class="leave-form"
      >
        <el-row :gutter="20">
          <!-- Leave Duration field -->
          <el-col :span="8" :xs="24">
            <el-form-item label="Leave Duration">
              <el-radio-group v-model="formData.leaveDuration">
                <el-radio label="fullLeave">Full Leave</el-radio>
                <el-radio label="halfLeave">Half Leave</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>

          <!-- Leave Type field -->
          <el-col :span="12" :xs="24">
            <el-form-item label="Leave Type" prop="leaveType">
              <el-select
                v-model="formData.leaveType"
                placeholder="Select leave type"
              >
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

          <!-- Start Date field -->
          <el-col :span="24" :md="8">
            <el-form-item label="Start Date" prop="startDate">
              <el-date-picker
                v-model="formData.startDate"
                type="date"
                placeholder="Select start date"
              ></el-date-picker>
            </el-form-item>
          </el-col>

          <!-- End Date field for fullLeave -->
          <el-col
            :span="24"
            :md="8"
            v-if="formData.leaveDuration === 'fullLeave'"
          >
            <el-form-item label="End Date" prop="endDate">
              <el-date-picker
                v-model="formData.endDate"
                type="date"
                placeholder="Select end date"
              ></el-date-picker>
            </el-form-item>
          </el-col>

          <!-- Start Time field for halfLeave -->
          <el-col
            :span="24"
            :md="8"
            v-if="formData.leaveDuration === 'halfLeave'"
          >
            <el-form-item label="Start Time" prop="startTime">
              <el-time-picker
                v-model="formData.startTime"
                placeholder="Select start time"
              ></el-time-picker>
            </el-form-item>
          </el-col>

          <!-- End Time field for halfLeave -->
          <el-col
            :span="24"
            :md="8"
            v-if="formData.leaveDuration === 'halfLeave'"
          >
            <el-form-item label="End Time" prop="endTime">
              <el-time-picker
                v-model="formData.endTime"
                placeholder="Select end time"
              ></el-time-picker>
            </el-form-item>
          </el-col>

          <!-- Reason field -->
          <el-col :span="24">
            <el-form-item label="Reason" prop="reason">
              <el-input
                v-model="formData.reason"
                type="textarea"
                :rows="4"
                placeholder="Enter the reason for leave"
              ></el-input>
            </el-form-item>
          </el-col>

          <!-- Form buttons -->
          <el-col :span="24">
            <el-form-item>
              <el-button type="primary" @click="submitForm">Submit</el-button>
              <el-button @click="resetForm">Reset</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { format, isFuture, isToday, isBefore } from "date-fns";

const dialogFormVisible = ref(false);

const formData = ref({
  leaveDuration: "fullLeave",
  leaveType: "",
  startDate: null,
  endDate: null,
  startTime: null,
  endTime: null,
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
        if (!isToday(value) && !isFuture(value)) {
          formData.value.startDate = null;
          callback(
            new Error("Start date accepts only current and future dates")
          );
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
        if (isBefore(value, formData.value.startDate)) {
          formData.endDate = null;
          callback(new Error("End date must be greater than start date"));
        } else if (formData.value.startDate === null) {
          formData.value.endDate = null;
          callback(new Error("Please select the start date first"));
        } else {
          callback();
        }
      },
      trigger: "change",
    },
  ],
  startTime: [
    {
      required: true,
      message: "Please select the start time",
      trigger: "blur",
    },
    // {
    //   validator: (rule, value, callback) => {
    //     if (!isToday(value) && !isFuture(value)) {
    //       callback(new Error("Start time accepts only current and future time "));
    //     } else {
    //       callback();
    //     }
    //   },
    //   trigger: "blur",
    // },
  ],
  endTime: [
    {
      required: true,
      message: "Please select the end time",
      trigger: "blur",
    },
    {
      validator: (rule, value, callback) => {
        if (
          formData.value.startDate !== null &&
          !isBefore(formData.value.startTime, value)
        ) {
          formData.value.endTime = null;
          callback(new Error("End time must be greter than start time"));
        } else if (formData.value.startTime === null) {
          formData.value.endTime = null;
          callback(new Error("Plese first select start time"));
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
      console.log("Form submitted", JSON.stringify(formData.value));
    } else {
      console.log("Form validation failed");
    }
  });
};

// Set default values
const resetForm = () => {
  formData.value.leaveDuration = "fullLeave";
  formData.value.leaveType = "";
  formData.value.startDate = null;
  formData.value.endDate = null;
  formData.value.startTime = null;
  formData.value.endTime = null;
  formData.value.reason = "";
};

const dialogFormVisibleFun = () => {
  dialogFormVisible.value = true;
};

// const getDefaultLeaveType = () => {
//   if (formData.leaveDuration === "fullLeave") {
//     return formData.leaveType;
//   } else {
//     return `half_${formData.leaveType}`;
//   }
// };
// Watch for changes in leaveDuration and update leaveType accordingly
// watchEffect(() => {
//   formData.leaveType = getDefaultLeaveType();
// });

defineExpose({
  dialogFormVisibleFun,
});
</script>

<style scoped>
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
