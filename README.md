# Image-Free Website
This project was created to show how powerful web technologies are. All the
graphics here are SVG and HTML elements embedded in the source code what
means they are small and doesn’t required additional requests to the server.
The web page is 100% responsive and looks great on mobile and desktop devices.
The size of the compiled and gziped project is 113KB only!

You can see this project live at [https://prashchar.uk](https://prashchar.uk).

This project consists of 2 parts: **ui** and **api**. You can check them out in the 
corresponding folders of this repository and see how they works.

Message me in [LinkedIn](https://www.linkedin.com/in/prashcharuk) if you have any questions or comments.

## Getting Started

You can build and run each part of the project individually from the **api** or **ui** folders 
(each folder contains the README.md files with the instructions).

If you'd like to run the frontend and backend all together, you can use Docker and run it in a docker container.

### Installing

First, you need to install [Docker](https://docs.docker.com/get-docker/) to your computer.

After the Docker is installed, from the repository's root folder run:

```
docker build -t ifw .
```

## Running the project

To run the built docker container at [http://localhost:3000](http://localhost:3000), run:

```
docker run --env API_KEY={mailgun_api_key} --env DOMAIN={mailgun_domain} --env EMAIL={your_email} --rm -it -p 3000:3000 ifw
```
