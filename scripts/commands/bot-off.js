module.exports.config = {
	name: "off",
    version: "1.0.1",
    permission: 2,
    credits: "BADOL-KHAN",
    prefix: true,
    description: "ask any thing",
    category: "admin",
    usages: "",
    cooldowns: 5,
    dependencies: {
        "openai": ""
    }
};
module.exports.run = ({event, api}) =>api.sendMessage("★ আসসালামু-আলাইকুম আল্লাহ হাফেজ★\n ┏━━ [  𝐁𝐨𝐭-𝐎𝐰𝐧𝐞𝐫 ]━━➣\n┃🌻 𝐁𝐚𝐝𝐚𝐥-𝐂𝐡𝐨𝐰𝐝𝐡𝐮𝐫𝐲__//😈🤬👿\n┃🌻 𝐁𝐨𝐭-𝐌𝐨𝐝𝐢𝐟𝐲 [ 𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮__//😈🤬👿 ]\n┗━━━━━━━━━━━━➢",event.threadID, () =>process.exit(0))
