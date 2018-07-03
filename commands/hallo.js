exports.run = (client, message, args) => {
	    message.channel.send(`Hallo ${message.author.username}, ich hoffe du hast einen schönen Tag !`).catch(console.error);
}
