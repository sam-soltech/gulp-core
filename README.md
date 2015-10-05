# Core Gulp File

This repo contains the core files for using [Gulp](https://github.com/gulpjs/gulp) for watching and comlping assets on the front end


## Setup 
To setup be sure you current directory has NPM enabled, download the repo and run:

```
npm install
``` 

this will download all of the required node modulers including glup and then run gulp processes

To run dev version of gulp, that includes human readable html, js and line hinted sass run:

```
gulp
``` 

To run prod version of gulp where sass, html and js are minfied and striped of comments:

```
gulp prod
``` 

## Modules


- https://www.npmjs.com/package/gulp
- https://www.npmjs.com/package/browser-sync
- https://www.npmjs.com/package/gulp-uglify
- https://www.npmjs.com/package/gulp-sass
- https://www.npmjs.com/package/gulp-jade

**Want to Add**

- https://www.npmjs.com/package/gulp-inject
- https://www.npmjs.com/package/main-bower-files