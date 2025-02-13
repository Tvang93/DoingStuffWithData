const dropdownHoverButton = document.getElementById("dropdownHoverButton");
const display10 = document.getElementById("display10");
const display20 = document.getElementById("display20");
const display30 = document.getElementById("display30");
const display40 = document.getElementById("display40");
const display50 = document.getElementById("display50");
const displayStartAmount = document.getElementById("displayStartAmount");
const displayFinalAmount = document.getElementById("displayFinalAmount");
const totalEntries = document.getElementById("totalEntries");

const listContainer = document.getElementById("listContainer");

let peopleList;

const fetchData = async() => {
    const promise = await fetch("../data/data.json");
    const data = await promise.json();
    return data
}

const setListbyId = async(num1, num2) => {
    peopleList = await fetchData()
    console.log(peopleList.peopleList)
    let shallowCopy = [...peopleList.peopleList]
    shallowCopy.slice(num1-1, num2).forEach(entry => {
        listContainer.appendChild(createH1(entry.id))
        listContainer.appendChild(createH1(entry.firstName))
        listContainer.appendChild(createH1(entry.lastName))
        listContainer.appendChild(createH1(entry.height))
        listContainer.appendChild(createH1(entry.age))
    })
    totalEntries.innerText = peopleList.peopleList.length
}

const createH1 = (text) => {
    let h1 = document.createElement("h1");
    h1.classList = "text-center";
    h1.innerText = text;
    return h1;
}

display10.addEventListener('click', () => {

})



setListbyId(1, 10);
