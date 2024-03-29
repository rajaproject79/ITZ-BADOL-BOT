const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");
module.exports.config = {
  name: "👯‍♂️",
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

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Tore biya kormu")==0 || event.body.indexOf("তোমারো বিয়া করবো")==0 ||  event.body.indexOf("Tomare biya korbo")==0) {
		var msg = {
				body: "┏━━ [  𝐁𝐨𝐭-𝐎𝐰𝐧𝐞𝐫 ]━━➣\n┃🌻 𝐁𝐚𝐝𝐚𝐥-𝐂𝐡𝐨𝐰𝐝𝐡𝐮𝐫𝐲__//😈🤬👿\n┃🌻 𝐁𝐨𝐭-𝐌𝐨𝐝𝐢𝐟𝐲 [ 𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮__//😈🤬👿 ]\n┗━━━━━━━━━━━━➢",
				attachment: fs.createReadStream(__dirname + `/BADOL-KHAN/biya.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🆗", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
