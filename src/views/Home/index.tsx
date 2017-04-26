import * as React from "react";

// Components
import { TodoList, TodoListProps } from "../../components/TodoList";

export interface HomeProps {
    todoList: TodoListProps
} // close HomeProps interface

export class Home extends React.Component<HomeProps, undefined> {
    render() {
        console.log(this.props.todoList);
        return (
            <div className="home">
                <p> Home </p>
            </div>
        );
    } // close render
} // close Home class