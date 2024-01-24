import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
function List() {
    const [items, setItems] = useState()
    useEffect(() => {
        setItems(null);
        fetch("/get-items").then(res => res.json()).then(result => {
            setItems(result);
        });
      }, ["/get-items"]);
    if(!items) {
        return <></>
    }
    return (<>
    {
        // console.log(items)
        items.list.map((todo) => {
            return <>
                <TodoItem contents= {todo} />
                <br />
            </> })  
    }

    </>);
}

export default List;