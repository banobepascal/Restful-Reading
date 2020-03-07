export class Book {
  constructor(title, author, pages, description, currentPage, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.description = description;
    this.currentPage = currentPage;
    this.read = read;
  }

  readBook(page) {
    if (page < 1 || page > this.pages) {
      return 0;
    } else if (page >= 1 && page < this.pages) {
      this.currentPage = page;
      return 1;
    } else if (page == this.pages) {
      this.currentPage = page;
      this.read = true;
      return 1;
    }
  }
}
let book1 = new Book(
  "Star Wars",
  "Jon Fraveu",
  240,
  "Fighting for peace in the galaxy",
  100
);

let book2 = new Book(
  "Avengers",
  "Robert Downey",
  458,
  "Power for infinity stones",
  300
);

let book3 = new Book(
  "Alita battle angel",
  "James Camerron",
  350,
  "A fallen Angle from underworld",
  350
);

export const books = ["star wars", "james", "action", 100, 20, true];
