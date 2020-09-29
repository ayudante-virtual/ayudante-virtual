FROM nginx:1.19.2-alpine
RUN apk add certbot-nginx && \
    mkdir /etc/letsencrypt && \
    crontab -l | { cat; echo "0       12      *       *       *       /usr/bin/certbot renew --quiet"; } | crontab -
COPY default.conf /etc/nginx/conf.d/default.conf
