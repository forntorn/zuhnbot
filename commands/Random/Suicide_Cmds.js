const commando = require('discord.js-commando');
class SuicideCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'suicide',
            group: 'random',
            memberName: 'suicide',
            description: 'Commits suicide.'



        });

    }
    async run(message, args)
     {
        message.reply("You have committed suicide!");

        
    }
      
}

module.exports = SuicideCommand;