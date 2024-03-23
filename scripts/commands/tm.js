module.exports.config = {
  name: "tm",
  version: "1.0.0",
  permission: 0,
  credits: "BADOL-KHAN",
  prefix: true,
  description: "guide",
  category: "system",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async function ({ api, event }) {
  const axios = require("axios");
  const request = require("request");
  const fs = require("fs");
  const moment = require("moment-timezone");
  var times = moment.tz("Asia/Dhaka").format("hh:mm:ss || D/MM/YYYY");
  var thu = moment.tz("Asia/Dhaka").format("dddd");
  moment.tz("Asia/Dhaka").format("dddd");
  if (thu == "Sunday") thu = "রবিবার";
  if (thu == "Monday") thu = "সোমবার";
  if (thu == "Tuesday") thu = "মঙ্গলবার";
  if (thu == "Wednesday") thu = "বুধবার";
  if (thu == "Thursday") thu = "বৃহস্পতিবার";
  if (thu == "Friday") thu = "শুক্রবার";
  if (thu == "Saturday") thu = "শনিবার";
  var { threadID, messageID, body } = event,
    { PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;
const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
  const timeStart = Date.now();
  const tdung = require("./../../Time/time.json");
  var video = tdung[Math.floor(Math.random() * tdung.length)].trim();
  function vtuanhihi(videoUrl, vtuandz, callback) {
    request(videoUrl)
      .pipe(fs.createWriteStream(__dirname + `/` + vtuandz))
      .on("close", callback);
  }
  if (body.toLowerCase() == "time" || body.toLowerCase() == "Time") {
    let callback = function () {
      return api.sendMessage(
        {
          body: `╭•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╮\n\n==== ╰┈► 𝐀𝐣𝐤𝐞𝐫-𝐓𝐢𝐦𝐞◄┈╯ ====\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n\n┏━━ [ 𝐀𝐣𝐤𝐞𝐫 𝐓𝐢𝐦𝐞 ]━━➣\n┃🌻 𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮\n┃🌺 𝐁𝐝 𝐓𝐢𝐦𝐞 [ ${thu} || ${times} ]\n┗━━━━━━━━━━━━➢\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n┏━━ [ 𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 ]━━➣\n┃🌻  𝐁𝐀𝐃𝐀𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘\n┃🌺 𝐁𝐨𝐭 𝐌𝐨𝐝𝐢𝐟𝐲 𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮 \n┗━━━━━━━━━━━━➢\n\n╰•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╯`,
          attachment: [fs.createReadStream(__dirname + `/photo.jpeg`)],
        },
        event.threadID,
        () => {
          fs.unlinkSync(__dirname + `/photo.jpeg`);
        },
        event.messageID
      );
    };
    vtuanhihi(video, "photo.jpeg", callback);
  }
};

module.exports.run = async ({ api, event, args, Threads }) => {};
