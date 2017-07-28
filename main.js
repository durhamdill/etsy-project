// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.

// NOTES: identify the price of all items; add them together; divide by total number of items to get average price

// add the following funtion to round final answer; found on this site: http://www.jacklmoore.com/notes/rounding-in-javascript/

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function question1 () {
  // Answer:
  let etsyPrices = [];
  let etsyPriceSum = 0;
  for (let product=0; product<data.length; product++) {
    if (data[product].price){
      etsyPrices.push(data[product].price);
      etsyPriceSum+=data[product].price;
    }
  }
  console.log("The average price is $" + round(etsyPriceSum/etsyPrices.length, 2));
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD

// NOTES: scan prices for those greater than or equal to $14 and less than or equal to $18; put them in new array
function question2 () {
  // Answer:
  let etsyPrice14_18 = [];
  for (let product=0; product<data.length; product++) {
    if (data[product].price>=14 && data[product].price<=18){
    // if (data[product].price>=14 && data[product].price<=18);
    etsyPrice14_18.push(data[product].title);
    }
  }
  console.log(etsyPrice14_18.join("\r\n"));
  // console.log(etsyPrice14_18);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  for (let product=0; product<data.length; product++) {
    if (data[product].currency_code==="GBP"){
    console.log(data[product].title + " costs " + data[product].price + " pounds.");
    }
  }
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  for (let product=0; product<data.length; product++) {
    if (data[product].materials); {
      for (let material=0; data[product].materials[material]; material++) {
        if (data[product].materials[material]==="wood") {
          console.log(data[product].title + " is made of wood.");
        }
      }
    }
  }
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  for (let product=0; product<data.length; product++) {
    if (data[product].materials.length >=8) {
      console.log(data[product].title + " has " + data[product].materials.length + " materials:\n");

      // create additional inner loop to print each material item individually and add the dash:
        for (let material=0; material<data[product].materials.length; material++) {
          console.log("- " +data[product].materials[material]+"\n");
  }
}
}
}

// NOTES: attempt to create new array to catch material list and add dash before it:
// for (let product=0; product<data.length; product++) {
//   if (data[product].materials.length >=8); {
//     for (let material=0; material<data[product].materials.length; material++) {
//         let materialList = [];
//         materialList.push(data[product].materials[material]);
//
//       }
//     }
//   }
// }
// }


// 6: How many items were made by their sellers?

// NOTES: i only counted those that had a value of "i_did"; did not inlcude "collective"
// Answer:
function question6 () {
  // Answer:
  let handmadeTotal=0;
  for (let product=0; product<data.length; product++) {
    if (data[product].who_made==="i_did") {
      handmadeTotal++;
    }
  }
  console.log(handmadeTotal + " items were made by their sellers.");
}
