<template>
  <el-form
    :inline="true"
    :model="addressForm"
    :rules="addressFormRules"
    ref="addressFormRef"
    label-width="120px"
    label-position="top"
  >
    <div class="form_inner_two">
      <!-- Present Address Details -->
      <div>
        <h3 class="form_title">Present Address</h3>
        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="Address" prop="presentAddress.address">
              <el-input
                placeholder="Address"
                v-model="addressForm.presentAddress.address"
                required
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="City" prop="presentAddress.city">
              <el-input
                placeholder="City"
                v-model="addressForm.presentAddress.city"
                required
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="State" prop="presentAddress.state">
              <el-input
                placeholder="State"
                v-model="addressForm.presentAddress.state"
                required
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="Country" prop="presentAddress.country">
              <el-select
                v-model="addressForm.presentAddress.country"
                style="width: 100%"
                placeholder="Country"
                required
              >
                <el-option label="India" value="India"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="PIN" prop="presentAddress.pin">
              <el-input
                placeholder="PIN"
                v-model="addressForm.presentAddress.pin"
                required
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </div>
      <!-- Permanent Address Details -->
      <div>
        <div class="title_flex">
          <h3 class="form_title">Permanent Address</h3>
          <p class="form_toggle">
            <span>Same Present Address</span>
            <el-switch v-model="addressRef"></el-switch>
          </p>
        </div>
        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="Address" prop="permanentAddress.address">
              <el-input
                placeholder="Address"
                v-model="addressForm.permanentAddress.address"
                required
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="City" prop="permanentAddress.city">
              <el-input
                placeholder="City"
                v-model="addressForm.permanentAddress.city"
                required
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="State" prop="permanentAddress.state">
              <el-input
                placeholder="State"
                v-model="addressForm.permanentAddress.state"
                required
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="Country" prop="permanentAddress.country">
              <el-select
                v-model="addressForm.permanentAddress.country"
                style="width: 100%"
                placeholder="Country"
                required
              >
                <el-option label="India" value="India"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="PIN" prop="permanentAddress.pin">
              <el-input
                placeholder="PIN"
                v-model="addressForm.permanentAddress.pin"
                required
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-form>
</template>

<script setup>
import { ref, defineExpose, defineEmits, reactive, watch } from "vue";
const addressRef = ref(false);
const emit = defineEmits();

// Address Form
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

// Address Validations
const addressFormRules = ref({
  // Present Address Validation
  "presentAddress.address": [
    {
      required: true,
      message: "Please enter the present address",
      trigger: "blur",
    },
  ],
  "presentAddress.city": [
    {
      required: true,
      message: "Please enter the city for present address",
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
      message: "Please select the country for present address",
      trigger: "change",
    },
  ],
  "presentAddress.pin": [
    {
      required: true,
      message: "Please enter the PIN for present address",
      trigger: "blur",
    },
  ],

  // Permanent Address Validation
  "permanentAddress.address": [
    {
      required: true,
      message: "Please enter the permanent address",
      trigger: "blur",
    },
  ],
  "permanentAddress.city": [
    {
      required: true,
      message: "Please enter the city for permanent address",
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
      message: "Please select the country for permanent address",
      trigger: "change",
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

// Address Form Ref
const addressFormRef = ref(null);

// Handle Address Form Submission
const handleAddressForm = () => {
  console.log("AddressForm Data:", JSON.stringify(addressForm));
  emit("changeForm");
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

// Set permanent address
watch(addressRef, (newValue) => {
  if (newValue) {
    addressForm.permanentAddress = { ...addressForm.presentAddress };
  } else {
    addressForm.permanentAddress = {
      address: "",
      city: "",
      state: "",
      country: "",
      pin: "",
    };
  }
});

defineExpose({
  handleAddressForm,
});
</script>
