# Dashboard | MongoDB

#### This will utilize all 4 CRUD methods with Mongoose. This will be an app which manages a pack of animals.

* __GET__ _'/'_ Displays all of the animals.
* __GET__ _'/animals/:id'_ Displays information about one animal.
* __GET__ _'/animals/new'_ Displays a form for making a new animal.
* __POST__ _'/animals'_ Should be the action attribute for the form in the above route (GET '/animals/new').
* __GET__ _'/animals/:id/edit'_ Should show a form to edit an existing animal.
* __POST__ _'/animals/:id'_ Should be the action attribute for the form in the above route (GET '/animals/:id/edit').
* __POST__ _'/animals/:id/destroy'_ Should delete the animal from the database by ID.
