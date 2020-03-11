FROM node:12

WORKDIR /var/www/chonk

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1337

CMD ["npm", "start"]
