var iPhone6S = new Phone("Apple", 2250, "silver", "iOS");

function Phone(brand, price, color, system) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.system = system;
}
Phone.prototype.printInfo = function () {
    console.log("The phone brand is " + this.brand + ", system is " + this.system + ", color is " + this.color + " and the price is " + this.price + ".");
}

iPhone6S.printInfo();
