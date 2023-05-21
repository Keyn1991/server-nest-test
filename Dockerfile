FROM node:18-alpine

MAINTAINER Dmytro Potapchuk

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

CMD ["node", "dist/main.js"]
