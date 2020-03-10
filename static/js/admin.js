// Gets the data in the searchbox and returns the dynamic routed
// JSON object that gets produced by the server
$(document).ready(() => {
    $('#submitButton').click(() => {
        const requestURL = 'api/' + $('#searchBox').val();
        console.log('making ajax request to:', requestURL);
        $.ajax({
            url: requestURL,
            type: 'GET',
            dataType: 'json',
            // enters the data into the table
            success: (data) =>{
                $('#table-body').html(generate_table(data));
            }
        });
    })
});

// creates the table that will display all the data
function generate_table(data){
    var html;
    console.log(data);
    // creates the table as HTML to be added into the admin.html by AJAX
    for(var i=0; i < data.length ; ++i){
       html +=
           `<tr>
                <td>
                    <input class="form-check" type="checkbox" id=${data[i].uid} value="${data[i].uid}" name="to_delete"> 
                </td>
                <th scope="row">${data[i].uid}</th>
                <td>${data[i].company}</td>
                <td>${data[i].location}</td>
                <td>${data[i].position}</td>
                <td>${data[i].start}</td>
                <td>${data[i].end}</td>
                <td>${data[i].intern_type}</td>
                <td>${data[i].pay_type}</td>
                <td>${data[i].pay_amount}</td>
                <td>${data[i].work_desc}</td>
            </div>
            </tr>`;


    }
    // returns the code to be implemented in the designated area
    return html;
}

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
