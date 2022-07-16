console.log("Running index.js");
$.playerList.addEventListener("itemclick", (e) => {

	//let item = Alloy.Collections.player.get(e.section.getItemAt(e.itemIndex).id.text);
	//Alloy.createController("detail", {"$model": item}).getView().open();

});

console.log("Creating instance of players collection");

let players = Alloy.Collections.instance("player");
players.fetch();
console.log("Fetched players");

console.log("players.length", players.length);

$.win.open();

console.log("playerList.length", $.playerList.sections[0].itemCount);

console.log("Completed index.js");
