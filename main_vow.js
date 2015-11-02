var vow = require('vow');

function doSomethingAsync() {
    var deferred = vow.defer();

    // now you can resolve, reject, notify corresponging promise within `deferred`
    // e.g. `defer.resolve('ok');`

    return deferred.promise(); // and return corresponding promise to subscribe to reactions
}

doSomethingAsync().then(
    function() {}, // onFulfilled reaction
    function() {}, // onRejected reaction
    function() {}  // onNotified reaction
);