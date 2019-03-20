const commando = require('discord.js-commando');
class punchCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'staff',
            group: 'random',
            memberName: 'staff',
            description: 'Check the staff members!',
            throttling: {
        usages: 1,
        duration: 1

            },



        });

    }
    async run(message, args)
     {
         var stafflist = [""





         ]

                 var randomAnswer = stafflist[Math.floor(Math.random() * stafflist.length)];
                 message.channel.send('Current Staff: blob - Owner, PowerTrans408 - Admin, Blazefury1218 - Admin');




















    }

}



module.exports = punchCommand;