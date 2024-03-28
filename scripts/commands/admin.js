const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");
module.exports.config = {
  name: "admin2",
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
 
module.exports.languages = {
 
    "en": {
        "listAdmin": '╭•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╮\n\n•═════•𝙊𝙒𝙉𝙀𝙍-𝙇𝙄𝙎𝙏•═════•\n\n╰┈►MOHAMMAD BADAL CHOWDHURY\n\n╰┈►Raja Babu _____// ;* :/ 3:) \n\n╰┈►𝐌𝐑 𝐁𝐎𝐒𝐒_____///②⓿⓶❸ :* 3:) :) \n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n•═══•𝙈𝙊𝘿𝙀𝙍𝘼𝙏𝙊𝙍-𝙇𝙄𝙎𝙏•═══•\n\n%1 \n•═════•𝙎𝙄𝙇𝙀𝙏-𝘼𝙇𝙇•══════•\n\n╰•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╯',
        "notHavePermssion": '[Admin] You have no permission to use "%1"',
        "addedNewAdmin": '[Admin] Added %1 𝙈𝙊𝘿𝙀𝙍𝘼𝙏𝙊𝙍 :\n\n%2',
        "removedAdmin": '[Admin] Remove %1 𝙈𝙊𝘿𝙀𝙍𝘼𝙏𝙊𝙍 :\n\n%2',
      "listId":'•═════•UID•═════•\n%1\n•═════•LIST•═════•'
    }
}
 
module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    const content = args.slice(1, args.length);
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);
    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);
 
 
    switch (args[0]) {
        case "list":
        case "all":
        case "ls": {
            const listAdmin = ADMINBOT || config.ADMINBOT || [];
            var msg = [];
 
            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                    const name = await Users.getNameUser(idAdmin);
                    msg.push(`╰┈►${name}`);
                }
            }
 
            return api.sendMessage(getText("listAdmin", msg.join("\n")), threadID, messageID);
        }
        case "id":
      case "uid":
      case "ids": {
            const listAdmin = ADMINBOT || config.ADMINBOT || [];
            var msg = [];
 
            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                    const name = await Users.getNameUser(idAdmin);
                    msg.push(`» UID${idAdmin}`);
                }
            }
 
            return api.sendMessage(getText("listId", msg.join("\n")), threadID, messageID);
