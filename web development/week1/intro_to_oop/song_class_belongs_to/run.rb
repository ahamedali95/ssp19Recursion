require_relative "./artist.rb"
require_relative "./song.rb"

song1 = Song.new("boo boo")
artist1 = Artist.new("ryan", "melody")
song1.artist = artist1
puts song1.artist.name

#binding.pry
