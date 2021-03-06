FROM node:latest
EXPOSE 8080
WORKDIR /
COPY . .
RUN npm install
RUN npm install -g http-server
CMD ["http-server"]