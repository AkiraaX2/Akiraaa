let handler = async (m, { conn }) => {
m.reply(global.eventos)}
handler.help = ['eventos']
handler.tags = ['Futabu Club']
handler.command = /^(evento|eventos|eventofutabuclub)$/i
handler.group = true
export default handler

global.eventos = `Nada aún!`
