class Artist
  attr_accessor :name, :songs

  def initialize(name)
    @name = name
    @songs = []
  end

  def add_song_by_name(title, genre)
    new_song = Song.new(title, genre)
    @songs << new_song
    new_song.artist = self
  end

  def list_songs
    @songs.map do |song_instance|
      song_instance.title
    end
  end

  def genre
    @songs.map do |song_instance|
      song_instance.genre
    end
  end
end
