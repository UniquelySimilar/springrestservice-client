<template>
  <div id="app" class="container">
    <div class="row">
      <header>
        <h2>Customer Manager Client Application for Spring REST Service</h2>
      </header>
    </div>
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
  import CustomerIndex from "./components/customer/Index.vue";
  import CustomerShow from "./components/customer/Show.vue";
  import CustomerCreateEdit from "./components/customer/CreateEdit.vue";

  export default {
    name: 'app',
    data() {
      return {
      }
    },
    components: {
      CustomerIndex,
      CustomerShow,
      CustomerCreateEdit
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  header {
    background-color: #cdd1d3;
    font-size: 1em;
    font-weight: bold;
    padding: 0.8em 1em 0.8em;
    margin-bottom: 0.5em;
  }

  .component-heading {
    font-size: 1.5em;
    font-weight: bold;
    vertical-align: middle;
    margin-right: 2em;
  }
</style>