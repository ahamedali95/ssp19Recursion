var currentInventory = [
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
  }
];

function renderInventory(inventory) {
  var str = "";
  
  inventory.forEach(function(shoeDesigner, i) {
    var designerName = shoeDesigner.name;
    var shoes = shoeDesigner.shoes;
    
    shoes.forEach(function(shoe, j) {
      var shoeName = shoe.name;
      var shoePrice = shoe.price;
      
      if (i === inventory.length - 1 && j === shoes.length - 1) {
        str += designerName + ", " + shoeName + ", " + shoePrice;
      } else {
        str += designerName + ", " + shoeName + ", " + shoePrice + "\n";
      }
        
    });
  });
  
  return str;
}

//console.log(renderInventory(currentInventory));

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("Passed");
  } else {
    console.log("Failed! Expected: " + expected + " but got: " + actual);
  }
}

var actual = renderInventory(currentInventory).split("\n");
var expected = 'Gucci, black leather laced sneakers, 900';
//assertEqual(actual.pop(), expected, "It returns a string containing all the shoe names along with its price");
console.log(actual);