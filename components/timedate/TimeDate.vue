<template>
  <div class="w-100 d-flex me-4">
    <div class="time-date-container d-flex align-items-center justify-content-end me-5">
      <div class="h5">IST {{ currentTime }}, {{ currentDay }} {{ currentMonth }} {{ currentYear }}</div>
    </div>
    <button class="btn button-dark btn-lg m-0" @click="toggleCheckInStatus">{{ checkInStatus }}</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentDate = ref('');
const currentTime = ref('');
const currentDay = ref('');
const currentMonth = ref('');
const currentYear = ref('');
const checkInStatus = ref('ClockIn');

// Get the current date and format it
const now = new Date();
currentDate.value = formatDate(now);
currentDay.value = now.getDate();
currentMonth.value = formatMonth(now.getMonth());
currentYear.value = now.getFullYear();
currentTime.value = formatTime(now);

function toggleCheckInStatus() {
  if (checkInStatus.value === 'ClockIn') {
    checkInStatus.value = 'ClockOut';
  } else {
    checkInStatus.value = 'ClockIn';
  }
}

function formatDate(date) {
  // Format the date as 'DD/MM/YY'
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);
  return `${day}/${month}/${year}`;
}

function formatMonth(month) {
  // Get the short name of the month
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[month];
}

function formatTime(date) {
  // Format the time as 'HH:mm:ss'
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

// Update seconds every second
const timerId = setInterval(() => {
  const now = new Date();
  currentTime.value = formatTime(now);
}, 1000);

// Optional: To stop the timer when the component is unmounted
onUnmounted(() => {
  clearInterval(timerId);
});
</script>
 

<style scoped>
.time-date-container {
  height: 50px;
}

.button-dark {
  background-color: #1F281A;
  color: rgb(255, 255, 255);
}
</style>

  