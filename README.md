# STUDIO GHIBLI SERVICE

[![Build Status](https://travis-ci.com/malaquiasdev/studio-ghibli-service.svg?branch=master)](https://travis-ci.com/malaquiasdev/studio-ghibli-service)
[![Coverage Status](https://coveralls.io/repos/github/malaquiasdev/studio-ghibli-service/badge.svg?branch=master)](https://coveralls.io/github/malaquiasdev/studio-ghibli-service?branch=master)

<p align="left">
  <img width="832" height="auto" src=".github/logo.png"/>
</p>

This is a Serverless Project with Node.js API with a scrapy module to fetch data from: imdb, rottentomatoes and metacritic.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You must have an AWS Credentials
- Configure the [AWS CLI](https://aws.amazon.com/pt/cli/)
- You have installed the [Node.js](https://nodejs.org/en/)
- You have installed the [Serverless Framework](https://serverless.com)

## AWS services that we use

- AWS CloudFormation
- AWS CloudFront
- AWS API Gateway
- AWS Lambda
- AWS DynamoDB

## Installing and execute with NPM

1. Clone this repository. `$ git clone https://github.com/malaquiasdev/studio-ghibli-service.git`
2. Go to the project folder. `$ cd studio-ghibli-service`
3. Copy the **.env.example** file and create an **.env** file with your AWS Credentials.
4. Install the dependencies. `$ npm install`
5. Run offline. `$ npm run dev`

## API Documentation

1. Access the api doc in: `https://malaquiasdev.github.io/studio-ghibli-service/`

## Contributing

1. Fork this repository.
2. Create a branch: `$ git checkout -b <branch_name>`.
3. Make your changes.
4. Run the test suite: `$ npm run test`
5. Run the linter suite: `$ npm run lint`
6. Fix the test and linter errors if exists.
7. Commit your changes: `$ git commit -m '<commit_message>'`
8. Push to the original branch: `$ git push origin studio-ghibli-service/<branch_name>`
9. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors

Thanks to the following people who have contributed to this project:

- [@malaquiasdev](https://github.com/malaquiasdev)

## Contact

If you want to contact me you can reach me at <mateusmalaquiasdev@outlook.com>.

## License

This project uses the following license: [MIT](https://github.com/malaquiasdev/studio-ghibli-service/blob/master/LICENSE).
