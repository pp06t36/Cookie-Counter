let saveEl = document.getElementById("save-el") // pass in arguments
let countEl = document.getElementById("count-el") // pass in arguments

let count = 0

console.log(countEl)
console.log(saveEl)

function increment () {
    count += 1
    countEl.textContent = count
    console.log(count)
}


function save() {
    let countStr = count + " " + "-"
     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // saveEl.innerText += countStr
    saveEl.textContent += countStr
     // NB: Make sure to not delete the existing content of the paragraph
     countEl.textContent = 0
     count = 0
}




