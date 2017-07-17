Router.configure({
	layoutTemplate: 'layout',
});
Router.route('main', {path: '/'});
Router.route('friends');
Router.route('searchpage');
Router.route('aboutus');
Router.route('ourstory');
Router.route('oursupporters');
Router.route('chat');
Router.route('chat2');
Router.route('addFW');
Router.route('FW');
Router.route('FWlist');
Router.route('fbprofile');
Router.route('updatefbinfo');
Router.route('fbusers');
Router.route('fbtimeline');
Router.route('fbuser/:_id',
 {name:"fbuser",
  data:function() {
	 const user = Profiles.findOne(this.params._id);
	 return {user};

  }
});
Router.route('halloffame');
Router.route('contact');
Router.route('login');
Router.route('register');
