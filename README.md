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
#####  Directory Structure (Serve `dist` folder)
> Here `dist` must contain `index.html` file where we have `ng-app=ourAppName` defined.
> Lets suppose complete angular application `path` would be `/home/user/myAngularApp/dist` 

  - dist
  - src
  - ---- app
  - ---- assets
  - app.js
  
```sh
Syntax: angularserver  --port 8080 --dir {path:like: ./app or /home/user/myapp}
```
> Default [`port`:`3000`] and [`Directory Path`:`Your Current Directory`]
> Our command would be like..

```sh
$ angularserver --port 8080  --dir /home/user/myAngularApp/dist
```
> If we are in project directory 

```sh
$ angularserver --port 8080 --dir ./dist
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