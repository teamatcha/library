const addForm = document.getElementById("add-form");
const btnAdd = document.getElementById("btn-addForm");
const btnSubmit = document.getElementById("submitNew");
const bookInfo = document.querySelectorAll(".form-control"); 
const bookRead = document.querySelectorAll(".form-check-input");
const displayBooks = document.querySelector(".display-book");
var myLibrary = []

function Book(title, author, pages, read = "notread"){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function (){
        return title + " by " + author + ", " + pages + " pages, " + read;
    };   
};


function addBookToLibrary(book){
    myLibrary.push(book);
    resetDisplay();
   // console.log(myLibrary.length);
    getAllBooks();
    //addToList(book);
};

book2 = new Book("TiTRE","Auteur","2230","read");
addBookToLibrary(book2);
book1 = new Book("TiTRE","Auteur","pages");
addBookToLibrary(book1);
book4 = new Book("Tefsjeiof","Auteesfssefur","43", "read");
addBookToLibrary(book4);

function resetDisplay(){
    displayBooks.innerHTML = ""
};


btnSubmit.addEventListener('click', e=> {
    const newTitle = document.getElementById("title").value
    const newAuthor = document.getElementById("author").value 
    const newPages = document.getElementById("pagesNum").value
    const status = document.querySelector("input[type=radio]:checked").value;  

    book = new Book(newTitle, newAuthor, newPages,status );
    addBookToLibrary(book);

});

function getAllBooks(){
    myLibrary.forEach((element,index) => {
        //console.log("element + index " + element + index)
        var trr = document.createElement("tr");
        displayBooks.appendChild(trr);
        var td_elt = document.createElement("td");
        td_elt.innerHTML = element.title;
        trr.appendChild(td_elt);
        var td_elt2 = document.createElement("td");
        td_elt2.innerHTML = element.author;
        trr.appendChild(td_elt2);
        var td_elt3 = document.createElement("td"); 
        td_elt3.innerHTML = element.pages;
        trr.appendChild(td_elt3);

        var td_elt4 = document.createElement("td");
        readButton = document.createElement("button");
        
        readButton.innerHTML = element.read;
        test = readButton.innerHTML
        td_elt4.appendChild(readButton);

        readButton.addEventListener('click', e=>{
            console.log("index = " + index);
            console.log("element = " + element.read);
         
            
            if(element.read == "notread"){
                element.read = "read";
                readButton.innerHTML = element.read;

            }else{
                element.read = "notread"
                //readButton.style.visibility = "hidden"
                readButton.innerHTML = element.read;
              //  
            }
            console.log("element = " + element.read);
         
            resetDisplay();
            getAllBooks();
            
                
        })
        trr.appendChild(td_elt4);

        var td_elt5 = document.createElement("td"); 
        deleteButton = document.createElement("button");
        deleteButton.innerHTML = "DELETE"
        td_elt5.appendChild(deleteButton);
        deleteButton.addEventListener('click', e=>{
            myLibrary.splice(index, 1);
            resetDisplay();
            getAllBooks();
        })
       trr.appendChild(td_elt5);
    });
};



/*-------------------------*/
/*

function addToList(book){
    var trr = document.createElement("tr");
    displayBooks.appendChild(trr);
    var td_elt = document.createElement("td");
    td_elt.innerHTML = book.title;
    trr.appendChild(td_elt);
    var td_elt2 = document.createElement("td");
    td_elt2.innerHTML = book.author;
    trr.appendChild(td_elt2);
    var td_elt3 = document.createElement("td"); 
    td_elt3.innerHTML = book.pages;
    trr.appendChild(td_elt3);
    var td_elt4 = document.createElement("td");
    readButton = document.createElement("button");

    td_elt4.innerHTML = book.read;
    td_elt4.appendChild(readButton);

    trr.appendChild(td_elt4);

    var td_elt5 = document.createElement("td"); 
       /* deleteButton = document.createElement("button");
        deleteButton.innerHTML = "DELETE"
        td_elt5.appendChild(deleteButton);
        deleteButton.addEventListener('click', removeBook);
    trr.appendChild(td_elt5);
}*/