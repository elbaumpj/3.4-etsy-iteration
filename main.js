// 1.

var allPrices = items.map(function(item){
return item["price"];
});
//the above function takes all prices and puts them into an array called allPrices
var grossPrice = allPrices.reduce(function(previousValue, currentValue){
    return (previousValue + currentValue);
});
// this function adds all of the prices in the allPrices array together using reduce
var averagePriceLong = (grossPrice / items.length); // divides the total of all prices by the number of items
var averagePrice = Math.round(averagePriceLong * 100) / 100; // rounds to two decimal places
//used StackOverflow for rounding: http://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-in-javascript
console.log("The average price is: " + averagePrice);

//2.

var priceRange = items.filter(function(item){
  var range = item["price"] >= 14 && item["price"] <= 18;
  return range;
});
//the function targets the price of each item and then on line 17 filters those items to return those that have a
//price range between 14 and 18
console.log("Items that cost between $14.00 and $18.00 USD: " + priceRange);

//3.
var britishPounds = items.filter(function(item){
  return item["currency_code"] == "GBP";
});
//this function finds the one item with a currency code of GBP
var priceSentence = britishPounds.forEach(function(item){
 console.log(item["title"] + " costs " + " £" + item["price"]);
});
//here I use forEach loop to print the title and price of the object
//I realize this is a bit ridiculous for one object, but this code would scale if there were more than one object
// that used GPB.

//4.
