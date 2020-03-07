$(document).ready(() => {
    $('#submitButton').click(() => {
        const requestURL = 'api/' + $('#searchBox').val();
        console.log('making ajax request to:', requestURL);
        $.ajax({
            url: requestURL,
            type: 'GET',
            dataType: 'json',
            success: (data) =>{
                $('#table-body').html(generate_table(data));
            }
        });
    })
});

function generate_table(data){
    var html;
    console.log(data);
    for(var i=0; i < data.length ; ++i){
       html +=
           `<tr>
                <td>
                    <input class="form-check" type="checkbox" id=${data[i].uid} value="${data[i].uid}" name="to_delete"> 
                </td>
                <th scope="row">${data[i].uid}</th>
                <td class="company">${data[i].company}</td>
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
    return html;
}

