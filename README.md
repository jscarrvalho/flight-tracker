# Flight Tracker microservice

## This is a simple one-route REST API under 8080 port.

The only route is http://localhost:8080/calculate with POST verb. It receives a body, Content-type: application/json, and 
also returns a json content. Below, there are some examples of requests and their respective request body.

POST http://localhost:8080/calculate<br />
Content-Type: application/json<br />
`[["SFO", "EWR"]]`

POST http://localhost:8080/calculate<br />
Content-Type: application/json<br />
`[["ATL", "EWR"], ["SFO", "ATL"]]`

POST http://localhost:8080/calculate<br />
Content-Type: application/json<br />
`[["IND", "EWR"], ["SFO", "ATL"], ["GSO", "IND"], ["ATL", "GSO"]]`

## Project details

Express web application built only with Javascript and Node.js.<br />
There are just two files: app.js which serves the application and routes/calculate.js witch implements the logic behind 
the endpoint.

This is all you have to know about the project, don't worry about run it, it's dockerized!

## Run

### With docker compose

1 - Download (or clone) the project files and put into a target folder.<br />
2 - Go to the target folder.<br />
3 - Run `docker compose up -d`.<br />
4 - Sends POST requests to http://localhost:8080/calculate with your preferred API plataform (POSTMAN?!).<br />

### OR <br />

### With docker

1 - Download (or clone) the project files and put into a target folder.<br />
2 - Go to the target folder.<br />
3 - Run `docker build -t flight-tracker .`.<br />
4 - Run `docker run -d -it -p 8080:8080 flight-tracker`.<br />
5 - Sends POST requests to http://localhost:8080/calculate with your preferred API plataform (POSTMAN?!).<br />
