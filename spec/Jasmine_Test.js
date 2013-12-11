describe("Doorkeeper", function() {
  var doorkeeper;

  beforeEach(function() {
	var url = "http://api.doorkeeper.jp/events?callback=?"
    doorkeeper = new Doorkeeper(url);
	spyOn(Doorkeeper.prototype, "eventCallback");
  });


  it("called eventCallback function" , function() {
	doorkeeper.getevents();

	waitsFor(function () {
		return doorkeeper.eventCallback.calls.length > 0;
	});

	runs(function () {
		expect(doorkeeper.eventCallback.calls.length).toBeGreaterThan(1);
	});
  });

  it("change url", function() {
		var url = "http://api.doorkeeper.jp/since=2013-12-10T00:00:00+09:00&until=2013-12-18T23:59:59+09:00?events?callback=?";
		expect(doorkeeper.setURL(url)).toEqual(url);
  });

  it("called eventCallback query function" , function() {

	var url = "http://api.doorkeeper.jp/events?callback=?&q=javascript";
	doorkeeper.setURL(url);
	doorkeeper.getevents();

	waitsFor(function () {
		return doorkeeper.eventCallback.calls.length > 0;
	});

	runs(function () {
		expect(doorkeeper.eventCallback.calls.length).toBeGreaterThan(1);
	});
  });


});