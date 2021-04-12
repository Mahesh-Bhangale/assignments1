var order={
    id     : 1234,
    title  :"placeorder",
    price  :50,
    printorder(){
        console.log(order.id,order.title,order.price)
    },
    getprice(){
        console.log(order.price)
    }

}
const new_obj = Object.assign({},order);
console.log(new_obj);