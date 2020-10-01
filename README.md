# Ayudante virtual

Bot de Slack que sirve como ayudante virtual para realizar consultas que no pueden ser compartidas en canales públicos.

### Prerequisitos
 - [Docker](https://www.docker.com/)

### Iniciar

    $ docker-compose up -d

Se inicia botpress en [localhost:3000](http://localhost:3000).

### Permisos de Slack

El bot requiere de los siguientes permisos de slack para funcionar correctamente:

 - `users:read`: permite saludar a los alumnos.
 - `im:history`: permite leer las consultas enviadas al ayudante.
 - `chat:write`: permite responder consultas y tener una conversación con el bot.

### Reporte de problemas

Por favor reportar cualquier problema encontrado en la sección de [issues](https://github.com/ayudante-virtual/ayudante-virtual/issues).

### Privacidad

El Ayudante Virtual no guarda ni envía ningún tipo de información sobre los mensajes o miembros de los espacios de trabajo fuera de Slack. Lo único que es necesario guardar son los ids de los canales configurados para recibir las consultas. Dicha información no es divulgada con ninguna entidad.

### Licencia

El Ayudante Virtual adhiere a la licencia [MIT](LICENSE.txt).
