This project contains two challenges - a "Ticket Breakdown" challenge and a "Refactoring" challenge. The two challenges are unrelated, but you should complete both in the same folder and share the link in Coderbyte. Any written answers should be included in markdown files within this folder.


## [Ticket Breakdown](Ticket_Breakdown.md)

## Task 1 

### Add external id support to the database

We need to create a relationship between internal id and external id.

In a simple way, we need to add an external id field to the agent entity

After completing this stage, a new field will appear in the database for each Agent. Currently, this field can be initialized with the value of an internal id.


## Task 2

### Api to change the external agent id field

We need to create an api to change the external agent id field.

You need to collect requirements for api, such as security, access, validation rules and so on.

From the looks of it, it seems that this field should be filled in the admin panel and this api should be accessible only from the admin panel and for a limited users (for example, with access rights to edit data).

## Task 3

### Adding a new field in the admin panel

We need to add a new input field in the admin interface and describe the rules for filling this field and validation in the user interface, as well as the rules for saving this field

## Task 4

### Change function getShiftsByFacility

We need to change the method so that it can take an external identifier and return the same entities as before, adding information about the external identifier to the agent metadata

## Task 5

### Change function generateReport

We need to change the method so that the external identifier gets into the report instead of the internal one

## PS

The description of the tasks turned out to be rather superficial, since time was limited.
I think more detailed description of entities and client-server interaction is missing.
In addition, there are no acceptance criteria and other important parts of the task description.
If I have more time, I can work out every aspect in detail, including the entities and the contract between the client and the server.

## PSS
This is my first time facing such a task in an interview, but I really liked it, thanks for the experience!

## [Refactoring](Refactoring.md)

1. Added several utilities for working with hash and key:
  - hash - abstraction over "crypto" library in case we need to override the hash implementation
  - partition-key - abstraction over validation and business rules for working with the partition key

2. Separated the logic of working with the key, which can be attributed to business logic, from the logic of processing input parameters (request validation)

3. I believe there is still a lot of work to be done on refactoring towards separating business logic, business rule validation, and query validation. It is possible to separate the application into separate layers if necessary, like DDD and etc, but in the current implementation there is already a noticeable logical separation, in my opinion.

4. There are some questions left for the tests, since now they give redundant coverage (cover the intersecting logic in dpk.test, hash.test and partition-key.test)

If you are a JS novice, here's how to get started:
1. [Install Node.js](https://nodejs.org/en/download/) (we use `^16`, the latest LTS)
2. Run `npm i` in this repo to install dependencies
3. Run `npm test` to run the automated tests
4. Run `npm start` to launch `index.js` for any manual testing
