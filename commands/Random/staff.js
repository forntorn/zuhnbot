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
         var stafflist = ['Current Staff:  @One - Owner, @Two - Dev/CoFounder, @Three - CoFounder']
