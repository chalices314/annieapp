Template.woman.helpers({
  womanlist(){return People.find({},{limit:20,sort:{age:-1}})},
})


Template.woman.events({
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
    p = {name:name,
         age:age,
         birthplace:birthplace,
         occupation:occupation,
         accomplishments:accomplishments,
         createdAt: new Date(),
         createdBy:Meteor.userId()
       };
    console.dir(p);
    People.insert(p);
  },
})
