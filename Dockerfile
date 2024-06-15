FROM node:20.14.0
WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet
COPY . .
EXPOSE 8080
CMD [ "npm", "start"]