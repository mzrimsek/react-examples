FROM node:latest

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy dependency definitions
COPY package.json /usr/src/app

# install dependencies
RUN npm install

# copy code needed to run app
COPY . /usr/src/app

# build the app
RUN npm run build

# expose the port for the app's server
EXPOSE 3000

# start the server
CMD ["npm", "start"]