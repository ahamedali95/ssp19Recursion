// your code here

function listAllBlackShoes(inventory) {
  var str = "";
  
  inventory.forEach(function(shoeDesigner, i) {
    var designerName = shoeDesigner.name;
    var shoes = shoeDesigner.shoes;
    
    shoes.forEach(function(shoe, j) {
      var shoeName = shoe.name;
      
      if (isBlackShoe(shoeName)) {
        var shoePrice = shoe.price;
        
        if (i === inventory.length - 1 && j === shoes.length - 1) {
          str += designerName + ", " + shoeName + ", " + shoePrice;
        } else {
          str += designerName + ", " + shoeName + ", " + shoePrice + "\n";
        }
      }
    });
  });
  
  return str;
}

function isBlackShoe(shoe) {
  var description = shoe.split(" ");
  console.log(description);
  
  // for (var i = 0; i < description.length; i++) {
  //   if (description[i] === "black") {
  //     return true;
  //   }
  // }

  description.forEach(function(word) {
    console.log(word);
    if (word === 'black') {
      return true;
      
    }
  });
  
  return false;
}

console.log(isBlackShoe("tassled black lace-up"));