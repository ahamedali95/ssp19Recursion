require_relative "./item.rb"
require_relative "./order.rb"
require "pry"

item1 = Item.new("paper towle", 2)
item2 = Item.new("paper cups", 1)
item3 = Item.new("honey", 4)

order1 = Order.new("1")
order1.add_item(item1)
order1.add_item(item2)
order1.add_item(item3)

binding.pry
"hello"
