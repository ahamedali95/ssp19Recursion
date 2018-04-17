class Character
  attr_reader :name, :alliance, :series

  def initialize(name, alliance)
    @name = name
    @alliance = alliance
  end
end
