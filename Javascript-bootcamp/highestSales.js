var salesTeam = [
 {"name":"Aleen Atkins","salesInfo":{"totalSales":"$2314","numSales":19},"yearBorn":1991},
 {"name":"Alvaro Angelos","salesInfo":{"totalSales":"$1668","numSales":17},"yearBorn":1962},
 {"name":"Denese Dossett","salesInfo":{"totalSales":"$9248","numSales":18},"yearBorn":1988},
 {"name":"Douglas Denney","salesInfo":{"totalSales":"$5058","numSales":15},"yearBorn":1964},
 {"name":"Earline Erickson","salesInfo":{"totalSales":"$18876","numSales":11},"yearBorn":1998},
 {"name":"Herman Hazell","salesInfo":{"totalSales":"$2746","numSales":12},"yearBorn":1992},
 {"name":"Homer Hirth","salesInfo":{"totalSales":"$474","numSales":19},"yearBorn":1991},
 {"name":"Hwa Heidt","salesInfo":{"totalSales":"$9607","numSales":24},"yearBorn":1964},
 {"name":"Hyon Hampshire","salesInfo":{"totalSales":"$13598","numSales":23},"yearBorn":1971},
 {"name":"Issac Ingerson","salesInfo":{"totalSales":"$5225","numSales":13},"yearBorn":1972},
 {"name":"Jeraldine Joplin","salesInfo":{"totalSales":"$2891","numSales":10},"yearBorn":1978},
 {"name":"Jin Jeffrey","salesInfo":{"totalSales":"$14402","numSales":14},"yearBorn":2000},
 {"name":"Joleen Jolin","salesInfo":{"totalSales":"$15736","numSales":17},"yearBorn":1972},
 {"name":"Jude Jarrett","salesInfo":{"totalSales":"$7557","numSales":21},"yearBorn":1964},
 {"name":"Magda Mireles","salesInfo":{"totalSales":"$1498","numSales":10},"yearBorn":1999},
 {"name":"Mistie Montealegre","salesInfo":{"totalSales":"$6920","numSales":23},"yearBorn":1986},
 {"name":"Nancy Napoli","salesInfo":{"totalSales":"$5255","numSales":24},"yearBorn":1968},
 {"name":"Regine Rohrbaugh","salesInfo":{"totalSales":"$7881","numSales":21},"yearBorn":1984},
 {"name":"Rolando Riebel","salesInfo":{"totalSales":"$8573","numSales":20},"yearBorn":1982},
 {"name":"Scarlett Stagg","salesInfo":{"totalSales":"$7126","numSales":11},"yearBorn":1981},
 {"name":"Sherron Strawn","salesInfo":{"totalSales":"$8848","numSales":13},"yearBorn":1981},
 {"name":"Susan Shilling","salesInfo":{"totalSales":"$8542","numSales":17},"yearBorn":1988},
 {"name":"Tama Tworek","salesInfo":{"totalSales":"$9200","numSales":12},"yearBorn":2001},
 {"name":"Tonisha Taunton","salesInfo":{"totalSales":"$5219","numSales":19},"yearBorn":1976},
 {"name":"Vergie Villescas","salesInfo":{"totalSales":"$8712","numSales":10},"yearBorn":1992}
 ];

function highestAverageSales(salesTeam) {
  var str = "";
  
  for (var i = 0; i < salesTeam.length; i++) {
    var salePerson = salesTeam[i];
    var totalSales = salesToNumber(salePerson.salesInfo.totalSales);
    var numSales = salePerson.salesInfo.numSales;
    var averageSales = getAverageSaleAmount(totalSales, numSales);
    
    if (i === salesTeam.length - 1) {
      str += `${salePerson.name} has the highest average sales at $${averageSales} per sale.`;
    } else {
      str += `${salePerson.name} has the highest average sales at $${averageSales} per sale. \n`;
    }
  }
  
  return str;
}

function getAverageSaleAmount(totalSalesales, numSales) {
  return Math.round(totalSalesales/numSales);
}

function salesToNumber(str) {
  return Number(str.slice(1));
}

console.log(highestAverageSales(salesTeam));