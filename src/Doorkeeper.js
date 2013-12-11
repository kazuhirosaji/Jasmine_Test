function Doorkeeper(url) {
	this.url = url;
};

Doorkeeper.prototype.setURL = function(url) {
	this.url = url;
	console.log(this.url);
	return this.url;
};

Doorkeeper.prototype.getevents = function() {
	$.getJSON(this.url, function(res) {
		console.log(res);
		$.each(res, function(key, val) {
			console.log(val.event.title);
//			console.log(val.event.description);
			Doorkeeper.prototype.eventCallback(val);
		});
	});
};

Doorkeeper.prototype.setQuery = function(query) {
	this.url = this.url + "&q="+ query;
	console.log(this.url);
	return this.url;
};

Doorkeeper.prototype.eventCallback = function(val) {
};



