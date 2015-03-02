Template.deviceSubmit.events({
  'submit form': function(event) {
    event.preventDefault();

    var device = {
      ip: $(event.target).find('[name=ip]').val(), 
      mac: $(event.target).find('[name=mac]').val(),
      os: $(event.target).find('[name=os]').val(),
      vendor: $(event.target).find('[name=vendor]').val()
    };
  }
});
