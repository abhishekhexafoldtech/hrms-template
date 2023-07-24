<template>
  <div class="form-container">
    <div class="main-form-container">
      <div class="ms-3">
        <el-form
          :inline="true"
          :model="addressForm"
          :rules="addressFormRules"
          ref="addressFormRef"
          class="demo-form-inline"
          label-width="120px"
          label-position="top"
        >
          <div class="row">
            <!-- Present Address Details -->
            <p>Present address</p>
            <div class="row">
              <div class="col-12 col-md-8">
                <el-form-item label="Address" prop="presentAddress.address">
                  <el-input
                    style="width: 100%"
                    placeholder="Address"
                    v-model="addressForm.presentAddress.address"
                    required
                  ></el-input>
                </el-form-item>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-4">
                <el-form-item label="State" prop="presentAddress.state">
                  <el-input
                    style="width: 100%"
                    placeholder="State"
                    v-model="addressForm.presentAddress.state"
                    required
                  ></el-input>
                </el-form-item>
              </div>
              <div class="col-12 col-md-4">
                <el-form-item label="Country" prop="presentAddress.country">
                  <el-input
                    style="width: 100%"
                    placeholder="Country"
                    v-model="addressForm.presentAddress.country"
                    required
                  ></el-input>
                </el-form-item>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-4">
                <el-form-item label="PIN" prop="presentAddress.pin">
                  <el-input
                    style="width: 100%"
                    placeholder="PIN"
                    v-model="addressForm.presentAddress.pin"
                    required
                  ></el-input>
                </el-form-item>
              </div>
            </div>
          </div>
          <!-- Permanent Address Details -->
          <div class="row">
            <p>Permanent address</p>
            <div class="row">
              <div class="col-12 col-md-8">
                <el-form-item label="Address" prop="permanentAddress.address">
                  <el-input
                    style="width: 100%"
                    placeholder="Address"
                    v-model="addressForm.permanentAddress.address"
                    required
                  ></el-input>
                </el-form-item>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-4">
                <el-form-item label="State" prop="permanentAddress.state">
                  <el-input
                    style="width: 100%"
                    placeholder="State"
                    v-model="addressForm.permanentAddress.state"
                    required
                  ></el-input>
                </el-form-item>
              </div>
              <div class="col-12 col-md-4">
                <el-form-item label="Country" prop="permanentAddress.country">
                  <el-input
                    style="width: 100%"
                    placeholder="Country"
                    v-model="addressForm.permanentAddress.country"
                    required
                  ></el-input>
                </el-form-item>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-4">
                <el-form-item label="PIN" prop="permanentAddress.pin">
                  <el-input
                    style="width: 100%"
                    placeholder="PIN"
                    v-model="addressForm.permanentAddress.pin"
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

defineExpose({
  handleAddressForm,
});
</script>
<style></style>
