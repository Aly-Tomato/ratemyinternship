// Fills textarea with data taken from the server
$(document).ready(() => {
  // when a user clicks the search button
  $("#submitButton").click(() => {
    // Get the data in the search box
    const requestURL = "api/" + $("#searchBox").val();
    $.ajax({
      // creates the route and gets the data inside that route
      url: requestURL,
      type: "GET",
      dataType: "json",
      success: data => {
        // logs the data into the text area
        console.log("ajax success!", JSON.stringify(data, null, 8));
        $("#response").html(JSON.stringify(data, null, 8));
      },
      error: function(err) {
        // outputs an error into the textarea
        $("#response").html(
          "Could not find any resource that matches the request. Please read the documentation."
        );
      }
    });
  });
  // User clicks the /all example
  $("#allExample").click(() => {
    // creates the api/all URL to route to
    const requestURL = "api/all";
    $.ajax({
      url: requestURL,
      type: "GET",
      dataType: "json",
      success: data => {
        // Output the JSON file into the text area
        console.log("ajax success!", JSON.stringify(data, null, 8));
        $("#response").html(JSON.stringify(data, null, 8));
      },
      error: function(err) {
        // error handling and logging it into the text area
        $("#response").html(
          "Could not find any resource that matches the request. Please read the documentation."
        );
      }
    });
  });
  // location/portland,OR example clicked
  $("#locationExample").click(() => {
    // Make a URL request to api/location/Portland,OR
    const requestURL = "api/location/Portland,%20OR";
    $.ajax({
      url: requestURL,
      type: "GET",
      dataType: "json",
      success: data => {
        // Output data into the textarea
        console.log("ajax success!", JSON.stringify(data, null, 8));
        $("#response").html(JSON.stringify(data, null, 8));
      },
      error: function(err) {
        // Action failed, outputting error into the text area
        $("#response").html(
          "Could not find any resource that matches the request. Please read the documentation."
        );
      }
    });
  });
  // paytype annual example clicked
  $("#paytypeAnnualExample").click(() => {
    // paytype/annual URL request change
    const requestURL = "api/pay_type/Annual";
    $.ajax({
      url: requestURL,
      type: "GET",
      dataType: "json",
      success: data => {
        // output data into the textarea
        console.log("ajax success!", JSON.stringify(data, null, 8));
        $("#response").html(JSON.stringify(data, null, 8));
      },
      error: function(err) {
        // output error to the textarea
        $("#response").html(
          "Could not find any resource that matches the request. Please read the documentation."
        );
      }
    });
  });
});

// event listener for the search box
// checks if a user hit the enter key in the search box to 
// trigger the search button being clicked
var input = document.getElementById("searchBox");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submitButton").click();
  }
});
