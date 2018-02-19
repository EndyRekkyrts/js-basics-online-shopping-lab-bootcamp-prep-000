var cart = [];

function setCart(c) {
  cart = c;
  return cart;
}

function getCart() {
 return cart;
}

function addToCart(item) {
 const price = Math.floor(Math.random() * 100) +1;
 
 cart.push({[item]: price});
 
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  const length = cart.length;
  
  if (!length) {
    console.log("Your shopping cart is empty.");
  }
  var itemsAndPrices = [];
  
  for (var i = 0; i < length; i++) {
    var itemAndPrice = cart[i];
    var item = Object.keys(itemAndPrice)[0];
    var price = itemAndPrice[item];
    
    itemsAndPrices.push(`${item} at \$${price}`);
    }
  
  switch(itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ");
      break;
    default:
      itemsAndPrices[l-1] = "and ".concat(itemsAndPrices[l-1]);
      itemsAndPrices = itemsAndPrices.join(", ");
  }
  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
}

function total() {
  let total = 0;
  
  for (let i = 0, length = cart.length; i < 1; i++) {
    for (let item in cart[i]) {
      total += cart[i][item];
    }
  }
  return total;
}

function removeFromCart(item) {
  let itemInCart = false;
  
  for (let i = 0, length = cart.length; i < 1; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  }
    if (!itemInCart) {
    console.log("That item is not in your cart.");
    }

  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("Sorry, we don't have a credit card on file for you.");
  }
  console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
  
  cart = [];
}