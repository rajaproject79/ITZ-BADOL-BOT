module.exports.config = {
    name: "add",
    version: "1.0.0",
    permssion: 2,
    credits: "BADOL-KHAN",
    description: "Thêm người dùng vào nhóm bằng link hoặc UID",
  prefix: true,
    category: "Box chat",
    usages: "< link/UID >",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Threads, Users }) {
const { threadID, messageID } = event;
const axios = require('axios')
const link = args.join(" ")
if(!args[0]) return api.sendMessage('❓যাকে এড দিবেন তার Uid দিয়ে ট্রাই করেন☑️', threadID, messageID);
var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
if(link.indexOf(".com/")!==-1) {
    const res = await axios.get(`https://golike.com.vn/func-api.php?user=${link}`);
    var uidUser = res.data.data.uid
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`⚠️ বস এই মুরগি চোরটা গ্রুপেই আছে ☑️`, threadID, messageID);
    if (err) return api.sendMessage(` ⚠️ নোলা মার্ক আইডি এড দেইনা❌`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`⚠️ব্রাউজার তালিকায় সফল ব্যবহারকারীদের যোগ করুন❓`, threadID, messageID);
    else return api.sendMessage(`⚠️ বস আপনার আদেশে একজন মুরগি চোরকে গ্রুপে এড করা হলো🥴 `, threadID, messageID);
    });
    }
  else { 
    var uidUser = args[0] 
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`⚠️ বস এই মুরগি চোরটা গ্রুপেই আছে ☑️`, threadID, messageID);
    if (err) return api.sendMessage(`⚠️ নোলা মার্ক আইডি এড দেইনা❌`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`⚠️ব্রাউজার তালিকায় সফল ব্যবহারকারীদের যোগ করুন❓`, threadID, messageID);
    else return api.sendMessage(`⚠️বস আপনার আদেশে একজন মুরগি চোরকে গ্রুপে এড করা হলো🥴 `, threadID, messageID);
    });
  }
}
