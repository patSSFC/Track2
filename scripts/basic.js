$(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    dots: true,
    autoplay: true,
    center: true,
    autoplayTimeout: 3000,
    autoWidth: true,
    autoHeight: true,
    }
  );
  $('.hamburger').on ('click', function() {
    $('.res').slideToggle();
  });
  $('#newsletter-signup').on('click', function() {

    // clear errors
    $("input").removeClass("error");
    $("#errors").hide();

    // get first name, last name, email
    // what am I doing if something is empty

    var input_error = false;

    var first_name = $("#first-name").val().trim();
    var last_name = $("#last-name").val().trim();
    var email = $("#email").val().trim();

    if (first_name.length == 0) {
      input_error = true;
      $("#first-name").addClass("error");
    }
    if (last_name.length == 0) {
      input_error = true;
      $("#last-name").addClass("error");
    }
    if (email.length == 0) {
      input_error = true;
      $("#email").addClass("error");
    }

    if (input_error) {
      $("#errors").text("All inputs are required").show();
      return;
    }

    var invalid_email = false;
    // check email is valid

    if (invalid_email) {
      $("#errors").text("Invalid email").show();
      return;
    }

    //debugger;

    // return;

    analytics.identify({
      firstName: first_name,
      lastName: last_name,
      email: email,
    }, function() {
      // success here
      $("#confirmation-modal").show();
        return first_name;
        console.log("Thanks for signing up, " + first_name);
    });

    return;

  });

});
