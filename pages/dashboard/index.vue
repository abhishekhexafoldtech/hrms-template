<template>
  <div>
    <header class="header-2">
      <div class="page-header min-vh-75 bg-img-desktop" loading="lazy">
        <span class="mask bg-gradient-primary opacity-4"></span>
        <div class="container">
          <div class="row">
            <div class="col-lg-7 text-center mx-auto">
              <h1 class="text-white pt-3 mt-n5">Material Kit 2 PRO</h1>
              <p class="lead text-white mt-3 px-5">
                Start the Development With A Bootstrap 5 Design System inspired
                by Material Design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
      <div class="d-flex w-100 m-2">
        <div class="user_name "><h3>Welcome Vairagi !</h3></div>
        <div class="d-flex justify-content-end w-80">
          <div class="checkin">
            <TimeDate/>
          </div>
        </div>          
      </div>

      <div class="row">
        <div class="col-lg-9">
          <div class="wrapper w-100 shadow border">
            <div class="employees-status-container background d-flex flex-wrap">
              <div class="d-flex">
                  <EmployeeStatusCard heading="My Desk Time" class="employees-status-card" color="#A368BE"
                      :desk-time="true" />
                  <div class="line"></div>
              </div>
              <div class="d-flex">
                  <EmployeeStatusCard :employees="allUsers" heading="Working Remotely"
                      e-description="Employees working remotely" class="employees-status-card" />
                  <div class="line"></div>
              </div>
              <div>
                  <EmployeeStatusCard :employees="allUsers" heading="On Leave Today" e-description="Employees on leave"
                      color="#4BC7A9" class="employees-status-card" />
              </div>
          </div>
          </div>

          <div class="row mt-4">
            <div class="col-lg-4">
              <ToDoList />
            </div>
            <div class="col-lg-8">
              <NewsFeed/>
            </div>
          </div>

          <section class="mt-2">
            <div class="col-lg-12">
              <div class="row">
                <div class="col col-md-4 mt-md-0">
                  <!-- Upcoming Holidays -->
                  <EventCard :events="upcomingHlidays" title="Upcoming Holidays" />
                </div>
                <div class="col col-md-4 mt-md-0">
                  <!-- Upcoming Birthdays -->
                  <EventCard
                    :events="events"
                    @getEvents="getEvents"
                    title="Birthdays"
                  />
                </div>
                <div class="col col-md-4 mt-md-0">
                  <EventCard :events="upcomingEvents" title="Upcoming Event" />
                </div>
              </div>
            </div>
          </section>

        </div>

<!-- Side Profile -->
        <div class="col-lg-3">
          <div class="employee-profile-card profile-card background shadow border w-100" style="text-align: center;">
            
            <div class="profile mt-3">
                <div class="d-flex py-4" style="margin-left:auto;margin-right: auto;width: 130px;">
                    <img src="https://media-protected.taiga.io/user/3/7/8/1/763ad6fd69d24fe8be4038aae2728c686460584a83300aae73ab3b99b61b/whatsapp-image-2022-02-22-at-134707.jpeg.80x80_q85_crop.jpg?token=ZN9afA%3AVt72dmaIt2BR1PZqQPqS2QbVKVJz-XLdbfBnh0uvLCjwPFxq_3PzS0wAowtDVuqPgmjYks4I7v5zqILtMal9xA"
                        alt="" width="125" height="125" class="rounded-circle" />
                    <el-card class="background rounded-circle profile-edit-icon" style="min-width:35px;max-height: 35px; ">
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </el-card>
                </div>
                <div>Kiran Kumar</div>
                <div>VueJs Developer</div>
                <button class="btn btn-dark rounded-pill">sign out</button>
            </div>
            <!-- line braek -->
            <div class="horizontal-line"></div>
            <!-- payslip -->
            <div class="payslips mt-4 w-95" style="margin-bottom: 18px;">
                <!-- header of payslip -->
                <div class="d-flex justify-content-between" style="margin-bottom: 10px;">
                    <div class="d-flex">
                        <div style="background-color:rgba(103, 146, 137, 1);width:4px;height:20px" class="mt-1"></div>
                        <div class="capitalize mx-3 lh-base profile-heading">Recent payslips</div>
                    </div>
                    <div>
                        <i class="fa fa-ellipsis-v"></i>
                    </div>
                </div>
                <!-- components of payslip -->
                <div class="d-flex mx-3 py-2 justify-content-between w-95" v-for="item in 3" :key="item">
                    <div class="d-flex">
                        <div class="mt-0 p-2 rounded-3"
                            style="width:45px;height:50px;background-color: rgba(239, 243, 249, 1);"><i
                                class="fa fa-file-pdf-o mt-1" aria-hidden="true" style="color:red;font-size:22.7px"></i>
                        </div>
                        <div class="capitalize  mx-2 text-start">
                            <div style="font-size:16px;font-weight: 600;" class="text-dark">Aug salary pyslip</div>
                            <div class="">03 july 2023</div>
                        </div>
                    </div>
                    <div class="mt-2">
                        <button class="btn btn-dark capitalize"
                            style="width:50px;padding:10px;height:25px;line-height: 0;">view</button>
                    </div>
                </div>
            </div>
            <!-- line break -->
            <div class="horizontal-line"></div>
            <!-- organization chart -->
            <div class="organization-chart py-3 my-2 w-95">
                <!-- header of organization -->
                <div class="d-flex justify-content-between" style="margin-bottom: 20px;">
                    <div class="d-flex">
                        <div style="background-color:rgba(103, 146, 137, 1);width:4px;height:20px" class="mt-1"></div>
                        <div class="capitalize mx-3 lh-base profile-heading">organization chart</div>
                    </div>
                </div>
                <!-- components of organization -->
                <div class="organization rounded-3 w-100 mx-2 mt-2 text-start d-flex justify-content-between" v-for="user in 3" :key="user">
                    <div class="d-flex">
                        <img :src="allUsers[user].img" alt="" width="56" height="56" class="rounded-3 mx-2" />
                        <div class="capitalize  m-1 mt-2 text-start">
                            <div style="font-size:16px;font-weight: 600;" class="text-dark">{{ allUsers[user].name }}</div>
                            <div class="">{{ allUsers[user].profession }}</div>
                        </div>
                    </div>
                    <div class="mt-4" style="margin-right: 15px;">
                        <i class="fa fa-long-arrow-up" aria-hidden="true" :style="allUsers[user].profession?.startsWith('senior') ? 'color:red': 'color:green'"></i>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
      <section class="mt-2 w-20">
        <div class="d-flex flex-wrap">            
            <StatisticsCard  :leave="true" header="Total Leaves"/>
        </div>
      </section>

      <section class="my-2 py-2">
        <div class="container">
          <div class="row">
            <EventCalender />
          </div>
        </div>
      </section>
    </div> 
  </div>
    
</template>

<script setup>
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
    day: "Wednesday",
    days: 10,
    image:
      "https://thumbs.dreamstime.com/b/christmas-decorations-border-text-happy-holidays-red-sparkly-bulb-gold-tree-topper-star-corner-framing-44504444.jpg",
  },
  {
    id: 2,
    name: "Thiruvalluvar Day",
    day: "Wednesday",
    days: 15,
    image:
      "https://media.istockphoto.com/id/1355669924/photo/happy-holidays-christmas-card-with-close-up-of-pine-tree-branch-and-snow-in-background.jpg?s=612x612&w=0&k=20&c=OUu_A8QmGCE6GwDAVdKve0rYIKSFlKO_NUKDFXO5sVE=",
  },
  {
    id: 3,
    name: "Gaan-Ngai",
    day: "Wednesday",
    days: 19,
    image:
      "https://thumbs.dreamstime.com/b/happy-holidays-lettering-happy-holidays-lettering-winter-blurred-background-101818646.jpg",
  },
  {
    id: 4,
    name: "Uzhavar Thirunal",
    day: "Wednesday",
    days: 22,
    image:
      "https://media.istockphoto.com/id/513550806/photo/teenager-hipster-friends-partying-by-blowing-colorful-confetti-from-hands.jpg?s=612x612&w=0&k=20&c=BG0BHvW98AiLFyhiNy3NzlPZlGTUwHS-I8iYVvWmR78=",
  },
  {
    id: 5,
    name: "Kanuma Panduga",
    day: "Wednesday",
    days: 30,
    image:
      "https://www.freepnglogos.com/uploads/happy-birthday-png/happy-birthday-png-design-elements-3.png",
  },
  // Add more events here if needed
];

//Up Comming Birthdays

const upcomingBirthdays = [
  {
    id: 1,
    name: "James Daniel",
    day: "Wednesday",
    days: 11,
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000",
  },
  {
    id: 2,
    name: "Jack William",
    day: "Wednesday",
    days: 15,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIoI76wjvQ2pq6t25TLmRAwTxv118OFKZxykoCiY_fWRtR8QRr1nWWcDtG3tHdgCuWu8&usqp=CAU",
  },
  {
    id: 3,
    name: "Oliver Henry",
    day: "Wednesday",
    days: 5,
    image:
      "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
  },
  {
    id: 4,
    name: "Alexander Benjamin",
    day: "Wednesday",
    days: 30,
    image:
      "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
  },
  {
    id: 5,
    name: "James Alexander",
    day: "Wednesday",
    days: 10,
    image:
      "https://t4.ftcdn.net/jpg/04/41/19/91/360_F_441199112_nm3XCB735HW3pSgWEbIBaCsfsbDy6Ot0.jpg",
  },
  // Add more events here if needed
];

//Up Comming Events

const upcomingEvents = [
  {
    id: 1,
    name: "T-20 Cricket",
    day: "Wednesday",
    days: 4,
    image:
      "https://cdn1.vectorstock.com/i/1000x1000/08/20/realistic-golden-trophy-with-winner-ribbon-vector-25530820.jpg",
  },
  {
    id: 2,
    name: "FIFA World Cup",
    day: "Wednesday",
    days: 11,
    image: "https://images.meesho.com/images/products/278009053/3c7x8_512.webp",
  },
  {
    id: 3,
    name: "Tour de France",
    day: "Wednesday",
    days: 25,
    image:
      "https://t3.ftcdn.net/jpg/05/65/98/14/360_F_565981433_mGOyipXL7CGia8xa9kjOpoI39pP9DAka.jpg",
  },
  {
    id: 4,
    name: "Uzhavar Thirunal",
    day: "Wednesday",
    days: 24,
    image:
      "https://media.istockphoto.com/id/1182465245/photo/gold-winners-trophy-champion-cup-with-falling-confetti.jpg?s=612x612&w=0&k=20&c=oL7XQ2GgDptAOYAZY_63kYjRrAnb_Zhn0GUdNLy4rpY=",
  },
  {
    id: 5,
    name: "Rugby World Cup",
    day: "Wednesday",
    days: 30,
    image:
      "https://www.freepnglogos.com/uploads/happy-birthday-png/happy-birthday-png-design-elements-3.png",
  },
  // Add more events here if needed
];

const allUsers = ([
    {
        img: "https://media-protected.taiga.io/user/3/7/8/1/763ad6fd69d24fe8be4038aae2728c686460584a83300aae73ab3b99b61b/whatsapp-image-2022-02-22-at-134707.jpeg.80x80_q85_crop.jpg?token=ZN9afA%3AVt72dmaIt2BR1PZqQPqS2QbVKVJz-XLdbfBnh0uvLCjwPFxq_3PzS0wAowtDVuqPgmjYks4I7v5zqILtMal9xA"
    },
    {
        img: "https://media-protected.taiga.io/user/c/5/5/f/3912cb3cfa54175d0ac606d99fa1057a8e054ac3d8c8f562f9d45c5ec400/a.jpg.80x80_q85_crop.jpg?token=ZN9V3A%3ABi5HhixCZH4LIPkpfta4NLqHfH7CvP1WsY5N7uTeevhV6qnrI4uNnQhWoc2nUvMMLOFq_2hlJSuss5ZYTgJNrA",
        name: "abhisheck",
        profession: "senior developer"
    },
    {
        img: "https://media-protected.taiga.io/user/5/d/7/f/713e2adb889ba0288eaeaf6870ffb74a362c332eb5b39565b2f117080184/16726594728082.jpg.80x80_q85_crop.jpg?token=ZN9V3A%3AwqHWDi3a8xJiixi7XDUARbHeQZrs8Vs6J_2HRgEwW48XcTaTZenNG7dgdc_cp_i794_uyt0keb8SMojhoqS0Ng",
        name: "Pallavi",
        profession: "senior developer"
    },
    {
        img: "https://media-protected.taiga.io/user/f/0/c/f/44310b7f150ee54b3ead22f4c0e2f3ec1a74ad415152ef32d132e3412506/vishal_image.jpg.300x300_q85_crop.jpg?token=ZONANw%3AdGkujlgqk2AS4DahQTP7_5650LNNWK9nnfojHLVjhZnnxeHh-60TfpDg2CMdJ1GkqiXNsfuQ6ojiiHvz3aOLug",
        name: "Vishal",
        profession: "senior developer",

    },
    {
        img: "https://media-protected.taiga.io/user/5/d/7/f/713e2adb889ba0288eaeaf6870ffb74a362c332eb5b39565b2f117080184/16726594728082.jpg.80x80_q85_crop.jpg?token=ZN9V3A%3AwqHWDi3a8xJiixi7XDUARbHeQZrs8Vs6J_2HRgEwW48XcTaTZenNG7dgdc_cp_i794_uyt0keb8SMojhoqS0Ng"
    },

]);

// set events
const events = ref(upcomingBirthdays);

const getEvents = (event) => {
  if (event === "Birthdays") {
    events.value=upcomingBirthdays
  } else if (event === "Anniversaries") {
    events.value=upcomingHlidays
  } else if (event === "Work Anniversaries") {
    events.value=upcomingEvents
  }
};



definePageMeta({
  layout: "layout",
});
</script>

<style scoped>
.bg-img-desktop {
  background-image: url("@/assets/img/bg0.jpg") !important;
}
.container{
  margin: 0;
}

background {
  border-radius: 10px;
  box-shadow: 0px 3px 15px 0px #0000000D;
  background-color: white;
}

.employees-status-container {
  float: left;
  height: max-content;
  justify-content: space-between;
}

.employees-status-card {
  padding: 30px;
}

.line {
  height: 125px;
  border: 1px solid #CACACA;
  margin-top: auto;
  margin-bottom: auto;
}
.wrapper {
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-wrap: wrap;
}
.employee-profile-card {
  border-radius: 10px;
  width: 317px;
  float: right;
  /* margin: 20px; */
  padding: 0px;
}
.fa-pencil-square-o {
  position: relative;
  bottom: 18px;
  right: 11px;
  color: rgba(62, 54, 63, 1);
}
.profile-edit-icon {
  position: relative;
  top: 80px;
  right: 28px;
}
.profile>div:nth-child(2) {
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0px;
  color: rgba(62, 54, 63, 1);

}
.profile>div:nth-child(3) {
  font-size: 20px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: 0em;
}
.profile>button {
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  margin-top: 15px;
}
.horizontal-line {
  width: 95%;
  height: 1px;
  background-color: #CACACA;
  margin-left: auto;
  margin-right: auto;
}
.capitalize {
  text-transform: capitalize;
}
.btn {
  line-height: 14px;
}
.profile-heading {
  font-size: 19px;
  font-weight: 600;
  color: rgba(62, 54, 63, 1);
}
.organization {
  background-color: rgba(239, 243, 249, 1);
  width: 287px;
  height: 68px;
}
.organization>div>img {
  margin-top: 6px;
}
</style>
