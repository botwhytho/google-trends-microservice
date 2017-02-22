/*
* server.config.js
* Sets server configuration. 
*
*/
	
//--- BEGIN Module Scope Variables ---//
var bodyParser = require("body-parser"),
errorhandler = require("errorhandler"),
logger = require("morgan"),
methodOverride = require("method-override");

//--- END Module Scope Variables ---// 


function setServerConfig(app) {
/** 
* Configures server settings according to environment variable.
* @param {object} app - Express application object.
* @returns { none}
* @throws {none}
*/

	if (app.get('env')) {
                app.use( bodyParser.urlencoded({
                extended: true
                }));
                app.use(bodyParser.json());
                app.use(methodOverride());
        };

        if (app.get('env') === 'development') {
                app.use(logger('dev'));
                app.use(errorhandler({
                        dumpExceptions : true,
                        showStack      : true
                }));
        }; 

        if (app.get('env') === 'production') {
                app.use(errorhandler({
                        dumpExceptions : true,
                        showStack      : true
                }));
        };
};

module.exports = setServerConfig
