import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const final2014 = fifaData.findIndex(function(match) {
    return match.Year == "2014" &&  match.Stage == "Final";
});

console.log(final2014);

console.log(fifaData[final2014]["Home Team Name"]);
console.log(fifaData[final2014]["Away Team Name"]);
console.log(fifaData[final2014]["Home Team Goals"]);
console.log(fifaData[final2014]["Away Team Goals"]);

if(fifaData[final2014]["Home Team Goals"] > fifaData[final2014]["Away Team Goals"]) {
    console.log(`${fifaData[final2014]["Home Team Name"]} was the winner of the 2014 World Cup Final`);
} else {
    console.log(`${fifaData[final2014]["Away Team Name"]} was the winner of the 2014 World Cup Final`);
}



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const onlyFinals = data.filter(function(match){
        return match.Stage === "Final";
    })
    return onlyFinals;
};

console.log(getFinals(fifaData));


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback, data) {

    const years = callback(data).map(function(item){
        return item.Year;
    })
    return years;
};

console.log(getYears(getFinals, fifaData));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback, data) {

    const winners = callback(data).map(function(match){
        if(match["Home Team Goals"] > match["Away Team Goals"]) {
            return  match["Home Team Name"];
        } else if(match["Home Team Goals"] < match["Away Team Goals"]) {
            return match["Away Team Name"];
        } else {
            return "N/A"
        }
    })
    return winners;
};

console.log(getWinners(getFinals, fifaData));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winnersFunction, yearsFunction) {
    const stringsArray = [];
    const winningTeams = winnersFunction(getFinals, fifaData);
    const years = yearsFunction(getFinals, fifaData);
    console.log(years);
    for (let i = 0; i < years.length; i++) {
        stringsArray.push(`In ${years[i]}, ${winningTeams[i]} won the world cup!`);
    }
    return stringsArray;
};

console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

// this returns Home and Away average goals separately.

function getAverageGoals(data) {
    let numGames = 0;
    const totHomeGoals = data.reduce(function(accumulator, match) {
        numGames++;
        return accumulator + match["Home Team Goals"];
    },0);
    const totAwayGoals = data.reduce(function(accumulator, match){
        return accumulator + match["Away Team Goals"];
    },0);
    return {averageHomeTeamGoals: (totHomeGoals / numGames), averageAwayTeamGoals: (totAwayGoals / numGames)};
};

console.log(getAverageGoals(fifaData));

// this returns total goals per match average

function getAverageTotalGoals(data) {
    let numGames = 0;
    const goalsTotal = data.reduce(function(accumulator, match){
        numGames++;
        return accumulator + match["Home Team Goals"] + match["Away Team Goals"]
    },0);
    return goalsTotal / numGames;
}

console.log(getAverageTotalGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins(fifaData, teamInitials);


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
