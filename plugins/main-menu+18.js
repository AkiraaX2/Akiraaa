
let handler = async function (m, { conn, text, usedPrefix }) {

let m2 = `
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
`
    let pp = './src/Menu.jpg' 
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rcanal)

}

handler.help = ['menu2']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler