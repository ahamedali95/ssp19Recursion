def get_elements_with_a(arr)
  arr.select do |element|
    element.start_with?("a")
  end
end

arr = ["apple", "pear", "face", "champagne", "palm tree", "aardvark", "pineapple"]
puts get_elements_with_a(arr)
