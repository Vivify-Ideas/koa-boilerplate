# Evidentist API

Awesome NodeJS API

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

* [NodeJS(v7.6+)](https://nodejs.org/en/)
* [MongoDB(v4.0.4)](https://www.mongodb.com/)
* [Docker](https://www.docker.com/)


### Installing

A step by step series of examples that tell you how to get a development env running

Install all dependencies

```
npm i
```

Make `.env` file based on `.env.example` provided

```
cp .env.example .env
```

Start Docker MongoDB container
```
docker run -p 27017:27017 --name my-mongo -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=example -v ${PWD}:/data/db mongo:4.0.4
```

## Running

Start app
```
npm run start
```

Start app with code changes detection (Nodemon)
```
npm run start:watch
```

## Deployment

TODO: Add additional notes about how to deploy this on a live system

## Built With

* [KoaJS](https://koajs.com/) - Next generation web framework for NodeJS
