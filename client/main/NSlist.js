Template.NSlist.helpers({
  newslist(){return Article.find({},{limit:200,sort:{name:-1}})},
})


Template.addNS.events({
  "click #js-submit"(event,instance){
    console.log("hey it worked");
    //if (Meteor.userId()!="Nu9A4gN9AEh3iMixm") return;
    var title = $("#js-title").val();
    var date = $("#js-date").val();
    var place= $("#js-place").val();
    var articleText = $("#js-articleText").val();
    var url = $("#js-image").val();
    if (!url) url="https://give.uwsp.edu/image/staff/default_member_image.png";
    //var = image $("#js-image").val();

    //var x People.findOne({createdBy:Meteor.userId()})
    //People.remove(x._id);
    n = {title:title,
         date:date,
         place:place,
         articleText:articleText,
         url:url,
         createdAt: new Date(),
         createdBy:Meteor.userId()
       };
    console.dir(n);
    Article.insert(n);
    Router.go('NSlist');
  },

})
Template.NS.events({
  "click #js-delete"(event,instance){
    Article.remove(this.w._id);
  },
})
