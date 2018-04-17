require "rest-client"
require "json"
require "pry"

api_links = {
  "cnn": "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=f59171e343ff41bc8423c98c22fd034b",
  "cbs": "https://newsapi.org/v2/top-headlines?sources=cbs-news&apiKey=f59171e343ff41bc8423c98c22fd034b"
}

threads = []
article_titles = []

start_time = Time.now
api_links.each do |news_source, api_link|
  #RestClient response
  response = RestClient.get(api_link)
  #Turn the data in to a readable object in Ruby
  json = JSON.parse(response)

  json["articles"].each do |article_hash|
    article_titles << article_hash["title"]
  end

threads.map(&:join)
end
end_time = Time.now

article_titles
puts "#{end_time - start_time}"

"hello"
