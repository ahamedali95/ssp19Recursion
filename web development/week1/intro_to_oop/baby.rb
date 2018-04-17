class Dog
end

class Baby #Class definition
  #Class body
  @@all = [] #Class variable
  attr_accessor :name, :eye_color, :weight, :birthplace
  attr_reader :birthday

  def initialize #Hook / Callback / Life Cycle Event - because it is a   method that automatically
    #fires when instantiating a new class
    self.cry() #Explicit Receiver of self
    cry() #Implicit Receiver of self
    @birthday = Time.now
    @@all << self #The baby that is created at the moment should  be  pushed in to this class variable
  end

  def self.all #Class method (class reader)
    @@all
  end

  def cry() #Instance method - represents an object's ability to have logic
    puts "Waaaa"
  end

  #Use attr_accessor to  add  attributes rather than defining writer and reader methods for every attribute
  def name=(the_baby_name) #writer - writes 'the_baby_name' to  'my_name'
    @my_name = the_baby_name #instance variable - casting the local variable to instance variable
  end

  def name()
    @my_name
  end

  def eye_color=(the_eye_color)
    @my_eye_color = the_eye_color
  end

  def eye_color()
    @my_eye_color
  end
end

# north_west = Baby.new #Instantiation - brining an object to life
# north_west.cry() #Waaaa
#
# north_west.name = "North West" #undefined method `name=' so  we need the writer and reader methods
#
# north_west.name #North West
#
# rooky_water = Baby.new
# rooky_water.cry() #Waaaa
#
# rooky_water.name = "Rooky Water"
#
# north_west.name #"Rooky Water" - So we need instance variable so that each
# #local varaible is available to each instance of a class. Now it will be "North West"

Baby #The class itself
Baby.new #An instance of a Class

Baby.all() #=> This is the method we should build which will return all the baby objects we have created:
[#<baby>,<#baby>,<#baby>] so for that we need to use self.all




#Notes
#objects have data
#everything in Ruby is an object
#They have a bahavior
#It is an instance of a class

#For example 7.odd? => true - 7 is an object 7.methods would give us all
#predefined methods that can act on this object.
#7.odd? => 7 is the receiver; odd? is a message
