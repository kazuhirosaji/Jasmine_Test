function Doorkeeper() {
	this.url = "http://api.doorkeeper.jp/events?callback=?";
};

Doorkeeper.prototype.getevents = function() {
	$.getJSON(this.url, function(res) {
		console.log(res);
		$.each(res, function(key, val) {
			console.log(val.event.title);
			console.log(val.event.description);
			Doorkeeper.prototype.eventCallback(val);
		});
	});
};

Doorkeeper.prototype.eventCallback = function(val) {
};



