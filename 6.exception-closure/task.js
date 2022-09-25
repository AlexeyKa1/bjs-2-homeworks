//Задача 1

function parseCount(parseNumber) {
    let number = Number.parseInt(parseNumber, 10);
    
    if (isNaN(number)) {
        throw new Error("Невалидное значение");
    }

    return number;
}

function validateCount (unParseNumber) {
    try {
        return parseCount(unParseNumber);
    } catch (error) {
        return error;
    }
}

//Задание 2
class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
  
      if ((a+b) < c) {
        throw new Error('Треугольник с такими сторонами не существует');
      } 
      if ((a+c) < b) {
          throw new Error('Треугольник с такими сторонами не существует');
      } 
      if ((b+c) < a) {
          throw new Error('Треугольник с такими сторонами не существует');
      } 
    }
  
    getPerimeter() {
      let perimeter = this.a + this.b + this.c;
      return perimeter;
    }
  
    getArea() {
      let S = (this.a + this.b + this.c)/2;
      let area = Math.sqrt(S * (S - this.a) * (S - this.b) * (S - this.c));
      return Number(area.toFixed(3));
    }
  
  }
  
  const errorText = 'Ошибка! Треугольник не существует';
  
  const errorTriangle = {
    
      getPerimeter() {
          return errorText;
        },
    
      getArea() {
      return errorText;
    },
  };
  
  const getTriangle = (a, b, c) => {
    try {
      return new Triangle(a, b, c);
    } catch (err) {
      return errorTriangle;
    }
  };