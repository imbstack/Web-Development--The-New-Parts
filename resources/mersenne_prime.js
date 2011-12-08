importScripts('biginteger.js');

onmessage = function(event) {
    if (typeof event.data === "number") {
        postMessage(LLT(event.data));
    }
}
var LLT = function(p) {
    var s = BigInteger(4);
    var M = BigInteger(2).pow(p).subtract(1);
    for (var i=0; i < (p-2); i++) {
        s = s.square().subtract(2).remainder(M);
    }
    if (!s.compare(0)) {
        /* Found a prime */
        return true;
    } else {                 
        return false;
    }                       
 }
