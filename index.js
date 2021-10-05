const os = require('os');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

if(os.hostname()) {
	var hostname = os.hostname();
	console.log("Hostname for the operating"
		+ " system is " + String(hostname));
}

app.get('/hi', (req, res) => {
    
    var hostname = os.hostname();
    res.send(hostname);
    });

    app.listen(port, () => {
        console.log('Server started on port '+port);
        });