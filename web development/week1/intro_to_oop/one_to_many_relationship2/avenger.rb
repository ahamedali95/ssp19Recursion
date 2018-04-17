class Avenger
  attr_accessor :name, :power

  ALL = []

  def initialize(name, power)
    @name = name
    @power = power
    ALL << name
  end

  def self.all
    ALL
  end

  def appear_in_movie(movie)
    Appearance.new(self, movie)
  end
end
