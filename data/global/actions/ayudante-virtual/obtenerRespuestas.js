const axios = require('axios')

/**
 * Obtiene la respuesta a una pregunta.
 * @title Obtener respuestas
 * @category Ayudante Virtual
 * @author Seblaz.
 * @param {string} busqueda - El texto a buscar
 */
const obtenerRespuestas = async (busqueda) => {
    // await bp.dialog.deleteSession(bp.dialog.createId(event))
    const respuestas = await axios.get('http://buscador:5000/v1/consultas', {
        params: {
            busqueda: busqueda
        }
    })

    event.state.temp.respuestas = respuestas.data
        .map(respuesta => `<${respuesta.link}>`)
        .join('\n')
}

return obtenerRespuestas(args.busqueda)
