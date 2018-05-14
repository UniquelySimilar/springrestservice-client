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
                    <input type="input" class="form-control" id="name" v-model="customer.name">
                </div>
                <div class="col-md-4 error-msg">
                    <span>*&nbsp;</span>
                    <span>{{ getValidationError('name') }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="street" class="col-md-offset-2 col-md-2">Street</label>
                <div class="col-md-4">
                    <input type="input" class="form-control" id="street" v-model="customer.street">
                </div>
                <div class="col-md-4 error-msg">
                    <span>*&nbsp;</span>
                    <span>{{ getValidationError('street') }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="city" class="col-md-offset-2 col-md-2">City</label>
                <div class="col-md-4">
                    <input type="input" class="form-control" id="city" v-model="customer.city">
                </div>
                <div class="col-md-4 error-msg">
                    <span>*&nbsp;</span>
                    <span>{{ getValidationError('city') }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="state" class="col-md-offset-2 col-md-2">state</label>
                <div class="col-md-4">
                    <input type="input" class="form-control" id="state" v-model="customer.state">
                </div>
                <div class="col-md-4 error-msg">
                    <span>*&nbsp;</span>
                    <span>{{ getValidationError('state') }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="zipcode" class="col-md-offset-2 col-md-2">Zipcode</label>
                <div class="col-md-4">
                    <input type="input" class="form-control" id="zipcode" v-model="customer.zipcode">
                </div>
                <div class="col-md-4 error-msg">
                    <span>*&nbsp;</span>
                    <span>{{ getValidationError('zipcode') }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="home-phone" class="col-md-offset-2 col-md-2">Home Phone</label>
                <div class="col-md-4">
                    <input type="input" class="form-control" id="home-phone" v-model="customer.homePhone">
                </div>
                <div class="col-md-4 error-msg">
                    <span>*&nbsp;</span>
                    <span>{{ getValidationError('homePhone') }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="work-phone" class="col-md-offset-2 col-md-2">Work Phone</label>
                <div class="col-md-4">
                    <input type="input" class="form-control" id="work-phone" v-model="customer.workPhone">
                </div>
            </div>
            <div class="form-group">
                <label for="email" class="col-md-offset-2 col-md-2">Email</label>
                <div class="col-md-4">
                    <input type="input" class="form-control" id="email" v-model="customer.email">
                </div>
                <div class="col-md-4 error-msg">
                    <span>*&nbsp;</span>
                    <span>{{ getValidationError('email') }}</span>
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
                customer: {
                    name: '',
                    street: '',
                    city: '',
                    state: '',
                    zipcode: '',
                    homePhone: '',
                    workPhone: '',
                    email: ''
                },
                validationErrors: []
            }
        },
        methods: {
            getValidationError: function (fieldName) {
                var returnValue;

                var foundElement = this.validationErrors.find(function (element) {
                    return element.field === fieldName;
                });

                if (foundElement !== undefined) {
                    returnValue = foundElement.message;
                }

                return returnValue;
            },
            submitForm() {
                // TODO: Add logic to differentiate submitting create vs update
                axios.post('http://localhost:8080/springrestservice/api/customer/', JSON.stringify(this.customer))
                    .then(response => {
                        // Redirect back to Index view
                        this.$router.push({ name: 'customerIndex'});
                    })
                    .catch(error => {
                        if (error.response) {
                            // The request was made and the server responded with a status code that falls out of the range of 2xx
                            if (error.response.status == 400) {
                                // Validation error
                                //console.log('validation error');
                                this.validationErrors = error.response.data;
                            }
                            else {
                                console.log(error.response.status);
                            }
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser
                            console.error(error.request);
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.error('Error', error.message);
                        }
                    });
            }

        }
    }

</script>

<style scoped>
    label {
        text-align: right;
    }

    .error-msg {
        color: red;
    }
</style>