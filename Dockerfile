# pull official base image
FROM node:14.15.3-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./
RUN npm install

# add app
COPY . ./

# start app
EXPOSE 3000
CMD [ "npm", "run", "start" ]
#RUN npm run start
