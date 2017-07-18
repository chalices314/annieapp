Meteor.startup(function(){
//if (Person.find().count()!==0) return;
Person.remove({});
    console.log("this is working!");
    var a = {
      name:"Cynthia Breazeal",
      birthdate:"1967",
      occupation:"Director of the Personal Robots Group at the MIT Media Laboratory",
      accomplishments:"Pioneer of Social Robotics and Human Robot Interaction",
      url: "https://static1.squarespace.com/static/5206a880e4b00fb51870dbf0/t/54500abae4b0d2e64620a8bb/1414531770743/CynthiaBreazeal.jpgc"
    };
    Person.insert(a);
    var b = {
      name:"Dr. Marla E. Perez-Davis",
      birthdate:"n/a",
      occupation:"NASA Deputy Director",
      accomplishments:"recipient of NASA Outstanding Leadership Medal",
      url: "https://www.nasa.gov/sites/default/files/thumbnails/image/perez-davis_hi-res.jpg"

    };
    Person.insert(b);
    var c = {
      name:"Patricia Bath",
      birthdate:"1942",
      occupation:"Ophthalmologist and Inventor",
      accomplishments:"first African American to complete opthalmology as well as first African American to have medical patent",
      url: "http://teacher.scholastic.com/activities/bhistory/inventors/images/bath.jpg"
    };
    Person.insert(c);
   var d = {
    name:"Limor Fried",
    birthdate:"n/a",
    occupation:"Founder/CEO of Adafruit",
    accomplishments:"Founded Adafuit",
    url:"http://d2lupdnmi5p5au.cloudfront.net/i__srcd1d6ce6bdcaeabe0cbfe13d02a4c1feb_pare6a224e45bce1ee797181303b75776f0.png"

  };
  Person.insert(d);
 var e = {
  name:"Trisha Kothari",
  birthdate:"1994",
  occupation:"Product manager/software engineer at Affirm Inc",
  accomplishments:"Amazing Engineer "
  };
})
