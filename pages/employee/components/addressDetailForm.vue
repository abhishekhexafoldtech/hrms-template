<template>
  <el-form :inline="true" :model="addressForm" :rules="addressFormRules" ref="addressFormRef" label-width="120px"
    label-position="top">
    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <!-- Present Address Details -->
        <div>
          <h3 class="form_title">Present Address</h3>
          <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item label="Address" prop="presentAddress.address">
                <el-input placeholder="Address" v-model="addressForm.presentAddress.address"
                  required></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item label="State" prop="presentAddress.state">
                <el-input placeholder="State" v-model="addressForm.presentAddress.state"
                  required></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item label="Country" prop="presentAddress.country">
                <el-input placeholder="Country" v-model="addressForm.presentAddress.country"
                  required></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item label="PIN" prop="presentAddress.pin">
                <el-input placeholder="PIN" v-model="addressForm.presentAddress.pin"
                  required></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <!-- Permanent Address Details -->
        <div>
          <el-row class="d-flex">
            <h3 class="form_title">Permanent Address</h3>
            <p> (same permanent address) 
              <el-switch  v-model="addressRef" class="ml-2" style=" --el-switch-on-color: #13ce66;  --el-switch-off-color: #ff4949; "></el-switch>
            </p>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item label="Address" prop="permanentAddress.address">
                <el-input placeholder="Address" v-model="addressForm.permanentAddress.address"
                  required></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item label="State" prop="permanentAddress.state">
                <el-input placeholder="State" v-model="addressForm.permanentAddress.state"
                  required></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item label="Country" prop="permanentAddress.country">
                <el-input placeholder="Country" v-model="addressForm.permanentAddress.country"
                  required></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item label="PIN" prop="permanentAddress.pin">
                <el-input placeholder="PIN" v-model="addressForm.permanentAddress.pin"
                  required></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </el-form>
</template>
<script setup>
import { ref, defineExpose, defineEmits } from "vue";
const addressRef = ref(false);
const emit = defineEmits();
// addressForm
const addressForm = reactive({
  presentAddress: {
    address: "",
    city: "",
    state: "",
    country: "",
    pin: "",
  },
  permanentAddress: {
    address: "",
    city: "",
    state: "",
    country: "",
    pin: "",
  },
});

//Address validations

const addressFormRules = ref({
  "presentAddress.address": [
    {
      required: true,
      message: "Please enter the present address",
      trigger: "blur",
    },
  ],
  "presentAddress.state": [
    {
      required: true,
      message: "Please enter the state for present address",
      trigger: "blur",
    },
  ],
  "presentAddress.country": [
    {
      required: true,
      message: "Please enter the country for present address",
      trigger: "blur",
    },
  ],
  "presentAddress.pin": [
    {
      required: true,
      message: "Please enter the PIN for present address",
      trigger: "blur",
    },
  ],
  "permanentAddress.address": [
    {
      required: true,
      message: "Please enter the permanent address",
      trigger: "blur",
    },
  ],
  "permanentAddress.state": [
    {
      required: true,
      message: "Please enter the state for permanent address",
      trigger: "blur",
    },
  ],
  "permanentAddress.country": [
    {
      required: true,
      message: "Please enter the country for permanent address",
      trigger: "blur",
    },
  ],
  "permanentAddress.pin": [
    {
      required: true,
      message: "Please enter the PIN for permanent address",
      trigger: "blur",
    },
  ],
});

/// Address Details
const addressFormRef = ref(null);

const handleAddressForm = () => {
  // emit("changeForm");
  addressFormRef.value.validate((valid) => {
    if (valid) {
      console.log("AddressForm Data:", JSON.stringify(addressForm));
      // Your form submission logic here...
      emit("changeForm");
    }
    // If form validation fails, prevent moving to the next step
    return false;
  });
};

//set perment address
watch(addressRef, (newValue) => {
  if (newValue) {
    addressForm.permanentAddress = { ...addressForm.presentAddress };
  }
});

defineExpose({
  handleAddressForm,
});
</script>
<style></style>
