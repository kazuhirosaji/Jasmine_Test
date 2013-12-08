function Doorkeeper() {
	this.url = "http://api.doorkeeper.jp/events?";
	this.getevents = function() {
		$.get(this.url, function(res) {
			console.log(res);
			$.each(res, function(key, val) {
			});
		});
	};
};




