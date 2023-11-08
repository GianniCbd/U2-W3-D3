window.onload = function () {
  getBooks();
};

function getBooks() {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((data) => displayBooks(data))
    .catch((error) => console.error("Error:", error));
}

function displayBooks(books) {
  const bookList = document.getElementById("bookList");

  books.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("col-sm-12", "col-md-4", "col-lg-3", "col-12", "mb-4");
    // cardBody
    const cardBody = document.createElement("div");
    cardBody.className = "text-center";
    card.appendChild(cardBody);
    // img
    const img = document.createElement("img");
    img.src = book.img;

    img.classList.add("card-img-top");
    cardBody.appendChild(img);
    // titolo
    const h4 = document.createElement("h4");
    h4.textContent = book.title;
    cardBody.appendChild(h4);
    // categoria
    const p = document.createElement("p");
    p.textContent = "Price: " + book.price;
    cardBody.appendChild(p);
    // bottone scarta
    const button = document.createElement("button");
    button.classList.add("btn", "btn-danger");
    button.textContent = "scarta";
    button.onclick = function () {
      cardBody.remove();
    };
    cardBody.appendChild(button);
    //aggiungi al carrello
    const addToCartButton = document.createElement("button2");
    addToCartButton.classList.add("btn", "btn-success");
    addToCartButton.textContent = "Aggiungi al carrello";
    addToCartButton.onclick = function () {
      addToCart(book);
    };
    cardBody.appendChild(addToCartButton);

    bookList.appendChild(card);
  });
}
