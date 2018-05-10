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
                    <button type="submit" class="btn btn-default">Save</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

</script>

<style>
    label {
        text-align: right;
    }
</style>