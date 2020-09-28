/**
 * Envía un mensaje de slack. El canal al que se envía debe ser parte
 * del espacio de trabajo de donde se origina la conversación.
 * @title Enviar mensaje de Slack
 * @category Ayudante Virtual
 * @author Seblaz.
 * @param {string} canal - El canal de slack al que se enviará en mensaje
 * @param {string} mensaje - El mensaje a enviar
 */
const enviarMensaje = async ({canal, mensaje}) => {
    await event.payload.context.client.chat.postMessage({
        text: mensaje,
        token: event.payload.context.botToken,
        channel: canal
    })
}

return enviarMensaje(args)
