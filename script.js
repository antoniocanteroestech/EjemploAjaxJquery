$(document).ready(function() {
  $("#retrieve-resources").click(function() {
    var displayResources = $("#display-resources");
    
    displayResources.text("Loading data from JSON source...");

    $.ajax({
      type: "GET",
      //url: "https://api.myjson.com/bins/fjxua", // Using our resources.json file to serve results
      url: "./resources.json",
      success: function(result) {
        console.log(result);
        var output =
          "<table><thead><tr><th>Name</th><th>Provider</th><th>URL</th></thead><tbody>";
        for (var i in result) {
          output +=
            "<tr><td>" +
            result[i].name +
            "</td><td>" +
            result[i].provider +
            "</td><td>" +
            result[i].url +
            "</td></tr>";
        }
        output += "</tbody></table>";

        displayResources.html(output);
        $("table").addClass("table");
      }
    });
  });
});