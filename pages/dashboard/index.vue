<template>
  <!-- Welcome Section -->
  <section class="wlcm_wrap mb-4">
    <h3>Welcome Vairagi!</h3>
    <div class="wlcm_right">
      <TimeDate />
    </div>
  </section>

  <el-row gutter="20">
    <el-col :xs="24" :sm="24" :md="14" :lg="19" :xl="19">
      <div class="dash_three_block">
        <EmployeeStatusCard heading="My Desk Time" :desk-time="true" />
        <EmployeeStatusCard :employees="allUsers" heading="Working Remotely" e-description="Employees working remotely" />
        <EmployeeStatusCard :employees="allUsers" heading="On Leave Today" e-description="Employees on leave" />
      </div>

      <div class="row mt-4">
        <div class="col-lg-4">
          <ToDoList />
        </div>
        <div class="col-lg-8">
          <NewsFeed />
        </div>
      </div>

      <section class="mt-5">
        <el-row gutter="20">
          <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
            <EventCard :events="upcomingHlidays" title="Upcoming Holidays" />
          </el-col>
          <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
            <EventCard :events="events" @getEvents="getEvents" title="Birthdays" />
          </el-col>
          <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
            <EventCard :events="upcomingEvents" title="Upcoming Events" />
          </el-col>
        </el-row>
      </section>
    </el-col>
    <el-col :xs="24" :sm="24" :md="10" :lg="5" :xl="5">
      <div class="right_profile">
        <div class="pr_box">
          <figure>
            <img
              src="https://media-protected.taiga.io/user/3/7/8/1/763ad6fd69d24fe8be4038aae2728c686460584a83300aae73ab3b99b61b/whatsapp-image-2022-02-22-at-134707.jpeg.80x80_q85_crop.jpg?token=ZN9afA%3AVt72dmaIt2BR1PZqQPqS2QbVKVJz-XLdbfBnh0uvLCjwPFxq_3PzS0wAowtDVuqPgmjYks4I7v5zqILtMal9xA"
              alt="" />
            <button><i class="ri-edit-2-line"></i></button>
          </figure>
          <h2>Kiran Kumar</h2>
          <p>VueJs Developer</p>
        </div>
        <hr />
        <div class="quick_acc">
          <div class="box_heading">
            <h3>Quick Access</h3>
          </div>
          <div class="qc_inner">
            <a class="qc_item" href="#">
              <img src="@/assets/img/dismissal.png" alt="">
              <span>Leave Request</span>
            </a>
            <a class="qc_item" href="#">
              <img src="@/assets/img/timetable.png" alt="">
              <span>Time Sheets</span>
            </a>
            <a class="qc_item" href="#">
              <img src="@/assets/img/calendar.png" alt="">
              <span>Calender</span>
            </a>
            <a class="qc_item" href="#">
              <img src="@/assets/img/sunbed.png" alt="">
              <span>Holidays</span>
            </a>
          </div>
        </div>
        <hr />
        <div class="org_chart">
          <div class="box_heading">
            <h3>Organization Chart</h3>
          </div>
          <div class="oc_inner">
            <div class="oc_item" v-for="user in 3" :key="user">
              <img :src="allUsers[user].img" alt="" />
              <div class="oc_con">
                <h3>{{ allUsers[user].name }}</h3>
                <p>{{ allUsers[user].profession }}</p>
                <i class="ri-arrow-up-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>

  <!-- <section class="mt-2 w-20">
        <div class="d-flex flex-wrap">
          <StatisticsCard :leave="true" header="Total Leaves" />
        </div>
      </section>

      <section class="my-2 py-2">
        <div class="container">
          <div class="row">
            <EventCalender />
          </div>
        </div>
      </section> -->
</template>

<script setup>
import { ref } from "vue";

import EventCalender from "@/components/calender/EventCalender.vue";
import ToDoList from "@/components/todo/index.vue";
import TimeDate from "@/components/timedate/TimeDate.vue";
import EventCard from "~/components/EventCard.vue";
import NewsFeed from "~/components/NewsFeed.vue";

//Upcoming Holidays Data
const upcomingHlidays = [
  {
    id: 1,
    name: "Bakrid",
    date: 18,
    month: "June",
    day: "Wednesday",
    daysLeft: 10,
    image:
      "https://thumbs.dreamstime.com/b/christmas-decorations-border-text-happy-holidays-red-sparkly-bulb-gold-tree-topper-star-corner-framing-44504444.jpg",
  },
  {
    id: 2,
    name: "Cristmas",
    date: 25,
    month: "Dec",
    day: "Wednesday",
    daysLeft: 12,
    image:
      "https://thumbs.dreamstime.com/b/christmas-decorations-border-text-happy-holidays-red-sparkly-bulb-gold-tree-topper-star-corner-framing-44504444.jpg",
  },
  {
    id: 3,
    name: "Rakshabandhan",
    date: 18,
    month: "Jan",
    day: "Wednesday",
    daysLeft: 25,
    image:
      "https://thumbs.dreamstime.com/b/christmas-decorations-border-text-happy-holidays-red-sparkly-bulb-gold-tree-topper-star-corner-framing-44504444.jpg",
  },
  {
    id: 4,
    name: "Bakrid",
    date: 18,
    month: "Feb",
    day: "Wednesday",
    daysLeft: 10,
    image:
      "https://thumbs.dreamstime.com/b/christmas-decorations-border-text-happy-holidays-red-sparkly-bulb-gold-tree-topper-star-corner-framing-44504444.jpg",
  },
  {
    id: 5,
    name: "Bakrid",
    date: 18,
    month: "Mar",
    day: "Wednesday",
    daysLeft: 10,
    image:
      "https://thumbs.dreamstime.com/b/christmas-decorations-border-text-happy-holidays-red-sparkly-bulb-gold-tree-topper-star-corner-framing-44504444.jpg",
  },

  // Add more events here if needed
];

//Up Comming Birthdays

const upcomingBirthdays = [
  {
    id: 1,
    name: "James Daniel",
    day: "Wednesday",
    daysLeft: 11,
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000",
  },
  {
    id: 2,
    name: "Jack William",
    day: "Wednesday",
    daysLeft: 15,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIoI76wjvQ2pq6t25TLmRAwTxv118OFKZxykoCiY_fWRtR8QRr1nWWcDtG3tHdgCuWu8&usqp=CAU",
  },
  {
    id: 3,
    name: "Oliver Henry",
    day: "Wednesday",
    daysLeft: 5,
    image:
      "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
  },
  {
    id: 4,
    name: "Alexander Benjamin",
    day: "Wednesday",
    daysLeft: 30,
    image:
      "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
  },
  {
    id: 5,
    name: "James Alexander",
    day: "Wednesday",
    daysLeft: 10,
    image:
      "https://t4.ftcdn.net/jpg/04/41/19/91/360_F_441199112_nm3XCB735HW3pSgWEbIBaCsfsbDy6Ot0.jpg",
  },
  // Add more events here if needed
];

//Up Comming Events
const upcomingEvents = [
  {
    id: 1,
    icon: "ri-computer-line",
    name: "Demo on Onboarding of Nova",
    day: "Wednesday",
    daysLeft: 4,
    image:
      "https://cdn1.vectorstock.com/i/1000x1000/08/20/realistic-golden-trophy-with-winner-ribbon-vector-25530820.jpg",
  },
  {
    id: 2,
    icon: "ri-video-chat-line",
    name: "Training session on Vue Js",
    day: "Monday",
    daysLeft: 11,
    image: "https://images.meesho.com/images/products/278009053/3c7x8_512.webp",
  },
  {
    id: 3,
    icon: "ri-article-line",
    name: "Schedule to meeting with Clients",
    day: "Wednesday",
    daysLeft: 25,
    image:
      "https://t3.ftcdn.net/jpg/05/65/98/14/360_F_565981433_mGOyipXL7CGia8xa9kjOpoI39pP9DAka.jpg",
  },
  {
    id: 4,
    icon: "ri-article-line",
    name: "Digital agency meeting",
    day: "Wednesday",
    daysLeft: 24,
    image:
      "https://media.istockphoto.com/id/1182465245/photo/gold-winners-trophy-champion-cup-with-falling-confetti.jpg?s=612x612&w=0&k=20&c=oL7XQ2GgDptAOYAZY_63kYjRrAnb_Zhn0GUdNLy4rpY=",
  },
  {
    id: 5,
    icon: "ri-video-chat-line",
    name: "Rugby World Cup",
    day: "Wednesday",
    daysLeft: 30,
    image:
      "https://www.freepnglogos.com/uploads/happy-birthday-png/happy-birthday-png-design-elements-3.png",
  },
  // Add more events here if needed
];

const allUsers = [
  {
    img: "https://media-protected.taiga.io/user/3/7/8/1/763ad6fd69d24fe8be4038aae2728c686460584a83300aae73ab3b99b61b/whatsapp-image-2022-02-22-at-134707.jpeg.80x80_q85_crop.jpg?token=ZN9afA%3AVt72dmaIt2BR1PZqQPqS2QbVKVJz-XLdbfBnh0uvLCjwPFxq_3PzS0wAowtDVuqPgmjYks4I7v5zqILtMal9xA",
  },
  {
    img: "https://media-protected.taiga.io/user/c/5/5/f/3912cb3cfa54175d0ac606d99fa1057a8e054ac3d8c8f562f9d45c5ec400/a.jpg.80x80_q85_crop.jpg?token=ZN9V3A%3ABi5HhixCZH4LIPkpfta4NLqHfH7CvP1WsY5N7uTeevhV6qnrI4uNnQhWoc2nUvMMLOFq_2hlJSuss5ZYTgJNrA",
    name: "abhisheck",
    profession: "senior developer",
  },
  {
    img: "https://media-protected.taiga.io/user/5/d/7/f/713e2adb889ba0288eaeaf6870ffb74a362c332eb5b39565b2f117080184/16726594728082.jpg.80x80_q85_crop.jpg?token=ZN9V3A%3AwqHWDi3a8xJiixi7XDUARbHeQZrs8Vs6J_2HRgEwW48XcTaTZenNG7dgdc_cp_i794_uyt0keb8SMojhoqS0Ng",
    name: "Pallavi",
    profession: "senior developer",
  },
  {
    img: "https://media-protected.taiga.io/user/f/0/c/f/44310b7f150ee54b3ead22f4c0e2f3ec1a74ad415152ef32d132e3412506/vishal_image.jpg.300x300_q85_crop.jpg?token=ZONANw%3AdGkujlgqk2AS4DahQTP7_5650LNNWK9nnfojHLVjhZnnxeHh-60TfpDg2CMdJ1GkqiXNsfuQ6ojiiHvz3aOLug",
    name: "Vishal",
    profession: "senior developer",
  },
  {
    img: "https://media-protected.taiga.io/user/5/d/7/f/713e2adb889ba0288eaeaf6870ffb74a362c332eb5b39565b2f117080184/16726594728082.jpg.80x80_q85_crop.jpg?token=ZN9V3A%3AwqHWDi3a8xJiixi7XDUARbHeQZrs8Vs6J_2HRgEwW48XcTaTZenNG7dgdc_cp_i794_uyt0keb8SMojhoqS0Ng",
  },
];

// set events
const events = ref(upcomingBirthdays);

const getEvents = (event) => {
  if (event === "Birthdays") {
    events.value = upcomingBirthdays;
  } else if (event === "Anniversaries") {
    events.value = upcomingHlidays;
  } else if (event === "Work Anniversaries") {
    events.value = upcomingEvents;
  }
};

definePageMeta({
  layout: "layout",
});
</script>

<style scoped lang="scss">
.wlcm_wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px 0px;

  h3 {
    color: var(--text-primary);
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    margin: 0;
  }

  .wlcm_right {
    display: flex;
    align-items: center;
  }
}

/*** Style for 3 Blocks in Dashboard ****/
.dash_three_block {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 10px;
  background-color: var(--white);
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.05);
}

/**** Style for Right Side Profile - Dashboard ****/
.right_profile {
  border-radius: 10px;
  background-color: var(--white);
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.05);
  padding: 25px 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .pr_box {
    text-align: center;

    figure {
      width: 125px;
      height: 125px;
      display: block;
      margin: 0 auto;
      margin-bottom: 20px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
        overflow: hidden;
      }

      button {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: var(--white);
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
        border: none;
        font-size: 18px;
        color: var(--text-primary);
      }
    }

    h2 {
      color: var(--text-primary);
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      margin: 0;
      margin-bottom: 3px;
    }

    p {
      color: var(--text-grey);
      font-size: 15px;
      font-weight: 500;
      margin: 0;
    }
  }
}

/**** Style for Organization Chart - Dashboard ****/
.org_chart {
  .oc_inner {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .oc_item {
      background-color: var(--grey-bg);
      padding: 6px 10px;
      border-radius: 10px;

      img {
        width: 55px;
        height: 55px;
        border-radius: 10px;
        object-fit: cover;
        object-position: center;
        display: inline-block;
        vertical-align: middle;
      }

      .oc_con {
        display: inline-block;
        vertical-align: middle;
        position: relative;
        padding-left: 8px;
        width: calc(100% - 55px);

        h3 {
          color: var(--text-primary);
          font-size: 16px;
          font-weight: 600;
          margin: 0;
          margin-bottom: 3px;
          text-transform: capitalize;
        }

        p {
          color: var(--text-grey);
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          margin: 0;
          text-transform: capitalize;
        }

        i {
          position: absolute;
          bottom: 0;
          right: 0;
          font-size: 20px;
          height: 22px;
          line-height: 20px;
          color: var(--orange);
        }
      }

      &:first-child {
        .oc_con {
          i {
            display: none;
          }
        }
      }

      &:last-child {
        .oc_con {
          i {
            color: var(--cyan);
          }
        }
      }
    }
  }
}
</style>
