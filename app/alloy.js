
console.log("Running alloy.js");
let players = Alloy.Collections.instance("player");
players.fetch();
console.log("players.length", players.length);

players.clear();
players.fetch();
console.log("players.length after players.clear", players.length);

let player1 = Alloy.createModel("player", {name: "Fred Bloggs", gender: 1});
player1.save();
console.log("Added player 1", player1.get("id"));

let player2 = Alloy.createModel("player", {name: "Graham Hick", gender: 1});
player2.save();
console.log("Added player 2", player2.get("id"));

let player3 = Alloy.createModel("player", {name: "Nat Sciver", gender: 2});
player3.save();
console.log("Added player 3", player3.get("id"));

console.log("players.length", players.length);
players.fetch();
console.log("players.length", players.length);

console.log("Completed alloy.js");
