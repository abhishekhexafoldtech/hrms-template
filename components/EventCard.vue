<template>
  <el-card class="box-card shadow-lg mt-4">
    <!-- top section -->

    <div v-if="title === 'Birthdays'" class="top">
      <el-tabs type="card" v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="Birthdays" name="first">Birthdays</el-tab-pane>
        <el-tab-pane label="Anniversaries" name="second">Anniversaries</el-tab-pane>
        <el-tab-pane label="Work Anniversaries" name="third">Work Anniversaries</el-tab-pane>
      </el-tabs>
    </div>

    <div v-else class="top">
      <p class="card-title">{{ props.title }}</p>
      <span><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
    </div>

    <!-- main section -->
    <div v-for="event in props.events" :key="event.id" class="card-main-section">
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

    </div>
  </el-card>
</template>

<script setup>
import { defineProps } from "vue";
import { ref ,defineEmits} from "vue";
const emit=defineEmits()
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
  emit('getEvents',tab.props.label)
};

const handleWishBday = () => {
  console.log("Budy Wishing");
};
</script>

<style scoped lang="scss">
.box-card {
  height: 385px;
  border-radius: 10px;
  overflow-y: auto;
  // background-color:rgb(250, 250, 255);
  /* Use auto instead of scroll for a better user experience */
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-main-section {
  display: flex;
  padding: 14px 0px;
  border-bottom: 1px solid #e5e5e5;
}

.card-title {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(71, 68, 68);
  font-weight: 600;
  font-size: 18px;
  margin: 0;
}

.event-icon {
  display: flex;
  margin-right: 12px;
}

.event-name {
  flex: 1;
  line-height: 1;
}

.event-days {
  line-height: 28px;
  float: right;

  span {
    float: right;
  }
}

//tab css

.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
