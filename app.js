const card = document.querySelector(".card");

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

myLibrary.forEach((element) => {
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

function Book() {}

function addToLibrary() {}
