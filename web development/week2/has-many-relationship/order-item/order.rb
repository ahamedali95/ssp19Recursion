class Order

  attr_accessor :id, :items

  def initialize(id)
    @id = id
    @items = []
  end

  def add_item(item_instace)
    @items << item_instace
  end
end
