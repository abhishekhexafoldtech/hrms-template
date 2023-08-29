<template>
    <div class="block_item">
        <h3 class="header_title">{{ heading }}</h3>
        <div class="total_emp" v-if="!deskTime">
            <div v-if="!deskTime">
                <h3>{{ totalEMployees }}</h3>
                <p>{{ eDescription }}</p>
            </div>
            <div class="emp_img">
                <img :src="props.employees[0].img" alt="" v-if="props.employees.length >= 1">
                <img :src="props.employees[1].img" alt="" v-if="props.employees.length >= 2">
                <img :src="props.employees[2]?.img" alt="" v-if="props.employees.length >= 3">
                <div v-if="props.employees.length > 3">+{{
                    props.employees.length - 3 }}</div>
            </div>
        </div>

        <div v-if="deskTime" class="my_desktime">
            <ul class="time_hours">
                <li>10:00 AM</li>
                <li>07:30 PM</li>
            </ul>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                    :style="`width: ${progressPercent}%;`" aria-valuemax="100"></div>
            </div>
            <ul class="time_count">
                <li>{{ hour + ':' + minute + ":" + seconds }}</li>
                <li>
                    <button>Take a Break</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    heading: {
        type: String,
        default: "Working Remotely"
    },
    color: {
        type: String,
        default: "#FD7D55"
    },
    eDescription: {
        type: String,
    },
    employees: {
        type: Array,
        default: [],
        required: false
    },
    deskTime: {
        type: Boolean,
        default: false
    }
});
const time = reactive({
    hours: +"00",
    minutes: +"00",
    seconds: +"00"
});
const progressPercent = ref(45);
const totalEMployees = computed(() => {
    if (props.employees.length < 10) {
        return `0${props.employees.length}`
    };
    return props.employees.length
});
const hour = computed(() => {
    if (time.hours < 10) {
        return `0${time.hours}`
    }
    return time.hours
});
const minute = computed(() => {
    if (time.minutes < 10) {
        return `0${time.minutes}`
    }
    return time.minutes
})
const seconds = computed(() => {
    if (time.seconds < 10) return `0${time.seconds}`
    return time.seconds
})
const timer = () => {
    const totalTime = (9 * 60) + 30;
    const date = new Date();
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();
    if (currentHour < 10 || currentHour > 19 || (currentHour == 19 && currentMinute > 30)) {
        time.hours = 0;
        time.minutes = 0;
        time.seconds = 0;
        return
    }
    if (currentHour == 10 || currentHour > 10) {
        time.hours = date.getHours() - 10;
        time.minutes = date.getMinutes();
        time.seconds = date.getSeconds();
        const timePassed = (time.hours * 60) + time.minutes;
        progressPercent.value = (timePassed / totalTime) * 100
    }
    window.requestAnimationFrame(timer);
};
onMounted(() => {
    timer()
})
</script>

<style scoped lang="scss">
/*** Style for 3 Blocks in Dashboard ****/
@keyframes width_animate {
  0%   {width: 0px; max-width: 0px;}
  100%  {max-width: 100%;}
}

.block_item {
    padding: 20px 25px;

    .header_title {
        color: var(--text-primary);
        font-size: 18px;
        font-weight: 600;
        margin: 0;
        display: block;
        position: relative;
        padding-left: 15px;

        &::before {
            content: "";
            position: absolute;
            top: 2px;
            left: 0;
            width: 4px;
            height: 20px;
            background-color: var(--violet);
        }
    }

    .my_desktime {
        .time_hours {
            padding-inline-start: 0;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 12px;

            li {
                display: block;
                color: var(--text-primary);
                font-size: 13px;
                font-weight: 700;
            }
        }

        .progress {
            background-color: var(--grey-bg);
            width: 100%;
            height: 10px;
            border-radius: 50px;
            overflow: hidden;
            margin: 5px 0;
            margin-bottom: 18px;

            .progress-bar {
                background: linear-gradient(270.49deg, var(--violet) -10.52%, rgba(163, 104, 190, 0.15) 91.88%);
                height: 10px;
                animation: width_animate 1s;
            }
        }

        .time_count {
            padding-inline-start: 0;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;

            li {
                display: block;
                color: var(--violet);
                font-size: 26px;
                line-height: 26px;
                font-weight: 700;
                letter-spacing: 1px;

                button {
                    background-color: var(--violet);
                    color: var(--white);
                    font-size: 13px;
                    line-height: 17px;
                    font-weight: 500;
                    padding: 8px 12px;
                    border-radius: 5px;
                    border: solid 1px var(--violet);
                    outline: none;
                    position: relative;
                    z-index: 1;
                    transition: 0.5s;

                    &::before {
                        position: absolute;
                        content: "";
                        z-index: -1;
                        top: 0;
                        right: 0;
                        height: 100%;
                        width: 0;
                        background: var(--white);
                        border-radius: 5px;
                        transition: .5s;
                    }

                    &:hover {
                        color: var(--violet);

                        &::before {
                            width: 100%;
                            left: 0;
                        }
                    }
                }
            }
        }
    }

    .total_emp {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        h3 {
            color: inherit;
            font-size: 50px;
            font-weight: 700;
            line-height: 50px;
            margin: 0;
            margin-bottom: 10px;
        }

        p {
            color: var(--text-primary);
            font-size: 13px;
            line-height: 18px;
            font-weight: 500;
            margin: 0;
            margin-bottom: 5px;
        }

        .emp_img {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
            margin-left: 15px;

            img {
                width: 50px;
                height: 50px;
                object-fit: cover;
                object-position: center;
                border-radius: 15px;
            }

            &>div {
                border-radius: 15px;
                line-height: 50px;
                text-align: center;
                color: var(--white);
                font-size: 15px;
                font-weight: 700;
            }
        }
    }

    &:nth-child(2) {
        position: relative;

        &::before,
        &::after {
            content: "";
            width: 1px;
            height: 75%;
            background-color: #dfdfdf;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(0, -50%);
        }

        &::after {
            left: auto;
            right: 0;
        }

        .header_title {
            &::before {
                background-color: var(--orange);
            }
        }

        .total_emp {
            h3 {
                color: var(--orange);
            }

            .emp_img>div {
                background-color: var(--orange);
            }
        }
    }

    &:nth-child(3) {
        .header_title {
            &::before {
                background-color: var(--cyan);
            }
        }

        .total_emp {
            h3 {
                color: var(--cyan);
            }

            .emp_img>div {
                background-color: var(--cyan);
            }
        }
    }
}
</style>