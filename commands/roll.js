exports.run = (client, message, args) => {
	var roll = Math.floor(Math.random() * 100) + 1;
	message.reply("Du hast eine " + roll + " gewürfelt!").catch(console.error);
		    
}
