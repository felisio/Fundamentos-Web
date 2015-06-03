;(function(document, window){
'use strict';
 var App = (function(){
	var _public = {};
	var _private = {};
	var _form = document.querySelector("#FormContato");
	var Contact = {};
	var contacts = [];
	var service = window.Service;

	_private.save=function(e){
		e.preventDefault();
		Contact._id = this._id.value;
		Contact.name = this.name.value;
		Contact.email = this.email.value;
		window.Service.setContact(Contact);
		_public.init();
		Contact = {};
		_private.clear();
	};

	_private.clear = function(){
		_form._id.value = '';
		_form.name.value = '';
		_form.email.value = '';
	};

	_public.render = function(){
		var render = [];

		contacts.forEach(function(Obj){
			render.push('<p>' + Obj.name + '</p>'); 
		});
		return render.join(' ');
	};

	_public.init = function(){
		contacts = service.getContacts();	
		document.querySelector('#content').innerHTML=_public.render();
		_form.addEventListener('submit', _private.save, false);
	};

	return _public; 	
 })();
window.App=App;
App.init();
})(document, window);

