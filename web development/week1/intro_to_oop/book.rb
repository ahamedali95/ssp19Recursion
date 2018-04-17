require "pry"

class Book
  attr_accessor :title, :authors, :description

  @@all = []

  def initialize (title, authors)
    @title = title
    @authors = authors
    @@all <<  self
  end

  def zorp
    puts 'zorp'
  end

  def self.all
    @@all
  end

  # def title
  #   @title
  # end
  #
  # def authors
  #   @authors
  # end

  def formatted_title
    @title.split(" ").map{|word| word.capitalize}.join(" ")
  end

  def formatted_authors
    @authors.join(" & ")
  end

  def to_s
    "#{formatted_title} by #{formatted_authors}"
  end

  def display_self
    self
  end
end

binding.pry
"hello"
