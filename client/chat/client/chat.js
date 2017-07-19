Template.chat.helpers({
  chatlines: function(){
    // return the last five chats
    // sorted by when they were created (most recent, first)
    return Chats.find({},
                      {limit:10,
                        sort: {createdAt: -1}})},

})


Template.chat.events({
  "click .js-chatsubmit": function(event){
    event.preventDefault();
    console.log("the button was clicked")
    const theText = $(".js-chatinput").val();  // read the user's chat text ...
    const chatline = {text:theText, createdAt:new Date(), createdBy:Meteor.userId()};
    Chats.insert(chatline);
  },

})

Template.chatline.helpers({
  isOwner(){
      console.log("this is in chatline");
      console.dir(this);
      console.log(Meteor.userId());
      return this.chat.createdBy==Meteor.userId();
  },

  username(){
      console.dir(this);
      var w = Profiles.findOne({owner:this.chat.createdBy});
      console.dir(w)
    return w.name;
  }
})

Template.chatline.events({
  "click span"(event,instance){
      Chats.remove(this.chat._id);
  },

})
