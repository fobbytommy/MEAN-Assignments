# Survey From | socket.io

* Set up a server that can render views/index.ejs that has the form for the user to fill out.
* When the form information is submitted, the form data is __emitted__ to the server with the event name *posting_form*.
* The server listens for an event *posting_form* and when this event gets triggered, organizes all the emitted information to form a single message and sends this single message with the event called *updated_message*. It also **emits** an event called *random_number* with random number between 1-1000.
* The client listens for an event called *random_number* and when this event gets triggered, show the number in the HTML.
* The client listens for an event called *updated_message* and when this event gets triggered, displays the message somewhere in the HTML.
