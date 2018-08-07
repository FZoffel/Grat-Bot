exports.run = (client, message, args) => {
	var allusers = Array.from(message.guild.members);
	var rand = (allusers[Math.floor(Math.random() * allusers.length)]);
	var string = String(rand);
	var user = string.replace(/.*,/g,"");
	const feelsgreat = client.emojis.find("name", "feelsgreat");
	
	message.channel.send(user + " ist meiner Meinung nach Schuld! " + feelsgreat).catch(console.error);

}
