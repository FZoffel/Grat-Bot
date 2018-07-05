exports.run = (client, message, args) => {

const config = require(`../config.json`);

function resetBot() {
    // send channel a message that you're resetting bot [optional]
   message.channel.send('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login(config.token));
}

resetBot();
}
