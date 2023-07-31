<template>
  <el-form label-position="top" label-width="100px" :model="formLabelAlign">
    <h3 class="form_title">Employee Documents</h3>
    <el-row>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" v-for="(field, fieldName) in fileLists" :key="fieldName">
        <el-form-item :label="capitalizeFirstLetter(fieldName)" :prop="fieldName" class="mb-0">
          <el-upload 
            class="doc_upload" 
            v-model="fileLists[fieldName]" 
            :on-change="handleChange(fieldName)"
            :on-remove="handleRemove(fieldName)" 
            :before-remove="beforeRemove" 
            :limit="1" 
            :on-exceed="handleExceed"
            accept=".jpg,.jpeg,.png,.pdf">
            <el-button>Upload {{ capitalizeFirstLetter(fieldName) }}</el-button>
              <template #tip>
                <div class="el-upload__tip">
                  jpg/png/PDF files with a size less than 500KB.
                </div>
              </template>
            </el-upload>
        </el-form-item>
        <div v-if="!formValid[fieldName]" class="up_error">
          <span v-if="!fileLists[fieldName].length">Please upload {{ capitalizeFirstLetter(fieldName) }}</span>
          <span v-else-if="!isFileTypeValid(fileLists[fieldName][0])">Invalid file type. Only JPG, PNG, and PDF files are
            allowed.</span>
          <span v-else-if="!isFileSizeValid(fileLists[fieldName][0])">File size should be less than 500KB.</span>
        </div>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup>
import { ref, defineExpose, defineEmits} from "vue";
const emit = defineEmits()
const fileLists = ref({
  adharCard: [],
  panCard: [],
  passportPhoto: [],
  otherCertificate: [],
});

const formValid = ref({
  adharCard: true,
  panCard: true,
  passportPhoto: true,
  otherCertificate: true,
});

const handleChange = (listName) => 
(file, fileList) => {
  // Read the file and convert it to Base64
  const reader = new FileReader();
  reader.readAsDataURL(file.raw);
  reader.onload = () => {
    const base64Data = reader.result;

    // Check file type before updating the reactive fileLists object
    if (isFileTypeValid(file)) {
      // Update the reactive fileLists object with the latest file list, including Base64 data
      fileLists.value[listName] = [
        {
          name: file.name,
          percentage: file.percentage,
          status: file.status,
          size: file.size,
          raw: file.raw,
          uid: file.uid,
          base64Data: base64Data, // Add the Base64 data to the object
        },
      ];
    } else {
      // Clear the file list if the file type is invalid
      fileLists.value[listName] = [];
    }
  };
};

// Handle file removal logic
const handleRemove = (prop) => (file, fileList) => {
  // Update the reactive fileLists object with the latest file list after removal
  fileList.value[prop] = [];
};

// Handle file removal confirmation logic
const beforeRemove = (file) => {
  // You can show a confirmation dialog here and return a Promise to confirm the removal
  return new Promise((resolve, reject) => {
    const confirmed = confirm("Are you sure you want to remove this file?");
    if (confirmed) {
      resolve();
    } else {
      reject();
    }
  });
};

// Handle file exceed limit logic
const handleExceed = (files, fileList) => {
  // You can handle the exceed limit here, for example, show a warning message
  console.warn("Exceeded file upload limit!");
};

const handleDocumentForm = () => {
  // Perform form validation
  emit("changeForm")
  formValid.value.adharCard = fileLists.value.adharCard.length > 0 && isFileSizeValid(fileLists.value.adharCard[0]);
  formValid.value.panCard = fileLists.value.panCard.length > 0 && isFileSizeValid(fileLists.value.panCard[0]);
  formValid.value.passportPhoto = fileLists.value.passportPhoto.length > 0 && isFileSizeValid(fileLists.value.passportPhoto[0]);
  formValid.value.otherCertificate = fileLists.value.otherCertificate.length > 0 && isFileSizeValid(fileLists.value.otherCertificate[0]);

  if (Object.values(formValid.value).every((valid) => valid)) {
    // Assuming you want to submit the data here
    // You can access the fileLists data and do whatever you need
    console.log("Submitted Data:", JSON.stringify(fileLists.value));
    emit("changeForm")
  } else {
    console.log("Please upload all files.");
  }
};

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function isFileSizeValid(file) {
  return file.size <= 500000;
}

function isFileTypeValid(file) {
  const allowedTypes = [".jpg", ".jpeg", ".png", ".pdf"];
  const fileType = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
  return allowedTypes.includes(fileType);
}

//call parent function 
defineExpose({
  handleDocumentForm
});

</script>