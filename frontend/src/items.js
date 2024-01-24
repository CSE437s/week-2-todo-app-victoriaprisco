const items = []

export function addNewItem (item){
    items.push(item)
    return items;
}

export function getItems(){
    return items;
}
