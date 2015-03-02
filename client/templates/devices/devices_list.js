Template.devicesList.helpers({
  devices: function() {
    return Devices.find({}, {
      sort: {connected: -1}
    });
  }
});
