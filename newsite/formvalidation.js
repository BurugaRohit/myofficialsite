<script type="text/javascript">
$(document).ready(function () {

    $('#myform').validate({ // initialize the plugin
        rules: {
            name: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email: true
            },
            mobile: {
                required: true,
                maxlength: 10
            },
            password: {
                required: true
            },
            budget: {
                required: true,
                minlength: 5
            },
            subject: {
                required: true,
                minlength: 5
            },
            message: {
                required: true,
                minlength: 5
            },
        },
        submitHandler: function (form) { // for demo
           alert('valid form submitted'); // for demo
           return false; // for demo
    });

});
</script>
