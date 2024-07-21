let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw `*𝗬𝗔 𝗘𝗥𝗘𝗦 𝗔𝗗𝗠𝗜𝗡 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢 𝗠𝗜 𝗣𝗥𝗢𝗣𝗜𝗘𝗧𝗔𝗥𝗜𝗢(𝗔)*`
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^dameadmin|tenerpoder$/i
handler.rowner = true
handler.botAdmin = true
export default handler