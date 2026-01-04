FROM nginx:alpine
 
WORKDIR /usr/share/nginx/html 

COPY login.html .
COPY register.html .
COPY index.html .
COPY script.js .
COPY login.js .
COPY register.js .
COPY style.css .
 
EXPOSE 80 
