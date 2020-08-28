# Ayudante virtual

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
