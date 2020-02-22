exports.list = function(req, res){
    res.status(200);
    res.sendFile('documentation.html', {root:'views/'});
};
