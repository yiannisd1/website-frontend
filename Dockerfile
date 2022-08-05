FROM node:12.18.1

WORKDIR /app

# Install app dependencies
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install
# Bundle app source

COPY . .

CMD [ "npm", "start" ]
