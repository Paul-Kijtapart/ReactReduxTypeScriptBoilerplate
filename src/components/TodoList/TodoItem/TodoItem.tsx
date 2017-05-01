import * as React from "react";

// Styles
import "./style.scss";

export interface TodoItemProps {
    id: string
    detail: string,
    completed: boolean,
    deleteItem: any,
    toggleItem: any
} // close TodoItemProps interface

export class TodoItem extends React.Component<TodoItemProps, undefined> {
    constructor(props: TodoItemProps) {
        super(props);
        this.handleOnItemClick = this.handleOnItemClick.bind(this);
        this.handleOnCancelClick = this.handleOnCancelClick.bind(this);
    }

    handleOnItemClick(e: any) {
        const id = this.props.id;
        this.props.toggleItem(id);
    }

    handleOnCancelClick(e: any) {
        const id = this.props.id;
        this.props.deleteItem(id);
    }

    render() {
        const status = this.props.completed;
        return (
            <li
                className="todoItem"
                onClick={(e) => {
                    e.preventDefault();
                    this.handleOnItemClick(e);
                }}
            >
                <p> TodoItem </p>
                <p> Id: {this.props.id} </p>
                <p> Status: {status} </p>
                <p> Detaul: {this.props.detail} </p>
                <span
                    onClick={(e) => {
                        e.preventDefault();
                        this.handleOnCancelClick(e);
                    }}
                >
                    X
                </span>
            </li>
        );
    } // close render
} // close TodoItem class