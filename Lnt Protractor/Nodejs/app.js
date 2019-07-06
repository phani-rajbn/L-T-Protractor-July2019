
var flipkart = require('./cartModule');//No need for js
flipkart.insert({"id":111, "name":"Mi Note 4", "price" : 450});
flipkart.insert({"id":112, "name":"Mi Note 5", "price" : 450});
flipkart.insert({"id":113, "name":"Mi Note 6", "price" : 450});
flipkart.insert({"id":114, "name":"Mi Note 7", "price" : 450});
var data = flipkart.getAll();
for (let index = 0; index < data.length; index++) {
    const element = data[index];
    console.log(element);
}