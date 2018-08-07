exports.run = (client, message, args) => {

	const config = require("../config.json");
	
	function resetBot() {
		message.channel.send("Resetting...")
		.then(msg => client.destroy())
		.then(() => client.login(config.token));
	}

	resetBot();
}
