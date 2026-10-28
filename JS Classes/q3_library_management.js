class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`${this.title} has been issued.`);
        } else {
            console.log(`${this.title} is already issued.`);
        }
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(`${this.title} has been returned.`);
        } else {
            console.log(`${this.title} was not issued.`);
        }
    }

    displayDetails() {
        console.log(`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`);
    }
}

const books = [
    new Book("JavaScript Basics", "John", "101"),
    new Book("Python Programming", "Smith", "102"),
    new Book("Data Structures", "Robert", "103"),
    new Book("Machine Learning", "David", "104")
];

function displayAvailableBooks() {
    console.log("\nAvailable Books:");

    const availableBooks = books.filter(book => !book.isIssued);

    if (availableBooks.length === 0) {
        console.log("No books are available.");
    } else {
        availableBooks.forEach(book => book.displayDetails());
    }
}

function issueBookByISBN(isbn) {
    const book = books.find(book => book.ISBN === isbn);

    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found.");
    }
}

displayAvailableBooks();

issueBookByISBN("102");

displayAvailableBooks();

const book = books.find(book => book.ISBN === "102");
book.returnBook();

displayAvailableBooks();
