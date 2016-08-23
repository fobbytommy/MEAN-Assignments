# The Epic Button Game

* Make a server with express node module with socket connection ready
* When the _Epic Button_ is clicked, the client will __emit__ a 'epic_button_clicked'
* The server listens for the 'epic_button_clicked' and __emits__ a 'counting_time' to _ALL the clients who are listening on the server_.
* Each client who are listening for the 'counting_time' edits his/her page with the new count value.
* When _Reset Count_ is clicked, the client __emits__ a 'reset_button_clicked'
* The server listens for the 'reset_button_clicked' and _emits_ a 'reset_count' to _ALL the clients who are listening in the server_.
* Each client listens for this 'reset_count' from the server and updates the count to 0.
