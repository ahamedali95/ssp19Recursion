require "rest-client"
require "json"
require "pry"

puts "Enter a movie name: "

response = RestClient.get("http://www.omdbapi.com/?t=night+at+the+museum&apikey=485b50f7")
hash = JSON.parse(response)

#hash["posts"][0]["thread"]["site"]


binding.pry
"hello"
