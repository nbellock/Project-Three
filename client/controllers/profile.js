Template.profile.onRendered(function(){
  $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  });

  $('.personTag-mobile').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  });
  // setTimeout(function(){
  //   $('.collapsible').collapsible();
  // }, 1000)
});


Template.profile.helpers({
  thereAreSavedLocations() {
  var myLocations = Locations.find().fetch();
  console.log(myLocations);
    if(myLocations.length === 0){
      return false;
    } else{
      return true;
    }
  },
});

Template.registerHelper( 'savedLoc', () => {
  var myLocations = Locations.find().fetch();
  console.log(myLocations);
    if(myLocations.length === 0){
      return "There are no saved locations.";
    } else{
      return Locations.find({});
    }
});
