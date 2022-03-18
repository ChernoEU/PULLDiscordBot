const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
	intents: [
		"GUILDS",
		"GUILD_MESSAGES"
	]
})


client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}`)
})


client.on("messageCreate", (message) => {
	if (message.content == "hi"){
		message.reply("Coffey is a bitch")
	}
})

client.on("messageCreate", (message) => {
	if (message.content == "drugs"){
		message.reply("Ask Cantlon")
	}
})



client.login(process.env.TOKEN)
//