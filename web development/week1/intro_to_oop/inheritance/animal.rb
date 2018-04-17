require "pry"

class Animal
  attr_accessor :num_legs, :num_eyes, :type, :cuteness

  def initialize(num_legs, num_eyes, type, cuteness)
    @num_legs = num_legs
    @num_eyes = num_eyes
    @type = type
    @cuteness = cuteness
  end

  def walk
    "Walking on #{}"
  end
end

#Dog inherits from Animal
#Dog extends Animal
#Dog is a child class of Animal
#Dog is a subclass of Animal
#Animal is a parent class of Dog
#Animal is a superclass of Dog

class Dog < Animal
  attr_accessor :breed

  def initialize(breed, cuteness)
    super(4,2,"mammal",cuteness) #calling initialize from Animal
    @breed = breed
  end
end

octopus = Animal.new(9,2,"carnivore",10000)
dog = Dog.new("shepherd", 5000000)

binding.pry
