# Image-Free Website Server
NodeJS Server for [Image Free Website](https://github.com/monext/image-free-website).

## Getting Started

To run the project **node.js** and **npm** is required (I used node v14.15.3 and npm v6.14.9).

Also, it uses [mailgun](https://www.mailgun.com/) API for sending email, so you should have **api key** and **domain**.

### Installing

After node and npm are ready, from the project's root folder run:

```
npm install
```

## Running the server

To start webpack dev server at [http://localhost:3000](http://localhost:3000) run:

```
API_KEY=YOUR_MAILGUN_API_KEY DOMAIN=YOUR_DOMAIN EMAIL=your@email.com npm run start
```

## Running the project's eslint validation check

To run eslint validation check:

```
npm run eslint
```
