# Apartment Rental Business Management Web Application
This assignment is a project for PRJ666 that involves creating a website for booking services in the apartment rental business.  
The apartment rental business is a business that allows clients or residents to rent apartments because they do not have enough money to  afford morgages. The specific service that this application will cover is that it will allow the building manager to file work orders   online instead of using paper. As a result, the website will reduce the costs of spending money on paper, it will save environmental   resources and it will allow for faster delivery of work orders. The passwords will of course be hashed and salted to prevent password   leaks.  

## This project will include these components:  

### Angular Components:  
* Login Component  
* Register Component  
* Account Details Component  
* Work Order Component  
* Chat Application Component  
* Main Page Component  
* About Component  
* Contact Us Component
* FAQ Component
* Forgot Username Component
* Forgot Password Component

### Server Components:    
* Data Service Component  
* PostgreSQL Database  
* Server Component - NodeJS

### Styles:  
* CSS Styling Files

### Other:
* ExpressJS
   
## Tests that will be used:
* https://docs.travis-ci.com/

## Sources used for styling:
* https://prettier.io/docs/en/index.html


## Contributing

To contribute, fork the repo and clone the forked repo. For additional information read more about using GitHub.

Clone the forked repository by running this command:

git clone https://github.com/YourUser/Apartment-Rental-Business-Management-Web-App.git   
When you try to install node_modules and then run the ng serve --open command you will get a message saying "Cannot find module 'webpack-dev-server'". To avoid this run this command before running the app:

    npm install --save-dev webpack-dev-server 

## To File a Bug

run these set of commands to file a bug:

1. To get to the latest state of the repository run these commands:    
   
       git remote add upstream https://github.com/PRJ566-Group-09/Apartment-Rental-Business-Management-Web-App.git    
       git pull upstream master  

2. Create a seperate branch and checkout to it by running this command  
            
       git checkout -b "branch name", where branch name is the name of your branch.
    
3. Once finished editing save and run these commands:  
        
        git status  
        git add .  
        git commit -m "Changes made"  
        git push  

4. Go back your forked repository, select the Pull requests Tab and choose the New pull request option.
   After, select the Create pull request button. After that you have filed your bug.
    
   

