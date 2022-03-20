const Discord = require("discord.js");
const {prefix, token} = require('./config.json');

const { intents } = Discord

const WOK = require('wokcommands');
const path = require('path');




const client = new Discord.Client({
	intents: [
		"GUILDS",
		"GUILD_MESSAGES"
	]
})

client.on('ready',  () => {
	new WOK(client, {
		commandsDir: path.join(__dirname, 'commands'),
	})
})

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}`)
})


client.on("messageCreate", (message) => {
	if (message.content == "hello"){
		message.reply("wagwan bruv")
	}
})

client.on("messageCreate", (message) => {
	if (message.content == "test"){
		message.reply("test reaction")
	}
})

client.on("messageCreate", (message) => {
	if (message.content == "!command"){
		message.reply("test reaction")
	}
})

client.login(token);

//