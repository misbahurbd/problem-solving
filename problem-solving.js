// Task-1: Array Filtering And Mapping
const persons = [
  { name: "John", age: 25, gender: "male" },
  { name: "Jane", age: 22, gender: "Female" },
  { name: "Mike", age: 30, gender: "male" },
  { name: "Sara", age: 28, gender: "female" },
]

const filteredPersonNames = array => {
  const allFemale = array.filter(person => {
    const gender = person.gender.toLowerCase()
    return gender !== "female"
  })

  const femaleNames = allFemale.map(female => female.name)

  return femaleNames
}

console.log(filteredPersonNames(persons))

// Task-2: Object Manipulation
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
]

const getBookTitles = array => {
  const bookTitles = array.map(book => book.title)
  return bookTitles
}

console.log(getBookTitles(books))

// Task-3: Function Composition
const squareNumber = num => {
  return num * num
}

const doubleNumber = num => {
  return num * 2
}

const addFive = num => {
  return num + 5
}

const composeFunction = num => {
  return addFive(doubleNumber(squareNumber(num)))
}

console.log(composeFunction(5))

// Task-4: Sorting Objects
const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2020 },
  { make: "Ford", model: "Mustang", year: 2016 },
]

const sortByYear = carArray => {
  const cars = carArray.sort((a, b) => a.year - b.year)
  return cars
}

console.log(sortByYear(cars))

// Task-5: Find And Modify
const personArray = [
  { name: "John", age: 25, gender: "male" },
  { name: "Jane", age: 22, gender: "female" },
  { name: "Mike", age: 30, gender: "male" },
]

const modifyPersonAge = (array, name, newAge) => {
  const person = array.find(
    person => person.name.toLowerCase() === name.toLowerCase()
  )

  if (person) {
    person.age = newAge
  }

  return array
}

console.log(modifyPersonAge(personArray, "Jane", 28))
