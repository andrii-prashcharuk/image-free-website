# Image-Free Website
This project was created to show how powerful web technologies are. All the
graphics here are SVG and HTML elements embedded in the source code what
means they are small and doesn’t required additional requests to the server.
The web page is 100% responsive and looks great on mobile and desktop devices.
The size of the compiled and gziped project is 113KB only!

You can see this project live at [https://prashchar.uk](https://prashchar.uk).

Also you can check out back-end part of this project in this
[repository](https://github.com/monext/image-free-website-server)
to see how it works.

Message me in [LinkedIn](https://www.linkedin.com/in/prashcharuk) if you have any questions or comments.

## Getting Started

To build the project **node.js** and **npm** is required (I used node v14.15.3 and npm v6.14.9).
### Installing

After the node and npm are ready, from the project's root folder run:

```
npm install
```

## Running the project

To start webpack dev server at [http://localhost:8080](http://localhost:8080) run:

```
npm run start
```

To build a minified production bundle:

```
npm run build
```

The build files are located in ```./dst``` folder.

## Running the project's eslint validation check

To run eslint validation check:

```
npm run eslint
```

## Running the project's unit tests

To run unit tests:

```
npm run test
```

To run unit tests with coverage report:

```
npm run test:report
```
