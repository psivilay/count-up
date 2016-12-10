$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    event.preventDefault();

    var countToNum = parseInt($("#count-to").val());
    var countByNum = parseInt($("#count-by").val());

    var countOutput = []

    for (var index = countByNum; index <= countToNum; index += countByNum) {
      //$("#output #answer").append(index + "...");
      countOutput.push(index)
    }

    $("#output #answer").text(countOutput.join("..."));

  });
});
