// const card = document.querySelector(".card");
// const newBook = document.querySelector("#new");
// const form = document.querySelector("#form");
// const close = document.querySelector("#close");
// const submit = document.querySelector("#submit");
// let i = 0;

// // newBook.addEventListener("click", (e) => {
// //   if (form.style.display === "none") {
// //     form.style.display = "block";
// //   } else {
// //     form.style.display = "none";
// //   }
// // });

// // close.addEventListener("click", () => {
// //   form.style.display = "none";
// // });

// const harryPotter = {
//   title: "Harry Potter",
//   author: "JK smth",
//   pages: "69",
//   read: "not read",
// };

// const lordOfTheRings = {
//   title: "Lord of the Rings",
//   author: "JR smth",
//   pages: "420",
//   read: "not read",
// };

// const myLibrary = [harryPotter, lordOfTheRings];

// function showBook(arr) {
//   arr.forEach((element) => {
//     const infoCard = document.createElement("div");
//     const closeBtn = document.createElement("button");
//     const readBtn = document.createElement("button");

//     readBtn.style.width = "3rem";
//     // readBtn.style.height = "rem";

//     closeBtn.textContent = "X";
//     closeBtn.style.width = "2rem";
//     closeBtn.style.height = "2rem";

//     infoCard.style.width = "max-content";
//     infoCard.style.height = "max-content";

//     infoCard.append(closeBtn);

//     card.append(infoCard);

//     const values = Object.values(element);

//     values.forEach((item) => {
//       const info = document.createElement("p");
//       //   console.log(item);

//       //   if (item === "on") {
//       //     readBtn.setAttribute("data-read-status", "on");
//       //     //need to fix it so each data-attribute is given a unique one cuz it just keeps deleting the
//       //     //final item in the array list
//       //     // readBtn.setAttribute("data-attribute", myLibrary.length - 1);
//       //     readBtn.dataset.attribute = i;
//       //     i++;
//       //     readBtn.style.backgroundColor = "green";
//       //     item = "read";
//       //     info.textContent = item;
//       //   } else if (item === null || item === "not read") {
//       //     readBtn.setAttribute("data-read-status", "off");
//       //     // readBtn.setAttribute("data-attribute", myLibrary.length - 1);
//       //     readBtn.dataset.attribute = i;
//       //     i++;
//       //     readBtn.style.backgroundColor = "red";
//       //     item = "not read";
//       //   }

//       info.textContent = item;

//       //need to set unique id to each close button
//       //   closeBtn.setAttribute("data-attribute", i);
//       //   closeBtn.dataset.attribute = i;
//       info.append(readBtn);
//       infoCard.append(info);
//     });

//     infoCard.dataset.attribute = i;
//     i++;

//     if (values[3] === "on") {
//       element.read = "read";
//     } else {
//       element.read = "not read";
//     }

//     readBtn.textContent = element.read;

//     console.log(values);

//     closeBtn.addEventListener("click", (e) => {
//       //   myLibrary.splice(e.target.getAttribute("data-attribute"), 1);
//       card.textContent = "";

//       delete infoCard.dataset.attribute;
//       let i = 0;

//       myLibrary.forEach(() => {
//         infoCard.dataset.attribute = i;
//         i++;
//       });

//       showBook(myLibrary);
//     });

//     // readBtn.addEventListener("click", (e) => {
//     //   if (e.target.getAttribute("data-read-status") === "on") {
//     //     readBtn.setAttribute("data-read-status", "off");

//     //     myLibrary[e.target.getAttribute("data-attribute")].read = "not read";

//     //     readBtn.textContent =
//     //       myLibrary[e.target.getAttribute("data-attribute")].read;

//     //     readBtn.style.backgroundColor = "red";
//     //     console.log("hola");
//     //   } else if (e.target.getAttribute("data-read-status") === "off") {
//     //     readBtn.setAttribute("data-read-status", "on");

//     //     myLibrary[e.target.getAttribute("data-attribute")].read = "read";

//     //     readBtn.textContent =
//     //       myLibrary[e.target.getAttribute("data-attribute")].read;

//     //     readBtn.style.backgroundColor = "green";
//     //     // readBtn.textContent = "read";
//     //     console.log("byeee");
//     //   }
//     // });
//   });
// }

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);
//   const newTitle = formData.get("title");
//   const newAuthor = formData.get("author");
//   const newPages = formData.get("pages");
//   const hasRead = formData.get("read");

//   const thisBook = new Book(newTitle, newAuthor, newPages, hasRead);

//   myLibrary.push(thisBook);
//   const newThing = [myLibrary[myLibrary.length - 1]];
//   showBook(newThing);
// });

// // let naruto = new Book("naruto", "guy", "1000", "read");

// // myLibrary.push(naruto);

// showBook(myLibrary);

// function addToLibrary() {}

const card = document.querySelector(".card");
const newBook = document.querySelector("#new");
const form = document.querySelector("#form");
const close = document.querySelector("#close");
const submit = document.querySelector("#submit");
let i = 0;

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
let n = 0;

function showBook(arr) {
  arr.forEach((element) => {
    const infoCard = document.createElement("div");
    const closeBtn = document.createElement("button");
    const readBtn = document.createElement("button");

    closeBtn.dataset.attribute = n;
    n++;

    closeBtn.textContent = "X";
    closeBtn.value = "remove";

    infoCard.append(closeBtn);

    const values = Object.values(element);

    for (let i = 0; i < values.length - 1; i++) {
      const info = document.createElement("p");
      info.textContent = values[i];

      infoCard.append(info);
      readBtn.textContent = values[3];
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
    showBook(myLibrary);
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
  showBook(newThing);
});

showBook(myLibrary);

function addToLibrary() {}
