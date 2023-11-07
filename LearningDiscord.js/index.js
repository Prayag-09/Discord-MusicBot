const Discord = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "MESSAGE_CONTENT",
        "GUILD_MEMBERS"
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Replying to "hi", "Hello", or "Hey"
client.on("messageCreate", (message) => {
    if (message.content.toLowerCase() === "hi" || message.content.toLowerCase() === "hello" || message.content.toLowerCase() === "hey") {
        message.reply("Hi");
    }
});

const welcomeChannel = "1171165359844364348"; // Replace with the actual channel ID
client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeChannel).send({
        content : `<@${member.id}> Welcome to the server`
    })
});

client.login(process.env.TOKEN);
