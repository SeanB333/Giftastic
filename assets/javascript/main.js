$(document).ready(function(){

    var gitButtons = ["A", "B", "C", "D"];
    function makeBtns(){
      $("#btnDisplay").empty();
      for(i=0;i<gitButtons.length;i++){
        var btn = $("<button>");
        btn.addClass("newBtn");
        btn.attr("data-name", gitButtons[i]);
        btn.text(gitButtons[i]);
        $("#btnDisplay").append(btn);
      }
    }

    $("#btnAdd").on("click", function(event) {
      event.preventDefault();
      var btn = $("#btnDisplay").val().trim();
      gitButtons.push(btn);
      makeBtns();
    });
  makeBtns();
    
    
});