/* index.js
* Launches the application server.
*
*
*/

//--- Begin Module Scope Variables ---//
var http = require("http"),
bodyParser = require("body-parser"),
express = require("express"),
router = require("./server/server.routes"),
serverConfig = require("./server/server.config"),
app = express(),
server = http.createServer(app);

//--- END Module Scope Variables ---//


//--- Begin Server Configuration ---//
serverConfig(app);
router(app);

//--- END Server Configuration ---//


//--- Begin Start Server ---//
server.listen(process.env.PORT || 3000 );
console.log("Express server listening on port %d in %s mode",
        server.address().port, app.settings.env
);

//--- END Start Server ---//
