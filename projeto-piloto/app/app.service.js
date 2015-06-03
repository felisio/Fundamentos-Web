;(function(document, window){
'use strict';
 var Service = (function(){
	var _public = {};
	var _private = {};
	var contacts = [{_id:1,name:'jjabrao',email:'jjabrao@deus.com'}];

	_private.getKey = function(){
		return Math.floor(Math.random() * (1 + 1000));
	};

	_public.setContact = function(Contact) {
		if (Contact._id) {
			return _private.updateContact(Contact);
		} else {
			return _private.saveContact(Contact);
		}
	};

	_public.getContacts = function() {
		return contacts;
	};


	_private.saveContact = function(Contact) {
		Contact._id = _private.getKey(); 
		contacts.push(Contact);
		console.log('Salvo: ',contacts);
		Contact = {};
	};


	_private.updateContact = function(Contact) {
		console.log('Update: ',Contact);
	};

	_public.getContact = function(id) {};

	_public.deleteCOntact = function(id) {};

	_public.init = function(){
		//alert("Hello Service");	
	};

	return _public; 	
 })();
window.Service=Service;
Service.init();
})(document, window);
