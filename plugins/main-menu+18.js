//import db from '../lib/database.js'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
//import { plugins } from '../lib/plugins.js'
let tags = {
  '': '',
}
const defaultMenu = {
  before: `

┌「🍒 *𝙂 𝙀 𝙉 𝙀 𝙎 𝙄 𝙎  𝘽 𝙊 𝙏* 🍒」
│◦╭─────────────
│◦┊🍒 𝙃𝙤𝙡𝙖 %name
│◦┊⏳ 𝙏𝙞𝙚𝙢𝙥𝙤 𝘼𝙘𝙩: %muptime %sbot
│◦┊📊 𝙁𝙚𝙘𝙝𝙖: %date
│◦┊📈 𝙐𝙨𝙪𝙖𝙧𝙞𝙤𝙨: %rtotalreg
│◦┊🫅 𝘾𝙧𝙚𝙖𝙙𝙤𝙧: 
│◦┊wa.me/59168683798  
│◦╰─────────────
╰────────────────┈⊷

≡ Use estos comandos sin el prefijo: *${usedPrefix}*
┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🔥𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 +18🔥 」
┃╭───────⧟⭑⧟───────•
┃┊🔥.𝘗𝘢𝘤𝘬
┃┊🔥.𝘗𝘢𝘤𝘬2
┃┊🔥.𝘗𝘢𝘤𝘬3
┃┊🔥.𝘝𝘪𝘥𝘦𝘰𝘹𝘹𝘹
┃┊🔥.𝘝𝘪𝘥𝘦𝘰𝘭𝘦𝘴𝘣𝘪𝘹𝘹𝘹
┃┊🔥.𝘛𝘦𝘵𝘢𝘴
┃┊🔥.𝘉𝘰𝘰𝘵𝘺
┃┊🔥.𝘌𝘤𝘤𝘩𝘪
┃┊🔥.𝘍𝘶𝘳𝘳𝘰
┃┊🔥.𝘐𝘮𝘢𝘨𝘦𝘯𝘭𝘦𝘴𝘣𝘪𝘢𝘯𝘴
┃┊🔥.𝘗𝘢𝘯𝘵𝘪𝘦𝘴
┃┊🔥.𝘗𝘦𝘯𝘦
┃┊🔥.𝘗𝘰𝘳𝘯𝘰
┃┊🔥.𝘙𝘢𝘯𝘥𝘰𝘮𝘹𝘹𝘹
┃┊🔥.𝘗𝘦𝘤𝘩𝘰𝘴
┃┊🔥.𝘠𝘢𝘰𝘪
┃┊🔥.𝘠𝘢𝘰𝘪2
┃┊🔥.𝘠𝘶𝘳𝘪
┃┊🔥.𝘠𝘶𝘳𝘪2
┃┊🔥.𝘛𝘳𝘢𝘱𝘪𝘵𝘰
┃┊🔥.𝘏𝘦𝘯𝘵𝘢𝘪
┃┊🔥.𝘕𝘴𝘧𝘸𝘭𝘰𝘭𝘪
┃┊🔥.𝘕𝘴𝘧𝘸𝘰𝘳𝘨𝘺
┃┊🔥.𝘕𝘴𝘧𝘸𝘧𝘰𝘰𝘵
┃┊🔥.𝘕𝘴𝘧𝘸𝘢𝘴𝘴
┃┊🔥.𝘕𝘴𝘧𝘸𝘣𝘥𝘴𝘮
┃┊🔥.𝘕𝘴𝘧𝘸𝘤𝘶𝘮
┃┊🔥.𝘕𝘴𝘧𝘸𝘦𝘳𝘰
┃┊🔥.𝘕𝘴𝘧𝘸𝘧𝘦𝘮𝘥𝘰𝘮
┃┊🔥.𝘕𝘴𝘧𝘸𝘨𝘭𝘢𝘴𝘴
┃┊🔥.𝘏𝘦𝘯𝘵𝘢𝘪𝘱𝘥𝘧 *<𝘵𝘦𝘹𝘵𝘰>*
┃┊🔥.𝘏𝘦𝘯𝘵𝘢𝘪𝘴𝘦𝘢𝘳𝘤𝘩 *<𝘵𝘦𝘹𝘵𝘰>*
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛
`.trimStart(),
  header: '╭────────────────┈⊷\n│◦ *%category*\n╰┬───────────────┈⊷\n┌┤',
  body: '┊◦ _*%cmd*_ %isdiamond %isPremium',
  footer: '╰────────────────┈⊷\n',
  after: `
`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, diamond, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        diamond: plugin.diamond,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `⭐ Powered by FG98 https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      sbot: (conn.user.jid == global.conn.user.jid ? '' : `\n▢ ✨ *Sub-Bot de:*\nwa.me/${global.conn.user.jid.split`@`[0]}`), 
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, diamond, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

    let pp = './src/Menu.jpg'

    /*conn.sendButton(m.chat, text.trim(), `▢ DyLux  ┃ ᴮᴼᵀ\n${mssg.ig}`, pp, [
      ['ꨄ︎ Apoyar', `${_p}donate`],
      ['⏍ Info', `${_p}botinfo`],
      ['⌬ Grupos', `${_p}gpdylux`]
    ], m, rpl)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', text.trim(), m, null, rcanal)
    m.react('🍒') 

  } catch (e) {
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error', m)
    throw e
  }
}
//handler.help = ['menu+18']
//handler.tags = ['main']
handler.command = ['menu+18','labiblia'] 
handler.register = false

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm '].map(v => v.toString().padStart(2, 0)).join('')
}

  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;