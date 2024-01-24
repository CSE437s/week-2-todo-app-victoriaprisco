import "../App"
import { addNewItem } from "../items";
import List from "./List"
import render from 'react'

function NewTodo() { 
    const submitHandler = (e) => {
        e.preventDefault();
        var inputted_value = {b: e.target.itemname.value}
        console.log("sending ", inputted_value)
        fetch("/post-items", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputted_value)
        }).then((res) => res.json)
    }
    return (<>
        <p>Today I have to...</p>
        <form onSubmit={submitHandler}>
            <input type="text" id="itemname"></input>
        </form>
    </>)
}
export default NewTodo;