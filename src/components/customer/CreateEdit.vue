<template>
    <div id="customer-create-edit">
        <div>
            <span class="component-heading">New Customer</span>
        </div>
        <hr>
        <form class="form-horizontal">
            <div class="form-group">
                <label for="name" class="col-md-offset-2 col-md-2">Name</label>
                <div class="col-md-4">
                    <input type="input" class="form-control" id="name">
                </div>
            </div>
            <div class="form-group">
                <label for="street" class="col-md-offset-2 col-md-2">Street</label>
                <div class="col-md-4">
                    <input type="input" class="form-control" id="street">
                </div>
            </div>
            <div class="form-group">
                <label for="city" class="col-md-offset-2 col-md-2">City</label>
                <div class="col-md-4">
                    <input type="input" class="form-control" id="city">
                </div>
            </div>
            <div class="form-group">
                <label for="state" class="col-md-offset-2 col-md-2">state</label>
                <div class="col-md-4">
                    <input type="input" class="form-control" id="state">
                </div>
            </div>
            <div class="form-group">
                <label for="zipcode" class="col-md-offset-2 col-md-2">Zipcode</label>
                <div class="col-md-4">
                    <input type="input" class="form-control" id="zipcode">
                </div>
            </div>
            <div class="form-group">
                <label for="home-phone" class="col-md-offset-2 col-md-2">Home Phone</label>
                <div class="col-md-4">
                    <input type="input" class="form-control" id="home-phone">
                </div>
            </div>
            <div class="form-group">
                <label for="work-phone" class="col-md-offset-2 col-md-2">Work Phone</label>
                <div class="col-md-4">
                    <input type="input" class="form-control" id="work-phone">
                </div>
            </div>
            <div class="form-group">
                <label for="email" class="col-md-offset-2 col-md-2">Email</label>
                <div class="col-md-4">
                    <input type="input" class="form-control" id="email">
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-4 col-md-2">
                    <button type="button" class="btn btn-default" v-on:click="submitForm">Save</button>
                    <router-link class="btn btn-default" :to="{ name: 'customerIndex' }">Cancel</router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                errors: []
            }
        },
        methods: {
            submitForm() {
                // TODO: Add logic to differentiate submitting create vs update
                axios.post('http://localhost:8080/springrestservice/api/customer/', {
                    'name': 'test name'
                })
                    .then(response => {
                        console.log('post response received');
                    })
                    .catch(error => {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            if (error.response.status == 400) {
                                // Validation error
                                console.log('validation error');
                                console.log(error.response.data);
                                this.errors = error.response.data;
                            }
                            else {
                                console.log(error.response.data);
                                console.log(error.response.status);
                                console.log(error.response.headers);
                            }
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser
                            console.error(error.request);
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.error('Error', error.message);
                        }
                        //console.log(error.config);
                    });
            }

        }
    }

</script>

<style>
    label {
        text-align: right;
    }
</style>