/*eslint-env browser*/
var songs = [
	["Operation Ivy", "Energy"],
	["Blink 182", "Dude Ranch"],
	["New Found Glory", "Sticks and Stones"]];
var select = document.getElementById("albums");
var song;
for (song in songs ) {
	select.add(new Option(songs[song]));
}

var Jukebox = function () {
    "use strict";
    var albums = [], self;
    self = {
        //ADD EACH ALBUM TO THE ALBUMS ARRAY
        addAlbum: function (album) {
            albums.push(album);
        },
        //RETURN THE ALBUM THAT'S BEEN PLAYED THE MOST
        favoriteAlbum: function () {
            var max = 0, fav, i;
            
            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};
//CREATE AN ALBUM CLASS
var Album = function (artist, album) {
    "use strict";
    var self = {
        played: 0,
        //INCREASE THE AMOUNT OF TIMES AN ALBUM HAS BEEN PLAYED
        play: function () {
            this.played += 1;
        },
        //DISPLAY THE AMOUNT OF TIMES ALBUM HAS BEEN PLAYED
        display: function () {
            return artist + " \"" + album + "\". It's been played " + this.played + " times.";
        }
    };
    return self;
};
//CREATE JUKEBOX
var jukebox = new Jukebox();

var album;
for (var i = 0; i < songs.length; i += 1) {
	album = new Album(songs[i][0], songs[i][1]);
}
jukebox.addAlbum(album);
document.getElementById("play").addEventListener("click", function () {
    "use strict";
	album.play();
});

//DISPLAY FAVORITE ALBUM BASED ON PLAYS
document.getElementById("favoritealbum").addEventListener("click", function () {
    "use strict";
	var html = "";
	html += "Your favorite album is: " + jukebox.favoriteAlbum()
	document.getElementById("favoriteAlbum").innerHTML = html;
    
});
//window.console.log("Your favorite album is: " + jukebox.favoriteAlbum());
