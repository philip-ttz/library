const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
};

function display(){
    const main = document.getElementById('book-container');
    main.innerHTML = '';

    myLibrary.forEach((book, index) =>{
        const card=document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <h3 class="book-title">${book.title}</h3>
            <p class="book-info"><strong>Author:</strong> ${book.author}</p>
            <p class="book-info"><strong>Pages:</strong> ${book.pages}</p>
            <p class="book-info"><strong>Status:</strong> ${book.read ? 'Read ✓' : 'Unread ✗'}</p>
            <div class="btn-group">
                <button class="toggle-btn" data-index="${index}">Toggle Status</button>
                <button class="remove-btn" data-index="${index}">Remove</button>
            </div>
        `;
        main.appendChild(card);
    })
}

const game_modal= document.querySelector(".game-modal");
const modal_popup_button= document.querySelector(".boton-elegante");
const cancel = document.querySelector("#cancel-btn");
const bookform =document.getElementById('book-form');
document.addEventListener('DOMContentLoaded', () => {
    modal_popup_button.addEventListener("click", () => {
        game_modal.classList.add("show");
    })
    cancel.addEventListener("click", () => {
        game_modal.classList.remove("show");
    })

    bookform.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = parseInt(document.getElementById('pages').value);
        const read = document.getElementById('read').checked;

        addBookToLibrary(title, author, pages, read);
        display();
        game_modal.classList.remove("show");
        e.target.reset();
    });
    document.getElementById('book-container').addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        
        if (e.target.classList.contains('remove-btn')) {
            myLibrary.splice(index, 1);
            display();
        }
        
        if (e.target.classList.contains('toggle-btn')) {
            myLibrary[index].toggleRead();
            display();
        }
    });
})