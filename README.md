# Angular Server

It is use to serve angular `public` or `dist` director with `HTML5Mode`=`true` it means no more URL problems like showing 404 Error.

### Dependence 
  - node or iojs

### Usage 
Just run this command into angular project directory and make sure `node` is install before.
```sh
npm install angular-server
```
 
### Example
#####  Directory Structure (Serve `dist` folder)
  - dist
  - src
  - ---- app
  - ---- assets
  - app.js
  
```sh
Syntax: node app.js [PORT] [Directory Path]
```

```sh
$ node app.js 8080 /dist
```