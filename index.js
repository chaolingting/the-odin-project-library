const library = document.querySelector(".library");
// the constructor
function Book(title, author, page, read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
    this.id = crypto.randomUUID();

    this.info = function(){
        const readStatus = this.read ? "read" : "not yet";
        return `${title} ${author} ${page} pages, ${readStatus}, ${id} `
    };


};

const myLibrary = [];


function addBookToLibrary(title, author, page, read){
    const newBook = new Book(title, author, page, read);
    myLibrary.push(newBook);

    createBookCard(newBook);
}



function createBookCard(book){
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card')

        const titleEL = document.createElement('p');
        titleEL.textContent = `${book.title}`

        const authorEL = document.createElement('p');
        authorEL.textContent = `${book.author}`

        const pageEL = document.createElement('p');
        pageEL.textContent = `${book.page} pages`

        const readStatusEL = document.createElement('p');
        readStatusEL.textContent = `${book.read ? "read" : "not yet"}`;
        readStatusEL.addEventListener('click', (event) => {
            book.read = !book.read;
            readStatusEL.textContent = `${book.read ? "read" : "not yet"}`;
        })

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove this book";
        removeBtn.addEventListener('click', function(){
            bookCard.remove();
        });

        bookCard.dataset.bookId = book.id;

        
        bookCard.appendChild(titleEL);
        bookCard.appendChild(authorEL);
        bookCard.appendChild(pageEL);
        bookCard.appendChild(readStatusEL);
        bookCard.appendChild(removeBtn);
        //bookCard.appendChild(bookId);

        library.appendChild(bookCard);
}

function display(){
    
    library.replaceChildren();
    myLibrary.forEach((book,index) => {
        createBookCard(book);
    })
}




//dialog
const dialog = document.querySelector("dialog");
const addBtn = document.querySelector("dialog + .add");
const closeBtn = document.querySelector("dialog .close");

//form
const form = document.querySelector("form");

    addBtn.addEventListener('click', () => {
        dialog.showModal();
    });
    closeBtn.addEventListener('click', () =>{
        dialog.close();
    });

form.addEventListener('submit', (e) => {
    e.preventDefault();
        console.log("Add clicked, form submitted!");
        dialog.close();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const page = document.querySelector('#page').value;
    const read = document.querySelector('#read').checked;


    addBookToLibrary(title, author, page, read);

    form.reset(); 
    dialog.close();

});



addBookToLibrary("1984", "George Orwell", 298, true);
addBookToLibrary("The Lord of the Rings", "J.R.R Tolkien", 1216, true);
addBookToLibrary("Animal Farm", "George Orwell", 141, true);




