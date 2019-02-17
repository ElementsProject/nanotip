FROM node:carbon
WORKDIR /opt/nanotip
COPY . .
RUN npm install
ENV HOST=0.0.0.0
EXPOSE 9115
CMD node ./nanotip
