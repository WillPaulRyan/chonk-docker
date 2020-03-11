FROM node:12

WORKDIR /var/www/chonk

COPY package*.json ./

RUN npm install

COPY . .

RUN cd /client && npm install && npm run build

EXPOSE 1337

CMD ["npm", "start"]
