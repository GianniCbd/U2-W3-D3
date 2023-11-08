function getBooks() {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((data) => displayBooks(data))
    .catch((error) => console.error("Errore nella richiesta:", error));
}

function displayBooks(books) {
  const bookList = document.getElementById("bookList");

  books.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("col-sm-12", "col-md-4", "col-lg-3", "col-12", "mb-4");

    const cardBody = document.createElement("div");
    card.appendChild(cardBody);

    const img = document.createElement("img");
    img.src = book.img;
    img.classList.add("card-img-top");
    cardBody.appendChild(img);

    const h4 = document.createElement("h4");
    h4.textContent = book.title;
    cardBody.appendChild(h4);

    const p = document.createElement("p");
    p.textContent = "categoria: " + book.category;
    cardBody.appendChild(p);

    const button = document.createElement("button");
    button.classList.add("btn", "btn-danger");
    button.textContent = "scarta";
    cardBody.appendChild(button);

    bookList.appendChild(card);
  });
}

getBooks();
