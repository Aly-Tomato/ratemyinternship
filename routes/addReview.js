exports.form = function(req,res){
    res.status(200);
    res.sendFile('addReview.html', {root:'views/'});
};

exports.submit = function(req,res){
    res.status(200);
    res.sendFile('addReview.html', {root:'views/'});
};
