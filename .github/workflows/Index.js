const { Client } = require("discord.js")//We are getting client class from discord.js
const client = new Client()//Making a discord.js client

// Message Event
client.on("message", (message) => {//This event emites when a new messages comes
    if(message.author.bot)return//We are returning if the author is bot

    //If the message was ping
    if(message.content === "ping"){//then
        //This Runs
        message.channel.send("Pong!")//This reply Pong! to the channel where message arrives!
    }
})

client.login("NzgwODI5NTc5NTcyNDEyNDU3.X70yNg.Y5eVTsQURPf1Hrns2bmwpOOcrNw")//Logging the client to discord!
© 2020 GitHub, Inc
