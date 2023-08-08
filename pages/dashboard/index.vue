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
      <section class="mt-10">
        <div class="d-flex flex-wrap">
            <StatisticsCard  :leave="false" header="Working Remotely" :users="allUsers" description="Employees working remotely."/>
            <StatisticsCard  :leave="false" header="On Leave Today" :users="allUsers" description="Employees on Leave today."/>
            <StatisticsCard  :leave="false" header="Projects Completed" :users="allUsers" description="Projects completed"/>
            <StatisticsCard  :leave="true" header="Total Leaves"/>
        </div>
      </section>
      <section class="mt-5">
        <div class="col-lg-12">
          <div class="row">
            <div class="col col-md-4 mt-md-0">
              <!-- Upcoming Holidays -->
              <EventCard :events="upcomingHlidays" title="Upcoming Holidays" />
            </div>
            <div class="col col-md-4 mt-md-0">
              <!-- Upcoming Birthdays -->
              <EventCard
                :events="upcomingBirthdays"
                title="Up Comming Birthdays"
              />
            </div>
            <div class="col col-md-4 mt-md-0">
              <EventCard :events="upcomingEvents" title="Upcoming Event" />
            </div>
          </div>
        </div>
      </section>
      <section class="mt-5">
        <ToDoList />
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
import EventCard from "~/components/EventCard.vue";

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
        img:"https://imgs.search.brave.com/3jPQ7-D_SmheFuu2NgYZcwM8OY4Gx2mfYNF8RpEVXVY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MDgyMTQ3NTExOTYt/YmNmZDRjYTYwZjkx/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4Tm54/OGRYTmxjaVV5TUhC/eWIyWnBiR1Y4Wlc1/OE1IeDhNSHg4ZkRB/PSZ3PTEwMDAmcT04/MA.jpeg "
       },
       {
        img:"https://imgs.search.brave.com/4grtqVAsBIx4XOceE6y0VWcI68dxuBz7EfVB_h_aaMY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC10ZWVu/YWdlLWJveV8yMy0y/MTQ4MTA1NTg1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn"
       },
       {
        img:"https://imgs.search.brave.com/UfbSOBeLObpdqJhtiQB6xcCnzA_q9h9XsNJ5pBZdwUk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/cmV0dHktc21pbGlu/Zy1qb3lmdWxseS1m/ZW1hbGUtd2l0aC1m/YWlyLWhhaXItZHJl/c3NlZC1jYXN1YWxs/eS1sb29raW5nLXdp/dGgtc2F0aXNmYWN0/aW9uXzE3NjQyMC0x/NTE4Ny5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
       },
       {
        img:""
       },
       {
        img:""
       }
    ])

definePageMeta({
  layout: "layout",
});
</script>

<style scoped>
.bg-img-desktop {
  background-image: url("@/assets/img/bg0.jpg") !important;
}
</style>
