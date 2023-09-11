<template>
    <div class="side_bar">
        <figure class="side_logo">
            <img src="@/assets/img/logo.png" alt="">
        </figure>
        <ul class="nav side_menu">
            <li class="nav_item">
                <a class="nav_link active" data-bs-toggle="pill" type="button" role="tab" aria-selected="true">
                    <i class="ri-layout-masonry-fill"></i>
                    <span>Dashboard</span>
                </a>
            </li>
            <li class="nav_item">
                <a class="nav_link" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                    <i class="ri-stack-fill"></i>
                    <span>Projects</span>
                </a>
            </li>
            <li class="nav_item">
                <a class="nav_link" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                    <i class="ri-currency-line"></i>
                    <span>Payroll</span>
                    <div class="child_submenu">
                        <ul>
                            <li><a href="#">Pay Slips</a></li>
                            <li><a href="#">Salary Structure</a></li>
                            <li><a href="#">Declaration</a></li>
                            <li><a href="#">Bank Account</a></li>
                        </ul>
                    </div>
                </a>
            </li>
            <li class="nav_item">
                <a class="nav_link" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                    <i class="ri-group-2-line"></i>
                    <span>Teams</span>
                </a>
            </li>
            <li class="nav_item">
                <a class="nav_link" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                    <i class="ri-survey-line"></i>
                    <span>Interviews</span>
                    <div class="child_submenu">
                        <ul>
                            <li><a href="#">Openings</a></li>
                            <li><a href="#">Applications</a></li>
                            <li><a href="#">Onboarding</a></li>
                            <li><a href="#">Talent Pool</a></li>
                        </ul>
                    </div>
                </a>
            </li>
            <li class="nav_item">
                <a class="nav_link" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                    <i class="ri-calendar-event-line"></i>
                    <span>Events</span>
                </a>
            </li>
            <li class="nav_item">
                <a class="nav_link" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                    <i class="ri-question-line"></i>
                    <span>Support</span>
                </a>
            </li>
            <li class="nav_item">
                <a class="nav_link" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                    <i class="ri-user-settings-line"></i>
                    <span>My Account</span>
                    <div class="child_submenu my_acc_submenu">
                        <ul>
                            <li><a href="#">File Manager</a></li>
                            <li><a href="#">Edit Profile</a></li>
                            <li><a href="#">Change Password</a></li>
                            <li><a href="#">Sign Out</a></li>
                        </ul>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>

</script>