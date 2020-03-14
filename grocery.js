var Grocery = /** @class */ (function () {
    function Grocery(newName, newQty, newPrice) {
        this.itemName = newName;
        this.itemQty = newQty;
        this.itemPrice = newPrice;
    }
    Grocery.prototype.ToHTML = function () {
        return "<tr><td>" + this.itemName + "</td><td>" + this.itemQty + " @ </td><td>$" + this.itemPrice + " each.</td></tr>";
    };
    return Grocery;
}());
var GroceryCart = [
    new Grocery('Bread', 1, 1.99),
    new Grocery('Sliced ham', 1, 3.95),
    new Grocery('Sliced cheese', 1, 2.95),
    new Grocery('Milk', 1, 3.29),
    new Grocery('Chips', 1, 4.95)
];
