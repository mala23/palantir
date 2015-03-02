Devices = new Mongo.Collection('devices');

Meteor.methods({
  deviceInsert: function(deviceAttributes) {
    check(deviceAttributes, {
      ip: '',
      mac: '',
      os: '',
      vendor: '',
      connected: new Date()
    });
  }
});
