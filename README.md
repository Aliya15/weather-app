# weather-app
weather-app is a simple app designed to help developers create new apps quickly. It includes NGRX, Prettier, ESLint rules, Docker (Dockerfile, docker-compose.yml), and scripts for building the app.

## Prerequisites
Before you can use the weather-app, you will need to have the following software installed on your machine:

- Node.js v14.17 or higher
- npm v7.20 or higher

## Installing
To install the weather-app, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` to install the required dependencies.

## Running the app locally
To run the weather-app, follow these steps:

1. Navigate to the project directory.
2. Run `npm run serve` to start the app.
3. Open your browser and go to http://localhost:4200.

## Build
To build the weather-app, follow these steps:

1. Navigate to the project directory.
2. Run npm run build to build the app.
3. The build artifacts will be stored in the `dist/weatherapp` directory.

## Running the unit tests
To run the automated tests for the weather-app, follow these steps:

1. Navigate to the project directory.
2. Run `npm test` to run the tests.

### Lint
The coding style tests ensure that the code meets the ESLint rules that have been configured for the project.

## Deployment
To deploy the weather-app to a production environment, follow these steps:

### Simple

1. Build the app using `npm run build`.
2. Deploy the `dist/weatherapp` directory to your production environment.

### Deploying using Docker locally

1. Run `build.sh` script, which will:
    - Run the docker build
    - Create images with tags `latest` and version mentioned in `package.json`
2. Run `docker-compose up -d` and the application will be available on http://localhost:80

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
