# stage1 - build react app first
FROM node:14.15.4-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# stage 2 - build the final image and copy the react build files
FROM nginx:1.19.6-alpine
COPY --from=build /app/dst /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
