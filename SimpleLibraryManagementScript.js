
class Library{

    constructor() {
        this.bookList = [];
        this.userList = [];
        this.issueBookList =[];
    }

    addBook(bookName, bookAuther){
        let book = {name: bookName, auther: bookAuther};
        this.bookList.push(book)
        return book;
    }
    addUser(userName, userAge){
        let user = {name: userName, age: userAge};
        this.userList.push(user)
        return user;
    }

    getBookList(){
        return this.bookList;
    }
    getUserList(){
        return this.userList;
    }
    getIssueBook(){
        return this.issueBookList ;
    }

    issueBook(bookName, userName){
        let selectedBook = this.bookList.find((book)=> book.name === bookName );

        let selectedUser = this.userList.find((user)=> user.name === userName );

        let issueEntry = {book: selectedBook, user: selectedUser};
        this.issueBookList.push(issueEntry);
        return issueEntry;
    }

    returnBook(bookName, userName){
        let selectedBook = this.bookList.find((book)=> book.name === bookName );

        let selectedUser = this.userList.find((user)=> user.name === userName );

        let removeEntry = {book: selectedBook, user: selectedUser};
        this.issueBookList.pop(removeEntry);
        return removeEntry;
    }


}
