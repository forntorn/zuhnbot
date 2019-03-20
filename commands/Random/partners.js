const commando = require('discord.js-commando');
class partnerCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'partner',
            group: 'random',
            memberName: 'partner',
            description: 'Check out our partners!'



        });

    }
    async run(message, args)
     {
       


        message.author.send("WE do not currently have ANY partners, but searching for some!");
        message.channel.send('Sent our Partners list!!')
         




















}

}



module.exports = partnerCommand;