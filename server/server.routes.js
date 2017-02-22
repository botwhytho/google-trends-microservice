/* server.routes.js
* Map containing all server-side routes.
* Initializes all server-side routes.
*
*/

var api = require("./server.api");

function setRouteMap(app) {
    app.get("/trends", api.getTrends);
};

module.exports = setRouteMap

