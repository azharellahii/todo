import { useState } from "react";
import React from "react";
import List from "./List/List"
import "./App.css"
import 'font-awesome/css/font-awesome.min.css';
const App = () => {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([]);
    const onBtnClick = () => {
        if (!input) {
            setTodos([...todos])
        } else {
            setTodos([...todos, input])
            setInput('')
        }
    }

    return (
        <div className="a-container">
            <div className="a-element">
                <h1>Welcome, to ToDo App.</h1>
                <span className="input-field">
                    <label className="label">Add new task..</label>
                    <input className="input"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)} />
                </span>

                <span className="btn-span"><i onClick={onBtnClick} className="a-button fa fa-plus"></i></span>

                <div className="l-container">
                    <List
                        className="lstComp"
                        todos={todos}
                        setTodos={setTodos} />
                </div>
            </div>
        </div>
    )
}
export default App;