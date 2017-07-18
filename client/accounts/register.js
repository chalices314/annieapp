Template.register.events({
  "click #js-submit"(event,instance){
    alert("clicked on register button");
    event.preventDefault();

    var name = instance.$("#js-fullname").val();
    var email = instance.$("#js-reg-email").val();
      console.log("email="+email);
    var ppp = instance.$("#js-reg-psw").val();
    var field = instance.$("#js-field").val();
    var school = instance.$("#js-school").val();
    var gender = instance.$("#js-gender").val();
    console.log("ppp="+ppp);
    var user = {
      email:email,password:ppp,
    }
    var url = "https://give.uwsp.edu/image/staff/default_member_image.png";
    console.log(JSON.stringify(user))
    Accounts.createUser(user,function(error){
      if (error) {
        alert("registration failed "+JSON.stringify(error))
      } else{
        Profiles.insert({name,email,field,school,gender,url,
          owner:Meteor.userId()
        })
      }
    });
    Router.go('main');

  }
})
