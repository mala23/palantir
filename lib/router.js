Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() { return Meteor.subscribe('devices'); }
});

Router.route('/', {name: 'devicesList'});

Router.onBeforeAction('dataNotFound', {only: 'devicesList'});
