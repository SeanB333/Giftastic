$(document).ready(function () {

  var gitButtons = ["A", "B", "C", "D"];

  function getGiphyInfo() {
    var search = $(this).attr("data-name");
    var queryURL = `https://api.giphy.com/v1/gifs/random?api_key=8qTEA6lp3g19Ye08Lcr7r9vanv9kwtLH&tag=${search}&limit=10`;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
    });
  }


  function makeBtns() {
    $("#btnDisplay").empty();
    for (i = 0; i < gitButtons.length; i++) {
      var btn = $("<button>");
      btn.addClass("newBtn");
      btn.attr("data-name", gitButtons[i]);
      btn.text(gitButtons[i]);
      $("#btnDisplay").append(btn);
    }
  }

  $("#addBtn").on("click", function (event) {
    event.preventDefault();
    var btn = $("#btnInput").val().trim();
    gitButtons.push(btn);
    makeBtns();
  });

  $(document).on("click", ".newBtn", getGiphyInfo);
  makeBtns();


});