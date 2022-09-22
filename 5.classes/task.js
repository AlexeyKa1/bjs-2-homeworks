/*-------------задача 1-------------*/

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
     }
  
  
    fix() {
      this.state *= 1.5;
    }
  
  
    set state(number) {
      if (number < 0) {
          this._state = 0;
      }
      else if (number > 100) {
          this._state = 100;
      }
      else {
          this._state = number;
      }
    }
  
  
    get state() {
      return this._state;
    }
  }
  
  
  class Magazine extends PrintEditionItem {
      constructor(name, releaseDate, pagesCount) {
          super(name, releaseDate, pagesCount);
          this.type = 'magazine';
      }
  }
  
  class Book extends PrintEditionItem {
      constructor(author, name, releaseDate, pagesCount) {
          super(name, releaseDate, pagesCount);
          this.type = 'book';
          this.author = author;
      }
  }
  
  
  class NovelBook extends Book {
      constructor(author, name, releaseDate, pagesCount) {
          super(author, name, releaseDate, pagesCount);
          this.type = 'novel';
      }
  }
  
  
  class FantasticBook extends Book {
      constructor(author, name, releaseDate, pagesCount) {
          super(author, name, releaseDate, pagesCount);
          this.type = 'fantastic';
      }
  }
  
  
  class DetectiveBook extends Book {
      constructor(author, name, releaseDate, pagesCount) {
          super(author, name, releaseDate, pagesCount);
          this.type = 'detective';
      }
  }
  
  /*-------------задача 2-------------*/
  
  class Library {
      constructor(name) {
          this.name = name;
          this.books = [];
      }
  
      addBook(book) {
        if (book.state > 30) {
          this.books.push(book);
        }
      }
  
  
      findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
          if (this.books[i][type]===value) return this.books[i];
        }
        return null;
      }
  
  
      giveBookByName(bookName) {
          for (let i = 0; i < this.books.length; i++) {
              if (this.books[i].name === bookName) return this.books.splice([i],1)[0];
          }
          return null;
      }
  }
  
  /*-------------задача 3-------------*/

  class Student {
      constructor(name, secondname) {
          this.name = name;
          this.secondname = secondname;
      }
  
    addMark(mark, subjectName) {
      if (mark < 1 && mark > 5) {
          return "Ошибка";
        }
  
      else if (this.marks === undefined) {
       this.marks = [mark, subjectName];
      }
      else {
        this.marks.push(mark, subjectName);
      }
    }
  
  
    getAverageBySubject(subjectName) {
      let sum = 0;
      let marksAmount = 0;
      for (let i = 1; i < this.marks.length; i +=2) {
        if (subjectName == this.marks[i]) {
          sum += this.marks[i-1];
          marksAmount ++;
        }
        else {
          marksAmount = marksAmount;
        }
      }
        if (sum == 0) {
          return "Ошибка"
        }
        else {
          return sum / marksAmount;
        }
    }
  
  
    getAverage() {
        let sum = 0;
        for (let i = 1; i < this.marks.length; i +=2) {
          sum += this.marks[i-1];
        }
        return sum/(this.marks.length/2);  
     }
  
  }
  
  