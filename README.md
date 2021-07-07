# UpTask API 

## Overview

This is a simple JSON based REST API, built with Node, Express, Sequelize ORM and Clean Arquitecture. It uses projects as sample information.

## Setup
* Requirements for run this project

        npm install

        npm install -g sequelize-cli

Create .env file in the root folder with the .env.sample like reference

if you want to create the structure of the database without run the script sql, run the following commands (Change the credentials in the file config/config.json by your name,pass and local database):

        npx sequelize-cli db:migrate

        npx sequelize-cli db:seed:all

the command to run the project

        npm start