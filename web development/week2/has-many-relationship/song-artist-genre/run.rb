require_relative "./artist.rb"
require_relative "./genre.rb"
require_relative "./song.rb"
require "pry"



artist1 = Artist.new("kanye")
song1 = Song.new("boo boo", artist1)
song2 = Song.new("lan lan", artist1)
artist1.add_song(song1)
artist1.add_song(song2)
binding.pry
"helll"
