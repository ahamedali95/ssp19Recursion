require "rest-client"
require "json"
require "pry"

api_links = {
  "cnn": "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=f59171e343ff41bc8423c98c22fd034b",
  "cbs": "https://newsapi.org/v2/top-headlines?sources=cbs-news&apiKey=f59171e343ff41bc8423c98c22fd034b"
}

def get_all_article_titles_without_threads(api_links)
  article_titles = []

  api_links.each do |news_source, api_link|
    #RestClient response
    #Turn the data in to a readable object in Ruby
    response = RestClient.get(api_link)
    json = JSON.parse(response)

    json["articles"].each do |article_hash|
      article_titles << article_hash["title"]
    end
  end

  article_titles
end

#Inside the each enumerable of this method, the RestClient sends a API request and the response is
#received and parsed into a hash using JSON. And once we have the hash we get the titles of all articles.
#Why is this slower?
#This is slower because each time the iteration happens, the whole blocks has to be executed before moving on
#to another iteration. So that means we have to take it to account of the response time when the RestClient makes
#the request to retrieve the document for each of the api links. So it would look something like chart1

def get_all_article_titles_with_threads(api_links)
  threads = []
  article_titles = []

  api_links.each do |news_source, api_link|
    threads << Thread.new {
      #RestClient response
      #Turn the data in to a readable object in Ruby
      response = RestClient.get(api_link)
      json = JSON.parse(response)

      json["articles"].each do |article_hash|
        article_titles << article_hash["title"]
      end
    }
  end

  threads.each do |thread|
    thread.join
    #puts "#{thread} complete"
  end

  article_titles
end

#Inside the each enumerable of this method, since we are assigning the task of getting the http response
#and


start_time1 = Time.now
puts get_all_article_titles_without_threads(api_links).inspect
end_time1 = Time.now

start_time2 = Time.now
puts get_all_article_titles_with_threads(api_links).inspect
end_time2 = Time.now

#article_titles
puts "Without threads: #{end_time1.round(4) - start_time1.round(4)}s"
puts "With threads: #{end_time2.round(4) - start_time2.round(4)}s"

"hello"
