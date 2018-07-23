exports.run = (client, message, args) => { 
	const blame = require(`../blame.json`); 
	var blamelist = blame.item; 
	var rand = blamelist[Math.floor(Math.random() * blamelist.length)];
	message.channel.send(rand).catch(console.error);
}
