import * as React from "react";

// Components and their interfaces 
import { TodoItem, TodoItemProps } from "./TodoItem";
import { TodoMenu, TodoMenuProps } from "./TodoMenu";

export interface TodoListProps {
    todoList: Array<TodoItemProps>
} // close TodoListProps interface

export class TodoList extends React.Component<TodoListProps, undefined> {
    render() {
        console.log(this.props.todoList);
        return (
            <div className="todoList">
                <p> TodoList </p>
            </div>
        )
    } // close render
} // close TodoList class