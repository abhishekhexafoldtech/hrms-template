<template>
    <div class="pt-5">
       <calendar-view
            :items="events"
			:show-date="showDate"
			class="theme-default holiday-us-traditional holiday-us-official">
			<template #header="{ headerProps }">
				<calendar-view-header
					:header-props="headerProps"
					@input="setShowDate" />
			</template>
		</calendar-view>
    </div>
</template>

<script setup>
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"
import "../../node_modules/vue-simple-calendar/dist/style.css"
import "../../node_modules/vue-simple-calendar/dist/css/default.css"
import "../../node_modules/vue-simple-calendar/dist/css/holidays-us.css"

let showDate = ref(new Date())

let events = reactive(
   [
        {
          id: "1",
          startDate: "2023-07-24",
          endDate: "2023-07-26",
          title: "Meeting with client",
          
        },
        {
          id: "1",
          startDate: "2023-07-28",
          endDate: "2023-07-28",
          title: "Meeting with client",
        }
    ],
)

function setShowDate(d) {
    showDate.value = d;
    console.log('ddd',d)
}

definePageMeta({
    components: {
        CalendarView,
        CalendarViewHeader,
    },
});
</script>