exports.run = (client, message, args) => {
	const list = require("../commands.json");
	var liste = list.item;
	var endliste = []
	for (var i=0; i < liste.length; ++i) {
		endliste.push(`- ` + liste[i]);
	}
	message.channel.send("Ich kenne folgende Befehle: ")
	message.channel.send(endliste);
}
