/**
 * Borra las variables temporales
 * @title Borrar variables temporales
 * @category Ayudante Virtual
 * @author Seblaz.
 */
const borrarVariablesTemporales = async () => {
    event.state.temp = {}
    event.state.session.slots = {}
}

return borrarVariablesTemporales()
