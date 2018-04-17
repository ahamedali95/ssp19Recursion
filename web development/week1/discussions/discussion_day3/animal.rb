# QUESTIONS
# 1 . If the Animal class is defined like this:

class Animal
  def species
    "cat"
  end
end

# How would you:
#
# a. Make a new instance of Animal? b. puts out to the terminal, the species of that new Animal instance?
#animal1 = Animal.new
#
# 2 . Although we all know that cats are the best species, not all animals are cats (unfortunately). How could you change the Animal class so that an instance of animal can have its species set to any species at all?
#
class Animal
  def species=(species_name)
    @my_name = species_name
  end

  def species
    @my_name
  end
end

# 3 . We have the following class, and the following two instances of that class:

class Animal
  def species
    "cat"
  end
end

# maru = Animal.new
# hanna = Animal.new
# maru == hanna
# Given the above, what will the following return? Why?

#false because they are two different objects and exist in different memory location

# 4 . Given the following class:

class Animal
  def species
      my_species = "cat"
  end

  def say_species
      puts "Hi! I'm a #{my_species}"
  end
end
# What will happen when we invoke the following code?
#
# maru = Animal.new
# maru.say_species
#unrecognized local variable becase my_species belongs to species method
# Is it broken? Why? How can you fix it?

class Animal
  def species
      @my_species = "cat"
  end

  def say_species
      @puts "Hi! I'm a #{my_species}"
  end
end
#
# 5 . Reverse engineer this code (i.e., write the class that will make the code work as invoked below):
#
# frederick = Animal.new("bull")
# frederick.species
# # => "bull"
# Hint: How can you instantiate, or initialize, an instance of a class with a given value? What kind of variable would you use so that that value can be shared across instance methods within a class?
#

class Animal

  def initialize(species_name)
    @my_species = species_name
  end

  def species
    @my_species
  end
end

# 6 . Given the following code:

class Animal
  @@all = []

  def initialize(species)
    @species = species
    @@all << self
  end

  def show_all
    # Return the value of this variable
    @@all
  end

end

#lil_bub = Animal.new("cat")
#What is the relationship between lil_bub and the Animal class?
# lil_bub is an object that is created when instantiating the Animal with species_name - cat
# and Animal is a class itself



class Baby
  attr_accessor :name, :birthplace, :eyecolor
  attr_reader :birthday


end
