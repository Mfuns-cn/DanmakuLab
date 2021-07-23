FROM nginx:alpine
COPY . /www
ADD config/default.conf /etc/nginx/conf.d/
