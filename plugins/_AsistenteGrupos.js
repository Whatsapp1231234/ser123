let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender


if (/^buen día|buen dia|hola|^Buenos días|qué tal|𝐇𝐨𝐥𝐚$/i.test(m.text) && chat.asistente && !chat.isBanned) {
    let text = 	`Hola @${who.split("@s.whatsapp.net")[0]} en un momento te respondemos...
    por el momento te dejaré las preguntas básicas....
    ¿Todo bien todo correcto?`
    await conn.reply(m.chat, text, m, { mentions: this.parseMention(text) })
    }
if (/^Quién eres?$/i.test(m.text) && chat.asistente && !chat.isBanned) {
  m.reply(`	K.I.R.R. la inteligencia artificial programada por Rey Endymion`)
} 
if (/^Lenin|^creador$/i.test(m.text) && chat.asistente && !chat.isBanned) {
    let text = `Rey Endymion, @${who.split("@s.whatsapp.net")[0]}...
      
    Gracias por comunicarte con 🌎ANI MX SCANS🌏. ¿Cómo podemos ayudarte?
      
    Presenté.... (Pero sólo en espíritu) lo siento no puedo responder en este momento`
    await conn.reply(m.chat, text, m, { mentions: this.parseMention(text) })
    }     
    
if (/^cómo te llamas?$/i.test(m.text) && chat.asistente && !chat.isBanned) {
  m.reply(`K.I.R.R. (Knigth Intelligence Revolutionary on the Road)`)
} 

if (/^cómo estás|^cómo estás?|^como estas$/i.test(m.text) && chat.asistente && !chat.isBanned) {
  let text = `Todo bien|^y tú @${who.split("@s.whatsapp.net")[0]}?... 
Por cierto soy un asistente virtual en este grupo|^para más detalles invoca a un administrador diferente`
await conn.reply(m.chat, text, m, { mentions: this.parseMention(text) })
} 
if (/Otakus Together$/i.test(m.text) && chat.asistente && !chat.isBanned) {
  m.reply(``)
} 
if (/Otakus TogetherS$/i.test(m.text) && chat.asistente && !chat.isBanned) {
  m.reply(``)
} 
if (/^otakus forever$/i.test(m.text) && chat.asistente && !chat.isBanned) {
  m.reply(``)
} 
if (/nombre del grupo de sailor moon$/i.test(m.text) && chat.asistente && !chat.isBanned) {
  m.reply(``)
} 
if (/muestra el grupo de aportes$/i.test(m.text) && chat.asistente && !chat.isBanned) {
  m.reply(`Se les invita al grupo de aportes de

*`)
} 
if (/grupo de aportes forever$/i.test(m.text) && chat.asistente && !chat.isBanned) {
  m.reply(`Este es el grupo de aportes de



*Permitido*✅

✅ AMV
✅MÚSICA
✅LIBROS (PDF)
✅ANIME
✅ PELÍCULAS
✅ IMÁGENES O EDITS
 ⚜️Hay Grupo solo para Hentai⚜️

⚠️Si te sales del grupo principal|^te eliminaremos de aquí⚠️`)
}
if (/^haz la presentación de este calabozo de muertos|^calabozo de los muertos$/i.test(m.text) && chat.asistente && !chat.isBanned) {
  m.reply(`En este grupo para los que se han agregado deberán de hacer *30 MENSAJES* los cuáles pueden ser spam de stickers o spam de texto

Se prohíbe completamente los link de invitación de otros grupos ya que serán eliminados automáticamente sin derecho a regresar o a ser ingresados al grupo principal

Para el resto es necesario que completen la cuota antes del jueves de cada semana para evitar ser eliminados si su contador es completamente cero (0)

No serán eliminados sí por lo menos tienen un solo mensaje en toda la semana ya que eso da señales de vida en sus respectivos números`)
}
if (/contador 0$/i.test(m.text) && chat.asistente && !chat.isBanned) {
  m.reply(`	se mandan por inactivos al grupo muertos para reciclar 👺👎🏼`)
} 
if (/Reglas de otakus forever anti$/i.test(m.text) && chat.asistente && !chat.isBanned) {
  m.reply(`Bienvenidos a 
*ㄖㄒ卂Ҡ凵丂  千ㄖ尺乇ᐯ乇尺*
*(Antibinarios)*



`)
} 
if (/enlace de invitación|link|enlace del grupo$/i.test(m.text) && chat.asistente && !chat.isBanned) {
  let text = `Solo tienes dos opciones para llegar al grupo principal @${who.split("@s.whatsapp.net")[0]}

o

 *вау*:

**Это что такое еще**`
await conn.reply(m.chat, text, m, { mentions: this.parseMention(text) })
}    
/*if (/^.jadibot|^*jadibot|^#jadibot|^/jadibot|^serbot$/i.test(m.text) && chat.asistente && !chat.isBanned) {
  let text = `👺 @${who.split("@s.whatsapp.net")[0]}
el bot de otakus Together es esclusivo del grupo homónimo

No sé puede volver a iniciar sesión con QR`
await conn.reply(m.chat, text, m, { mentions: this.parseMention(text) })
}
if (/^s|^sticker$/i.test(m.text) && chat.asistente && !chat.isBanned) {
  m.reply(`👺
te saco Este pero tienes que configurar el chat con los mensajes temporales para que se borren cada 24 horas`)
} */     
return !0
}
export default handler
