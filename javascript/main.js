// Config
// Selectors
// store selectors for reference so we only call them once
var $body = document.querySelector("body");
var $header = document.getElementById("#header");
var $nav = document.getElementById("#nav");
var $footer = document.getElementById("#footer");
// Helpers
var /**
   * @description Test if the body id is something
   * @param  		{string}
   * @return 		{bool}
   *
   */
  page = function page(name) {
    if (!name) {
      return $body.getAttribute("id");
    }

    return $body.getAttribute("id") == name;
  };
