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
    var thisRouter;

    export default {
        mounted: function () {
            //console.log('mounted');

            thisRouter = this.$router;

            axios.get(this.$root.baseURL)
                .then(response => {
                    var customers = response.data;
                    //console.log(customers);

                    customerTable = this.createDataTable(customers);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        methods: {
            createDataTable: function (customers) {
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
                    ],
                    initComplete: this.dataTableInitComplete
                });
            },
            dataTableInitComplete: function () {
                //console.log('Table initialization complete');
                var baseURL = this.$root.baseURL;

                // Click handler for Show button
                $('#customer-table tbody').on('click', 'button.show-btn', function () {
                    var currentRow = customerTable.row($(this).parents('tr'));
                    var rowData = currentRow.data();
                    //console.log('Show Customer details for ID: ' + rowData.id);
                    thisRouter.push({ name: 'customerShow', params: { id: rowData.id } });
                });

                // Click handler for Edit button
                $('#customer-table tbody').on('click', 'button.edit-btn', function () {
                    var currentRow = customerTable.row($(this).parents('tr'));
                    var rowData = currentRow.data();
                    //console.log('Edit Customer for ID: ' + rowData.id);
                    thisRouter.push({ name: 'customerEdit', params: { id: rowData.id } });
                });

                // Click handler for Delete button
                $('#customer-table tbody').on('click', 'button.delete-btn', function () {
                    var currentRow = customerTable.row($(this).parents('tr'));
                    var rowData = currentRow.data();
                    //console.log(rowData)

                    // Delete customer from database
                    if (true == confirm('Delete Customer?')) {
                        axios.delete(baseURL + rowData.id)
                            .then(response => {
                                // Remove associated row
                                currentRow.remove().draw();
                            })
                            .catch(error => {
                                console.log(error);
                            });
                    }
                });
            }
        }
    }
</script>

<style scoped>
</style>