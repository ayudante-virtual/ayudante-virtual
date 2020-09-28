/**
 * Setea una variable, permitiendo usar una expresión lógica.
 * @title Setear variable
 * @category Ayudante Virtual
 * @author Seblaz.
 * @param {string} tipo - user, session, temp, bot
 * @param {string} nombre - El nombre de la variable
 * @param {string} expresion - Expresión para setear el valor de la variable.
 */
const setVariable = async ({tipo, nombre, expresion}) => {
    const valor = eval(expresion)
    if (tipo === 'bot') {
        const original = await bp.kvs.forBot(event.botId).get('global')
        await bp.kvs.forBot(event.botId).set('global', { ...original, [nombre]: valor })
    } else if (valor === 'null' || valor === '' || typeof valor === 'undefined') {
        delete event.state[tipo][nombre]
    } else {
        event.state[tipo][nombre] = valor
    }
}

return setVariable(args)
