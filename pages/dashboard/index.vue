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
      <section class="pt-3 pb-4" id="count-stats">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
              <div class="row">
                <div class="col-md-4 position-relative">
                  <div class="p-3 text-center">
                    <h1 class="text-gradient text-primary">
                      <span id="state1" countTo="300">3000</span>+
                    </h1>
                    <h5 class="mt-3">Coded Elements</h5>
                    <p class="text-sm font-weight-normal">
                      From buttons, to inputs, navbars, alerts or cards, you are
                      covered
                    </p>
                  </div>
                  <hr class="vertical dark" />
                </div>
                <div class="col-md-4 position-relative">
                  <div class="p-3 text-center">
                    <h1 class="text-gradient text-primary">
                      <span id="state2" countTo="100">1000</span>+
                    </h1>
                    <h5 class="mt-3">Design Blocks</h5>
                    <p class="text-sm font-weight-normal">
                      Mix the sections, change the colors and unleash your
                      creativity
                    </p>
                  </div>
                  <hr class="vertical dark" />
                </div>
                <div class="col-md-4">
                  <div class="p-3 text-center">
                    <h1
                      class="text-gradient text-primary"
                      id="state3"
                      countTo="41"
                    >
                      41
                    </h1>
                    <h5 class="mt-3">Pages</h5>
                    <p class="text-sm font-weight-normal">
                      Save 3-4 weeks of work when you use our pre-made pages for
                      your website
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
import EventCard from "~/components/eventCard.vue";

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

definePageMeta({
  layout: "layout",
});

</script>

<style scoped>
.bg-img-desktop {
  background-image: url("@/assets/img/bg0.jpg") !important;
}
</style>
