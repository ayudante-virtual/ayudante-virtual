const adjuntos = (archivos) => {
    return archivos ? "\nCon los archivos:\n" +
        archivos.map(archivo => ` • <${archivo.permalink}|${archivo.name}>`)
            .join("\n") : '';
}

/**
 * Ensambla la consulta para que incluya los archivos adjuntos.
 * @title Ensamblar consulta
 * @category Ayudante Virtual
 * @author Seblaz.
 */
const ensamblarConsulta = async () => {
    let extra = ''
    if(event.payload.payload && event.payload.payload.files)
        extra = adjuntos(event.payload.payload.files)
    event.state.temp.consulta = (event.preview || '') + extra
}

return ensamblarConsulta()
