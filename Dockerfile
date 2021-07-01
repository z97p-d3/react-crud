FROM node:12-alpine3.12 as build
WORKDIR  /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:1.19.0-alpine as prod-stage
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","deamon off;"]