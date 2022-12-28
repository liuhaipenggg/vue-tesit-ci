<template>
  <div id="app">
    <ToDolist></ToDolist>
  </div>
</template>

<script>
import ToDolist from './components/ToDoList.vue'

export default {
  name: 'App',
  components: {
    ToDolist
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
