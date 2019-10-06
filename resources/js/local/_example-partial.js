// add a class of 'intro' to the first paragraph
// do this on every page apart from the blog page
// if ( !page('blog') )
// {

//     document.querySelector('.content > p').classList.add('intro')

// }
window.onload = function() {
  var form = document.getElementById("ctaForm");

  let defaultConfig = {
    // class of the parent element where the error/success class is added
    classTo: "form-group",
    errorClass: "text-red-700",
    successClass: "text-green-700",
    // class of the parent element where error text element is appended
    errorTextParent: "form-group",
    // type of element to create for the error text
    errorTextTag: "div",
    // class of the error text element
    errorTextClass: "text-help"
  };

  // create the pristine instance
  var pristine = new Pristine(form, defaultConfig);

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // check if the form is valid
    var valid = pristine.validate(); // returns true or false
  });

  telConfig = {
    onlyCountries: ["au", "nz"],
    separateDialCode: true
  };

  var input = document.querySelector("#phone");
  window.intlTelInput(input, telConfig);
};
