FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN mkdir /mnt/halo

COPY . .

CMD ["node", "index.js" ]

EXPOSE 3000