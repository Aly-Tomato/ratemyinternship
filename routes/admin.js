exports.auth = function(req, res){
    res.status(200);
    res.sendFile('admin.html', {root:'views/'});
};
