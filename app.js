const card = document.querySelector(".card");
const newBook = document.querySelector("#new");
const form = document.querySelector("#form");
const close = document.querySelector("#close");
const formContainer = document.querySelector(".formContainer");
let n = 0;

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

function addToLibrary(arr) {
  arr.forEach((element) => {
    const infoCard = document.createElement("div");
    const closeBtn = document.createElement("button");
    const readBtn = document.createElement("button");

    closeBtn.dataset.attribute = n;
    readBtn.dataset.attribute = n;
    n++;

    closeBtn.textContent = "X";
    closeBtn.value = "remove";
    closeBtn.className = "remove";

    infoCard.append(closeBtn);
    infoCard.className = "bookContent";

    const values = Object.values(element);

    for (let i = 0; i < values.length - 1; i++) {
      const info = document.createElement("p");
      info.textContent = values[i];

      infoCard.append(info);

      readBtn.value = "readStatus";
      readBtn.className = "readStatus";
    }

    if (values[3] === "on" || values[3] == "read") {
      readBtn.textContent = "Read";
      readBtn.style.color = "#47b5ff";
      readBtn.style.borderColor = "#47b5ff";
    } else {
      readBtn.textContent = "Not Read";
      readBtn.style.color = "#06283d";
      readBtn.style.borderColor = "#06283d";
    }

    infoCard.append(readBtn);

    card.append(infoCard);
  });
}

card.addEventListener("click", (e) => {
  if (e.target.value === "remove") {
    myLibrary.splice(e.target.dataset.attribute, 1);
    card.textContent = "";
    n = 0;
    addToLibrary(myLibrary);
  }
});

card.addEventListener("click", (e) => {
  if (e.target.value === "readStatus") {
    if (
      myLibrary[e.target.dataset.attribute].read === "on" ||
      myLibrary[e.target.dataset.attribute].read == "read"
    ) {
      e.target.textContent = "Not Read";
      myLibrary[e.target.dataset.attribute].read = "not read";
      e.target.style.color = "#06283d";
      e.target.style.borderColor = "#06283d";
    } else {
      e.target.textContent = "Read";
      myLibrary[e.target.dataset.attribute].read = "read";
      e.target.style.color = "#47b5ff";
      e.target.style.borderColor = "#47b5ff";
    }
  }
});

close.addEventListener("click", (e) => {
  formContainer.style.display = " none";
});

newBook.addEventListener("click", () => {
  formContainer.style.display = " flex";
});

formContainer.addEventListener("click", (e) => {
  if (e.target.className === "formContainer") {
    formContainer.style.display = "none";
  }
});

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
  addToLibrary(newThing);
  form.reset();
  formContainer.style.display = "none";
});

addToLibrary(myLibrary);
