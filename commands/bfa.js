exports.run = (client, message, args) => {
        var deadline = new Date("Aug 14, 2018 00:00:00").getTime();
        var now = new Date().getTime();
        var t = deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        var countdown = days + " Tagen " + hours + " Stunden " + minutes + " Minuten und " + seconds + " Sekunden ";
        message.channel.send(`Hallo ${message.author.username}, Battle for Azeroth startet in ${countdown} `).catch(console.error);
}
