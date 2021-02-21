const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")


client.on("ready", () => {
  console.log(`O bot foi iniciado, com ${client.users.cache.size} usuários e em ${client.guilds.cache.size} servidores.`);
  client.user.setActivity('NKlas pls', { type: 'PLAYING' });(`Eu estou em ${client.guilds.cache.size} servidores`);
});

client.on("guildCreate", guild => {
    console.log(`O bot entrou no servidor: ${guild.name} (ID do servidor: ${guild.id}). Membros: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.cache.size} servidores.`);
});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (ID do servidor: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
});

const prefix = "N"

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    if (!message.content.startsWith(prefix)) return; 

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    if(comando == "highlight", comando == "hl") {
        const hg = await message.channel.send("Você quer um highlight? Toma, toma!");
        hg.edit("Ta ai! o aprendiz superando seu mestre. https://www.youtube.com/watch?v=5t584sMc_u8    NKlas pls");
    }

    if(comando == "ajuda", comando == "help") {
        const hg = await message.channel.send("Por enquando só tem esses: \n```Nhelp ou Najuda: Mostra lista de comandos \n\nNhighlight ou Nhg: Um Nhighlight para você \n\n\nprefix: N ``` NKlas pls ");

    }

});

client.login(config.token)