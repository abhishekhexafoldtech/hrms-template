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
                <div class="col-md-4 mt-md-0">
                    <div class="card shadow-lg  min-height-160 min-height-160">
                    <div class="mt-2 ms-2">
                      <h6 class="mb-0">Imp Link</h6>
                      <br/>
                      <p class="text-secondary text-sm font-weight-normal">
                        <i class="fa fa-dot-circle-o" aria-hidden="true"></i> 1 Meeting with HR
                      </p>
                      <p class="text-secondary text-sm font-weight-normal">
                        <i class="fa fa-dot-circle-o" aria-hidden="true"></i> 1 Meeting with HR
                      </p>
                      <p class="text-secondary text-sm font-weight-normal">
                        <i class="fa fa-dot-circle-o" aria-hidden="true"></i> 1 Meeting with HR
                      </p>
                      <p class="text-secondary text-sm font-weight-normal">
                        <i class="fa fa-dot-circle-o" aria-hidden="true"></i> 1 Meeting with HR
                      </p>
                    </div>
                    </div>
                </div>
                <div class="col-md-4 mt-md-0">
                    <div class="card shadow-lg  min-height-160 min-height-160">
                    <div class="mt-2 ms-2">
                      <h6 class="mb-0">Task List</h6>
                      <br/>
                      <p class="text-secondary text-sm font-weight-normal">
                        <i class="fa fa-tasks" aria-hidden="true"></i> Task One
                      </p>
                      <p class="text-secondary text-sm font-weight-normal">
                        <i class="fa fa-tasks" aria-hidden="true"></i> Task One
                      </p>
                      <p class="text-secondary text-sm font-weight-normal">
                        <i class="fa fa-tasks" aria-hidden="true"></i> Task One
                      </p>
                      <p class="text-secondary text-sm font-weight-normal">
                        <i class="fa fa-tasks" aria-hidden="true"></i> Task One
                      </p>
                     
                    </div>
                    </div>
                </div>
                <div class="col-md-4 mt-md-0">
                    <div class="card shadow-lg  min-height-160 min-height-160">
                    <div class="mt-2 ms-2">
                      <h6 class="mb-0">Announcement</h6>
                      <br/>
                      <p class="text-secondary text-sm font-weight-normal">
                        <i class="fa fa-bullhorn" aria-hidden="true"></i> 1 Announcement
                      </p>
                      <p class="text-secondary text-sm font-weight-normal">
                        <i class="fa fa-bullhorn" aria-hidden="true"></i> 1 Announcement
                      </p>
                      <p class="text-secondary text-sm font-weight-normal">
                        <i class="fa fa-bullhorn" aria-hidden="true"></i> 1 Announcement
                      </p>
                      <p class="text-secondary text-sm font-weight-normal">
                        <i class="fa fa-bullhorn" aria-hidden="true"></i> 1 Announcement
                      </p>
                    </div>
                    </div>
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
            <EventCalender/>
          </div>
        </div>
      </section>
      
      
    </div>
  </div>
</template>

<script setup>
import EventCalender from "@/components/calender/EventCalender.vue"
import ToDoList from "@/components/todo/index.vue"

definePageMeta({
  layout: "layout",
});
</script>



<style scoped>
.bg-img-desktop {
    background-image: url('@/assets/img/bg0.jpg') !important;

}


</style>
