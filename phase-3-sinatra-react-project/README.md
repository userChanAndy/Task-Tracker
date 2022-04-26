# Task Tracker

Task Tracker is a web application that allows users to track day to day tasks

Users can add and complete tasks at ease using Task Tracker

Plans change, thats why I included a delete function to remove tasks that are no longer required to be accomplished

## Back End

Task Trackers back end is built using Ruby, Active Record and Sinatra

### Controller

- The controller holds methods for handdling HTTP requests for tasks and users
- HTTP requests are responsible for retrieving, updating and deleting data in the database

### Migrate

- Migrations are an active record method that creates and updates database schema in an organized way
- The schema outlines the way rows and columns in SQL tables are outlined
- Migration status can be checked by calling rake db:migrate:status
-

### Models

- The task and user models are ruby files that are linked to SQL tabels using Active Record
- has_many and belongs_to are macros that associate models by using foreign keys
- foreign keys are found in the tablel that corresponds to the model that contains the belongs_to macro

### Seeds

- Seeds are a shortcut to quickly populate a database
- Seeds were used as mock data to quickly ensure the datbase is storing and updating data correctly
