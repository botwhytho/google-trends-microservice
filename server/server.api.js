/* server.api.js
*  Core API methods.
*
*/ 

var googleTrends = require("google-trends-api-es");

function approxTrafficToInteger(item) {
	return parseInt(item.slice(0, item.length - 1).replace(/\,/g,'') ,10);
}

function sortByTraffic(a, b) {
	return approxTrafficToInteger(b["ht:approx_traffic"][0]) - approxTrafficToInteger(a["ht:approx_traffic"][0])
}

function getTrends(request, response) {
	googleTrends.hotTrendsDetail("US").then(function(results) {
		results.rss.channel[0].item.sort(sortByTraffic);
		response.json(results);
	}).catch(function(err){
		response.json({error: err});
	});
}
	

module.exports = {getTrends}
