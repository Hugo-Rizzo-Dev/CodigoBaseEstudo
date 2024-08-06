//Get the page title
console.log(document.title)

//Acess the element by ID
const guest = document.getElementById("guest-2")

console.log(guest)


//Shows properties of the object
console.dir(guest)


//Access element with class
const guetsByClass = document.getElementsByClassName("guest")
console.log(guetsByClass)

//Display the first element in the list
console.log(guetsByClass.item(0))
console.log(guetsByClass[1])

//Select list of elements by tag
const guestsTag = document.getElementsByTagName("li")
console.log(guestsTag)



