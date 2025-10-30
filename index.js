console.log('hello world')
const library = document.querySelector(".library");
const dialog = document.querySelector("dialog");
const addBtn = document.querySelector("dialog + .add");
const closeBtn = document.querySelector("dialog .close")
const form = document.querySelector("form");


addBtn.addEventListener('click', () => {
    dialog.showModal();
})

closeBtn.addEventListener('click', () =>{
    dialog.close();
})

form.addEventListener('submit', (e) => {
   e.preventDefault();
    console.log("Add clicked, form submitted!");
    dialog.close();

})

const myLibrary = [];

  // the constructor
function Book(title, author, page, read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;

    this.info = function(){
        const readStatus = this.read ? "read" : "not yet";
        return `${title} ${author} ${page} pages, ${readStatus} `
    }
}

function addBookToLibrary(){
    const newBook = Book();
    newBook.push()
}


function display(cards){
    for(let i =0; i< cards.length ; i++ ){
        
    }
}