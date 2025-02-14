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


export {SortList}