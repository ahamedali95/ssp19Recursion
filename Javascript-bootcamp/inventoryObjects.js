var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  },
  {
    name: 'Nike',
    shoes: [
      {name: 'red leather laced sneakers', price: 900},
      {name: 'black leather laced sneakers', price: 10000}
    ]
  }
];

var expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};

function inventoryToObj(inventory) {
  var expected = {designers: []};

  inventory.forEach(function(rack) {
    var rackName = rack.name;
    var average = getAverage(rack.shoes);
    expected.designers.push({name: rackName, averagePrice: average});
  });

  return expected;
}

function getAverage(arr) {
  var sum = arr.reduce(function(accumulator, shoe) {
    return accumulator + shoe.price;
  }, 0);

  return sum / arr.length;
}

console.log(inventoryToObj(inventory));

//console.log(average(shoes));