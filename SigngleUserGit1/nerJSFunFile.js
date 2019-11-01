exports.handler = function(event, context, callback) {
    // new js concurrency 
    callback(null, {"message": "Successfully executed"});
}