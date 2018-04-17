class Bicycle

  attr_reader :tire
  @@bikes = []
  @@style = []

    def initialize(tire, gears, style)
      @tire = tire
      @gears = gears
      @@bikes << self
      if @@style.index(style) != nil
        style << @@style
      end
    end

    def tire_size=(size)
      @tire = size
    end

    def gears
      @gears
    end

    def self.bikes
      @@bikes
    end

    def self.style
      @@style
    end

end

mongoose = Bicycle.new(4, 10, "BMX")

# mongoose.tire_size = 5, mongoose.gears, Bicycle.bikes, Bicycle.style?
