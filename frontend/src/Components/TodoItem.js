

function TodoItem(props) {
    return (<>
        <input type="checkbox" />
        <span> { props.contents }</span>
    </>);
}

export default TodoItem;