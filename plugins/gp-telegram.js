let handler = async (m, { conn }) => {
m.reply(global.telegram)}
handler.help = ['telegram']
handler.tags = ['Futabu Club']
handler.command = /^(telegram|grupodetelegram|linktelegram)$/i
handle.group = true
export default handler

global.telegram = `Nuestro grupo de Telegram!
Link: https://t.me/FutabuClub`
