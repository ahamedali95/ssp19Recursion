class Series
  #series has many characters
  attr_reader :name, :cast

  def initialize(name)
    @name = name
    @cast = []
  end

  def add_character(character_obj)
    self.cast << character_obj
    character_obj.series = self
  end


end
