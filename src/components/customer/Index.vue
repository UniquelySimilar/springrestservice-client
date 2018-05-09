<template>
    <div id="customer-index">
        <div>
            <span class="component-heading">Customer List</span>
            <router-link class="btn btn-default" :to="{ name: 'customerCreate' }">Create Customer</router-link>
        </div>
        <hr>
        <table id="customer-table" class="table table-striped">
        </table>
    </div>
</template>

<script>
    // Do initial data retrieve with Vue component in order to create DataTable, then DataTable will manage data.
    var customerTable = {};

    export default {
        mounted: function () {
            console.log('mounted');
            var thisComponent = this;

            axios.get('http://localhost:8080/springrestservice/api/customer/')
            .then(response => {
                var customers = response.data;
                console.log(customers);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

</script>

<style scoped>
</style>