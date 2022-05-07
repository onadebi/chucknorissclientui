## To get application and run locally:

>1. Clone file from ...

>2. Run yarn install to download all necessary packages

>3. To run locally run yarn start

## To deploy to a service like Heroku, the Heroku CLI must first be installed.
This can be installed by running the command: npm install -g heroku

>1. After above, confirm heroku local installation by running command: **heroku --version**

>2. After confirmed installation, you are required to login using command: **heroku login**

>3). heroku create $APP_NAME --buildpack mars/create-react-app

>4). git push heroku master

>5). heroku open

This application can be found hosted at: https://swapichuck.herokuapp.com/
