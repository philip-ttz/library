const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(Book(title,author,pages,read));
}

Book.prototype.changeReadStatus = function() {
    this.read = !this.read;
}

function display(){
    const main = document.getElementById('main');
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

document.addEventListener('DOMContentLoaded', () => {
    
})