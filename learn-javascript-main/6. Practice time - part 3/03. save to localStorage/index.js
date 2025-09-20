// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out
let imiona=["Maciej"]
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("imiona") )
if (leadsFromLocalStorage) {
    imiona=leadsFromLocalStorage
}
imiona.push("Anna")

localStorage.setItem("imiona", JSON.stringify(imiona))

console.log(imiona)
