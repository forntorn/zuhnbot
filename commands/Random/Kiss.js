const commando = require('discord.js-commando');
class kissCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'kiss',
            group: 'random',
            memberName: 'kiss',
            description: 'Allows you to kiss someone you truly like!'



        });

    }
    async run(message, args)
     {
        message.reply("just KISSED you! https://giphy.com/gifs/kiss-spongebob-squarepants-lTQF0ODLLjhza");

        
    }
      
}

module.exports = kissCommand;