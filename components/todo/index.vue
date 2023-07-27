<template>
  <ClientOnly>
      <div class="d-flex justify-content-center">
          <div class="container-fluid shadow p-3 bg-body rounded mt-2 w-60">
            <h6>Todo List</h6>
            <el-row :gutter="10">
              <el-col :span="18">
                <el-form-item prop="name">
                  <el-input
                    v-model="input1"
                    class="w-100 m-2"
                    size="large"
                    placeholder="Please Input"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="4" class="mt-1">
                <button class="btn btn-lg btn-primary w-100" @click="handleSubmit">Submit</button>
              </el-col>
              <el-col :span="2" class="mt-1">
                <button class="btn btn-lg btn-warning eraser-btn " @click="handleClearAll"><i class="bi bi-eraser-fill"></i></button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <table class="table table-striped">
                  <tbody>
                    <tr v-for="(todo, index) in todos" :key="index">
                      <!-- <td class="pt-3 w-5"> <el-checkbox v-model="checked2" label="Option 2" size="large" /></td> -->
                      <td class="pt-3 w-5">
                          <el-checkbox v-model="todo.completed" @change="handleCheckboxChange(todo)" size="small" /> 
                          <!-- <input class="form-check-input" @change="handleCheckboxChange(todo)" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">                        -->
                      </td>
                      <td :class="todoClass(todo) + ' w-90 pt-3 text-bold'">{{ todo.description }}</td>
                      <td class="pt-3"><el-button type="success" @click="editTodo(index)"><i class="bi bi-pencil-square"></i></el-button></td>
                      <td class="pt-3"><el-button type="danger" @click="deleteTodo(index)"><i class="bi bi-trash-fill"></i></el-button></td>
                    </tr>
                  </tbody>
                </table>
              </el-col>
            </el-row>
          </div>
        </div>
  </ClientOnly>
  
</template>

<script setup>
import { ref, onMounted } from 'vue';

const todos = ref([]);
const input1 = ref('');
const editedTodoIndex = ref(-1); // New reactive variable to keep track of the edited todo index

/// Function to handle form submission and save todo to local storage
const handleSubmit = () => {
if (input1.value.trim() !== '') {
  if (editedTodoIndex.value !== -1) {
    // If we are editing an existing todo
    todos.value[editedTodoIndex.value].description = input1.value.trim();
    editedTodoIndex.value = -1; // Reset the editedTodoIndex after editing
  } else {
    // Otherwise, add a new todo
    const newTodo = {
      description: input1.value.trim(),
      completed: false,
    };
    todos.value.push(newTodo);
  }

  localStorage.setItem('todos', JSON.stringify(todos.value));
  input1.value = ''; // Reset the input field after submitting the form
}
};




const editTodo = (index) => {
// Set the editedTodoIndex to the index of the todo being edited
editedTodoIndex.value = index;
input1.value = todos.value[index].description; // Populate the input with the todo's description
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


</script>

<style>
.completed-todo {
  text-decoration: line-through;
}

.eraser-btn{
  height: 47px;
}
</style>
