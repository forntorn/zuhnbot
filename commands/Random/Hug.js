const commando = require('discord.js-commando');
class hugCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'hug',
            group: 'random',
            memberName: 'hug',
            description: 'Allows you to hug someone who truly needs it!'



        });

    }
    async run(message, args)
     {
        message.reply("just HUGGED you! https://giphy.com/gifs/stacerizz-l46Cot6SYZsicMsp2");

        
    }
      
}

module.exports = hugCommand;