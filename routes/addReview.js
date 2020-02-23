exports.add = function(req,res){
    res.status(200);
    res.sendFile('addReview.html', {root:'views/'});
};
