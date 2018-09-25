$(document).ready(function () {

  var gitButtons = ["snowboards", "skateboards", "bikes", "skydive"];

  function getGiphyInfo() {
    var search = $(this).attr("data-name");
    var queryURL = `https://api.giphy.com/v1/gifs/search?q=
    ${search}&api_key=dc6zaTOxFJmzC&limit=10`;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      var gifPull = response.data;
      for (var i = 0; i < gifPull.length; i++) {
        if (gifPull[i].rating !== "r" && gifPull[i].rating !== "pg-13") {
          var gifDiv = $("<div>");
          gifDiv.addClass("float-left m-2 rounded");
          var rating = gifPull[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          p.addClass("text-light");
          var personImage = $("<img>");
          personImage.attr("src", gifPull[i].images.fixed_height.url);
          personImage.addClass("rounded")
          gifDiv.append(p);
          gifDiv.append(personImage);
          $("#gifsPull").prepend(gifDiv);
        }
      }
    });
  }


  function makeBtns() {
    $("#btnDisplay").empty();
    for (i = 0; i < gitButtons.length; i++) {
      var btn = $("<button>");
      btn.addClass("newBtn");
      btn.addClass("btn btn-dark m-2")
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