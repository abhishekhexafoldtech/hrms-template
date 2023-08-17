<template>
    <div class="container w-100">
      <div class="row gx-5">
        <!-- Date -->
        <el-col :span="10">
          <div class="row d-flex align-items-center border rounded shadow">
            <div class="col-2">
              <i class="bi bi-calendar-event fa-2x"></i>
            </div>
            <el-divider direction="vertical" />
            <div class="col-5">{{ currentDate }}</div>
          </div>
        </el-col>
  
        <!-- Time -->
        <el-col :span="10">
          <div class="row d-flex align-items-center border rounded shadow">
            <div class="col-2">
              <i class="bi bi-clock-fill fa-2x"></i>
            </div>
            <el-divider direction="vertical" />
            <div class="col-5">{{ formattedTime }}</div>
          </div>
        </el-col>
  
        <!-- Button checkIn -->
        <el-col :span="2">
          <button class="btn btn-primary btn-lg" @click="toggleCheckInStatus">{{ checkInStatus }}</button>
        </el-col>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const currentDate = ref('');
  const formattedTime = ref('00:00:00');  
  let timerId;
  const checkInStatus = ref('CheckIn');


    // Get the current date and format it
    const now = new Date();
    currentDate.value = formatDate(now);


    function toggleCheckInStatus() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    formattedTime.value = '00:00:00';
    checkInStatus.value = 'CheckIn';
  } else {
    startTimer();
    checkInStatus.value = 'CheckOut';
  }
}

function startTimer() {
  const startTime = Date.now();
  timerId = setInterval(() => {
    const currentTime = Date.now() - startTime;
    formattedTime.value = formatTime(currentTime);
  }, 1000);
}
  
  function formatDate(date) {
    // Format the date as 'DD/MM/YY'
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  }
 
function formatTime(ms) {
  // Format the time in milliseconds to 'HH:mm:ss'
  const hours = String(Math.floor(ms / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

// Optional: To stop the timer when the component is unmounted
onUnmounted(() => {
  clearInterval(timerId);
});
  </script>
  