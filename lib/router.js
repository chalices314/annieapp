Router.configure({
	layoutTemplate: 'layout',
});
Router.route('main', {path: '/'});
Router.route('friends');
Router.route('searchpage');
Router.route('aboutus');
Router.route('ourstory');
Router.route('oursupporters');
<<<<<<< HEAD
Router.route('addFW');
Router.route('FW');
=======
Router.route('fbprofile')
Router.route('fbusers')
Router.route('fbtimeline')
Router.route('fbuser/:_id',
{name:"fbuser",
 data: function(){
	 const user = Profiles.findOne(this.params._id);
	 return {user};
 }});
>>>>>>> 7082877f5b79742d3f2e1ebd396bec785e876328
