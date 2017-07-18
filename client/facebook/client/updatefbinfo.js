Template.updatefbinfo.helpers({
  user(){
    z = Profiles.findOne({owner:Meteor.userId()});
    //console.dir(z);
    return z;
  }
})

Template.updatefbinfo.events({
  "click #js-submit"(event,instance){
    var name = instance.$("#js-name").val();
    var gender = instance.$("#gender").val();
    console.log("gender is "+gender);
    var field = instance.$("#field").val();
    var url = instance.$("#js-url").val();
    var bio = instance.$("#js-bio").val();
    var z = Profiles.findOne({owner:Meteor.userId()});
    console.dir(['fields',name,gender,field,url,bio])
    z.name=name;
    z.gender=gender;
    z.field =field;
    z.url=url;
    z.bio=bio;
    console.log("here is z")
    console.dir(z);
    Profiles.update(z._id,z);
    Router.go("main");
  }
})
