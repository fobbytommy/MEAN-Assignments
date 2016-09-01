# 1955 API


* __GET '/'__ will serve up the full colleciton of people born in 1955.
* __GET '/new/:name/'__ will add a name into the database. Can be used for blank spaces, so adding Steve Jobs to our database, you'd type in the URL __'localhost:8000/new/Steve Jobs'__
* __GET '/remove/:name/'__ will delete a name from the database.
* __GET '/:name'__ will bring up the document of that particular person.
