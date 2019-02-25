FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm ci
RUN npm install -g serve

# Bundle app source
COPY . .

RUN npm run build
CMD [ "serve", "-s", "build" ]