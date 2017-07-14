Meteor.startup(function(){
    console.log("this is working!");
    var a = {
      name:"Cynthia Breazeal",
      birthdate:"1967",
      occupation:"Director of the Personal Robots Group at the MIT Media Laboratory",
      accomplishments:"Pioneer of Social Robotics and Human Robot Interaction"

    };
    Person.insert(a);
    var b = {
      name:"Dr. Marla E. Perez-Davis",
      birthdate:"n/a",
      occupation:"NASA Deputy Director",
      accomplishments:"recipient of NASA Outstanding Leadership Medal"

    };
    Person.insert(b);
    var c = {
      name:"Patricia Bath",
      birthdate:"1942",
      occupation:"Ophthalmologist and Inventor",
      accomplishments:"first African American to complete opthalmology as well as first African American to have medical patent"

    };
    Person.insert(c);
   var d = {
    name:"Limor Fried",
    birthdate:"n/a",
    occupation:"Founder/CEO of Adafruit",
    accomplishments:"Founded Adafuit"

  };
  Person.insert(d);
 var e = {
  name:"Trisha Kothari",
  birthdate:"1994",
  occupation:"Product manager/software engineer at Affirm Inc",
  accomplishments:"Amazing Engineer "
  };
})
