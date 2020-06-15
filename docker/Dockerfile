#FROM node:lts-alpine3.9 as node
#WORKDIR /app
#COPY package.json yarn.lock /app/
#RUN yarn global add @angular/cli@9.1.1
#RUN cd /app && yarn install
#COPY .  /app
#
#RUN cd /app && yarn build
#
#FROM nginx:1.17.10-alpine
#
#COPY config/nginx.conf /etc/nginx/nginx.conf
#COPY --from=node /app/dist /usr/share/nginx/html


FROM nginx:1.17.10-alpine

COPY config/nginx.conf /etc/nginx/nginx.conf
COPY /dist /usr/share/nginx/html

#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

