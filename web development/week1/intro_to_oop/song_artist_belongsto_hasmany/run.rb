require_relative "./artist.rb"
require_relative "./song.rb"
require "pry"



artist1 = Artist.new("kannan")
artist1.add_song_by_name("boo boo", "melody")
artist1.add_song_by_name("koo", "rap")


binding.pry
