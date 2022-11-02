<script setup lang="ts">
import { ref } from 'vue';

const newTodo = ref('');
const todos = ref([
  {
    id: 1,
    text: 'Learn Vue.js 3',
    completed: false
  },
]);

const createTodo = () => {
  todos.value = [...todos.value, {
    id: todos.value[todos.value.length - 1].id + 1,
    text: newTodo.value,
    completed: false,
  }];
  newTodo.value = '';
};

</script>
<template>
  <div>
    <div v-for="todo in todos"
         data-test="todo"
         :key="todo.id"
         :class="{ completed: todo.completed }"
    >
      <input type="checkbox"
             v-model="todo.completed"
             data-test="todo-checkbox"
      />
      {{ todo.text }}
    </div>
    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
</template>
<style lang="css" scoped>
.completed {
  text-decoration: line-through;
}
</style>
