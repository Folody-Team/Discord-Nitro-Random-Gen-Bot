const keepAlive = require("./server.js")
const Discord = require('discord.js');
const client = new Discord.Client();
const randomstring = require("randomstring");

const prefix = '=';

client.on('message', msg => {

    let args = msg.content.slice(prefix.length).trim().split(' ');

    if (msg.content.startsWith(`${prefix}setup`)) {

        if (!msg.guild.member(client.user).hasPermission(["MANAGE_CHANNELS", "ADMINISTRATOR"])) return;
        msg.guild.channels.create(`nitro-gen`, 'nitro-gen-2').catch(e => { }); //If want change channel name

    }

    if (msg.content.startsWith(`${prefix}gen`)) {

        msg.delete()

        msg.channel.send("https://discord.gift/" + randomstring.generate(16));

    }


    if (msg.content.startsWith(`${prefix}start`)) {
        if (!msg.guild.member(client.user).hasPermission(["ADMINISTRATOR"])) return;

        msg.delete()

        var interval = setInterval(function () {

            msg.channel.send("https://discord.gift/" + randomstring.generate(16));

            
            msg.channel.send("https://discord.gift/" + randomstring.generate(24));

        }, 2800);

    }

});

keepAlive()
client.on('ready', async () => {
    console.log('Chào!')

    let statuses = [
        `Uptime Bot với UptBot`,// Here u can change status
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {
            type: "PLAYING",
            url: "https://mconline.folody.tk" 
        })
    }, 4000)
})
const mySecret = process.env['TOKEN']
client.login(mySecret)
