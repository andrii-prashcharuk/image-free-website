# stage1 - build react app first
FROM node:14.15.4-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# stage 2 - build the final image and copy the react build files
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template

ENV PORT 8080
ENV HOST 0.0.0.0
ENV PROTOCOL http
ENV API_ENDPOINT localhost:3000

COPY --from=build /app/dst /usr/share/nginx/html

EXPOSE 8080
CMD sh -c "envsubst '\$PORT \$API_ENDPOINT \$PROTOCOL' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g \"daemon off;\""
