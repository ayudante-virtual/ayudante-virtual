/**
 * Guarda el canal de consultas en temp.canal_de_consultas. Si este no
 * fue configurado guarda false.
 * @title Get canal de consultas
 * @category Ayudante Virtual
 * @author Seblaz.
 */
const getCanalDeConsultas = async () => {
    const botData = await bp.kvs.forBot(event.botId).get('global')
    const teamId = event.payload.body.team.id
    if(botData && botData[teamId] && botData[teamId].canal_de_consultas) {
        event.state.temp.canal_de_consultas = botData[teamId].canal_de_consultas
    } else {
        event.state.temp.canal_de_consultas = false
    }
}

return getCanalDeConsultas()
