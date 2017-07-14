Meteor.startup(function(){
  console.log("this is working!");
  if (Person.find().count()==0) {
  var a = {
    name:"Cynthia Breazeal",
    age:"1967",
    occupation:"CS Professor",

  };
  Person.insert(a);

  var a = {
    name:"Mia Lipsitz",
    age:"1997",
    occupation:"CS Professor",

  };
  Person.insert(a);
}


})
