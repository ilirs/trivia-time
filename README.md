# Trivia time game

Trivia time is a quiz game. You choose the difficulty level you want to play on and answer 10 questions. For each correct answer your score goes up. If you answer wrong you lose the game and start over.

 - Built with React.js (Hooks)
 - API Open Trivia Database

## Installation

#### Requirements

You’ll need to have Node >= 8.10 and npm >= 5.6 on your machine.

1. Clone this repository

```bash
git clone https://github.com/ilirs/trivia-time.git
```
2. Install the dependencies

```bash
yarn install
```

3. Run the app
```bash
yarn start
```
## Deployment

Deploying a Trivia time app to Amazon S3 using Github Actions.

#### - Create repository and push App to Github
#### - Create Amazon S3 Bucket and configuring a bucket for static web hosting
#### - Create an IAM user
#### - Create Access key for that user
#### - Add AWS_SECRET_ACCESS_KEY and AWS_ACCESS_KEY_ID on Github Secrets
#### - Setup Github Actions (create workflow file .yml)
#### - Deploy a Trivia App to S3 Bucket


## Reflection

Trivia time App was built using CRA (create-react-app) CLI. 

#### Project structure
- assets - images, fonts.
- components - reuseable stateless components
- config - configure parameters
- containers - stateful components
- routes - project routes 
- utils - common utils (general functions)


```
trivia-time
├── node_modules
├── .gitignore
└── src
    ├── assets
    ├── components
    ├── config
    ├── containers
    ├── routes
    ├── utils
    ├── App.js
    ├── App.css
```