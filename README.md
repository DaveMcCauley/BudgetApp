TABLE OF CONTENTS  
==================================  
1.0	- Folder structure  
2.0 - Building the app  
	2.1 - Development Building  
	2.2 - Production Building  
3.0 -  


1.0 - Folder structure  
-----------------------  

    |-- .gitignore
    |-- BUILD_FILE_JS
    |-- gruntfile.js
    |-- package.json
    |-- README.md
    |-- server.js
    |-- .sass-cache
    |   |-- f1ac25f47b8254eb6e1d77b3267c49d7bf279a01
    |       |-- test.scssc
    |       |-- test2.scssc
    |-- public
    |   |-- index.html
    |   |-- app
    |   |   |-- app.module.js
    |   |   |-- components
    |   |   |   |-- blog
    |   |   |   |-- budget
    |   |   |   |-- home
    |   |   |-- shared
    |   |       |-- article
    |   |       |-- footer
    |   |       |-- sidebar
    |   |-- assets
    |   |   |-- css
    |   |   |   |-- budgetapp.css
    |   |   |   |-- style.css
    |   |   |-- img
    |   |   |-- js
    |   |   |-- lib
    |   |-- controllers
    |   |-- directives
    |   |-- less
    |   |-- shared
    |-- src
        |-- about.html
        |-- aboutcomp.html
        |-- index.html
        |-- app
        |   |-- app.module.js
        |   |-- app.routes.js
        |   |-- components
        |   |   |-- blog
        |   |   |-- budget
        |   |   |-- home
        |   |-- shared
        |       |-- article
        |       |-- footer
        |       |-- sidebar
        |-- assets
        |   |-- css
        |   |   |-- scss
        |   |       |-- test.scss
        |   |       |-- test2.scss
        |   |-- img
        |   |-- js
        |   |   |-- magic.js
        |   |   |-- test.js
        |   |-- lib
        |       |-- jquery-1.11.1.js
        |-- controllers
        |-- directives
        |-- shared

  
    
2.3 Template for *.html files using grunt-targethtml
----------------------------------------------------

https://github.com/changer/grunt-targethtml

<!--(if target dev)><!-->  
  <link rel="stylesheet" href="dev.css">  
<!--<!(endif)-->  
  
<!--(if target dev)><!-->  
  <script src="dev.js"></script>  
  <script>  
    var less = { env:'development' };  
  </script>  
<!--<!(endif)-->  
  
  
<!--(if target dist)>  
  <link rel="stylesheet" href="release.css">  
<!(endif)-->  
  
<!--(if target dist)>  
  <script src="release.js"></script>  
<!(endif)-->  
  
  
Updating prefixes database:  
$ npm update caniuse-db  
  
Can also run npm update from root to update packages and dependencies.  




