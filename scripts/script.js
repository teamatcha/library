const addForm = document.getElementById("add-form");
const btnAdd = document.getElementById("btn-addForm");
const btnSubmit = document.getElementById("submitNew");
const bookInfo = document.querySelectorAll(".form-control"); 
const bookRead = document.querySelectorAll(".form-check-input");
const displayBooks = document.querySelector(".display-book");
var myLibrary = []

function Book(title, author, pages, read = "not read"){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    /*this.info = function (){
        return title + " by " + author + ", " + pages + " pages, " + read;
    };*/   
};

function addBookToLibrary(book){
    myLibrary.push(book);
    resetDisplay();
    getAllBooks();
};

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
        var tableRow = document.createElement("tr");
        
        displayBooks.appendChild(tableRow);
        var titleColonmn = document.createElement("td");
        titleColonmn.classList.add('colomn-table');
        titleColonmn.innerHTML = element.title;
        tableRow.appendChild(titleColonmn);
        var authorColomn = document.createElement("td");
        authorColomn.classList.add('colomn-table');
        authorColomn.innerHTML = element.author;
        tableRow.appendChild(authorColomn);
        var pagesColomn = document.createElement("td"); 
        pagesColomn.classList.add('colomn-table');
        pagesColomn.innerHTML = element.pages;
        tableRow.appendChild(pagesColomn);

        var readColomn = document.createElement("td");
        readColomn.classList.add('colomn-table');
        readButton = document.createElement("button");
        readButton.classList.add('btn-row');
        readButton.setAttribute("id", "readorNot")

        if(element.read === "not read"){
            readButton.innerHTML = "\u2718";
        }else{
            readButton.innerHTML = "\u2714";
            readButton.setAttribute("background-color", "green");
        }

        readButton.addEventListener('click', e=>{ 
           if(element.read === "not read"){
                readButton.innerHTML = "\u2714";
                element.read = "read";
            }else{
                element.read = "not read"
                readButton.innerHTML =  "\u2718";
            }
            resetDisplay();
            getAllBooks();
        });

        readColomn.appendChild(readButton);
        tableRow.appendChild(readColomn);

        var deleteColomn = document.createElement("td"); 
        deleteColomn.classList.add('colomn-table');
        deleteButton = document.createElement("button");
        deleteButton.classList.add('btn-row');
        deleteButton.setAttribute("id", "delete")
        deleteButton.innerHTML = "DELETE"
        deleteColomn.appendChild(deleteButton);
        deleteButton.addEventListener('click', e=>{
            myLibrary.splice(index, 1);
            resetDisplay();
            getAllBooks();
        })
        tableRow.appendChild(deleteColomn);
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