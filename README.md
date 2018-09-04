# Image-Free Website Server
NodeJS Server for [Image Free Website](https://github.com/monext/image-free-website).

## Getting Started

To run the project **node.js** and **npm** is required (I used node v8.9.2 and npm v6.4.0).

Also it uses [mailgun](https://www.mailgun.com/) API for sending email, so you should have **api key** and **domain**.

### Installing

After node and npm are ready, navigate to ```./src``` folder and run:

```
npm install
```

## Running the server

To start webpack dev server at [http://0.0.0.0:3000](http://0.0.0.0:3000) run:

```
API_KEY=YOUR_MAILGUN_API_KEY DOMAIN=YOUR_DOMAIN EMAIL=your@email.com npm run start
```

## Running the project's eslint validation check

To run eslint validation check:

```
npm run eslint
```