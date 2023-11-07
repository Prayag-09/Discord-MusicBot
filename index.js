import Discord from 'discord.js';
import dotenv from 'dotenv';
import fs from ('fs');
import Player from 'discord-player';
import Rest from '@discordjs/rest';
import Routes from '@discord-api-types/v9';

dotenv.config()
const token = process.env.TOKEN;

const loadSlash = process.argv[2] = "load"

const Client_ID = "1170991568740687922"
const GUILD_ID = "904776353717583942"


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_VOICE_STATE"
    ]
});

client.slashcommands = new Discord.Collection()
client.player = new Player( client , {
    ytdlOptions : {
        quality: "highestaudio",
        highWaterMark: 1 << 25
    }
});

