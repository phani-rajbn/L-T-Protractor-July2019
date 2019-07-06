module.exports = (function(){
    var cart = [];

    function add(item){
        cart.push(item)
    }

    function getAll(){
        return cart;
    }
    
    //functions created in the module are hidden, so U should expose the functions thro an object using return {}.
    return {
        insert : add, 
        getAll : getAll
    }
})();//MOdule being created thro Anonymous function....