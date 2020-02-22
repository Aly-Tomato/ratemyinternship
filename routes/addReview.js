exports.add = function(req,res){
    res.status(200);
    res.sendFile('contribute.html', {root:'views/'});
};
