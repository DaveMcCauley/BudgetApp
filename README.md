********************************************************************************
TABLE OF CONTENTS
********************************************************************************
1.0	- Folder structure  
2.0 - Building the app  
	2.1 - Development Building  
	2.2 - Production Building  

3.0 -


--------------------------------------------------------------------------------
1.0 - Folder structure
--------------------------------------------------------------------------------

app/  
-- shared/	// reusable components of site <<  
----- sidebar/  
-------- sidebarDirective.js  
-------- sidebarView.html  
----- footer/  
-------- footerDirective.js  
-------- footerView.html  
-- components/ // each component gets treated as an individual app  
----- home/  
-------- homeController.js  
-------- homeService.js  
-------- homeView.html  
----- budget/  
-------- budgetController.js  
-------- budgetService.js  
-------- budgetView.html  
-- app.module.js  
-- app.routes.js  
assets/  
-- img/		// images and icons for the app  
-- css/     // all styles and style related files (SCSS, SASS, LESS file)  
-- js/ 		// JavaScrpt files writeen for the app, that are not for angular  
-- libs/	// Thrid party libraries liek jQuery, etc.  
index.html  
  
2.3 Template for *.html files using grunt-targethtml  
  
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


