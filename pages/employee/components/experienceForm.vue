<template>
<div class="form-container">
        <div class="main-form-container">
          <div class="ms-3">
            <span @click="incrementExperience" class="float-end">
              <i class="ri-add-circle-fill"></i>
            </span>

            <el-form
              v-for="item in experience"
              :inline="true"
              :model="experienceForm"
              :rules="experienceFormRules"
              label-width="120px"
              label-position="top"
            >
              <p class="w-95 text-bg-light">Experience Detail</p>
              <div class="row">
                <!-- first row -->
                <div class="row">
                  <div class="col-12 col-md-4">
                    <el-form-item label="Occupation" prop="occupation">
                      <el-input
                        style="width: 100%"
                        placeholder="Occupation"
                        v-model="experienceForm.occupation"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>

                  <div class="col-12 col-md-4">
                    <el-form-item label="Company" prop="company">
                      <el-input
                        style="width: 100%"
                        placeholder="Company"
                        v-model="experienceForm.company"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>

                  <div class="col-12 col-md-4">
                    <el-form-item label="Summary" prop="summary">
                      <el-input
                        style="width: 100%"
                        placeholder="Summary"
                        v-model="experienceForm.summary"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>

                <!-- second row -->

                <div class="row">
                  <div class="col-12 col-md-4">
                    <el-form-item label="Duration" prop="duration">
                      <el-input
                        style="width: 100%"
                        placeholder="Duration"
                        v-model="experienceForm.duration"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>

                  <div class="col-12 col-md-4">
                    <el-form-item
                      label="Currently Work Here"
                      prop="currently_work_here"
                    >
                      <el-input
                        style="width: 100%"
                        placeholder="Currently Work Here"
                        v-model="experienceForm.currently_work_here"
                        required
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>
              </div>
            </el-form>
            <div class="row">
              <div class="col-12">
                <p
                  v-show="minusIcon"
                  @click="decrementExperience"
                  class="float-end"
                >
                  <i class="ri-subtract-line"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script setup>
import { ref ,defineExpose,defineEmits} from "vue";
const experience = ref(1);
const minusIcon = ref(true);
const emit=defineEmits()
// experienceForm
const experienceFormData = ref([]);
const experienceForm = reactive({
  occupation: "",
  company: "",
  summary: "",
  duration: "",
  currently_work_here: "",
});

//experience form validation

const experienceFormRules = ref({
  occupation: [
    {
      required: true,
      message: "Please enter your occupation",
      trigger: "blur",
    },
  ],
  company: [
    {
      required: true,
      message: "Please enter the company name",
      trigger: "blur",
    },
  ],
  summary: [
    { required: true, message: "Please enter a summary", trigger: "blur" },
  ],
  duration: [
    { required: true, message: "Please enter the duration", trigger: "blur" },
  ],
  currently_work_here: [
    {
      required: true,
      message: "Please specify if you currently work here",
      trigger: "blur",
    },
  ],
});

//Experience

const incrementExperience = () => {
  experienceFormData.value.push(experienceForm);
  console.log(experienceFormData.value);
  experience.value = experience.value + 1;
};

const decrementExperience = () => {
  experienceFormData.value.pop();
  console.log(experienceFormData.value);
  experience.value = experience.value - 1;
};

const handleExperienceForm = () => {
  console.log(experienceFormData.value);
  emit("changeForm")
};

defineExpose({
  handleExperienceForm
})

</script>
<style>
    
</style>