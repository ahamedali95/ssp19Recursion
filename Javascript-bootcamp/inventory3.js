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

[ 
{ 
	"nameWords": [ "tasselled", "black", "low-top", "lace-up" ], 
	"targetWordIndex": 3 
}, 
{ 	"nameWords": [ "tasselled", "green", "low-top", "lace-up" ], 
	"targetWordIndex": 3 
}, 
{ 	"nameWords": [ "red", "leather", "laced", "sneakers" ], 
	"targetWordIndex": 2 
}, 
{ 	"nameWords": [ "black", "leather", "laced", "sneakers" ], 
	"targetWordIndex": 2 
}
] 

function lacedShoes(inventory) {
  var lacedShoes = [];

  inventory.forEach(function(designer) {
  	var shoes = designer.shoes;

  	shoes.forEach(function(shoe) {
  		shoeName = shoe.name;

  		if (isLacedShoe(shoeName)) {
  			lacedShoes.push({nameWords: shoeName.split(" "), targetWordIndex: getIndex(shoeName.split(" "))});
  		}
  	});
  });

  return lacedShoes;
}

function isLacedShoe(name) {
	return name.split(" ").includes("laced") || name.split(" ").includes("lace-up");
}

function getIndex(arr) {
	if (arr.indexOf("laced") !== -1) {
		return arr.indexOf("laced");
	} 

	return arr.indexOf("lace-up");
}

console.log(lacedShoes(currentInventory));
