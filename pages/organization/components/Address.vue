<template>
  <!-- Register office address -->
  <div class="container-fluid w-90">
    <el-card class="box-card">
      <template #header>
        <div class="card-header d-flex">
          <span class="align-self-center">
            <h4>Registered office address</h4>
          </span>
          <div class="d-flex flex-row-reverse w-80">
            <template v-if="!editModeRegistered">
              <el-button class="w-5" size="large" type="plain" @click="toggleEditModeRegistered">
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              </el-button>
            </template>
          </div>
        </div>
      </template>
      <el-form
        label-position="top"
        label-width="100px"
        :model="formDataRegistered"
        :rules="formValidationRules"
        style="max-width: 100%; border-radius: 15px; height: fluid"
        class="bg-white px-5 py-4 rounded-5"
        ref="formRef"
      >
        <div>
          <div class="row">
            <div class="col-sm-6">
              <div class="row">
                <div class="col-sm-12">
                  <template v-if="!editModeRegistered">
                    <h6>Address</h6>
                    <div >{{ formDataRegistered.rAddress }}</div>
                  </template>
                  <template v-else>
                    <h6>Address</h6>
                    <el-form-item prop="rAddress">
                      <el-input size="large" placeholder="Enter official email" v-model="formDataRegistered.rAddress" />
                    </el-form-item>
                  </template>
                </div>
                <div class="col-sm-12 mt-4">
                  <template v-if="!editModeRegistered">
                    <h6>City</h6>
                    <div>{{ formDataRegistered.rCity }}</div>
                  </template>
                  <template v-else>
                    <h6>Phone Number</h6>
                    <el-form-item prop="rCity">
                      <el-input size="large" placeholder="Enter phone number" v-model="formDataRegistered.rCity" />
                    </el-form-item>
                  </template>
                </div>

                <div class="col-sm-12 mt-4">
                  <template v-if="!editModeRegistered">
                    <h6>Country</h6>
                    <div>{{ formDataRegistered.rCountry }}</div>
                  </template>
                  <template v-else>
                    <h6>Phone Number</h6>
                    <el-form-item prop="rCountry">
                      <el-input size="large" placeholder="Enter phone number" v-model="formDataRegistered.rCountry" />
                    </el-form-item>
                  </template>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="row">
                <div class="col-sm-12">
                  <template v-if="!editModeRegistered">
                    <h6>Pincode</h6>
                    <div>{{ formDataRegistered.rPincode }}</div>
                  </template>
                  <template v-else>
                    <h6>Pincode</h6>
                    <el-form-item prop="rPincode">
                      <el-input size="large" placeholder="Enter personal email" v-model="formDataRegistered.rPincode" />
                    </el-form-item>
                  </template>
                </div>
                <div class="col-sm-12 mt-4">
                  <template v-if="!editModeRegistered">
                    <h6>State</h6>
                    <div>{{ formDataRegistered.rState }}</div>
                  </template>
                  <template v-else>
                    <h6>State</h6>
                    <el-form-item prop="rState">
                      <el-input size="large" placeholder="Enter alternative phone number" v-model="formDataRegistered.rState" />
                    </el-form-item>
                  </template>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3 d-flex flex-row-reverse">
            <template v-if="editModeRegistered">
              <el-button size="large" class="m-3 w-8" type="primary" @click="saveFormRegistered">
                SAVE
              </el-button>
              <el-button size="large" class="m-3 w-8" @click="toggleEditModeRegistered">
                CANCEL
              </el-button>
            </template>
          </div>
        </div>
      </el-form>
    </el-card>
  </div>


    <!-- Corporate office address -->
    
    <div class="container-fluid w-90 mt-4">
      <el-card class="box-card">
        <template #header>
          <div class="card-header d-flex">
            <span class="align-self-center">
              <h4>Corporate office address</h4>
            </span>
            <div class="d-flex flex-row-reverse w-80">
              <template v-if="!editModeCorporate">
                <el-button class="w-5" size="large" type="plain" @click="toggleEditModeCorporate">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </el-button>
              </template>
            </div>
          </div>
        </template>
        <el-form
          label-position="top"
          label-width="100px"
          :model="formDataCorporate"
          :rules="formValidationRules"
          style="max-width: 100%; border-radius: 15px; height: fluid"
          class="bg-white px-5 py-4 rounded-5"
          ref="formRef"
        >
          <div>
            <div class="row">
              <div class="col-sm-6">
                <div class="row">
                  <div class="col-sm-12">
                    <template v-if="!editModeCorporate">
                      <h6>Address</h6>
                      <div >{{ formDataCorporate.cAddress }}</div>
                    </template>
                    <template v-else>
                      <h6>Address</h6>
                      <el-form-item prop="cAddress">
                        <el-input size="large" placeholder="Enter official email" v-model="formDataCorporate.cAddress" />
                      </el-form-item>
                    </template>
                  </div>
                  <div class="col-sm-12 mt-4">
                    <template v-if="!editModeCorporate">
                      <h6>City</h6>
                      <div>{{ formDataCorporate.cCity }}</div>
                    </template>
                    <template v-else>
                      <h6>Phone Number</h6>
                      <el-form-item prop="cCity">
                        <el-input size="large" placeholder="Enter phone number" v-model="formDataCorporate.cCity" />
                      </el-form-item>
                    </template>
                  </div>
  
                  <div class="col-sm-12 mt-4">
                    <template v-if="!editModeCorporate">
                      <h6>Country</h6>
                      <div>{{ formDataCorporate.cCountry }}</div>
                    </template>
                    <template v-else>
                      <h6>Country</h6>
                      <el-form-item prop="cCountry">
                        <el-input size="large" placeholder="Enter phone number" v-model="formDataCorporate.cCountry" />
                      </el-form-item>
                    </template>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="row">
                  <div class="col-sm-12">
                    <template v-if="!editModeCorporate">
                      <h6>Pincode</h6>
                      <div>{{ formDataCorporate.cPincode }}</div>
                    </template>
                    <template v-else>
                      <h6>Pincode</h6>
                      <el-form-item prop="cPincode">
                        <el-input size="large" placeholder="Enter personal email" v-model="formDataCorporate.cPincode" />
                      </el-form-item>
                    </template>
                  </div>
                  <div class="col-sm-12 mt-4">
                    <template v-if="!editModeCorporate">
                      <h6>State</h6>
                      <div>{{ formDataCorporate.cState }}</div>
                    </template>
                    <template v-else>
                      <h6>State</h6>
                      <el-form-item prop="cState">
                        <el-input size="large" placeholder="Enter alternative phone number" v-model="formDataCorporate.cState" />
                      </el-form-item>
                    </template>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-3 d-flex flex-row-reverse">
              <template v-if="editModeCorporate">
                <el-button size="large" class="m-3 w-8" type="primary" @click="saveFormCorporate">
                  SAVE
                </el-button>
                <el-button size="large" class="m-3 w-8" @click="toggleEditModeCorporate">
                  CANCEL
                </el-button>
              </template>
            </div>
          </div>
        </el-form>
      </el-card>
    </div>
  
</template>

<script setup>
import { ref, reactive } from 'vue';

const formRef = ref(null);

const formDataRegistered = reactive({
  rAddress: "Blueray Automation Pvt Ltd",
  rCity: "Malad west, Mumbai",
  rPincode: 400064,
  rState: "Maharashtra",
  rCountry: "India"
});
const formDataCorporate = reactive({
  cAddress: "Hexafold Technologies Pvt Ltd",
  cCity: "Malad west, Mumbai",
  cPincode: 400064,
  cState: "Maharashtra",
  cCountry: "India"
});

const formValidationRules = reactive({
  officialEmail: [
    {
      required: true,
      message: "Please enter official email",
      trigger: "blur",
    },
  ],
  phone: [
    {
      required: true,
      message: "Please enter phone number",
      trigger: "blur",
    },
  ],
  pEmail: [
    {
      required: true,
      message: "Please enter personal email",
      trigger: "blur",
    },
  ],
  altPhone: [
    {
      required: true,
      message: "Please enter alternative phone number",
      trigger: "blur",
    },
  ],
});

const editModeRegistered = ref(false);
const editModeCorporate = ref(false);

const toggleEditModeRegistered = () => {
  editModeRegistered.value = !editModeRegistered.value;
  // Reset form data if switching back to view mode
  if (!editModeRegistered.value) {
    // You may want to reset the form data here
  }
};
const toggleEditModeCorporate = () => {
  editModeCorporate.value = !editModeCorporate.value;
  // Reset form data if switching back to view mode
  if (!editModeCorporate.value) {
    // You may want to reset the form data here
  }
};

const saveFormRegistered = () => {
  // Perform form submission or update here
  editModeRegistered.value = false;
};

const saveFormCorporate = () => {
  // Perform form submission or update here
  editModeCorporate.value = false;
};

definePageMeta({
  layout: "layout",
});
</script>

<style scoped>
/* Add your styles here */
</style>
