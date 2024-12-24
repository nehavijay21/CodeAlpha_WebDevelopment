const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", status: "Available" },
  { title: "Sapiens", author: "Yuval Noah Harari", category: "History", status: "Borrowed" },
  { title: "The Silent Patient", author: "Alex Michaelides", category: "Mystery", status: "Available" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", status: "Available" },
    { title: "1984", author: "George Orwell", category: "Science", status: "Borrowed" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Fiction", status: "Available" },
    { title: "Becoming", author: "Michelle Obama", category: "Non-Fiction", status: "Borrowed" },
    { title: "Educated", author: "Tara Westover", category: "Non-Fiction", status: "Available" },
    { title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", status: "Available" },
    { title: "The Book Thief", author: "Markus Zusak", category: "Fiction", status: "Borrowed" }
];

const history = [
  { title: "Sapiens", borrowedBy: "John Doe", dateBorrowed: "2024-12-01", dateReturned: "2024-12-10" },
];

const bookList = document.getElementById('bookList');
const historyList = document.getElementById('historyList');
const search = document.getElementById('search');
const categoryFilter = document.getElementById('categoryFilter');

function renderBooks() {
  const searchTerm = search.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  bookList.innerHTML = '';
  books.filter(book => 
      (book.title.toLowerCase().includes(searchTerm) || 
       book.author.toLowerCase().includes(searchTerm)) &&
      (selectedCategory === '' || book.category === selectedCategory)
  ).forEach(book => {
      const row = `<tr>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.category}</td>
          <td>${book.status}</td>
      </tr>`;
      bookList.innerHTML += row;
  });
}

function renderHistory() {
  historyList.innerHTML = '';
  history.forEach(entry => {
      const row = `<tr>
          <td>${entry.title}</td>
          <td>${entry.borrowedBy}</td>
          <td>${entry.dateBorrowed}</td>
          <td>${entry.dateReturned || 'Not Returned'}</td>
      </tr>`;
      historyList.innerHTML += row;
  });
}

search.addEventListener('input', renderBooks);
categoryFilter.addEventListener('change', renderBooks);

renderBooks();
renderHistory();
