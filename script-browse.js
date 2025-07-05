const searchBar = document.getElementById('searchBar');
const books = document.querySelectorAll('.book');

searchBar.addEventListener('input',() => {
    const searchText = searchBar.value.toLowerCase();

    books.forEach(book => {
        const title = book.querySelector('.book-title').textContent.toLowerCase();
        if (title.includes(searchText)) {
            book.style.display = "block";
        }else{
            book.style.display = "none";
        }
    });
});