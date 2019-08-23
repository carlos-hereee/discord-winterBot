const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjE0MTcwMDk2ODg5NDk1NTYy.XV7mGQ.4HhV7UCNskh7UEr9xISRxwmCd1Q';

const PREFIX = '!';
bot.on('ready', () => {
    console.log(`this bot is online as ${bot.user.tag}` );
    bot.user.setActivity('run a 
    command', {type: 'LISTENING'}).catch(console.error);
})
 
bot.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(' ');

    switch(args[0]){
        case 'ping':
            msg.channel.sendMessage('pong');
            break;
        case 'hello':
            if(args[1] === 'bot'){
                msg.channel.sendMessage('Hello I come in peace! 😀 🤖 ');
            }else{
                msg.channel.sendMessage('o-O what? Say that again.')
            }
            break;
        case 'clear':
            if(!args[1]) return msg.reply('wrong try again');
            msg.channel.bulkDelete(args[1]);
            break;
        case 'embed':
            const embed = new Discord.RichEmbed()
            .addField('Player Name')
    }
})

bot.login(token);