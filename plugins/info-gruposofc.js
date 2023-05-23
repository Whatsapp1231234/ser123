let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Здравствуйте👋 🏻, присоединяйтесь к официальным группам, чтобы приятно провести время с помощью бота 🌎ХУЛИГАН🌏*

*_➤ :_*
*_1.-_* **

*_2.-_* **

*Grupo de rol*
*_3.-* ** 
`.trim(), wm, media, [['IR ', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
