const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Question 1 : Remove object value from and array of objects
// MAP will change the original array ..
// But this way I remove year, and return a new self-made object
// Could have returned by arrays of 2 with, return [first, last]
const question1 = entrepreneurs.map(({ first, last, ...year }) => {
  return {"first": first, "last": last}
  })
console.log(question1) // my original array has not been changed
console.log(entrepreneurs)


// Question 2 : Change the value year to a new value "age"
var currentYear = new Date().getFullYear()  
const question2 = entrepreneurs.map(({ first, last, ...year }) => {
  var result = currentYear - year.year // WTF le Javascript, year étant un object avec un attribut year
  // sinon impossible d'avoir un integer j'avais une valueur en JSON {"year":1955}
  return {"first": first, "last": last, "age": result}
})
console.log(question2)
console.log(entrepreneurs)


// Question 3 : Remplacer les clefs first & last, par firstName & lastName
const question3 = entrepreneurs.map(({first,last, year }) => {
  return {"firstName": first, "lastName": last, "year": year}
})
console.log(question3)
console.log(entrepreneurs)


// Question 4 : Filtrer dans la liste ceux qui sont nés dans les années 70
const question4 = entrepreneurs.map(el => {
  console.log(el.year)
  if ((el.year > 1969) && (el.year < 1980)) { // conditions ternaires simples pour l'instant
    return el
  }
})
const newArrQuestion4 = question4.filter((a) => a); // removing empty values from the array 
console.log(newArrQuestion4)
console.log(entrepreneurs)
