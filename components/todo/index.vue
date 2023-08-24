<template>
  <ClientOnly>
      <div class="d-flex justify-content-center ">
          <el-card class="box-card shadow-lg w-100">
    <div class="top">
      <!-- top section -->
      <p class="card-title">Todo List</p>
      <!-- add todo Icon -->
      <span @click="handleDialogFormVisible"><i class="bi bi-plus-lg fw-bold"></i></span>
    </div>

        <!-- Conditionally render input and button based on showInputAndButton and editMode -->
        <!-- <el-row v-if="showInputAndButton || editMode" :gutter="10" class="w-100">
              <el-col :span="15">
                <el-form :ref="formRef" :rules="formValidationRules">
                  <el-form-item prop="todo" :rules="formValidationRules" class="fw-bold">
                    <el-input
                      v-model="input1"
                      class="w-100 mt-2"
                      size="large"
                      placeholder="Please Input Todo Here..."
                    />
                  </el-form-item> -->

                  <!-- Add a new element to display the error message -->
                  <!-- <el-form-item v-if="showSubmitWarning" class="form-error-message">
                    <span class="el-form-item__error fw-bold">Please enter todo before submit</span>
                  </el-form-item>

                </el-form>
              </el-col>
              <el-col :span="9" class="mt-1">
                <button class="button-dark btn btn-lg  w-100" @click="handleSubmit">Submit</button>
              </el-col> -->
              <!-- <el-col :span="2" class="mt-1">
                <button class="btn btn-lg btn-warning eraser-btn " @click="handleClearAll"><i class="bi bi-eraser-fill"></i></button>
              </el-col> -->
            <!-- </el-row> -->
            <el-row class="list m-0.5 w-100 mt-2" v-for="(todo, index) in todos" :key="index">
              <el-col :span="1" class="m-2 d-flex align-items-center pb-2">
                <input type="checkbox" v-model="todo.completed" @change="handleCheckboxChange(todo)">
              </el-col>
              <el-col :span="20" class="mt-2">
                <div :class="[todoClass(todo), 'todo-description', 'text-bold']">
                  {{ todo.description }}
                </div>
                <div>
                  {{ formatDate(todo.timestamp) }}
                </div>
              </el-col>
              <!-- three dot icon -->
              <el-col :span="1" class="mt-2 d-flex align-items-center">
                <i class="fa fa-ellipsis-v mx-2 pb-2" aria-hidden="true" @click="toggleEditDelete(index)"></i>
    <!-- ^ When three-dot icon is clicked, toggleEditDelete method is called -->
  </el-col>
              <!-- <el-col :span="24">
                <table class="table table-striped">
                  <tbody>
                    <tr v-for="(todo, index) in todos" :key="index"> -->
                      <!-- <td class="pt-3 w-5"> <el-checkbox v-model="checked2" label="Option 2" size="large" /></td> -->
                      <!-- <td class="pt-3 w-5">
                          <el-checkbox v-model="todo.completed" @change="handleCheckboxChange(todo)" size="small" />  -->
                          <!-- <input class="form-check-input" @change="handleCheckboxChange(todo)" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">                        -->
                      <!-- </td>
                      <td :class="todoClass(todo) + ' w-90 pt-3 text-bold'">{{ todo.description }}</td> -->
                      <el-button type="success" v-if="selectedTodoIndex === index" @click="editTodo(index)"><i class="bi bi-pencil-square"></i></el-button>
                      <el-button type="danger" v-if="selectedTodoIndex === index" @click="deleteTodo(index)"><i class="bi bi-trash-fill"></i></el-button>
                    <!-- </tr>
                  </tbody>
                </table>
              </el-col> -->
            </el-row>
            </el-card>
            <expenseForm ref="dialogFormVisibleRef"/>
        </div>
  </ClientOnly>
  
</template>

<script setup>
import { ref, onMounted } from 'vue';
import expenseForm from './todoForm.vue';


const todos = ref([]);
const input1 = ref('');
const editedTodoIndex = ref(-1); // New reactive variable to keep track of the edited todo index
// const formRef = ref(null);
const showSubmitWarning = ref(false); // reactive variable to control the visibility of the submit warning message
const showInputAndButton = ref(false); // New reactive variable to control visibility
const editMode = ref(false); // New reactive variable for edit mode
const selectedTodoIndex = ref(-1); // New reactive variable to store the index of the selected todo


//called Child component function
const dialogFormVisibleRef = ref(null);
const handleDialogFormVisible = () => {
  dialogFormVisibleRef.value.dialogFormVisibleFun();
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
    return 'Today ' + todoDate.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true });
  } else if (isSameDate(now, new Date(todoDate.getTime() + 86400000))) {
    return 'Yesterday ' + todoDate.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true });
  } else {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
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

// Function to handle form submission and save todo to local storage
const handleSubmit = () => {
  if (input1.value.trim() !== '') {
    if (editedTodoIndex.value !== -1) {
      // If we are editing an existing todo
      todos.value[editedTodoIndex.value].description = input1.value.trim();
      editedTodoIndex.value = -1; // Reset the editedTodoIndex after editing

      // Update the timestamp for edited todos
      todos.value[editedTodoIndex.value].timestamp = Date.now();
    } else {
      // Otherwise, add a new todo
      // const newTodo = {
      //   description: input1.value.trim(),
      //   completed: false,
      // };
      // todos.value.push(newTodo);

      // Add timestamp for new todos
      const newTodo = {
        description: input1.value.trim(),
        completed: false,
        timestamp: Date.now(),
      };
      todos.value.push(newTodo);
    }

    localStorage.setItem('todos', JSON.stringify(todos.value));
    input1.value = ''; // Reset the input field after submitting the form

    // Hide the error message
    showSubmitWarning.value = false;
  } else {
    // Show the error message when the input is empty and the user is trying to submit
    showSubmitWarning.value = true;
  }
  // Reset editMode after handling submission
  editMode.value = false;
};




// const editTodo = (index) => {
// // Set the editedTodoIndex to the index of the todo being edited
// editedTodoIndex.value = index;
// input1.value = todos.value[index].description; // Populate the input with the todo's description
// };

// Function to handle editing a todo
const editTodo = (index) => {
  // Set the editedTodoIndex to the index of the todo being edited
  editedTodoIndex.value = index;
  input1.value = todos.value[index].description; // Populate the input with the todo's description
  showInputAndButton.value = true; // Show input and button when editing
  editMode.value = true; // Set editMode to true when editing
};


// Function to delete a todo
const deleteTodo = (index) => {
  todos.value.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos.value));
};

// Computed property to add a CSS class based on todo completion state
const todoClass = (todo) => {
return todo.completed ? 'completed-todo' : '';
};

// Load todos from local storage on component mount (if available)
onMounted(() => {
try {
  const storedTodos = localStorage.getItem('todos');
  if (storedTodos) {
    todos.value = JSON.parse(storedTodos);
  }
} catch (error) {
  console.error('Error loading todos from localStorage:', error.message);
  todos.value = [];
}
});

// Function to handle checkbox change event and update localStorage
const handleCheckboxChange = (todo) => {
localStorage.setItem('todos', JSON.stringify(todos.value));
};

// Function to clear all todos
const handleClearAll = () => {
todos.value = []; // Remove all todos from the array
localStorage.removeItem('todos'); // Remove todos from localStorage

};

// Function to toggle the visibility of input field and submit button
const toggleInputAndButton = () => {
  showInputAndButton.value = !showInputAndButton.value;
  editMode.value = false; // Reset editMode when toggling
};

</script>

<style scoped lang="scss">
.completed-todo {
  text-decoration: line-through;
}

.eraser-btn{
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
.button-dark{
  background-color: #1F281A;
  color:rgb(255, 255, 255);

}
.list{
  background-color: #EFF3F9;
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
