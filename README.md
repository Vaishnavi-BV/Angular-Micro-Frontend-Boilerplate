# Angular-Micro-Frontend-Boilerplate
This project was generated with Angular CLI version 20.1.4. It uses Native Federation to architect it with micro frontends.

The following explained how this project boiler plate was setup.

## Requirements
Install Node.js LTS V20+
Install Angular CLI version 20+ globally.

## Create the main project
To start creating this project for the first time, execute in the workspace folder of your choice in a Git Bash terminal:

  `ng new angular-mfe-demo --create-application false`
  `cd angular-mfe-demo`

## Create some micro frontends
### Create Main app

  `ng generate application shell`

### Create remote apps

  `ng generate application mfe-cart`
  `ng generate application mfe-profile`

### Add module federation

  `cd projects/shell`

  `ng add @angular-architects/module-federation --project shell --port 4200 --type host --style=scss`  

  `cd ../../projects/mfe-cart`

  `ng add @angular-architects/module-federation --project mfe-cart --port 4201 --type remote --style=scss`

  `cd ../../projects/mfe-profile`

  `ng add @angular-architects/module-federation --project mfe-profile --port 4202 --type remote --style=scss`


Run the application:
  1. npm install
  2. npm run start:all
