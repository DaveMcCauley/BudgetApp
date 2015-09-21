TABLE OF CONTENTS  
==================================  
1.0	- Folder structure  
2.0 - Building the app  
	2.1 - Development Building  
	2.2 - Production Building  
3.0 -  


1.0 - Folder structure  
-----------------------  
.  
|   gruntfile.js  
|   package.json  
|   README.md  
|   server.js  
|-- src/  
|    |   index.html  
|	 |-- app/  
|    |    |-- budget/  
|    |    |   budget.html  
|    |    |   budget.js  
|    |    |-- dashboard/  
|    |    |   dashboard.html  
|    |    |   dashboard.js  
|    |    |-- layout/  
|    |    |   sidebar.html  
|    |    |   sidebar.js  
|    |    |   primarynav.html  
|    |    |   secondarynav.html  
|    |-- assets/  
|    |    |-- css/  
|    |    |    |  core.css  
|    |    |    |--scss/  
|    |    |    |   file.scss  
|    |    |    |   file.scss  
|    |    |--img/  
|    |    |    file.jpg  
|    |    |    file.png, etc.  
|    |    |-- js  
|    |    |    core.js  
|    |    |    file.js  
|    |    |    file.js  
|    |    |-- lib  
|    |    |    jquery.js  
|    |    |    library.js  
|-- public/  
|    |   index.html  
|    |-- app/  
|    |    |-- budget/  
|    |    |   budget.html  
|    |    |   budget.js  
|    |    |-- dashboard/  
|    |    |   dashboard.html  
|    |    |   dashboard.js  
|    |    |-- layout/  
|    |    |   sidebar.html  
|    |    |   sidebar.js  
|    |    |   primarynav.html  
|    |    |   secondarynav.html  
|    |-- assets/  
|    |    |-- css/  
|    |    |    core.css  
|    |    |--img/  
|    |    |    file.jpg  
|    |    |    file.png, etc.  
|    |    |-- js/  
|    |    |    core.min.js  
|    |    |-- lib/  
|    |    |    jquery.min.js  
|    |    |    library.min.js  
  
    
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




