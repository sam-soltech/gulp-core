# Suggestions for Basic Web App Core Files

This repo contains the core files for using [Gulp](https://github.com/gulpjs/gulp) for watching and compileing assets on the front end


## Setup 
To setup be sure you current directory has NPM enabled, download the repo and run:

```
npm install
``` 

this will download all of the required node modules including gulp and then run gulp processes

To run dev version of gulp, that includes human readable html, js and line hinted sass run:

```
gulp
``` 

To run prod version of gulp where sass, html and js are minified and striped of comments:

```
gulp prod
``` 

## Gulp Modules


- https://www.npmjs.com/package/gulp
- https://www.npmjs.com/package/browser-sync
- https://www.npmjs.com/package/gulp-uglify
- https://www.npmjs.com/package/gulp-sass
- https://www.npmjs.com/package/gulp-jade

**Want to Add**

- https://www.npmjs.com/package/gulp-inject
- https://www.npmjs.com/package/main-bower-files

## Jade Templates
[Jade](http://jade-lang.com/) is a node based indention focused templateing engine. This language core princplers are identical to sass and much of its concepts and implementation strategy is the same. The complete language reference can be found [here](http://jade-lang.com/reference/)

It should be noted that the langue also has the support of local variables , wich allows the the ablity to pass custom variables into template during compilation

**Use With Gulp**

the jade template files are complied after every save of of watched files