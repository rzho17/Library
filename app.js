const card = document.querySelector(".card");
const newBook = document.querySelector("#new");
const form = document.querySelector("#form");
const close = document.querySelector("#close");
const submit = document.querySelector("#submit");

// newBook.addEventListener("click", (e) => {
//   if (form.style.display === "none") {
//     form.style.display = "block";
//   } else {
//     form.style.display = "none";
//   }
// });

// close.addEventListener("click", () => {
//   form.style.display = "none";
// });

const harryPotter = {
  title: "Harry Potter",
  author: "JK smth",
  pages: "69",
  read: "not read",
};

const lordOfTheRings = {
  title: "Lord of the Rings",
  author: "JR smth",
  pages: "420",
  read: "not read",
};

const myLibrary = [harryPotter, lordOfTheRings];

function showBook(arr) {
  arr.forEach((element) => {
    const infoCard = document.createElement("div");
    infoCard.style.width = "max-content";
    infoCard.style.height = "max-content";

    card.append(infoCard);

    const values = Object.values(element);
    values.forEach((item) => {
      const info = document.createElement("p");
      console.log(item);
      info.textContent = item;
      infoCard.append(info);
    });
  });
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const newTitle = formData.get("title");
  const newAuthor = formData.get("author");
  const newPages = formData.get("pages");
  const hasRead = formData.get("read");

  const thisBook = new Book(newTitle, newAuthor, newPages, hasRead);

  myLibrary.push(thisBook);
  const newThing = [myLibrary[myLibrary.length - 1]];
  showBook(newThing);
});

// let naruto = new Book("naruto", "guy", "1000", "read");

// myLibrary.push(naruto);

showBook(myLibrary);

function addToLibrary() {}
