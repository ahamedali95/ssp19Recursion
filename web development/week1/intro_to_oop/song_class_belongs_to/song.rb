class Song
  attr_reader :name
  attr_accessor :artist

  def initialize(name)
    @name = name
  end
end
