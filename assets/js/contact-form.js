jQuery(document).ready(function () {
  jQuery("#contactpage").validate({
    rules: {
      fname: {
        required: true,
      },

      lname: {
        required: false,
      },

      email: {
        required: true,
        email: true,
      },

      phone: {
        required: true,
        number: true,
      },
    },

    errorElement: "span",

    errorPlacement: function (error, element) {
      error.appendTo(element.parent());
    },

    submitHandler: function (form) {
      // CAPTCHA validation
      if (jQuery("#captcha_val").val() != jQuery("#captcha_text").val()) {
        jQuery("#captcha_text").parent("div").find(".error").remove();

        jQuery("#captcha_text")
          .parent("div")
          .append('<span class="error">Captcha is not match</span>');

        return false;
      }

      submitSignupFormNow(jQuery(form));

      return false;
    },
  });

  function submitSignupFormNow(form) {
    var formData = new FormData(form[0]);

    // IMPORTANT:
    // Replace this with your Google Apps Script Web App URL
    var googleScriptURL =
      "https://script.google.com/macros/s/AKfycbxgFtB4bJHlV1ei_KzjPBVp0Qpm64sdoKrxalFsmdW61PCsMVcNdelqOaRT5jAdma4J/exec";

    // Disable button while submitting
    jQuery("#submit").prop("disabled", true).text("Submitting...");

    fetch(googleScriptURL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(function () {
        // Since no-cors doesn't allow us to read
        // Google's response, assume submission succeeded.

        jQuery("#form_result").html(
          '<span class="form-success alert alert-success d-block">' +
            "Thank you! Your message has been submitted successfully." +
            "</span>",
        );

        jQuery("#form_result").show();

        // Reset form
        form[0].reset();

        // Reset button
        jQuery("#submit").prop("disabled", false).text("Submit");
      })
      .catch(function (error) {
        console.error(error);

        jQuery("#form_result").html(
          '<span class="form-error alert alert-danger d-block">' +
            "Something went wrong. Please try again." +
            "</span>",
        );

        jQuery("#form_result").show();

        jQuery("#submit").prop("disabled", false).text("Submit");
      });
  }
});
