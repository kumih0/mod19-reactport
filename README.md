# mod20-reactport
Module 20 Challenge - React Portfolio

## pseudo code for my poor organization

## big boy time
TODO: nuke app.js
-utilize react-router-dom in index.js
    --establish routes to pgs, decide what will render on main
    --check that header and navbar will work w routes

TODO: modularize components and pages?
-create index.js for all component and pages import/export (route simplification and clean up imports)
-create main.js for main single page >>home/about/prj carousel/contact

TODO: projects
-Proj carousel redirect to projlist page (sep route)
    --establish parent/child routes for pojlist/projs
    --connected to github api
-limit carousel to 5 and then see more
--projlist page, scroll auto populate
    --proj card/props

TODO: Resumes
-resume pg w child comp (Routes?)
    --Tabs
        --main, dev, food, edu, resumes
        --create props format to plug in relevant info
        --files?

TODO: *extra* craft blogging or whatever
    -blog w posts and relevant routes
    -lock admin login for post creation
    -db to save data?


### Main bs
 - make it work lol
 - svg for "logo"
 <!-- - check if bootstrap icons font actually works
 - socials in footer -->
 
### home
 <!-- - decide on big background photo -->
 - typed intro cuz everyone uses it but it looks cool
 - decide on color theme/font
 - bootstrap icons 

 ### about
 <!-- - add stupid pics of my face
 - add placeholder text for about sect -->
 - small div on prog lang
 - education/interests?

 ### projects
  - source from github rest api
  - inside card format
  - carousel or grid? create limits for how many load
  - transitions?
  - sort projects into groups?
  - links to repo

  ### resumes
   - separate page with sections with current exp
    - tabbed sections for occupation specific (childcare/edu, food, dev)
    - smaller sect for certs
   - pdf downloads for each relevant resume
   - generalized/current one as main

   ### contact
   <!-- - contact form that sends to email -->