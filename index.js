const os = require('os');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

var address = require('address');

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

if(os.hostname()) {
    var ip = address.ip();
	var hostname = os.hostname();
	console.log("Hostname for the operating"
		+ " system is " + String(hostname));
}

app.get('/hi', (req, res) => {
    var ip = address.ip();
    var hostname = os.hostname();
    res.send(hostname + " Ip is " + ip);
    });

var ip = address.ip();   // '192.168.0.2'
address.ipv6(); // 'fe80::7aca:39ff:feb0:e67d'
address.mac(function (err, addr) {
console.log(addr); // '78:ca:39:b0:e6:7d'
console.log(ip)
    });
     


    app.listen(port, () => {
        console.log('Server started on port '+port);
        });