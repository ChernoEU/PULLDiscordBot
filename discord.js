const Discord = require("discord.js");
// const {prefix, token} = require('./config.json');
const { intents } = Discord
const path = require('path');


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
	if (message.content == "hello"){
		message.reply("hello")
	}
})

client.on("messageCreate", (message) => {
	if (message.content == "!shrek"){
		message.reply("https://cdn.discordapp.com/attachments/761457137850515477/763900393427042304/shrekowo.mp4")
	}
})

client.on("messageCreate", (message) => {
	if (message.content == "!command"){
		message.reply("https://imgur.com/a/zGOpFJT")
	}
})

client.login(process.env.token);
//