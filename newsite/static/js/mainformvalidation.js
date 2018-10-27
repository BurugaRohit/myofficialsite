
  $('#first_form').submit(function(e) {
    e.preventDefault();
    var user_name = $('#user_name').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var budget = $('#budget').val();
    var mobilenumber = $('#mobilenumber').val();
    var subject = $('#subject').val();
    var message = $('#message').val();

    $(".error").remove();

    if (user_name.length < 1) {
      $('#user_name').after('<span class="error">This field is required</span>');
    }
    if (mobilenumber.length < 1) {
      $('#mobilenumber').after('<span class="error">This field is required</span>');
    }
    if (budget.length < 1) {
      $('#budget').after('<span class="error">This field is required</span>');
    }
    if (subject.length < 1) {
      $('#subject').after('<span class="error">This field is required</span>');
    }
    if (message.length < 1) {
      $('#message').after('<span class="error">This field is required</span>');
    }
    if (email.length < 1) {
      $('#email').after('<span class="error">This field is required</span>');
    } else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').after('<span class="error">Enter a valid email</span>');
      }
    }
    if (password.length < 8) {
      $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
    }
  });

});
