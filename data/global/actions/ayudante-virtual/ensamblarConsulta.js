/**
 * Ensambla la consulta para que incluya los archivos adjuntos.
 * @title Ensamblar consulta
 * @category Ayudante Virtual
 * @author Seblaz.
 */
const ensamblarConsulta = async () => {
    // console.log(event.payload && event.payload.payload && event.payload.payload.files)
    event.state.temp.consulta = event.preview //+
        // adjuntos(event.payload.payload && event.payload.payload.files)
    // console.log(event.payload.payload.files)
    // console.log(event.state.temp.consulta)
}

const adjuntos = (archivos) => {
    return archivos ? "\nCon los archivos:\n" +
        archivos.map(archivo => ` • <${archivo.permalink}|${archivo.name}>`)
            .join("\n") : '';
}

return ensamblarConsulta()
