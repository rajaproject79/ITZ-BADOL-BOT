const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");
module.exports.config = {
  name: "resend",
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
module.exports.handleEvent = async function ({
  event: e,
  api: a,
  client: t,
  Users: s
}) {
  const n = global.nodemodule.request;
  const o = global.nodemodule.axios;
  const {
    writeFileSync: d,
    createReadStream: r
  } = global.nodemodule["fs-extra"];
  let {
    messageID: g,
    senderID: l,
    threadID: u,
    body: c
  } = e;
  if (!global.logMessage) {
    global.logMessage = new Map();
  }
  if (!global.data.botID) {
    global.data.botID = a.getCurrentUserID();
  }
  const i = global.data.threadData.get(u) || {};
  if ((undefined === i.resend || 0 != i.resend) && l != global.data.botID && ("message_unsend" != e.type && global.logMessage.set(g, {
    msgBody: c,
    attachment: e.attachments
  }), "message_unsend" == e.type)) {
    var m = global.logMessage.get(g);
    if (!m) {
      return;
    }
    let e = await s.getNameUser(l);
    if (null == m.attachment[0]) {
      return a.sendMessage(`★সবাই দেখে নিন👀★\n [ @${e} ] 👈\n ★এই  রোহিঙ্গা  মাত্র এই টেক্সট টা রিমুভ দিছে★👇\n┏━━ [ 𝐁𝐨𝐭-𝐎𝐰𝐧𝐞𝐫 ]━━➣\n┃🌻 𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐁𝐚𝐝𝐚𝐥 𝐕𝐚𝐢.\n┃🌺 𝐁𝐨𝐭- 𝐌𝐨𝐝𝐢𝐟𝐲 [ 𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮___//😈🤬👿 ]\n┗━━━━━━━━━━━━➢\n \"${m.msgBody}\"  `, u);
    }
    {
      let t = 0;
      let s = {
        body: `@${e} \n\n╭──────────────────╮\n\n এই রোহিঙ্গা মাত্র এইটা রিমুভ করছে সবাই দেখে নিন \n\n ╰──────────────────╯\n┏━━ [ 𝐁𝐨𝐭-𝐎𝐰𝐧𝐞𝐫 ]━━➣\n┃🌻 𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐁𝐚𝐝𝐚𝐥 𝐕𝐚𝐢.\n┃🌺 𝐁𝐨𝐭- 𝐌𝐨𝐝𝐢𝐟𝐲 [ 𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮___//😈🤬👿 ]\n┗━━━━━━━━━━━━➢\n${"" != m.msgBody ? `\n\nContent: ${m.msgBody}` : ""}`,
        attachment: [],
        mentions: {
          tag: e,
          id: l
        }
      };
      for (var f of m.attachment) {
        t += 1;
        var h = (await n.get(f.url)).uri.pathname;
        var b = h.substring(h.lastIndexOf(".") + 1);
        var p = __dirname + `/cache/${t}.${b}`;
        var y = (await o.get(f.url, {
          responseType: "arraybuffer"
        })).data;
        d(p, Buffer.from(y, "utf-8"));
        s.attachment.push(r(p));
      }
      a.sendMessage(s, u);
    }
  }
};
module.exports.languages = {
  vi: {
    on: "Bật",
    off: "Tắt",
    successText: "resend thành công"
  },
  en: {
    on: "on",
    off: "off",
    successText: "resend success!"
  }
};
module.exports.run = async function ({
  api: e,
  event: a,
  Threads: t,
  getText: s
}) {
  const {
    threadID: n,
    messageID: o
  } = a;
  let d = (await t.getData(n)).data;
  if (undefined === d.resend || 0 == d.resend) {
    d.resend = true;
  } else {
    d.resend = false;
  }
  await t.setData(n, {
    data: d
  });
  global.data.threadData.set(n, d);
  return e.sendMessage(`${1 == d.resend ? s("on") : s("off")} ${s("successText")}`, n, o);
};
