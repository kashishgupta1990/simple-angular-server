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
> Lets suppose complete angular application `path` would be `/home/user/myAngularApp/dist`. Here `dist` is our public directory.

  - dist
  - dist/`index.html`
  - dist/assets/{*.*}
  - dist/app/app.js  
  - dist/app/{*.*}

#### Define app directory folder ####
> You can define angular app public directory.

```sh
Syntax-1 (Relative Path): angularserver  --dir [Directory Name]
Syntax-2 (Absolute Path): angularserver  --dir [Complete Directory Path]
```
```sh
$ angularserver  --dir ./dist
```
OR
```sh
$ angularserver  --dir home/user/myAngularApp/dist
```
By default dir is [`Directory Path`:`Your Current Directory`]

#### Define `index.html` file path which contain `ng-app` defined ####
> This file should be in root directory (like here `dist` is root directory) `dist->index.html` 
> You can set your own main HTML file which contains `ng-app`.
Lets suppose we have `main.html` is main file to serve:

 - dist/`main.html`
 
```sh
Synatx: angularserve --file [Your File Name]
```
```sh
$ angularserve --file main.html
```
By default file is [`file`:`index.html`]

#### Define port ####
> You can define angular server port

```sh
Syntax: angularserver  --port [Port Number]
```
```sh
$ angularserver  --port 8888
```
By default port is [`port`:`3000`] 


#### Complete options #### 
> Our command would be like

```sh
$ angularserver --port 8080 --dir dist --file main.html
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
