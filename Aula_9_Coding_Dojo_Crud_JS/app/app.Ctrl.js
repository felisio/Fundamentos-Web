;(function(document, window){
'use strict';
 var AppCtrl = (function(){
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
	};

	_public.render = function(){
		var render = [];

		contacts.forEach(function(Obj){
			render.push('<p>' + Obj.name + '</p>'); 
		});
		return render.join(' ');
	};

	_public.init = function(){
		console.log(service);
		//contacts = window.App.Service.getContacts();	
		document.querySelector('#content').innerHTML=_public.render();
		_form.addEventListener('submit', _private.save, false);
	};

	return _public; 	
 })();
window.App.Ctrl=AppCtrl;
window.App.Ctrl.init();
})(document, window);

