var Backbone = require('backbone');

var ContactItem = Backbone.Model.extend({
  defaults:{
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    phoneNumber: ''
  }
});


var ContactCollection = Backbone.Collection.extend({
  model: ContactItem
});

module.exports = {
  ContactItem: ContactItem,
  ContactCollection: ContactCollection
}
