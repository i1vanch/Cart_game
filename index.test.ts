
const { it, expect } = require("@jest/globals");
const { templateCarts } = require("./index");


it('должен проверить наличие блока сart', () => {
    const cart = document.querySelector('.cart');
    expect(cart);

    if (!cart) {
    throw Error("cart is not defined");
  }
});