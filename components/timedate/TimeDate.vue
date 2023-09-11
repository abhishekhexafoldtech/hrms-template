<template>
  <ul class="hr_actions">
    <li>
      <p>IST {{ currentTime }}, {{ currentDay }} {{ currentMonth }} {{ currentYear }}</p>
    </li>
    <li><button class="theme_black_btn" @click="toggleCheckInStatus">{{ checkInStatus }}</button></li>
    <li>
      <a class="not_icon" href="#">
        <i class="ri-notification-3-line"></i>
        <span></span>
      </a>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentDate = ref('');
const currentTime = ref('');
const currentDay = ref('');
const currentMonth = ref('');
const currentYear = ref('');
const checkInStatus = ref('Clock In');

// Get the current date and format it
const now = new Date();
currentDate.value = formatDate(now);
currentDay.value = now.getDate();
currentMonth.value = formatMonth(now.getMonth());
currentYear.value = now.getFullYear();
currentTime.value = formatTime(now);

function toggleCheckInStatus() {
  if (checkInStatus.value === 'Clock In') {
    checkInStatus.value = 'Clock Out';
  } else {
    checkInStatus.value = 'Clock In';
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
 

<style scoped lang="scss">
.hr_actions {
  padding-inline-start: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0px 30px;

  li {
    display: block;

    p {
      color: var(--text-primary);
      font-size: 16px;
      font-weight: 600;
      margin: 0;
    }

    .not_icon {
      background-color: transparent;
      color: var(--text-primary);
      display: block;
      font-size: 26px;
      width: 35px;
      height: 35px;
      text-align: center;
      line-height: 35px;
      position: relative;

      span {
        position: absolute;
        top: 4px;
        right: 4px;
        display: block;
        width: 14px;
        height: 14px;
        background-color: #E04040;
        border: solid 2px var(--white);
        border-radius: 50%;
      }
    }
  }
}
</style>

  