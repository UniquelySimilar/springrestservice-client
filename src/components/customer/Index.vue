<template>
    <div class="row">
        <div id="customer-index">
            <div>
                <span class="component-heading">Customer List</span>
                <router-link class="btn btn-default" :to="{ name: 'customerCreate' }">Create Customer</router-link>
            </div>
            <hr>
            <table id="customer-table" class="table table-striped">
            </table>
        </div>
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
                    //console.log(customers);

                    customerTable = createDataTable(customers);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    function createDataTable(customers) {
        return $('#customer-table').DataTable({
            data: customers,
            columns: [
                { title: "Id", data: "id" },
                { title: "Name", data: "name" },
                {
                    title: "Home Phone",
                    data: "homePhone",
                    orderable: false
                },
                {
                    title: "Email",
                    data: "email"
                },
                {
                    title: "",
                    data: null,
                    orderable: false,
                    searchable: false,
                    defaultContent: "<button class=\"btn btn-default show-btn\">Show</button>"
                },
                {
                    title: "",
                    data: null,
                    orderable: false,
                    searchable: false,
                    defaultContent: "<button class=\"btn btn-default edit-btn\">Edit</button>"
                },
                {
                    title: "",
                    data: null,
                    orderable: false,
                    searchable: false,
                    defaultContent: "<button class=\"btn btn-default delete-btn\">Delete</button>"
                }
            ]
        });

    }

</script>

<style scoped>
</style>