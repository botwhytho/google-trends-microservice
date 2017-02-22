/* server.api.js
*  Core API methods.
*
*/ 

var googleTrends = require("google-trends-api-es");

function getTrends(request, response) {
	googleTrends.hotTrendsDetail("US").then(function(results) {
		response.json(results);
	}).catch(function(err){
		console.log(err);
	});
}
	

module.exports = {getTrends}
