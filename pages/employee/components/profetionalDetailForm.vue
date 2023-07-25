<template>
  <div class="form-container">
    <div class="main-form-container">
      <div class="ms-3">
        <el-form
          :inline="true"
          :model="professionalForm"
          :rules="professionalFormRules"
          ref="professionalFormRef"
          label-width="120px"
          label-position="top"
        >
          <div class="row">
            <!-- first row -->
            <div class="row">
              <div class="col-12 col-md-4">
                <el-form-item label="Experience" prop="experience">
                  <el-input
                    style="width: 100%"
                    placeholder="Experience"
                    v-model="professionalForm.experience"
                    required
                  ></el-input>
                </el-form-item>
              </div>

              <div class="col-12 col-md-4">
                <el-form-item label="Skill Set" prop="skill_set">
                  <el-input
                    style="width: 100%"
                    placeholder="Skill Set"
                    v-model="professionalForm.skill_set"
                    required
                  ></el-input>
                </el-form-item>
              </div>

              <div class="col-12 col-md-4">
                <el-form-item
                  label="Highest Qualification"
                  prop="highest_qualification"
                >
                  <el-input
                    style="width: 100%"
                    placeholder="Highest Qualification"
                    v-model="professionalForm.highest_qualification"
                    required
                  ></el-input>
                </el-form-item>
              </div>
            </div>

            <!-- second row -->

            <div class="row">
              <div class="col-12 col-md-4">
                <el-form-item label="Location" prop="location">
                  <el-input
                    style="width: 100%"
                    placeholder="Location"
                    v-model="professionalForm.location"
                    required
                  ></el-input>
                </el-form-item>
              </div>

              <div class="col-12 col-md-4">
                <el-form-item label="Current Salary" prop="current_salary">
                  <el-input
                    style="width: 100%"
                    placeholder="Current Salary"
                    v-model="professionalForm.current_salary"
                    required
                  ></el-input>
                </el-form-item>
              </div>
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineExpose, defineEmits } from "vue";
const emit = defineEmits();
//  professionalForm
const professionalForm = reactive({
  experience: "",
  skill_set: "",
  highest_qualification: "",
  location: "",
  current_salary: "",
});

//profetional form validation

const professionalFormRules = ref({
  experience: [
    {
      required: true,
      message: "Please enter your experience",
      trigger: "blur",
    },
  ],
  skill_set: [
    { required: true, message: "Please enter your skill set", trigger: "blur" },
  ],
  highest_qualification: [
    {
      required: true,
      message: "Please enter your highest qualification",
      trigger: "blur",
    },
  ],
  location: [
    { required: true, message: "Please enter your location", trigger: "blur" },
  ],
  current_salary: [
    {
      required: true,
      message: "Please enter your current salary",
      trigger: "blur",
    },
    {
      validator: (rule, value, callback) => {
        if (!Number.isNaN(parseFloat(value))) {
          const salary = parseFloat(value);
          if (salary < 0) {
            callback(new Error("Salary must be a positive number"));
          } else {
            callback();
          }
        } else {
          callback(new Error("Invalid salary value"));
        }
      },
      trigger: "blur",
    },
  ],
});

//Professional Details
const professionalFormRef = ref(null);
const handleProfessionalForm = () => {
  //  emit("changeForm");
  professionalFormRef.value.validate((valid) => {
    if (valid) {
      console.log("Profetional Form Data:", JSON.stringify(professionalForm));
      // Your form submission logic here...
      emit("changeForm");
    }
    // If form validation fails, prevent moving to the next step
    return false;
  });
};

defineExpose({
  handleProfessionalForm,
});
</script>
<style></style>
