<template>
  <div id="app" class="container">
    <header>
      <h2>Customer Manager Client Application for Spring REST Service</h2>
    </header>
  </div>
</template>

<script>
  import CustomerIndex from "./components/customer/Index.vue";

  export default {
    name: 'app',
    data() {
      return {
      }
    },
    components: {
      CustomerIndex
    }
  }
</script>

<style>
  header {
    background-color: #d9ffb3;
    font-size: 1em;
    font-weight: bold;
    padding: 0.8em 1em 0.8em;
    margin-bottom: 0.5em;
  }
</style>