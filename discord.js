const Discord = require("discord.js")
require("dotenv").config()
const { intents } = Discord
const WOK = require('wokcommands')
const path = require('path')




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
	if (message.content == "L + ratio + didn't ask"){
		message.reply("@RatPackSteve is that you?")
	}
})

client.on('message', function (message) {
    if (message.content.startsWith('retard') && true){
 const retard = 'https://imgur.com/a/zGOpFJT';
  return message.reply(`NO SWEARING! ${retard}`) }
  return retard
 return 'hi'
})



client.login(process.env.TOKEN)
//