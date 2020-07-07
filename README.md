# Hacker News CLone

This is a replication of the hacker news feed using React, React-Router, React Hooks and Express JS for,
supporting server side rendering, following the atomic design pattern.

This is application uses Husky for pre-commit checks with an eslint and prettier configuration in place.

The upvote and hide item functionality is currently implemented with local storage as our updation medium since the API's
supporting this feature are not available currently.

There is a git pre-merge workflow in place to check whether the pull request introduces any breaking changes
into the ecosystem or not, defined inside the git workflows folder.

## Deployment

This app is currently deployed at:
```bash
https://hacker-news-clone-aivkvny6kq-uc.a.run.app/?page=1
```
There is a github workflow in place which automatically triggers the build once we have merged our feature
branch into the master branch.

We have a dockerfile in place which lists all the configuration for container creation and commands to be run post
container creation.

### Installation

For setting up this application locally, please start by cloning this repository in the folder of your choice.

Next you will have to install all the dependencies using:
```bash
npm install
```
Post installation of dependencies we have multiple scripts at our disposal for various tasks:
- For starting the dev mode of our application in browser at localhost:3000
```bash
npm start
```
- For starting the express server for server side rendering
```bash
npm run build && node server/bootstrap.js
```


