FROM node:8.11.1

RUN mkdir /vehicle-overview

WORKDIR /vehicle-overview

COPY package*.json /vehicle-overview

RUN npm install

COPY . /vehicle-overview

EXPOSE 8000

CMD ["npm", "start"]