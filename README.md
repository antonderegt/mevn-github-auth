# MEVN Boilerplate (with GitHub authentication)

MEVN means it contains MongoDB, ExpressJS, VueJS and NodeJS
it is based on vue cli (webpack-simple template).
Mongoose runs on top of MongoDB. [How to install MongoDB on Windows](https://www.youtube.com/watch?v=1uFY60CESlM&t=605s)

It uses PassportJS to authenticate a user with GitHub.
[MEVN Boilerplate without PassportJS](https://github.com/antonderegt/mevn-boilerplate)

## How to start

``` bash
# clone the repo
git clone https://github.com/antonderegt/mevn-github-auth.git

# install dependencies
npm install

# build and watch for changes
npm run serve

# run MongoDB
mongod

# run in a seperate terminal to serve at localhost:3000
nodemon server.js

# build for production with minification
npm run build
```
