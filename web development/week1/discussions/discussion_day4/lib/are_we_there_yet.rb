require 'pry'

class Person
  attr_reader :name, :happiness, :hygiene
  attr_accessor :bank_account

  def test_limit(points)
    if points > 10
      return 10
    elsif points < 0
      return 0
    else
      return points
    end
  end

  def initialize(name, bank_account = 25, happiness = 8, hygiene = 8)
    @name = name
    @bank_account = bank_account
    @happiness = happiness
    @hygiene = hygiene
  end

  def happiness=(happy_points)
    @happiness = test_limit(happy_points)
  end

  def hygiene=(hygiene_points)
    @hygiene = test_limit(hygiene_points)
  end

  binding.pry
  def clean?
    @hygiene > 7
  end

  def happy?
    @happiness > 7
  end

  def get_paid(salary)
    @bank_account += salary
    "all about the benjamins"
  end

  def take_bath
    @hygiene += 4
    @hygiene = test_limit(@hygiene)

    "♪ Rub-a-dub just relaxing in the tub ♫"
  end

  def work_out
    @happiness += 2
    @happiness = test_limit(@happiness)

    @hygiene -= 3
    @hygiene = test_limit(@hygiene)

    "♪ another one bites the dust ♫"
  end

  def call_friend(friend)
    @happiness += 3
    happiness=(@happiness)
    # @happiness += 3
    # @happiness = test_limit(@happiness)

    # friend.happiness += 3
    # friend.happiness = test_limit(friend.happiness)
    happiness=(friend.happiness += 3)

    "Hi #{friend.name}! It's #{@name}. How are you?"
  end

  #binding.pry

  def start_conversation(person_start, topic)
    if topic == "politics"
      return "blah blah partisan blah lobbyist"
    elsif topic == "weather"
      return "blah blah sun blah rain"
    else
      return "blah blah blah blah blah"
    end
  end

end

# binding.pry
#
# "hello"


def are_we_there_yet()
  4.times do
    puts "are we there yet?"
  end
end
