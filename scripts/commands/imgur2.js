module.exports.config = {
  name: "imgur2",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "",
  prefix: true, 
  category: "user", 
  usages: "Link",
  cooldowns: 5,
  dependencies: {
  }
};

module.exports.run = async ({ api, event, args }) => {
  const axios = global.nodemodule['axios'];
  const vid = (
    await axios.get(
      'https://i.imgur.com/hwMA8Bk.jpeg',
      { responseType: 'arraybuffer' }
    )
  ).data;
  const linkanh = event.messageReply.attachments[0].url || args.join(" ");
  if (!linkanh)
    return api.sendMessage('Please give feedback or enter the image or video link', event.threadID, event.messageID);
  try {
    const allPromise = (await Promise.all(event.messageReply.attachments.map(item => axios.get(`https://raw.githubusercontent.com/MR-NAYAN-404/NAYAN-BOT/main/api.json}`)))).map(item => item.data.uploaded.image);

   
    return api.sendMessage({
      body: `𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐂𝐫𝐞𝐚𝐭𝐞d 𝐘𝐨𝐮𝐫 𝐈𝐦𝐠𝐮𝐫 𝐏𝐨𝐫𝐭 𝐋𝐢𝐧𝐤✨🌺\n\n` + allPromise.join('"\n"'),
      attachment: vid
    }, event.threadID, event.messageID);
  } catch (e) {
    return api.sendMessage('An error occurred while executing the command', event.threadID, event.messageID);
  }
};
