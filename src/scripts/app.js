const dropdownHoverButton = document.getElementById("dropdownHoverButton");
const displayText = document.getElementById("displayText");
const display10 = document.getElementById("display10");
const display20 = document.getElementById("display20");
const display30 = document.getElementById("display30");
const display40 = document.getElementById("display40");
const display50 = document.getElementById("display50");
const displayStartAmount = document.getElementById("displayStartAmount");
const displayEndAmount = document.getElementById("displayEndAmount");
const totalEntries = document.getElementById("totalEntries");

const listContainer = document.getElementById("listContainer");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let peopleList;
let counter1 = 1
let counter2 = 10;
let sortBy = {
    id: true,
    firstName: false,
    LastName: false,
    height: false,
    age: false,
}
let multiplier = 1
let newAddCounter = counter2*multiplier

const fetchData = async() => {
    const promise = await fetch("../data/data.json");
    const data = await promise.json();
    return data
}

const setListbyId = async(num1, num2) => {
    listContainer.innerHTML = "";
    peopleList = await fetchData();
    console.log(peopleList.peopleList);
    let shallowCopy = [...peopleList.peopleList];
    shallowCopy.slice(num1-1, num2).forEach(entry => {
        listContainer.appendChild(createH1(entry.id))
        listContainer.appendChild(createH1(entry.firstName))
        listContainer.appendChild(createH1(entry.lastName))
        listContainer.appendChild(createH1(entry.height))
        listContainer.appendChild(createH1(entry.age))
    });
    totalEntries.innerText = peopleList.peopleList.length;
    displayStartAmount.innerText = counter1;
    if(counter2 > peopleList.peopleList.length){
        displayEndAmount.innerText = peopleList.peopleList.length;
    }else{
        displayEndAmount.innerText = counter2;
    }
}

const createH1 = (text) => {
    let h1 = document.createElement("h1");
    h1.classList = "text-center";
    h1.innerText = text;
    return h1;
}

display10.addEventListener('click', () => {
    SetCounters(1, 10)
})

display20.addEventListener('click', () => {
    SetCounters(2, 20)
})

display30.addEventListener('click', () => {
    SetCounters(3, 30)
})

display40.addEventListener('click', () => {
    SetCounters(4, 40)
})

display50.addEventListener('click', () => {
    SetCounters(5, 50)
})

const SetCounters = (multi, amount) => {
    multiplier = multi;
    displayText.innerText = amount
    counter1 = 1
    counter2 = 10
    newAddCounter = counter2*multiplier
    counter2 *= multiplier
    setListbyId(counter1, counter2);
}


nextBtn.addEventListener('click', () => {
    if(counter2 < totalEntries.innerText){
        counter1 += newAddCounter;
        counter2 += newAddCounter;
        setListbyId(counter1, counter2);
    }
})

prevBtn.addEventListener('click', () => {
    if(counter1 > 1){
        counter1 -= newAddCounter;
        counter2 -= newAddCounter;
        setListbyId(counter1, counter2);
    }
})

console.log("reloaded")
setListbyId(counter1, counter2*multiplier);
