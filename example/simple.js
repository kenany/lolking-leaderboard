var leaderboard = require('../');

leaderboard('na', 1, function(error, data) {
  if (error) {
    throw error;
  }

  console.log(data);
  // => {
  // =>   status: true,
  // =>   data: [
  // =>     {
  // =>       region: 'na',
  // =>       summoner_id: 18991200,
  // =>       global_ranking: '7',
  // =>       ranking: '1',
  // =>       lks: '2965',
  // =>       tier: '6',
  // =>       division: '1',
  // =>       league_points: '1306',
  // =>       wins: '222',
  // =>       losses: '143',
  // =>       previous_ranking: '2',
  // =>       tier_name: 'CHALLENGER',
  // =>       name: 'Turtle the Cat',
  // =>       profile_icon_id: 627,
  // =>       most_played_champions: [Object]
  // =>     },
  // =>
  // =>     ...
  // =>
  // =>     {
  // =>       region: 'na',
  // =>       summoner_id: 24069119,
  // =>       global_ranking: '67',
  // =>       ranking: '10',
  // =>       lks: '2945',
  // =>       tier: '6',
  // =>       division: '1',
  // =>       league_points: '895',
  // =>       wins: '183',
  // =>       losses: '117',
  // =>       previous_ranking: '9',
  // =>       tier_name: 'CHALLENGER',
  // =>       name: 'i KeNNy u',
  // =>       profile_icon_id: 641,
  // =>       most_played_champions: [Object]
  // =>     }
  // =>   ]
  // => }
});