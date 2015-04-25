# Angular Server

It is use to serve angular `public` or `dist` director with `HTML5Mode`=`true`
It means no more URL problems like showing 404 Error when we directly open `ui-route` or `ng-route` defined state.

### Dependence 
  - `node` or `iojs`
  - `Linux` operating system

### Installation Guide
Just run this command into angular project directory and make sure `node` is install before.
```sh
npm i simple-angular-server -g
```
After installing this globaly. Now this can be accessable by LINUX command `angularserver`

### Example
#### Define port ####
> You can define which port angular server can use
```sh
Syntax: angularserver  --port 8080
```
By default port is [`port`:`3000`] 
#### Define app directory folder ####
> You can also define which directory of your app
```sh
Syntax: angularserver  --dir {path:like: ./dist or /home/user/myAngularApp/dist}
```
By default dir is [`Directory Path`:`Your Current Directory`]
#### Define custom app home route ####
> Now you can also define your home route by defining a route module
Refer to below given example:
```js
//homeRoute.js
module.exports = function (req, res) {
    res.sendfile(app.get('appPath') + '/index2.html');
}
```
```sh
Syntax: angularserver  --route ./app/homeRoute.js
```
By default route  is 
[
function (req, res) {
        res.sendfile(app.get('appPath') + '/index.html');
}
]

#####  Directory Structure (Serve `dist` folder)
> Here `dist` must contain `index.html` file where we have `ng-app=ourAppName` defined incase if you have not define custom home route.
> Lets suppose complete angular application `path` would be `/home/user/myAngularApp/dist` 

  - app
  - ---- app.js
  - ---- index2.html
  - homeRoute.js
  
> Our command would be like..
```sh
$ angularserver --port 8080 --dir app --route ./app/homeRoute.js
```
### Download Link:
#### GIT
```sh
git@github.com:kashishgupta1990/simple-angular-server.git
```

#### NPM
```sh
npm i simple-angular-server -g
```

#### Issue Tracking
It's open community, so all are welcome to contribute or open `issue` || `suggestion` || `comments`