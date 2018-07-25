exports.run = (client, message, args) => {
	    message.channel.send(`Die Schuld auf andere Leute zu schieben ist nicht nett ${message.author.username}!`).catch(console.error);
}
