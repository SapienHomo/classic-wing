if (message.author.bot) {
        return;
    }

    if (message.member.hasPermission('ADMINISTRATOR')) {
        return;
    } else if (message.content.toLowerCase().includes('YOUR_SERVER_LINK_HERE'.toLowerCase())) {
        return;
    } else if (!message.member.hasPermission('ADMINISTRATOR')) {
        if (message.content.includes('discord.gg') || message.content.includes('discordapp') || message.content.includes('discord.com') || message.content.includes('discord.io')) {
            message.delete()
                .then(() => {
                    message.channel.send(`${message.author}, Invite Links aren't allowed here.`);
                })
        }
    }
client.login("NzgwODI5NTc5NTcyNDEyNDU3.X70yNg.WLAOAsYr2Qv0xc4RCOnHAMqb4xs")
