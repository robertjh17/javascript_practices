const team = {
    _players: [
        {firstName: 'Pablo', lastName: 'Sanchez', age: 11},
        {firstName: 'Robert-Jan', lastName: 'Haasnoot', age: 20},
        {firstName: 'Lionel', lastName: 'Messi', age: 34}
    ],
    _games: [
        {opponent: 'Fc Barcelona', teamPoints: 42, opponentPoints: 20},
        {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
        {opponent: 'Bal op het dak', teamPoints: 42, opponentPoints: 30}
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this.games.push(game);
    }
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame('Titans', 100, 98);
team.addGame('beasts', 103, 98);
team.addGame('Union', 106, 98);
console.log(team.games);