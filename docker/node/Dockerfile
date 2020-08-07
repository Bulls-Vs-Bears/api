FROM node:14

WORKDIR /var/www/app/api

# required for bycrpt to work in node container
RUN npm uninstall bcrypt
RUN npm install --save bcrypt