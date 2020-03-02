$(document).ready(() => {
    $('#submitButton').click(() => {
        const requestURL = 'all/' + $('#searchBox').val();
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
})