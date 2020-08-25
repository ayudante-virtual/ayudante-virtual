# Ayudante virtual

### Prerequisitos
 - [Docker](https://www.docker.com/)

### Iniciar

    $ docker-compose up -d

Se inicia botpress en [localhost:3000](http://localhost:3000).

### Obtener cambios

    $ docker-compose exec botpress ./bp pull --token <auth_token> --targetDir out

Ver más en [botpress.com/docs/advanced/versions](https://botpress.com/docs/advanced/versions).
