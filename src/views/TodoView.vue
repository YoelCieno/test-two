<script setup lang="ts">
const todos = [
  {
    id: 1,
    text: 'Learn Vue.js 3',
    completed: false
  }
]
</script>
<template>
  <div>
    <div class="todo-item" v-for="todo in todos" :key="todo.id" data-test="todo">
      {{ todo.text }}
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
