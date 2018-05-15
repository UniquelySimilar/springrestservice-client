<template>
    <div id="customer-show">
        <div>
            <span class="component-heading">Customer</span>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-2 property-label">
                <span>Name:</span>
            </div>
            <div class="col-md-4">
                <span>{{ customer.name }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 property-label">
                <span>City:</span>
            </div>
            <div class="col-md-4">
                <span>{{ customer.city }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 property-label">
                <span>State:</span>
            </div>
            <div class="col-md-4">
                <span>{{ customer.state }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 property-label">
                <span>Zip Code:</span>
            </div>
            <div class="col-md-4">
                <span>{{ customer.zipcode }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 property-label">
                <span>Home Phone:</span>
            </div>
            <div class="col-md-4">
                <span>{{ customer.homePhone }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 property-label">
                <span>Work Phone:</span>
            </div>
            <div class="col-md-4">
                <span>{{ customer.workPhone }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 property-label">
                <span>Email:</span>
            </div>
            <div class="col-md-4">
                <span>{{ customer.email }}</span>
            </div>
        </div>
        <div id="back-to-list">
            <router-link class="btn btn-default" :to="{ name: 'customerIndex' }">Back to List</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            id: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                customer: {}
            }
        },
        created() {
            axios.get('http://localhost:8080/springrestservice/api/customer/' + this.id)
                .then(response => {
                    this.customer = response.data;
                    //console.log(this.customer);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
</script>

<style scoped>
    .property-label {
        font-weight: bold;
    }

    div.row {
        line-height: 2em;
    }

    #back-to-list {
        margin-top: 1em;
    }
</style>