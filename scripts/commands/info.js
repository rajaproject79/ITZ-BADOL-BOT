const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");
module.exports.config = {
  name: "inf",
  version: "1.0.2",
  permission: 0,
  credits: "BADOL-KHAN",
  description: "beginner's guide",
  prefix: true,
  category: "guide",
  usages: "[Shows Commands]",
  cooldowns: 5,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 60
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/h8hEa16.jpeg", 
            
            "https://i.imgur.com/08CMMfS.jpeg", 
            
            "https://i.imgur.com/n6LfLwX.jpeg",

"",
            
            ""];
  
var callback = () => api.sendMessage({body:`\n ┏━━ [ 𝐁𝐎𝐓-𝐈𝐍𝐅𝐎 ]━━➣\n┃🌻 𝐎𝐖𝐍𝐄𝐑 𝐑𝐀𝐉𝐀-𝐁𝐀𝐁𝐔\n┃🌺 𝐁𝐝 𝐓𝐢𝐦𝐞 [  ]\n┗━━━━━━━━━━━━➢ 
★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★

╭────────────────────────➤➤➤
 !
 !➤𝐁𝐨𝐭-𝐍𝐚𝐦𝐞- ${global.config.BOTNAME}
 !
 !➤𝐁𝐨𝐭-𝐏𝐫𝐞𝐟𝐢𝐱- [ ${global.config.BOTNAME} ]
 !
 !➤𝐁𝐨𝐭-𝐓𝐢𝐧𝐞- [ ${juswa} ]
 !
 !➤𝐁𝐨𝐭-𝐑𝐚𝐧𝐢𝐧𝐠-𝐓𝐢𝐧𝐞-  
 !
 !➤𝐁𝐨𝐭-𝐎𝐰𝐧𝐞𝐫-𝐀𝐧𝐝-𝐀𝐝𝐦𝐢𝐧-𝐂𝐨𝐧𝐭𝐚𝐜𝐭👇👇
 !
 !➤m.me/100007070042228
 !
 !➤m.me/RAJA.BABU.TERA.REAL.ABBU.OK.07
 !
 !➤wa.me/+8801782721761
 !
╰─────────────────────────➤➤➤\n\n★★★▰▱▰▱▰▱▰▰▱▰▱▰▱▰▱▰▱▰★★★\n\n┏━━ [ 𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑 ]━━➣\n┃🌻 𝐁𝐀𝐃𝐀𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘\n┃🌺  𝐌𝐎𝐃𝐈𝐅𝐘 [ 𝐑𝐀𝐉𝐀-𝐁𝐀𝐁𝐔 ]\n┗━━━━━━━━━━━━➢

`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
