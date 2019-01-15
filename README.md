# Apartment Rental Business Management Web Application
This will be the readme file of the Apartment Rental Business Management Web Application.

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
    
   

