/**
 * Cambia el canal de consultas.
 * @title Cambiar canal de consultas
 * @category Ayudante Virtual
 * @author Seblaz.
 */
const cambiarCanalDeConsultas = async () => {
    const canal = event.nlu.slots.canal_de_consulta.value.substring(1)
    const mensaje = 'Gracias por configurar el ayudante virtual! Las consultas se recibirán aquí.'

    event.state.temp.canal_no_encontrado = false
    try {
        await event.payload.context.client.chat.postMessage({
            text: mensaje,
            token: event.payload.context.botToken,
            channel: canal
        })
    } catch (e) {
        if(e.message.includes('channel_not_found'))
            event.state.temp.canal_no_encontrado = true
        else
            throw e
    }

    const original = await bp.kvs.forBot(event.botId).get('global') || {}
    const nuevo = {
        ...original[event.payload.payload.team] || {},
        canal_de_consultas: canal
    }
    await bp.kvs.forBot(event.botId).set('global', { ...original, [event.payload.payload.team]: nuevo })
}

return cambiarCanalDeConsultas()
