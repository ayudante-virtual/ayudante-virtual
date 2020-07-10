# Ayudante virtual

### Prerequisitos
 - wget
 - unzip

### Instalación

    ./install.sh

### Iniciar

    src/bp

### Obtener y pushear cambios

    botpress pull --url <url> --token <auth_token> --targetDir <remote_data_path>
    
    botpress push --url <url> --token <auth_token> --sourceDir <local_data_path>

Ver más en [botpress.com/docs/advanced/versions](https://botpress.com/docs/advanced/versions).
