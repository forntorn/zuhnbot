const commando = require('discord.js-commando');
require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000
http.createServer().listen(port);
const bot = new commando.Client({
    commandPrefix: '#'
});

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

const token = process.env.TOKEN;



bot.on ('message', (message) => {
    
        if(message.content == 'Two') {
            message.reply('He is watching or playing very fun and cool games. So shut the FUCK up!');   
        }
    });

bot.on('error', err => {
	console.log(err);
});

bot.login(token);
