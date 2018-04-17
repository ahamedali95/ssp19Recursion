class Artist

  attr_accessor :name, :songs

  def initialize(name)
    @name = name
    @songs = []
  end

  def add_song(song_instance)
    song_instance.artist << self
    @songs << song_instance
  end
end
