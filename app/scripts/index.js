var $ = require('jquery');
var Backbone = require('backbone');

var models = require('./models/contacts.js');
var view = require('./views/contact-book.js');

var results = require('../templates/results.hbs');

$(function(){

var myContacts = new models.ContactCollection();

var myContactForm = new view.ContactForm({collection: myContacts});
$('.input').html(myContactForm.render().$el);

var myContactResults = new view.ContactResults({collection: myContacts});
$('.results').append(myContactResults.render().$el);






// myContacts.fetch();

});
