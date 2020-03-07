$(document).ready(() => {
    $('#submitButton').click(() => {
        const requestURL = 'api/' + $('#searchBox').val();
        console.log('making ajax request to:', requestURL);
        $.ajax({
            url: requestURL,
            type: 'GET',
            dataType: 'json',
            success: (data) =>{
                console.log('ajax success!', JSON.stringify(data, null, 8));
                $('#response').html(JSON.stringify(data, null, 8));
            }
        });
    })
});

var input = document.getElementById("searchBox");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("submitButton").click();
  }
});