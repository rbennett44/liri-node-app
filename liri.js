var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var request = require('request');
var fs = require('fs');

//-------BANDS IN TOWN----------------
// var getMyBand = function(band) {

//     request("https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp", function(error, response, body) {
//         if (!error && response.statusCode == 200) {
//             var jsonData = JSON.parse(body);
//             console.log('Name: ' + jsonData.Venue);
//             console.log('Location: ' + jsonData.Location);
//             console.log('Date: ' + jsonData.Date);
//         };
//     });
// };
 
var getArtistNames = function(artist) {
    return artist.name;
};

var getMeSpotify = function(songName) {
spotify.search({ type: 'track', query: songName }, function(err, data) {
  if (err) {
      
    return console.log("There has been an error: " + err);
  }
  var songs = data.tracks.items;
  for(var i = 0; i < songs.length; i++) {
    console.log(i);
    console.log('artist(s): ' + songs[i].artists.map(
        getArtistNames
    ));
    console.log('song name: ' + songs[i].name);
    console.log('preview song: ' + songs[i].preview_url);
    console.log('album: ' + songs[i].album.name);
    console.log('--------------------------------------');  
  }

});
};

var getMeMovie = function(movieName) {

    request('http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&apikey=6180c81d', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var jsonData = JSON.parse(body);
            console.log('Title: ' + jsonData.Title);
            console.log('Year: ' + jsonData.Year);
            console.log('IMDB Rating: ' + jsonData.imdbRating);
            console.log('Rotten Tomatoes Rating: ' + jsonData.Ratings[1].Value);
            console.log('Country: ' + jsonData.Country);
            console.log('Plot: ' + jsonData.Plot);
            console.log('Actors: ' + jsonData.Actors);

        }
    });
};

var doWhatItSays = function() {

    fs.readFile('random.txt', 'utf8', function(err, data) {
        if(err) throw err;
         
        var dataArr = data.split(',');

        if (dataArr.length == 2) {
            pick(dataArr[0], dataArr[1]);
        } else if (dataArr.length == 1) {
            pick(dataArr[0]);
        }
    });
};

var pick = function(caseData, functionData) {
    switch(caseData) {
        // case 'concert-this':
        //     getMyBand(functionData);
        //     break;
        case 'spotify-this-song':
            getMeSpotify(functionData);
            break;
        case 'movie-this':
            getMeMovie(functionData);
            break;
        case 'do-what-it-says':
            doWhatItSays();
            break;
        default:
        console.log("LIRI does not know that.")    
    }
};

var runThis = function(argOne, argTwo) {
    pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);