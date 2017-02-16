var $ = require('jquery');
var Backbone = require('backbone');
var contact = require('../../templates/contact-form.hbs');
var resultsTemplate = require('../../templates/results.hbs');

var ContactForm = Backbone.View.extend({
  tagName: 'form',
  className: 'well',
  id: 'contact-input',
  template: contact,

  events: {
    'submit': 'addContact'
  },

  render:function(){
    this.$el.html(this.template());
    return this;
  },

  addContact: function(event){
    event.preventDefault();

    this.collection.add({
      firstName: $('#first-name').val(),
      lastName: $('#last-name').val(),
      address: $('#address').val(),
      city: $('#city').val(),
      state: $('#state').val(),
      phoneNumber: $('#phone-number').val(),
    })
    console.log(this.collection);
  }

});

var ContactResults = Backbone.View.extend({
className: 'results-box',
initialize: function(){
  this.listenTo(this.collection, 'add', this.renderContactList);
},
render: function(){

return this;
},
renderContactList: function(contact){
  var contactForm = new SingleContact({model: contact});
  this.$el.append(contactForm.render().$el)

}
});

var SingleContact = Backbone.View.extend({
  className: ('results-box'),
  template: resultsTemplate,
  render: function () {
    var contacts = this.model.toJSON();
    this.$el.append(this.template(contacts));
    return this;
  }
});

// var ContactFormView = Backbone.View.extend({
//   className: 'results-name',
//   template: resultsTemplate,
//   events: {
//     'click .clickme': 'markComplete'
//   },
//
//   render: function(){
//     console.log(this.model.toJSON());
//   }

  // initialize: function(){
  //   this.listenTo(this.model)
  // },
// });



module.exports = {
  ContactForm: ContactForm,
  ContactResults: ContactResults
};
