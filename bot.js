const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "^";
const hug = ["https://s-media-cache-ak0.pinimg.com/originals/49/a2/1e/49a21e182fcdfb3e96cc9d9421f8ee3f.gif", "https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif","https://myanimelist.cdn-dena.com/s/common/uploaded_files/1461071296-7451c05f5aae134e2cceb276b085a871.gif", "http://i0.kym-cdn.com/photos/images/original/000/931/030/394.gif", "https://media.tenor.co/images/1171c186f9130d1efa4a186ad4371e8c/tenor.gif", "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0413/epic-hugs-friends-pikachu.gif","https://cdn.weeb.sh/images/Hyv6uOQPZ.gif","https://cdn.weeb.sh/images/r1bAksn0W.gif","https://cdn.weeb.sh/images/rJ_slRYFZ.gif","https://cdn.weeb.sh/images/BkHA_O7v-.gif","https://cdn.weeb.sh/images/r1kC_dQPW.gif","https://cdn.weeb.sh/images/r1R3_d7v-.gif","https://cdn.weeb.sh/images/Sk2gmRZZG.gif",
"https://cdn.weeb.sh/images/BysjuO7D-.gif","https://cdn.weeb.sh/images/BJx2l0ttW.gif","https://cdn.weeb.sh/images/Sy65_OQvZ.gif", "https://cdn.weeb.sh/images/Sk80wyhqz.gif", "https://cdn.weeb.sh/images/Sk-xxs3C-.gif", "https://cdn.weeb.sh/images/S1OAduQwZ.gif"]
const pat = ["https://cdn.weeb.sh/images/ByDVw9uO-.png", "https://cdn.weeb.sh/images/ryXj1JKDb.gif", "https://cdn.weeb.sh/images/ByZwv5udZ.gif", "https://cdn.weeb.sh/images/BkaRWA4CZ.gif", "https://cdn.weeb.sh/images/Sk2f7J39G.gif", "https://cdn.weeb.sh/images/ByZ7wqOu-.png", "https://cdn.weeb.sh/images/B1SOzCV0W.gif", "https://cdn.weeb.sh/images/r1Y5L6NCZ.gif", "https://cdn.weeb.sh/images/rJavp1KVM.gif", "https://cdn.weeb.sh/images/HyWlxJFvb.gif", "https://cdn.weeb.sh/images/ByOc1ktv-.gif", "https://cdn.weeb.sh/images/B1TQcTNCZ.gif", "https://cdn.weeb.sh/images/H1MBvc_u-.gif", "https://cdn.weeb.sh/images/rkBZkRttW.gif"]
const lick = ["https://cdn.weeb.sh/images/ryGpGsnAZ.gif", "https://cdn.weeb.sh/images/H1EJxR_vZ.gif", "https://cdn.weeb.sh/images/H1zlgRuvZ.gif", "https://cdn.weeb.sh/images/rktygCOD-.gif", "https://cdn.weeb.sh/images/rJ6hrQr6-.gif", "https://cdn.weeb.sh/images/H13HS7S6-.gif", "https://cdn.weeb.sh/images/Sk15iVlOf.gif", "https://cdn.weeb.sh/images/rykRHmB6W.gif", "https://cdn.weeb.sh/images/BkvTBQHaZ.gif", "https://cdn.weeb.sh/images/Bkxge0uPW.gif", "https://cdn.discordapp.com/attachments/537169976637784064/539977703223459861/liem.gif"]
const bad = ["https://cdn.weeb.sh/images/H1eoWIDdb.gif", "https://cdn.weeb.sh/images/Bk_oZUP_-.gif", "https://cdn.weeb.sh/images/HkZ6v0FOb.gif", "https://cdn.weeb.sh/images/HkHFyIw_W.gif", "https://cdn.weeb.sh/images/ByIcZUPuZ.gif", "https://cdn.weeb.sh/images/BJsi-8vd-.gif", "https://cdn.weeb.sh/images/S1yhZ8vuW.gif", ]
const tat = ["https://cdn.weeb.sh/images/HkK2mkYPZ.gif", "https://cdn.weeb.sh/images/Sk0RmyYvb.gif", "https://cdn.weeb.sh/images/SkdyfWCSf.gif", "https://cdn.weeb.sh/images/B1-nQyFDb.gif", "https://cdn.weeb.sh/images/rJ4141YDZ.gif", "https://cdn.weeb.sh/images/Hk6JVkFPb.gif", "https://cdn.weeb.sh/images/r1PXzRYtZ.gif", "https://cdn.weeb.sh/images/ByHUMRNR-.gif", "https://cdn.weeb.sh/images/rJrnXJYPb.gif", "https://cdn.weeb.sh/images/Hy09QJFDZ.gif", "https://cdn.weeb.sh/images/rJvR71KPb.gif", "https://cdn.weeb.sh/images/Bkj-oaV0Z.gif", "https://cdn.weeb.sh/images/BJ8o71tD-.gif", "https://cdn.weeb.sh/images/rJgTQ1tvb.gif", "https://cdn.weeb.sh/images/BJLCX1Kw-.gif", "https://cdn.weeb.sh/images/ry2tWxcyf.gif", "https://cdn.weeb.sh/images/SkSCyl5yz.gif", "https://cdn.weeb.sh/images/HkJ6-e91z.gif"]
const kiss = ["https://cdn.weeb.sh/images/HJmunTOw-.gif", "https://cdn.weeb.sh/images/BJMX2TuPb.gif", "https://cdn.weeb.sh/images/Byh57gqkz.gif", "https://cdn.weeb.sh/images/S1E1npuvb.gif", "https://cdn.weeb.sh/images/rJ6PWohA-.gif", "https://cdn.weeb.sh/images/HJYghpOP-.gif", "https://cdn.weeb.sh/images/Sksk4l51z.gif", "https://cdn.weeb.sh/images/SyY0j6Ov-.gif"]
const triggered = ["https://cdn.discordapp.com/attachments/540655675622293505/540655752600092713/ryyMcytDZ.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540667240123596800/Gay.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540667711517360168/giphy.gif", "https://media.giphy.com/media/kRgj0fQLxhVoA/giphy.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540669457660641280/giphy_3.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540669680663265320/giphy_4.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540667766986768384/tenor.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540667752038400020/tenor_1.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540670358294888450/tenor_2.gif", "https://cdn.discordapp.com/attachments/540655675622293505/540668313127223317/Liem.jpg"]
const gay = ["https://cdn.discordapp.com/attachments/540655675622293505/540667240123596800/Gay.gif"]
const poke = ["https://cdn.weeb.sh/images/H1x2HxyYD-.gif", "https://cdn.weeb.sh/images/HkxwlkKPb.gif", "https://cdn.weeb.sh/images/rJ0hlsnR-.gif", "https://cdn.weeb.sh/images/B14SJlTQG.gif", "https://cdn.weeb.sh/images/Hk2HekKD-.gif", "https://cdn.weeb.sh/images/SyQzRaFFb.gif", "https://cdn.weeb.sh/images/rkaUe1YPb.gif", "https://cdn.weeb.sh/images/SyJzRTKFW.gif", "https://cdn.weeb.sh/images/rkeaUeJKD-.gif", "https://cdn.weeb.sh/images/SydLxJFwW.gif", "https://cdn.weeb.sh/images/H1fMRpYtb.gif", "https://cdn.weeb.sh/images/rktSlkKvb.gif", "https://cdn.weeb.sh/images/r1v6xoh0Z.gif", "https://cdn.weeb.sh/images/rkB8eJYPZ.gif", "https://cdn.weeb.sh/images/B1oSgytwW.gif", "https://cdn.weeb.sh/images/rJzUe1FwZ.gif", "https://cdn.weeb.sh/images/HJZpLxkKDb.gif", "https://cdn.weeb.sh/images/HkjjLb0rM.gif", "https://cdn.weeb.sh/images/Sk_rl1Kw-.gif"]
const faces = ['(∩ ͠°ل͜ °)⊃━☆','☞ ﾟ ͜ʖ ﾟ☞','ᖗ ◉ ᨓ ◉ ᖘ','ᕦ(ʘᴥʘ)ᕥ','(づ◉ ͜ʖ◉)づ','(づ>﹏<)づ','(☉ ͜ʖ☉)','(ง ò ʖ̯ ó )ง','ʕ ◕ ͜ʖ ◕ ʔ','ᕙ( ☉ Ꮂ ☉ )ᕗ','( ͡° ͜ʖ ͡° )','༼ つ ◕_◕ ༽つ','ಠ_ಠ','(ಥ﹏ಥ)','┬─┬ノ( º _ ºノ)','(▰˘◡˘▰)','╚(ಠ_ಠ)=┐','( ಠ ͜ʖರೃ)','┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴','¯\_(ツ)_/¯','( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)','(ง ﾟ ͜つ ﾟ)ง','( ͡°O ͜ʖ ͡°O)','ヽ༼ຈل͜ຈ༽ﾉ','(͡◔ ͜ʖ ͡◔)','( ͡ ͜ ʖ ͡ )','( ͡°Ĺ̯ ͡° )','( ͡~ ͜ʖ ͡~)','( ͜。 ͡ʖ ͜。)','( ° ͜ʖ͡°)╭∩╮','( ͡~ ͜ʖ ͡°)','ᕕ( ͡° ͜ʖ ͡°)ᕗ','( ͡ _ ͡°)ﾉ⚲ ♫','(╯ຈل͜ຈ) ╯︵ ┻━┻','( ͡° ͜ʖ ͡°)=ε✄','✺◟( ͡° ͜ʖ ͡°)◞✺','(╯ ͝° ͜ʖ͡°)╯︵ ┻━┻','┬━┬ノ(▀̿̿Ĺ̯̿̿▀̿ ̿ノ)','━╤デ╦︻(▀̿̿Ĺ̯̿̿▀̿ ̿)','ᕙ(░ಥ╭͜ʖ╮ಥ░)━☆ﾟ.*･｡ﾟ','（╯°□°）╯︵ ( ͜。 ͡ʖ ͜。)','(∩ ͡ ° ʖ ͡ °) ⊃-(===>','︵‿︵(´ ͡༎ຶ ͜ʖ ͡༎ຶ `)︵‿︵','ヽ༼ ຈل͜ຈ༼ ▀̿̿Ĺ̯̿̿▀̿ ̿༽Ɵ͆ل͜Ɵ͆ ༽ﾉ','̿̿ ̿̿ ̿̿ ̿\'̿\'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿','̿\'̿\'\̵͇̿̿\з=( ͠° ͟ʖ ͡°)=ε/̵͇̿̿/\'̿̿ ̿ ̿ ̿ ̿ ̿'];
const rn = require('random-number')
const moment = require('moment');

function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
}

Client.on('ready', () => {
	console.log('Am back');
	Client.user.setStatus('available')
	Client.user.setPresence({
		game: {
			name: 'Alone',
			type: "PLAYING"
		}
    })
})

Client.on('message', (message)=>{
    if(message.content.startsWith(prefix + "info")){
        let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    const member = message.guild.member(user);

    const embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(user.avatarURL)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField("ID:", `${user.id}`, true)
		.addField("Biệt danh:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		.addField("Ngày tạo:", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Ngày gia nhập:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Bot:", `${user.bot}`, true)
		.addField("Trạng thái:", `${user.presence.status}`, true)
		.addField("Đang chơi game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
		.addField("Có những roles:", member.roles.map(roles => `${roles.name}`).join(', '), true)
		.setFooter(`Soi theo yêu cầu của ${message.author.username}#${message.author.discriminator}`)
        message.channel.send({embed});
    }
    
    if(message.content.startsWith(prefix + "setgame")){
        let args = message.content.slice(prefix.length).trim().split(' ');
        let command1 = args.shift().toLowerCase();
        if(!args[0]) return;
  if(args[0] === 'game') return message.reply('Chơi gì bh?');
  setGame = args.join(" ");
  message.reply(`Đang quẩy \`${args}\`.`);
  Client.user.setGame(`${setGame}`);
    };

    if(message.content.startsWith(prefix + "lenny")){
        let r = rn({
            min: 0,
            max: faces.length - 1,
            integer: true
        });
        let face = faces[r];
        message.delete();
        message.channel.send(face);
    }

    if(message.content.startsWith(prefix + "ping")){
        message.channel.send(`Mạng lag vc: ${Client.ping}ms`);
    }
    if (message.content.startsWith(prefix + "ava")) {
        let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
  let ava = user.displayAvatarURL
  let embed = {
      color:0x2c3e50,
      description:""+user.username+"[link]("+ava+")",
      image:{url:ava}
  }
  message.delete();
  message.channel.send("", {embed});
    }
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();
	if(message.content.startsWith(prefix + "say")) {
		let say = args.join(' ');
		message.delete();
		message.channel.send(say);  
    }
    if (!message.guild) return;
    if (message.content.startsWith(prefix + "vao")){
        if (message.member.voiceChannel){
            message.member.voiceChannel.join()
            .then(voiceConnection => {
                message.channel.send('Đã chui zo');
            })
            .catch(console.log);
        }else{
            message.channel.send('Vào voice trc đi giáo sư :v');
        }
    }

    if(message.content.startsWith(prefix + "cut")){
        if(message.guild.voiceConnection)
        message.guild.voiceConnection.disconnect()
        message.channel.send('Đã té')
    }

    if (!message.guild) return;
    if (message.content.startsWith(prefix + "kick")){
        let user = message.mentions.users.first();
        if (user) {
            let member = message.guild.member(user);
            if (member) {
                member.kick('Optional reason that will display in the audit logs').then(() =>{
                    message.reply(`đã cho ${user.tag} ra đảo thành công`);
                }).catch(err =>{
                    message.reply('Không thể cản phá :<');
                    console.error(err);
                });
            } else {
                message.reply('Nani?');
            }   
        } else {
            message.reply('Chưa chọn đối tượng để ulti!!');
        } 


    }
    if (message.content.startsWith(prefix + "hug")) {
        if (!message.mentions.users.first()) return message.channel.send("Nani ôm không khí hả giáo sư?");
    let r = rn({
        min: 0,
        max: hug.length - 1,
        integer: true
    });
    let image = hug[r];
    let embed = new Discord.RichEmbed()
    .setDescription('**' + message.author + '** đã ôm **' + message.mentions.users.first() + '** :heart:\n')
    .setImage(image)
    .setColor('RANDOM')
    message.delete();
    message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "pat")) {
        if (!message.mentions.users.first()) return message.channel.send("Xoa gì thế giáo sư");
    let r = rn({
        min: 0,
        max: pat.length - 1,
        integer: true
    });
    let image = pat[r];
    let embed = new Discord.RichEmbed()
    .setDescription('**' + message.author + '** xoa đầu **' + message.mentions.users.first() + '** :heart:\n')
    .setImage(image)
    .setColor('RANDOM')
    message.delete();
    message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "liem")) {
        if (!message.mentions.users.first()) return message.channel.send("Liếm nani?");
    let r = rn({
        min: 0,
        max: lick.length - 1,
        integer: true
    });
    let image = lick[r];
    let embed = new Discord.RichEmbed()
    .setDescription('**' + message.author + '** đã liếm **' + message.mentions.users.first() + '** :heart:\n')
    .setImage(image)
    .setColor('RANDOM')
    message.delete();
    message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "bad")) {
        if (!message.mentions.users.first()) return message.channel.send("Giáo sư muốn đập ai?");
    let r = rn({
        min: 0,
        max: bad.length - 1,
        integer: true
    });
    let image = bad[r];
    let embed = new Discord.RichEmbed()
    .setDescription('**' + message.author + '** đập **' + message.mentions.users.first() + '** ngu cmn người' + ' =)))) \n')
    .setImage(image)
    .setColor('RANDOM')
    message.delete();
    message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "tat")) {
        if (!message.mentions.users.first()) return message.channel.send("Táng vomom đứa nào bh??");
    let r = rn({
        min: 0,
        max: tat.length - 1,
        integer: true
    });
    let image = tat[r];
    let embed = new Discord.RichEmbed()
    .setDescription('**' + message.author + '** táng **' + message.mentions.users.first() + '** sml ' + ' =)))) \n')
    .setImage(image)
    .setColor('RANDOM')
    message.delete();
    message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "hon")) {
        if (!message.mentions.users.first()) return message.channel.send("Yêu ai nói ra nào :3");
    let r = rn({
        min: 0,
        max: kiss.length - 1,
        integer: true
    });
    let image = kiss[r];
    let embed = new Discord.RichEmbed()
    .setDescription('**' + message.author + '** đã hun **' + message.mentions.users.first() + '** :heart:\n')
    .setImage(image)
    .setColor('RANDOM')
    message.delete();
    message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "tgr")) {
        let r = rn({
            min: 0,
            max: triggered.length - 1,
            integer: true
        });
        let image = triggered[r];
        let embed = new Discord.RichEmbed()
        .setDescription('**' + message.author + '** đang triggered xD \n')
        .setImage(image)
        .setColor('RANDOM')
        message.delete();
        message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "gaylen")) {
        let r = rn({
            min: 0,
            max: gay.length - 1,
            integer: true
        });
        let image = gay[r];
        let embed = new Discord.RichEmbed()
        .setDescription('** Adu thanh niên' + message.author + '** gáy to vãi lizz xD \n')
        .setImage(image)
        .setColor('RANDOM')
        message.delete();
        message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "kt")) {
        let r = rn({
            min: 0,
            max: triggered.length - 1,
            integer: true
        });
        let image = triggered[r];
        let embed = new Discord.RichEmbed()
        .setDescription('**' + message.author + '** bị triggered bởi **' + message.mentions.users.first() + '** xD \n')
        .setImage(image)
        .setColor('RANDOM')
        message.delete();
        message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "choc")) {
        if (!message.mentions.users.first()) return message.channel.send("Giáo sư tính chọc ai zị :v");
    let r = rn({
        min: 0,
        max: poke.length - 1,
        integer: true
    });
    let image = poke[r];
    let embed = new Discord.RichEmbed()
    .setDescription('**' + message.author + '** đã chọc **' + message.mentions.users.first() + '** :3 \n')
    .setImage(image)
    .setColor('RANDOM')
    message.delete();
    message.channel.send(embed)
    }
});

Client.login(process.env.BOT_TOKEN);
