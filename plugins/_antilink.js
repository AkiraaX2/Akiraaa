
const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

export async function before(m, {conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)

    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        }
        await conn.reply(m.chat, `*≡ Enlace Detectado*
            
𝑁𝑜 𝑎𝑐𝑒𝑝𝑡𝑎𝑚𝑜𝑠 𝑒𝑛𝑙𝑎𝑐𝑒𝑠 𝑑𝑒 𝑜𝑡𝑟𝑜𝑠 𝑔𝑟𝑢𝑝𝑜𝑠 
𝐿𝑜 𝑠𝑖𝑒𝑛𝑡𝑜 *@${m.sender.split('@')[0]}*  𝑠𝑒𝑟𝑎́𝑠 𝑒𝑥𝑝𝑢𝑙𝑠𝑎𝑑𝑜 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜${isBotAdmin ? '' : '\n\n𝑁𝑜 𝑠𝑜𝑦 𝑎𝑑𝑚𝑖𝑛 𝑎𝑠𝑖́ 𝑞𝑢𝑒 𝑛𝑜 𝑡𝑒 𝑝𝑢𝑒𝑑𝑜 𝑒𝑥𝑝𝑢𝑙𝑠𝑎𝑟 :"v'}`, null, { mentions: [m.sender] } )
        if (isBotAdmin && chat.antiLink) {
        	await conn.sendMessage(m.chat, { delete: m.key })
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!chat.antiLink) return //m.reply('')
    }
    return !0
}
