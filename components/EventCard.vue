<template>
  <div class="ev_box">
    <div class="bday_box" v-if="title === 'Birthdays'">
      <el-tabs type="card" v-model="activeName" @tab-click="handleClick" class="bday_tab">
        <el-tab-pane label="Birthdays" name="first"></el-tab-pane>
        <el-tab-pane label="Anniversaries" name="second"></el-tab-pane>
        <el-tab-pane label="Work Anniversaries" name="third"></el-tab-pane>
      </el-tabs>
      <div class="dropdown">
        <button class="dropdown-toggle" type="button" id="upcomingHolidayDrop" data-bs-toggle="dropdown"
          aria-expanded="false">
          <i class="ri-more-2-fill"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="upcomingHolidayDrop">
          <li><a class="dropdown-item" href="#">Add Holidays</a></li>
          <li><a class="dropdown-item" href="#">View All</a></li>
        </ul>
      </div>
    </div>

    <div v-else class="box_heading">
      <h3>{{ props.title }}</h3>
      <div class="dropdown">
        <button class="dropdown-toggle" type="button" id="upcomingHolidayDrop" data-bs-toggle="dropdown"
          aria-expanded="false">
          <i class="ri-more-2-fill"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="upcomingHolidayDrop">
          <li><a class="dropdown-item" href="#">Add Holidays</a></li>
          <li><a class="dropdown-item" href="#">View All</a></li>
        </ul>
      </div>
    </div>

    <div class="ev_inner" v-if="title === 'Upcoming Holidays'">
      <div v-for="event in props.events" :key="event.id" class="ev_item">
        <figure >
          <h4>
            {{ event.date }}
            <span>{{ event.month }}</span>
          </h4>
        </figure>
        <div class="ev_con">
          <h3>{{ event.name }}</h3>
          <ul>
            <li>{{ event.day }}</li>
            <li>{{ event.daysLeft }} days left</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="ev_inner" v-if="title === 'Birthdays'">
      <div v-for="event in props.events" :key="event.id" class="ev_item">
        <figure>
          <img :src="event.image" alt="">
        </figure>
        <div class="ev_con">
          <h3>{{ event.name }}</h3>
          <ul>
            <li>{{ event.day }}</li>
            <li>{{ event.daysLeft }} days left</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="ev_inner uc_events" v-else-if="title === 'Upcoming Events'">
      <div v-for="event in props.events" :key="event.id" class="ev_item">
        <figure>
          <i :class="event.icon" class="w-100"></i>
        </figure>
        <div class="ev_con">
          <h3>{{ event.name }}</h3>
          <ul>
            <li>{{ event.day }}</li>
            <li>{{ event.daysLeft }} days left</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- main section -->
    <!-- <div v-for="event in props.events" :key="event.id" class="card-main-section">
      <el-col :xs="4" :sm="4" :md="4" :lg="4" class="event-icon">
        <el-avatar shape="square" :size="50" :src="event.image" />
      </el-col>

      <el-col :xs="10" :sm="10" :md="10" :lg="10" class="event-name">
        <h6>{{ event.name }}</h6>
        <span>{{ event.day }}</span>
      </el-col>

      <el-col :xs="10" :sm="10" :md="10" :lg="10" class="event-days">
        <span v-if="event.days === 11 && title === 'Birthdays'"><el-button type="danger" @click="handleWishBday" plain
            class="bday-avtar"><i class="bi bi-gift me-2"></i> Wish Now</el-button>
          Today
        </span>
        <span v-else>
          <br />
          <span>{{ event.days }} days left</span>
        </span>
      </el-col>

    </div> -->
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { ref, defineEmits } from "vue";
const emit = defineEmits()
const props = defineProps({
  events: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  buttonName: {
    type: String,
    required: true,
    default: "Wish Bady",
  },
});

//tabs
const activeName = ref("first");

const handleClick = (tab, event) => {
  // console.log(JSON.stringify(tab.props.label));
  emit('getEvents', tab.props.label)
};

const handleWishBday = () => {
  console.log("Budy Wishing");
};
</script>

<style scoped lang="scss">
</style>
