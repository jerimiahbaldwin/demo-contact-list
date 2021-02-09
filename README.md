<!-- ABOUT THE PROJECT -->
## About The Project
This simple project provides CRUD methods for a contacts database.

### Built With

The following are the major frameworks used in building this project:
* [Docker](https://www.docker.com/get-started)
* [Express](https://expressjs.com/)
* [MySql](https://www.mysql.com/)
* [Sequelize](https://sequelize.org/)

## Getting Started
You will need to have the following software installed before starting the project:
* Docker
* Docker Compose

### Installation
* Copy and modify the environment file:
```cp .env.sample .env```
* Start Docker services:
```make up```
* Run Sequelize migrations:
```make migrate```
* Test the API calls found in /example.rest:
