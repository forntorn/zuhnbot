const commando = require('discord.js-commando');
class SpotifyCommand extends commando.Command {
    constructor(client) {
        super(client, {
			name: 'Spotify',
			group: 'Random',
			memberName: 'spotify',
			description: 'Sends a free PREMIUM Spotify account!'
			throttling: {
		usages: 1,
		duration: 5

			},

		});

	}
	async run(message, args)
	 {
	var spotifylist = ["ttturmell@gmail.com:t22062206, vietranway@yahoo.com:1ogtonyt, 10019403@richland2.org:Isaiahj9, alexander.grischke@web.de:alexander, christina.ansell@yahoo.com:b032003, ctryrox@gmail.com:roxgirl88, maltito@t-online.de:tabaluga13, soren@hh-web.dk:maria44, paulkrause27@freenet.de:meganman, vogt-julian@t-online.de:didajo59, f7trc27pe@t-online.de:computer2, abryanb@gmail.com:butter34, wendypaigedodge@gmail.com:poop1234, Brunohenriqueguedes@gmail.com:LKoi5412, steven.sera2@gmail.com:citation22, bjoern-kempa@t-online.de:1q2w3e4r, post@niho.dk:Besson56, mattywiebe@gmail.com:mattro12, vilkeralevato@hotmail.com:vilker2000, sesr512@gmail.com:belkin00, jgpatton@gmail.com:z3pp3lin, toyotaboy12@gmail.com:ganja420, baczoni@gmail.com:Gx071587, jaspergomes.usmc@gmail.com:jackass6, tadc20@gmail.com:TaylorJo0704, puzacharles@gmail.com:thecure1, romeljunior@hotmail.com:romelcmjr2792, theplvip@gmail.com:czesio123"]


		var randomAnswer = spotifylist[Math.floor(Math.random() * spotifylist.length)];
		message.author.send(randomAnswer);
		message.channel.send('Check your DMs!')
		let messagecount = parseInt(2);
 message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));


 	}

}


module.exports = SpotifyCommand;