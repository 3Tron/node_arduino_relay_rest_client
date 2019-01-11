
const request = require('request');
//const querystring = require('querystring');

class ArduinoRelay {
    constructor(hostRestRoot, relayId = 1, resultCallback = console.log) {
        this.relayId = relayId;
        this.relayRestRoot = hostRestRoot;
        this.resultCallback = resultCallback;
    }

    info() {
        let url = `${this.relayRestRoot}/relay/${this.relayId}/info`;
        request(url, {},
            (err, res, body) => {
                //var result = require('querystring').parse(body)
                this.resultCallback(body);
            });
    }

    toggle() {
        let url = `${this.relayRestRoot}/relay/${this.relayId}/toggle`;
        request(url, {}, this.resultCallback);

    }

    low() {
        let url = `${this.relayRestRoot}/relay/${this.relayId}/low`;
        request(url, {}, this.resultCallback);
    }

    high() {
        let url = `${this.relayRestRoot}/relay/${this.relayId}/high`;
        request(url, {}, this.resultCallback);

    }
}
module.exports = ArduinoRelay;