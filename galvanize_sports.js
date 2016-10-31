var data = require("./objects");
var inventory = data.inventory;
var shoppingCart = data.shoppingCart;



function findItemInShoppingCartById(itemId) {
  for (var i = 0; i < shoppingCart.length; i++){
    if (shoppingCart[i].itemId === itemId){
      return shoppingCart[i];
    }
  }

}

function findItemInInventoryById(itemId) {
  for (var i = 0; i < inventory.length; i++){
    if (inventory[i].id === itemId){
      return(inventory[i]);
    }
  }
}

function addItem(itemId, quantity){
    // Hint: use findItemInShoppingCartById and findItemInInventoryById
    // to find the items before increasing/decreasing quantities
    // 1) when requested quantity is greater than available inventory, remaining inventory is added to cart
    if (quantity > findItemInInventoryById(itemId).quantityAvailable) {
        findItemInShoppingCartById(itemId).quantity += findItemInInventoryById(itemId).quantityAvailable;
        findItemInInventoryById(itemId).quantityAvailable = 0 ;
    } else {
      findItemInShoppingCartById(itemId).quantity += quantity;
      findItemInInventoryById(itemId).quantityAvailable -= quantity;
    }

}

// 3) number of items removed from cart does not exceed the quantity of items actually in the cart


function removeItem(itemId, quantity){
  if (findItemInShoppingCartById(itemId).quantity < quantity){
    findItemInInventoryById(itemId).quantityAvailable += findItemInShoppingCartById(itemId).quantity;
    findItemInShoppingCartById(itemId).quantity = 0;
  } else {
    findItemInShoppingCartById(itemId).quantity -= quantity;
    findItemInInventoryById(itemId).quantityAvailable += quantity;
  }
}

function getCheckoutSubtotal(){
    var checkoutSubtotal = 0.00;
    var itemIdsCart = [];
    var quantityCart = [];
    var itemCartPrice = [];
    for (var i = 0; i < shoppingCart.length; i++){
        //loop through items in shoppingCart and push itemId to array
        itemIdsCart.push(shoppingCart[i].itemId);
    }
    for (var i = 0; i < shoppingCart.length; i++){
      //loop through items in shopping cart and collect quantity then push quantity to array
      quantityCart.push(shoppingCart[i].quantity);
    }
    for (var i = 0; i < inventory.length; i++)
      if (inventory[i].id == itemIdsCart[0] || inventory[i].id == itemIdsCart[1] || inventory[i].id == itemIdsCart[2]){
        itemCartPrice.push(inventory[i].price);
      }
    for (var i = 0; i < itemCartPrice.length; i++){
      checkoutSubtotal += itemCartPrice[i] * quantityCart[i];
    }
    return checkoutSubtotal;
    // return checkoutSubtotal;
}

function getTax(subtotal, rate){
    var tax = 0.00;
    tax = subtotal * rate;
    return tax;
}

//getTax(300, 0.078), 23.40

function getCheckoutTotal(){
    var TAX_RATE = 0.078;
    var checkoutTotal = 0.00;
    var longCheckoutTotal = 0;
    longCheckoutTotal = (getCheckoutSubtotal() * TAX_RATE) + getCheckoutSubtotal();
    checkoutTotal = longCheckoutTotal.toFixed(2);
    return checkoutTotal;
}

getCheckoutTotal(), 323.36

module.exports = {
    inventory,
    shoppingCart,
    addItem,
    removeItem,
    getCheckoutTotal,
    getTax,
    getCheckoutSubtotal,
    findItemInShoppingCartById,
    findItemInInventoryById
}
