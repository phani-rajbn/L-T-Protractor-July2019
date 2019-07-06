var book = function(id, title, cost){
    this.bookID =id;
    this.title = title;
    this.price = cost;
}

//Repository Pattern
var bookStore = function(){
    var store = [
        new book(123, "Learning Javascript", 500),
        new book(124, "2 States", 300),
        new book(125, "Cricket Ethics", 400),
        new book(126, "Messi, the new Maradona", 450)
];//Blank Array

    this.addBook = function(bk){
        store.push(bk);
        alert("Book added successfully")
    }

    this.deleteBook = function(id){
        for(i =0; i < store.length;i++){
            //finding a book using for loop....
            if(store[i].bookID == id){
                store.splice(i, 1);//removes the item from the specified index(i) and 2nd arg is the no of items to remove. 1 means only one Item will be removed.
                return;
            }
        }
        throw "Item not found to remove";//Raising Exception in JS.....
    }

    this.updateBook = function(bk){
        //finding a book using Lambda Expression
        var found = store.find((b) =>b.bookID == bk.bookID);
        if(found == null)
            throw "Book not found to update";
        found.title = bk.title;
        found.price =bk.price
        alert("Book details are updated");      
    }

    this.getAllBooks = function(){
        return store;
    }
}

function $(element){
    return document.getElementById(element);
}

function show(element){
    document.getElementById(element).style.visibility = "visible";
}

function $click(element, func){
    $(element).addEventListener('click', func);
}