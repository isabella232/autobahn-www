// Make code portable to Node.js without any changes
try {
   var autobahn = require('autobahn');
} catch (e) {
   // when running in browser, AutobahnJS will
   // be included without a module system
}

// Set up WAMP connection to router
var connection = new autobahn.Connection({
   url: 'ws://127.0.0.1:9000/',
   realm: 'realm1'}
);

// Set up 'onopen' handler
connection.onopen = function (session) {

   // Define an event handler
   function onEvent(args) {
      console.log("Event received ", args);
   }

   // Subscribe to a topic
   session.subscribe('com.myapp.topic1', onEvent);
};

// Open connection
connection.open();
