// // root API
// var BASE_MUSIC_URL = 'https://musicovery.com/api/V6/playlist.php'

// // searching for a specific url with varying valence and arousal
// var url = `${BASE_MUSIC_URL}?fct=getfrommood&trackvalence=${trackValance}&trackarousal=${trackArousal}&resultsnumber=6&listenercountry=gb`;

// // various moods with different levels of valence and arousal
// var moods = {
//     dark: {valance: 1, arousal: 100000},
//     calm: {valance: 10, arousal: 10000},
//     energetic: {valance: 100, arousal: 1000},
//     cleaningTheHouse: {valance: 1000, arousal: 100},
//     danceEuphorical: {valance: 10000, arousal: 10},
//     happy: {valance: 100000, arousal: 1},
// }

// // getting song information based on mood input
// function getMoodResults(moodKey) {
//     var moodObj = moods[moodKey];
//     var url = `${BASE_MUSIC_URL}?fct=getfrommood&trackvalence=${moodObj.valance}&trackarousal=${moodObj.arousal}&resultsnumber=5&listenercountry=gb`;
//     fetch(url).then(function(response){return response.json();}).then(function(data) {console.log(data); })
// }

// getMoodResults('happy');
// var mood1 = document.getElementById("mood1").addeventlister("click")
// var mood2 = document.getElementById("mood2").addeventlister("click")
// var mood3 = document.getElementById("mood3").addeventlister("click")
// var mood4 = document.getElementById("mood4").addeventlister("click")

// Jess's code

var dropdown = document.getElementsByClassName("ui-dropdown");

var moodOne = document.getElementById("mood-1");

var moodTwo = document.getElementById("mood-2");

var button = document.getElementById("find-search");

button.onclick = function() {


if (dropdown.selectedIndex=moodOne='mood 1 here') {
    console.log(getElementsByClassName("ui-dropdown").selectedIndex = "2");

}

if (dropdown=moodTwo) {
    console.log('mood 2 here');

}

if (dropdown.getElementById="mood-3") {
    console.log('mood 3 here');
}

if (dropdown.getElementById="mood-4") {
    console.log('mood 4 here');

}

};
