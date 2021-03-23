const Discord = require("discord.js");
const data = require("./data/webhooks.json");
const hook = new Discord.WebhookClient(data.id, data.token);

module.exports = {
    ping: function(client) {
        hook.send(`${client.user} (\`${client.user.id}\`) adlı botun pingi **${client.ws.ping}ms** olarak belirlendi.`)
        return client.ws.ping
    }
}
