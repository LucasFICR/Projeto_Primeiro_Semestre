$(".dropdown-trigger").dropdown();

$(document).ready(function() {
  $(".modal").modal();
});

$(document).ready(function() {
  $("select").formSelect();
});

$("#textarea1").val("");
M.textareaAutoResize($("#textarea1"));
