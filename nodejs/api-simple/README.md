Super Simple API Server
=======================

This is a very, very basic example of an API server. It uses the basic 
plain vanilla server example from the [node.js home page](http://nodejs.org/) 
(no extra modules required).
The code demonstrates how to reference multiple js files in your project. 
I.e., server.js references controller.js which references service.js. That's it!

There is only one endpoint, that is the root level (http://localhost:8000/). 
You probably want to use something like [express](http://expressjs.com/) 
to define your endpoints. 

Calling http://localhost:8000/ will route your request from server.js to controller.js 
to service.js an simply render "Hello!" to your browser.

