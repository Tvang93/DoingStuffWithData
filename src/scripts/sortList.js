const SortList = (category, list, num1, num2) => {
    switch(category){
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
            list.sort((a, b) => a.firstName.localeCompare(b.firstName))
            .slice(num1-1, num2)
            .forEach(entry => {
                listContainer.appendChild(createH1(entry.id))
                listContainer.appendChild(createH1(entry.firstName))
                listContainer.appendChild(createH1(entry.lastName))
                listContainer.appendChild(createH1(entry.height))
                listContainer.appendChild(createH1(entry.age))
            });
            break;
        case "lastName":
            list.sort((a, b) => a.firstName.localeCompare(b.firstName))
            .slice(num1-1, num2)
            .forEach(entry => {
                listContainer.appendChild(createH1(entry.id))
                listContainer.appendChild(createH1(entry.firstName))
                listContainer.appendChild(createH1(entry.lastName))
                listContainer.appendChild(createH1(entry.height))
                listContainer.appendChild(createH1(entry.age))
            });
            break;
        case "height":
            list.sort((i, j) => i.height - j.height)
            .slice(num1-1, num2)
            .forEach(entry => {
                listContainer.appendChild(createH1(entry.id))
                listContainer.appendChild(createH1(entry.firstName))
                listContainer.appendChild(createH1(entry.lastName))
                listContainer.appendChild(createH1(entry.height))
                listContainer.appendChild(createH1(entry.age))
            });
            break;
        default:
            list.sort((i, j) => i.age - j.age)
            .slice(num1-1, num2)
            .forEach(entry => {
                listContainer.appendChild(createH1(entry.id))
                listContainer.appendChild(createH1(entry.firstName))
                listContainer.appendChild(createH1(entry.lastName))
                listContainer.appendChild(createH1(entry.height))
                listContainer.appendChild(createH1(entry.age))
            });
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