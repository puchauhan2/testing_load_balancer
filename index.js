const os = require('os');
if(os.hostname()) {
	var hostname = os.hostname();
	console.log("Hostname for the operating"
		+ " system is " + String(hostname));
}
