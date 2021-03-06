// var APIKey = Meteor.settings.public.APIKey;

Meteor.methods({
  findLocations: function (lat, long, radius, keyword) {
    var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius=" + radius + "&keyword=" + keyword + "&opennow=true&key=" + "AIzaSyDBLqCOGd-_Caq1Lxzk6DknCu_v3MTrTSI";
    console.log(queryURL);

    var result = HTTP.get(queryURL, {});
    return result;
  },
  getDetails: function (placeid) {
    var detailsURL = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeid + "&key=" + "AIzaSyDBLqCOGd-_Caq1Lxzk6DknCu_v3MTrTSI";
    console.log(detailsURL);
    var results = HTTP.get(detailsURL, {});
    console.log(results);
    return results;
  },
  saveLocation: function (placeId, details) {
    Locations.insert({
      place_id: placeId,
      name: details.name,
      address: details.formatted_address,
      phone_number: details.formatted_phone_number,
      url: details.url,
      hours: details.opening_hours.weekday_text
    });
    console.log('Added new location.');
  },
  removeLocation: function (id) {
    Locations.remove({
      _id: id
    });
  },
  viewDetails: function (id) {
    var results = Locations.find({
      _id: id
    }).fetch();
    return results;
  }
});