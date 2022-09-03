$("document").ready(function () {
  $("button").on("click", function () {
    $(this)
      .closest("li")
      .find("img")
      .clone()
      .addClass("zoom")
      .appendTo("header");
    setTimeout(() => {
      $(".zoom").remove();
    }, 1000);
  });
});
