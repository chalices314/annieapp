Template.login.events({
  "click #js-submit"(event, instance){
    event.preventDefault();
    console.log("clicked on login button");
    var email=instance.$("#js-email").val();
    var password=instance.$("#js-psw").val();
    console.log(email+" "+password);
    Meteor.loginWithPassword(email,password,
    function(error){
      if(error){
        alert("Login failed "+JSON.stringify(error));
      }
    });
    Router.go('main');
  }
})
