describe("Doorkeeper", function() {
  var doorkeeper;

  beforeEach(function() {
    doorkeeper = new Doorkeeper();
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


});