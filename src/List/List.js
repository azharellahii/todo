import React from "react";
import "./List.css"
const List = ({ todos, setTodos }) => {
    const deletedItems = (e) => {
        setTodos(todos.filter((todo, index) => {
            return (
                index !== parseInt(e.target.id)
            )
        }))
    }

    const renderedList = todos.map((todo, index) => {
        return (
            <div className="l-insider" key={index}>
                <span className="list">{todo}</span>
                <i id={index} onClick={deletedItems} className="dltBtn fa fa-trash"></i>
            </div>
        )
    })
    return (
        <div>{renderedList}</div>
    )
}
export default List;
