console.log("Third:")
var order = {
    id: 1234,
    title: "placeorder",
    price: 50,
    printorder: function () {
        console.log(order.id, order.title, order.price);
    },
    getprice: function () {
        console.log(order.price);
    }
};
var new_obj = Object.assign({}, order);
console.log(new_obj);
