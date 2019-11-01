exports.handler = function(event, context, callback) {
    // new js concurrency  180 con
    callback(null, {"message": "Successfully executed"});
}