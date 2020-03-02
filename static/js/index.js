$(document).ready(() => {
    $('#submitButton').click(() => {
        const requestURL = 'test/' + $('#searchBox').val();
        console.log('making ajax request to:', requestURL);
        $.ajax({
            url: requestURL,
            type: 'GET',
            dataType: 'json',
            success: (data) =>{
                console.log('ajax success!', JSON.stringify(data, null, 8));
                // for (var i = 0; i < data.length; ++i){
                //     currentData = data[i];
                //     console.log(
                //         '{' + '\n' + 
                //         '       company: ' + JSON.stringify(currentData.company) + "\n" +
                //         '       city: ' + JSON.stringify(currentData.city) + "\n" +
                //         '       position: ' + JSON.stringify(currentData.position) + "\n" +
                //         '       start: ' + JSON.stringify(currentData.start) + "\n" +
                //         '       end: ' + JSON.stringify(currentData.end) + "\n" +
                //         '       intern_type: ' + JSON.stringify(currentData.intern_type) + "\n" +
                //         '       pay_type: ' + JSON.stringify(currentData.pay_type) + "\n" +
                //         '       pay_amount: ' + JSON.stringify(currentData.pay_amount) + "\n" +
                //         '       work_desc: ' + JSON.stringify(currentData.work_desc) + "\n" +
                //         '       overall_rating: ' + JSON.stringify(currentData.overall_rating) + "\n" +
                //         '       leadership_rating: ' + JSON.stringify(currentData.leadership_rating) + "\n" +
                //         '       communication_rating: ' + JSON.stringify(currentData.communication_rating) + "\n" +
                //         '       flexibility_rating: ' + JSON.stringify(currentData.flexibility_rating) + "\n" +
                //         '       culture_rating: ' + JSON.stringify(currentData.culture_rating) + "\n" +
                //         '       internship_recommend: ' + JSON.stringify(currentData.internship_recommend) + "\n" +
                //         '       company_recommend: ' + JSON.stringify(currentData.company_recommend) + "\n" +
                //         '       ratings_desc: ' + JSON.stringify(currentData.ratings_desc) + "\n" +
                //         '}'); 
                // }
                $('#response').html(JSON.stringify(data, null, 8));
                // $('#response').html(
                //     '{' + '\n' + 
                //     '       company: ' + JSON.stringify(data.company) + "\n" +
                //     '       city: ' + JSON.stringify(data.city) + "\n" +
                //     '       position: ' + JSON.stringify(data.position) + "\n" +
                //     '       start: ' + JSON.stringify(data.start) + "\n" +
                //     '       end: ' + JSON.stringify(data.end) + "\n" +
                //     '       intern_type: ' + JSON.stringify(data.intern_type) + "\n" +
                //     '       pay_type: ' + JSON.stringify(data.pay_type) + "\n" +
                //     '       pay_amount: ' + JSON.stringify(data.pay_amount) + "\n" +
                //     '       work_desc: ' + JSON.stringify(data.work_desc) + "\n" +
                //     '       overall_rating: ' + JSON.stringify(data.overall_rating) + "\n" +
                //     '       leadership_rating: ' + JSON.stringify(data.leadership_rating) + "\n" +
                //     '       communication_rating: ' + JSON.stringify(data.communication_rating) + "\n" +
                //     '       flexibility_rating: ' + JSON.stringify(data.flexibility_rating) + "\n" +
                //     '       culture_rating: ' + JSON.stringify(data.culture_rating) + "\n" +
                //     '       internship_recommend: ' + JSON.stringify(data.internship_recommend) + "\n" +
                //     '       company_recommend: ' + JSON.stringify(data.company_recommend) + "\n" +
                //     '       ratings_desc: ' + JSON.stringify(data.ratings_desc) + "\n" +
                //     '}');
            }
        });
    })
})