const addForm = document.getElementById("add-form");
const btnAdd = document.getElementById("btn-addForm");
const btnSubmit = document.getElementById("submitNew");
const bookInfo = document.querySelectorAll(".form-control"); 
const bookRead = document.querySelectorAll(".form-check-input");



var myLibrary = []

function Book(title, author, pages, read = false){
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
    return myLibrary
};
book1 = new Book("TiTRE","Auteur","pages");
addBookToLibrary(book1);

const displayBooks = document.querySelector(".display-book");
function getAllBooks(){
    myLibrary.forEach(element => {
        var size = Object.keys(element).length;
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
        td_elt4.innerHTML = element.read;
        trr.appendChild(td_elt4);
    });
};

getAllBooks();


/*------------------------------------------------------------------------------------ */

btnSubmit.addEventListener('click', e=> {
    const newTitle = document.getElementById("title").value
    const newAuthor = document.getElementById("author").value 
    const newPages = document.getElementById("pagesNum").value

    const status = document.querySelector("input[type=radio]:checked").value;
    console.log(newTitle);
    console.log(newAuthor);
    console.log(newPages);
    console.log(status);   

    book = new Book(newTitle, newAuthor, newPages,status );
    addBookToLibrary(book);
    //console.log("array library")
    //console.log(myLibrary)
    //getAllBooks();
});
