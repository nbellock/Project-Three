Template.masterLayout.rendered = function () {
  $(".button-collapse").sideNav();
  getLocation();
};


Tracker.autorun(function() {
  if(Meteor.user()){
    $('body').addClass('pad-body');
    setTimeout(function(){
      $('.collapsible').collapsible();
    }, 200)
  } else {
    $('body').removeClass('pad-body');
  }
}); 

Template.masterLayout.events({
  
})

//initialize the user location, user can allow or block when prompted
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(recordPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

//records lat and long of user location
function recordPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  Session.set('lat', latitude);
  Session.set('long', longitude);
  var savedlated = Session.get('lat');
  var savedlonged = Session.get('long');
  console.log(savedlated+ "," + savedlonged);
  console.log(latitude + "," + longitude);
}



