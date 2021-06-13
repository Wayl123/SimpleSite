# Documentation

- This is a react typescript app that uses material-ui for styling the frontend and reactfire for connecting to the database.
- This project is mostly for getting used to new language and tool so there are some things like database security are not deeply touched upon.

### Installation

1. For installation clone the repo first with the following:
```
git clone https://github.com/Wayl123/SimpleSite.git
```
Then navigate into the cloned repo:
```
cd SimpleSite
```
2. Install all the dependency with `npm install`.
3. Create a .env file to enter the firebase config variable in, the file should have the following:
```
REACT_APP_FB_APIKEY=<Your firebase apiKey>
REACT_APP_FB_AUTHDOMAIN=<Your firebase authDomain>
REACT_APP_FB_PROJECTID=<Your firebase projectId>
REACT_APP_FB_STORAGEBUCKET=<Your firebase storageBucket>
REACT_APP_FB_MESSAGESENDERID=<Your firebase messagingSenderId>
REACT_APP_FB_APPID=<Your farebase appId>
```
To get these variable you need to create a firebase project and connect a web app to it.
4. Once that is set up, it should run by just doing `npm start`