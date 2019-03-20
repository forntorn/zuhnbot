const commando = require('discord.js-commando');
class memeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'meme',
            group: 'random',
            memberName: 'meme',
            description: 'Lets you see memes in chat!',
            throttling: {
        usages: 1,
        duration: 5

            },



        });

    }
    async run(message, args)
     {
         var memelist = ["https://giphy.com/gifs/cheezburger-swag-dancing-ehc19YLR4Ptbq", "https://giphy.com/gifs/culture--catch-me-outside-cash-outisde-howboday-l0Extsf1R5YuFXkpG",
         "https://giphy.com/gifs/mrw-finals-YWf50NNii3r4k", "https://cdn.discordapp.com/attachments/361346304279969803/361346497670938634/eJwNyDsSgyAQANC70Mvihq-3IUiQiboOrEUmk7uH5hXvK-62i0VszFdfANbaE7VVdqYWS5aFqOw5XrXLRAdE5pi2I5_cAa0xJliN.gif",
         "https://cdn.discordapp.com/attachments/361346304279969803/361346339415654401/58a4418d01134.gif", "https://cdn.discordapp.com/attachments/361346304279969803/361346757378048000/trumpslam_cropped.gif"




         ]

                 var randomAnswer = memelist[Math.floor(Math.random() * memelist.length)];
                 message.channel.send(randomAnswer);




















    }

}



module.exports = memeCommand;