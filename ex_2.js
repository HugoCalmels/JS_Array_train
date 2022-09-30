const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


// Question 1 : Sors moi la liste de tous les livres du CDI
const question1 = books.map(el => {
  return {"title": el.title}
})
console.log(question1)
console.log(books)


// Question 2 : Sors moi la liste de tous les livres du CDI
const question2 = books.map(el => {
  if (el.rented > 0)
    return el
  else if (el.rented == 0) {
    el.remove
  }
})
console.log(question2)
console.log(books)


// Question 3 :Quel est le livre le moins emprunté ?
const question3 = books.sort((a, b) => a.rented - b.rented)[0];
console.log(question3)

// Question 3 :Quel est le livre le moins emprunté ?
const question4 = books.sort((a, b) => b.rented - a.rented)[0];
console.log(question4)


// Question 5: Supprime le livre avec l'ID : 133712
const question5 = books.map(el => {
  if (el.id === 133712)
    el.remove
  else return el
})
console.log(question5)
console.log(books) // original array untouched, good.