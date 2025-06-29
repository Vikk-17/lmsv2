FROM node:current-alpine3.22

WORKDIR /usr/app/backend

COPY package*.json ./

RUN npm install
# RUN npm run build

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
