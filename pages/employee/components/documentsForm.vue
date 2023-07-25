<template>
 <div class="form-container">
        <div class="main-form-container">
          <div class="ms-3">
            <el-form
              :inline="true"
              :model="candidateForm"
              :rules="documentFormRules"
              label-width="120px"
              label-position="top"
            >
              <div class="row">
                <!-- first row -->
                <div class="row">
                  <div class="col-12 col-md-4">
                    <el-form-item label="Adhar Card" prop="adharCard">
                      <el-upload
                        v-model:file-list="fileList"
                        class="upload-demo"
                        multiple="false"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :limit="3"
                        :on-exceed="handleExceed"
                      >
                        <el-button type="primary">Click to upload</el-button>
                        <template #tip>
                          <div class="el-upload__tip">
                            jpg/png files with a size less than 500KB.
                          </div>
                        </template>
                      </el-upload>
                    </el-form-item>
                  </div>

                  <div class="col-12 col-md-4">
                    <el-form-item label="Pan Card" prop="panCard">
                      <el-upload
                        v-model:file-list="fileList"
                        class="upload-demo"
                        multiple="false"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :limit="3"
                        :on-exceed="handleExceed"
                      >
                        <el-button type="primary">Click to upload</el-button>
                        <template #tip>
                          <div class="el-upload__tip">
                            jpg/png files with a size less than 500KB.
                          </div>
                        </template>
                      </el-upload>
                    </el-form-item>
                  </div>

                  <div class="col-12 col-md-4">
                    <el-form-item
                      label="Passport Size Photo"
                      prop="passportPhoto"
                    >
                      <el-upload
                        v-model:file-list="fileList"
                        class="upload-demo"
                        multiple="false"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :limit="3"
                        :on-exceed="handleExceed"
                      >
                        <el-button type="primary">Click to upload</el-button>
                        <template #tip>
                          <div class="el-upload__tip">
                            jpg/png files with a size less than 500KB.
                          </div>
                        </template>
                      </el-upload>
                    </el-form-item>
                  </div>
                </div>

                <!-- second row -->

                <div class="row">
                  <div class="col-12 col-md-4">
                    <el-form-item
                      label="Experience Letter"
                      prop="experienceLetter"
                    >
                      <el-upload
                        v-model:file-list="fileList"
                        class="upload-demo"
                        multiple="false"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :limit="3"
                        :on-exceed="handleExceed"
                      >
                        <el-button type="primary">Click to upload</el-button>
                        <template #tip>
                          <div class="el-upload__tip">
                            jpg/png files with a size less than 500KB.
                          </div>
                        </template>
                      </el-upload>
                    </el-form-item>
                  </div>

                  <div class="col-12 col-md-4">
                    <el-form-item
                      label="Other Certificate"
                      prop="otherCertificate"
                    >
                      <el-upload
                        v-model:file-list="fileList"
                        class="upload-demo"
                        multiple="false"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :limit="3"
                        :on-exceed="handleExceed"
                      >
                        <el-button type="primary">Click to upload</el-button>
                        <template #tip>
                          <div class="el-upload__tip">
                            jpg/png files with a size less than 500KB.
                          </div>
                        </template>
                      </el-upload>
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
import { Plus } from "@element-plus/icons-vue";
import { ref ,defineExpose,defineEmits} from "vue";

const emit=defineEmits()
//document form validation

const documentFormRules = ref({
  adharCard: [
    {
      required: true,
      message: "Please upload your Adhar Card",
      trigger: "change",
    },
  ],
  panCard: [
    {
      required: true,
      message: "Please upload your PAN Card",
      trigger: "change",
    },
  ],
  passportPhoto: [
    {
      required: true,
      message: "Please upload your Passport Size Photo",
      trigger: "change",
    },
  ],
  experienceLetter: [
    {
      required: true,
      message: "Please upload your Experience Letter",
      trigger: "change",
    },
  ],
  otherCertificate: [
    {
      required: true,
      message: "Please upload any Other Certificate",
      trigger: "change",
    },
  ],
});

//Documents

const handleDocumentForm = () => {
  emit("changeForm")
};

defineExpose({
  handleDocumentForm
})
</script>
<style>
    
</style>