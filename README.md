# GHIBLIDB

[![Build Status](https://travis-ci.com/malaquiasdev/studio-ghibli-service.svg?branch=master)](https://travis-ci.com/malaquiasdev/studio-ghibli-service)
[![Coverage Status](https://coveralls.io/repos/github/malaquiasdev/studio-ghibli-service/badge.svg?branch=master)](https://coveralls.io/github/malaquiasdev/studio-ghibli-service?branch=master)

<p align="left">
  <img width="832" height="auto" src=".github/logo.png"/>
</p>

**GhibliDB** is a GraphQL-compliant API that expoose a huge metadata catalog of  movies, tvshow, tvepisode, documentary and people from Studio Ghibli Company. You can try it and make any free for non-commercial project.

This is an unofficial api. We are made by fan for fan.

To know more about us please go to our [Wiki page](https://github.com/malaquiasdev/ghiblidb-graphql/wiki).

## API Terms of Use

1. Free for non-commercial use.
2. You can make use of the API to as data service.
3. ‘Hoarding’ or mass collection of data from this API is strictly prohibited.

## API Legal Notice

We do not claim ownership of any of the images or data in the API. We comply with the Digital Millennium Copyright Act (DMCA) and expeditiously remove infringing content when properly notified. Any data and/or images you upload you expressly grant us a license to use. You are prohibited from using the images and/or data in connection with libelous, defamatory, obscene, pornographic, abusive or otherwise offensive content.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You must have an AWS Credentials
- Configure the [AWS CLI](https://aws.amazon.com/pt/cli/)
- You have access to [DynamoDB](https://aws.amazon.com/pt/dynamodb/)
- You have installed the [Node.js](https://nodejs.org/en/)
- You have installed the [Yarn](https://yarnpkg.com/getting-started/install)
## AWS services that we use

- AWS CloudFormation
- AWS CloudFront
- AWS API Gateway
- AWS DynamoDB

## Installing
1. Clone this repository. `$ git clone https://github.com/malaquiasdev/ghiblidb-graphql.git`
2. Go to the project folder. `$ cd ghiblidb-graphql`
3. Copy the **.env.example** file and create an **.env** file with your AWS Credentials.

## Execute with yarn
1. Install the dependencies. `$ yarn install`
2. Run offline but the DynamoDB must be in the configure in AWS. `$ yarn dev`

## Contributing

1. Fork this repository.
2. Create a branch: `$ git checkout -b <branch_name>`.
3. Make your changes.
4. Run the test suite: `$ yarn test`
5. Run the linter suite: `$ yarn lint`
6. Fix the test and linter errors if exists.
7. Commit your changes: `$ git commit -m '<commit_message>'`
8. Push to the original branch: `$ git push origin studio-ghibli-database-api/<branch_name>`
9. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors

Thanks to the following people who have contributed to this project:

- [@malaquiasdev](https://github.com/malaquiasdev)

## Contact

If you want to contact me you can reach me at <mateusmalaquiasdev@outlook.com>.

## License

This project uses the following license: [MIT](https://github.com/malaquiasdev/ghiblidb-graphql/blob/master/LICENSE).
