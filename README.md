# Challenge-19-TechQuizTestSuite

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description
This is a full-stack MERN application built with MongoDB, Express.js, React and Node.js that functions as a Tech Quiz. Users are able to take a quiz of 10 questions related to Python. The application further uses Cypress for component testing and end-to-end testing, invoked during development in the command line.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)


## Installation
To install the application locally, do the following in your terminal:

1. Clone the repository to your local computer.  
   `git clone git@github.com:lwebert/Challenge-19-TechQuizTestSuite.git`
2. Check that node.js is installed.  
   `node -v`
3. Install dependencies.  
   `npm i`

## Usage
To run the application locally, open an instance of the application in your terminal. 
Run the following:
1. `npm run build`.
2. `npm run seed`.
3. `npm run start:dev`. 
4. Open the application in your browser at (http://127.0.0.1:3001/)[http://127.0.0.1:3001/]. 
  

To run the Cypress tests, open 2 terminals at the root of your application.  
Terminal 1:
1. `npm run build && npm run seed`.
2. `npm run start:dev`.  

Terminal 2:
1. `npm run cypress`. This will open up an instance of Cypress, where you can run your component test and end-to-end test.
2. Component Testing:  
    a. In the Cypress window, choose **Component Testing**.  
    b. Select **Electron** as your browser. Press 'Start Component Testing in Electron'.  
    c. Click on the **Quiz.cy.jsx** component test file.  
    d. All component tests should pass.  
3. End-to-End Testing:  
    a. Click the icon in the top left corner of the component testing screen so that the window 'Choose a testing type' appears. Select **E2E Testing**.  
    b. Click on the **quiz.cy.js** e2e test file.  
    c. All end-to-end tests should pass.  


For further clarification on how to run Cypress testing, click [here](https://app.screencastify.com/v3/watch/zzh92f4RJUyrq4DLmaU6) for a walkthrough video.  

## Contributing
The Cypress testing for this application was developed by Lauren Webert. Here are some guidelines on ways to contribute:

Report a bug fix.

1. Create a new Issue in the GitHub repo.

Make local changes to push up.

1. Create a new branch (`git checkout -b <your-feature-branch-name>`)
2. Make your changes locally
3. Push the code back to the GitHub repo (`git push origin <your-feature-branch-name>`)
4. Create a pull request to merge your changes

## Tests
The Cypress testing is working correctly if users are able to follow all steps in the [Usage](#usage) section without any errors, and if all tests pass.


## License
The application is covered under [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt).   
https://www.apache.org/licenses/LICENSE-2.0.txt


## Questions
- GitHub username: [lwebert](https://github.com/lwebert).
- Reach me at [lauren@weberts.org](lauren@weberts.org) with additional questions.
