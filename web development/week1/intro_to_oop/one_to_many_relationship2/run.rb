# require_relative "./tweet.rb"
# require_relative "./user.rb"
require_relative "./avenger.rb"
require_relative "./movie.rb"
require_relative "./appearance.rb"
require "pry"


avenger1 = Avenger.new("spider", "throw spiders")
avenger2 = Avenger.new("hulk", "smash")

movie1 = Movie.new("spiderman")
movie2 = Movie.new("hulk1")

avenger1.appear_in_movie(movie1)
avenger2.appear_in_movie(movie2)
binding.pry
"hello"
