
Template.FWlist.helpers({
  womanlist(){return Person.find({},{limit:20,sort:{name:-1}})},
})


Template.addFW.events({
  "click #js-submit"(event,instance){
    console.log("hey it worked");
    //if (Meteor.userId()!="Nu9A4gN9AEh3iMixm") return;
    var name = $("#js-name").val();
    var age = $("#js-age").val();
    var birthplace= $("#js-birthplace").val();
    var occupation = $("#js-occupation").val();
    var accomplishments = $("#js-accomplishments").val();
    //var = image $("#js-image").val();

    //var x People.findOne({createdBy:Meteor.userId()})
    //People.remove(x._id);
    w = {name:name,
         age:age,
         birthplace:birthplace,
         occupation:occupation,
         accomplishments:accomplishments,
         createdAt: new Date(),
         createdBy:Meteor.userId()
       };
    console.dir(w);
    Person.insert(w);
    Router.go('FWlist');
  },

})

Template.FW.events({
  "click #js-delete"(event,instance){
    Person.remove(this.w._id);
  },
})
