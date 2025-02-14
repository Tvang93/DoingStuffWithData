const SortList = (list, num1, num2) => {
    switch(sortCategory){
        case "id":
            list.slice(num1-1, num2).forEach(entry => {
                listContainer.appendChild(createH1(entry.id))
                listContainer.appendChild(createH1(entry.firstName))
                listContainer.appendChild(createH1(entry.lastName))
                listContainer.appendChild(createH1(entry.height))
                listContainer.appendChild(createH1(entry.age))
            });
            break;
        case "firstName":
            
            break;
        case "lastName":
            break;
        case "height":
            break;
        default:
            break;
    }
}

const createH1 = (text) => {
    let h1 = document.createElement("h1");
    h1.classList = "text-center";
    h1.innerText = text;
    return h1;
}


export {SortList}