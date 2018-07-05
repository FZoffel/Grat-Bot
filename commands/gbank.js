exports.run = (client, message, args) => {
const list = require(`../gildenbank.json`);
var liste = list.item;
var endliste = []
	for (var i=0; i < liste.length; ++i) {
		endliste.push(`- ` + liste[i]);
	}
    message.channel.send(`Für die Gildenbank wird folgendes benötigt: `)
    message.channel.send(endliste);
}
