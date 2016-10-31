# Galvanize Sports

## Your Mission

Galvanize Sports is a small but growing online retailer. Their senior developer has written out the code for their inventory, as well as some function stubs for you to fill out. Write the code to add, remove, and total items for the web store.

For example, if a user calls `addItem(1, 1);`, the data should go from:

```js
inventory: {
    /* ... */
    id: 1,
    name: "Baseball Bat",
    price: 19.99,
    quantityAvailable: 3
    /* ... */
}
shoppingCart: {
    /* ... */
    itemId: 1,
    quantity: 0
    /* ... */
}
```

to:

```js
inventory: {
    /* ... */
    id: 1,
    name: "Baseball Bat",
    price: 19.99,
    quantityAvailable: 2
    /* ... */
}
shoppingCart: {
    /* ... */
    itemId: 1,
    quantity: 1
    /* ... */
}
```

If the user adds more items than are available, you should add as many as you can. If the user tries to remove more items than are in the cart, you should remove as many as you can.

Additionally, calling `getCheckoutTotal()` should return the value of all of the items in the shopping cart, with a 7.8% tax, rounded to the nearest penny.

# NOTE

* The only file you should edit is `galvanize_sports.js`. You should refer to `objects.js` to understand the format of the data.
* The inventory is available as `inventory`, and the shopping cart is available as `shoppingCart` in `galvanize_sports.js`

## Getting Started

* `npm install` to install the testing dependencies
* `npm test` to start a test runner that will automatically update when you save files (press `CTRL + C` to quit)
* You should work through each test one at a time. Once a single test is passing,
you should `git status`, `git add`, and `git commit` before moving on to the next
test.
* To move on to the next test, remove the `x` from the following `xit` statment
in `test/test.js`
* You are done when all of the assertions in `test/test.js` pass

## Hints

* You can add more functions than just the ones that have been stubbed out
* To do math with decimals in JavaScript, you need to convert to whole numbers, do the calculation, and then convert back to decimals again
* You can round numbers with the built-in `Math` object
* Some solutions are more clever or efficient than others, but any solution that makes the tests pass is acceptable
* You will likely have to use a combination of bracket and dot-notation to access the nested properties

## Interactivity

* You can run your application interactively by running:
    * `node`
    * `.load interactive.js`
    * `galvanizeSports.addItem(1, 1);`
    * `galvanizeSports.getCheckoutTotal();`
* Enjoy!

![](http://i.imgur.com/FdLbc1m.gif)
