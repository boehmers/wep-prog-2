function writeFile(filename, content) {
	var request = new XMLHttpRequest();
	request.open("GET", "../php/savefile.php?filename=../../data/" + filename + "&content=" + content, false);
    request.send();
	console.log("Write done!");
}

function writeFileAsync(filename, content, onDone) {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
			if (request.readyState == XMLHttpRequest.DONE) {
				onDone();
			}
		};
	request.open("GET", "../php/savefile.php?filename=../../data/" + filename + "&content=" + content, true);
    request.send();
}

function readFile(filename) {
	var request = new XMLHttpRequest();
	request.open("GET", "../php/readfile.php?filename=../../data/" + filename, false);
    request.send();
	console.log("Read done!");
	console.log(request.responseText);
	return request.responseText;
}

function readFileAsync(filename, onDone) {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
			if (request.readyState == XMLHttpRequest.DONE) {
				onDone(request.responseText);
			}
		};
	request.open("GET", "../php/readfile.php?filename=../../data/" + filename, true);
    request.send();
}

function TESTOnDoneRead(text) {
	console.log("Aysnc Read done!");
	console.log(text);
}

function TESTOnDoneWrite() {
	console.log("Async Write done!");
}