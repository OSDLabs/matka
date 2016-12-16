#MATKA (Quark Gaming)
Uses Express as web framework, Handlebars for templating, and Firebase as database.
##Installation (for contributing)
Clone this repository
```
$ git clone https://github.com/OSDLabs/matka
$ cd matka
```
Put firebase credentials in credentials.js in the below format 
```javascript
module.exports.firebaseConfig = {
    apiKey: <your API key>,
    authDomain: <authDomain>,
    databaseURL: <databaseURL>,
    storageBucket: <storageBucket>,
  }
```
Install Packages and start the server (port 17970)
```
$ npm install
$ node index.js
```
