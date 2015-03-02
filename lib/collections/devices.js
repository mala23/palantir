Devices = new Mongo.Collection('devices');

Meteor.methods({
  deviceInsert: function(deviceAttributes) {
    deviceAttributes = _.extend({
      ip: '',
      mac: '',
      os: '',
      vendor: '',
      connected: new Date()
    }, deviceAttributes);
  Devices.insert(deviceAttributes);
  }
});
