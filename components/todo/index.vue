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
              <li><a class="dropdown-item" @click="editTodo(index, $event)">Edit</a></li>
              <li><a class="dropdown-item" @click="deleteTodo(index, $event)">Delete</a></li>
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
    <div class="todo_dialogue">
      <el-dialog ref="dialogFormVisibleRef" v-model="dialogFormVisible" align-center :show-close="false">
        <template #header="{ close, titleId }">
          <h4 :id="titleId">{{ dialogHeading }}</h4>
          <button @click="close">
            <i class="ri-close-line"></i>
          </button>
        </template>
        <el-form label-position="top" label-width="100px" :model="formData" :rules="formValidationRules" ref="formRef">
          <div class="fieldrow">
            <el-form-item label="Todo Description" prop="description">
              <el-input type="textarea" placeholder="Write your todo here..." v-model="formData.description" />
            </el-form-item>
          </div>

          <div class="frm_action">
            <button class="btn_cancel" @click="handleBackButton($event)">Cancel</button>
            <button @click="handleFormData($event)">{{ dialogButtonText }}</button>
          </div>
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
      month: "short",
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

const editTodo = (index, event) => {
  event.preventDefault();
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
const deleteTodo = (index, event) => {
  event.preventDefault();
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
function handleFormData(event) {
  event.preventDefault();
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
const handleBackButton = (event) => {
  event.preventDefault(); // Prevent default anchor tag behavior

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
/**** Style for Todo List - Dashboard ****/
.todo_wrap {
    border-radius: 10px;
    background-color: var(--white);
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.05);
    padding: 15px;
    min-height: 365px;

    .box_heading {
        .add_todo_btn {
            background-color: transparent;
            padding: 0;
            width: 25px;
            height: 25px;
            font-size: 24px;
            line-height: 20px;
            color: var(--text-primary);
            border: none;
            margin-right: -5px;
        }
    }

    .todo_inner {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-height: 295px;
        margin: 0 -10px;
        padding: 0 10px;
        overflow: auto;
        overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 5px;
            height: 5px;
        }

        &::-webkit-scrollbar-thumb {
            background: #ddd;
            border-radius: 100px;
        }

        &::-webkit-scrollbar-track {
            background: var(--grey-bg);
            border-radius: 100px;
        }

        .todo_item {
            background-color: var(--grey-bg);
            border-radius: 10px;
            padding: 10px;
            position: relative;
            padding-left: 40px;

            .el-checkbox {
                height: 16px;
                margin: 0;
                padding: 0;
                display: block;
                position: absolute;
                top: 13px;
                left: 12px;
            }
            .el-checkbox__inner {
                width: 16px;
                height: 16px;
                border: solid 1px #cacaca;
                border-radius: 3px;

                &:hover {
                    border-color: var(--pastle-green);
                }
            }
            .el-checkbox__input.is-checked .el-checkbox__inner {
                background-color: var(--pastle-green);
                border-color: var(--pastle-green);
            }
            .el-checkbox__inner::after {
                border-width: 2px;
                height: 8px;
                width: 4px;
                top: 1px;
                left: 4px;
            }
            .todo_con {
                display: inline-block;
                vertical-align: middle;
                width: calc(100% - 25px);

                h4 {
                    color: var(--text-primary);
                    font-size: 14px;
                    line-height: 20px;
                    font-weight: 500;
                    margin: 0;
                    margin-bottom: 5px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }

                p {
                    color: var(--text-grey);
                    font-size: 13px;
                    line-height: 16px;
                    font-weight: 500;
                    margin: 0;
                }
            }
        }
    }

    .dropdown-toggle {
        background-color: transparent;
        padding: 0;
        width: 25px;
        height: 25px;
        font-size: 24px;
        line-height: 20px;
        color: var(--text-primary);
        border: none;
        margin-right: -5px;

        &::after {
            content: none;
        }
    }

    .dropdown {
        width: 25px;
        height: 25px;
        display: inline-block;
        vertical-align: middle;

        .dropdown-menu {
            box-shadow: 0px 0px 20px rgb(0 0 0 / 15%);
            min-width: 125px;
        }
    }

    .dropdown:not(.dropdown-hover) .dropdown-menu.show {
        margin-top: 40px !important;
    }

    .dropdown .dropdown-menu.dropdown-menu-end:before {
        right: 15px;
    }
}
</style>
