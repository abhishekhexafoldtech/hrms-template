<template>
  <ClientOnly>
    <div class="todo_wrap">
      <div class="box_heading">
        <h3>Today's Todo</h3>
        <button class="add_todo_btn" @click="handleDialogFormVisible">
          <i class="ri-add-line"></i>
        </button>
      </div>
      <div class="todo_inner">
        <div class="todo_item" v-for="(todo, index) in todos" :key="index">
          <el-checkbox v-model="todo.completed" @change="handleCheckboxChange(todo)"></el-checkbox>
          <div class="todo_con">
            <h4 :class="[todoClass(todo),]">{{ todo.description }}</h4>
            <p>{{ formatDate(todo.timestamp) }}</p>
          </div>
          <div class="dropdown">
            <button class="dropdown-toggle" type="button" id="upcomingHolidayDrop" data-bs-toggle="dropdown"
              aria-expanded="false">
              <i class="ri-more-2-fill"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="upcomingHolidayDrop">
              <li><a class="dropdown-item" @click="editTodo(index)">Edit</a></li>
              <li><a class="dropdown-item" @click="deleteTodo(index)">Delete</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <el-row class="list m-0.5 w-100 mt-2" v-for="(todo, index) in todos" :key="index">
        <el-col :span="1" class="m-2 d-flex align-items-center pb-2">
          <input type="checkbox" v-model="todo.completed" @change="handleCheckboxChange(todo)" />
        </el-col>
        <el-col :span="20" class="mt-2">
          <div :class="[todoClass(todo), 'todo-description', 'text-bold']">
            {{ todo.description }}
          </div>
          <div>
            {{ formatDate(todo.timestamp) }}
          </div>
        </el-col>
        <el-col :span="1" class="mt-2 d-flex align-items-center">
          <i class="fa fa-ellipsis-v mx-2 pb-2" aria-hidden="true" @click="toggleEditDelete(index)"></i>
        </el-col>

        <el-button type="success" v-if="selectedTodoIndex === index" @click="editTodo(index)"><i
            class="bi bi-pencil-square"></i></el-button>
        <el-button type="danger" v-if="selectedTodoIndex === index" @click="deleteTodo(index)"><i
            class="bi bi-trash-fill"></i></el-button>
      </el-row> -->
    </div>
    <div class="">
      <el-dialog ref="dialogFormVisibleRef" v-model="dialogFormVisible" width="50%">
        <span>
          <h5 style="margin-left: 30px">{{ dialogHeading }} 134</h5>
        </span>
        <el-form label-position="top" label-width="100px" :model="formData" :rules="formValidationRules"
          style="max-width: 100%; border-radius: 15px; height: fluid" class="bg-white px-5 py-4 rounded-5" ref="formRef">
          <el-row>
            <el-col :xs="24" :sm="24" :lg="24" :xl="24">
              <el-form-item label="Todo Description" prop="description">
                <el-input type="textarea" placeholder="Enter todo here..." v-model="formData.description" />
              </el-form-item>
            </el-col>
          </el-row>

          <el-button type="primary" size="large" style="float: right" @click="handleFormData">{{ dialogButtonText
          }}</el-button>
          <el-button size="large" style="float: right; margin-right: 10px" @click="handleBackButton">Back</el-button>
        </el-form>
      </el-dialog>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted } from "vue";

const todos = ref([]);
const editedTodoIndex = ref(-1); // New reactive variable to keep track of the edited todo index
const showInputAndButton = ref(false); // New reactive variable to control visibility
const editMode = ref(false); // New reactive variable for edit mode
const selectedTodoIndex = ref(-1); // New reactive variable to store the index of the selected todo
const dialogFormVisible = ref(false);
const dialogHeading = ref("Add Todo"); // Set initial heading
const dialogButtonText = ref("Save"); // Set initial button text
const formRef = ref(null);

// Input reactive
const formData = reactive({
  description: "",
});

const formValidationRules = reactive({
  description: [
    {
      required: true,
      message: "Please enter todo...",
      trigger: "blur",
    },
  ],
});

//called Child component function
const handleDialogFormVisible = () => {
  dialogFormVisible.value = true; // Set to true when "add" icon is clicked
};

const toggleEditDelete = (index) => {
  if (selectedTodoIndex.value === index) {
    // If the same todo's three-dot icon is clicked again, hide the edit and delete buttons
    selectedTodoIndex.value = -1;
  } else {
    // Otherwise, show the edit and delete buttons for the clicked todo
    selectedTodoIndex.value = index;
  }
};

// const formatDate = (timestamp) => {
//   const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
//   return new Date(timestamp).toLocaleString(undefined, options);
// };

const formatDate = (timestamp) => {
  const now = new Date();
  const todoDate = new Date(timestamp);

  if (isSameDate(now, todoDate)) {
    return (
      "Today " +
      todoDate.toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    );
  } else if (isSameDate(now, new Date(todoDate.getTime() + 86400000))) {
    return (
      "Yesterday " +
      todoDate.toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    );
  } else {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return todoDate.toLocaleString(undefined, options);
  }
};

const isSameDate = (date1, date2) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

const editTodo = (index) => {
  editedTodoIndex.value = index;
  formData.description = todos.value[index].description; // Populate the input with the todo's description
  showInputAndButton.value = true;
  editMode.value = true; // Set editMode to true when editing
  selectedTodoIndex.value = index; // Set selected todo index
  dialogFormVisible.value = true; // Open the dialog

  // Update dialog heading and button text for editing
  dialogHeading.value = "Update Todo";
  dialogButtonText.value = "Update";
};

// Function to delete a todo
const deleteTodo = (index) => {
  todos.value.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos.value));
  // Show a success for Delete Todo
  flashNotification("success", "Todo Deleted successfully");
};

// Computed property to add a CSS class based on todo completion state
const todoClass = (todo) => {
  return todo.completed ? "completed-todo" : "";
};

// Load todos from local storage on component mount (if available)
onMounted(() => {
  try {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      todos.value = JSON.parse(storedTodos);
    }
  } catch (error) {
    console.error("Error loading todos from localStorage:", error.message);
    todos.value = [];
  }
});

// Function to handle checkbox change event and update localStorage
const handleCheckboxChange = (todo) => {
  localStorage.setItem("todos", JSON.stringify(todos.value));
};

// Function to clear all todos
// const handleClearAll = () => {
// todos.value = []; // Remove all todos from the array
// localStorage.removeItem('todos'); // Remove todos from localStorage

// };

// FORM RELATED
function handleFormData() {
  formRef.value.validate((valid) => {
    if (valid) {
      if (editMode.value) {
        // Editing mode
        todos.value[selectedTodoIndex.value].description = formData.description;
        todos.value[selectedTodoIndex.value].timestamp = Date.now();

        localStorage.setItem("todos", JSON.stringify(todos.value));

        // Reset editMode and hide dialog
        editMode.value = false;
        dialogFormVisible.value = false;

        // Show a success notification or perform any other actions
        flashNotification("success", "Todo updated successfully");

        // Reset input field
        formData.description = "";
      } else {
        // Adding mode
        const newTodo = {
          description: formData.description,
          completed: false,
          timestamp: Date.now(),
        };
        todos.value.push(newTodo);

        localStorage.setItem("todos", JSON.stringify(todos.value));

        // Hide the dialog
        dialogFormVisible.value = false;

        // Clear the form data
        formData.description = "";

        // Show a success notification or perform any other actions
        flashNotification("success", "Todo added successfully");

        // Reset dialog heading and button text
        dialogHeading.value = "Add Todo";
        dialogButtonText.value = "Save";
      }
    }
  });
}

// Method to handle the "Back" button click
const handleBackButton = () => {
  // Reset input field
  formData.description = "";

  // Hide the dialog
  dialogFormVisible.value = false;

  // Reset dialog heading and button text
  dialogHeading.value = "Add Todo";
  dialogButtonText.value = "Save";
};
</script>

<style scoped lang="scss">
.completed-todo {
  text-decoration: line-through;
}

.eraser-btn {
  height: 47px;
}

.text-danger {
  color: red;
}

.form-error-message {
  color: red;
  margin-top: 5px;
}

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

.button-dark {
  background-color: #1f281a;
  color: rgb(255, 255, 255);
}

.list {
  background-color: #eff3f9;
  border-radius: 10px;
}

.card-title {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(71, 68, 68);
  font-weight: 600;
  font-size: 18px;
  margin: 0;
}
</style>
