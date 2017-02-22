## google-trends-microservice
####Microservice for pulling and parsing trending searches in the United States with Google's Hot Trends feed.

Purpose-built microservice serving as a companion to the kronkite-server project. Because kronkite-server is written in Ruby and there was/is no suitable Ruby gem for scraping Google trends data, this microservice wraps and leverages the terrific [google-trends-api-es](https://www.npmjs.com/package/google-trends-api-es) Node module to fill in the gap. 

This is also a trial in exploring a backend stack consisting of multiple languages (in this case Javascript and Ruby) as well as building a distributed architecture using microservices communicating over HTTP/REST.
