import * as React from "react";

export interface TodoItemProps {
    id: string
    detail: string,
    completed: boolean
} // close TodoItemProps interface

export class TodoItem extends React.Component<TodoItemProps, undefined> {
    render() {
        return (
            <div>
                <p> TodoItem </p>
                <p> Id: {this.props.id} </p>
                <p> Status: {this.props.completed} </p>
                <p> Detaul: {this.props.detail} </p>
            </div>
        );
    } // close render
} // close TodoItem class