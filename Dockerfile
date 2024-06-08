# stage 1 - build react app first
FROM node:18-alpine as ui-build
WORKDIR /app
COPY ui/ ./ui/
WORKDIR /app/ui
RUN npm install
RUN npm run build

# stage 2 - prepare and run node.js server
FROM node:18-alpine as api-build
WORKDIR /app
COPY api/ ./
COPY --from=ui-build /app/ui/dst ./public
RUN npm install

ENV PORT 3000
ENV HOST 0.0.0.0

EXPOSE 3000
CMD [ "npm", "run", "start" ]
