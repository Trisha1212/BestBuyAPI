<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [API Test](#APITest)
  - [Tech stacks](#tech-stacks)
  - [Setup](#setup)
    - [Dev Setup nodejs and yarn](#dev-setup-nodejs-and-yarn)
    - [Running test specs](#running-test-specs)
    - [Folder structure]
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# APITest

API test : bestBuy API (https://httpbin.org)
- Check the basic functionality of API.
- Currently two test are failing ['ExistingDetailedtest'](https://github.com/BestBuy/api-playground/tree/master/test)

## Tech stacks

- [`Mocha`](https://mochajs.org/)
- Chai for Assertion (http://chaijs.com/)
- supertest-as-promised(https://www.npmjs.com/package/supertest-as-promised)

## Setup
### Dev Setup nodejs and yarn
* install node
* Best Buy Dev Set up(https://github.com/bestbuy/api-playground/#getting-started)
```
brew update
brew install node
git clone https://github.com/bestbuy/api-playground/
cd api-playground
npm install
npm start
```
* Open localhost:3030 and verify the webpage is accessible
* [install yarn](https://yarnpkg.com/lang/en/docs/install/)
* install mocha chai and supertest-as-promised
Use yarn to install mocha chai and supertest-as-promised globally with:
```
npm install

```
This will install two command line tools, mocha chai and supertest-as-promised. Try running `mocha --version` to make sure it's working.
The Chai is a helper tool to for assertion of API response

### Running test specs

```
npm test

```


### Folder structure

- Tests -  The tests will call functions from the API and Payload areas of the framework and be responsible for asserting responses.
- API -  HTTP requests are grouped based on the resource you are calling so if there are two resources called if the request changes it requires a single change to propagate through the framework.
- Payloads - Payloads that are required for requests and responses are stored in this area. The idea is similar to the API area in that one class is responsible for one payload that may be called multiple times. Again, this means if the payload changes it requires a single change to propagate through the framework.


````
├── README.md
├── api
├── node_modules
├── package.json
└── test

directory: 3 file: 2 

`````

<<<<<<< HEAD
### Bug 
- ErrorHandling: When method is not supported it should return 405 [https://httpstatuses.com/405]
=======
###Bug 
* Bugs ErrorHandling: When method is not supported it should return 405 [https://httpstatuses.com/405]
>>>>>>> 1cc422f633870004edd0e5976fa4365c96a22f63
