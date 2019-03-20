const commando = require('discord.js-commando');
class punchCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'punch',
            group: 'random',
            memberName: 'punch',
            description: 'Lets you punch anyone!',
            throttling: {
        usages: 1,
        duration: 5

            },



        });

    }
    async run(message, args)
     {
         var punchlist = ["https://giphy.com/gifs/supernatural-dean-winchester-punch-SzC42gUrhHopW",
         "https://giphy.com/gifs/angry-punch-adventure-time-ay4LVDTq2he4U",
         "https://giphy.com/gifs/face-punch-5PDgnZtpZZMUE",
         "https://giphy.com/gifs/reaction-hermione-granger-punch-24ZBx2aF2OxiM"





         ]

                 var randomAnswer = punchlist[Math.floor(Math.random() * punchlist.length)];
                 message.channel.send(randomAnswer);




















    }

}



module.exports = punchCommand;