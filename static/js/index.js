$(document).ready(() => {
  $("#submitButton").click(() => {
    const requestURL = "api/" + $("#searchBox").val();
    $.ajax({
      url: requestURL,
      type: "GET",
      dataType: "json",
      success: data => {
        console.log("ajax success!", JSON.stringify(data, null, 8));
        $("#response").html(JSON.stringify(data, null, 8));
      },
      error: function(err) {
        $("#response").html(
          "Could not find any resource that matches the request. Please read the documentation."
        );
      }
    });
  });
  $("#allExample").click(() => {
    const requestURL = "api/all";
    $.ajax({
      url: requestURL,
      type: "GET",
      dataType: "json",
      success: data => {
        console.log("ajax success!", JSON.stringify(data, null, 8));
        $("#response").html(JSON.stringify(data, null, 8));
      },
      error: function(err) {
        $("#response").html(
          "Could not find any resource that matches the request. Please read the documentation."
        );
      }
    });
  });
  $("#locationExample").click(() => {
    const requestURL = "api/location/San%20Diego,%20CA";
    $.ajax({
      url: requestURL,
      type: "GET",
      dataType: "json",
      success: data => {
        console.log("ajax success!", JSON.stringify(data, null, 8));
        $("#response").html(JSON.stringify(data, null, 8));
      },
      error: function(err) {
        $("#response").html(
          "Could not find any resource that matches the request. Please read the documentation."
        );
      }
    });
  });
  $("#paytypeAnnualExample").click(() => {
    const requestURL = "api/pay_type/Annual";
    $.ajax({
      url: requestURL,
      type: "GET",
      dataType: "json",
      success: data => {
        console.log("ajax success!", JSON.stringify(data, null, 8));
        $("#response").html(JSON.stringify(data, null, 8));
      },
      error: function(err) {
        $("#response").html(
          "Could not find any resource that matches the request. Please read the documentation."
        );
      }
    });
  });
});

var input = document.getElementById("searchBox");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submitButton").click();
  }
});
