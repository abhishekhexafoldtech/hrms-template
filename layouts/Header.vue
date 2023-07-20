<template>
<div>
    <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
            <div class="col-12">
                <nav class="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                    <div class="container-fluid px-0">
                        <a class="navbar-brand font-weight-bolder ms-sm-3 d-none d-md-block" href=" https://demos.creative-tim.com/material-kit-pro/index " rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
                            <img src="@/assets/img/companylogo.png" alt="">
                        </a>
                        <a class="navbar-brand font-weight-bolder ms-sm-3 d-block d-md-none" href=" https://demos.creative-tim.com/material-kit-pro/index " rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
                            Material Design
                        </a>
                        <a href="https://www.creative-tim.com/product/material-kit-pro#pricingCard" class="btn btn-sm bg-gradient-primary mb-0 ms-auto d-lg-none d-block">

                        </a>
                        <button class="navbar-toggler shadow-none ms-md-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon mt-2">
                                <span class="navbar-toggler-bar bar1"></span>
                                <span class="navbar-toggler-bar bar2"></span>
                                <span class="navbar-toggler-bar bar3"></span>
                            </span>
                        </button>
                        <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
                            <ul class="navbar-nav navbar-nav-hover ms-auto">

                                <!-- Org -->
                                <li class="nav-item dropdown dropdown-hover mx-2">
                                    <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-buildings-fill opacity-6 me-2 text-md"></i>
                                        Organization
                                        <img src="@/assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
                                        <img src="@/assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg" aria-labelledby="dropdownMenuDocs">
                                        <div class="d-none d-lg-block" v-for="(product, id) in headerData.org" :key="id">
                                            <ul class="list-group">
                                                <li class="nav-item list-group-item border-0 p-0">
                                                    <a class="dropdown-item py-2 ps-3 border-radius-md" href=" https://www.creative-tim.com/learning-lab/bootstrap/overview/material-kit ">
                                                        <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                            <i :class="product.icon" > </i>
                                                           {{ product.name }}
                                                        </h6>
                                                    </a>
                                                </li>                                                
                                            </ul>
                                        </div>                                         
                                    </div>
                                </li>
                                <!-- Projects -->
                                <li class="nav-item dropdown dropdown-hover mx-2">
                                    <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-file-earmark-code-fill opacity-6 me-2 text-md"></i>
                                        Projects
                                        <img src="@/assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
                                        <img src="@/assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg" aria-labelledby="dropdownMenuDocs">
                                        <div class="d-none d-lg-block" v-for="(product, id) in headerData.project" :key="id">
                                            <ul class="list-group">
                                                <li class="nav-item list-group-item border-0 p-0">
                                                    <a class="dropdown-item py-2 ps-3 border-radius-md" href=" https://www.creative-tim.com/learning-lab/bootstrap/overview/material-kit ">
                                                        <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                            <i :class="product.icon" > </i>
                                                            {{ product.name }}
                                                        </h6>
                                                    </a>
                                                </li>                                                
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </li>
                                <!-- Interview -->
                                <li class="nav-item dropdown dropdown-hover mx-2">
                                    <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-pen-fill opacity-6 me-2 text-md"></i>
                                        Interviews
                                        <img src="@/assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
                                        <img src="@/assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg" aria-labelledby="dropdownMenuDocs">
                                        <div class="d-none d-lg-block" v-for="(product, id) in headerData.interview" :key="id">
                                            <ul class="list-group">
                                                <li class="nav-item list-group-item border-0 p-0">
                                                    <a class="dropdown-item py-2 ps-3 border-radius-md" href=" https://www.creative-tim.com/learning-lab/bootstrap/overview/material-kit ">
                                                        <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                            <i :class="product.icon" > </i>
                                                            {{ product.name }}
                                                        </h6>
                                                    </a>
                                                </li>                                               
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <!-- Teams -->
                                <li class="nav-item dropdown dropdown-hover mx-2">
                                    <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-people-fill opacity-6 me-2 text-md"></i>
                                        Teams
                                        <img src="@/assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
                                        <img src="@/assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg" aria-labelledby="dropdownMenuDocs" >
                                        <div class="d-none d-lg-block" v-for="(product, id) in headerData.teams" :key="id">
                                            <ul class="list-group">
                                                <li class="nav-item list-group-item border-0 p-0">
                                                  <nuxt-link class="dropdown-item py-2 ps-3 border-radius-md" :to="product.name">
                                                        <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                            <i :class="product.icon" > </i>
                                                             {{ product.name }}
                                                        </h6>
                                                  </nuxt-link>
                                                </li>                                                             
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <!-- Payroles -->
                                <li class="nav-item dropdown dropdown-hover mx-2">
                                    <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="material-icons opacity-6 me-2 text-md">view_day</i>
                                        Payrole
                                        <img src="@/assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
                                        <img src="@/assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg" aria-labelledby="dropdownMenuDocs" >
                                        <div class="d-none d-lg-block" v-for="(product, id) in headerData.payroll" :key="id">
                                            <ul class="list-group">
                                                <li class="nav-item list-group-item border-0 p-0">
                                                    <a class="dropdown-item py-2 ps-3 border-radius-md" href=" https://www.creative-tim.com/learning-lab/bootstrap/overview/material-kit ">
                                                        <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                            <i :class="product.icon" > </i>
                                                            {{product.name}}
                                                        </h6>
                                                    </a>
                                                </li>                                                
                                            </ul>
                                        </div>                                        
                                    </div>
                                </li>
                                <!-- Docs -->
                                <li class="nav-item dropdown dropdown-hover mx-2">
                                    <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="material-icons opacity-6 me-2 text-md">article</i>
                                        Docs
                                        <img src="@/assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
                                        <img src="@/assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg" aria-labelledby="dropdownMenuDocs" >
                                        <div class="d-none d-lg-block" v-for="(product, id) in headerData.docs" :key="id">
                                            <ul class="list-group">
                                                <li class="nav-item list-group-item border-0 p-0" >
                                                    <a class="dropdown-item py-2 ps-3 border-radius-md" href=" https://www.creative-tim.com/learning-lab/bootstrap/overview/material-kit ">
                                                        <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                            <i :class="product.icon" > </i>
                                                            {{ product.name }}
                                                        </h6>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <!-- Button replace with avatar -->
                            <ul class="navbar-nav d-lg-block d-none">
                                <li class="nav-item dropdown dropdown-hover mx-2">
                                    <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">

                                        <a href="javascript:;" class="avatar rounded-circle">
                                            <img alt="Image placeholder" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
                                        </a>
                                        <img src="@/assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
                                        <img src="@/assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg" aria-labelledby="dropdownMenuDocs">
                                        <div class="d-none d-lg-block">
                                            <ul class="list-group">
                                                <li class="nav-item list-group-item border-0 p-0">
                                                    <a class="dropdown-item py-2 ps-3 border-radius-md" href=" https://www.creative-tim.com/learning-lab/bootstrap/overview/material-kit ">
                                                        <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                            Profile
                                                        </h6>
                                                        <span class="text-sm">Your Profile</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item list-group-item border-0 p-0">
                                                    <a class="dropdown-item py-2 ps-3 border-radius-md" href=" https://www.creative-tim.com/learning-lab/bootstrap/colors/material-kit ">
                                                        <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                            Settings
                                                        </h6>
                                                        <span class="text-sm">Customise Your Profile</span>
                                                    </a>
                                                </li>
                                                <li class="nav-item list-group-item border-0 p-0">
                                                    <a class="dropdown-item py-2 ps-3 border-radius-md" href=" https://www.creative-tim.com/learning-lab/bootstrap/alerts/material-kit ">
                                                        <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                            Logout
                                                        </h6>
                                                        <span class="text-sm">Sign-out Account</span>
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                        <div class="row d-lg-none">
                                            <div class="col-md-12 g-0">
                                                <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                                                    <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                        Getting Started
                                                    </h6>
                                                    <span class="text-sm">All about overview, quick start, license and
                                                        contents</span>
                                                </a>
                                                <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                                                    <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                        Foundation
                                                    </h6>
                                                    <span class="text-sm">See our colors, icons and typography</span>
                                                </a>
                                                <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                                                    <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                        Components
                                                    </h6>
                                                    <span class="text-sm">Explore our collection of fully designed
                                                        components</span>
                                                </a>
                                                <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                                                    <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                        Plugins
                                                    </h6>
                                                    <span class="text-sm">Check how you can integrate our plugins</span>
                                                </a>
                                                <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                                                    <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                        Utility Classes
                                                    </h6>
                                                    <span class="text-sm">For those who want flexibility, use our utility
                                                        classes</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <!-- End Navbar -->
            </div>
        </div>
    </div>
    <!-- <pre>{{ headerData }}</pre> -->
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
</div>
</template>

<script setup>
import headerData from '~/data/header';
const { org } = headerData
// const {data : products, pending, error, refresh}= await useFetch("../data/data.json")
console.log(headerData)
console.log(org)
</script>

<style scoped>
.bg-img-desktop {
    background-image: url('@/assets/img/bg0.jpg') !important;

}

.navbar-brand img {
    width: 100px;
}
</style>
