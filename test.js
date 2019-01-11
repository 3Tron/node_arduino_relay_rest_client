const ArduinoRelay = require('./arduinorelay');
function cb(d) {
    //console.log(d);
    let e = JSON.parse(d);
    //console.log(e);
    let f = JSON.stringify(e, null, 3);
    console.log(f);

}
let ar = new ArduinoRelay('http://192.168.0.200', 1, cb)
ar.info();