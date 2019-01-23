# liri-node-app
The Liri Node App, or LIRI-BOT, is a language interpretation and recognition interface that runs from the command line, takes in parameters from the user and returns data based on those parameters.  In order to function properly, it is linked with Spotify for songs, and OMDB for movies. 

The project required node and npm packages and was written in javascript.  It utilizes gitignore and .env files as well as fs packages to read appended files. 

## How the App Works

First, the user will need to go to this project in their terminal and download npm install. Next there are three commands the user can enter to get a response.  First, enter "node liri.js" and then one of the following: 

1. 'spotify-this-song'
2. 'movie-this'
3. 'do-what-it-says'

## Spotify-This-Song
Here, I began by navigating to the project, and typing in command "node liri.js spotify-this-song" followed by the song "'flares'".

![Image of Spotify command](C:\Users\rbennett\Pictures\LiriBot_Assignment\SpotifyThisSong)

The app then searches Spotify for all the songs containing the world 'flares' and posts the top 20 hits.  This hits include:
1. the artist
2. the song name
3. the preview to the song
4. the album from which it is from

![Image of Spotify Results](C:\Users\rbennett\Pictures\LiriBot_Assignment\SpotifyResults)

## Movie-This
By using the same node liri.js command followed by 'movie-this' then entering a movie, you will retrieve the following result:
1. the Title
2. the Year
3. the IMDB Rating
4. the Rotten Tomatos Rating
5. the Country it was created in
6. the Plot, and 
7. the Actors.

![Image of Movie Results](C:\Users\rbennett\Pictures\LiriBot_Assignment\MovieThisResults)

## Do-What-It-Says
  If you enter the 'do-what-it-says' command, the user will be given 20 results from a Spotify search "I Want It That Way".  In this case, the app has taken in the search saved on a random text file and used it as a default search term. 

![Image of Do What it Says](C:\Users\rbennett\Pictures\LiriBot_Assignment\DoWhatItSays)
![Image of Do What it Says Results](C:\Users\rbennett\Pictures\LiriBot_Assignment\DoWhatItSaysResults)

If the user enters a command that the app does not recognize, then the return will be "LIRI does not know that".
  
