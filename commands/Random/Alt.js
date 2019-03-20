const commando = require('discord.js-commando');
class GetAltCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'alt',
            group: 'random',
            memberName: 'alt',
            description: 'Private Messages you a Minecraft Premium account.',
            throttling: {
        usages: 1,
        duration: 120

            },



        });

    }
    async run(message, args)
     {
         var altlist = ["aenon83@gmail.com:alania83", "sweetnugs687@gmail.com:Sophia44",
         "geto23pr@yahoo.com:nolo689","jmt660@gmail.com:Nascar38",
         "bjornml@live.dk:bmlogbml12", "fosterpet101@yahoo.com:Killer432",
         "mac.kwiatkowski9@gmail.com:maciej99","darinkn12@yahoo.com:in83en17",
         "tommo20@icloud.com:Yoshi1123", "austin.brossette2000@gmail.com:Austin2000",
         "jackh883@gmail.com:jackrh123","xeroeverblade@gmail.com:Apr041996",
         "Funguy404@gmail.com:J0shua02", "micahemr@gmail.com:Emerson8",
         "ngjazwinn@gmail.com:pokio987", "emanuelkpo03@hotmail.com:emanuelkpo03",
         "sandy.goode@yahoo.com:12jons", "codmaster1104@gmail.com:butchoy14",
         "tashmim007@hotmail.co.uk:kryptonite","tashtash403@gmail.com:Winx1111",
         "tashx25@aol.com:aydenlee12","taskake@gmail.com:Takkun15",
         "taskaslu@gmail.com:draugtimtu","taslimakamal@live.com:Ayman29",
         "tasogare@gmail.com:Minagirl1","tasso641@hotmail.co.uk:kyriacos64",
         "tastelesstube@gmail.com:ethan121","tastroe@gmail.com:rockies12",
         "tastumvej02@hotmail.com:Patrick1505","tastygamernl@hotmail.nl:Niggah021",
         "tastyred1@gmail.com:5493931daniel","tata.love.silva@hotmail.com:11051105",
         "tata4now1117@cox.net:nov172001","tatashay27@live.com:avacado28",
         "tate.allen512@gmail.com:mansfield512","tate.harstad.09@gmail.com:th103090",
         "tate1199@hotmail.com:sayer1199","tatekitchrel@gmail.com:245445",
         "tater_wright@yahoo.com:taytay13","tathon2@gmail.com:Alvin1996",
         "tatiana.king@ntlworld.com:mint78","tatin81@live.fr:speedy81"




         ]

                 var randomAnswer = altlist[Math.floor(Math.random() * altlist.length)];
                message.author.send(randomAnswer);
                message.channel.send('Sent the alt!')
                  let messagecount = parseInt(2);
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));




















    }

}



module.exports = GetAltCommand;